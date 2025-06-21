"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Dekorasi Kiri Atas */}
      <div className="absolute top-8 left-8 z-0">
        <div className="bg-white shadow-lg rounded-xl p-4 rotate-12">
          <Zap className="text-primary w-8 h-8" />
        </div>
      </div>
      {/* Dekorasi Kanan Bawah */}
      <div className="absolute bottom-8 right-8 z-0">
        <div className="bg-white shadow-lg rounded-xl p-4 -rotate-12">
          <Zap className="text-primary w-8 h-8" />
        </div>
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <Badge className="bg-emerald-200 text-emerald-900 px-4 py-2 rounded-full text-sm font-medium mb-2">
            <span className="mr-2">🟢</span> New! Record user interviews without
            recording bots
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
            <TextGenerateEffect
              words="Record interviews. Centralise feedback automatically."
              className="text-primary"
            />
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Record and organize user interviews automatically. Focus on what
            matters – connecting with users.
          </p>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold shadow-lg mt-2"
          >
            Get started – it's free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
