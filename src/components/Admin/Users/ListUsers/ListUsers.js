import React, {useState} from 'react';
import {Switch,List, Avatar, Button} from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import {EditOutlined, DeleteOutlined, StopOutlined, CheckOutlined} from '@ant-design/icons';
import Modal from '../../../Modal';
import EditUserForm from '../EditUserForm';

import './ListsUsers.scss';

export default function ListUsers(props){
    const {usersActive, usersInactive} = props;
    const [viewUsersActives, setViewUsersActive] =useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle]= useState("");
    const [modalContent, setModalContent ] = useState(null);
 

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
            {viewUsersActives? 
            <UsersActive 
                usersActive={usersActive} 
                setIsVisibleModal={setIsVisibleModal} 
                setModalTitle={setModalTitle} 
                setModalContent={setModalContent}
            /> : 
            <UsersInactive 
                usersInactive={usersInactive}
            />}

            <Modal
            title={modalTitle}
            isVisible={isVisibleModal}
            setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    )
}


function UsersActive(props){
    const {
        usersActive, 
        setIsVisibleModal, 
        setModalTitle, 
        setModalContent
    } = props;

    const editUser= user =>{
        setIsVisibleModal(true);
        setModalTitle(
            `Editar ${user.name ? user.name : "sin nombre"} ${
                user.lastname ? user.lastname : "..."}`
                );
        setModalContent(<EditUserForm user={user} />)
    }


    return(
        <List 
            className="users-active"
            itemLayout="horizontal"
            dataSource={usersActive}
            renderItem={user=>(
                <List.Item
                actions={
                    [
                        <Button
                        type="primary"
                        onClick={()=> editUser(user)}
                        >
                            <EditOutlined />
                        </Button>,
                        <Button
                        type="danger"
                        onClick={()=> console.log("inactive user")}
                        >
                           <StopOutlined />
                        </Button>,
                        <Button
                        type="danger"
                        onClick={()=> console.log("delete user")}
                        >
                           <DeleteOutlined />
                        </Button>
                        
                    ]
                }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={ user.avatar ? user.avatar : NoAvatar }/>}
                    title={`
                        ${user.name ? user.name : "..."} 
                        ${user.lastname ? user.lastname : "..."}
                    `}
                    description ={user.email}
                    />
                </List.Item>
            )}
        />
    )
}
function UsersInactive(props){
    const {usersInactive} =props


    return(
        <List 
            className="users-inactive"
            itemLayout="horizontal"
            dataSource={usersInactive}
            renderItem={user=>(
                <List.Item
                actions={
                    [
                        <Button
                        type="primary"
                        onClick={()=> console.log("Activar user")}
                        >
                            <CheckOutlined />
                        </Button>,
                        <Button
                        type="danger"
                        onClick={()=> console.log("delete user")}
                        >
                           <DeleteOutlined />
                        </Button>
                        
                    ]
                }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={ user.avatar ? user.avatar : NoAvatar }/>}
                    title={`
                        ${user.name ? user.name : "..."} 
                        ${user.lastname ? user.lastname : "..."}
                    `}
                    description ={user.email}
                    />
                </List.Item>
            )}
        />
    )
}