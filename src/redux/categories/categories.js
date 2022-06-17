const categories = [];

export default function categoryReducer(state = categories, action) {
  if (action.type === 'CHECK_STATUS') {
    return 'Under Construction';
  }
  return state;
}

export const checkStatus = () => ({ type: 'CHECK_STATUS' });
