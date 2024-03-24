import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  const { description, published_at, cover_image, title, tags, body_html } =
    blog;
  return (
    <div>
      <div className=" mx-auto group hover:no-underline focus:no-underline  border-2 p-2 ">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="flex flex-wrap py-3 gap-2  ">
          {tags.map((tag, id) => (
            <a
              key={id}
              className="px-3 py-1 rounded-sm hover:underline  text-gray-900 font-medium"
            >
              #{tag}
            </a>
          ))}
        </div>
        <div className=" space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <div className="overflow-hidden">
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
