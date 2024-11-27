import React from 'react'

const BlogSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-blue-900 font-bold mb-8">OUR BLOG</h2>
      <h1 className="text-center text-blue-900 text-5xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div className="grid grid-rows-2 gap-6">
          <div className="blog relative rounded-xl overflow-hidden border flex flex-col">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog1-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>

          <div className="blog relative rounded-xl overflow-hidden border flex flex-col">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog2-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid grid-rows-2 gap-6">
          <div className="blog relative rounded-xl overflow-hidden border flex flex-col">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog1-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>

          <div className="blog relative rounded-xl overflow-hidden border flex flex-col">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog2-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid grid-rows-2 gap-6">
          <div className="blog relative rounded-xl overflow-hidden border flex flex-col">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog1-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>

          <div className="blog relative rounded-xl overflow-hidden border flex flex-col">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog2-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="grid grid-rows-2 gap-6">
          <div className="blog relative rounded-xl overflow-hidden border flex flex-col ">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog1-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>

          <div className="blog relative rounded-xl overflow-hidden border flex flex-col">
            {/* Badge with date */}
            <div className="absolute top-5 left-0 bg-blue-800 text-white py-1 px-3 text-sm z-10 rounded">
              20 APR
            </div>
            {/* Image with overlay */}
            <img src="/blog2-450x580.jpg.png" alt="Turmeric & Ginger" className="object-cover w-full h-full" />
            {/* Text overlay */}
            <div className="absolute top-10 left-10 w-100 bg-opacity-70 p-4 rounded-md">
              <p className="text-white font-semibold mt-4">The Covid-19 Epidemic In 2022 Is Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;


