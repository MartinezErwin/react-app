import React, { useState } from "react";

export default function Sectionfollow({ userName, name }) {
  const [isfollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isfollowing);
  };

  const text = isfollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isfollowing
    ? "bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
    : "bg-white text-black px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300";

  const imgSrc = `https://unavatar.io/twitter/${userName}`;

  return (
    <div className="flex flex-col py-2">
      <div className="flex items-center">
        <img src={imgSrc} className="p-2 w-15 h-15 rounded-full"></img>
        <div>
          <strong>{name}</strong>
          <p className="text-gray-500">@{userName}</p>
        </div>
        <div className="ml-auto p-2">
          <button className={buttonClassName} onClick={handleClick}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}
