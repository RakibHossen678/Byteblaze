import { Link } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'
import PropTypes from 'prop-types';

const BlogCard = ({blog}) => {
    const {description,published_at,cover_image,title,id}=blog
    return (
        
            <Link 
            to={`/blog/${id}`}            
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 rounded-lg "
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500"
              src={cover_image || placeHolderImage}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-xs text-gray-400">{new Date (published_at).toLocaleDateString()}</span>
              <p>
               {description}
              </p>
            </div>
          </Link>
        
    );
};
BlogCard.propTypes ={
    blog:PropTypes.object
}

export default BlogCard;