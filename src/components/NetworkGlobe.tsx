import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import globeDots from "@/data/globe-dots.json";
import {
  Cpu,
  Server,
  Zap,
  Shield,
  Globe2,
  Radio,
  Database,
  Users,
  MapPin,
  Maximize2,
} from "lucide-react";
import singaporeBg from "@/assets/locations/singapore.jpg";
import indiaBg from "@/assets/locations/india.jpg";
import germanyBg from "@/assets/locations/germany.jpg";
import usaBg from "@/assets/locations/usa.jpg";
import flagSG from "@/assets/flags/singapore.png";
import flagIN from "@/assets/flags/india.png";
import flagDE from "@/assets/flags/germany.png";
import flagUS from "@/assets/flags/usa.png";

export interface DatacenterLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  flag: string;
  bg: string;
  lat: number;
  lon: number;
  cpus: string[];
  uplink: string;
  popular?: boolean;
  tagline: string;
  calloutNote: string;
}

const DATACENTERS: DatacenterLocation[] = [
  {
    id: "india",
    name: "India",
    city: "Mumbai",
    country: "India",
    flag: flagIN,
    bg: indiaBg,
    lat: 19.076,
    lon: 72.877,
    cpus: ["AMD Ryzen 9950X", "Intel Gold 6154"],
    uplink: "10 Gbps Direct",
    popular: true,
    tagline: "Primary Asian Gaming Hub",
    calloutNote: "Compute close to South Asian players for zero packet jitter.",
  },
  {
    id: "singapore",
    name: "Singapore",
    city: "Singapore",
    country: "Singapore",
    flag: flagSG,
    bg: singaporeBg,
    lat: 1.352,
    lon: 103.82,
    cpus: ["AMD EPYC Enterprise", "Intel Haswell"],
    uplink: "10 Gbps Tier-1",
    tagline: "Southeast Asia Gateway",
    calloutNote: "Direct submarine cable routing to Indonesia, Malaysia & SEA.",
  },
  {
    id: "germany",
    name: "Germany",
    city: "Frankfurt",
    country: "Germany",
    flag: flagDE,
    bg: germanyBg,
    lat: 50.11,
    lon: 8.68,
    cpus: ["AMD EPYC 7763", "Intel Gold 6150"],
    uplink: "20 Gbps Transit",
    tagline: "European Core Backbone",
    calloutNote: "DE-CIX peering connects 800+ European networks directly.",
  },
  {
    id: "usa",
    name: "USA — California",
    city: "San Jose",
    country: "United States",
    flag: flagUS,
    bg: usaBg,
    lat: 37.338,
    lon: -121.886,
    cpus: ["AMD EPYC 7413", "Intel Xeon E5"],
    uplink: "10 Gbps Anycast",
    tagline: "Americas Pacific Core",
    calloutNote: "Equinix Silicon Valley datacenter with redundant 100G uplinks.",
  },
];

// Network connection routes between hubs
const ROUTES: [string, string][] = [
  ["india", "singapore"],
  ["singapore", "germany"],
  ["germany", "usa"],
  ["usa", "india"],
  ["india", "germany"],
];

function latLonTo3D(lat: number, lon: number, radius: number): [number, number, number] {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const x = radius * Math.cos(latRad) * Math.sin(lonRad);
  const y = -radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.cos(lonRad);
  return [x, y, z];
}

