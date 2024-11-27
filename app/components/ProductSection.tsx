import React from 'react';

const ProductSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div className="card bg-[#ededed] w-full p-4 rounded-lg border">
          <div className="card-body">
            <h2 className="card-title text-blue-800">INGREDIENTS</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">Better Ingredients</p>
            <p className="text-gray-700 mt-4">
              Only the best when you choose products offered on our platform. High-quality ingredients for high-quality products!
            </p>
          </div>
        </div>
        <div className="card bg-blue-300 border border-blue-300 image-full rounded-lg">
          <figure className="relative">
            <div className="absolute inset-0 bg-blue-300 opacity-60 z-0"></div>
            <img src="/h2-b1.jpg.png" alt="Vitamin C" className="relative z-10 opacity-90" />
          </figure>
          <div className="card-body relative z-20">
            <h2 className="card-title text-black">Vitamin C</h2>
            <p className="text-gray-700">Vitamin C as ascorbic acid</p>
            <div className="card-actions justify-start">
              <a className="link link-primary">SEE MORE</a>
            </div>
          </div>
        </div>
        <div className="card bg-blue-300 border border-blue-300 image-full rounded-lg">
          <figure className="relative">
            <div className="absolute inset-0 bg-blue-300 opacity-60 z-0"></div>
            <img src="/b2-2.jpg.png" alt="Vitamin C" className="relative z-10 opacity-90" />
          </figure>
          <div className="card-body relative z-20">
            <h2 className="card-title text-black">Vitamin B3</h2>
            <p className="text-gray-700">Niacin for healthy gut and skin</p>
            <div className="card-actions justify-start">
              <a className="link link-primary">SEE MORE</a>
            </div>
          </div>
        </div>
        <div className="card bg-blue-300 border border-blue-300 image-full rounded-lg">
          <figure className="relative">
            <div className="absolute inset-0 bg-blue-300 opacity-60 z-0"></div>
            <img src="/b2-3.jpg.png" alt="Vitamin C" className="relative z-10 opacity-90" />
          </figure>
          <div className="card-body relative z-20">
            <h2 className="card-title text-black">Magnesium</h2>
            <p className="text-gray-700">Boost energy and support muscle function</p>
            <div className="card-actions justify-start">
              <a className="link link-primary">SEE MORE</a>
            </div>
          </div>
        </div>
        <div className="card bg-blue-300 border border-blue-300 image-full rounded-lg">
          <figure className="relative">
            <div className="absolute inset-0 bg-blue-300 opacity-60 z-0"></div>
            <img src="/b2-4.jpg.png" alt="Vitamin C" className="relative z-10 opacity-90" />
          </figure>
          <div className="card-body relative z-20">
            <h2 className="card-title text-black">Hyaluronic Acid</h2>
            <p className="text-gray-700">For smooth, supple, and soft skin!</p>
            <div className="card-actions justify-start">
              <a className="link link-primary">SEE MORE</a>
            </div>
          </div>
        </div>
        <div className="card bg-blue-300 border border-blue-300 image-full rounded-lg">
          <figure className="relative">
            <div className="absolute inset-0 bg-blue-300 opacity-60 z-0 "></div>
            <img src="/b2-5.jpg.png" alt="" className="relative z-10 opacity-90" />
          </figure>
          <div className="card-body relative z-20">
            <h2 className="card-title text-black">Lactobacillus</h2>
            <p className="text-gray-700">Invigorate your gut microbiome</p>
            <div className="card-actions justify-start">
              <a className="link link-primary">SEE MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
