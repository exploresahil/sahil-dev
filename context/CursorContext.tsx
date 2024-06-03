"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CursorContextProps {
  cursorSize: number;
  setCursorSize: (size: number) => void;
  cursorPosition: { x: number; y: number };
  setCursorPosition: (position: { x: number; y: number }) => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorSize, setCursorSize] = useState(20);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  return (
    <CursorContext.Provider
      value={{ cursorSize, setCursorSize, cursorPosition, setCursorPosition }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
