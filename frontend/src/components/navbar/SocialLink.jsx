// SocialLink.jsx
import React from 'react';

function SocialLink({ className }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://www.linkedin.com/in/iamgoutamkumar"
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none"
      >
        <i className="ri-linkedin-box-fill text-2xl cursor-pointer transition-colors duration-300 hover:text-blue-500 transform hover:scale-110" />
      </a>
      <a
        href="https://github.com/goutamdz"
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none"
      >
        <i className="ri-github-fill text-2xl cursor-pointer transition-colors duration-300 hover:text-purple-500 transform hover:scale-110" />
      </a>
      <a
        href="https://linktr.ee/goutamkumar07"
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none"
      >
        <i className="ri-external-link-line text-2xl cursor-pointer transition-colors duration-300 hover:text-green-500 transform hover:scale-110" />
      </a>

      {/*TODO:Dark and light theme toggle icon */}
      {/* <div>
        <i
          className="ri-moon-fill text-xl hidden md:flex cursor-pointer transition-colors duration-300 hover:text-yellow-500"
        />
      </div> */}
    </div>
  );
}

export default SocialLink;