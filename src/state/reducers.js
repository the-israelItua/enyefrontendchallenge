import * as types from "./types"

const initialState = {
    data: [],
    view: [],
    selected: {},
    filter: [],
    filterView: [],
    filterMode: false,
    startIndex: "-",
    endIndex: "-",
    filterStart: "-",
    filterEnd: "-"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case types.FETCH_DATA:
            return {...state, data: action.payload}
        case types.RENDER_PAGE:
            const page = action.payload;
            const startIndex = (20 * (page - 1));
            const endIndex = 20 * page
            const render = state.data.slice(startIndex, endIndex)
            return {...state, view: render, startIndex: startIndex, endIndex: endIndex}
        case types.FILTER_BY_GENDER:
            const newData = state.data.filter(item => item.Gender === action.payload)
            return {...state, filter: newData}
        case types.FILTER_BY_PAYMENT:
            const newFilter= state.data.filter(item => item.PaymentMethod === action.payload)
            return {...state, filter: newFilter}
        case types.RENDER_FILTER:
            const filterPage = action.payload;
            const start = (20 * (filterPage - 1));
            const end = 20 * filterPage
            const filterRender = state.filter.slice(start, end)
            return {...state, filterView: filterRender, filterStart: start, filterEnd: end}
        case types.SELECT_PROFILE:
            return {...state, selected: action.payload}
        case types.SEARCH_PROFILE_BY_EMAIL:
            const emailFilter = state.data.filter(item => item.Email === action.payload)
            return {...state, selected: emailFilter[0]}
        case types.SEARCH_PROFILE_BY_PHONE:
            const phoneFilter = state.data.filter(item => item.PhoneNumber === action.payload)
            return {...state, selected: phoneFilter[0]}
        case types.SEARCH_PROFILE_BY_USERNAME:
            const userFilter = state.data.filter(item => item.UserName === action.payload)
            return {...state, selected: userFilter[0]}
        case types.SEARCH_PROFILE_BY_DOMAIN:
            const domainFilter = state.data.filter(item => item.Domain === action.payload)
            return {...state, selected: domainFilter[0]}
        case types.SEARCH_PROFILE_BY_URL:
            const urlFilter = state.data.filter(item => item.URL === action.payload)
            return {...state, selected: urlFilter[0]}
        case types.SEARCH_PROFILE_BY_MAC:
            const macFilter = state.data.filter(item => item.MacAddress === action.payload)
            return {...state, selected: macFilter[0]}
        case types.SEARCH_PROFILE_BY_CARD:
            const cardFilter = state.data.filter(item => item.CreditCardNumber === action.payload)
            return {...state, selected: cardFilter[0]}
        case types.CHANGE_MODE:
            return {...state, filterMode: action.payload}
        default:
            return state
    }
}