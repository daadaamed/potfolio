/** @format */

import React from 'react';
import { AnnotationIcon } from '@heroicons/react/solid';
import { blogs } from '../data';

export default function Blogs() {
  return (
    <section id="blogs">
      <div className="container px-5 py-10 mx-auto text-center">
        <AnnotationIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Blog
        </h1>
        <div className="flex flex-wrap m-4">
          {blogs.map((blog) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <span className="grid grid-cols-2 gap-2 text-xs  whitespace-nowrap block font-bold  text-white rounded w-8 text-white-500 mb-4">
                  Books
                </span>
                <div className="flex bg-bg-gray w-full mb-3">
                  <img
                    alt="blog"
                    src={blog.image}
                    className="w-12 fixed rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="w-7/12 p-5 grid inline-flex items-center title-font font-semibold text-white tracking-widest text-sm">
                    {blog.name}
                  </span>
                  <div className="inline-flex items-center">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="text-gray-500 text-sm uppercase">
                        {blog.company}
                      </span>
                    </span>
                  </div>
                </div>
                <p className="leading-relaxed mb-6">{blog.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
