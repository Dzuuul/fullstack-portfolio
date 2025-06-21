"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-8 md:h-20 md:py-0">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 md:gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} FikriMaulana. All rights reserved.
          </p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
