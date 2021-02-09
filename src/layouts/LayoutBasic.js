import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Row, Col} from 'antd';

import MenuTop from '../components/Web/MenuTop/MenuTop';
import Footer from '../components/Web/Footer';

import './LayoutBasic.scss'


export default function LayoutBasic(props){
    const {routes} = props;

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
            <Footer/>
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
