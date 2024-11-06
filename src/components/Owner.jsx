import React from 'react';
import Nav from './Nav';

function Owner() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <main className="flex flex-col items-center justify-center mt-16 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Narisra - GroupD - 67</h2>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 max-w-screen-lg">
          <div className="w-64 h-64 flex items-center justify-center mb-4 overflow-hidden rounded-full">
            <img 
              src="https://tse1.mm.bing.net/th?id=OIP.qxR-CCgaQ8DGsoiMYYbz1gAAAA&pid=Api&P=0&h=220" 
              alt="Owner profile" 
              className="object-cover h-full w-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Introduction</h3>
          <p className="text-center text-gray-600 leading-relaxed">
          Aspiring Web Developer and recent graduate from Generation Bootcamp with expertise
          in Junior Software Development. Possess a strong foundation in coding, including CSS, HTML,
          JavaScript, React and C++. Soft skills include problem-solving, teamwork,
          and effective communication. With over 4 years of experience teaching mathematics,
          I bring a unique perspective on effective communication and a passion for
          continuous learning. Holding a Bachelor's degree in Production Engineering, I have a solid understanding of technical processes  and a keen eye for detail. Eager to join a dynamic software development team that values customer focus, achievement motivation, and teamwork.

          </p>
        </div>
      </main>
    </div>
  );
}

export default Owner;
/*1*/