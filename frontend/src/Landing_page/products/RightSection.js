import React from 'react'

function RightSection({
    imageURL,
    ProductName,
    ProductDiscri, 
    learnMore,  
}) {
    return (  
        // <div className='container  p-5'>
        //     <div className='row mt-5'>
        //         <div className='col mt-5'>
        //             <h1>Console</h1>
        //             <br/>
        //             <p>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
        //             <br/>
        //             <a href='' className="x-5" style={{textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        //         </div>
        //         <div className='col'>
        //             <img src='media/images/console.png'/>
        //         </div>
        //     </div>
        // </div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col p-5 mt-5'>
                    <h1>{ProductName}</h1>
                    <br/>
                    <p>{ProductDiscri}</p>
                    <div className='mt-4'>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col p-5'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;