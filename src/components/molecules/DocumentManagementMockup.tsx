"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const TABS = ["Bandejas", "Búsquedas", "Listas", "Tareas", "Carpetas"];

const DOCUMENTS = [
  {
    id: 1,
    name: "Contrato Marco",
    type: "PDF",
    date: "15/01/26",
    lines: [1, 0.75, 1, 0.5, 0.85, 0.6],
  },
  {
    id: 2,
    name: "Descripción de Puesto",
    type: "PDF",
    date: "10/01/26",
    lines: [0.9, 1, 0.65, 0.8, 0.5, 0.7],
  },
  {
    id: 3,
    name: "CV Pedro Sánchez",
    type: "PDF",
    date: "08/01/26",
    lines: [1, 0.6, 0.9, 0.75, 1, 0.55],
  },
  {
    id: 4,
    name: "Evaluación Desempeño",
    type: "PDF",
    date: "05/01/26",
    lines: [0.7, 1, 0.8, 0.6, 0.9, 0.5],
  },
  {
    id: 5,
    name: "Nota Médica",
    type: "DOC",
    date: "03/01/26",
    lines: [1, 0.55, 0.7, 1, 0.6, 0.85],
  },
  {
    id: 6,
    name: "Expediente RRHH",
    type: "PDF",
    date: "01/01/26",
    lines: [0.8, 0.9, 0.5, 1, 0.7, 0.65],
  },
  {
    id: 7,
    name: "Solicitud de Empleo",
    type: "PDF",
    date: "28/12/25",
    lines: [1, 0.7, 0.85, 0.55, 1, 0.6],
  },
  {
    id: 8,
    name: "Licencia de Trabajo",
    type: "PDF",
    date: "20/12/25",
    lines: [0.6, 1, 0.75, 0.9, 0.5, 0.8],
  },
  {
    id: 9,
    name: "Reclamación de Seguro",
    type: "PDF",
    date: "15/12/25",
    lines: [0.85, 0.65, 1, 0.7, 0.8, 0.55],
  },
];

export function DocumentManagementMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState<number>(1);

  return (
    <div className="flex flex-col h-full w-full rounded-l-md overflow-hidden select-none text-xs font-sans shadow-sm">
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-2.5 py-1.5 bg-surface-dark text-white shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-sm bg-brand flex items-center justify-center shrink-0">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="4.5" height="5.5" rx="0.5" fill="white" opacity="0.9" />
              <rect x="6.5" y="1" width="4.5" height="2.5" rx="0.5" fill="white" opacity="0.6" />
              <rect x="6.5" y="4.5" width="4.5" height="2.5" rx="0.5" fill="white" opacity="0.6" />
              <rect x="1" y="8" width="10" height="2.5" rx="0.5" fill="white" opacity="0.4" />
            </svg>
          </div>
          <span className="font-heading font-semibold text-[11px] tracking-tight">
            CM Digital Docs
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-white/70">
          <span className="hidden sm:inline">María García</span>
          <div className="w-4 h-4 rounded-full bg-brand/80 flex items-center justify-center text-white font-bold text-[8px]">
            MG
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="flex border-b border-gray-200 bg-gray-50 shrink-0">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={cn(
              "px-2.5 py-1.5 text-[10px] font-medium border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0",
              /* hide last 2 tabs on xs */
              i >= 3 && "hidden sm:block",
              activeTab === i
                ? "border-brand text-brand bg-white"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            )}
          >
            {tab}
            {i === 1 && (
              <span className="ml-1 px-1 rounded-full bg-brand text-white text-[7px]">4</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Toolbar ── */}
      <div className="flex items-center justify-between px-2.5 py-1 border-b border-gray-200 bg-white shrink-0">
        <div className="flex items-center gap-1 text-[10px]">
          <span className="font-medium text-gray-700">Documentos RRHH</span>
          <span className="hidden sm:inline text-gray-400">· {DOCUMENTS.length} archivos</span>
        </div>
        {/* action buttons: hidden on xs */}
        <div className="hidden sm:flex gap-1">
          {["Importar", "Escanear"].map((action) => (
            <button
              key={action}
              className="px-1.5 py-0.5 rounded text-[9px] bg-[#f2f1ed] border border-[#e5e3de] hover:bg-[#e5e3de] transition-colors cursor-pointer text-gray-600"
            >
              {action}
            </button>
          ))}
          <button className="px-1.5 py-0.5 rounded text-[9px] bg-brand text-white hover:opacity-90 transition-opacity cursor-pointer">
            + Nuevo
          </button>
        </div>
      </div>

      {/* ── Document grid ── */}
      <div className="flex-1 overflow-auto p-2 bg-white min-h-0">
        {/*
          xs  → 2 cols, show first 4 docs
          sm+ → 3 cols, show all 9 docs
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {DOCUMENTS.map((doc, i) => (
            <button
              key={doc.id}
              onClick={() => setSelectedDoc(doc.id)}
              className={cn(
                "flex flex-col items-center p-1.5 rounded-md border text-center gap-1 transition-all cursor-pointer",
                /* hide docs 5-9 on xs */
                i >= 4 && "hidden sm:flex",
                selectedDoc === doc.id
                  ? "border-brand/60 bg-orange-50 shadow-sm"
                  : "border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300"
              )}
            >
              {/* Thumbnail */}
              <div className="w-full aspect-3/4 bg-white rounded border border-gray-200 relative overflow-hidden">
                <div className="absolute inset-1.5 flex flex-col gap-0.5">
                  {doc.lines.map((w, li) => (
                    <div
                      key={li}
                      className={cn("h-0.5 rounded-full", li < 2 ? "bg-gray-300" : "bg-gray-200")}
                      style={{ width: `${w * 100}%` }}
                    />
                  ))}
                </div>
                <span
                  className={cn(
                    "absolute bottom-1 left-1 text-[7px] font-bold px-0.5 rounded-sm leading-tight",
                    doc.type === "PDF" ? "bg-red-500 text-white" : "bg-blue-500 text-white"
                  )}
                >
                  {doc.type}
                </span>
                {selectedDoc === doc.id && (
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-brand flex items-center justify-center">
                    <svg width="5" height="4" viewBox="0 0 6 5" fill="none">
                      <path
                        d="M1 2.5l1.5 1.5L5 1"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <span className="text-[8px] text-gray-600 leading-tight line-clamp-2 w-full">
                {doc.name}
              </span>
              {/* dates: hidden on xs */}
              <span className="hidden sm:block text-[7px] text-gray-400">{doc.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="flex items-center justify-between px-2.5 py-1 border-t border-gray-200 bg-gray-50 shrink-0">
        <span className="text-[8px] text-gray-400">{DOCUMENTS.length} documentos</span>
        <span className="hidden sm:block text-[8px] text-gray-400">
          1–{DOCUMENTS.length} de {DOCUMENTS.length}
        </span>
      </div>
    </div>
  );
}
