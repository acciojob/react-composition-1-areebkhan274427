import React, { useState } from "react";


function Tabs(props){
    let [content,setContent] = useState('');
    console.log(props);
    // function contentSet(content){
    //     setContent(content);
    // }
    const arrayDataItems = props.array.map((data) => <li onClick={()=>setContent(data.content)}>{data.title}</li>);

    return(
        <div>
            <ul>{arrayDataItems}</ul>
                <p>{content}</p>


        </div>
    )
}

export default Tabs;