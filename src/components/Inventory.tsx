import {Field,} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { FileText, FolderX, Funnel} from 'lucide-react';
import Datatable from './Datatable'
import Footer from '@/commonfiles/Footer'
import { Link } from 'react-router-dom'

const Inventory = ({isOpen }: { onToggle: () => void, isOpen: boolean }) => {
  return (
    <>
<div  className={`container bg-white border-b border-gray-300 z-10 transition-all w-full duration-300 ease-in-out ${isOpen ?'absolute left-10 top-0 w-300':'absolutev left-70 top-0 w-[75vw] ms-auto me-auto'}`}>      
        <div className='px-4 py-3'>
          <div className="flex"  >
            <div className='w-full mb-5'>
              <h1 className="text-2xl">Inventory</h1>
              <p className='text-sm'>Manage your product inventory</p>
            </div>
            <div className='flex justify-end w-full'>
              <button className=' '><h3 className='bg-orange-500 text-white  rounded-xs px-3 py-1'><Link to="/allproduct">Add Product</Link></h3></button>
            </div>
          </div>
          <div className='flex'>
            <div className=''>
              <Field>
                <Input id="input-demo-api-key" type="password" placeholder="search products..." />
              </Field>
            </div>
            <div className='justify-end w-full flex gap-2'>
              <div className='justify-content-between flex gap-2'>
                <button className='border-1 border-gray-400 px-3 rounded-md text-[12px]'><Funnel className='size-4 inline' />Filter</button>
                <button className='border-1 border-gray-400 px-3 rounded-md text-[12px]'><FolderX className='size-4 inline' />Excel</button>
                <button className='border-1 border-gray-400 px-3 rounded-md text-[12px]'><FileText className='size-4 inline' />PDF</button>
              </div>
            </div>
          </div>
          <div className='border border-gray-300 mt-5 rounded-xl p-4'>
          <Datatable />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Inventory