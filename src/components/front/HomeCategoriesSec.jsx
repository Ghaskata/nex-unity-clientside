import React from "react";
import { category } from "../../data/data.js";
import image from "../../assets/images/frontHero/home header3.jpg";
import { Link } from "react-router-dom";

const HomeCategoriesSec = () => {
  return (
    <div className="w-full pt-5 xxl:pt-10 text-textPrimary ">
      <ul className="w-full flex justify-start gap-x-3 overflow-x-auto post-scroll">
        {category.map((item, index) => (
          <li className="cursor-pointer border border-textPrimary bg-backgroundv1 rounded-lg py-3 px-5 h-full w-full flex justify-center items-center text-center group/item"  key={index}>
            <Link to={`?category=${item.name}`} className="w-full h-full text-center">
                <h2 className="font-500 text-18">{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCategoriesSec;
