import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  const links = [
    { url: "/search", text: "🔎 All" },
    { url: "/news", text: "📰 News" },
    { url: "/image", text: "📷 Images" },
    { url: "/videos", text: "🎥 Videos" },
  ];
  return (
    <div className="flex items-center justify-between mt-4 sm:justify-around">
      {links.map(({ url, text }) => (
        <NavLink
          key={url}
          to={url}
          className={(navData) =>
            navData.isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0"
              : "m-2 mb-0"
          }
          //   activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
          //   className="m-2 mb-0"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
