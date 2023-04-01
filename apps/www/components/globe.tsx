"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import createGlobe from "cobe";
import { useSpring } from "react-spring";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";

export default function Globe() {
  const divRef = useRef<any>();
  const entry = useIntersectionObserver(divRef, {});
  const isVisible = !!entry?.isIntersecting;
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowGlobe(true);
    } else {
      setShowGlobe(false);
    }
  }, [isVisible]);

  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = window.document.createElement("canvas");
      const ctx =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      (ctx as any).getSupportedExtensions();
    } catch (e) {
      // WebGL isn't properly supported
      setWebglSupported(false);
      console.log("WebGL not supported, hiding globe animation...");
      return;
    }
  }, []);

  return (
    <div ref={divRef}>{webglSupported && showGlobe && <GlobeAnimation />}</div>
  );
}

const GlobeAnimation = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const canvasRef = useRef<any>();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 60,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = -0.5;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width,
      height: width,
      phi,
      theta: 0.15,
      dark: resolvedTheme === "dark" ? 1 : 0.08,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 20000,
      mapBrightness: resolvedTheme === "dark" ? 10 : 4,
      mapBaseBrightness: 0,
      baseColor:
        resolvedTheme === "dark"
          ? [18 / 255, 18 / 255, 18 / 255]
          : [248 / 255, 255 / 255, 252 / 255],
      markerColor: [0 / 255, 199 / 255, 126 / 255],
      offset: [0, 0],
      glowColor: [167 / 255, 255 / 255, 223 / 255],
      markers: [
        {
          location: [20.5937, 78.9629],
          size: 0.08,
        },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        phi += 0.002;
        state.phi = phi + r.get();
        state.width = width;
        state.height = width;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div className="relative flex items-center">
      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          aspectRatio: "1",
          margin: "auto",
          position: "relative",
        }}>
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = "grabbing";
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 200,
              });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({
                r: delta / 100,
              });
            }
          }}
          style={{
            width: 600,
            height: 600,
            contain: "layout paint size",
            opacity: 0,
            transition: "opacity 1s ease",
          }}
        />
      </div>
    </div>
  );
};
