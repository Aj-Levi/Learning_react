import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-10 mb-20 flex flex-col">
      <div
        className="text-2xl underline decoration-2 underline-offset-4"
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Contact Me
      </div>
      <div
        role="tablist"
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
        className="tabs w-[30rem] max-md:w-[20rem] mt-4 flex flex-wrap gap-x-2"
      >
        <a href="https://www.linkedin.com/in/abhijeet-jain-84486a313" role="tab" className="tab text-lg transition hover:bg-blue-500 rounded-xl">
          <FaLinkedin />&nbsp;Linked In
        </a>
        <a href="https://github.com" role="tab" className="tab text-lg transition hover:bg-slate-500 rounded-xl">
          <FaGithub />&nbsp;Github
        </a>
        <a href="https://www.instagram.com/abhijeet_jain22/" role="tab" className="tab text-lg transition hover:bg-pink-500 rounded-xl">
          <FaInstagram />&nbsp;Instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;
