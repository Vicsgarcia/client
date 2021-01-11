import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {BankOutlined, BarsOutlined} from '@ant-design/icons';

import './MenuSider.scss'

export default function MenuSider(props){
    const {menuCollapsed} = props
    const {Sider} = Layout;
    return(
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to={"/admin"}>
                        <BankOutlined />
                        <span className="nav-text">home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/admin/menu-web"}>
                        <BarsOutlined />
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>
            </Menu>

        </Sider>
    )
}