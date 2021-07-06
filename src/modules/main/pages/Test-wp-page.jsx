import { useEffect, useState } from "react";

 

const P = () => {
        const [post, setPost] =useState({})
        const [content, setcontent] = useState()
    useEffect(() => {
        fetch(`http://wp-server.h67359oy.beget.tech/wp-json/wp/v2/pages/5`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson); 
            setPost(responseJson);
            if(responseJson.content){
                responseJson.content.rendered&&setcontent(responseJson.content.rendered);
            }
        })
        return () => {
             
        }

    }, [ ])

    return (  
        <>
                    <h1> react in wp</h1>
                    <h2> {post.title?post.title.rendered:'loading...'} </h2>
                    <div className='container'>
                    <div dangerouslySetInnerHTML={{__html: content}} />
                    </div>

            </>
    );
}
 
export default P;