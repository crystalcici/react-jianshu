import axios from 'axios'
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export  const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            const action = changeList(data.data)
            dispatch(action)
        }).catch(() => {
            console.log('error')
        })
    }
}