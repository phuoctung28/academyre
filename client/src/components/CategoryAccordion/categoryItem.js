import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { HpPopup, returnCost } from "../HomepageItem";

export const CategoryItem = (props) => {
  const { img, courseName, desc, author, ratings, raters, category, cost } =
    props;
  return (
    <Link to="/courseDetail">
      <div
        className=" bg-white m-auto w-full py-4 shadow-sm cursor-pointer hover:opacity-75 relative flex flex-row mb-4 border-b border-gray-500 "
        style={{ width: "100%", height: "240px" }}
      >
        <img
          style={{ width: "360px", height: "100%" }}
          src={img}
        ></img>
        <div className="flex flex-col ml-10">
        <div className="font-semibold text-xl truncate">{courseName}</div>
        <div className="text-base">{desc}</div>
        <div className = "text-sm mb-2 text-gray-500">
            {author}
        </div>
        <div className = "flex flex-row">
            <div className = "text-green-800 text-xs">
            Last updated: <b>24/02/2022</b> 
            </div>
            <div className = "ml-4 text-xs text-gray-500">
            34 hours 
            </div>
            <div className = "mx-2 text-xs text-gray-500">•</div>
            <div className = "text-xs text-gray-500">
            11 lectures
            </div>
            <div className = "mx-2 text-xs text-gray-500">•</div>
            <div className = "text-xs text-gray-500">
            Intermediate
            </div>                         
        </div>


        <div className="mt-1 flex flex-row">
          <div className="text-sm mr-1 font-semibold text-yellow-600">
            {ratings.score}
          </div>
          <Rating
            sx={{ color: "rgb(245 158 11)" }}
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
            size="small"
          />
          <div className="text-sm mr-1 text-gray-500">
            <p />({ratings.raters})
          </div>
        </div>
        <div className="text-base mt-auto">{returnCost(cost)}</div>
        <HpPopup
          placement="right-start"
          title={
            <React.Fragment>
              <div className="p-2">
                <div className="font-semibold text-base w-full">
                  {courseName}
                </div>
                <div className="text-xs text-gray-500 w-full">{author}</div>
                <div className="text-green-600 w-full">
                  Last updated: <b>24/02/2022</b>
                </div>
                <div className="w-full">{desc}</div>
                <div className="flex flex-row w-full mt-4">
                  <button className="w-4/5 py-2 bg-cyan-200 border text-sm hover:opacity-75 cursor-pointer border-black">
                    Add to cart
                  </button>
                  <div className="border border-black p-2 m-auto hover:opacity-75 cursor-pointer">
                    <FavoriteBorderIcon
                      fontSize="inherit"
                      style={{ fontSize: "24px", margin: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <Button className="w-full h-full absolute top-0 left-0"></Button>
        </HpPopup>

        </div>

      </div>
    </Link>
  );
};