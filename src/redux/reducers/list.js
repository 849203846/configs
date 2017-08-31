import * as Types from '../action-types';
let initState = {
    sliders:[]
};
export default function (state=initState,action) {
    switch (action.type){
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders};
    }
    return state;
}
