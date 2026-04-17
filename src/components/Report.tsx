
import { ArrowUp,ArrowDown } from 'lucide-react';
import Sale_overview from './Sale_overview';
import Datatable from './Datatable';
import Footer from '@/commonfiles/Footer';


const Report = ({isOpen }: { onToggle: () => void, isOpen: boolean }) => {
  return (
    <>
<div  className={`container bg-white border-b border-gray-300 z-10 transition-all w-full duration-300 ease-in-out ${isOpen ?'absolute left-10 top-0 w-300':'absolutev left-70 top-0 w-[75vw] ms-auto me-auto'}`}>        <div className='px-4 py-3'>
          <div>
            <h1>Reports</h1>
            <p>View your inventory analytics and reports</p>
          </div>
          <div className='flex items-center gap-2 mt-5'>
              <div className='flex border border-gray-300  gap-3 rounded-lg p-5 w-[25%]'>
            
                <div className=''>
                  <p className='pb-3'>Total Revenue</p>
                  <h1 className='font-bold'>$45,231</h1>
                  <p className='text-green-600 text-[11px]'><ArrowUp className='inline size-4'  />12% from last month</p>
                </div>
              </div>
              <div className='flex border border-gray-300  gap-3 rounded-lg p-5 w-[25%]'>
               
                <div className=''>
                  <p className='pb-3'>Products Sold</p>
                  <h1 className='font-bold'>1,234</h1>
                  <p className='text-green-600 text-[11px]'><ArrowUp className='inline size-4'  />8% from last month</p>
                </div>
              </div>
              <div className='flex border border-gray-300  gap-3 rounded-lg p-5 w-[25%]'>
                <div className=''>
                  <p className='pb-3'>Low Stock Items</p>
                  <h1 className='font-bold'>23</h1>
                  <p className='text-red-600 text-[11px]'><ArrowDown className='inline size-4'/>30% since last month</p>
                </div>
              </div>
              <div className='flex border border-gray-300  gap-3 rounded-lg p-5 w-[25%]'>
                
                <div className=''>
                  <p className='pb-3'>Out of Stock</p>
                  <h1 className='font-bold'>5</h1>
                  <p className='text-red-600 text-[11px]'><ArrowDown className='inline size-4'/>2% since last month</p>
                </div>
              </div>
            </div>
            <div className='pt-5'>
              <Sale_overview />
            </div>
            <div className='pt-5'>
              <Datatable/>
            </div>
            <div>
              <Footer/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Report