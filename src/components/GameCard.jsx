import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/slices/gameSlice";
import { useAuth } from "@clerk/clerk-react"; // Import Clerk auth
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const { userId, openSignIn } = useAuth(); // Clerk Auth

  // Get saved games from Redux state
  const savedGames = useSelector((state) => state.games.savedGames);
  const isFavorite = savedGames.some((g) => g.id === game.id);

  // Function to handle bookmarking
  const handleBookmark = () => {
    if (!userId) {
      alert("Please log in to bookmark this game.");
      openSignIn(); // Open Clerk's Sign-In Modal
      return;
    }
    dispatch(toggleFavorite(game)); // Bookmark only if authenticated
  };

  return (
    <Card className="bg-dark text-light mb-3 game-card">
      <Card.Img variant="top" src={game.background_image} alt={game.name} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>⭐ {game.rating} | 🏷 {game.genres.map((g) => g.name).join(", ")}</Card.Text>
  
        <div className="d-flex flex-column flex-sm-row justify-content-between">
          {/* View Game Details */}
          <Link to={`/game/${game.id}`}>
            <Button variant="primary" pill className="mb-2 mb-sm-0 me-sm-2">
              View Details
            </Button>
          </Link>
  
          {/* Bookmark Button */}
          <Button
            variant={isFavorite ? "danger" : "outline-light"}
            onClick={handleBookmark}
            pill
          >
            {isFavorite ? "Remove" : "Bookmark"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );  
};

export default GameCard;
