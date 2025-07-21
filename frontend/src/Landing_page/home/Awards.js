import React from 'react'
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 mt-5'>
                    <h1>Largest stock broker in India</h1>

                    <p className='mb-5'>2+ millions MarketX client contribute to over 15% of all retail orders volume in  India daily by trading and investing in:</p>

                    <div className='row mt-5 mb-5'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>commodity derivatives</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks and IP0's</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Bonds and Govt.securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width: "90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;