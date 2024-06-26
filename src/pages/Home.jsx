import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {
  // For updating category page state lifting june25
  const [dragStatus, setdragStatus] = useState(false);

  // june19 state lifting
  const [addStatus,setAddStatus] = useState([])

  return (
    <>
    <div className="d-flex mt-5 p-5 ">
    <Add setAddStatus={setAddStatus}/> {/* From data is added use the setState function */}
    <h5 className='ms-auto'><Link to={'/watchhistory'}><span id='h'> Watch History </span><FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
    </div>
   <div className="row w-100 p-4">
    <div className="col-md-9">
      <h4>All Videos</h4>
      <View addStatus={addStatus} setdragStatus={setdragStatus}/> {/* Where data is given use the state variable */}
    </div>
    <div className="col-md-3">
      <Category dragStatus={dragStatus} setdragStatus={setdragStatus}/>
    </div>
   </div>

   

    </>
  )
}

export default Home