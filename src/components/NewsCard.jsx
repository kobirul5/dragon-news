
import { FaShareAlt, FaEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

const NewsCard = ({ data } = {}) => {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    details,
  } = data || {};



  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-6 space-y-4">
      {/* Header with Author Info */}
      <div className="flex items-center p-4 bg-[#F3F3F3]">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover "
        />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800">{author.name}</h3>
          <p className="text-sm text-gray-500">{author.published_date}</p>
        </div>
        <FaShareAlt className="ml-auto text-gray-600 cursor-pointer hover:text-gray-800 transition duration-150" />
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      </div>

      {/* Thumbnail Image */}
      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="w-full object-cover px-4 rounded-2"
      />

      {/* Details and Read More Link */}
      <div className="px-4 py-3">
        <p className="text-gray-700 mb-3">
          {details.slice(0, 100)}...
          <span className="text-blue-500 cursor-pointer font-semibold hover:underline">
            Read More
          </span>
        </p>
      </div>

      {/* Footer with Rating and Views */}
      <div className='divider px-4'></div>
      <div className="flex items-center  justify-between px-4 py-3 border-gray-200">
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500 mr-1" />
          <span className="text-gray-700 font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};


// PropTypes for validation
NewsCard.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        published_date: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      }).isRequired,
      thumbnail_url: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        number: PropTypes.number.isRequired,
        badge: PropTypes.string,
      }).isRequired,
      total_view: PropTypes.number.isRequired,
      details: PropTypes.string.isRequired,
    }).isRequired,
  };
  


export default NewsCard;