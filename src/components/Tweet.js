import React from "react";
import { motion } from "framer-motion";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import "./tweet.css";
import profile from "../images/2.jpg";

const Tweet = () => {
  return (
    <div className="mg-top tweet pd10 ">
      <div className="flex">
        <img className="image-tweet" src={profile} alt="" />
        <div>
          <div className="flex font-08 wd-266 align-ct rel">
            <div className="flex justify-sb wd-220">
              <span className="fw-900 col-d9">Osaro Onaiwu</span>
              <span>@osaroDEV</span>
              <span>.</span>
              <span>20hrs</span>
            </div>
            <div className="abs">
              <FiMoreHorizontal />
            </div>
          </div>
          <div><p className='font-08 col-d9 mg-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime alias mollitia eveniet numquam fuga rerum, soluta reprehenderit distinctio exercitationem nemo.</p></div>
          <div className='flex justify-sb align-ct font-12'>
            <FaRegComment />
            <AiOutlineRetweet />
            <AiOutlineHeart />
            <BiShareAlt />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
