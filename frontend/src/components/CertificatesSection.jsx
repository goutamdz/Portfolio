import { useNavigate } from "react-router-dom";

const certificates = [
  {
    title: "Social Networks",
    issuer: "IIT Ropar -NPTEL",
    date: "Jul-Oct 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuZIE0sBW1TumDoQRDx0tahiqdv7y7DUzKg&s",
    redirectLink:"https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs120/Course/NPTEL24CS120S105690038504030950.pdf"
},
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Google",
        date: "November 9, 2023",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/VGYNLMNYPXKA"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "November 9, 2023",
      logo: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F406e0eac-4809-48b7-acd9-ff20f112b72e_1080x1080.jpeg",
      redirectLink:"https://www.coursera.org/account/accomplishments/verify/L3F8L5FJB5RT"
  },
    {
        title: "Dynamic Programming, Greedy Algorithms",
        issuer: "University of Colorado Boulder",
        date: "May 5, 2024",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/45SSAWKCLVSJ"
    },
    {
        title: "Prompt Engineering for ChatGPT",
        issuer: "Vanderbilt University",
        date: "February 15, 2024",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/6NDXT5PCEJPS"
    },
    {
        title: "ChatGPT Advanced Data Analysis",
        issuer: "Vanderbilt University",
        date: "April 29, 2024",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/VQ54Y9N8ABZ6"
    },
    {
        title: "GenAI for Everyone",
        issuer: "Fractal Analytics",
        date: "April 29, 2024",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/7T2QNL6RLZM9"
    },
    {
        title: "Algorithms on Strings",
        issuer: "University of California San Diego",
        date: "February 15, 2024",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/4b/a551cb6e1307836a21059a79e7ae70/UCSanDiego-Coursera-square.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/7B9BTKMHCLS6"
    },
    {
        title: "Generative AI with Large Language Models",
        issuer: "DeepLearning.AI",
        date: "February 15, 2024",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b4/5cb90bb92f420b99bf323a0356f451/Icon.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/7DJHXP635HML"
    },
    {
        title: "Approximation Algorithms and Linear Programming",
        issuer: "University of Colorado Boulder",
        date: "April 29, 2024",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/HK3URQR2ATHJ"
    },
    {
        title: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
        issuer: "Scrimba",
        date: "April 29, 2024",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/40/d548ef33b3401f942edc9c24840b52/social.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/548T87XUG6Y9"
    },
    {
      title: "IBM DevOps and Software Engineering",
      issuer: "IBM",
      date: "October 15, 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
      redirectLink:"https://www.coursera.org/account/accomplishments/professional-cert/TYUOIIVOI1UG"
    },
    {
        title: "ChatGPT for Beginners: Save time with Microsoft Excel",
        issuer: "Coursera Project Network",
        date: "February 13, 2024",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/K9QH9BHG3YHQ"
    },
    {
        title: "Introduction to Large Language Models",
        issuer: "Google Cloud",
        date: "January 31, 2024",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/fa9028074941789429dfc1d1b71ddf/gc-logo-360x360.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/VGR55YDA4R78"
      },
      {
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        date: "January 23, 2024",
        logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/fa9028074941789429dfc1d1b71ddf/gc-logo-360x360.png?auto=format%2Ccompress&dpr=2&w=80&h=80",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/TVKYCMSXZ8F7"
      },
    {
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      date: "November 27, 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
      redirectLink:"https://www.coursera.org/account/accomplishments/verify/0PYGMFLH8DCJ"
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM",
      date: "November 26, 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
      redirectLink:"https://www.coursera.org/account/accomplishments/verify/L94J4N7X484J"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "November 26, 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
      redirectLink:"https://www.coursera.org/account/accomplishments/verify/SXI7192BQDCW"
    },
    {
        title: "Developing Front-End Apps with React",
        issuer: "IBM",
        date: "November 26, 2024",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
        redirectLink:"https://www.coursera.org/account/accomplishments/verify/ZCRGQSLTOCCV"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "Johns Hopkins University",
      date: "April 29, 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
      redirectLink:"https://www.coursera.org/account/accomplishments/verify/S2AJ9753N566"
    },
    {
      title: "Server side JavaScript with Node.js",
      issuer: "NIIT",
      date: "April 29, 2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
      redirectLink:"https://www.coursera.org/account/accomplishments/verify/XZBLS88Q65XK"
    },
    {
      title: "Communication Strategies for a Virtual Age",
      issuer: "University of Toronto",
      date: "April 3, 2023",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqW-WO7lKRi5KoLgy1aNHCk-A-3oGEjhRVw&s",
      redirectLink:"https://www.coursera.org/account/accomplishments/verify/SXI7192BQDCW"
    }
    
  ];
  
  const CertificateCard = ({ title, issuer, date, logo,redirectLink }) => {
    const navigate = useNavigate();
    return (
      <div className="bg-[#121212] hover:bg-[#1a1a1a] transition-colors duration-200 p-4 rounded-lg flex items-center space-x-4 border border-[#1f1f1f] cursor-pointer"
      onClick={() => window.open(redirectLink, '_blank')}
      >
        <img src={logo} alt={issuer} className="h-10 w-10 object-contain rounded-md" />
        <div>
          <h4 className="text-white font-semibold">{title}</h4>
          <p className="text-gray-400 text-sm">{issuer} • {date}</p>
        </div>
      </div>
    );
  };
  
  const CertificatesSection = () => {
    return (
      <div className="bg-[#0d0d0d] min-h-screen py-12 px-6 text-white flex flex-col items-center justify-center ">
        <h2 className="text-4xl font-bold mb-2 mt-10">Certificates</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          I've participated in many contests, courses and tests and got certified in many skills. You can find the certificates below.
        </p>
        <div className="space-y-4 w-[97%] mx-auto">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    );
  };
  
  export default CertificatesSection;
  