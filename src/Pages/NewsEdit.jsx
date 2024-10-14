import React, { useState, useEffect } from 'react'
import app from '../firebase'
import {getDatabase, ref, set, get} from "firebase/database"
import { useParams } from 'react-router-dom';
import {getStorage,ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"


const NewsEdit = () => {
    
    const { id } = useParams();
    const [img, setIng] =useState('')
    const [imgPath, setIngPath] =useState('')
    const [title, setTitle] =useState('')
    const [date, setDate] =useState('')
    const [description, setDescription] =useState('')
    const [content, setContent] =useState('')

    const fetchNews =  async () => {
        const db=getDatabase(app)
        const newDocRef = ref(db, "zectacus/news/"+id)
        const snapshot = await get(newDocRef)
        if(snapshot.exists()){

            const myData = snapshot.val()
            setTitle(myData.title)
            setDate(myData.date)
            setDescription(myData.description)
            setContent(myData.content)
        }

    }

    useEffect(() => {
        fetchNews();
    }, []);
  
    
    const handleSave = () => {
        const db=getDatabase(app)
        const newDocRef = ref(db, `zectacus/news/${id}`)
        set(newDocRef, {
            title: title,
            description: description,
            content: content,
            date: date,
            imgPath: imgPath
        }).then(()=>{
            alert('data updated successfully')
          
        }).catch((err)=>{
            alert('error: ', err.message)
        })
    }
    
    const handleBanner = async () => {
        const db = getStorage(app)
        const newDocRef = storageRef(db, `zectacus/${v4()}`)
 
        const uploadResult = await uploadBytes(newDocRef, img)
        
        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(uploadResult.ref);
        
        setIngPath(downloadURL)
    }
  return (
    <div className='newFormContainer'>
        <h1>News Edit</h1>
        <div className='newFormContainer'>
        <div>
            <label htmlFor="">Banner</label>
            <input type="file" onChange={(e)=>setIng(e.target.files[0])} />
        </div>
        <button onClick={handleBanner}>Upload Banner</button>
        <div>
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Date</label>
            <input type="text" value={date} onChange={(e)=>setDate(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Short Description</label>
            <textarea type="text" value={description} onChange={(e)=>setDescription(e.target.value)} rows="4"/>
        </div>
        <div>
            <label htmlFor="">Content</label>
            <textarea type="text" value={content} onChange={(e)=>setContent(e.target.value)}  rows="20" />
        </div>
        <button onClick={handleSave}>Save</button>
    </div>
    </div>
  )
}

export default NewsEdit