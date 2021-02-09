import React from 'react';
import MainBanner from '../components/Web/MainBanner';
import HomeProducts from '../components/Web/HomeProducts';
import CompanyInfo from '../components/Web/CompanyInfo';


export default function Home(){
    return(
        <>
            <MainBanner/>
            <HomeProducts />
            <CompanyInfo />
        </>
        
       
    )
}