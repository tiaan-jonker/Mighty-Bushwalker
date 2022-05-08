import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import TrackFilters from './TrackFilters'

function TrackFilterModal({
  setIsOpenModal,
  difficultyFilterDetails,
  lengthFilterDetails,
}) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpenModal(false)} />
      <div className="modal-centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">FIlter options</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpenModal(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <TrackFilters
            difficultyFilterDetails={difficultyFilterDetails}
            lengthFilterDetails={lengthFilterDetails}
          />
        </div>
      </div>
    </>
  )
}

export default TrackFilterModal
