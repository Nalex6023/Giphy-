import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Header from "./Header";
import { useOnKeyPress } from "../hooks/useOnKeyPress";
const Giphy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "TJRF1qXkjloJYDWuZU85KlPbHpTjuB4V",
            limit: 15,
          },
        });

        setData(results.data.data);
      } catch (err) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderGifs = () => {
    if (isLoading) {
      return (
        <div className="loader-container">
          <Loader />
        </div>
      );
    }
    return data.map((el) => {
      return (
        <div className="gif" key={el.id}>
          <img src={el.images.downsized.url} className="giff"></img>
        </div>
      );
    });
  };

  const handleSearchChange = (ev) => {
    setSearch(ev.target.value);
  };
  const handleSubmit = async (ev) => {
    // eslint-disable-next-line no-restricted-globals
    ev.preventDefault();
    setSearch("");
    setIsError(false);
    setIsLoading(true);
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "TJRF1qXkjloJYDWuZU85KlPbHpTjuB4V",
        q: search,
        limit: 15,
      },
    });
    setData(results.data.data);
    setIsLoading(false);
  };

  return (
    <div className="main">
      <div className="m-2 ">
        <Header />
        <div className="search">
          <input
            value={search}
            onChange={handleSearchChange}
            type="text"
            placeholder="Search all the GIFs and Stickers"
            className="form-control"
          />

          <button onClick={handleSubmit} type="submit" className="button">
            Search
          </button>
        </div>
      </div>
      <div className="container-gifs">{renderGifs()}</div>
    </div>
  );
};
export default Giphy;
