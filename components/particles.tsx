"use client";

import { useEffect, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

export function ParticlesBackground() {
  const [count, setCount] = useState(25);

  useEffect(() => {
    setCount(window.innerWidth < 768 ? 12 : 25);
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    detectRetina: true,
    particles: {
      number: { value: count },
      color: { value: ["#445e91", "#006493", "#456179"] },
      links: {
        enable: true,
        color: "#8f909e",
        distance: 250,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
      },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.6 },
    },
  };

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="tsparticles"
        className="fixed inset-0 z-0 h-full w-full overflow-hidden pointer-events-none"
        options={options}
      />
    </ParticlesProvider>
  );
}
