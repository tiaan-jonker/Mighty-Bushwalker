import React from 'react'
import TrackFilter from './TrackFilter'

function TrackFilters({ difficultyFilterDetails, lengthFilterDetails }) {
  return (
    <div>
      <h4>Filter</h4>
      <TrackFilter
        updateFilter={difficultyFilterDetails.updateDifficultyFilter}
        filter={difficultyFilterDetails.difficultyFilter}
        filterName="Difficulty"
      />
      <TrackFilter
        updateFilter={lengthFilterDetails.updateLengthFilter}
        filter={lengthFilterDetails.lengthFilter}
        filterName="Track Length"
      />
    </div>
  )
}

export default TrackFilters
