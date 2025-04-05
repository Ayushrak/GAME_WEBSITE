import React, { useEffect, useState } from "react";
import { fetchGames } from "../api";
import "../styles/GameList.css"; // Import custom styles
import GameCard from "./GameCard"; // Assuming you have a GameCard component

const MAX_PAGES = 10; // Set the max number of pages to load

const GameList = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMoreGames();
  }, []);

  const loadMoreGames = async () => {
    if (loading || page > MAX_PAGES) return; // Prevent exceeding limit

    setLoading(true);
    const data = await fetchGames(page);

    if (data && data.results.length > 0) {
      setGames((prevGames) => [...prevGames, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center game-list-title">🎮 Game List</h2>
      <div className="row">
        {games.map((game) => (
          <div key={game.id} className="col-md-4 mb-4">
            <GameCard game={game} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && page <= MAX_PAGES && (
        <div className="text-center mt-4">
          <button 
            className="btn btn-warning"
            onClick={loadMoreGames}
            disabled={loading}
          >
            {loading ? "Loading..." : `Load More Games (Page ${page})`}
          </button>
        </div>
      )}
    </div>
  );
};

export default GameList;
