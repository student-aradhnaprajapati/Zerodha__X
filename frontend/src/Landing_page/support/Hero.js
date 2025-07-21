import React from 'react'

function Hero() {
    return (
        // <header className='bg-primary'></header>
        <section className='container-fluid' id="SupportHero">
            <div className='container'>
                <div className='p-5' id="supportWrapper" >
                    <h4>Support Portal</h4>
                    <a href="">Track Tickets</a>
                </div>
                <div className='row  p-5 mx-5'>
                    <div className='col-6 '>
                        <h1 className='fs-4' >Search for an answer or browse help topic to create a ticket</h1>
                        <br/>
                        <input placeholder='Eg. How do I activate F&O. Why is order getting rejected...'/>
                        <br/>
                        <a href='' style={{ lineHeight:"2.5rem"}}>Track Account Opening</a>
                        <a href='' style={{ lineHeight:"2.5rem"}}>Track Segment activation</a>
                        <a href='' style={{ lineHeight:"2.5rem"}}>Industry Margins</a>
                        <a href='' style={{ lineHeight:"2.5rem"}}>Kite User Manual</a>
                    </div>
                    <div className='col-6 p-5'>
                        <h4 >Featured</h4>
                        <ol>
                            <li><a href=''>Current takeovers and Delisting- June-2025</a></li>
                            <li><a href=''>Latest Industry leverage - MIS & CO</a></li>
                        </ol>  
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;