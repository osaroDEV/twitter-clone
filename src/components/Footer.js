import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { RiHome7Fill } from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer h-hf fixed bottom fl-width flex justify-sb align-ct pd10 font-15">
      <RiHome7Fill />
      <FiSearch />
      <VscBellDot />
      <FiMail />
    </div>
  );
};

export default Footer;
