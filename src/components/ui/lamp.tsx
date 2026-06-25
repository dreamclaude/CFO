"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full z-0",
        className
      )}
      style={{ backgroundColor: "#0A1628" }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left conic gradient — brand teal */}
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{
            delay: 0.2,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #1995C4, transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[28rem] text-white"
        >
          <div className="absolute w-full left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" style={{ backgroundColor: "#0A1628" }} />
          <div className="absolute w-40 h-full left-0 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" style={{ backgroundColor: "#0A1628" }} />
        </motion.div>

        {/* Right conic gradient — brand teal */}
        <motion.div
          initial={{ opacity: 0.4, width: "12rem" }}
          whileInView={{ opacity: 1, width: "28rem" }}
          transition={{
            delay: 0.2,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #1995C4)",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[28rem] text-white"
        >
          <div className="absolute w-40 h-full right-0 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" style={{ backgroundColor: "#0A1628" }} />
          <div className="absolute w-full right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" style={{ backgroundColor: "#0A1628" }} />
        </motion.div>

        {/* Depth blur layers */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl" style={{ backgroundColor: "#0A1628" }} />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Core glow — teal */}
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(25,149,196,0.4)" }}
        />

        {/* Bright beam center */}
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "14rem" }}
          transition={{
            delay: 0.2,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-auto z-30 h-36 -translate-y-[6rem] rounded-full blur-2xl"
          style={{ backgroundColor: "rgba(25,149,196,0.7)" }}
        />

        {/* Thin beam line */}
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "28rem" }}
          transition={{
            delay: 0.2,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem]"
          style={{ backgroundColor: "rgba(25,149,196,0.9)" }}
        />

        {/* Red accent dot at beam center */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-auto z-50 -translate-y-[7rem] w-3 h-3 rounded-full"
          style={{ backgroundColor: "#CC2027", boxShadow: "0 0 16px 4px rgba(204,32,39,0.6)" }}
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]" style={{ backgroundColor: "#0A1628" }} />
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
