import React from 'react'
import Image from 'next/image'
import { RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full flex flex-col'>

        <div className='w-full shadow bg-white p-4 rounded flex items-center justify-between'>
            <div className='flex items-center gap-1'>
                <div className='w-[2rem] h-[2rem] rounded-full bg-[#167389] text-white flex justify-center items-center'>
                    1
                </div>
                <span className='text-base uppercase font-medium'>Cart</span>

            </div>

            <span className='text-base '>27 September, 2025</span>

        </div>

        <div className='mt-4 flex sm:flex-row flex-col gap-4'>
            <div className='sm:w-5/7 w-full shadow bg-white p-4 rounded flex flex-col gap-4'>

                {/* items */}
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex gap-4 items-center justify-between border-b border-gray-200 pb-[1rem]'>
                        <div className='flex gap-4'>
                            <Image src="/assets/product.jpg" alt="Picture of the author" width={70} height={70} className='rounded-md'/>
                            <div className='flex flex-col'>
                                <span className='text-sm font-medium'>Order ID: #68d7XX</span>
                                <span className='text-sm'>Genuine Leather Red Flat-Soled Agande Sneakers for Women, 2025 Autumn New Soft-Soled Sports Casual Lace-Up Versatile Sneakers</span>
                            </div>
 

                        </div>

                        <RiDeleteBinLine  className='text-red-700 text-4xl cursor-pointer'/>

                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <div className='flex gap-1'>
                            <Image src="/assets/product.jpg" alt="Picture of the author" width={40} height={40} className='rounded-md'/>
                            <div className='flex flex-col'>
                                <span className='text-[12px]'>Color: Red</span>
                                <span className='text-[12px]'>Size: 35</span>

                            </div>

                        </div>

                        <div>
                            <span className='text-[12px]'>3 x ৳1961</span>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <span className='text-sm'>৳5883</span>
                            <span className='text-[12px] p-1 rounded-md bg-[#167389] text-white cursor-pointer'>Edit</span>

                        </div>


                       

                    </div>

                    <div className='pt-2 border-t border-gray-200 flex justify-between items-center'>
                        <span className='font-medium'>Items </span>
                        <span className='text-sm'>3 items  </span>
                        <span>৳5883</span>
                        
                    </div>

                </div>

            </div>
            <div className='sm:w-2/7 w-full flex flex-col'>
                <div className='w-full shadow rounded bg-white p-2 flex flex-col gap-3'>
                    <h3 className='text-base font-medium text-center border-b border-gray-200 pb-2'>Cart Summary</h3>

                    <div className='flex justify-between items-center'>
                        <span>Product Price</span>
                        <span>৳5883</span>

                    </div>
                    <div className='flex justify-between items-center'>
                        <span>Pay Now (70%)</span>
                        <span>৳5883</span>

                    </div>

                    <div className='bg-[#E9EFF0] rounded-md p-2 flex justify-center items-center flex-col gap-2'>
                        <span className='font-bold'>Pay after delivery</span>
                        <p className='text-sm'>৳ 1765 + Shipping & Courier Charges</p>

                    </div>

                </div>

                <Link href="/product/checkout" className='w-full p-2 bg-[#167389] mt-3 rounded-md text-center text-white'>Go To Checkout</Link>

                

            </div>
        </div>
      
    </div>
  )
}

export default page
