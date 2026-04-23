import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { Checkbox } from "./ui/checkbox"
const Login = () => {

  return (
    <>
     <div className='m-4 '>
      <Link to='/dashboard'><button className='cursor-pointer bg-orange-500 text-white p-2 rounded-xs'>Go to Dashboard</button></Link> 
    </div>
      <div className="container flex items-center justify-center min-vh-100 mt-[100px]">
        <FieldGroup className="border p-5 rounded-xl w-100">
          <div className='flex items-center justify-center gap-2'>
            <div>
              <img className="w-10 h-15" src="data:image/svg+xml,%3csvg%20width='62'%20height='67'%20viewBox='0%200%2062%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.604%2066.378L0.00805664%2048.1582V35.7825L30.604%2054.0023V66.378Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2048.1582L30.604%2066.378V54.0023L61.1996%2035.7825V48.1582Z'%20fill='%23E66239'/%3e%3cpath%20d='M30.5955%200L0%2018.2198V30.5955L30.5955%2012.3757V0Z'%20fill='%23657E92'/%3e%3cpath%20d='M61.191%2018.2198L30.5955%200V12.3757L61.191%2030.5955V18.2198Z'%20fill='%23A3B2BE'/%3e%3cpath%20d='M30.604%2048.8457L0.00805664%2030.6259V18.2498L30.604%2036.47V48.8457Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2030.6259L30.604%2048.8457V36.47L61.1996%2018.2498V30.6259Z'%20fill='%23E66239'/%3e%3c/svg%3e" alt="" />
            </div>
            <div className="py-2  content-center">
              <p className="text-lg font-bold text-gray-600">In<span className="font-bold text-orange-500">App</span></p>
              <p className=" text-[0.5rem] text-gray-500">Inventory App</p>
            </div>
          </div>
          <p className="text-center text-xl">Sign in to your account</p>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input id="fieldgroup-name" placeholder="Jordan Lee" />
          </Field>
          <Field>
            <div className="flex">
              <FieldLabel htmlFor="fieldgroup-password">password</FieldLabel>
              <FieldLabel htmlFor="fieldgroup-link" className="text-orange-500 flex justify-end w-full text-[12px]"><a href="">Forgot password ?</a></FieldLabel>
            </div>
            <Input
              id="fieldgroup-password"
              type="password"
              placeholder="Enter password"
            />
          </Field>
          <Field orientation="horizontal">
            <Checkbox /><FieldLabel>Remember me</FieldLabel>
          </Field>
          <Field orientation="vertical">
            <Button type="reset" variant="outline" className="w-full bg-orange-500 text-white">
              Sign in
            </Button>
          </Field >
          <Field orientation="horizontal" className="text-sm text-center justify-center gap-0  ">
            <p>Don't have an account? </p> <Link to="/signup" className="text-orange-500 cursor-pointer">Sign up
            </Link>
          </Field>
        </FieldGroup>
      </div>
    </>
  )
}

export default Login