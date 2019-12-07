export function standardsHasErrored(bool) {
  return {
      type: 'STANDARDS_HAS_ERRORED',
      hasErrored: bool
  };
}
export function standardsIsLoading(bool) {
  return {
      type: 'STANDARDS_IS_LOADING',
      isLoading: bool
  };
}
export function standardsFetchDataSuccess(standards) {
  return {
      type: 'STANDARDS_FETCH_DATA_SUCCESS',
      standards
  };
}
export function standardsFetchData(url) {
  return (dispatch) => {
      dispatch(standardsIsLoading(true));

      fetch(url, {
        method: 'get',
        headers: {
          'Content-Type':'application/json',
          'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMX0.sQctDMF9Cc5BmIbBhSAcOZ3Oxf2POFY-HcKxYlnbspM'
        }
       })
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(standardsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((standards) => dispatch(standardsFetchDataSuccess(standards)))
          .catch(() => dispatch(standardsHasErrored(true)));
  };
}