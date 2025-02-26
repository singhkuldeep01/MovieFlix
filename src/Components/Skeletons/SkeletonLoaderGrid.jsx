import React from 'react';
import SkeletonMovieCard from './SkeletonMovieCard';

function SkeletonLoaderGrid() {
    return (
      <div className="flex flex-wrap gap-10 justify-center p-10">
        {[...Array(10)].map((_, index) => (
          <SkeletonMovieCard key={index} />
        ))}
      </div>
    );
}

export default SkeletonLoaderGrid;