import React from 'react';
import './MyInfo.scss';
import logo from '../../../../assets/img/png/logo.png';
import SocialLinks from '../../SocialLinks'


export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={logo} alt="Logo" />
            <h4>
            TRABAJAMOS CON NUEVOS PROCESOS Y MATERIAS PRIMAS PARA REDUCIR EL IMPACTO DE NUESTROS PRODUCTOS
            </h4>
            <SocialLinks/>
        </div>
    )
}
