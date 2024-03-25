// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <>
      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About Book Haven
                </h2>

                <p>
                  Welcome to Book Haven, your ultimate destination for discovering, exploring, and diving into the world of books. We believe that every reader deserves a sanctuary where they can find their next adventure, gain knowledge, and explore new horizons. At Book Haven, we strive to provide you with a curated collection of books across genres, from timeless classics to the latest bestsellers.
                </p>
                <p className="mt-4">
                  Our mission is to make reading more accessible and enjoyable for everyone. Whether you&apos;re searching for a gripping novel, a comprehensive guide, or a captivating story, Book Haven is here to help you find your perfect read. Join us in our journey to celebrate the joy of reading and embark on endless literary adventures!
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
