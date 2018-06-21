import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    //console.log ("Action received: " , action);

    switch(action.type) {
        case FETCH_WEATHER:
           //return state.concat ([action.payload.data]); // always return new instance of state, concat adds and creates new state
            return [action.payload.data, ...state];

    }

    return state;
}