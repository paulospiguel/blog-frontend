import store from '../../store';

const projects = (state = store.INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOOGLE_DRAWER':
      return { ...state, open: action.open };
    default:
      return { ...state };
  }
  return { ...state };
};

export default projects;
