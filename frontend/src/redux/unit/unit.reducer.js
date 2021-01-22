import { FETCH_UNITS } from './unit.types';

const unitReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_UNITS:
      return action.payload;
    /*case CREATE_UNIT:
      return {
        state,
      }*/
    default:
      return state;
  }
};

export default unitReducer;
