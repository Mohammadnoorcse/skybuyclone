"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Slidebar = () => {
  const [showProducts, setShowProducts] = useState(false); // toggle view
  const [selectedCategory, setSelectedCategory] = useState("Bags"); // optional

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowProducts(true);
  };

  const handleBackClick = () => {
    setShowProducts(false);
  };
  return (
    <div >
      {/* =============== Category Grid =============== */}
      {!showProducts && (
        <div className="w-full  grid grid-cols-2">
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
          <div
            className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer"
            onClick={() => handleCategoryClick("Bags")}
          >
            <Image
              src="https://skybuybd.com/_next/static/media/handbag.40187aed.svg"
              alt="image"
              width={70}
              height={70}
            />
            <span className="text-[13px] font-bold">Bags</span>
          </div>
        </div>
      )}

      {/* =============== Product List =============== */}
      {showProducts && (
        <div className="w-full h-full overflow-auto scrollbar-hide flex flex-col gap-4">
          {/* Header with Back Button */}
          <div className="w-full flex items-center px-4 py-3 hover:bg-[#E9F0EE] border-b border-gray-200">
            <div className="w-1/2 cursor-pointer" onClick={handleBackClick}>
              <FaArrowLeft />
            </div>
            <span className="w-1/2 text-center font-bold">
              {selectedCategory}
            </span>
          </div>

          {/* Product Links */}
          <div className="w-full flex flex-col gap-2">
            {Array(20)
              .fill("Purse")
              .map((item, idx) => (
                <Link
                  href="/blog"
                  key={idx}
                  className="text-[13px] font-medium text-[#000] px-4 py-3 hover:bg-[#E9F0EE]"
                >
                  {item}
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slidebar;
