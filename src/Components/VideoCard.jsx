import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistoryApi, deleteVideoApi, getVideoApi } from '../services/allApi';



function VideoCard({content,setDeleteStatus,isPresent}) {
  // console.log(content);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () =>{
      setShow(true);
      let caption = content?.caption
      let url = content?.url
      let time = new Date()
      let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      let timestamp = new Intl.DateTimeFormat("en-GB", options).format(time)
      console.log(timestamp);

      const reqbody = {
        caption,
        url,
        timestamp
      }

      // Api to add to watch history
      const result = await addToHistoryApi(reqbody)
      console.log(result);

    } 

    // Function for the delete button
    const handleDelete = async (id)=>{
      const result = await deleteVideoApi(id)
      setDeleteStatus(result.data)
      // console.log(e);
    }

    // June 24th
    // Function to drag the card with unique id
    const videoDrag= (e,id)=>{
      console.log(`The dragged video ID is `,id);
      e.dataTransfer.setData("videoID",id)
    }
    
  return (
    <>
       <Card style={{ width: '100%'}} className='mt-4' draggable onDragStart={(e)=>videoDrag(e,content?.id)} >
      {!isPresent && < Card.Img  onClick={handleShow} style={{cursor:'pointer'}} variant="top" src={content?.Image} width={'100%'} height={'300px'} />}
      <Card.Body className='d-flex align-items-center mt-3'>
      <p>{content?.caption}</p> {/* Add ?. since its a time delay being happening */}
       {!isPresent && <Button onClick={()=>{handleDelete(content?.id)}}  variant="danger ms-auto"><FontAwesomeIcon icon={faTrash} /></Button>} 
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{content?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="523" src={`${content?.url}?autoplay=1`} title="This is NVIDIA’s new GPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard