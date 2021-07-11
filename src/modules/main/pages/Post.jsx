import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    console.log(id);
    return (  
        <>
  <h1>post </h1>
            </>
    );
}
 
export default Post;