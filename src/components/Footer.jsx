import React from "react";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
      <h1>{year}, Google, Inc.</h1>
    </div>
  );
};

export default Footer;
