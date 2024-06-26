import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Landingpage() {
  return (
   <>
   <div className="row ms-1 mt-5 w-100  justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <div className="col-md-5 p-5">
      <h2>Welcome to <span style={{color:'orange'}}>Media Player</span></h2>
    <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vero nulla quo suscipit magnam at, omnis quaerat. Cumque, iste quibusdam iusto sit corporis illo earum quo rerum, ex voluptatum asperiores!
    Blanditiis fugit quod corporis praesentium odit consequatur quisquam animi laborum repellat. Tenetur sunt error nisi provident itaque consequatur quae quam. Perferendis id sint enim ducimus ab nisi nesciunt maxime itaque?
    Mollitia blanditiis repudiandae adipisci aliquam odit cumque, iure nesciunt quod, optio sequi consequatur illum earum quos obcaecati commodi, maxime numquam doloremque quia! Dolor dolorum culpa, rerum nobis corporis officiis assumenda.</p>
    <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
      </div>
      
      <div className="col-md-5 d-flex justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <img src="https://media1.tenor.com/m/TryWlGm_MlQAAAAd/shah-rukh-khan-music-day.gif" className='w-75' alt="" />
      
      </div>
      
    </div>
    <div className="row ms-1 mt-5 w-100">
    <h3 className='mt-5 mb-5 text-center'>Features</h3>
    <div className="col-md-1 me-md-5"></div>
    <div className="col-md-3  px-5  px-md-4 mt-4">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media1.tenor.com/m/WGkpFJQBzMgAAAAC/cat-listening-to-music.gif" className='w-100' height={'350px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3  px-5  px-md-4 mt-4">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media1.tenor.com/m/6iD_hjv9qDwAAAAd/queen-queen-music.gif"  className='w-100' height={'350px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3 px-5  px-md-4 mt-4">
    <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media1.tenor.com/m/TkrRCytzZCMAAAAd/goodbye-air-supply.gif" className='w-100' height={'350px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-1"></div>
    </div>
    
   <div className="row w-100 mt-5 p-4 ms-1 ms-md-0">
    <div className="col-md-1"></div>
    <div className="col-md-9 border p-3 rounded m-md-5">
      <div className='row w-100'>
      <div className="col-md-6">
      <h3 className='text-warning mt-3'>Simple fast and Powerful</h3>
      <p className='mt-4'><span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, asperiores quae corporis, optio voluptatibus illo dolorem ratione iste nam consequuntur qui explicabo fugiat debitis unde fuga culpa quidem ipsam similique.</p>
      <p className='mt-4'><span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, asperiores quae corporis, optio voluptatibus illo dolorem ratione iste nam consequuntur qui explicabo fugiat debitis unde fuga culpa quidem ipsam similique.</p>
      <p className='mt-4'><span className='fs-4'>Play Everything :</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, asperiores quae corporis, optio voluptatibus illo dolorem ratione iste nam consequuntur qui explicabo fugiat debitis unde fuga culpa quidem ipsam similique.</p>
    </div>
    <div className="col-md-6">
    <iframe width="100%" height="440" src="https://www.youtube.com/embed/uYPbbksJxIg" title="Oppenheimer | New Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
      </div>

    </div>
    
    <div className="col-md-1"></div>
    
   </div>
   </>
    
  )
}

export default Landingpage