import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Company Name</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gray-100"><FaFacebookF /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FaLinkedin /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FaGithub /></a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300">Subscribe to our newsletter to receive updates.</p>
            <div className="flex space-x-2">
              <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-500" />
              <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition-colors duration-300">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-300">© {currentYear} Company Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaLinkedin /></a>
            <a href="#" className="text-gray-300 hover:text-gray-100"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
