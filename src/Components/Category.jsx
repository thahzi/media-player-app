import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import {Button,Row,Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { useState } from 'react';
import { addCategoryApi, deleteCategoryApi, deleteFromHistoryApi, getCategoryApi, getSingleVideoApi, updateCategoryApi} from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Category({dragStatus,setdragStatus}) {
  const [CategoryName, setCategoryName] = useState("");
  const [categoryDetails, setCategoryDetails] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCategory = async()=>{
   if(CategoryName){ /* Check weather the category input is empty or not */
    const reqBody = {
      CategoryName,
      allvideo:[]
    }
    //api call to add category
    const result = await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 & result.status<300){
      handleClose()
      toast.success('Video uploaded successfully')
      getAllCategory()
    }
   }else{
    toast.info('Please fill form completely')
   }
  }
 
  // Getting data from the server
  const getAllCategory = async()=>{
    const result = await getCategoryApi()
    if(result.status>=200 && result.status<300){
      setCategoryDetails(result.data)
    }
    
    console.log(result);
  }

  // Deleting data from the catergory section
  const deleteCategory = async (id)=>{
    const result = await deleteCategoryApi(id)
    getAllCategory()
    console.log(result);
  }

  // june24 video drag and dropping
  const DragOver =(e)=>{
    e.preventDefault();
  }

  const videoDrag = async (e,categoryID)=>{
    console.log(`category id is`,categoryID);

    const videoID = e.dataTransfer.getData("videoID")
    console.log(`video id is`,videoID);
    // getting video details from the backend, {data} is object destructiring
    const {data} = await getSingleVideoApi(videoID)
    console.log(data);

    const selectedCategory = categoryDetails.find((item)=>item.id==categoryID)
    // check if categoryId already present in allvideo using array method
    if(selectedCategory.allvideo.find((item)=>item.id==data.id)){
      toast.info('Video already present in this category')
    }else{
      selectedCategory.allvideo.push(data)
     
      // toast.success('Video pushed to allvideo')
    }
    await updateCategoryApi(selectedCategory,categoryID)

    // Toggle dragStatus to ensure state update and re-render from CHatGPT
    setdragStatus((prevStatus) => !prevStatus);
  }

  const DragStart = (e,videoID,categoryID)=>{
    console.log(videoID);
    console.log(categoryID);
    let dataShare = {
      videoID,categoryID
    }
    e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
  }




  // update on page load useeffect for getallcateory
  useEffect(()=>{
    getAllCategory()
    setdragStatus(false)
  },[dragStatus])



  return (
    <>
    <div className=''>
    <Button onClick={handleShow} variant="warning" className='w-100 mb-3'>Add New Category <FontAwesomeIcon icon={faPlus} /></Button>
        </div>



{categoryDetails?.length>0? 
    categoryDetails?.map((item)=>(
    <div className='mt-md-5 mt-2' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrag(e,item.id)}>
      <div className='border border-secondary mt-5 rounded p-3 ms-4 ms-md-0'>
      <div className='d-flex mb-3'>
        <p>{item.CategoryName}</p>
        <Button className='btn btn-danger ms-auto' onClick={()=>deleteCategory(item.id)} variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button>
      
      </div>
    <Row>
      {item?.allvideo?.length>0?
      item?.allvideo?.map((videoItem)=>(<Col sm={12}
        draggable
        onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}
        >
            <VideoCard content = {videoItem} isPresent={true}/>
        </Col>
      ))
    : null
    }
    </Row>
       
      </div>
          </div>))
:null
}
    
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3> <FontAwesomeIcon icon={faPencil} /> Add New Category</h3>
        </Modal.Header>
        <Modal.Body>
          <p> Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" onChange={(e)=>{setCategoryName(e.target.value)}} placeholder='Enter the Category Name' className='form-control'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
    </>
  )
}

export default Category