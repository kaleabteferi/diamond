import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../layout/Container';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

      {/* Diamond Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/src/assets/diamond-icon.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>

      <Container className="relative py-24 sm:py-32 flex flex-col sm:flex-row items-center sm:items-start">
        <div className="max-w-3xl text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start mb-6">
            <div className="relative animate-float">
              <img
                src="/src/assets/diamond-logo.png"
                alt="Diamond™ Logo"
                className="h-26 w-96 transition-transform group-hover:scale-110 object-contain"
              />
              {/* <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" /> */}
            </div>
            {/* <h1 className="ml-4 text-4xl font-bold tracking-tight font-heading sm:text-5xl lg:text-6xl">
              Diamond™
            </h1> */}
          </div>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Discover the Perfect Sound & Picture with Diamond™. Experience premium quality TVs and speakers that transform your entertainment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center sm:justify-start">
            <Button asChild size="lg">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Space for Overlapping TV Image */}
        <div className="absolute right-0 -top-20 w-full sm:w-auto flex justify-center items-center hidden sm:flex">
          <div className='h-96 w-[600px]'>
            <img
              src="/src/assets/tv.png"
              alt="TV"
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
