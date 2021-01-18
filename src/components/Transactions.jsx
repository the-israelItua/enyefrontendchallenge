import React from "react"
import Spinner from '@material-ui/core/CircularProgress';
import {useSelector} from "react-redux"
import TransactionsCard from "./TransactionsCard"
import Search from './Search'

const Transactions = ({handleStage}) => {
    const filterMode = useSelector(state => state.profiles.filterMode) 
    const normal = useSelector(state => state.profiles.view)
    const filter = useSelector(state => state.profiles.filterView)

    const data = filterMode ? filter : normal

    return (
        <div className="transactions">
            <div className="transactions__header">
                <div className="transactions__header__top">
                    <h3 className="transactions__header__top__text">Transactions</h3>
                    <Search handleStage={handleStage}/>
                </div>
                 <ul className="transactions__header__tab">
                    <li className="transactions__header__tab__item">Name</li>
                    <li className="transactions__header__tab__item transactions__header__tab__item__email">Email</li>
                    <li className="transactions__header__tab__item transactions__header__tab__item__phone">Phone No.</li>
                    <li className="transactions__header__tab__item transactions__header__tab__item__gender">Gender</li>
                    <li className="transactions__header__tab__item">Method</li>
                    <li className="transactions__header__tab__item">Card No.</li>
                </ul>
            </div>
            {
                data?.length === 0 ? <div className="transactions__empty"><Spinner/></div> :
            <div className="transactions__content">
            {  
                data?.map((item, index) => <TransactionsCard key={index} data={item} handleStage={handleStage}/>)
            }
            </div>
            }
        </div>
    )
}

export default Transactions