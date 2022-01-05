import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { BsYoutube, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Contacts: React.FC = () => {
  return (
    <>
      <Layout pageTitle="Контакты">
        {/* <div className="mb-5">
          <Link
            to="/"
            className="inline-flex items-center hover:underline decoration-dashed underline-offset-4">
            <div className="icon mr-5 p-3 bg-slate-100 rounded-full">
              <BsYoutube color="#F70001" size="2.5rem" />
            </div>
            <span>Youtube</span>
          </Link>
        </div> */}
        <div className="mb-5">
          <a
            href="https://www.linkedin.com/in/seem16/"
            target="_blank"
            className="inline-flex items-center hover:underline decoration-dashed underline-offset-4">
            <div className="icon mr-5 p-3 bg-slate-100 rounded-full">
              <BsLinkedin color="#0766C2" size="2.5rem" />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="mb-5">
          <a
            href="https://github.com/seem16"
            target="_blank"
            className="inline-flex items-center hover:underline decoration-dashed underline-offset-4">
            <div className="icon mr-5 p-3 bg-slate-100 rounded-full">
              <BsGithub color="#000000" size="2.5rem" />
            </div>
            <span>Github</span>
          </a>
        </div>
        <div className="mb-5">
          <a
            href="https://www.instagram.com/greenfl4me/"
            target="_blank"
            className="inline-flex items-center hover:underline decoration-dashed underline-offset-4">
            <div className="icon mr-5 p-3 bg-slate-100 rounded-full">
              <BsInstagram color="#000" size="2.5rem" />
            </div>
            <span>Instagram</span>
          </a>
        </div>
      </Layout>
    </>
  );
};

export default Contacts;
