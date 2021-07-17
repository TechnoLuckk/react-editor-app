import './styles/style.css';
import { useState } from 'react';

const FilePane = (props)=>{
    const [currentFile, updateCurrentFile] = useState(1);
    const changeCurrent = (fileId) =>{
        console.log(fileId);
        props.changeCurrentFile(fileId);
        updateCurrentFile(fileId);
    };
    return(
        <div className = "file-pane">
            <ul className = "file-list">
                <li className = "list-item" onClick = {() => {changeCurrent(0)}}>index.html</li>
                <li className = "list-item" onClick = {() => {changeCurrent(1)}}>index.css</li>
                <li className = "list-item" onClick = {() => {changeCurrent(2)}}>index.js</li>
            </ul>
        </div>    
    );
}
export default FilePane;