export function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Rotation state in radians
  const rotYRef = useRef<number>(-1.3);
  const rotXRef = useRef<number>(0.28);
  const targetRotYRef = useRef<number | null>(null);
  const targetRotXRef = useRef<number | null>(null);

  // Dragging state
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Projected screen positions and box layout for visible nodes
  const [nodePositions, setNodePositions] = useState<{
    [id: string]: {
      x: number;
      y: number;
      visible: boolean;
      z: number;
      boxX: number;
      boxY: number;
      isRight: boolean;
    };
  }>({});

  const [activeLocationId, setActiveLocationId] = useState<string>("india");
  const [hoveredLocationId, setHoveredLocationId] = useState<string | null>(null);

  // Focus on a specific location with smooth rotation
  const focusLocation = useCallback((id: string) => {
    const loc = DATACENTERS.find((d) => d.id === id);
    if (!loc) return;
    setActiveLocationId(id);

    const targetY = -((loc.lon * Math.PI) / 180);
    const targetX = ((loc.lat * Math.PI) / 180) * 0.75;

    let currentY = rotYRef.current;
    const diffY = ((targetY - currentY + Math.PI) % (Math.PI * 2)) - Math.PI;
    targetRotYRef.current = currentY + diffY;
    targetRotXRef.current = Math.max(-0.6, Math.min(0.6, targetX));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let time = 0;

    // Pre-calculate 3D unit coordinates for all land dots
    const dots3D: [number, number, number][] = (globeDots as [number, number][]).map(([lat, lon]) =>
      latLonTo3D(lat, lon, 1)
    );

    // Datacenter 3D unit coords
    const nodes3D: { [id: string]: [number, number, number] } = {};
    DATACENTERS.forEach((dc) => {
      nodes3D[dc.id] = latLonTo3D(dc.lat, dc.lon, 1);
    });

    const render = () => {
      time += 0.015;

      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;

      if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Globe dimensions
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.38;
      const fov = 700;

      // Handle smooth rotation physics
      if (targetRotYRef.current !== null && targetRotXRef.current !== null) {
        rotYRef.current += (targetRotYRef.current - rotYRef.current) * 0.06;
        rotXRef.current += (targetRotXRef.current - rotXRef.current) * 0.06;

        if (
          Math.abs(targetRotYRef.current - rotYRef.current) < 0.002 &&
          Math.abs(targetRotXRef.current - rotXRef.current) < 0.002
        ) {
          targetRotYRef.current = null;
          targetRotXRef.current = null;
        }
      } else if (!isDraggingRef.current) {
        // Inertia damping
        rotYRef.current += velocityRef.current.y;
        rotXRef.current += velocityRef.current.x;

        velocityRef.current.y *= 0.94;
        velocityRef.current.x *= 0.94;

        // Auto rotation when velocity is near zero
        if (Math.abs(velocityRef.current.y) < 0.001) {
          rotYRef.current += 0.0022; // gentle smooth orbit
        }
      }

      // Clamp X rotation (tilt) so globe doesn't flip
      rotXRef.current = Math.max(-0.65, Math.min(0.65, rotXRef.current));

      const cosY = Math.cos(rotYRef.current);
      const sinY = Math.sin(rotYRef.current);
      const cosX = Math.cos(rotXRef.current);
      const sinX = Math.sin(rotXRef.current);

      // Helper to project 3D point (unit sphere) onto screen
      const project = (
        x0: number,
        y0: number,
        z0: number,
        rScale: number = 1
      ): { sx: number; sy: number; sz: number; scale: number; visible: boolean } => {
        const r = radius * rScale;
        const px = x0 * r;
        const py = y0 * r;
        const pz = z0 * r;

        // Rotate Y
        const x1 = px * cosY - pz * sinY;
        const z1 = pz * cosY + px * sinY;

        // Rotate X
        const y2 = py * cosX - z1 * sinX;
        const z2 = z1 * cosX + py * sinX;

        // Perspective
        const scale = fov / (fov + z2);
        const sx = centerX + x1 * scale;
        const sy = centerY + y2 * scale;

        return { sx, sy, sz: z2, scale, visible: z2 > -radius * 0.15 };
      };

      // ── 1. Atmosphere Back Glow ──
      const atmGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.7,
        centerX,
        centerY,
        radius * 1.18
      );
      atmGrad.addColorStop(0, "rgba(3, 155, 229, 0.05)");
      atmGrad.addColorStop(0.7, "rgba(56, 189, 248, 0.08)");
      atmGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = atmGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.18, 0, Math.PI * 2);
      ctx.fill();

      // ── 2. Globe Dark Base Sphere with Subtle Depth Vignette ──
      const sphereGrad = ctx.createRadialGradient(
        centerX - radius * 0.25,
        centerY - radius * 0.3,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      sphereGrad.addColorStop(0, "#0c0e14");
      sphereGrad.addColorStop(0.75, "#07080b");
      sphereGrad.addColorStop(1, "#030406");
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // ── 3. Wireframe Latitude & Longitude Grid (Faint Architectural) ──
      ctx.lineWidth = 1;
      const lats = [-45, -20, 0, 20, 45, 65];
      lats.forEach((lat) => {
        ctx.beginPath();
        let first = true;
        for (let lon = -180; lon <= 180; lon += 6) {
          const [uX, uY, uZ] = latLonTo3D(lat, lon, 1);
          const p = project(uX, uY, uZ);
          if (p.sz > 0) {
            if (first) {
              ctx.moveTo(p.sx, p.sy);
              first = false;
            } else {
              ctx.lineTo(p.sx, p.sy);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
        ctx.stroke();
      });

      // Longitude meridians
      const lons = [-150, -100, -50, 0, 50, 100, 150];
      lons.forEach((lon) => {
        ctx.beginPath();
        let first = true;
        for (let lat = -80; lat <= 80; lat += 5) {
          const [uX, uY, uZ] = latLonTo3D(lat, lon, 1);
          const p = project(uX, uY, uZ);
          if (p.sz > 0) {
            if (first) {
              ctx.moveTo(p.sx, p.sy);
              first = false;
            } else {
              ctx.lineTo(p.sx, p.sy);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
        ctx.stroke();
      });

      // ── 4. Landmass Dots (Sharp, High-Density Cyber Points) ──
      for (let i = 0; i < dots3D.length; i++) {
        const [ux, uy, uz] = dots3D[i];
        const p = project(ux, uy, uz);

        if (!p.visible) continue;

        // Front vs back brightness
        const depthFactor = (p.sz + radius) / (2 * radius); // 0 to 1
        const alpha = Math.max(0.08, Math.pow(depthFactor, 1.3) * 0.95);
        const size = Math.max(1.1, 1.8 * p.scale);

        // High contrast cyber sky-blue dots
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.fillRect(p.sx - size / 2, p.sy - size / 2, size, size);
      }

      // ── 5. Curved 3D Network Arcs Between Datacenters ──
      ROUTES.forEach(([srcId, dstId], routeIdx) => {
        const src = nodes3D[srcId];
        const dst = nodes3D[dstId];
        if (!src || !dst) return;

        // Sample points along the 3D great circle arc
        const steps = 36;
        const arcPoints: { sx: number; sy: number; sz: number; visible: boolean }[] = [];
        let anyVisible = false;

        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          // Linear blend then normalize
          const nx = src[0] * (1 - t) + dst[0] * t;
          const ny = src[1] * (1 - t) + dst[1] * t;
          const nz = src[2] * (1 - t) + dst[2] * t;
          const len = Math.sqrt(nx * nx + ny * ny + nz * nz);

          // Parabolic height above globe
          const altitude = 1 + 0.18 * Math.sin(Math.PI * t);
          const p = project(nx / len, ny / len, nz / len, altitude);
          arcPoints.push(p);
          if (p.sz > 0) anyVisible = true;
        }

        if (!anyVisible) return;

        // Draw the static arc cable
        ctx.beginPath();
        let started = false;
        arcPoints.forEach((pt) => {
          if (pt.sz > -radius * 0.25) {
            if (!started) {
              ctx.moveTo(pt.sx, pt.sy);
              started = true;
            } else {
              ctx.lineTo(pt.sx, pt.sy);
            }
          } else {
            started = false;
          }
        });
        ctx.strokeStyle = "rgba(3, 155, 229, 0.25)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Animated traveling light pulse along the arc
        const pulseProgress = (time * 0.45 + routeIdx * 0.28) % 1;
        const pulseIdx = Math.floor(pulseProgress * steps);
        const pulsePt = arcPoints[pulseIdx];

        if (pulsePt && pulsePt.sz > -radius * 0.1) {
          ctx.beginPath();
          ctx.arc(pulsePt.sx, pulsePt.sy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // ── 6. Datacenter Nodes on Globe Surface ──
      const updatedPositions: {
        [id: string]: {
          x: number;
          y: number;
          visible: boolean;
          z: number;
          boxX: number;
          boxY: number;
          isRight: boolean;
        };
      } = {};

      DATACENTERS.forEach((dc) => {
        const [ux, uy, uz] = nodes3D[dc.id];
        const p = project(ux, uy, uz, 1.01);
        const isFacing = p.sz > radius * 0.08;

        const isRight = p.sx >= width / 2;

        // Anchor boxes on the outer flanks to prevent center clutter
        const boxX = isRight
          ? Math.min(width - 264, Math.max(width / 2 + 100, p.sx + 45))
          : Math.max(16, Math.min(width / 2 - 340, p.sx - 265));
        const boxY = Math.max(24, Math.min(height - 160, p.sy - 40));

        updatedPositions[dc.id] = {
          x: p.sx,
          y: p.sy,
          visible: isFacing,
          z: p.sz,
          boxX,
          boxY,
          isRight,
        };

        if (p.sz > -radius * 0.2) {
          const isSelected = dc.id === activeLocationId;
          const isHovered = dc.id === hoveredLocationId;

          // Animated pulsating radar ring
          if (isFacing) {
            const pulseR = 4 + ((time * 20 + dc.lat) % 24);
            const pulseAlpha = Math.max(0, 1 - pulseR / 28);
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, pulseR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${pulseAlpha * 0.8})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }

          // Outer node ring
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, isSelected || isHovered ? 6 : 4.5, 0, Math.PI * 2);
          ctx.fillStyle = isSelected ? "#38bdf8" : "rgba(3, 155, 229, 0.8)";
          ctx.fill();

          // Bright center white dot
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, isSelected || isHovered ? 3 : 2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }
      });

      setNodePositions(updatedPositions);

      // ── 7. Crisp White / Silver Outline (Atmospheric Rim requested by user) ──
      // "brighter outline should be white like the game boxes should not look ai"
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Outer delicate secondary white hairline ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 3, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [activeLocationId, hoveredLocationId]);

  // Pointer drag event handlers for smooth 3D globe rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
    targetRotYRef.current = null;
    targetRotXRef.current = null;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    const speed = 0.005;
    rotYRef.current += dx * speed;
    rotXRef.current += dy * speed;

    velocityRef.current = {
      y: dx * speed * 0.4,
      x: dy * speed * 0.4,
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // ── STRICT ZERO-OVERLAP ENGINE ──
  // Separate visible nodes into West (left flank) and East (right flank).
  // At most ONE primary callout box can exist on the left and ONE on the right.
  // The left card and right card are separated across the entire globe width and can NEVER overlap.
  const { leftCalloutDc, rightCalloutDc, secondaryVisibleDcs } = useMemo(() => {
    const visibleDcs = DATACENTERS.filter((dc) => nodePositions[dc.id]?.visible);

    const leftGroup = visibleDcs.filter((dc) => !nodePositions[dc.id].isRight);
    const rightGroup = visibleDcs.filter((dc) => nodePositions[dc.id].isRight);

    // Pick at most ONE for left: prioritized by hovered -> active -> most frontal (highest z)
    let leftDc: DatacenterLocation | null = null;
    if (leftGroup.length > 0) {
      leftDc =
        leftGroup.find((d) => d.id === hoveredLocationId) ||
        leftGroup.find((d) => d.id === activeLocationId) ||
        leftGroup.reduce((prev, curr) =>
          nodePositions[curr.id].z > nodePositions[prev.id].z ? curr : prev
        );
    }

    // Pick at most ONE for right: prioritized by hovered -> active -> most frontal (highest z)
    let rightDc: DatacenterLocation | null = null;
    if (rightGroup.length > 0) {
      rightDc =
        rightGroup.find((d) => d.id === hoveredLocationId) ||
        rightGroup.find((d) => d.id === activeLocationId) ||
        rightGroup.reduce((prev, curr) =>
          nodePositions[curr.id].z > nodePositions[prev.id].z ? curr : prev
        );
    }

    // All other visible nodes render as compact non-overlapping node pills pinned to their dots
    const secondaryDcs = visibleDcs.filter(
      (dc) => dc.id !== leftDc?.id && dc.id !== rightDc?.id
    );

    return {
      leftCalloutDc: leftDc,
      rightCalloutDc: rightDc,
      secondaryVisibleDcs: secondaryDcs,
    };
  }, [nodePositions, activeLocationId, hoveredLocationId]);

  // List of active callout cards to render (maximum 2, strictly separated across opposite sides)
  const activeCallouts = useMemo(() => {
    const list: DatacenterLocation[] = [];
    if (leftCalloutDc) list.push(leftCalloutDc);
    if (rightCalloutDc) list.push(rightCalloutDc);
    return list;
  }, [leftCalloutDc, rightCalloutDc]);

  return (
    <div className="relative mx-auto w-full max-w-7xl overflow-hidden">
      {/* ── Blueprint Dot Matrix Background (Cloudflare Style) ── */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      {/* ── Vertical Dashed Architectural Blueprint Guidelines ── */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-between overflow-hidden px-4">
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0 hidden sm:block" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0 hidden sm:block" />
        <div className="h-full border-r border-dashed border-zinc-800/40 w-0" />
      </div>

      {/* ── Concentric Orbital Technical Rings Behind Globe ── */}
      <div className="pointer-events-none absolute left-1/2 top-[240px] md:top-[290px] -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="h-[430px] w-[430px] rounded-full border border-dashed border-zinc-800/60" />
        <div className="absolute inset-[-45px] rounded-full border border-dashed border-zinc-800/40" />
        <div className="absolute inset-[-95px] rounded-full border border-dashed border-zinc-800/25" />
        {/* Cardinal Degree Markers */}
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-zinc-600">000° N</span>
        <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 font-mono text-[9px] text-zinc-600">180° S</span>
        <span className="absolute -left-6 top-1/2 -translate-y-1/2 font-mono text-[9px] text-zinc-600">270° W</span>
        <span className="absolute -right-6 top-1/2 -translate-y-1/2 font-mono text-[9px] text-zinc-600">090° E</span>
      </div>

      {/* 3D Globe Interactive Canvas & Overlay Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative mx-auto h-[480px] w-full max-w-4xl cursor-grab select-none active:cursor-grabbing md:h-[580px]"
      >
        {/* Technical Coordinate Stamps in Viewport Corners */}
        <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-zinc-600 hidden md:block select-none">
          + [ 50.1109° N, 08.6821° E ] // FRA-1
        </div>
        <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-zinc-600 hidden md:block select-none">
          + [ 19.0760° N, 72.8777° E ] // BOM-1
        </div>

        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Global Leader Lines SVG Layer (Desktop HUD) */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full z-10 overflow-visible hidden md:block">
          {activeCallouts.map((dc) => {
            const pos = nodePositions[dc.id];
            if (!pos || !pos.visible) return null;

            // Target connection point on callout box
            const targetX = pos.isRight ? pos.boxX : pos.boxX + 248;
            const targetY = pos.boxY + 28;

            // Intermediate elbow point for high-tech angled leader line
            const elbowX = pos.isRight ? pos.x + 28 : pos.x - 28;

            return (
              <g key={`line-${dc.id}`}>
                {/* Pin anchor circle */}
                <circle cx={pos.x} cy={pos.y} r={2.5} fill="#38bdf8" />
                {/* 2-segment leader line */}
                <path
                  d={`M ${pos.x} ${pos.y} L ${elbowX} ${targetY} L ${targetX} ${targetY}`}
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="1.2"
                  strokeDasharray="3 2"
                />
              </g>
            );
          })}
        </svg>

        {/* ── Circular Technical Node Badges on Globe (Cloudflare Style as in 2nd image) ── */}
        {DATACENTERS.map((dc) => {
          const pos = nodePositions[dc.id];
          if (!pos || !pos.visible) return null;

          const isSelected = dc.id === activeLocationId;
          const isHovered = dc.id === hoveredLocationId;

          const NodeIcon =
            dc.id === "india"
              ? Users
              : dc.id === "germany"
              ? Server
              : dc.id === "singapore"
              ? Database
              : Shield;

          return (
            <div
              key={`node-badge-${dc.id}`}
              onClick={(e) => {
                e.stopPropagation();
                focusLocation(dc.id);
              }}
              onMouseEnter={() => setHoveredLocationId(dc.id)}
              onMouseLeave={() => setHoveredLocationId(null)}
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              className={`group absolute z-25 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 ${
                isSelected
                  ? "border-white bg-[#090a0d] text-white shadow-[0_0_14px_rgba(255,255,255,0.5)] scale-110"
                  : isHovered
                  ? "border-zinc-300 bg-black/95 text-zinc-100 scale-105"
                  : "border-zinc-700/80 bg-[#090a0d]/90 text-zinc-400 hover:border-zinc-300 hover:text-white"
              }`}
              title={`${dc.name} (${dc.city})`}
            >
              <NodeIcon className="h-3.5 w-3.5 transition group-hover:scale-110" />
              {isSelected && (
                <span className="pointer-events-none absolute -inset-1 rounded-full border border-white/50 animate-ping opacity-60" />
              )}
            </div>
          );
        })}

        {/* ── Compact Pin Badges for Secondary Visible Nodes (Never Overlaps) ── */}
        {secondaryVisibleDcs.map((dc) => {
          const pos = nodePositions[dc.id];
          if (!pos || !pos.visible) return null;

          return (
            <div
              key={`pill-${dc.id}`}
              onClick={() => focusLocation(dc.id)}
              onMouseEnter={() => setHoveredLocationId(dc.id)}
              onMouseLeave={() => setHoveredLocationId(null)}
              style={{
                left: `${pos.x + (pos.isRight ? 18 : -116)}px`,
                top: `${pos.y - 14}px`,
              }}
              className="hidden md:flex absolute z-20 cursor-pointer items-center gap-1.5 border border-zinc-800 bg-[#090a0d]/95 px-2.5 py-1 text-[11px] font-semibold text-zinc-300 shadow-xl backdrop-blur-md transition-all hover:border-sky-400 hover:text-white"
            >
              <img src={dc.flag} alt="" className="h-3 w-3 object-cover rounded-none" />
              <span>{dc.city}</span>
            </div>
          );
        })}

        {/* ── Primary Pop-up Rectangular Callouts (Guaranteed Zero-Overlap Dual-Flank HUD) ── */}
        {activeCallouts.map((dc) => {
          const pos = nodePositions[dc.id];
          if (!pos || !pos.visible) return null;

          const isSelected = dc.id === activeLocationId;
          const isHovered = dc.id === hoveredLocationId;

          return (
            <div
              key={dc.id}
              onClick={() => focusLocation(dc.id)}
              onMouseEnter={() => setHoveredLocationId(dc.id)}
              onMouseLeave={() => setHoveredLocationId(null)}
              style={{
                left: `${pos.boxX}px`,
                top: `${pos.boxY}px`,
              }}
              className={`hidden md:block absolute z-30 w-62 cursor-pointer rounded-none border bg-[#090a0d]/98 p-3.5 shadow-2xl backdrop-blur-md transition-all duration-200 ${
                isSelected
                  ? "border-y-zinc-800 border-x-white shadow-[0_0_24px_rgba(255,255,255,0.15)]"
                  : isHovered
                  ? "border-zinc-500 shadow-xl"
                  : "border-zinc-800/90 hover:border-zinc-600"
              }`}
            >
              {/* Cloudflare-Style Technical Corner Brackets */}
              <div className="pointer-events-none absolute -left-[1px] -top-[1px] h-2 w-2 border-l-2 border-t-2 border-white" />
              <div className="pointer-events-none absolute -right-[1px] -top-[1px] h-2 w-2 border-r-2 border-t-2 border-white" />
              <div className="pointer-events-none absolute -bottom-[1px] -left-[1px] h-2 w-2 border-b-2 border-l-2 border-white" />
              <div className="pointer-events-none absolute -bottom-[1px] -right-[1px] h-2 w-2 border-b-2 border-r-2 border-white" />

              {/* Callout Header */}
              <div className="flex items-center justify-between gap-1.5 border-b border-zinc-800/80 pb-1.5">
                <div className="flex items-center gap-2">
                  <img src={dc.flag} alt="" className="h-3.5 w-3.5 object-cover rounded-none" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {dc.city}
                  </span>
                </div>
                {dc.popular ? (
                  <span className="rounded-none border border-sky-500/30 bg-sky-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sky-400">
                    Primary
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[9px] font-medium text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              {/* Callout Body (Cloudflare style technical note) */}
              <p className="mt-2 text-[11px] leading-tight text-zinc-300">
                {dc.calloutNote}
              </p>

              <div className="mt-2.5 space-y-1 border-t border-zinc-800/60 pt-1.5 text-[11px]">
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Hardware:</span>
                  <span className="font-semibold text-zinc-200">{dc.cpus[0]}</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span>Uplink:</span>
                  <span className="font-semibold text-sky-400">{dc.uplink}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Orbit hint & Drag guide */}
        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 border border-zinc-800/80 bg-black/75 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-md">
          <Radio className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
          <span>Drag to orbit globe • Click node to focus</span>
        </div>
      </div>

      {/* ── Rectangular Location Detail Cards Below (Non-AI, Crisp Borders) ── */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DATACENTERS.map((loc) => {
          const isActive = loc.id === activeLocationId;
          const isHovered = loc.id === hoveredLocationId;

          return (
            <div
              key={loc.id}
              onClick={() => focusLocation(loc.id)}
              onMouseEnter={() => setHoveredLocationId(loc.id)}
              onMouseLeave={() => setHoveredLocationId(null)}
              className={`group relative cursor-pointer overflow-hidden rounded-md border bg-[#090a0d] p-5 transition-all duration-300 ${
                isActive
                  ? "border-y-zinc-800/90 border-x-white shadow-[0_12px_36px_rgba(0,0,0,0.95)]"
                  : isHovered
                  ? "border-y-zinc-800 border-x-zinc-500 shadow-xl"
                  : "border-zinc-800/90 hover:border-zinc-700 hover:border-x-zinc-500"
              }`}
            >
              {/* Crisp Vertical White Accent Lines on left and right edges */}
              {isActive && (
                <>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-white" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-white" />
                </>
              )}

              {/* Background preview with dark overlay */}
              <img
                src={loc.bg}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-500 group-hover:opacity-30 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/80 to-transparent" />

              {/* Top hairline light - only subtle hint on hover */}
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-[1px] transition-opacity duration-300 ${
                  isActive
                    ? "opacity-0"
                    : "bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent opacity-0 group-hover:opacity-100"
                }`}
              />

              <div className="relative flex min-h-[140px] flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={loc.flag}
                        alt=""
                        className="h-5 w-5 object-cover rounded-sm ring-1 ring-white/20"
                      />
                      <h3 className="text-base font-bold text-white tracking-tight">{loc.name}</h3>
                    </div>
                    {loc.popular && (
                      <span className="rounded border border-sky-500/40 bg-sky-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-400">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs text-zinc-400">{loc.city} Datacenter Hub</p>
                </div>

                <div className="space-y-1.5 border-t border-zinc-800/80 pt-3 text-xs text-zinc-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Cpu className="h-3.5 w-3.5 text-sky-400" />
                      CPU
                    </span>
                    <span className="font-semibold text-white truncate max-w-[140px]">{loc.cpus[0]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Server className="h-3.5 w-3.5 text-sky-400" />
                      Uplink
                    </span>
                    <span className="font-semibold text-zinc-200">{loc.uplink}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Unified Cloudflare-Style Technical Network Pillars (Matching 2nd Reference Image) ── */}
      <div className="relative mt-8 rounded-none border border-zinc-800/90 bg-[#090a0d]/90 backdrop-blur-sm">
        {/* Technical Corner Crosshair Ticks */}
        <div className="pointer-events-none absolute -left-1.5 -top-2 font-mono text-xs text-zinc-600 select-none">+</div>
        <div className="pointer-events-none absolute -right-1.5 -top-2 font-mono text-xs text-zinc-600 select-none">+</div>
        <div className="pointer-events-none absolute -bottom-2 -left-1.5 font-mono text-xs text-zinc-600 select-none">+</div>
        <div className="pointer-events-none absolute -bottom-2 -right-1.5 font-mono text-xs text-zinc-600 select-none">+</div>

        <div className="grid grid-cols-1 divide-y divide-zinc-800/80 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="group p-6 transition duration-300 hover:bg-white/[0.015]">
            <div className="mb-3.5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-none border border-zinc-800 bg-black/60 text-white transition group-hover:border-zinc-600">
                <Globe2 className="h-4.5 w-4.5" />
              </div>
              <h4 className="text-base font-bold text-white tracking-tight">Run everywhere</h4>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Security,connectivity, and compute run across high-speed Tier-1 edge cities, directly connected to global multiplayer populations.
            </p>
          </div>

          <div className="group p-6 transition duration-300 hover:bg-white/[0.015]">
            <div className="mb-3.5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-none border border-zinc-800 bg-black/60 text-white transition group-hover:border-zinc-600">
                <MapPin className="h-4.5 w-4.5" />
              </div>
              <h4 className="text-base font-bold text-white tracking-tight">Run anywhere</h4>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              Our network is close to your users, applications, and sites. It optimizes all your gaming and cloud traffic from source to destination.
            </p>
          </div>

          <div className="group p-6 transition duration-300 hover:bg-white/[0.015]">
            <div className="mb-3.5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-none border border-zinc-800 bg-black/60 text-white transition group-hover:border-zinc-600">
                <Maximize2 className="h-4.5 w-4.5" />
              </div>
              <h4 className="text-base font-bold text-white tracking-tight">Run at massive scale</h4>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">
              No more capacity planning. Ever. 17+ Tbps hardware DDoS filtering scrubs Layer 3, 4, and 7 attacks at line-rate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
