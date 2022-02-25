import { REQUEST_BIBLE, SUCCESS_BIBLE, ERROR_BIBLE, DELETE_BIBLE  } from "./bibleTypes";
import axios from 'axios';

var options = {
    method: 'GET',
    url: 'https://api.scripture.api.bible/v1/bibles/9879dbb7cfe39e4d-02/books',
    headers: { 'api-key': 'f2179c8ed544cc833dd20e7bb4ae2a95' },
};

export const fetchBible = () => {
    return (dispatch) => {
      dispatch(requestBible())
      axios.request(options)
        .then(response => {
          const bibleList = response.data;
          dispatch(successBible(bibleList))
        })
        .catch(error => {
          dispatch(errorBible(error.message))
        })
    }
  }





export const requestBible = () => {
    return {
        type: REQUEST_BIBLE
    }
}

export const successBible = (data) => {
    return {
        type: SUCCESS_BIBLE,
        payload: data
    }
}

export const errorBible = (error) => {
    return {
        type: ERROR_BIBLE,
        payload: error
    }
}

export const deleteBible = (id) => {
    return {
        type: DELETE_BIBLE,
        payload: id
    }
}