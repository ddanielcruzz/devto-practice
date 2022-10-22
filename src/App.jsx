import React from "react";
import { RightAside } from "./scenes/RightAside";

const PostTopic = (props) => {
  const getStyles = (topic) => {
    if (topic === "discuss") return "bg-green-100 text-green-400";
    if (topic === "productivity") return "bg-red-100 text-red-400";
    if (topic === "beginners") return "bg-purple-100 text-purple-400";
  };

  return (
    <div className={`p-1 rounded-md ${getStyles(props.topic)}`}>
      # <span className="text-black">{props.topic}</span>
    </div>
  );
};

const Post = (props) => {
  const { profileImageUrl, name, time, title, tags, reactions, readingTime } =
    props;

  return (
    <article className="flex items-start border border-gray-300 rounded-lg p-5 space-x-2">
      <img src={profileImageUrl} className="w-8 h-8" alt="" />
      <section className="w-full">
        <p>{name}</p>
        <p>{time}</p>
        <p className="text-xl font-bold mt-2">{title}</p>
        <section className="flex space-x-2">
          {tags.map((tag) => (
            <PostTopic topic={tag} />
          ))}
        </section>
        <section className="flex justify-between w-full">
          <section className="flex space-x-4">
            <button>{reactions} Reactions</button>
            <button>Add comment</button>
          </section>
          <section>
            <p>{readingTime} min read</p>
          </section>
        </section>
      </section>
    </article>
  );
};

function App() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      <aside>Links</aside>
      <main className="flex flex-col space-y-4">
        <Post
          profileImageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--_9ZzIuv8--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/951397/3d58bb7a-bab2-4fff-9b9a-a969c4b50adc.jpeg"
          name="Samuel Pires"
          time="Oct 21 (8 hours ago)"
          title="Boreout"
          tags={["discuss", "productivity", "beginners"]}
          reactions={8}
          readingTime={2}
        />
      </main>
      <RightAside />
    </section>
  );
}

export default App;
