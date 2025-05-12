import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.avif'; // Adjust the path as necessary
import Link from 'next/link';

function Navbar() {
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Works', link: '/works' },
    { label: 'About', link: '/about' },
    { label: 'Blog', link: '/blog' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <div className="flex justify-between items-center p-10">
      <Image src={logo} width={50} height={50} alt="logo" />
      <ul className="flex space-x-2">
        {navItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <Link
              href={item.link}
              className="group relative h-[1.75rem] overflow-hidden cursor-pointer"
            >
              <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[1.75rem]">
                <span className="text-lg font-light text-gray-800">{item.label}</span>
                <span className="text-lg font-light text-gray-800">{item.label}</span>
              </div>
              {/* Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            {idx < navItems.length - 1 && <span className="text-lg font-light text-gray-800">,</span>}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
