/** @format */

import React from 'react';
import resume from '../images/Resume.pdf';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mohamed.
            <br className="hidden lg:inline-block" />A software engineer student
            at Supinfo in Lyon, France.
          </h1>
          <p className="mb-8 leading-relaxed">
            Here, you can know more about me through my resume, past works and
            interests. I am always looking for new opportunities in order to
            improve my skills.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
          <div className="grid justify-items-end container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              className=" inline-flex items-center ml-8 text-white bg-green-500  border-10 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-base "
              href={resume}
              attributes-list
              download="Resume"
            >
              {' '}
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
