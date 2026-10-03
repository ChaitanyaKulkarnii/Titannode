import { createContext, useContext, useEffect, useState } from "react";

export type Currency = "USD" | "INR" | "EUR";

const RATES: Record<Currency, number> = { USD: 1, INR: 86.5, EUR: 0.92 };
const SYMBOLS: Record<Currency, string> = { USD: "$", INR: "₹", EUR: "€" };

interface Ctx {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  symbol: string;
  format: (usd: number) => string;
}

const CurrencyContext = createContext<Ctx | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("INR");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("currency")) as Currency | null;
    if (saved && RATES[saved]) setCurrencyState(saved);
    else setCurrencyState("INR");
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    if (typeof window !== "undefined") localStorage.setItem("currency", c);
  };

  const format = (usd: number) => {
    const v = usd * RATES[currency];
    const rounded = currency === "INR" ? Math.round(v) : Math.round(v * 100) / 100;
    return `${SYMBOLS[currency]}${rounded}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol: SYMBOLS[currency], format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    // SSR/non-provider safe fallback
    return {
      currency: "INR" as Currency,
      setCurrency: () => {},
      symbol: "₹",
      format: (usd: number) => `₹${Math.round(usd * 86.5)}`,
    };
  }
  return ctx;
}
