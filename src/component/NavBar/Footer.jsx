import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* left-side */}
        <div>
          <img src={assets.logo} className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* Center-section  */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right-side  */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2">
            <li>91 95225-97433</li>
            <li>health@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copy right  */}
      <div>
        <hr />
        <p className="text-center py-5 text-sm">
          Copyright 2024 @ healthcare.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
