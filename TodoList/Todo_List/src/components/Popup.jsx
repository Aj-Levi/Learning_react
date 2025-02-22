// import React, { useContext } from 'react' 
// import { popupWrapper } from '../App.jsx'

// const Popup = () => {

//     let [setPopupActive,isPopupActive] = useContext(popupWrapper)

//     return (
//         <div className={`flex justify-center items-center bg-green-400 h-25 w-84 absolute top-10 -right-80 shadow-lg rounded-lg border border-gray-300 p-4 ${isPopupActive? 'visible transition-all -translate-x-90':'invisible'} `}>
//             <div className='font-bold text-2xl'>Task added successfully 😁</div>
//         </div>
//     )
// }

// export default Popup

import React, { useContext } from 'react';
import { popupWrapper } from '../App.jsx'

const Popup = () => {

    let [setPopupActive,isPopupActive] = useContext(popupWrapper)

  return (
    <div role="alert" className={`flex justify-center items-center gap-x-3 h-25 w-88 absolute top-10 -right-80 rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8 ${isPopupActive? 'visible transition-all -translate-x-90':'invisible'}`}>
      <div className="flex items-center gap-4">
        <span className="rounded-full bg-emerald-400 p-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      <p className="text-gray-600 flex items-center text-xl font-bold">
        Task Added Successfully
      </p>
    </div>
  );
}

export default Popup;
