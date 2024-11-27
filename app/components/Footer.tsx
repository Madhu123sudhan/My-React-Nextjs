import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Contact Information Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone Number */}
          <div className="bg-cyan-800 text-white p-4 rounded-md flex items-center shadow-md">
            <div className="bg-cyan-800 p-2 rounded-full mr-4">
              <svg className="h-8 w-8 text-white bg-cyan-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Phone Number</h4>
              <p className="text-sm">+974 3118 1843</p>
            </div>
          </div>

          {/* Email Address */}
          <div className="bg-cyan-800 text-white p-4 rounded-md flex items-center shadow-md">
            <div className="bg-cyan-800 p-2 rounded-full mr-4">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Email Address</h4>
              <p className="text-sm">Elbritechhr@gmail.com</p>
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-cyan-800 text-white p-4 rounded-md flex items-center shadow-md">
            <div className="bg-cyan-800 p-2 rounded-full mr-4">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Office Location</h4>
              <p className="text-sm">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>

        {/* Logo and Description Section */}
        <div className="mt-10 flex items-center justify-center gap-6 flex-col sm:flex-row">
          <img
            src="/logo.png"
            alt="Elbrit Logo"
            className="w-48 h-16 mb-4 sm:mb-0"
          />
          <p className="text-center text-sm sm:text-left">
            Your health, physical, and emotional well-being is important to us.<br />
            We stand by your side and have made it even easier for you to find <br />
            the necessary vitamins.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm">
          © Elbrit Life Sciences Private Limited. C/50, BKC, G Block, Mumbai 400051
        </div>
      </div>
    </footer>
  );
};

export default Footer;

 