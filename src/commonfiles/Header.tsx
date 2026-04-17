import { BellDot, PanelLeftOpen } from 'lucide-react'
const Header = ({ onToggle, isOpen }: { onToggle: () => void, isOpen: boolean }) => {

  return (
    <>
      <div className={`fixed top-0 right-0 bg-white border-b border-gray-300 z-99 transition-all duration-300 ease-in-out ${isOpen ? 'w-[calc(100%-14rem)]' : 'w-full'
        }`}>
        <div className="w-full flex py-3 justify-between ">
          <div>
            <button onClick={onToggle} className='bg-gray-200 p-1 ...'><PanelLeftOpen className='size-5' /></button>
          </div>
          <div>
            <ul className='flex items-center gap-3'>
              <li><BellDot /></li>
              <li><img className='rounded-full size-8' src="https://themewagon.github.io/inapp/assets/images/avatar-1.jpg" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>)
}

export default Header