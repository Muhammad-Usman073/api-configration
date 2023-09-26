import React from 'react'

const Footer = () => {
    const timeData = new Date;
    const year = timeData.getFullYear()
    console.log(year)

    return (
        <div className='flex items-center justify-center w-full mt-[3rem] mb-3' >
            &copy; <p className='text-[20px] font-semibold ' >{year} Dummy website. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
