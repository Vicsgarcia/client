import React from 'react';
import {Layout, Tabs} from 'antd';
import {Redirect, Link} from 'react-router-dom';
import logoWhite from '../../../assets/img/png/logo.png';
import RegisterForm from '../../../components/Admin/RegisterForm';
import LoginForm from '../../../components/Admin/LoginForm';
import {getAccessTokenApi} from '../../../api/auth';



import './SignIn.scss';


export default function SignIn(){
    const {Content}= Layout;
    const {TabPane}= Tabs;

    if (getAccessTokenApi()){
        return <Redirect to="/admin"/>
    }

    return(
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <Link to={"/"}>
                    <img src={logoWhite} alt="logo web" className="sign-in__content-logo"/>
                </Link>
                <div className="sign-in__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            <LoginForm/>
                        </TabPane>
                        <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                            <RegisterForm/>
                        </TabPane>

                    </Tabs>

                </div>

            </Content>
        </Layout>
    )
}