import React from 'react';

function Header() {
  return (
    <div className=' sticky bottom-0  py-6 flex items-center justify-center w-full bg-transparent z-50'>
        <div className=' border border-[#011638]/10 rounded-full
         space-x-4 flex items-center justify-center bg-[#EEF0F2] hover:shadow-2xl z-50 smooth  hover:shadow-[#0D21A1]/20 py-2 px-6 w-fit'>
             <div className='menu-item-container'>
                 <h1>Works</h1>
             </div>
             <div  className='menu-item-container'>
                 <h1>About</h1>
             </div>
             <div  className='menu-item-container'>
                 <h1>Contact</h1>
             </div>

        </div>


    </div>
  )
}

export default Header;