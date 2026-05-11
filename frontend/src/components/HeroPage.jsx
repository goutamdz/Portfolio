import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBolt, FaCloud, FaDatabase } from "react-icons/fa";
import profile from "../assets/profile.jpeg";

const featureCards = [
  {
    title: "Scalable Backend Architecture",
    description: "RESTful APIs, microservices design, performance tuning and fault tolerance.",
    icon: <FaCloud size={20} className="text-cyan-300" />,
  },
  {
    title: "API & Data Integration",
    description: "Secure backend services, API orchestration and durable data workflows.",
    icon: <FaBolt size={20} className="text-emerald-300" />,
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure automation, containerized deployments and CI/CD pipelines.",
    icon: <FaDatabase size={20} className="text-teal-300" />,
  },
];

const HeroPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05060f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(108,99,255,0.3),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(14,203,129,0.18),_transparent_20%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col gap-10 px-6 pt-32 pb-24 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:w-6/12"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-xl shadow-cyan-500/10">
            <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-100">
              Full Stack Developer · Backend-focused
            </span>
            Building reliable systems with strong backend and full-stack foundations.
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            I create dependable backend services and practical full-stack web applications.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            At MAQ Software, I work on Azure, Microsoft Fabric, Power BI, Python, and backend APIs to support data-driven applications and reporting services.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1nsSJIobumMtf1qC2O-3MEfgtxhd30vTG", "_blank")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-[1.02]"
            >
              Download Resume
            </button>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/10"
            >
              See Projects
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {featureCards.map((card, index) => (
              <div key={index} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">{card.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-5/12"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(14,203,129,0.14),transparent_35%)] pointer-events-none" />
            <div className="relative rounded-[1.75rem] bg-[#0c1119] p-8">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full border border-white/10 shadow-xl shadow-cyan-500/10">
                  <img src={profile} alt="Profile" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Goutam Kumar</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Associate Software Engineer</p>
                  <p className="mt-2 text-sm text-slate-400">MAQ Software • Azure, Microsoft Fabric & Data</p>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Latest Impact</p>
                  <p className="mt-3 text-base font-semibold text-white">Supporting Azure, Microsoft Fabric, and Power BI workloads while building backend APIs and data pipelines.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Technical Story</p>
                  <p className="mt-3 text-base font-semibold text-white">I blend backend engineering with practical full-stack experience to deliver systems that are both stable and user-ready.</p>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">Education</p>
                  <p className="mt-2">B.Tech Computer Science</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">Challenge</p>
                  <p className="mt-2">800+ DSA problems solved, refining problem-solving rigor.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
