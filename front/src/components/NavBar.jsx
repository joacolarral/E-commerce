import React from 'react';
import SearchBar from './SearchBar';
import Greeting from './Greeting'

export default (props) =>{
    return (
        <nav className='navbar navbar-expand-sm bg-light'>
            <SearchBar />
            {props.LoggedName
            ?<div>
                <button className='btn btn-danger'>Logout</button>
                <Greeting name={props.LoggedName} />
             </div>
            :<button className='btn btn-info'>Login</button> 
            }
        </nav>
    )
}