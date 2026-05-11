import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MyIntro = () => {
  const paragraphs = [
    `I'm Goutam Kumar — a Full Stack Developer (Backend-focused) from Jharkhand, India. I specialize in building robust backend systems, data pipelines, and scalable web applications using modern technologies.`,

    `My programming journey started with curiosity about how systems work. I began with C, then C++, Java, and JavaScript, continuously expanding my understanding of different paradigms. Over time, I discovered my true passion: backend engineering — designing APIs, databases, and infrastructure that power reliable applications.`,

    `At MAQ Software, I work with Azure, Microsoft Fabric, Power BI, and Python to build data-driven solutions. I design backend architectures using Node.js, Express, and databases like PostgreSQL and MongoDB. I'm also deeply invested in DevOps practices — containerization with Docker, orchestration with Kubernetes, CI/CD pipelines with Jenkins and GitHub Actions, and infrastructure automation.`,

    `I believe in writing clean, optimized code. That's why I've solved 800+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks. This foundation helps me design efficient solutions and think critically about trade-offs in system design.`,

    `Currently, I'm in my final year of Computer Science at Lovely Professional University. Beyond coding, I'm fascinated by how technology transforms industries — especially in finance, data analytics, and cloud infrastructure. I'm always exploring new patterns, best practices, and emerging tools.`,

    `When I step away from the keyboard, I enjoy playing cricket and football, or unwinding with a good series. I believe that growth is a continuous journey — every challenge overcome, every project shipped, and every failure analyzed brings me closer to mastery.`,

    `For me, development isn't just a profession — it's a commitment to building systems that matter, solving problems elegantly, and growing as an engineer every single day.`
  ];

  return (
    <section className="relative min-h-screen bg-[#05060f] text-white pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(108,99,255,0.2),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(14,203,129,0.12),_transparent_40%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A backend-focused full-stack developer passionate about building scalable systems and solving complex problems with code.
          </p>
        </motion.div>

        <div className="space-y-8">
          {paragraphs.map((para, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
            >
              <p className="text-slate-300 text-lg leading-8">
                {para}
              </p>
            </motion.div>
          ))}

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mt-12 rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8 shadow-xl shadow-cyan-500/10 backdrop-blur-xl text-center"
          >
            <p className="text-slate-300 text-lg mb-6">
              Let's collaborate on something great. Feel free to reach out — I love discussing backend architecture, system design, and new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://x.com/GoutamKumar112" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold transition duration-300"
              >
                Twitter/X
              </a>
              <a 
                href="mailto:Goutamhzb1@gmail.com"
                className="px-6 py-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 font-semibold border border-cyan-500/30 transition duration-300"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyIntro;
