import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {AlignCenterOutlined, LogoutOutlined} from '@ant-design/icons';
import logoWhite from '../../../assets/img/png/logo.png';
import {logOut} from '../../../api/auth';

import './MenuTop.scss';

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;

    const logOutUser = ()=>{
        logOut();
        window.location.reload();
    }


    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/"}>
                    <img src={logoWhite} alt="logo web" className="menu-top__left-logo"/>
                </Link>
                    
                
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <AlignCenterOutlined/>                    
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={logOutUser}>
                    <LogoutOutlined />

                </Button>

            </div>

        </div>
    )
}