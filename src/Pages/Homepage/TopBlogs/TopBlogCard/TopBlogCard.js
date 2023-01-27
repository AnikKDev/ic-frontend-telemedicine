import React from "react";
import styles from "./TopBlogCard.module.css";
const TopBlogCard = ({ blogData }) => {
  const { img, title, author, tags, time } = blogData;
  return (
    <div className="card w-full bg-base-100 transition-[0.8s] hover:cursor-pointer hover:scale-[1.01] hover:shadow-xl">
      <figure>
        <img src={img} alt="TeleMedIQ" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">Top</div>
        </h2>
        <div>
          <div className="avatar items-center">
            <div className="w-6 rounded-full">
              <img src="https://placeimg.com/192/192/peoplehttps://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
            <p className="text-xs ml-1">
              <span className="text-red-900 hover:underline font-semibold">
                {author}
              </span>{" "}
              - <span className="text-gray-500">{time}</span>
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          {tags.map((data) => (
            <div className="badge border-none badge-outline bg-green-100 text-neutral font-semibold">
              #{data}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBlogCard;
