import React from "react";
import { CalendarDaysIcon, ClockIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";

const BlogCard = ({ image , title }) => {
  return (
    <div className="w-4/5 bg-white rounded-lg">
      <div className="relative">
        <img
          src={image}
          alt="Blog Cover"
          className="h-52 w-full object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-blue-600 p-3">
          <ArrowUpRightIcon className="w-4 h-4 text-white" />
        </div>
      </div>
      <div className="py-4">
        <div className="text-sm text-gray-500 flex text-left space-x-4 mb-2">
          <span className="flex items-center space-x-1">
            <CalendarDaysIcon className="w-4 h-4" />
            <span>October 1, 2023</span>
          </span>
          <span className="text-gray-400">•</span>
          <span className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>5min read</span>
          </span>
        </div>
        <h2 className="text-[23px] font-semibold text-gray-900 hover:text-blue-600 transition">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
