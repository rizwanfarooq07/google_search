import axios from "axios";

const { createContext, useState, useContext } = require("react");

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Manchester United");

  // /videos, /search, /images
  const getResults = async (type) => {
    setLoading(true);
    const response = await axios.get(`${baseUrl}${type}`, {
      headers: {
        "X-User-Agent": "desktop",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "339640b420msh46ee26a458373bap16b7fajsne290d0df04b2",
      },
    });
    console.log(response, "res");
    if (type.includes("/news")) {
      setResults(response.data.entries);
    } else if (type.includes("/image")) {
      setResults(response.data.image_results);
    } else {
      setResults(response.data.results);
    }
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
