"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import "../styles/styles.css";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Link,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-blue-950">
        <motion.div
          className="text-center space-y-4 md:space-y-6 max-w-3xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 text-balance typing-animation">
            Hi, I'm <span className="text-blue-600">Keith</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-700 dark:text-blue-200 text-balance">
            A Web Developer
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="#contact" className="flex items-center">
              Get in Touch <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="container mx-auto px-4 py-12 md:py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2 className="section-title" variants={fadeIn}>
          About Me
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-center max-w-2xl mx-auto text-blue-700 dark:text-blue-300 text-balance"
          variants={fadeIn}
        >
          I'm a passionate web developer with a growing interest in both
          frontend and backend development. With 6 months of experience, I
          specialize in creating responsive and user-friendly web applications
          using modern technologies. My goal is to continuously learn and build
          digital experiences that are both visually appealing and highly
          functional.
        </motion.p>
      </motion.section>

      <motion.section
        id="skills"
        className="container mx-auto px-4 py-12 md:py-16 bg-blue-50 dark:bg-blue-900/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2 className="section-title" variants={fadeIn}>
          My Skills
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          variants={fadeIn}
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "MySQL",
            "Docker",
            "AWS",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-sm md:text-lg py-1 md:py-2 px-2 md:px-4 bg-white text-blue-800 dark:bg-blue-800 dark:text-blue-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {skill}
            </Badge>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="projects"
        className="container mx-auto px-4 py-12 md:py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2 className="section-title" variants={fadeIn}>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "E-commerce Platform",
              desc: "A full-stack online store with Angular and Node.js",
              link: "https://github.com/Keiter0309/Nordics",
            },
            {
              title: "Dictionary Application",
              desc: "A dictionary app build with React, Express, AWS and MySQl",
              link: "https://github.com/Keiter0309/Dictiohub-Dictionary",
            },
            {
              title: "Portfolio Website",
              desc: "A responsive portfolio site using modern web technologies",
              link: "https://github.com/Keiter0309",
            },
            {
              title: "Weather Application",
              desc: "A weather app build with Next.js and OpenWeather API",
              link: "https://github.com/Keiter0309/BreezyWeatherApp",
            },
            {
              title: "Hotel Booking System",
              desc: "A hotel booking system with PHP and MySQL",
              link: "https://github.com/Keiter0309/Sogo-Hotel",
            },
          ].map((project, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-white dark:bg-blue-900 border-blue-200 dark:border-blue-700 card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-blue-800 dark:text-blue-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base text-blue-600 dark:text-blue-300">
                    {project.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center"
                    >
                      View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="container mx-auto px-4 py-12 md:py-16 bg-blue-50 dark:bg-blue-900/50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2 className="section-title" variants={fadeIn}>
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-center mb-6 md:mb-8 text-blue-700 dark:text-blue-300 text-balance"
          variants={fadeIn}
        >
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={fadeIn}
        >
          <a
            target="_blank"
            href="mailto:vuongtuankiet33@gmail.com"
            className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-800 card-hover flex items-center justify-center p-2 rounded-lg"
          >
            <Mail className="h-4 w-4 mr-2" /> Email Me
          </a>
          <a
            target="_blank"
            href="https://github.com/Keiter0309"
            className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-800 card-hover flex items-center justify-center p-2 rounded-lg"
          >
            <Github className="h-4 w-4 mr-2" /> GitHub
          </a>
          <a
            target="_blank"
            href="https://instagram.com/tuan.kietvuonq"
            className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-800 card-hover flex items-center justify-center p-2 rounded-lg"
          >
            <Instagram className="h-4 w-4 mr-2" /> Instagram
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}
