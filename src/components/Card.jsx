import React from "react";

export const Card = (props) => {
  return (
    <article className=" py-4 bg-gray-200 rounded-sm border border-gray-300">
      <p className="px-3 text-lg font-bold">{props.title}</p>
      {props.children}
    </article>
  );
};
