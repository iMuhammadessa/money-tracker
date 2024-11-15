import React, { useState } from "react";
import RightArrow from "../assets/rightArrow.svg";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart2,
  ArrowRightLeft,
  HelpCircle,
} from "lucide-react";

const NavItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Analytics",
    icon: BarChart2,
  },
  {
    name: "Transactions",
    icon: ArrowRightLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircle,
  },
];

const variants = {
  expanded: {
    width: "20%",
    transition: { duration: 0.5 },
  },
  collapsed: {
    width: "5%",
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [IsExpanded, setIsExpanded] = useState(true);
  return (
    <motion.div
      animate={IsExpanded ? "expanded" : "collapsed"}
      variants={variants}
      className={
        "py-12 flex flex-col border border-r-1 w-1/5 h-screen relative bg-[#f5f5f5]" +
        (IsExpanded ? " px-10" : " px-4")
      }
    >
      <div className="logo-div flex space-x-3 items-center cursor-pointer">
        <img src="./src/assets/Logo.png" alt="logo" />
        <span className={IsExpanded ? "block" : "hidden"}>Money Tracker</span>
      </div>

      <div
        onClick={() => setIsExpanded(!IsExpanded)}
        className="w-5 h-5 bg-cyan-400 rounded-full absolute -right-[10px] top-14 flex justify-center items-center cursor-pointer"
      >
        <img src={RightArrow} className="w-1" />
      </div>

      <div className="mt-10 flex flex-col space-y-8">
        {NavItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={
                "flex items-center space-x-2 p-2 cursor-pointer" +
                (index === active
                  ? " bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold rounded"
                  : "")
              }
              onClick={() => setActive(index)}
            >
              <Icon />
              <span className={IsExpanded ? "block" : "hidden"}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Navbar;
