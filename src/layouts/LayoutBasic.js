import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout, Row, Col} from 'antd';

import MenuTop from '../components/Web/MenuTop/MenuTop';

import './LayoutBasic.scss'


export default function LayoutBasic(props){
    const {routes} = props;
    const {Footer } = Layout;

    return(
        <>
            <Row>
                <Col md={2}/>
                <Col md={20}>
                <MenuTop/>
                
                </Col>
                <Col md={2}/>
            </Row>
            <LoadRoutes routes={routes}/>
            <Footer>
                VK Websites
            </Footer>
        </>
        
    )
}

function LoadRoutes({routes}) {
    return(
        <Switch>
            {routes.map((route,index)=>(
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
                />
            ))}
        </Switch>
    )
}
