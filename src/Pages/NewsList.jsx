import React, { useState, useEffect } from 'react'
import app from '../firebase'
import {getDatabase, ref, get} from "firebase/database"

const NewsList = () => {
    const [newsArray, setNewsArray] =useState([])
    
    const fetchNews =  async () => {
        const db=getDatabase(app)
        const newDocRef = ref(db, "zectacus/news")
        const snapshot = await get(newDocRef)
        if(snapshot.exists()){

            const myData = snapshot.val()
            const myTempArray = Object.keys(myData).map(
                myFireId => {
                    return {
                        ...myData[myFireId],
                        id: myFireId
                    }
                }
            )


            setNewsArray(myTempArray)
           
        }

    }

    // fetchNews();


    useEffect(() => {
        fetchNews();
       
      }, []); // Dependency array
    
    
  return (
    <div className='newFormContainer'>
        <h1>News List</h1>
        <ul>
            {
                newsArray.map((item, index)=>(
                    <li key={index}><a href={'/newsEdit/'+item.id}>{index+1 + ' ' +item.title } </a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default NewsList