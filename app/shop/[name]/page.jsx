"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams();
    const name = params.name;
  return (
    <div className="shadow-md">
      
      <div>
        {/* first section */}
        <div className="w-full flex justify-between items-center shadow  bg-white p-2 py-[1rem] rounded">
            <span className="text-sm font-bold uppercase">SHOWING 2000 RESULTS FOR <span className="text-[#94700b]">{name}</span></span>
      
        </div>

       

       
        {/* fourth section */}
        <div className="mt-3 shadow bg-white rounded-md p-4 flex flex-col gap-4">
          

          {/* product */}

          <div className="w-full flex flex-col gap-4 mt-4">
            <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4">
              {/* card */}
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
              <Link href={`/product/1`} className="w-full flex flex-col gap-3">
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
              </Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default page