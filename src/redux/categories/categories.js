// define an action type for checking the status
// set the initial state to be an empty array of categories
// export action creators for your actions
// write your reducer and export it as default
//      for the check status action return a string "under construction"
//      in case of unknown action - return the current state

const categories = [];

export default function reducer(state = categories, action) {
  if (action.type === 'CHECK_STATUS') {
    return 'Under Construction';
  }
  return state;
}

export const checkStatus = () => ({ type: 'CHECK_STATUS' });
