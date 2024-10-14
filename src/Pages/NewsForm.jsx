import React, { useState } from 'react'
import app from '../firebase'
import {getDatabase, ref, set, push} from "firebase/database"
import {getStorage,ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

const NewsForm = () => {
    const [img, setIng] =useState('')
    const [imgPath, setIngPath] =useState('')
    const [title, setTitle] =useState('')
    const [date, setDate] =useState('')
    const [description, setDescription] =useState('')
    const [content, setContent] =useState('')

    const handleSave = () => {
        const db=getDatabase(app)
        const newDocRef = push(ref(db, "zectacus/news"))
        set(newDocRef, {
            title: title,
            description: description,
            content: content,
            date: date,
            imgPath: imgPath

        }).then(()=>{
            alert('data saved successfully')
            setTitle('')
            setDescription('')
            setContent('')
            setDate('')
        }).catch((err)=>{
            alert('error: ', err.message)
        })
    }
    const handleBanner = async () => {
        const db = getStorage(app)
        const newDocRef = storageRef(db, `zectacus/${v4()}`)
 
        const uploadResult = await uploadBytes(newDocRef, img);
        
        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(uploadResult.ref);
        
        setIngPath(downloadURL)
    }
  return (
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
  )
}

export default NewsForm