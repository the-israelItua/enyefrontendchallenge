import React from "react"
import {useDispatch} from "react-redux"
import {selectProfile} from "../state/actions"

const TransactionsCard = ({data, handleStage}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        handleStage()
        dispatch(selectProfile(data))
    }

    return(
        <ul className="transactions-card">
            <li className="transactions-card__item">{data.FirstName} {data.LastName}</li>
            <li className="transactions-card__item transactions-card__item__email">{data.Email}</li>
            <li className="transactions-card__item transactions-card__item__phone">{data.PhoneNumber}</li>
            <li className="transactions-card__item transactions-card__item__gender">{data.Gender[0] === "P" ? '--' : data.Gender[0]}</li>
            <li className="transactions-card__item">{data.PaymentMethod}</li>
            <li className="transactions-card__item">{data.CreditCardNumber}</li>
            <li className="transactions-card__item" style={{color: "blue", cursor: "pointer"}} onClick={handleClick}>
                View Details
            </li>
        </ul>
    )
}

export default TransactionsCard