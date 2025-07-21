import React from 'react'

function Pricing() {
    return (  
        <div className='container  p-5'>
            <div className='row  p-5'>
                <div className='col-5 p-2'>
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a href=''  style={{textDecoration:"none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col'></div>
                <div className='col-6 '>
                    <div className='row text-center'>
                        <div className='col p-3'>
                            
                            <img src='media/images/pricing0.svg'/>
                            <p className='text-muted'> Free account opening</p>
                        </div>
                        <div className=' col p-3'>
                            <img src='media/images/pricingEquity.svg'/>
                            <p className='text-muted'> Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className=' col p-3'>
                            <img src='media/images/intradaytrades.svg'/>
                            <p className='text-muted'>  Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;