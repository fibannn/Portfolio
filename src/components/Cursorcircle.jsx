import { useEffect, useRef } from "react";
import "./CursorCircle.css";

export default function CursorCircle() {
  const ref = useRef(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let cx = x, cy = y;
    let raf;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = 1;
    };
    const onOver = (e) => {
      const hot = e.target.closest("a, button, [data-cursor='grow']");
      el.classList.toggle("grow", !!hot);
    };
    const onLeave = () => (el.style.opacity = 0);

    const tick = () => {
      cx += (x - cx) * 0.18; // easing: lower = floatier
      cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor-circle" />;
}
