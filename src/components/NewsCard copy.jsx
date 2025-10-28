import { format } from "date-fns";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author?.published_date), "PPP")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-4">
        <h3 className="text-lg font-bold text-gray-800 hover:text-primary transition">
          {title}
        </h3>
      </div>

      {/* Thumbnail */}
      <figure className="px-5 py-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-5 text-gray-600 text-sm">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...{" "}
            <span className="text-primary cursor-pointer hover:underline">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 mt-3">
        <div className="flex items-center gap-2 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating?.number)
                  ? "text-warning"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating?.number?.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span className="text-sm font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
