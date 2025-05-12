import React from "react";
import BlogCard from "../component/Card/BlogCard";

function BlogList() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-around gap-8 p-10 items-center">
      <BlogCard image="/blog-1.avif" title="Understanding Content Management" />
      <BlogCard image="/blog-2.avif" title="SEO Strategies for 2024" />
      <BlogCard image="/blog-3.avif" title="Content Marketing Strategies" />
    </div>
  );
}

export default BlogList;
