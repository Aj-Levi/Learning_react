import React, { useState } from 'react'

const Desc = () => {

    const [btn, setbtn] = useState<boolean>(true)
    const btn1 = <button onClick={()=>setbtn(prev=>!prev)} className="btn btn-primary w-20">Follow</button> 
    const btn2 = <button onClick={()=>setbtn(prev=>!prev)} className="btn btn-secondary">Following</button>

  return (
    <div className="w-[95%] mx-auto mt-16 flex flex-col gap-y-6">
      <div className="flex gap-x-4">
        <div
          className="text-4xl text-amber-400 underline decoration-4 underline-offset-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Abhijeet Jain
        </div>
        {btn?btn1:btn2}
      </div>
      <p className="text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero autem
        tempore in quod, quos dolor accusantium exercitationem quo optio
        voluptatem esse minima voluptates odio, aliquam adipisci nesciunt enim
        beatae totam.
      </p>
    </div>
  );
}

export default Desc