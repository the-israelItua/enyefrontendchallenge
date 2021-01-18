import React from "react" 
import DashboardIcon from "@material-ui/icons/Dashboard"
import WalletsIcon from "@material-ui/icons/AccountBalance"
import TransactionsIcon from "@material-ui/icons/Cached"
import SettingsIcon from "@material-ui/icons/Settings"

const MobileBottomNav = () => {
    return(
        <div className="mobile-bottom-nav">
            <ul className="mobile-bottom-nav__list">
                <li className="mobile-bottom-nav__list__item"><DashboardIcon/><span>Dashboard</span></li>
                <li className="mobile-bottom-nav__list__item"><WalletsIcon/><span>Wallet</span></li>
                <li className="mobile-bottom-nav__list__item mobile-bottom-nav__list__item__active"><TransactionsIcon/><span>Transactions</span></li>
                <li className="mobile-bottom-nav__list__item"><SettingsIcon/><span>Settings</span></li>
            </ul>
        </div>
    )
}

export default MobileBottomNav