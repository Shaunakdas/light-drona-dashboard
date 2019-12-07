export function standardsHasErrored(state = false, action) {
  switch (action.type) {
      case 'STANDARDS_HAS_ERRORED':
          return action.hasErrored;
      default:
          return state;
  }
}
export function standardsIsLoading(state = false, action) {
  switch (action.type) {
      case 'STANDARDS_IS_LOADING':
          return action.isLoading;
      default:
          return state;
  }
}
export function standards(state = {}, action) {
  switch (action.type) {
      case 'STANDARDS_FETCH_DATA_SUCCESS':
          return action.standards;
      default:
          return state;
  }
}