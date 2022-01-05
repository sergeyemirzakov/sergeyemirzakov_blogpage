import React from 'react';
import { Link } from 'gatsby';

import { GrGatsbyjs } from 'react-icons/gr';
import { SiTailwindcss } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="pb-10 pt-14">
      <div className="footer_content flex items-center justify-between flex-wrap">
        <div className="footer_content_link flex text-xl mt-8 sm:mt-0">
          <a className="flex mr-4" href="https://www.gatsbyjs.com/" target="_blank">
            <GrGatsbyjs className="mr-3.5" /> Gatsby
          </a>
          <a className="flex" href="https://tailwindcss.com/" target="_blank">
            <SiTailwindcss className="mr-3.5" />
            Tailwind
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
