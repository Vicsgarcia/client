import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationFooter.scss'
import {Row, Col}from 'antd';

export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <Col lg={24}>
                <h3>Navegación</h3>
            </Col>
            <Col md={12}>
                <RenderListLeft/>
            </Col>
            <Col md={12}>     
                <RenderListRight/>
            </Col>
        </Row>
    )
}


function RenderListLeft(){
    return(
        <ul>
            <li>
                <Link  to={"/"}>
                    Home
                </Link>
            </li>
            <li>
                <Link  to={"/Products"}>
                    Productos
                </Link>
            </li>
            <li> 
                <Link  to={"/contact"}>
                    Contacto
                </Link>
            </li>

        </ul>
    )
}

function RenderListRight(){
    return(
        <ul>
            <li>
                <Link  to={"/"}>
                    Política de Privacidad
                </Link>
            </li>
            <li>
                <Link  to={"/Products"}>
                    Condiciones Generales de Privacidad
                </Link>
            </li>
            <li> 
                <Link  to={"/contact"}>
                    Política de cookies
                </Link>
            </li>

        </ul>
    )
}
