"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const categories = [
  { name: "Beauty Product", image: "/assets/category/beauty_product.svg" },
  { name: "Bridal", image: "/assets/category/bridal.svg" },
  { name: "Child Shoe", image: "/assets/category/child-shoe.svg" },
  { name: "Clothing", image: "/assets/category/clothing.svg" },
  { name: "Electronics", image: "/assets/category/electronics.svg" },
  { name: "Mens Clothing", image: "/assets/category/mens_clothing.svg" },
  { name: "Mobile", image: "/assets/category/mobile.svg" },
  { name: "Necklace", image: "/assets/category/necklace.svg" },
  { name: "Shoes", image: "/assets/category/shoes.svg" },
  { name: "Sport", image: "/assets/category/sport.svg" },
  { name: "Watch", image: "/assets/category/watch.svg" },
  { name: "Automobile", image: "/assets/category/automobile.svg" },
  { name: "tools", image: "/assets/category/tools.svg" },
  { name: "travel", image: "/assets/category/travel.svg" },
  { name: "watch", image: "/assets/category/watch.svg" },
  { name: "home_improvements", image: "/assets/category/home_improvements.svg" },
  
];

const Slidebar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowProducts(true);
  };

  const handleBackClick = () => {
    setShowProducts(false);
    setSelectedCategory(null);
  };

  return (
    <div className="w-full">
      {/* =============== Category Grid =============== */}
      {!showProducts && (
        <div className="grid grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.name} className="w-full h-[127px] flex justify-center items-center hover:bg-[#E9F0EE] flex-col gap-1 cursor-pointer transition"
              onClick={() => handleCategoryClick(cat.name)} >

              <Image src={cat.image} alt={cat.name} width={70} height={70} />
              <span className="text-[13px] font-bold">{cat.name}</span>

            </div>
          ))}
        </div>
      )}

      {/* =============== Product List =============== */}
      {showProducts && selectedCategory && (
        <div className="w-full h-full overflow-auto scrollbar-hide flex flex-col gap-4">
          {/* Header with Back Button */}
          <div className="w-full flex items-center px-4 py-3 hover:bg-[#E9F0EE] border-b border-gray-200">
            <button onClick={handleBackClick} className="flex items-center gap-2 text-gray-600 hover:text-black">
              <FaArrowLeft /> <span className="text-sm">Back</span>
            </button>
            <span className="flex-1 text-center font-bold">
              {selectedCategory}
            </span>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-2">
            {Array.from({ length: 20 }, (_, i) => (
              <Link href="/blog" key={i} className="text-[13px] font-medium text-[#000] px-4 py-3 hover:bg-[#E9F0EE] transition" >
                Product {i + 1}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slidebar;
