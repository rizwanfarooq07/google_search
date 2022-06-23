import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResults, results, loading, searchTerm, setSearchTerm } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title }, i) => (
            <div key={i} className="md:w-2/5 w-full-width">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-sm"
              >
                <p>{`${link}`}</p>
                <p className="text-lg text-blue-700 hover:underline dark:text-blue-300">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap items-center justify-center">
          {results?.map(({ image, link: { href, title } }, i) => (
            <a
              href={href}
              key={i}
              className="p-5 sm:p-3"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="mt-2 text-sm break-words w-36">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap items-center justify-between space-y-6 sm:px-56">
          {results?.map(({ links, id, source, title }, i) => (
            <div key={i} className="md:w-2/5 w-full-width">
              <a
                href={links?.[0].href}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                <p className="text-lg text-blue-700 dark:text-blue-300">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return (
        <div className="flex flex-wrap">
          {results.map((video, i) => (
            <div key={i} className="p-2">
              {video.additional_links?.[0].href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="355px"
                  height="200px"
                />
              )}
            </div>
          ))}
        </div>
      );
    default:
      return "ERROR";
  }
};

export default Results;
