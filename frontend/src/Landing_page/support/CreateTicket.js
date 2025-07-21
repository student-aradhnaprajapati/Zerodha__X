import React from 'react'

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-4 text-muted'>
                    To create a ticket, select a relevant topic
                </h1>
                
                    <div className='col-4 mt-5' style={{textDecoration: "none"}}>
                        <h1 className='fs-5'>
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             Account Opening
                        </h1>
                        <a href="" style={{textDecoration: "none", lineHeight:"2.5rem"}}>Resident individual</a><br />
                        <a href="" style={{textDecoration: "none", lineHeight:"2.5rem"}}>Minor</a><br />
                        <a href="" style={{textDecoration: "none", lineHeight:"2.5rem"}}>Non Resident Indian (NRI)</a><br />
                        <a href="" style={{textDecoration: "none", lineHeight:"2.5rem"}}>Company, Partnership, HUF and LLP</a><br />
                        <a href="" style={{textDecoration: "none", lineHeight:"2.5rem"}}>Glossary</a><br />
                    </div>

                    <div className='col-4 mt-5' style={{textDecoration: "none"}}>
                        <h1 className='fs-5'>
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                            Your Zerodha Account
                        </h1>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Your Profile</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Account modification</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Nomination</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Transfer and conversion of securities</a><br/>
                    </div>

                    <div className='col-4 mt-5' style={{textDecoration: "none"}}>
                        <h1 className='fs-5'>
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                            Kite
                        </h1>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>IPO</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Trading FAQs</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Margin Trading Facility (MTF) and Margins</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Charts and orders</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>Alerts and Nudges</a><br/>
                        <a href='' style={{textDecoration: "none", lineHeight:"2.5rem"}}>General</a><br/>
                    </div>
            </div>
            
        </div>
    );
}

export default CreateTicket;