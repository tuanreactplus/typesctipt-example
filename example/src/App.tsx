import React from 'react';
import './App.css';
import {LoginContent} from "./components/organisms/LoginContent";

const App = ():JSX.Element => {
  return (
    <div className="App">
      <LoginContent />
        <div className={'footer'}>
            demo todo app <br/>
            tuannt@reactplus.com
        </div>
    </div>
  );
}

export default App;
