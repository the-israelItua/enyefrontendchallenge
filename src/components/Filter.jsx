import React, {useState} from "react"
import {useDispatch, useSelector} from 'react-redux'
import {filterByGender, filterByPayment, changeMode, renderFilter} from "../state/actions"

const Filter = () => {
    const dispatch = useDispatch()

    const filterMode = useSelector(state => state.profiles.filterMode)
    const [view, setView] = useState(false)

    const handleSelect = (val, name) => {
        dispatch(changeMode(val))
        if(view){
            dispatch(filterByPayment(name))
            dispatch(renderFilter(1))
        }else{
            dispatch(filterByGender(name))
            dispatch(renderFilter(1))
        }
    }

    return(
        <div className="filter">
            <h4 className="filter__text">Filter</h4>
            <div className="filter__content">
            <div className="filter__box">
                <div className="filter__box__header" style={!view ? {borderRadius: "8px 8px 0 0",background: "white", color: " #a3a2a2",padding:"1rem"} : {borderRadius: "8px 8px 0 0",background: "#f0f0f0",padding:"1rem", color: " #a3a2a2"}}>
                    <input type="checkbox" checked={!view} onClick={() => setView(!view)}/>
                    <h5> By Gender</h5>
                </div>
                {!view  &&
                <>
                <div className="filter__box__body">
                    <input type="radio" name="gender" onChange={() => handleSelect(true, "Male")}/>
                    <p>Male</p>
                </div>
                <div className="filter__box__body">
                    <input type="radio" name="gender" onChange={() => handleSelect(true, "Female")}/>
                    <p>Female</p>
                </div>
                <div className="filter__box__body">
                    <input type="radio" name="gender" onChange={() => handleSelect(true, "Prefer to skip")}/>
                    <p>Not Specified</p>
                </div>
                </>}
            </div>
            <div className="filter__box">
                <div className="filter__box__header" style={view ? {background: "white", color: " #a3a2a2", padding:"1rem"} : {borderRadius: "0 0 8px 8px", background: "#f0f0f0", color: " #a3a2a2", padding:"1rem"}}>
                    <input type="checkbox" checked={view} onClick={() => setView(!view)}/>
                    <h5> By Payment Method</h5>
                </div>
                {view &&
                <>
                <div className="filter__box__body">
                    <input type="radio" name="payment" onChange={() => handleSelect(true, "paypal")}/>
                    <p>Paypal</p>
                </div>
                <div className="filter__box__body">
                    <input type="radio" name="payment" onChange={() => handleSelect(true, "cc")}/>
                    <p>Credit Card</p>
                </div>
                <div className="filter__box__body">
                    <input type="radio" name="payment" onChange={() => handleSelect(true, "check")}/>
                    <p>Check</p>
                </div>
                <div className="filter__box__body">
                    <input type="radio" name="payment" onChange={() => handleSelect(true, "money order")}/>
                    <p>Money Order</p>
                </div>
                 </>}
            </div>
            </div>
            {filterMode && <button className="filter__button" onClick={() => handleSelect(false)}>
                Clear Filter</button>}
        </div>
    )
}

export default Filter