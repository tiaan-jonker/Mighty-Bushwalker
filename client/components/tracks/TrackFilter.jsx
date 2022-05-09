import React from 'react'

function TrackFilter({ filter, updateFilter, filterName, filterOptions }) {
  const filterItems = ['Select All', ...filterOptions]

  function handleSelect(filterValueClicked, isSelected) {
    switch (filterValueClicked) {
      case 'Select All':
        isSelected ? updateFilter([]) : updateFilter(filterOptions)
        break

      default:
        updateFilter(
          isSelected
            ? filter.filter((filterValue) => filterValue !== filterValueClicked)
            : [...filter, filterValueClicked]
        )
        break
    }
  }

  return (
    <div>
      <div>
        <p className="filter-name">{filterName}</p>
      </div>
      <div>
        {filterItems.map((filterValue, index) => {
          const isSelected =
            filterValue === 'Select All'
              ? filter.length === 3
              : filter.includes(filterValue)
          return (
            <div key={index}>
              <div className="filter-item">
                <label className="filter-text">{filterValue}</label>‍
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => {
                    handleSelect(filterValue, isSelected)
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TrackFilter
