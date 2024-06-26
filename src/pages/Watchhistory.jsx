import React, { useEffect,useState   } from 'react'
import Header from '../Components/Header'
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {deleteFromHistoryApi, getHistoryApi} from '../services/allApi'


function Watchhistory() {

  const [videoHistory, setVideoHistory] = useState([]);
  // useEffect for detecting handleDelete
  const [deleteId, setDeleteId] = useState([])
  
  const getHistory = async()=>{
    const result = await getHistoryApi()
    if(result.status>=200 && result.status<300){
      setVideoHistory(result.data)
    }
    // console.log(result)
  }

  useEffect(()=>{
    getHistory()
  },[deleteId])

  // Function for the delete button
  const handleDelete = async(id)=>{
    const result = await deleteFromHistoryApi(id)
    setDeleteId(result.data)
    console.log(result);
  }



  console.log(videoHistory);

  return (
    <>
      <div className='d-flex justify-content-between p-5'>
      <h4>Watch History</h4>
      <h4><Link to={'/home'} style={{color:'white',textDecoration:'none'}} variant='warning'><FontAwesomeIcon icon={faArrowLeft} beat /> <span id='h'>Back to Home </span><FontAwesomeIcon icon={faHouse} className='ms-2' /></Link></h4>

      </div>
      <div className='p-3 container'>

      {videoHistory?.length>0?<Table striped bordered responsive size="sm" variant='dark'className='text-center' >
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th >Caption</th>
          <th>URL</th>
          <th >Time Stamp</th>
          <th >Action</th>
        </tr>
      </thead>
      <tbody>
        {videoHistory?.map((item, index) => (
        <tr>
          <td>{index+1}</td>
          <td>{item?.caption}</td>
          <td><Link to={item?.url}>{item?.url}</Link></td>
          <td>{item.timestamp}</td>
          <td><Button onClick={()=>handleDelete(item.id)}  variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button></td>
        </tr>))}
       
      </tbody>
    </Table>
    :
    <p className='text text-warning fs-4'>No Watch History</p>}
      </div>
      
    </>
  )
}

export default Watchhistory