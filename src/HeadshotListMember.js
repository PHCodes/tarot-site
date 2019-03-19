import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Headshot from './Headshot';

const HeadshotListMember = ({ match, item }) => (
        <Link to={`/${item.linkName}`}>
            <Headshot item={item}/>
        </Link>
)
export default HeadshotListMember;