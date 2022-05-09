import React from 'react'
import TrackFilter from './TrackFilter'

function TrackFilters({ difficultyFilterDetails, lengthFilterDetails }) {
  const difficultyOptions = ['Easy', 'Intermediate', 'Advanced']
  const lengthOptions = ['Short', 'Medium', 'Long']

  return (
    <div>
      <TrackFilter
        updateFilter={difficultyFilterDetails.updateDifficultyFilter}
        filter={difficultyFilterDetails.difficultyFilter}
        filterName="Difficulty"
        filterOptions={difficultyOptions}
      />
      <TrackFilter
        updateFilter={lengthFilterDetails.updateLengthFilter}
        filter={lengthFilterDetails.lengthFilter}
        filterName="Track Length"
        filterOptions={lengthOptions}
      />
    </div>
  )
}

export default TrackFilters
