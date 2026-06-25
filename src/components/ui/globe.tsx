"use client";
import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const rafRef = useRef<number>(0);
  const [ready, setReady] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100, restDelta: 0.001 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Wait until the canvas actually has dimensions (it may be 0 on first render
    // if the parent grid is still laying out, especially on mobile).
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      if (width < 10) return; // not visible yet

      observer.disconnect();
      setReady(true);

      let phi = 3.8;
      const lb: [number, number, number] = [0.4, 0.85, 1.0];
      const dpr = Math.min(window.devicePixelRatio, 2); // cap at 2 for performance

      const globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 3.8,
        theta: -0.28,
        dark: 1,
        diffuse: 0.6,
        mapSamples: 16000,
        mapBrightness: 1.4,
        baseColor: [0.08, 0.14, 0.22],
        markerColor: lb,
        glowColor: [0.098, 0.584, 0.769],
        markers: [
          { location: [-33.8688, 151.2093], size: 0.055 },
          { location: [-37.8136, 144.9631], size: 0.05  },
          { location: [-27.4698, 153.0251], size: 0.042 },
          { location: [-31.9505, 115.8605], size: 0.038 },
          { location: [-34.9285, 138.6007], size: 0.036 },
          { location: [-35.2809, 149.1300], size: 0.028 },
          { location: [-42.8821, 147.3272], size: 0.026 },
          { location: [-12.4634, 130.8456], size: 0.026 },
        ],
        arcs: [
          { from: [-33.8688, 151.2093], to: [-37.8136, 144.9631], color: lb },
          { from: [-33.8688, 151.2093], to: [-27.4698, 153.0251], color: lb },
          { from: [-33.8688, 151.2093], to: [-35.2809, 149.1300], color: lb },
          { from: [-37.8136, 144.9631], to: [-34.9285, 138.6007], color: lb },
          { from: [-37.8136, 144.9631], to: [-42.8821, 147.3272], color: lb },
          { from: [-37.8136, 144.9631], to: [-35.2809, 149.1300], color: lb },
          { from: [-34.9285, 138.6007], to: [-31.9505, 115.8605], color: lb },
          { from: [-27.4698, 153.0251], to: [-12.4634, 130.8456], color: lb },
          { from: [-31.9505, 115.8605], to: [-12.4634, 130.8456], color: lb },
        ],
        arcColor: lb,
        arcWidth: 1.2,
        arcHeight: 0.35,
      });

      function animate() {
        if (!pointerInteracting.current) phi += 0.003;
        globe.update({
          phi: phi + rs.get(),
          width: canvas!.offsetWidth * dpr,
          height: canvas!.offsetWidth * dpr,
        });
        rafRef.current = requestAnimationFrame(animate);
      }
      rafRef.current = requestAnimationFrame(animate);

      // clean up when component unmounts
      (canvas as any).__globeDestroy = () => {
        globe.destroy();
        cancelAnimationFrame(rafRef.current);
      };
    });

    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
      const destroy = (canvas as any).__globeDestroy;
      if (destroy) destroy();
    };
  }, [rs]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(className)}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: "1",
        cursor: "grab",
        // keep canvas invisible until globe initialises to avoid white flash
        opacity: ready ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          r.set(delta / 200);
        }
      }}
      onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          r.set(delta / 100);
        }
      }}
    />
  );
}
