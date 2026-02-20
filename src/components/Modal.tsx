"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    // Clear query parameters without a full page reload or router.back() 
    window.history.pushState(null, '', window.location.pathname);
    // Dispatch a custom event or rely on re-renders if using searchParams in parent
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] glass-card shadow-2xl overflow-x-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onDismiss}
            className="absolute top-6 right-6 p-2 rounded-full glass-panel text-white/40 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="p-8 md:p-12">
            {children}
          </div>
        </motion.div>
        <div className="absolute inset-0 -z-10" onClick={onDismiss} />
      </div>
    </AnimatePresence>
  );
}
