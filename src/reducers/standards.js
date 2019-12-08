const initialState = { standards: [] };
export function standards(state = initialState, action) {
  switch (action.type) {
    case 'STANDARDS_IS_LOADING': 
        return { ...state, isLoading: true };
    case 'STANDARDS_FETCH_DATA_SUCCESS': 
        return { ...state, isLoading: false, standards: action.standards.standards };
    case 'STANDARDS_HAS_ERRORED': 
        return { ...state, isLoading: false, errorMessage: 'action.payload.message' };
    default:
        return state;
  }
}