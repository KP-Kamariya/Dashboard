import Footer from '@/commonfiles/Footer'
const Docs = ({isOpen }: { onToggle: () => void, isOpen: boolean }) => {
  return (
    <>
<div  className={`container bg-white border-b border-gray-300 z-10 transition-all w-full duration-300 ease-in-out ${isOpen ?'absolute left-10 top-0 w-300':'absolutev left-70 top-0 w-[75vw] ms-auto me-auto'}`}>        <div className='px-4 py-3'>
          <p className='text-3xl pb-2'>Documentation</p>
          <p className='text-sm pb-5'>This documentation will guide you through the setup and usage of the InApp Inventory Dashboard template. </p>
          <p className='text-xl'>Prerequisites</p>
          <p className='text-sm pb-5'>Before you begin, ensure you have the following installed:</p>
          <p className='text-xs pb-2'>Node.js (v14 or higher)</p>
          <hr />
          <p className='text-xs pb-2'>npm or yarn package manager</p>
          <hr />
          <p className='text-xs pb-2'>[Any other specific tools/dependencies]</p>
          <h1 className='text-xl py-5'>Installation</h1>
          <ol className='list-decimal ps-3'>
            <li className='text-sm pb-3'>Clone the repository or download the template</li><hr />
            <li className='text-sm pb-3'>Navigate to the project directory</li><hr />
            <li className='text-sm pb-3'>Install dependencies:</li>
          </ol>
          <pre className='bg-gray-100 border rounded p-3 mt-2'>
            <code>npm install</code>
          </pre>
          <h1 className='pt-5 text-xl'>Run the app</h1>
          <p className='text-sm pb-3'>To start the development server:</p>
          <pre className='bg-gray-100 border rounded p-3 mt-2'>
            <code>npm run dev</code>
          </pre>
          <h1 className='text-xl py-5'>Next Steps</h1>
          <ol className='list-decimal ps-3'>
            <li className='text-sm pb-3'>Review the main entry point in src/js/main.js</li>
            <li className='text-sm pb-3'>Customize components according to your needs</li>
            <li className='text-sm pb-3'>Build for production:</li>
          </ol>
          <pre className='bg-light border rounded p-3 mt-2'>
            <code>npm run build</code>
          </pre>
          <h1 className='py-5 text-xl'>Project Structure</h1>
          <pre>
            <code>
              inapp/ <br />
              ├── src/ <br />
              │   ├── assest/         # Static assets <br />
              │   │   ├── images/     # Images <br />
              │   │   ├── js/         # JS <br />
              │   │   ├── scss/       # CSS and styling <br />
              │   └── Pages           # All Pages <br />
              ├── vite.config.js/     # Config Files<br />
              ├── package.json        # Project dependencies <br />
              ├── README.md           # Documentation <br />
              └── .gitignore          # Git ignore file <br />
            </code>
          </pre>
          <h1 className='pt-5 text-xl'>Support</h1>
          <p className='text-sm pb-5'>For issues or questions, please refer to the documentation or create an issue in the repository. Also you can contact us at CodesCandy.</p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Docs