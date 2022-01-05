import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import { SiDarkreader } from 'react-icons/si';

const Theme: React.FC = () => {
  let getTheme = (): boolean => {
    return (
      (typeof window !== 'undefined' &&
        window.JSON.parse(localStorage.getItem('theme'))) ||
      false
    );
  };

  const [dark, setDark] = React.useState<boolean>(getTheme());

  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(dark));

    dark ? document.body.classList.remove('dark') : document.body.classList.add('dark');
  }, [dark]);

  const changeThemeHandler = () => {
    setDark((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={changeThemeHandler}
        className="theme 
        flex items-center justify-between
        rounded-md 
        py-3 px-8 mb-8
        cursor-pointer
        bg-slate-100 
        dark:bg-slate-700">
        <span className="text-xl mr-5">
          Переходи на {dark ? 'темную' : 'светлую'} сторону силы
        </span>
        <div className="theme_icon cursor-pointer">
          {dark ? <SiDarkreader size="2.2rem" /> : <BsSunFill size="2.2rem" />}
        </div>
      </button>
    </div>
  );
};

export default Theme;
