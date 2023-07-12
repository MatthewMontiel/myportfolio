import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello World, I'm Matt Montiel.
            <br className="hidden lg:inline-block" />I like to collaborate and listen. Let's Code!!
          </h1>
          <p className="mb-8 leading-relaxed">
            I’m Matthew Montiel. I’m a West Texas native, growing up in Lubbock.
            I have a degree in digital film making, and for the past five years, I have taught computer programming and touch data at a small, rural school in the Lubbock area. 
            I am also the school’s yearbook advisor and I run the high school FBLA program. 
            I am happily married to my wife of 7 years, Tonya. We also have an energetic 6 year old son who keeps us on our toes and one more kiddo on the way. 
            In my free time I enjoy doing photography and graphic design. 
            At the moment, I am working towards a Computer Programming certification through the University of Texas. 
            My goal is to gain a better understanding of programming and to make upward movement in my career.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Lets build something amazing together!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./picofme.jpg"
          />
        </div>
      </div>
    </section>
  );
}