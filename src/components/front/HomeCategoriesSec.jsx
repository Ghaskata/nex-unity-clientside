import React from "react";
import { category } from "../../data/data.js";
import image from "../../assets/images/frontHero/home header3.jpg";
import { Link } from "react-router-dom";

const HomeCategoriesSec = () => {
  return (
    <div className="w-full pt-5 xxl:pt-10 px-3 xl:px-5 text-textPrimary ">
      <ul className="w-full flex justify-start gap-x-5 overflow-x-auto post-scroll">
        {category.map((item, index) => (
          <li className="cursor-pointer group/item"  key={index}>
            <Link className="flex flex-col justify-center items-center" to={`?category=${item.name}`}>
              <div className="w-[80px] h-[80px] group-hover/item:border-4 transition-all duration-300 ease-linear group-hover/item:border-blueMain flex-shrink-0 flex justify-center items-center rounded-full overflow-hidden">
                <img
                  src={image}
                  alt="image"
                  className="w-full h-full group-hover/item:scale-105 transition-all duration-300 ease-linear object-cover object-center"
                />
                {/* <div className="h-full w-full flex justify-center rounded-full items-center border-2 border-[#ec4444] bg-[#ec4444]/30 text-[#ec4444]">{item.icon}</div> */}
              </div>
              <div className="mt-2 w-[80px] text-center text-textPrimary group-hover/item:text-blueMain transition-all duration-300 ease-linear">
                <h2 className="font-500 text-18 truncate">{item.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCategoriesSec;
