import React from "react";

const MyIntro = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#0d0d0d] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About me</h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Hello! I am <span className="font-semibold text-white">Goutam Kumar</span>, a <span className="font-semibold text-white">Full Stack Web developer</span> from India. As a developer, I am deeply interested in both design and coding, and I enjoy using <span className="font-semibold text-white">React.js</span> to build web application interfaces and functionality. I am pursuing my Bachelor's degree in <span className="font-semibold text-white">Computer Science</span>.
          </p>

          <p>
            My interest in computers started at a very young age. I remember my <span className="font-semibold text-white">first website</span> that I made years ago, which had a <span className="italic text-white">terrible interface</span> and design. Its purpose was to download movies and other stuff — unfortunately, I no longer have the code, but it remains a memorable experience.
          </p>

          <p>
            From a young age, I was eager to learn as much as possible. One of my earliest experiences with computers was creating my own website, which (again) had a terrible interface and design. Despite this, I was excited to create something on my own and share it online.
          </p>

          <p>
            After this, I became more interested in <span className="font-semibold text-white">web development</span> and began to find resources to learn more. I watched tutorials, read articles, and built projects. The <span className="font-semibold text-white">first programming language</span> I learned was <span className="font-semibold text-white">C</span>, and from there, I also learned <span className="font-semibold text-white">Java</span> and <span className="font-semibold text-white">C++</span>. I also explored <span className="font-semibold text-white">databases</span> like <span className="font-semibold text-white">Mongodb</span> (my favorite so far), <span className="font-semibold text-white">MySQL</span>, and <span className="font-semibold text-white">Postgres</span>.
          </p>

          <p>
            In addition to coding, I enjoy playing sports like Cricket and Football . I also enjoy drama movies and web series when I get free time.
          </p>

          <p>If you asked me what stack I prefer, I’d say:</p>

          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-semibold text-white">Framework:</span> React.js</li>
            <li><span className="font-semibold text-white">Database:</span> Mongodb</li>
            <li><span className="font-semibold text-white">CSS:</span> TailwindCSS</li>
          </ul>

          <p>
            These three tools let you do almost anything! I love building with them — whether it's a static site, a blog, or a full-stack web app.
          </p>

          <p>
            Feel free to <span className="italic text-white">check out my portfolio</span>. If you have any questions, you can reach out to me on <a href="https://x.com/GoutamKumar112" className="text-teal-400 hover:underline">Twitter</a> or email me at <a href="mailto:Goutamhzb1@gmail.com" className="text-teal-400 hover:underline">Goutamhzb1@gmail.com</a>. I’m always open to discussing new projects or opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyIntro;
