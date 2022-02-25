import { REQUEST_BIBLE, SUCCESS_BIBLE, ERROR_BIBLE, DELETE_BIBLE  } from "./bibleTypes";

const initialstate = {
    loading: false,
    data: [],
    error: '',
};

const bibleReducer = (state = initialstate, action) => {
    switch(action.type) {
        case REQUEST_BIBLE:
            return{
                ...state,
                loading: true,
            }
        
        case SUCCESS_BIBLE:
            
            return{
                ...state,
                loading: false,
                data:{...action.payload,...action.payload},
                // data:[...action.payload, ...action.payload],
                error: '',
            }
            

        case ERROR_BIBLE:
            return{
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            }
        
        case DELETE_BIBLE:
            let del = action.payload;
            let upData = state.data.data.filter((datum)=>datum.id!=del)
            console.log(upData)
            return{
                ...state,
                loading: false,
                data: {data: upData},
                error: '',
            }

        default: return state
    }
}


export default bibleReducer;