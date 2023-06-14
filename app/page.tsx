import React from 'react';
import Balancer from 'react-wrap-balancer';

export default function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]">
          <Balancer>Building blocks for your Next project</Balancer>
        </h1>
        <p className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl">
          <Balancer>
            An opinionated collection of components, hooks, and utilities for your Next.js project.
          </Balancer>
        </p>
        <div className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0">
        </div>
      </div>
=    </>
  );
}
