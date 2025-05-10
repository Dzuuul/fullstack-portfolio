"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { TypingEffect } from "@/components/ui/aceternity/typing-effect";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                <TextGenerateEffect
                  words="Full-Stack Developer"
                  className="text-primary"
                />
              </h1>
              <div className="h-12 md:h-16 mt-2">
                <TypingEffect
                  words={[
                    "Building modern web applications",
                    "Specializing in Next.js & React",
                    "Creating beautiful user experiences",
                    "Developing scalable backend systems",
                  ]}
                  className="text-xl md:text-2xl text-muted-foreground"
                  cursorClassName="text-xl md:text-2xl text-muted-foreground"
                />
              </div>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="bg-primary hover:opacity-90">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowResumeModal(true)}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/5 rounded-lg border border-border/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-primary/80">
                Professional Portfolio
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={showResumeModal} onOpenChange={setShowResumeModal}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
            <DialogDescription>
              Preview your resume before downloading
            </DialogDescription>
          </DialogHeader>
          <div className="h-[500px] overflow-auto border rounded-md p-4">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">Full-Stack Developer</p>
                <p className="text-sm text-muted-foreground">
                  San Francisco, CA • contact@example.com • (555) 123-4567
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b pb-1 mb-2">
                  Summary
                </h3>
                <p>
                  Experienced full-stack developer with over 5 years of
                  experience building modern web applications. Specialized in
                  React, Next.js, and Node.js with a strong focus on creating
                  performant and accessible user interfaces.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b pb-1 mb-2">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium">
                        Senior Developer at Tech Company
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        2020 - Present
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>
                        Led development of company's flagship product,
                        increasing user engagement by 40%
                      </li>
                      <li>
                        Implemented CI/CD pipeline reducing deployment time by
                        60%
                      </li>
                      <li>
                        Mentored junior developers and conducted code reviews
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-medium">
                        Web Developer at Startup Inc.
                      </h4>
                      <span className="text-sm text-muted-foreground">
                        2018 - 2020
                      </span>
                    </div>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>
                        Developed responsive web applications using React and
                        Node.js
                      </li>
                      <li>
                        Optimized database queries resulting in 30% faster page
                        loads
                      </li>
                      <li>
                        Collaborated with design team to implement UI/UX
                        improvements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b pb-1 mb-2">
                  Education
                </h3>
                <div className="flex justify-between">
                  <h4 className="font-medium">B.S. Computer Science</h4>
                  <span className="text-sm text-muted-foreground">
                    2014 - 2018
                  </span>
                </div>
                <p className="text-sm">University of Technology</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b pb-1 mb-2">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    Docker
                  </span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    AWS
                  </span>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowResumeModal(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                // In a real implementation, this would trigger a download
                // For now, we'll just close the modal
                alert("Resume download started!");
                setShowResumeModal(false);
              }}
            >
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
