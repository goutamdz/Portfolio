import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
    {
        title:'Personal Expense Tracker',
        description:'Helps users track expenses and manage budgets with a full-stack MERN application featuring real-time updates and data persistence.',
        image:'https://m.media-amazon.com/images/I/610d4LTTpvL._UF1000,1000_QL80_.jpg',
        tags: ['React.js', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB'],
        github: 'https://github.com/goutamdz/expense-tracker',
        live: 'https://manageyourexpense.vercel.app',
    },
    {
        title: 'Ride Pooling Platform',
        description:
            'Real-time ride booking system with WebSocket integration for live updates, user/driver authentication, and responsive design.',
        image: "https://etedge-insights.com/wp-content/uploads/2024/04/shutterstock_1228384834.jpg", 
        tags: ['React.js', 'Socket.IO', 'MongoDB', 'Express.js', 'Node.js'],
        github: 'https://github.com/goutamdz/book-your-ride',
        live: '',
    },
    {
        title: 'Question Search Engine',
        description:
            'Efficient search system supporting 100k+ questions with filtering and categorization, optimized for fast queries and user experience.',
        image: "https://cdn.pixabay.com/photo/2014/05/18/18/25/icon-347230_1280.png", 
        tags: ['React.js', 'MongoDB', 'Express.js', 'Node.js', 'TailwindCSS'],
        github: 'https://github.com/goutamdz/Quest-Search',
        live: 'https://question-search.vercel.app/',
    },
    {
        title: 'Digital Wallet',
        description:
            'Secure peer-to-peer money transfer with MongoDB transactions ensuring ACID compliance for financial operations.',
        image: 'https://cdn.pixabay.com/photo/2022/05/10/04/10/money-transfer-7185873_1280.png',
        tags: ['React.js', 'MongoDB Transactions', 'Express.js', 'Node.js'],
        github: 'https://github.com/goutamdz/Digital-Wallet',
        live: '',
    },
    {
        title: 'Room Listing Platform',
        description:
            'Full-stack rental application with search, filtering, and user-friendly interface for property discovery and listing.',
        image: 'https://i.ytimg.com/vi/Znt3LAzqkXw/maxresdefault.jpg',
        tags: ['EJS', 'Express.js', 'Node.js', 'MongoDB', 'Bootstrap'],
        github: 'https://github.com/goutamdz/RoomNearBy',
        live: '',
    },
    {
        title: 'Discussion Forum',
        description:
            'Community discussion platform built with PHP and MySQL enabling topic-based conversations and user engagement.',
        image: 'https://www.educateagainsthate.com/wp-content/uploads/2022/05/Lets-Discuss-yellow.png',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        github: 'https://github.com/goutamdz/Discuss',
        live: '',
    },
    {
        title: 'Sudoku Solver',
        description:
            'Intelligent sudoku solver using backtracking algorithm with optimized performance and real-time visualization.',
        image: 'https://store-images.s-microsoft.com/image/apps.51614.14043557400480129.785a8c27-f3e7-4873-a3fb-94a2c71337d6.3ec510c9-bd42-4693-a2d2-ab63cf055fee?mode=scale&q=90&h=1080&w=1920',
        tags: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'Node.js'],
        github: 'https://github.com/goutamdz/Sudoku-Solver',
        live: '',
    },
    {
        title: 'Blog Platform',
        description:
          'Fullstack blog with rich content editor, admin dashboard, and user authentication using React and Appwrite backend.',
        image: 'https://images04.nicepage.com/feature/583347/blog-category.jpg',
        tags: ['React.js', 'TailwindCSS', 'Appwrite', 'TinyMCE'],
        github: 'https://github.com/goutamdz/Blog',
        live: '',
      },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 shadow-xl shadow-slate-950/40 backdrop-blur-xl hover:border-cyan-400/50 transition duration-300"
  >
    <div className="relative h-56 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-slate-300 text-sm leading-6 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, i) => (
          <span 
            key={i} 
            className="text-xs px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-500/30 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white transition duration-300 text-sm font-medium"
        >
          <FaGithub size={16} /> Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 transition duration-300 text-sm font-medium border border-cyan-500/30"
          >
            <FaLink size={16} /> Live
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectSection = () => {
  return (
    <section className="relative min-h-screen bg-[#05060f] text-white pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(108,99,255,0.2),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(14,203,129,0.1),_transparent_40%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing full-stack development, backend architecture, and practical problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
