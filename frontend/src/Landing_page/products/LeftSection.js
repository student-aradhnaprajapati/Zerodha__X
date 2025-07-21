import React from 'react'

function LeftSection({
    imageURL,
    ProductName,
    ProductDiscri, 
    TryDemo, 
    LearnMore,
    Appstrore, 
    GoogleStore }) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col p-5'>
                    <img src={imageURL}/>
                </div>
                <div className='col p-5 mt-5'>
                    <h1>{ProductName}</h1>
                    <br/>
                    <p>{ProductDiscri}</p>
                    <div className='mt-4' style={{textDecoration:"none"}}>
                        <a href={TryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={LearnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                    <div className='mt-4'>
                        <a href={Appstrore}><img src='media/images/appstoreBadge.svg'/></a>
                        <a href={GoogleStore} style={{marginLeft:"50px"}}><img src='media/images/googlePlayBadge.svg'/></a>
                    </div> 
                </div>
            </div>
        </div>
     );
}

export default LeftSection;