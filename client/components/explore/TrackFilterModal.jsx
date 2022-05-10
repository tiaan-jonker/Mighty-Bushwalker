import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import TrackFilters from './TrackFilters'

function TrackFilterModal({
  setIsOpenModal,
  difficultyFilterDetails,
  lengthFilterDetails,
}) {
  return (
    <div className="modal-container">
      <div className="darkBG" onClick={() => setIsOpenModal(false)} />
      <div className="modal-centered">
        <div className="modal">
          <div className="modal-header">
            <h5 className="heading">Filters</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpenModal(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className="modal-content">
            <TrackFilters
              difficultyFilterDetails={difficultyFilterDetails}
              lengthFilterDetails={lengthFilterDetails}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackFilterModal
