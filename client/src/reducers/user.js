import {
  GET_USER,
  GET_ACCOUNTS,
  GET_TRACKERS,
  GET_GOALS
} from '../actions'

const initialState = {
  user_id: 0,
  accounts: [],
  trackers: [],
  goals: []
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        user_id: action.id
      })
    case GET_ACCOUNTS:
      return Object.assign({}, state, {
        accounts: action.accounts
      })
    case GET_TRACKERS:
      return Object.assign({}, state, {
        trackers: action.trackers
      })
    case GET_GOALS:
      return Object.assign({}, state, {
        goals: action.goals
      })
    default:
      return state
  }
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

export default user
