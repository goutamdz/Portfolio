import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


const certificates = [
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    date: "November 26, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/L94J4N7X484J",
    category: "Backend"
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    date: "November 26, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/SXI7192BQDCW",
    category: "Cloud"
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    date: "November 27, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/0PYGMFLH8DCJ",
    category: "Software Engineering"
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    date: "November 26, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/ZCRGQSLTOCCV",
    category: "Frontend"
  },
  {
    title: "IBM DevOps and Software Engineering",
    issuer: "IBM",
    date: "October 15, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/professional-cert/TYUOIIVOI1UG",
    category: "DevOps"
  },
  {
    title: "Dynamic Programming, Greedy Algorithms",
    issuer: "University of Colorado Boulder",
    date: "May 5, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/45SSAWKCLVSJ",
    category: "DSA"
  },
  {
    title: "Algorithms on Strings",
    issuer: "University of California San Diego",
    date: "February 15, 2024",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/4b/a551cb6e1307836a21059a79e7ae70/UCSanDiego-Coursera-square.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/7B9BTKMHCLS6",
    category: "DSA"
  },
  {
    title: "Approximation Algorithms and Linear Programming",
    issuer: "University of Colorado Boulder",
    date: "April 29, 2024",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/HK3URQR2ATHJ",
    category: "DSA"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "November 9, 2023",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/L3F8L5FJB5RT",
    category: "Networking"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "November 9, 2023",
    logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F406e0eac-4809-48b7-acd9-ff20f112b72e_1080x1080.jpeg",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/VGYNLMNYPXKA",
    category: "Systems"
  },
  {
    title: "Social Networks",
    issuer: "IIT Ropar -NPTEL",
    date: "Jul-Oct 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuZIE0sBW1TumDoQRDx0tahiqdv7y7DUzKg&s",
    redirectLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs120/Course/NPTEL24CS120S105690038504030950.pdf",
    category: "Advanced"
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University",
    date: "April 29, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/S2AJ9753N566",
    category: "Frontend"
  },
  {
    title: "Server side JavaScript with Node.js",
    issuer: "NIIT",
    date: "April 29, 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/XZBLS88Q65XK",
    category: "Backend"
  },
  {
    title: "Communication Strategies for a Virtual Age",
    issuer: "University of Toronto",
    date: "April 3, 2023",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/04/1df8943d27a485a986a3ebf10c83d9/UofT-Crest-Square.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
    redirectLink: "https://www.coursera.org/account/accomplishments/verify/53TAT732D57Q",
    category: "Soft Skills"
  }
];

const categoryColors = {
  Backend: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-200",
  Frontend: "from-violet-500/20 to-violet-600/20 border-violet-500/30 text-violet-200",
  Cloud: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-200",
  DevOps: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-200",
  DSA: "from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-200",
  Networking: "from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-200",
  Systems: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-200",
  Advanced: "from-rose-500/20 to-rose-600/20 border-rose-500/30 text-rose-200",
  "Software Engineering": "from-teal-500/20 to-teal-600/20 border-teal-500/30 text-teal-200",
  "Soft Skills": "from-slate-500/20 to-slate-600/20 border-slate-500/30 text-slate-200",
};

const CertificateCard = ({ title, issuer, date, logo, redirectLink, category }) => {
  const colorClass = categoryColors[category] || categoryColors.Advanced;
  
  return (
    <motion.div
      className={`bg-gradient-to-r from-slate-900/60 to-slate-950/60 hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300 p-5 rounded-2xl flex items-center gap-4 border border-white/10 cursor-pointer shadow-lg shadow-slate-950/20 backdrop-blur-xl hover:border-white/20`}
      onClick={() => window.open(redirectLink, "_blank")}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        src={logo}
        alt={issuer}
        className="h-12 w-12 object-contain rounded-lg border border-white/10 flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-semibold text-sm line-clamp-1">{title}</h4>
        <p className="text-slate-400 text-xs mt-1">
          {issuer} • {date}
        </p>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-gradient-to-r ${colorClass} border`}>
        {category}
      </div>
    </motion.div>
  );
};

const CertificatesSection = () => {
  return (
    <section className="relative min-h-screen bg-[#05060f] text-white pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,203,129,0.15),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(108,99,255,0.1),_transparent_40%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Professional certifications and course achievements spanning backend development, cloud infrastructure, algorithms, and software engineering.
          </p>
        </motion.div>

        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;