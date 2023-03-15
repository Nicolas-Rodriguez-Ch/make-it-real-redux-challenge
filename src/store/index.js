import { legacy_createStore } from "redux";
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const ASSING = 'ASSING';



const initialState =  {
  count: 0
}

const reducer = (state= initialState, action) =>{
  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        count: state.count + 2
      }
      case DECREMENT:
      return{
        ...state,
        count: state.count - 2
      }
      case MULTIPLY:
      return{
        ...state,
        count: state.count * 2
      }
      case DIVIDE:
      return{
        ...state,
        count: state.count / 2
      }
      case ASSING:
      return{
        ...state,
        count: action.payload
      }

    default:
      return state
  }
}

export const store = legacy_createStore(reducer);