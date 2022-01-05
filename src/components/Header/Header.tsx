import React from 'react';
import { Logo } from '../Logo/Logo';
import { Link } from 'gatsby';
import Theme from './Theme';

import { BsArrowLeftShort } from 'react-icons/bs';
import { MdSpeakerNotes, MdPermContactCalendar } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <header className="pt-8 pb-20">
      <div className="sup_header">
        <Theme />
        <Logo />
      </div>
      <div className="blog flex items-center">
        <Link
          className="inline-flex items-center
          font-bold
          text-2xl
          text-sky-600
          dark:text-sky-500
          hover:underline decoration-dashed underline-offset-4"
          to="/blog">
          <MdSpeakerNotes className="mr-3" />
          Записи в блоге
        </Link>
        <span className="flex items-center text-xl sm:text-2xl ml-3.5 sm:ml-5">
          <BsArrowLeftShort size={'2rem'} /> Статьи и переводы
        </span>
      </div>
      <div className="mt-8 flex">
        <Link
          to="/contacts"
          className="flex items-center 
          font-bold text-2xl 
          text-sky-600
          dark:text-sky-500 
          hover:underline decoration-dashed underline-offset-4">
          <MdPermContactCalendar className="mr-3" /> Контакты
        </Link>
      </div>
    </header>
  );
};

export default Header;
