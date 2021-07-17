import NavBar from './components/NavBar';
import FilePane from './components/FilePane';
import Editor from './components/Editor';
import styled from 'styled-components';
import LiveView from './components/LiveView';

import React, {useState} from 'react';
const Container = styled.div`
  display : flex;
  flex-direction : row;
  justify-content : space-between;
  margin-top : 10px;
`;
const ContainerOutter = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  margin-top : 5px;
  min-height: 100%;
`;
function App() {
  const [codeInput, updateCodeInput] = useState("");
  const [currentFile, updateCurrentFile] = useState(0);
  let fileContent = require('./userfiles/fileContent.json');
  const handleCodeChange = (code) =>{
    updateCodeInput(code);
    fileContent[currentFile].content = code;
  };
  return (
    <React.Fragment>
      <React.Fragment>
        <NavBar/>
      </React.Fragment>
      <React.Fragment>
        <ContainerOutter>
          <Container>
            <FilePane current = {currentFile} changeCurrentFile={(fileChange) => { updateCurrentFile(fileChange); console.log('Editing ',currentFile);}} />
            <Editor current = {currentFile} handleChange={(code) => handleCodeChange(code)} content = {fileContent[currentFile].content}/>
          </Container>
          <LiveView toDisplay = {codeInput}/>
        </ContainerOutter>
      </React.Fragment>
    </React.Fragment>   
  );  
}

export default App;
