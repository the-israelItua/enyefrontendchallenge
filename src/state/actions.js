import Axios from "axios"
import * as types from "./types"

export const fetchData = () => async dispatch => {
        try{
            const response = await Axios.get('https://api.enye.tech/v1/challenge/records')
            dispatch({
                type: types.FETCH_DATA,
                payload: response.data.records.profiles,
            })
        }catch(error){
            console.log(error)
    }
}

export const renderPage = (page) => dispatch => {
    dispatch({
        type: types.RENDER_PAGE,
        payload: page,
    })
}

export const filterByGender = (gender) => dispatch => {
    dispatch({
        type: types.FILTER_BY_GENDER,
        payload: gender
    })
}

export const filterByPayment = (method) => dispatch => {
    dispatch({
        type: types.FILTER_BY_PAYMENT,
        payload: method,
    })
}

export const renderFilter = (page) => dispatch => {
    dispatch({
        type: types.RENDER_FILTER,
        payload: page,
    })
}

export const selectProfile = (profile) => dispatch => {
    dispatch({
        type: types.SELECT_PROFILE,
        payload: profile,
    })
}

export const searchProfileByEmail = (email) => dispatch => {
    dispatch({
        type: types.SEARCH_PROFILE_BY_EMAIL,
        payload: email,
    })
}

export const searchProfileByPhone = (phone) => dispatch => {
    dispatch({
        type: types.SEARCH_PROFILE_BY_PHONE,
        payload: phone,
    })
}

export const searchProfileByUser = (username) => dispatch => {
    dispatch({
        type: types.SEARCH_PROFILE_BY_USERNAME,
        payload: username,
    })
}

export const searchProfileByCard = (cardNo) => dispatch => {
    dispatch({
        type: types.SEARCH_PROFILE_BY_CARD,
        payload: cardNo,
    })
}

export const searchProfileByDomain = (domain) => dispatch => {
    dispatch({
        type: types.SEARCH_PROFILE_BY_DOMAIN,
        payload: domain,
    })
}

export const searchProfileByUrl = (url) => dispatch => {
    dispatch({
        type: types.SEARCH_PROFILE_BY_URL,
        payload: url,
    })
}

export const searchProfileByMac = (mac) => dispatch => {
    dispatch({
        type: types.SEARCH_PROFILE_BY_MAC,
        payload: mac,
    })
}

export const changeMode = (val) => dispatch => {
    dispatch({
        type: types.CHANGE_MODE,
        payload: val,
    })
}