import * as Types from '../action-types';
import {getSliders} from '../../api/list'

export const getSlider = () => (dispatch) =>{
    getSliders().then(sliders=>{
        dispatch({
            type:Types.GET_SLIDERS,
            sliders
        });
    });
};