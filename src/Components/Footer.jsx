import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <>
    <div className="row w-100 mt-3">
       
        <div className="col-md-4 p-4 ms-md-5">
            <h4 className='text-warning' ><FontAwesomeIcon icon={faVideo} className='me-3' />Media Player</h4>
            <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi pariatur dolor culpa eos deleniti, laudantium cumque omnis itaque esse quis eaque nostrum minima quia! Soluta nulla optio voluptatibus accusantium error.
            Labore ad alias laborum debitis in officiis dolorum autem at, maiores libero illum natus harum, possimus aliquid itaque consequatur provident quod iste delectus impedit temporibus dolorem! Nostrum soluta ad tenetur.</p>
            
        </div>
        <div className="col-md-2 d-md-flex justify-content-center p-4">
            <div>
            <h4>Links</h4>
            <p><Link to={'/'}>Landing Page</Link></p>
            <p><Link to={'/home'}> Home Page</Link></p>
            <p> <Link to={'/watchhistory'}> Watch History</Link></p>
            </div>
        
        </div>
        <div className="col-md-2 p-4">
            <h4>Guides</h4>
             <p>React</p>
             <p>React Bootstrap</p>
             <p>Bootswatch</p>
        </div>
        <div className="col-md-3 p-4">
            <h4>Contact Us</h4>
            <div className='d-flex mt-4'>
            <input type="text" className='form-control' placeholder='Email ID' />
            <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className="d-flex mt-4 justify-content-between">
            <FontAwesomeIcon icon={faInstagram} size='2xl' />
            <FontAwesomeIcon icon={faFacebook} size='2xl' />
            <FontAwesomeIcon icon={faTwitter} size='2xl'/>
            <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
            </div>
        </div>
        <div className="col-md-1"></div>
    </div>

    </>
  )
}

export default Footer