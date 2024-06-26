import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getVideoApi,getCategoryApi,updateCategoryApi} from '../services/allApi';

function View({addStatus, setdragStatus}) {
  const[videodetails,setVideoDetails]=useState([])

    // State lifting for delete
    const [deleteStatus,setDeleteStatus] = useState([])

  const getVideo = async()=>{
  const result = await getVideoApi()
  console.log(result.data);
  setVideoDetails(result.data)
  
  }
  // June25

  const DragOver = (e)=>{
    e.preventDefault()
  }

  const videoDrop = async (e)=>{
    const{videoID,categoryID } = JSON.parse(e.dataTransfer.getData("dataShared"))
    console.log(videoID, categoryID);

    //Get all Category
    const {data} = await getCategoryApi()
    console.log(data);
  // Step 2, Get selected category
  const selectedCategory = data.find((item)=>item.id === categoryID)
  console.log(selectedCategory);

    
    // Step 3, remove video from selected categoryID using put request and reqBo
    const result = selectedCategory.allvideo.filter((item)=>item.id !== videoID)
      const reqBody = {
        CategoryName: selectedCategory.CategoryName,
        allvideo: result,
        id:selectedCategory.id
    }
    // Step 4,update the details using put api call
   await updateCategoryApi(reqBody,categoryID)  
   setdragStatus(true)
  
  }

  useEffect(()=>{
    getVideo()
  },[addStatus,deleteStatus])

  

  // console.log(videodetails);

  return (
    
      <Row className='w-100 ms-4 ms-md-0' droppble onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>
        {videodetails?.length>0?videodetails?.map((item)=>((<Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
        <VideoCard setDeleteStatus={setDeleteStatus} content = {item}/> {/* Passing data using props to VideoCard.jsx */}
      </Col>)))  
        :
      <p className='text-warning fs-5 mt-4'>No Video yet Uploaded...</p>
        
        }
        

      </Row>
    
  )
}

export default View