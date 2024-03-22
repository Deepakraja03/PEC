import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">About Logistics</h2>
          <p className="mt-2 leading-8 text-xl text-gray-700 font-bold sm:text-2xl">
            We specialize in efficient logistics solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At our core, we are dedicated to providing seamless logistics services tailored to your needs. Our
            comprehensive solutions ensure that your goods are transported swiftly and securely from point A to point
            B. Whether you require domestic distribution or global freight forwarding, our expert team is here to
            optimize your supply chain and streamline your operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
