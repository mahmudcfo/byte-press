import { format } from "date-fns";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const { author, title, total_view, rating, thumbnail_url, details } = news;
  return (
    <div className="border-2 border-base-300 rounded-md">
      <div className="px-5 py-3  flex items-center justify-between border bg-base-200 border-base-200">
        <div className="flex items-center gap-3">
          <div>
            <img
              className="w-10 rounded-full"
              src={author.img}
              alt={author.name}
            />
          </div>
          <div>
            <p className="font-semibold text-neutral-700">{author.name}</p>
            <p className="text-sm text-neutral-500">
              {" "}
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-3xl">
          <CiBookmark className="cursor-pointer hover:text-secondary" />

          <CiShare2 className="cursor-pointer hover:text-secondary" />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5">
        <h2 className="font-bold text-xl text-neutral-700">{title}</h2>
        <div>
          <img
            src={thumbnail_url}
            className="mb-7 w-full rounded-md"
            alt={title}
          />
          <p className="text-neutral-500 font-medium">
            {details.length > 250 ? (
              <>
                {details.slice(0, 250)}
                ...
                <span className="cursor-pointer text-orange-400 font-semibold">
                  Read More
                </span>
              </>
            ) : (
              details
            )}
          </p>
        </div>
        <div className="border border-base-300"></div>
        <div className="flex justify-between items-center">
          <div className="text-neutral-500 flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < rating.number
                    ? "text-orange-400 text-xl"
                    : "text-neutral-400 text-xl"
                }
              />
            ))}

            <span className="font-medium">{rating.number.toFixed(1)}</span>
          </div>

          <div className="text-neutral-500 flex items-center gap-3">
            <span>
              <IoEyeSharp className="text-2xl " />
            </span>
            <span className="font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
