import React, {useState} from "react"
import SearchIcon from "@material-ui/icons/Search"
import {useDispatch} from "react-redux"
import {searchProfileByEmail,
        searchProfileByPhone,
        searchProfileByUser,
        searchProfileByCard,
        searchProfileByMac,
        searchProfileByUrl,
        searchProfileByDomain
        } from "../state/actions"


const Search = ({handleStage}) => {
    const [criteria, setCriteria] = useState("Email")
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        if(value.length === 0){
            return;
        } 
        switch(criteria){
            case "Email":
                dispatch(searchProfileByEmail(value))
                handleStage()
                return         
            case "Phone Number":
                dispatch(searchProfileByPhone(value))
                handleStage()
                return         
            case "UserName":
                dispatch(searchProfileByUser(value))
                handleStage()
                return
            case "Card Number":
                dispatch(searchProfileByCard(value))
                handleStage()
                return
            case "Mac Address":
                dispatch(searchProfileByMac(value))
                handleStage()
                return
            case "URL":
                dispatch(searchProfileByUrl(value))
                handleStage()
                return         
            case "Domain Name":
                dispatch(searchProfileByDomain(value))
                handleStage()
                return
            default:
                return
        }  
    }

    return(
         <div className="transactions__header__top__search">
            <div className="transactions__header__top__search__input">
                <SearchIcon/>
                <form onSubmit={onSubmit}>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder={`Search Customer By ${criteria}`}/>
                </form>
            </div>
            <select onChange={e => setCriteria(e.target.value)}>
                <option value="Email">By Email</option>
                <option value="Phone Number">By Phone Number</option>
                <option value="UserName">By UserName</option>
                <option value="Card Number">By Card Number</option>
                <option value="Mac Address">By Mac Address</option>
                <option value="URL">By URL</option>
                <option value="Domain Name">By Domain Name</option>
           </select>    
        </div>
    )
}

export default Search