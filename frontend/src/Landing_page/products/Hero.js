import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mt-5 mb-5 border-bottom'>
            <div className='row text-center mb-5'>
                <h1  style={{fontSize:"50px"}}>Zerodha Products</h1>
                <br/>
                <p  className="mt-3 " style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</p>
                <br/>
                <p style={{fontSize:"15px"}}>Check out our <a href=' '>investment offerings</a><i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
            </div>
        </div>
     );
}

export default Hero;