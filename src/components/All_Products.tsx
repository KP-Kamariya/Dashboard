
import { Link } from 'react-router-dom'
const All_Products = ({isOpen }: { setProducts: React.Dispatch<React.SetStateAction<any[]>>, isOpen: boolean }) => {

  return (
    <>
      <div className={`container bg-white border-b border-gray-300 z-10 transition-all w-full duration-300 ease-in-out ${isOpen ? 'absolute left-10 top-0 w-300' : 'absolutev left-70 top-0 w-[75vw] ms-auto me-auto'}`}>
        <div className='px-4 py-3'>
          <div className="flex"  >
            <div className='mb-5 w-full'>
              <h1 className="text-2xl">Add Inventory </h1>
              <p className='text-sm'>Manage your inventory items</p>
            </div>
            <div className='flex justify-end w-full'>
              <button className=' '><h3 className='bg-orange-500 text-white  rounded-xs px-3 py-1'><Link to="/inventory">Go to Inventory List</Link></h3></button>
            </div>
          </div>
          <div className='w-full'>
            <form action="" id='allproducts' className='block border border-gray-400 p-5 rounded-lg'>
              <div className='row flex mb-3 w-[100%]'>
                <div className='col-md-6 mb-3 w-[50%]'>
                  <label htmlFor="product name" className='inline-block'>Product Name</label> <br />
                  <input type="text" id="product name" placeholder='Enter Product name' required className='block w-100 p-2 border border-gray-300 rounded-sm' />
                </div>
                <div className='col-md-6 mb-3 w-[50%]'>
                  <label htmlFor="productSKU" className='inline-block'>SKU</label> <br />
                  <input type="text" id="productSKU" placeholder='Enter SKU' required className=' block w-100 p-2 border border-gray-300 rounded-sm' />
                </div>
              </div>
              <div className="row flex mb-3 w-[100%]">
                <div className="col-md-6 mb-3 w-[50%]">
                  <label htmlFor="productprice  className='inline-block'">Price</label><br />
                  <input type="" id="productprice" placeholder='0.00' step="0.01" required className='block w-100 p-2 border border-gray-300 rounded-sm' />
                </div>
                <div className="col-md-6 mb-3 w-[50%]">
                  <label htmlFor="productstock" className='inline-block'>Stock Quantity</label><br />
                  <input type="number" id="productstock" placeholder='0' min='0' required className='block w-100 p-2 border border-gray-300 rounded-sm' />
                </div>
              </div>
              <div className=''>
                <label htmlFor="productcategory" className='inline-block'>Category</label><br />
                <select name="productcategory" id="productcategory" className='block w-[100%] p-2 border border-gray-300 rounded-sm mb-5'>
                  <option value="" >Select a category</option>
                  <option value="electronics" className='text-black'>Electronics</option>
                  <option value="clothing" className='text-black'>Clothing</option>
                  <option value="Food" className='text-black'>Food</option>
                </select>
              </div>
              <div>
                <label htmlFor="productimage" className='pt-4'>Product Image</label><br />
                <input type="file" id="productimage" accept="image/*" className='block w-[100%] p-2 text-gray-600 bg-gray-200 border border-gray-300 rounded-sm cursor-pointer mb-5' />
              </div>
              <div>
                <label htmlFor="description">Description</label><br />
                <textarea id="description" placeholder='Enter product description' rows={4} className='border border-gray-300 rounded-sm w-[100%] p-2'></textarea>
              </div>
              <div className='text-center'>
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer">Add Product</button>
                <button type="reset" className="bg-gray-700 text-gray-200 px-4 py-2 rounded-md ml-2 cursor-pointer">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default All_Products