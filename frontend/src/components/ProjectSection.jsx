import React from 'react';
import questSearch from "../assets/quest.png"

const projects = [
    {
        title: 'Ride pooling platform [on progress]',
        description:
            'This web app is built using React.js, TailwindCSS, MongoDB, and Socket.IO. It allows users to book rides in real-time and drivers to accept them. It features live ride status updates, user/driver authentication, and a responsive interface.',
        image: "https://i0.wp.com/m-rides.com/pk/wp-content/uploads/2023/02/M-Rides-Booking-App.jpg?fit=1170%2C843&ssl=1", 
        tags: ['React.js', 'TailwindCSS', 'MongoDB','Socket.IO','Express.js', 'Node.js', 'Axios'],
        github: 'https://github.com/goutamdz/book-your-ride',
        live: '',
    },
    {
        title: 'Question-search',
        description:
            'This web app is built using React.js and Mongodb. It allows users to search specific questions efficiently over 100k+ questions with different categories. The app is designed to be user-friendly and provides a seamless experience for users looking for specific Question.',
        image: "https://cdn.pixabay.com/photo/2014/05/18/18/25/icon-347230_1280.png", 
        tags: ['React.js', 'Tailwind CSS', 'MongoDb', 'Express.js', 'Node.js', 'Axios'],
        github: 'https://github.com/goutamdz/Quest-Search',
        live: 'https://question-search.vercel.app/',
    },
    {
        title: 'Digital-wallet',
        description:
            'This web app is built using React.js and Mongodb. It allows registered users to send and receive dummy money/coin easily. The app is designed to be user-friendly and provides a seamless & hassle free experience.',
        image: 'https://cdn.pixabay.com/photo/2022/05/10/04/10/money-transfer-7185873_1280.png',
        tags: ['React.js', 'Tailwind CSS', 'MongoDb', 'Express.js', 'Node.js', 'Axios',"Mongodb Transactions"],
        github: 'https://github.com/goutamdz/Digital-Wallet',
        live: '',
    },
    {
        title: 'Room Listing Web App',
        description:
            'This web app is built using Ejs, CSS, Bootstrap, JavaScript and Mongodb. It allows users to list their rooms for rent and search for available rooms. The app is designed to be user-friendly and provides a seamless experience for users looking for accommodation.',
        image: 'https://i.ytimg.com/vi/Znt3LAzqkXw/maxresdefault.jpg',
        tags: ['Ejs', 'CSS', 'MongoDb', 'Express.js', 'Node.js', 'JavaScript',"Bootstrap"],
        github: 'https://github.com/goutamdz/RoomNearBy',
        live: '',
    },
    {
        title: 'Discuss',
        description:
            'This web app is built using PHP, HTML, CSS, Bootstrap, JavaScript and MySQL. It allows users to discuss various topics and share their opinions. The app is designed to be user-friendly and provides a seamless experience for users looking to engage in discussions.',
        image: 'https://www.educateagainsthate.com/wp-content/uploads/2022/05/Lets-Discuss-yellow.png',
        tags: ['PHP',"HTML", 'CSS', 'MySQL', 'Bootstrap','JavaScript'],
        github: 'https://github.com/goutamdz/Discuss',
        live: '',
    },
    {
        title: 'Sudoku Solver',
        description:
            'This web app, built with HTML, CSS, JavaScript, and Express.js, allows users to fill in a 9x9 Sudoku grid and uses an efficient algorithm to automatically solve the puzzle.',
        image: 'https://store-images.s-microsoft.com/image/apps.51614.14043557400480129.785a8c27-f3e7-4873-a3fb-94a2c71337d6.3ec510c9-bd42-4693-a2d2-ab63cf055fee?mode=scale&q=90&h=1080&w=1920',
        tags: ["HTML", 'CSS', 'JavaScript', 'Express.Js','Node.js'],
        github: 'https://github.com/goutamdz/Sudoku-Solver',
        live: '',
    },
    {
        title: 'Blog',
    description:
      'This web app is built using React.js, Appwrite, TinyMCE, and TailwindCSS. It allows the admin to post, edit, update, and delete blog posts. Users can view blog posts and leave comments. The app also includes authentication for both admins and users. ',
    image: 'https://images04.nicepage.com/feature/583347/blog-category.jpg',
    tags: ['React.js', 'TalwindCSS', 'AppWrite', "TinyMCE"],
    github: 'https://github.com/goutamdz/Blog',
    live: '',
  },
  {
    title: 'static Youtube clone',
    description:
    'This web app is built using HTML, CSS, and JavaScript. I created this project to gain experience in building large-scale tech interfaces by replicating the UI of a YouTube clone.',
    image: 'https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500',
    tags: ["HTML","CSS","JavaScript"],
    github: 'https://github.com/goutamdz/Youtube-frontend',
    live: 'https://goutamdz.github.io/Youtube-frontend/',
  }

];

const ProjectSection = () => {
  return (
    <section className="bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 pt-20">Projects</h2>
        <p className="mb-10 text-gray-400">
          I've been making various types of projects, some of them were basics and some of them were complicated. So far I've made <strong>these</strong> projects.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover object-center rounded-t-2xl" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  {project.live && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                >
                    <i className="fas fa-link"></i> Live
                </a>
                )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
