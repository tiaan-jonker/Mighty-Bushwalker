import { fetchMapAndTrackDataSuccess } from './actions/tracks'
import { setUser } from './actions/user'
import { getUserRoles } from './apis/users'
import { getUser, getUserTracks } from './components/user/userHelper'
import store from './store'
import { getUser } from './components/user/userHelper'

const emptyUser = {
  id: '',
  auth0Id: '',
  email: '',
  name: '',
  token: '',
  roles: [],
  rank: 0,
  id: 0,
  xp: 0,
}

const emptyTrack = [
  {
    id: 0,
    asset_id: '',
    name: '',
    days: 0,
    hours: 0,
    length: 0,
    return: false,
    difficulty: '',
    lon: 0,
    lat: 0,
    line: [[0, 0]],
  },
]

function saveUser(user = emptyUser) {
  store.dispatch(setUser(user))
}

function saveTracks(tracks = emptyTrack) {
  store.dispatch(fetchMapAndTrackDataSuccess(tracks))
}

export async function cacheUser(useAuth0) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const token = await getAccessTokenSilently()
      const roles = await getUserRoles(user.sub)
      const userData = await getUser(user.sub)
      const userToSave = {
        id: id,
        auth0Id: user.sub,
        email: user.email,
        name: userData.name,
        token,
        roles,
        rank: userData.rank,
        id: userData.id,
        xp: userData.xp,
      }
      const tracks = await getUserTracks(userData.id)
      saveTracks(tracks)
      saveUser(userToSave)
    } catch (err) {
      console.error(err)
    }
  } else {
    saveUser()
  }
}

export function getLoginFn(useAuth0) {
  return useAuth0().loginWithRedirect
}

export function getLogoutFn(useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated(useAuth0) {
  return useAuth0().isAuthenticated
}

export function getRegisterFn(useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/profile`
  return () =>
    loginWithRedirect({
      redirectUri,
      screen_hint: 'signin',
      scope: 'role:member',
    })
}
