import React, {useState} from 'react';
import {Switch,List, Avatar, Button} from 'antd';
//import NoAvatar from '../../../../Assets/img/png/no-avatar.png';

import './ListsUsers.scss';

export default function ListUsers(props){
    const {usersActive, usersInactive} = props;
    const [viewUsersActives, setViewUsersActive] =useState(true);


    return(
        <div className="list-users">
            <div className="list-users__switch">
                <Switch
                    defaultChecked
                    onChange={()=> setViewUsersActive(!viewUsersActives)}
                />
                <span>
                    {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>


            </div>
            {viewUsersActives? <UsersActive/> : <UsersInactive/>}
            
        </div>
    )
}


function UsersActive(){
    return(
        <h3>Lista de Usuarios Activos</h3>
    )
}
function UsersInactive(){
    return(
        <h3>Lista de Usuarios Inactivos</h3>
    )
}