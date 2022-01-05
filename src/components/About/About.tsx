import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <>
      <div className="about mt-10">
        <h1 className="text-5xl">
          <span className="font-bold">Привет,</span> Я Сергей Эмирзаков
        </h1>
        <div className="mb-12">Пишу код, рисую интерфейсы</div>
        <div className="mb-12">
          Я <span className="font-bold">фронтенд разработчик</span> и
          <span className="font-bold"> ui-ux десигнер</span>.
          <div className="mb-3">
            Бодро владею такими технологиями и инструментами как:
            <span className="block font-bold">JavaScript, React, CSS, HTML, Figma.</span>
          </div>
          Люблю я это дело ❤️
        </div>
        <div>
          <h2 className="font-bold mb-4">И ещё немного:</h2>
          <div>
            <span className="mr-5 font-bold">Рабочая станция:</span>
            Razer Blade 15
          </div>
          <div>
            <span className="mr-5 font-bold">Среда разработки:</span>
            Visual Studio Code
          </div>
          <div>
            <span className="mr-5 font-bold">Хобби:</span>Музыка, турник, фотография
          </div>
          <div>
            <span className="mr-5 font-bold">Языки:</span>Русский, Английский
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
