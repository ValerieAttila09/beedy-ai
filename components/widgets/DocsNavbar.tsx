import { GithubIcon, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Kbd } from '../ui/kbd'
import { Button } from '../ui/button'

const DocsNavbar = () => {
  return (
    <div className='fixed top-0 inset-x-0 z-50 h-auto bg-white py-2'>
      <div className="mx-auto max-w-7xl w-full flex items-center justify-between">
        <div className="">
          <Link href="/docs" className="text-lg font-semibold">
            Beedy Docs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-md border border-border bg-accent w-80 h-8 px-2 flex items-center justify-between">
            <span className="text-sm font-normal text-neutral-600">search documentation...</span>
            <Kbd className="bg-accent border border-border rounded">⌘K</Kbd>
          </button>
          <div className="flex items-center gap-4">
            <Button size={'sm'} variant={'ghost'} className='rounded-md flex gap-1'>
              <GithubIcon className='size-4 text-black' />
              <span className="text-neutral-600 text-sm font-thin">12,427</span>
            </Button>
            <Button size={'sm'} variant={'ghost'} className='rounded-md flex gap-2'>
              <svg className='size-5' xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 192 192" fill="none"><path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10" /><ellipse cx="71" cy="101" fill="#000000" rx="13" ry="15" /><ellipse cx="121" cy="101" fill="#000000" rx="13" ry="15" /></svg>
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-neutral-600 text-sm font-thin">236</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocsNavbar
