import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MyIntro = () => {
  const paragraphs = [
    `Hi, I’m Goutam Kumar — a Full Stack Developer and DevOps enthusiast from Jharkhand, India — someone who believes that technology is not just about writing code, but about creating meaningful experiences that solve real problems.`,

    `My journey with computers began out of curiosity. As a kid, I was fascinated by how websites worked. I still remember building my very first website — it looked terrible, but for me, it was magic. That moment sparked a lifelong interest in understanding how technology connects people and ideas.`,

    `As I grew, curiosity turned into passion. I started learning programming with C, then explored C++, Java, JavaScript, and later C#. Every new language felt like unlocking a new way to think. Over time, I found my real excitement in web development — the space where logic meets creativity. I began building projects with React.js, Node.js, Express, PostgreSQL, PHP, EJS, Django, and MongoDB, and discovered the joy of turning concepts into living, interactive applications.`,

    `I also developed a strong interest in DevOps — learning how to make development more efficient and scalable. Tools like AWS, Git, Puppet, Ansible, and Docker became part of my daily workflow, helping me understand the bigger picture of software delivery and deployment.`,

    `At the same time, I wanted to become stronger at solving problems, so I dove deep into Data Structures and Algorithms. So far, I’ve solved 800+ DSA problems across LeetCode and GeeksforGeeks, which taught me how to think critically and write optimized code under constraints.`,

    `Currently, I’m in my final year of Computer Science, continuing to build, learn, and explore. Beyond tech, I have a deep interest in finance — I love studying how technology is reshaping the financial world, from markets to digital payment systems.`,

    `When I’m not coding, you’ll probably find me on a cricket field, playing football, or watching a drama series to unwind. I believe growth is a never-ending process — every bug fixed, every project built, and every failure learned from is another step forward.`,

    `For me, being a developer isn’t just a career — it’s a journey of curiosity, creativity, and constant improvement.`,

    `Feel free to check out my portfolio. If you have any questions, you can reach out to me on Twitter or email me at Goutamhzb1@gmail.com. I’m always open to discussing new projects or opportunities.`
  ];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      



  return (
    <section className="py-20 px-4 md:px-12 bg-[#0d0d0d] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 mt-15">About me</h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              {para}
            </motion.p>
          ))}



          {/* Twitter/Email links (animated too) */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            Feel free to <span className="italic text-white">check out my portfolio</span>. If you have any questions, you can reach out to me on <a href="https://x.com/GoutamKumar112" className="text-teal-400 hover:underline">Twitter</a> or email me at <a href="mailto:Goutamhzb1@gmail.com" className="text-teal-400 hover:underline">Goutamhzb1@gmail.com</a>. I’m always open to discussing new projects or opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MyIntro;
