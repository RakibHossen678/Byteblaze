import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import { deleteBlogs, getBlog } from "../utility/localstorage";
import EmptyState from "../Components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlog();
    setBlogs(storedBlogs);
  }, []);
  const handleDeleteBlog = (id) => {
    deleteBlogs(id);
    const storedBlogs = getBlog();
    setBlogs(storedBlogs);
  };
  if(blogs.length<1)return <EmptyState message={'No Bookmarks Available!'} lable={'Browse Blogs'}
  address={'/blogs'}></EmptyState>
  return (
    <div className="grid justify-center px-4   grid-cols-1 max-w-7xl gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 pt-10 ">
      {blogs.map((blog) => (
        <BlogCard
          handleDeleteBlog={handleDeleteBlog}
          deleteTable={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
