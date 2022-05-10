import React from 'react'
import TrackFilter from './TrackFilter'

function TrackFilters({ difficultyFilterDetails, lengthFilterDetails }) {
  const { setDifficultyFilter, difficultyFilter } = difficultyFilterDetails
  const { setLengthFilter, lengthFilter } = lengthFilterDetails

  const difficultyOptions = ['Easy', 'Intermediate', 'Advanced']
  const lengthOptions = ['Short', 'Medium', 'Long']

  return (
    <div>
      <TrackFilter
        updateFilter={setDifficultyFilter}
        filter={difficultyFilter}
        filterName="Difficulty"
        filterOptions={difficultyOptions}
      />
      <TrackFilter
        updateFilter={setLengthFilter}
        filter={lengthFilter}
        filterName="Track Length"
        filterOptions={lengthOptions}
      />
    </div>
  )
}

export default TrackFilters
