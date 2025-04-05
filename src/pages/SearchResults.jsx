import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GameCard from "../components/GameCard";
import "../styles/SearchResults.css"; // Import CSS
import SkeletonGameCard from "../components/SkeletonGameCard"; // Import Skeleton Component

const SearchResults = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const location = useLocation();
  
  // Extract search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  useEffect(() => {
    if (!searchTerm) return;

    setLoading(true); // Start loading before fetching

    fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results || []);
        setLoading(false); // Stop loading after fetching
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="search-results-container">
      <h2 className="text-center my-4">Search Results for "{searchTerm}"</h2>
      <div className="row">
        {loading ? (
          // Show Skeletons while loading
          Array(8).fill(0).map((_, index) => (
            <div key={index} className="col-md-3 mb-4">
              <SkeletonGameCard />
            </div>
          ))
        ) : games.length > 0 ? (
          games.map((game) => (
            <div key={game.id} className="col-md-3 mb-4">
              <GameCard game={game} />
            </div>
          ))
        ) : (
          <p className="text-center">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
