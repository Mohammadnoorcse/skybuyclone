"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Slider from "./components/home/Slider";

const Page = () => {
  return (
    <div className="shadow-md">
      {/* Right section (reserved for products or other content) */}
      <div>
        {/* first section */}
        <div className="w-full flex sm:flex-row flex-col gap-2 shadow  bg-white p-2">
          <div className="sm:w-5/7  ">
            
              {/* <img
                src="/assets/banner.jpg"
                alt="Logo"
                
                className="rounded-md w-full h-full"
              /> */}

              <Slider/>
            
          </div>

          <div className="sm:w-2/7 w-full h-full flex sm:flex-col flex-row gap-4">
            <div className="w-full ">
              <Image
                src="/assets/banner.jpg"
                alt="Logo"
                width={700}
                height={300}
                className="rounded-md"
              />
            </div>

            <div className="w-full">
              <Image
                src="/assets/banner.jpg"
                alt="Logo"
                width={700}
                height={100}
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
          {/* category */}

          <div className="w-full md:flex hidden gap-4">
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
            <div className="w-[7rem] p-2 bg-[#F5F5F5] flex items-center gap-2 rounded-md">
              <Image
                src="https://skybuybd.com/_next/static/media/handbag.2ef168de.svg"
                alt="image"
                width={30}
                height={30}
              />
              <span className="text-sm font-medium">Bags</span>
            </div>
          </div>

          {/* product */}

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
              {/* card */}
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/dress/dress-1.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Korean Youyou Copper Buckle Dou
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </Link>

              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/dress/dress-2.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Brushed Fleece-Lined Stand-Up Coll
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/dress/dress-3.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Chic Half Turtleneck Knitted Bottom
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/dress/dress-4.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  
                    Inbyin Pure Color Turtleneck Knitte
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-[17px] font-bold uppercase">
              Trending Collection
            </span>
            <Link href={`/shop/trend-collection`} className="py-1 px-4 bg-[#167389] text-white text-white rounded-md">
              Views
            </Link>
          </div>

          {/* product */}

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
              {/* card */}
              <div className="w-full">
                <video
                  src="/assets/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="w-full">
                <video
                  src="/assets/video1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="w-full">
                <video
                  src="/assets/video2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="w-full">
                <video
                  src="/assets/video3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/* fourth section */}
        <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-[17px] font-bold">LADIES BAGS</span>
            <Link href={`/shop/ladies-bags`} className="py-1 px-4 bg-[#167389]  text-white rounded-md">
              Views
            </Link>
          </div>

          {/* product */}

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
              {/* card */}
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-1.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-2.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-3.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-4.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-5.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-6.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-7.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-8.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-9.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-10.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/bag/bag-11.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* five section */}
        <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-[17px] font-bold">SHOE</span>
            <Link href={`/shop/shoes`} className="py-1 px-4 bg-[#167389]  text-white rounded-md">
              Views
            </Link>
          </div>

          {/* product */}

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
              {/* card */}
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-1.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-2.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-3.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-3.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-4.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-5.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-6.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-7.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-8.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe/shoe-9.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/shoe.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* six section */}
        <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center">
            <span className="text-[17px] font-bold">WATCHE</span>
            <Link href={`/shop/watch`} className="py-1 px-4 bg-[#167389]  text-white rounded-md">
              Views
            </Link>
          </div>

          {/* product */}

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
              {/* card */}
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-1.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-2.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-3.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-4.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-5.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-6.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-8.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-9.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-10.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-11.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <Image
                  src="/assets/watch/watch-12.jpg"
                  alt="Logo"
                  width={700}
                  height={500}
                  className="rounded-md"
                />
                <span className="text-sm font-medium truncate">
                  Summer Ice Silk Short-sleeved Quick-drying Thin
                </span>
                <div className="w-full flex justify-between items-center">
                  <span className="text-sm font-bold text-red-600">৳ 545</span>
                  <span className="text-[11px] font-medium text-[#5f5f5f]">
                    SOLD: 3503
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
