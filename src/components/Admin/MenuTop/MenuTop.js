import React from 'react';
import {Button} from 'antd';
import {AlignCenterOutlined, LogoutOutlined} from '@ant-design/icons';
import Viclogo from '../../../assets/img/png/logo.png';

import './MenuTop.scss';

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;


    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={Viclogo}
                    alt='Logo vic'
                    
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <AlignCenterOutlined/>                    
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => alert("Desconexion")}>
                    <LogoutOutlined />

                </Button>

            </div>

        </div>
    )
}