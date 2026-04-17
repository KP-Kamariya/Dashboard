import { Link } from "react-router-dom";
import { Home, Package, Plus, FileText, AlertCircle, BookOpen, LogIn, UserPlus, } from "lucide-react";

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <div className={`fixed left-0 top-0 h-screen w-56 bg-white shadow-md flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-100'
        }`}>        <div className="pb-4">
          <div className='flex px-4 items-center gap-1'>
            <div className="py-3">
              <img className="w-7 h-7 pe-1" src="data:image/svg+xml,%3csvg%20width='62'%20height='67'%20viewBox='0%200%2062%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.604%2066.378L0.00805664%2048.1582V35.7825L30.604%2054.0023V66.378Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2048.1582L30.604%2066.378V54.0023L61.1996%2035.7825V48.1582Z'%20fill='%23E66239'/%3e%3cpath%20d='M30.5955%200L0%2018.2198V30.5955L30.5955%2012.3757V0Z'%20fill='%23657E92'/%3e%3cpath%20d='M61.191%2018.2198L30.5955%200V12.3757L61.191%2030.5955V18.2198Z'%20fill='%23A3B2BE'/%3e%3cpath%20d='M30.604%2048.8457L0.00805664%2030.6259V18.2498L30.604%2036.47V48.8457Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2030.6259L30.604%2048.8457V36.47L61.1996%2018.2498V30.6259Z'%20fill='%23E66239'/%3e%3c/svg%3e" alt="" />
            </div>
            <div className="py-2">
              <p className="text-lg font-bold text-gray-600">In<span className="font-bold text-orange-500">App</span></p>
              <p className=" text-[0.5rem] text-gray-500">Inventory App</p>
            </div>
          </div>
          <hr className="text-gray-300" />
          <div className="px-4">
            <p className="text-black text-xs my-2">Main</p>

            <ul className="">
              <li className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-100 hover:text-orange-500">
                <Home size={15} />
                <p className="text-sm"><Link to="/">Dashboard</Link></p>
              </li>

              <li className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-100 hover:text-orange-500">
                <Package size={15} />
                <Link to="/inventory">
                  <p className="text-sm">Inventory</p>
                </Link>
              </li>

              <li className="flex items-center gap-3 p-1  rounded-lg hover:bg-orange-100 hover:text-orange-500 ">
                <Plus size={15} />
                <Link to="/allproduct">
                  <p className="text-sm">Add Product</p>
                </Link>
              </li>

              <li className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-100 hover:text-orange-500 ">
                <FileText size={15} />
                <Link to="/reports">
                  <p className="text-sm">Reports</p>
                </Link>
              </li>

              <li className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-100 hover:text-orange-500 ">
                <AlertCircle size={15} />
                <Link to="/error">
                  <p className="text-sm">404 Error</p>
                </Link>
              </li>

              <li className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-100 hover:text-orange-500 ">
                <BookOpen size={15} />
                <Link to="/Docs">
                  <p className="text-sm">Docs</p></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 pb-5">
          <p className="text-gray-600 text-sm mb-2">Account</p>

          <ul className="space-y-2">
            <li className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-100 hover:text-orange-500 ">
              <LogIn size={15} />
              <Link to="/login">
                <p className="text-sm">Log in</p>
              </Link>
            </li>

            <li className="flex items-center gap-3 p-1 rounded-lg hover:bg-orange-100 hover:text-orange-500 ">
              <UserPlus size={15} />
              <Link to="/signup">
                <p className="text-sm">Sign up</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>


    </>
  )
}

export default Sidebar