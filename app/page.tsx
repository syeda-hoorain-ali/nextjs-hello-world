"use client";

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-16 lg:gap-20 p-8 md:p-16 lg:p-24">
      <h1>
        <TypeAnimation
          aria-label='Hello World!'
          sequence={['Hello World!', 500]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
          className="text-6xl md:text-8xl font-black font-mono"
        />
      </h1>

      <div className="w-full flex flex-col xs:flex-row justify-center items-center gap-8 md:gap-28 lg:gap-52">
        <span className="size-52 sm:size-48 md:size-64 animate-popup">
          <Image
            src="/nextjs.png"
            alt="Next.js"
            width={208}
            height={208}
          />
        </span>
        <span className="text-5xl md:text-9xl">+</span>
        <span className="size-52 sm:size-48 md:size-64 animate-popup">
          <Image
            src="/giaic.png"
            alt="GIAIC"
            width={208}
            height={208}
          />
        </span>
      </div>

      <h2>
        <TypeAnimation
          aria-label='Welcome to Next.js'
          sequence={['Welcome to Next.js', 500]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
          className="text-6xl md:text-8xl font-black font-mono text-center"
        />
      </h2>
    </main>
  );
}

export default Home;
