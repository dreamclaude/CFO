"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const rafRef = useRef<number>(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100, restDelta: 0.001 });

  useEffect(() => {
    let phi = 3.8;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    // Light blue: [0.4, 0.85, 1.0]
    const lb: [number, number, number] = [0.4, 0.85, 1.0];

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 3.8,
      theta: -0.28,
      dark: 1,
      diffuse: 0.6,
      mapSamples: 20000,
      mapBrightness: 1.4,
      baseColor: [0.08, 0.14, 0.22],
      markerColor: lb,
      glowColor: [0.098, 0.584, 0.769],
      markers: [
        { location: [-33.8688, 151.2093], size: 0.055 }, // Sydney
        { location: [-37.8136, 144.9631], size: 0.05  }, // Melbourne
        { location: [-27.4698, 153.0251], size: 0.042 }, // Brisbane
        { location: [-31.9505, 115.8605], size: 0.038 }, // Perth
        { location: [-34.9285, 138.6007], size: 0.036 }, // Adelaide
        { location: [-35.2809, 149.1300], size: 0.028 }, // Canberra
        { location: [-42.8821, 147.3272], size: 0.026 }, // Hobart
        { location: [-12.4634, 130.8456], size: 0.026 }, // Darwin
      ],
      arcs: [
        { from: [-33.8688, 151.2093], to: [-37.8136, 144.9631], color: lb }, // Sydney–Melbourne
        { from: [-33.8688, 151.2093], to: [-27.4698, 153.0251], color: lb }, // Sydney–Brisbane
        { from: [-33.8688, 151.2093], to: [-35.2809, 149.1300], color: lb }, // Sydney–Canberra
        { from: [-37.8136, 144.9631], to: [-34.9285, 138.6007], color: lb }, // Melbourne–Adelaide
        { from: [-37.8136, 144.9631], to: [-42.8821, 147.3272], color: lb }, // Melbourne–Hobart
        { from: [-37.8136, 144.9631], to: [-35.2809, 149.1300], color: lb }, // Melbourne–Canberra
        { from: [-34.9285, 138.6007], to: [-31.9505, 115.8605], color: lb }, // Adelaide–Perth
        { from: [-27.4698, 153.0251], to: [-12.4634, 130.8456], color: lb }, // Brisbane–Darwin
        { from: [-31.9505, 115.8605], to: [-12.4634, 130.8456], color: lb }, // Perth–Darwin
      ],
      arcColor: lb,
      arcWidth: 1.2,
      arcHeight: 0.35,
    });

    function animate() {
      if (!pointerInteracting.current) phi += 0.003;
      globe.update({
        phi: phi + rs.get(),
        width: width * 2,
        height: width * 2,
      });
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      globe.destroy();
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [rs]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(className)}
      style={{ width: "100%", height: "100%", maxWidth: "100%", aspectRatio: "1", cursor: "grab" }}
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
