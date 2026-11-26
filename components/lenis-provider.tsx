"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        anchors: true,
        autoRaf: true,
        lerp: 0.1,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
