import React from "react";

const newChipStyles = "bg-yellow-500 text-yellow-800 rounded-md px-1 w-max";

export const CardArticle = (props) => {
  const { title, subtitle, isNew } = props;
  return (
    <section className="group p-3 cursor-pointer hover:bg-gray-100 transition-all">
      <p className="opacity-70 group-hover:text-blue-800 group-hover:opacity-100">
        {title}
      </p>
      {isNew ? (
        <p className={newChipStyles}>New</p>
      ) : (
        <p className="opacity-40">{subtitle}</p>
      )}
    </section>
  );
};
