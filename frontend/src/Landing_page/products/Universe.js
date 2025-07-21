import React from 'react'

function Universe() {
    return ( 
        <div className='container p-5'>
            <div className='row  text-center mt-5 p-5 text-muted'>
                <h1>The Zerodha Universe</h1>
                <br/>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                
            </div>
            <div className='row p-5'>
                <div className='col-4 text-center'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"50%"}}/>
                    <p className='mt-2 text-muted fs-7'>Our asset management venture that is creating simple and transparent indexfunds to help you save for your goals.</p>
                </div>
                
                <div className='col-4 text-center'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"70%"}}/>
                    <p className='mt-3 text-muted fs-7'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                
                <div className='col-4 text-center'>
                    <img src='media/images/tijori.png' style={{width:"50%"}}/>
                    <p className='mt-2 text-muted fs-7'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-4 text-center'>
                    <img src='media/images/streaklogo.png' style={{width:"50%"}}/>
                    <p className='mt-3 text-muted fs-7'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
               
                <div className='col-4 text-center' >
                    <img src='media/images/smallcaseLogo.png' style={{width:"50%"}}/>
                    <p className='mt-4 text-muted fs-7'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                
                <div className='col-4 text-center'>
                    <img src='media/images/dittoLogo.png' style={{width:"40%"}}/>
                    <p className='mt-3 text-muted fs-7'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <div className='row mt-5'>
                    <button className="p-2 btn btn-primary fs-5  mt-5" style={{ width: "20%", margin: "0 auto" }}>
                    Sign up for Free
                </button>
                </div>      
            </div>   
        </div>
     );
}

export default Universe;




















