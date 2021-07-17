import './styles/style.css';
import {useState} from 'react';
const Editor = (props) => {
    const currentFile = (props.current === 0) ? "index.html" : (props.current === 1) ? "index.css" : "index.js" ;
    const initialState = [{content : "1@"},{content : "2@"},{content : "3@"}];
    const [codeObject, updateCodeObject] = useState(initialState);
    const onTextChange = (event) => {
        console.log(typeof(event));
        if(props.current === 0){
            console.log(codeObject[props.current].content);
            codeObject[props.current].content = event.target.value;
        } else if(props.current === 1){
            console.log(codeObject[props.current].content);
            codeObject[props.current].content = event.target.value;
        } else if(props.current === 2){
            console.log(codeObject[props.current].content);
            codeObject[props.current].content = event.target.value;
        }
        console.log('At ',currentFile,' ',codeObject);
    };
    const onTextSave = () => {
        const combinedCode = codeObject[0].content+codeObject[1].content+codeObject[2].content;
        props.handleChange(combinedCode);
    } 
    return ( 
        <div className = "editor-main">   
        <div>Editing {currentFile} {'>'} </div>
        <textarea rows = "15" cols = "142" onChange={onTextChange}></textarea>
        <button onClick = {onTextSave}>Save</button>
        </div>
    );
}
export default Editor;