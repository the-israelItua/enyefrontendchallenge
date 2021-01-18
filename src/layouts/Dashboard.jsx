import React, {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {fetchData, renderPage} from '../state/actions'
import Sidebar from "../components/Sidebar"
import Transactions from "../components/Transactions"
import Profile from "../components/Profile"
import Filter from "../components/Filter"
import MobileBottomNav from "../components/MobileBottomNav"
import MobileTopNav from "../components/MobileTopNav"

const Dashboard = () => {
    const dispatch = useDispatch()
    const [stage, setStage] = useState(1)
    const fetchedData = useSelector(state => state.profiles.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    useEffect(() => {
        if(fetchedData.length > 0){
            dispatch(renderPage(1))
        }
        return
    }, [dispatch, fetchedData])

    return(
        <section className="dashboard">
            <Sidebar/>
            <MobileTopNav/>
            <MobileBottomNav/>
            {stage === 1 
            ? <Transactions  handleStage = {() => setStage(2)}/> 
            : <Profile handleStage = {() => setStage(1)}/>
            }
            <Filter/>
        </section>
    )
}

export default Dashboard