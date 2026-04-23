import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className='text-center'>
          <div className='flex items-center justify-center'>
            <div className="py-3">
              <img className="w-10 h-15" src="data:image/svg+xml,%3csvg%20width='62'%20height='67'%20viewBox='0%200%2062%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.604%2066.378L0.00805664%2048.1582V35.7825L30.604%2054.0023V66.378Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2048.1582L30.604%2066.378V54.0023L61.1996%2035.7825V48.1582Z'%20fill='%23E66239'/%3e%3cpath%20d='M30.5955%200L0%2018.2198V30.5955L30.5955%2012.3757V0Z'%20fill='%23657E92'/%3e%3cpath%20d='M61.191%2018.2198L30.5955%200V12.3757L61.191%2030.5955V18.2198Z'%20fill='%23A3B2BE'/%3e%3cpath%20d='M30.604%2048.8457L0.00805664%2030.6259V18.2498L30.604%2036.47V48.8457Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2030.6259L30.604%2048.8457V36.47L61.1996%2018.2498V30.6259Z'%20fill='%23E66239'/%3e%3c/svg%3e" alt="" />
            </div>
            <div className="py-2  content-center">
              <p className="text-lg font-bold text-gray-600">In<span className="font-bold text-orange-500">App</span></p>
              <p className=" text-[0.5rem] text-gray-500">Inventory App</p>
            </div>
          </div>
          <div className='items-center justify-center'>
            <p className='text-7xl font-bold text-orange-500'>404</p>
            <p className='text-xl pt-3'>Page not Found</p>
            <p className='text-gray-400 py-3'>Sorry, the page you're looking for doesn't exist or has been moved.</p>
            <button className=' '><h3 className='bg-orange-500 text-white  rounded-xs px-3 py-1'><Link to="/">Go to Dashboard</Link></h3></button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Error