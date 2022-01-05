import React from 'react';
import { Link } from 'gatsby';
import { BsYoutube, BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div className="social_links flex items-center">
      <Link to="/" className="mr-7 transition-transform duration-500 hover:-translate-y-2">
        <div className="p-4 bg-slate-100 rounded-full">
          <BsYoutube color="#F70001" size="3rem" />
        </div>
      </Link>
      <Link to="/" className="mr-7 transition-transform duration-500 hover:-translate-y-2">
        <div className="p-4 bg-slate-100 rounded-full">
          <BsLinkedin color="#0766C2" size="3rem" />
        </div>
      </Link>
      <Link to="/" className="mr-7 transition-transform duration-500 hover:-translate-y-2">
        <div className="p-4 bg-slate-100 rounded-full">
          <BsGithub color="#000000" size="3rem" />
        </div>
      </Link>
      <Link to="/" className="mr-7 transition-transform duration-500 hover:-translate-y-2">
        <div className="p-4 bg-slate-100 rounded-full">
          <BsTelegram color="#29A9EA" size="3rem" />
        </div>
      </Link>
    </div>
  );
};

export default SocialLinks;
