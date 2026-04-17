// import React from 'react'
import { PanelLeftOpen, BellDot, ClipboardList, Repeat2, DollarSign, NotepadText, Copy, CreditCard, Banknote, Pi, ChevronDown, Calendar1 } from 'lucide-react';

import Piechart1 from './Piechart1';
import Piechart2 from './Piechart2';
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import Datatable from './Datatable';
import Footer from '@/commonfiles/Footer';

const Dashboard = ({isOpen }: { onToggle: () => void, isOpen: boolean }) => {

  return (
    <>
      <div  className={`container bg-white border-b border-gray-300 z-10 transition-all w-full duration-300 ease-in-out ${isOpen ?'absolute left-10 top-0 w-300':'absolutev left-70 top-0 w-[75vw] ms-auto me-auto'}`}>
        {/* ----------------- section-1 ----------------- */}

        <section>
          <div className="px-4 py-3 w-full">
            <div>
              <h1 className="text-2xl mb-3">Dashboard</h1>
              <h3>Your main content goes here…</h3>
            </div>
            <div className='flex items-center gap-2 mt-5'>
              <div className='flex bg-orange-100 border border-orange-400  gap-4 rounded-lg px-5 py-5 w-[25%]'>
                <div className=''>
                  <ClipboardList className='size-6 text-white bg-orange-400' />
                </div>
                <div className=''>
                  <p className='pb-3'>Total sales</p>
                  <h2 className='font-bold'>$25,000</h2>
                  <p className='text-orange-400 text-[13px]'>+5% since last month</p>
                </div>
              </div>
              <div className='flex bg-green-100 border border-green-400  gap-3 rounded-lg px-5 py-5 w-[25%]'>
                <div className=''>
                  <Repeat2 className='size-6 text-white bg-green-400' />
                </div>
                <div className=''>
                  <p className='pb-3'>Total Purchase</p>
                  <h2 className='font-bold'>$18,000</h2>
                  <p className='text-green-400 text-[13px]'>+22% since last month</p>
                </div>
              </div>
              <div className='flex bg-blue-100 border border-blue-400  gap-3 rounded-lg px-5 py-5 w-[25%]'>
                <div className=''>
                  < DollarSign className='size-6 text-white bg-blue-400' />
                </div>
                <div className=''>
                  <p className='pb-3'>Total Expenses</p>
                  <h2 className='font-bold'>$9,000</h2>
                  <p className='text-blue-400 text-[13px]'>+10% since last month</p>
                </div>
              </div>
              <div className='flex bg-yellow-100 border border-yellow-400  gap-3 rounded-lg px-5 py-5 w-[25%]'>
                <div className=''>
                  <NotepadText className='size-6 text-white bg-yellow-400' />
                </div>
                <div className=''>
                  <p className='pb-3'>Invoice Due</p>
                  <h2 className='font-bold'>$25,000</h2>
                  <p className='text-yellow-400 text-[13px]'>+35% since last month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------- section-3 ----------------- */}

        <section>

          <div className="flex items-center gap-2 mt-5 py-3 px-4">
            <div className='border border-gray-400  gap-3 rounded-lg p-5  w-[33%]'>
              <div className='flex'>
                <div className='pb-5'>
                  <h2 className='font-bold text-xl'>$25,458</h2>
                  <p className='text-[14px] pt-1'>Total Profit</p>
                </div>
                <div className='flex justify-end w-full'>
                  <Copy className='text-black' />
                </div>
              </div>
              <hr className='text-gray-500' />
              <div className='mt-5'>
                <div className='text-[14px]'><span className='text-green-500'>+35%</span> vs Last Month
                </div>
                <div className='flex justify-end w-full'>
                  <a href="" className='text-orange-400 text-[14px]'>View</a>
                </div>
              </div>
            </div>
            <div className='border border-gray-400  gap-3 rounded-lg p-5  w-[33%]'>
              <div className='flex'>
                <div className='pb-5'>
                  <h2 className='font-bold text-xl'>$25,458</h2>
                  <p className='text-[14px] pt-1'>Total Profit</p>
                </div>
                <div className='flex justify-end w-full'>
                  <Copy className='text-black' />
                </div>
              </div>
              <hr className='text-gray-500' />
              <div className='flex mt-5'>
                <div className='text-[14px]'><span className='text-green-500'>+35%</span> vs Last Month
                </div>
                <div className='flex justify-end w-full'>
                  <a href="" className='text-orange-400 text-[14px]'>View</a>
                </div>
              </div>
            </div>

            <div className='border border-gray-400  gap-3 rounded-lg p-5  w-[33%]'>
              <div className='flex'>
                <div className='pb-5'>
                  <h2 className='font-bold text-xl'>$25,458</h2>
                  <p className='text-[14px] pt-1'>Total Profit</p>
                </div>
                <div className='flex justify-end w-full'>
                  <Copy className='text-danger' />
                </div>
              </div>
              <hr className='text-gray-500' />
              <div className='mt-5'>
                <div className='text-[14px]'><span className='text-green-500'>+35%</span> vs Last Month
                </div>
                <div className='flex justify-end w-full'>
                  <a href="" className='text-orange-400 text-[14px]'>View</a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ----------------- section-4 ----------------- */}

        <section>
          <div className="flex gap-2 mt-5 py-3 px-4">
            <div className='border border-gray-400  gap-3 rounded-lg p-5 w-[50%]'>
              <div className='flex justify-between items-center mb-5'>
                <div>
                  <h2>Sales vs Purchase</h2>
                </div>
                <div className=''>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">This year<ChevronDown /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>This year</DropdownMenuItem>
                        <DropdownMenuItem>This month</DropdownMenuItem>
                        <DropdownMenuItem>This week</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <hr />
              <Piechart1 /></div>
            <div className='border border-gray-400  gap-3 rounded-lg p-5 w-[50%]'>
              <Piechart2 />
            </div>
          </div>
        </section>

        {/* ----------------- section-5 ----------------- */}

        <section>
          <div className="flex gap-2 mt-5 py-3 px-4">
            <div className='border border-gray-400  gap-3 rounded-lg p-3 w-[33%]'>
              <div className='flex'>
                <div className='w-50  '>
                  <h3>Top Selling Products</h3>
                </div>
                <div className='flex justify-end w-50'>
                  <button className='text-[12px] text-gray-400'><Calendar1 className='inline size-4' />Today</button>
                </div>
              </div>
              <hr />

              <Datatable />
            </div>
            <div className='border border-gray-400  gap-3 rounded-lg p-3 w-[33%]'>
              <div className='flex'>
                <div className='w-50'>
                  <h3>Low Stock Products</h3>
                </div>
                <div className='flex justify-end w-50'>
                  <button className='text-[12px] text-gray-400'><Calendar1 className='inline size-4' />Today</button>
                </div>
              </div>
              <hr />
              <Datatable />
            </div>
            <div className='border border-gray-400  gap-3 rounded-lg p-3 w-[33%]'>
              <div className='flex'>
                <div className='w-50'>
                  <h3>Recent Sales</h3>
                </div>
                <div className='flex justify-end w-50'>
                  <button className='text-[12px] text-gray-400'><Calendar1 className='inline size-4' />Weekly</button>
                </div>
              </div>
              <hr />
              <Datatable />
            </div>
          </div>
        </section>

        {/* ----------------- section-6 ----------------- */}


        <section>
          <Footer />
        </section>
      </div>

    </>
  )
}

export default Dashboard