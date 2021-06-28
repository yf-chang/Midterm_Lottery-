import React,{useState} from 'react';
import Header from "./Header";
import LeftContainer from './LeftContainer';
import MiddleContainer from './MiddleContainer';
import RightContainer from './RightContainer';
import LotteryContext from '../context/LotteryContext';
import "../css/App.css";

const App = () => {
  const [totalMoney, setTotalMoney] = useState(0);

  const [numbers,setNumbers] = useState([]);
  
    
  return (
    <div>
      <LotteryContext.Provider value={{totalMoney, setTotalMoney, numbers,setNumbers}} >   
      <Header />
      <main>
        <LeftContainer />
        <MiddleContainer />
        <RightContainer />
      </main>
      </LotteryContext.Provider>
    </div>
  )
}

export default App
