import { tabs } from './tabs';
import './App.css';
import { useState } from 'react';

function App() {
  let [activeTabs,setActiveTabs]=useState(0);
  let [activeContent,setActiveContent]=useState(tabs[0]);

  let ChangeData= (index)=>{
    setActiveTabs(index);
    setActiveContent(tabs[index]);  
  }
  return (
    <div className="App">
      <div className="tabsOuter">
      <h1 style={{textAlign:'left'}}>Law Prep Vision ,Misson And Values</h1>
      <ul>
        {tabs.map((tabsItems,index)=>{
          return(

            <li><button onClick={()=>ChangeData(index)} className={activeTabs===index?'activeButtons':''}>{tabsItems.title}</button></li>
          )

        })}
      </ul>
      {activeContent!==undefined?<p>{activeContent.description}</p>:''}
        
    </div>
    </div>
  );
}

export default App;
