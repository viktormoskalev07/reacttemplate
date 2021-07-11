import React from 'react';


const InnerHtml =( {tag,content,className})=>{

    
 
    return(
        React.createElement(
            tag?tag:'div',  {   className:className ,dangerouslySetInnerHTML:{__html:content}  } 
          )
        
    )
}
export default InnerHtml