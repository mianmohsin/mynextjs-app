import Image from 'next/image'
import logo from '../../../../public/logo.png'
export default function Header() {
  return (
    <nav className="bg-white border-b-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image width={142} height={50} className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:text-black">Home</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:text-black">About</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:text-black">Services</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:text-black">Successs Stories</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:text-black">Contact</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a className="rounded-md px-3 py-2 text-sm font-medium text-blue-900 hover:text-black">
              Login
            </a>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-full bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">

          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
        </div>
      </div>
    </nav>
  );
}