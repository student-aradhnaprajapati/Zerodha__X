import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
       <>
        <Hero/>
        <LeftSection
        imageURL="media/images/kite.png"
        ProductName="Kite"
        ProductDiscri="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        TryDemo='' 
        LearnMore='' 
        Appstrore='' 
        GoogleStore=''
        />
        <RightSection
        imageURL="media/images/console.png"
        ProductName="Console"
        ProductDiscri="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
    />
        <LeftSection
        imageURL="media/images/coin.png"
        ProductName="Coin"
        ProductDiscri="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."   
        TryDemo='' 
        LearnMore='' 
        Appstrore='' 
        GoogleStore=''
        />
        <RightSection
        imageURL="media/images/kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDiscri="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        />
        <LeftSection
        imageURL="media/images/varsity.png"
        ProductName="Varsity mobile"
        ProductDiscri="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
        TryDemo='' 
        LearnMore='' 
        Appstrore='' 
        GoogleStore=''
        />
        <p className='fs-5 mt-5 p-5 text-center'>Want to know more about our technology stack? Check out the <a href='https://zerodha.tech/'> Zerodha.tech</a>Zerodha.tech blog.</p>
        <Universe/>
       </>

     );
}

export default ProductPage;