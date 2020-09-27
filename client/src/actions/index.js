let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const GET_USER = 'GET_USER'
export const GET_ACCOUNTS = 'GET_ACCOUNTS'
export const GET_TRACKERS = 'GET_TRACKERS'
export const GET_GOALS = 'GET_GOALS'


export function getUser(id) {
  return { type: GET_USER, id }
}

export function getAccounts(accounts) {
  return { type: GET_ACCOUNTS, accounts }
}

export function getTrackers(trackers) {
  return { type: GET_TRACKERS, trackers }
}

export function getGoals(goals) {
  return { type: GET_GOALS, goals }
}
