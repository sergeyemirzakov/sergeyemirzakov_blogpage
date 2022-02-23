import React from 'react';
import Layout from '../components/layout';
import { BsYoutube, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

interface ILinkItems {
  text: string;
  icon: React.SVGProps<SVGSVGElement>;
  link: string;
}

const linkItems: ILinkItems[] = [
  {
    text: 'LinkedIn',
    icon: <BsLinkedin color="#0766C2" size="2.5rem" />,
    link: 'https://www.linkedin.com/in/seem16/',
  },
  {
    text: 'Github',
    icon: <BsGithub color="#000000" size="2.5rem" />,
    link: 'https://github.com/sergeyemirzakov',
  },
];

const Contacts: React.FC = () => {
  return (
    <>
      <Layout pageTitle="Контакты">
        {linkItems.map(({ text, icon, link }) => (
          <div className="mb-5">
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center hover:underline decoration-dashed underline-offset-4">
              <div className="icon mr-5 p-3 bg-slate-100 rounded-full">{icon}</div>
              <span>{text}</span>
            </a>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Contacts;
