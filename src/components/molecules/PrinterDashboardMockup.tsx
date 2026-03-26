"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TABS = ["Equipos", "Alertas", "Reportes", "Configuración"];
const BREADCRUMB = ["Equipos", "Impresoras", "CMD RH Piso 1"];

// Heat map bar: red (high) → orange → yellow → green → gray (no data)
const BAR_SQUARES = [
  "#dc2626",
  "#dc2626",
  "#dc2626",
  "#ea580c",
  "#ea580c",
  "#ea580c",
  "#f59e0b",
  "#f59e0b",
  "#eab308",
  "#eab308",
  "#22c55e",
  "#22c55e",
  "#22c55e",
  "#22c55e",
  "#d1d5db",
  "#d1d5db",
  "#d1d5db",
  "#d1d5db",
];

const TONERS = [
  { id: "cyan", label: "Cyan", value: 72, color: "#22b4e6" },
  { id: "magenta", label: "Magenta", value: 93, color: "#e0237a" },
  { id: "amarillo", label: "Amarillo", value: 78, color: "#f0b800" },
];

function CircleGauge({ value, color }: { value: number; color: string }) {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.min(value / 100, 1));
  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 76 76">
        <circle cx="38" cy="38" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle
          cx="38"
          cy="38"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[7px] text-gray-400 leading-none">Usado</span>
        <span className="text-[11px] font-bold text-gray-800 leading-tight">{value}%</span>
      </div>
    </div>
  );
}

export function PrinterDashboardMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCrumb, setActiveCrumb] = useState(2);

  return (
    <div className="flex flex-col h-full w-full rounded-l-md overflow-hidden select-none text-xs font-sans shadow-sm">
      {/* ── Header — same design system ── */}
      <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#1a2e45] text-white shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-sm bg-brand flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <rect x="2" y="1" width="8" height="3" rx="0.5" fill="white" opacity="0.9" />
              <rect x="1" y="3.5" width="10" height="5" rx="0.5" fill="white" opacity="0.5" />
              <rect x="3" y="8" width="6" height="3" rx="0.5" fill="white" opacity="0.85" />
              <circle cx="9" cy="6" r="0.8" fill="white" opacity="0.9" />
            </svg>
          </div>
          <span className="font-heading font-semibold text-[11px] tracking-tight">
            CM Digital Monitor
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-white/70">
          <span className="hidden sm:inline">María García</span>
          <div className="w-4 h-4 rounded-full bg-brand/80 flex items-center justify-center text-white font-bold text-[8px]">
            MG
          </div>
        </div>
      </div>

      {/* ── Tabs — same style ── */}
      <div className="flex border-b border-gray-200 bg-gray-50 shrink-0">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={cn(
              "px-2.5 py-1.5 text-[10px] font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0",
              i >= 3 && "hidden sm:block",
              activeTab === i
                ? "border-brand text-brand bg-white"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            )}
          >
            {tab}
            {i === 1 && (
              <span className="ml-1 px-1 rounded-full bg-brand text-white text-[7px]">2</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Breadcrumb toolbar ── */}
      <div className="flex items-center justify-between px-2.5 py-1 border-b border-gray-200 bg-white shrink-0">
        <div className="flex items-center gap-1 text-[10px]">
          {BREADCRUMB.map((crumb, i) => (
            <span
              key={crumb}
              className={cn(
                "flex items-center gap-1",
                i < BREADCRUMB.length - 1 && "hidden sm:flex"
              )}
            >
              {i > 0 && <span className="text-gray-300">›</span>}
              <button
                onClick={() => setActiveCrumb(i)}
                className={cn(
                  "transition-colors cursor-pointer",
                  activeCrumb === i ? "text-brand font-medium" : "text-gray-500 hover:text-gray-700"
                )}
              >
                {crumb}
              </button>
            </span>
          ))}
          {/* on xs, show only last crumb */}
          <span className="sm:hidden text-brand font-medium text-[10px]">{BREADCRUMB[2]}</span>
        </div>
        <div className="hidden sm:flex gap-1">
          <button className="px-1.5 py-0.5 rounded text-[9px] bg-[#f2f1ed] border border-[#e5e3de] hover:bg-[#e5e3de] transition-colors cursor-pointer text-gray-600">
            Exportar
          </button>
          <button className="px-1.5 py-0.5 rounded text-[9px] bg-brand text-white hover:opacity-90 transition-opacity cursor-pointer">
            + Agregar
          </button>
        </div>
      </div>

      {/* ── Content ──
          xs/sm : stacked (paper card → gauges below, gauges hidden on xs)
          md+   : horizontal (paper card left | gauges right)
      ── */}
      <div className="flex-1 overflow-auto p-2 bg-white min-h-0 flex flex-col md:flex-row gap-2">
        {/* Consumo de Hojas */}
        <div className="rounded-md border border-gray-200 bg-gray-50 p-2.5 shrink-0 md:flex-1 flex flex-col gap-2">
          <span className="font-medium text-gray-700 text-[10px]">Consumo de Hojas</span>
          <p className="text-[9px] text-gray-500 leading-snug">
            El consumo fue <span className="font-bold text-gray-700">50%</span> más alto este mes.
          </p>
          {/* Color bar */}
          <div className="flex gap-0.5 flex-wrap">
            {BAR_SQUARES.map((color, i) => (
              <div
                key={i}
                className="h-3.5 w-3.5 rounded-[2px] shrink-0"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Toner gauges — hidden on xs, visible sm+ */}
        <div className="hidden sm:flex md:flex-col gap-2 md:w-auto">
          {/* sm: row of 3 gauges | md+: column of 3 gauge rows */}
          <div className="flex md:flex-col gap-2">
            {TONERS.map((toner) => (
              <div
                key={toner.id}
                className="rounded-md border border-gray-200 bg-gray-50 p-2 flex md:flex-row items-center gap-2 min-w-0"
              >
                <CircleGauge value={toner.value} color={toner.color} />
                <div className="hidden md:flex flex-col min-w-0">
                  <span className="font-medium text-gray-700 text-[9px] leading-tight whitespace-nowrap">
                    Consumo {toner.label}
                  </span>
                  <button className="text-[8px] text-blue-500 hover:underline cursor-pointer text-left mt-0.5">
                    Detalles ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-2.5 py-1 border-t border-gray-200 bg-gray-50 shrink-0">
        <span className="text-[8px] text-gray-400">Actualizado hace 5 min</span>
        <span className="hidden sm:block text-[8px] text-gray-400">3 equipos en línea</span>
      </div>
    </div>
  );
}
