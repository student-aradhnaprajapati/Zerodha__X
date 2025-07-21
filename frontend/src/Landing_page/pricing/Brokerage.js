import React from 'react'

function Brokerage() {
    return (  
        <div className='container p-5 mt-5 border-top'>
            <div className='row  '>
                <div className='col-8 '>
                    <h1 className='fs-5 mb-4 text-primary  text-center' >
                        Brokerage calculator 
                    </h1>
                    <ul className='text-muted' style={{fontSize:"1rem", lineHeight:"2rem"}}>
                        <li>call & Trads and RMS auto squareoff: Additional charges of $50 + GST per product</li>
                        <li>Digital contact notes will be sent via e-mail </li>
                        <li>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
                        <li>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 '>
                    <h1 className='fs-5 text-primary text-center'>
                        List of Charges 
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default Brokerage;