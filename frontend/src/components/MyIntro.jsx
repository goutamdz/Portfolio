import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MyIntro = () => {
  const paragraphs = [
    `Hello! I am Goutam Kumar, a Full Stack Web developer from India. As a developer, I am deeply interested in both design and coding, and I enjoy using React.js to build web application interfaces and functionality. I am pursuing my Bachelor's degree in Computer Science.`,
    `My interest in computers started at a very young age. I remember my first website that I made years ago, which had a terrible interface and design. Its purpose was to download movies and other stuff — unfortunately, I no longer have the code, but it remains a memorable experience.`,
    `From a young age, I was eager to learn as much as possible. One of my earliest experiences with computers was creating my own website, which (again) had a terrible interface and design. Despite this, I was excited to create something on my own and share it online.`,
    `After this, I became more interested in web development and began to find resources to learn more. I watched tutorials, read articles, and built projects. The first programming language I learned was C, and from there, I also learned Java and C++. I also explored databases like Mongodb (my favorite so far), MySQL, and Postgres.`,
    `In addition to coding, I enjoy playing sports like Cricket, Football and badminton . I also enjoy watching drama movies and web series when I get free time.`,
    `If you asked me what stack I prefer, I’d say:`,
    `These three tools let you do almost anything! I love building with them — whether it's a static site, a blog, or a full-stack web app.`,
    `Feel free to check out my portfolio. If you have any questions, you can reach out to me on Twitter or email me at Goutamhzb1@gmail.com. I’m always open to discussing new projects or opportunities.`,
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

          {/* List (animated too) */}
          <motion.ul
            className="list-disc list-inside space-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <li><span className="font-semibold text-white">Framework:</span> React.js</li>
            <li><span className="font-semibold text-white">Database:</span> Mongodb</li>
            <li><span className="font-semibold text-white">CSS:</span> TailwindCSS</li>
          </motion.ul>

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
