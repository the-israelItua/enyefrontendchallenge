import React from "react"
import BackIcon from "@material-ui/icons/ArrowBack"
import {useSelector} from "react-redux"

const Profile = ({handleStage}) => {
    
    const selected = useSelector(state => state.profiles.selected)
    return(
        <div className="profile">
           <div className="profile__header">
                    <h3 className="profile__header__text">Profile</h3>
            </div>
            <button className="profile__back" onClick={handleStage}>
                <BackIcon/>
            </button>
            {selected?.length === 0 || !selected ? 
            <div className="profile__empty"><h5>Profile Not Found.</h5></div>
            :
            <div className="profile__card">
                <h5><span>Name:</span> {selected?.FirstName} {selected?.LastName}</h5>
                <h5><span>UserName:</span> {selected?.UserName}</h5>
                <h5><span>Email</span> {selected?.Email}</h5>
                <h5><span>Phone Number:</span> {selected?.PhoneNumber}</h5>
                <h5><span>Gender:</span> {selected?.Gender}</h5>
                <h5><span>Credit Card Number:</span> {selected?.CreditCardNumber}</h5>
                <h5><span>Credit Card Type:</span> {selected?.CreditCardType}</h5>
                <h5><span>Payment Method:</span> {selected?.PaymentMethod}</h5>
                <h5><span>MacAddress:</span> {selected?.MacAddress}</h5>
                <h5><span>URL:</span> {selected?.URL}</h5>
                <h5><span>Domian Name:</span> {selected?.DomainName}</h5>
                <h5><span>Last Log-in:</span> {selected?.LastLogin}</h5>
            </div>
            }
        </div>
    )
}

export default Profile