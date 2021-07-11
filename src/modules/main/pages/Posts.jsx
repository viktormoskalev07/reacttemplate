import React, { useEffect, useState } from "react";
import InnerHtml from '../../../tools/InnerHtml';

 import styled from 'styled-components';
 const PostItem= styled.div`
 width: 33%;
 min-height: 400px;
 padding: 10px;
 border-radius: 20px;
 background-color: #dadada;
 color:black;
 background-clip:content-box;
  
 ` 


const P = () => {
        const [Getposts, setPosts] =useState([])
        const [Getmedia, setMedia] =useState([])
     
    useEffect(() => {
        fetch(`http://wp-server.h67359oy.beget.tech/wp-json/wp/v2/posts`)
        .then((response) => response.json())
        .then((posts) => {
                setPosts(posts);
               
        })
        fetch(`http://wp-server.h67359oy.beget.tech/wp-json/wp/v2/media`)
        .then((response) => response.json())
        .then((media) => {
                setMedia(media);
               
        })
        return () => {
             
        }

    }, [ ])

    if(Getposts.length>1){
        console.log('post' ,Getposts);
        console.log(Getmedia);
    }
    

    return (  
        <>  
                 <section className='container'>
                    <h1> react in wp</h1>
     
                    <div style={{display:'flex',flexWrap:'wrap'}} className='container'>
                    {Getposts.map((post)=>{
                        return(
                            <PostItem  key={post.id}> 
                            <div style={{padding:'40px'}}>
                            <h1> {post.title.rendered}</h1> 
                                        <i> дата создания  {post.date}</i>
                                        <InnerHtml   content={post.excerpt.rendered} />

                            </div>
                                      
                            </PostItem>
                        
                          
                        )
                    })}
                    </div>
                 
                    </section>
            </>
    );
}
 
export default P;


