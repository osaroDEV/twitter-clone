import React from "react";
import { motion } from "framer-motion";
import { GiStarShuriken } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import "./header.css";
import profile from "../images/2.jpg";

const Header = () => {
  return (
    <div className="header h-hf fixed top fl-width flex justify-sb align-ct pd5 font-15">
      <section className="flex justify-sb align-ct">
        <img className="image" src={profile} alt="" />
        <p className='font-10 fw-900'>Home</p>
      </section>
      <div>
        <AiOutlinePlus className="mini-star-up" />
        <AiOutlinePlus className="mini-star-down" />
        <GiStarShuriken />
      </div>
    </div>
  );
};

export default Header;
