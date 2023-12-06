import React from 'react'

const Footer = () => {
    return (
        <div className='text-white h-96 py-4 my-10'>
            <div className='h-full w-full flex-col items-center justify-around space-y-20'>
                <div className='w-full flex items-center justify-between gap-4 px-3'>
                    <input type="text" placeholder='Email' className='flex-1 h-9 bg-slate-500 border-none px-2 rounded-xl' />
                    <button className='bg-red-600 p-1 rounded-xl hover:scale-110 transition-all duration-500'>Submit</button>
                </div>

                <div className='flex items-center justify-around'>
                    <div className='flex-col px-3 items-center space-y-4'>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>FAQ</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Helpe Center</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Account</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'> Media Center</h5>
                    </div>

                    <div className='flex-col px-3 items-center space-y-4'>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Investor Relations</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Jobs</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Ways To Watch</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Terms of Use</h5>
                    </div>

                    <div className='flex-col px-3 space-y-4'>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Privacy</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Cookie Preferences</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Corporate Information</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'> Contact Us</h5>
                    </div>

                    <div className='flex-col px-3 items-center space-y-4'>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Speed test</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Legal Notices</h5>
                        <h5 className='underline text-slate-500 hover:scale-110 hover:text-white cursor-pointer'>Only On Netflix</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer