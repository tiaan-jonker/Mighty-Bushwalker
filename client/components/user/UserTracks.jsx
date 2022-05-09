import React from 'react'
import { Link } from 'react-router-dom'
import { truncatedName, randomNumGenForImage } from '../../utils'
import TrackImg from './TrackImg'
<<<<<<< HEAD
import { calculateDistanceBetweenPoints } from '../tracks/tracksHelper'
||||||| merged common ancestors
=======
import { useSelector } from 'react-redux'
>>>>>>> e194684e5b99bec86c753ef3894ad5d9fb972476

function UserTracks() {
<<<<<<< HEAD
  const [userTracks, setUserTracks] = useState([{ track_id: 0 }])

  const { id } = useParams()

  function getDistance(tracks) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const coords = position.coords
      const updatedTracks = tracks.map((track) => {
        const distanceAway = calculateDistanceBetweenPoints(
          coords.latitude,
          coords.longitude,
          track.lat,
          track.lon
        ).toFixed(1)
        return { ...track, distanceAway }
      })
      return setUserTracks(updatedTracks)
    })
  }

  useEffect(() => {
    getUserTracks(id)
      .then((tracks) => {
        return getDistance(tracks)
      })
      .catch((err) => console.log(err.message))
  }, [id])
||||||| merged common ancestors
  const [userTracks, setUserTracks] = useState([{ track_id: 0 }])

  const { id } = useParams()

  useEffect(() => {
    getUserTracks(id)
      .then((tracks) => {
        return setUserTracks(tracks)
      })
      .catch((err) => console.log(err.message))
  }, [id])
=======
  const userTracks = useSelector((state) => state.tracks)
>>>>>>> e194684e5b99bec86c753ef3894ad5d9fb972476

  return (
    <section>
      <div className="page-container mg-bottom-50 container-bg-green">
        <div>
          <h2 className="user-intro">My tracks</h2>
          <h3 className="user-intro-sub">Saved and completed tracks</h3>
        </div>
        {userTracks.map((track) => {
          return (
            (track.completed == 1 || track.saved == 1) && (
              <div key={track.id} className="user-track-banner">
                <Link to={`/track/${track.id}`}>
                  {/* <Link to={`/track/1`}> */}
                  <div className="track-banner">
                    {track.completed ? (
                      <span className="status-indicator completed">
                        Completed
                      </span>
                    ) : (
                      <span className="status-indicator saved">Saved</span>
                    )}

                    <div className="track-banner-info">
                      <div className="track-name-difficulty-container">
                        <h2 className="track-list-name">
                          {truncatedName(track.name)}
                        </h2>
                        <span
                          className="track-difficulty"
                          // style={{ backgroundColor: getBackgroundColor() }}
                        >
                          Difficult
                        </span>
                      </div>
                      <div className="track-other-details">
                        <p>
                          Length: {track.length}km • Est. {track.hours}hrs •{' '}
                          {track.points}pts • {track.distanceAway}km away
                        </p>
                      </div>
                    </div>
                    <TrackImg randomNum={randomNumGenForImage} />
                  </div>
                </Link>
              </div>
            )
          )
        })}
      </div>
    </section>
  )
}

export default UserTracks
