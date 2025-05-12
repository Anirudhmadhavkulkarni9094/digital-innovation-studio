import PageBanner from '@/component/Banner/PageBanner'
import BlogCard from '@/component/Card/BlogCard'
import React from 'react'

function Page() {
  return (
    <div>
            <PageBanner>
                BLOG
            </PageBanner>
            
            <div className='grid grid-cols-3 bg-white p-10'>
                <BlogCard image="/blog-1.avif" title="Understanding Content Management" />
      <BlogCard image="/blog-2.avif" title="SEO Strategies for 2024" />
      <BlogCard image="/blog-3.avif" title="Content Marketing Strategies" />
      <BlogCard image="/blog-1.avif" title="Understanding Content Management" />
      <BlogCard image="/blog-2.avif" title="SEO Strategies for 2024" />
      <BlogCard image="/blog-3.avif" title="Content Marketing Strategies" />
            </div>
    </div>
  )
}

export default Page