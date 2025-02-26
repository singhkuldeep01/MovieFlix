import React from "react";
import "./SkeletonMovieCard.css"; // Ensure CSS file is linked

const SkeletonMovieCard = () => {
  return (
    <div className="w-44 md:w-52 lg:w-56 h-72 md:h-80 lg:h-96 bg-base-100 rounded-lg shadow-lg overflow-hidden pt-20">
      {/* Image Skeleton */}
      <div className="w-full h-2/3 skeleton-shimmer" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 w-3/4 skeleton-shimmer" />
        <div className="h-4 w-1/2 skeleton-shimmer" />

        {/* Year + Genre */}
        <div className="flex gap-2">
          <div className="h-3 w-1/4 skeleton-shimmer" />
          <div className="h-3 w-1/3 skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonMovieCard;
