import React,{useContext} from 'react';
import LotteryContext from '../context/LotteryContext';
import { useState } from 'react';



const Numbers = (props) => {
    const {numbers,setNumbers} = useContext(LotteryContext);
    
    const addNumber = (number)=>{
        if(number != numbers.filter(element => ({element}))){
            setNumbers(numbers.concat(number));
        }
        else {
            setNumbers(numbers.splice(1,1)); 
        }
    }

    const [isSelect, setIsSelect] = useState("btn_number")

    const clickHandler = ()=>{
        if(numbers.length < 5){
            addNumber(props.number);
            setIsSelect(!isSelect);
        }
        else{
            alert("You can only select 5 numbers.")
        }
        
    };
    return (
        <button onClick = {clickHandler} className={isSelect?"btn_number":"btn_number_select"}>
            {props.number}   
        </button>
    )
}

export default Numbers
