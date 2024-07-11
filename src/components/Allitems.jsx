import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Allitems = () => {
    const [items,setitems]=useState ([]);

    const fetchitems = async ()=>{

       try { 
        const response= await axios.get ('http://localhost:2000/admin/Showitems')
        setitems(response.data)
        console.log ("response data",response.data)
       }
       catch (err) {
        console.log ("error fetching items ",err)

       }
    };
    useEffect(()=>{
        fetchitems()
    },[])


  return (

    <div className=' full card'>
        {items.map ( item => (
            <div className="card">
                <img src={item.imageurl} alt={item.title} width={500}/>
                <div className="cardcontent">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span>{item.price}</span>
                </div>
            </div>
            

        ))}
    </div>
  )
}

export default Allitems