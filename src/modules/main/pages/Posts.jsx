import { useEffect, useState } from "react";

 

const P = () => {
        const [Getposts, setPosts] =useState([])
     
    useEffect(() => {
        fetch(`http://wp-server.h67359oy.beget.tech/wp-json/wp/v2/posts`)
        .then((response) => response.json())
        .then((posts) => {
                setPosts(posts);
                console.log(posts)
        })
        return () => {
             
        }

    }, [ ])

    const innr= (item)=>{
        return(
           ` <div dangerouslySetInnerHTML={__html: item} />`
        )
    }

    return (  
        <>  
                 <section className='container'>
                    <h1> react in wp</h1>
                    {/* <h2> {post.title?post.title.rendered:'loading...'} </h2> */}
                    <div className='container'>
                    {/* */}
                    </div>
                    {Getposts.map((post)=>{
                        return(
                            <div  key={post.id} style={{border:'solid blue 1px' , height:'300px', width:'300px'}}> 
                                        <h1> {post.title.rendered}</h1>
                                        <div>  ${post.content.rendered}</div>
                                        <i> дата создания ${post.date}</i>
                                        {innr(1)}
                            </div>
                        
                          
                        )
                    })}
                    </section>
            </>
    );
}
 
export default P;