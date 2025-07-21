import React from 'react'

function Team() {
    return (
        <div className='container mt-5'>
          
          <div className='row'>
            
            <div className='col p-5 text-center'>
              <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"60%"}}/>
              <div >
                <h1 className=" mt-4" style={{fontSize:"1.5rem"}}>Nithin Kamath</h1>
              
              <p>Founder, CEO</p>
              </div>    
            </div>
            <div className='col'>
              <h1 >People</h1>
              <br/>
              <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
              <br/>
              <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
              <br/>
              <p>Playing basketball is his zen.</p>
              <br/>
              <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
            </div>
          </div>
          
        </div>
      );
}

export default Team;