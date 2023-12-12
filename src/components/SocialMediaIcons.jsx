import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/in/yaroslav-trofimov-b03244230/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer">
        <i className="fa-brands fa-linkedin text-4xl"></i>
      </a>
      <a
        href="https://www.instagram.com/yarosslav__14/"
        className="hover:opacity-50 transition duration-500 "
        target="_blank"
        rel="noreferrer">
        <i className="fa-brands fa-instagram text-4xl"></i>
        {/* <img src="../assets/instagram.png" alt="instagram-link" /> */}
      </a>
    </div>
  );
};

export default SocialMediaIcons;
