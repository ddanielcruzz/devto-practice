import React from "react";

const newChipStyles = "bg-yellow-500 text-yellow-800 rounded-md px-1 w-max";

export const CardArticle = (props) => {
  const { title, subtitle, isNew } = props;
  return (
    <section className="p-3 cursor-pointer hover:bg-gray-100">
      <p className="opacity-70 hover:text-blue-800 hover:opacity-100">
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
