import React from "react";
import TopBlogCard from "./TopBlogCard/TopBlogCard";
import styles from "./TopBlogs.module.css";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
const TopBlogs = () => {
  const topBlogdata = [
    {
      title: "Mindful Matters: Navigating Mental Health in Today's World",
      img: "https://images.unsplash.com/photo-1631217871099-88310a909a32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80",
      tags: ["anxiety", "selfcare"],
      time: "Feb 1, 2023",
      author: "Dr. John Smith",
    },
    {
      title:
        "Mindful Prosperity: Navigating the Path to Psychological Wealthiness",
      img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      tags: ["psychologicalhealth", "psychology"],
      time: "Jan 10, 2023",
      author: "Dr. Jane Williams",
    },
    {
      title: "Heart Strong: A Journey to Optimal Cardiovascular Health",
      img: "https://images.unsplash.com/photo-1623134915831-9dcb66cf9a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      tags: ["cardiology", "bloodpressure"],
      time: "Dec 12, 2022",
      author: "Dr. Lisa Davis",
    },
  ];
  return (
    <div className="">
      <h1 className="text-5xl my-6 mb-16 font-['Libre-Baskerville']">
        Top{" "}
        <span className="text-secondary font-['Libre-Baskerville']">
          Blogs <AiOutlineSwapRight size={60} />
        </span>
      </h1>
      <div className="w-full  grid grid-cols-3 gap-8 justify-items-center">
        {topBlogdata.map((blogData) => (
          <TopBlogCard key={Math.random().toString()} blogData={blogData} />
        ))}
      </div>
      <div className="flex justify-end py-16">
        <button className="btn shadow-lg btn-md btn-secondary">
          Read All Blogs{" "}
          <span className="ml-2">
            <BsArrowRight size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopBlogs;
