import React, { useState } from "react";
import { FaCameraRetro } from "react-icons/fa6";

const Banner = () => {
  const [BannerURL, setBannerURL] = useState<string>(
    "https://marketplace.canva.com/EAFJyc9w5I4/1/0/1600w/canva-black-modern-geometric-personal-linkedin-banner-R5Rh6eCqpt8.jpg"
  );
  const [Avatar, setAvatar] = useState<string>(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA4rGE9s5ji-JA5TJRneUbSNtyUefUOb56eR0vi1aTV2HDy7iZm7Qa-TDZnfgSxCCmnI&usqp=CAU"
  );

const handleBanerChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const file = event.target.files![0];
    if (file) {
        setBannerURL(URL.createObjectURL(file));
    }
}
const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const file = event.target.files![0];
    if (file) {
        setAvatar(URL.createObjectURL(file));
    }
}

  return (
    <div className="mb-2 relative">
      <div className="w-[96%] h-60 mt-6 mx-auto bg-red-500 rounded-2xl relative">
        <img
          src={BannerURL}
          alt="banner-image"
          className="h-full w-full object-cover rounded-2xl"
        />
        <input
          type="file"
          name="banner"
          id="banner"
          accept="image/*"
          onChange={(event) => handleBanerChange(event)}
          className="bg-black rounded-full w-12 h-12 absolute -bottom-4 right-6 hidden"
        />
        <label
          className="absolute -bottom-2 right-8 cursor-pointer active:scale-95"
          htmlFor="banner"
        >
          <FaCameraRetro size={30} />
        </label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/*"
          onChange={(event) => handleAvatarChange(event)}
          className="bg-black rounded-full w-10 h-10 absolute -bottom-4 left-6 hidden"
        />
        <label
          className="absolute -bottom-12 left-8 cursor-pointer active:scale-95"
          htmlFor="avatar"
        >
          <div className="avatar">
            <div className="ring-black ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <img src={Avatar} />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Banner;
