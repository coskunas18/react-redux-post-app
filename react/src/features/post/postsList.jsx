import { useSelector } from "react-redux";
import { selecAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
    const posts = useSelector(selecAllPosts);

    const renderedPosts = posts.map((post,index) => (
        <div className="w-[25rem] border-2 border-white p-3 mt-10 rounded-md text-white italic" key={index}>
            <h3 className="text-2xl">{post.title}</h3>
            <p className="whitespace-normal">{post.content.substring(0, 100)}</p>
            <div className="text-right mt-4 opacity-80">
            <PostAuthor userId={post.userId} />
            </div>

        </div>
    ));

    return (
        <section className="w-full flex flex-col flex-wrap justify-center items-center">
            <h2 className="text-5xl text-white mt-10">Posts</h2>
            <div className="">
              {renderedPosts}
            </div>

        </section>
    );
};

export default PostList;
