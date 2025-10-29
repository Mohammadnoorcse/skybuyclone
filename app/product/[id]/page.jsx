'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
const page = () => {
  const [activeTab, setActiveTab] = useState('specification');
// noor
  const renderContent = () => {
    switch (activeTab) {
      case 'specification':
        return (
          <div>
            <h3 className="font-semibold text-lg mb-2">Specifications</h3>
            <p className="text-sm text-gray-600">Here are the product specifications...</p>
          </div>
        );

      case 'description':
        return (
          <div>
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-sm text-gray-600">This is the product description...</p>
          </div>
        );

      case 'seller':
        return (
          <div>
            <h3 className="font-semibold text-lg mb-2">Seller Info</h3>
            <p className="text-sm text-gray-600">Seller name, ratings, and contact...</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex md:flex-row flex-col gap-4 ">
      <div className="md:w-5/7 w-full">
        <div className="w-full shadow bg-white p-4 rounded flex flex-col gap-4">
          <h1 className="text-base font-semibold">
            New GM cat's eye sunglasses Europe and the United States ins tiktok
            little red book cross-border live sunglasses women sunscreen glasses
            wholesale
          </h1>
          <span className="w-full border-b border-[#eee] mt-2"></span>

          <div className="flex flex-col gap-4 mt-4 ">
            <div className="w-full h-[20rem] flex justify-center items-center">
              <img
                src="/assets/product-dress.webp"
                alt="Product Image"
                
                className="w-[40rem] h-full object-fill rounded-md"
              />
            </div>

            <div className=" w-full flex flex-col gap-2 mt-[3rem]">
              <p className="text-base">
                <span className="font-semibold">Product Code:</span>{" "}
                abb-0268697618196
              </p>
              <p className="text-base">
                <span className="font-semibold">Category: </span> sunglasses
              </p>
              <p className="text-base">
                <span className="font-semibold">Approximate Weight: </span> 0.03
                Kg
              </p>
              <p className="text-base">
                <span className="font-semibold">Color: </span> G02-Black Frame
                Black Grey Sheet
              </p>
              <p className="text-base">
                <span className="font-semibold">Stock:</span> 100
              </p>
              <p className="text-base">
                <span className="font-semibold">Price:</span> 1000
              </p>
              <p className="text-sm">
                {" "}
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>

              <p className="text-base font-semibold">Quantity</p>
              <div className="w-[8rem] h-[2rem] border border-[#156C80] rounded-full flex justify-between items-center">
                <span className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer">
                  -
                </span>
                <span>1</span>
                <span className="w-[2rem] h-full bg-[#156C80] rounded-full text-center text-white cursor-pointer">
                  +
                </span>
              </div>

              <div className="mt-4 flex gap-4">
                <button className="p-2 bg-[#167389] rounded-md text-white rounded-md cursor-pointer">
                  Add to Cart
                </button>
                <button className="p-2 bg-[#167389] rounded-md text-white rounded-md cursor-pointer">
                  Buy Now
                </button>
                <button className="w-[3rem] p-2 border border-[#167389] rounded-md  rounded-md cursor-pointer flex justify-center items-center text-[#167389]">
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full shadow bg-white p-4 rounded flex flex-col gap-4">
          {/* Tab Buttons */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setActiveTab("specification")}
              className={`p-2 text-[12px] rounded-md font-bold cursor-pointer ${
                activeTab === "specification"
                  ? "bg-[#167389] text-white"
                  : "border border-[#167389]"
              }`}
            >
              Specification
            </button>

            <button
              onClick={() => setActiveTab("description")}
              className={`p-2 text-[12px] rounded-md font-bold cursor-pointer ${
                activeTab === "description"
                  ? "bg-[#167389] text-white"
                  : "border border-[#167389]"
              }`}
            >
              Description
            </button>

            <button
              onClick={() => setActiveTab("seller")}
              className={`p-2 text-[12px] rounded-md font-bold cursor-pointer ${
                activeTab === "seller"
                  ? "bg-[#167389] text-white"
                  : "border border-[#167389]"
              }`}
            >
              Seller Info
            </button>
          </div>

          {/* Dynamic Content via switch */}
          <div className="mt-4">{renderContent()}</div>
        </div>
      </div>
      <div className="md:w-2/7 w-full shadow bg-white rounded">
        <h1 className="text-base font-semibold text-center my-4 border-b border-gray-200">
          Similar Products
        </h1>

        <div className="w-full grid md:grid-cols-1 gap-4 sm:grid-cols-3 grid-cols-2  p-2">
          {/* card */}
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/product.jpg"
              alt="product"
              width={300}
              height={300}
              className="rounded-md"
            />
            <span className="text-sm font-semibold truncate">
              Retro Round Sunglasses Best Man Brides
            </span>

            <div className="flex items-center justify-between">
              <span className="text-[15px] font-bold text-[#cf3056]">৳ 29</span>
              <span className="text-[11px] text-[#5f5f5f] font-medium">
                SOLD: 9543
              </span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/product.jpg"
              alt="product"
              width={300}
              height={300}
              className="rounded-md"
            />
            <span className="text-sm font-semibold truncate">
              Retro Round Sunglasses Best Man Brides
            </span>

            <div className="flex items-center justify-between">
              <span className="text-[15px] font-bold text-[#cf3056]">৳ 29</span>
              <span className="text-[11px] text-[#5f5f5f] font-medium">
                SOLD: 9543
              </span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-2">
            <Image
              src="/assets/product.jpg"
              alt="product"
              width={300}
              height={300}
              className="rounded-md"
            />
            <span className="text-sm font-semibold truncate">
              Retro Round Sunglasses Best Man Brides
            </span>

            <div className="flex items-center justify-between">
              <span className="text-[15px] font-bold text-[#cf3056]">৳ 29</span>
              <span className="text-[11px] text-[#5f5f5f] font-medium">
                SOLD: 9543
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
