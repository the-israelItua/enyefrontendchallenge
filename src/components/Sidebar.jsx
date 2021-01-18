import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import DashboardIcon from "@material-ui/icons/Dashboard"
import WalletsIcon from "@material-ui/icons/AccountBalance"
import TransactionsIcon from "@material-ui/icons/Cached"
import SettingsIcon from "@material-ui/icons/Settings"
import NextIcon from "@material-ui/icons/NavigateNextRounded"
import PrevIcon from "@material-ui/icons/NavigateBeforeRounded"
import {renderPage, renderFilter} from "../state/actions"
import Logo from "../assets/images/logo.jpeg"

const Sidebar = () => {
    const dispatch = useDispatch()
    const dataLength = useSelector(state => state.profiles.data?.length)
    const filterLength = useSelector(state => state.profiles.filter?.length)
    const filterMode = useSelector(state => state.profiles.filterMode)
    const start = useSelector(state => state.profiles.startIndex)
    const end = useSelector(state => state.profiles.endIndex)
    const filterStart = useSelector(state => state.profiles.filterStart)
    const filterEnd = useSelector(state => state.profiles.filterEnd)
    const [page, setPage] = useState(1)
    const [filterPage, setFilterPage] = useState(1)

    const handleNext = () => {
        if(page > (dataLength/20)){
            return;
        }
        setPage(page + 1)
        dispatch(renderPage(page + 1))
    }

    const handlePrev = () => {
         if(page === 1){
             return;
         }
         dispatch(renderPage(page - 1))
         setPage(page - 1)
    }

    const handleNextFilter = () => {
        if(page > (filterLength/20)){
            return;
        }
        setFilterPage(filterPage + 1)
        dispatch(renderFilter(filterPage + 1))
    }

    const handlePrevFilter = () => {
         if(page === 1){
             return;
         }
         dispatch(renderFilter(page - 1))
         setFilterPage(page - 1)
    }

    return(
        <aside className="sidebar">
            <div className="sidebar__header">
                <img src={Logo} alt=""/>
                <h3 className="sidebar__header__text"> TRACKA</h3>
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__list__item"><DashboardIcon/><span>Dashboard</span></li>
                <li className="sidebar__list__item"><WalletsIcon/><span>Wallet</span></li>
                <li className="sidebar__list__item sidebar__list__item__active"><TransactionsIcon/><span>Transactions</span></li>
                <li className="sidebar__list__item"><SettingsIcon/><span>Settings</span></li>
            </ul>
            <div className="sidebar__bottom"> 
                <div className="sidebar__bottom__nav">
                    {!filterMode ? 
                    <>
                        <button disabled={page === 1} onClick={handlePrev}><PrevIcon/></button>
                        <button disabled={page === (dataLength/20)} onClick={handleNext}><NextIcon/></button> 
                    </> :
                     <>
                        <button disabled={filterPage === 1} onClick={handlePrevFilter}><PrevIcon/></button>
                        <button disabled={filterPage === (filterLength/20)} onClick={handleNextFilter}><NextIcon/></button> 
                    </>
                    }
                </div>
                {!filterMode ?
                    <h5>Showing <span>{start + 1} to {end > dataLength ? dataLength : end}</span> of <span>{dataLength}</span></h5> :
                    <h5>Showing <span>{filterStart + 1} to {filterEnd > filterLength ? filterLength : filterEnd}</span> of <span>{filterLength}</span></h5>
                }
            </div>
        </aside>
    )
}

export default Sidebar