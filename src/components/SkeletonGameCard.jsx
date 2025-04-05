import React from "react";
import "../styles/SkeletonGameCard.css"; // Import CSS for styling

const SkeletonGameCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

export default SkeletonGameCard;
