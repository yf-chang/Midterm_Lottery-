import React from 'react';
import Numbers from './Numbers';
import { useContext } from 'react';
import LotteryContext from '../context/LotteryContext';

const MiddleContainer = () => {
    const {totalMoney, setTotalMoney, numbers, setNumbers} = useContext(LotteryContext);

    const cash_style ={
        'width':'20em'
    }

    const cashHandler = () => {
        alert(`The customer's selected numbers: ${numbers}. Their money assigned: ${totalMoney}`); 
    }

  
    
    const clearHandler = () => {
        setTotalMoney(0);
        setNumbers([]);

    }

    const randomHandler = () => {
        const randomArray = [];
        if (numbers.length+randomArray.length<5){
            while (numbers.length+randomArray.length<5){ 
                    let random = Math.floor(Math.random() * 20) + 1;
                    if(numbers.indexOf(random) === -1) randomArray.push(random);  
            }
            setNumbers(numbers.concat(randomArray));
        }
        else{
            alert("You can only select 5 numbers.")
        }
    }

    return (
        <div className = "middle_container inline_block"> 
            <table>
                <tr>
                    <td><Numbers number="1" /></td>
                    <td><Numbers number="2"/></td>
                    <td><Numbers number="3"/></td>
                    <td><Numbers number="4"/></td>
                    <td><Numbers number="5"/></td>
                    <td><Numbers number="6"/></td>
                </tr>
                <tr>
                    <td><Numbers number="7"/></td>
                    <td><Numbers number="8"/></td>
                    <td><Numbers number="9"/></td>
                    <td><Numbers number="10"/></td>
                    <td><Numbers number="11"/></td>
                    <td><Numbers number="12"/></td>
                </tr>
                <tr>
                    <td><Numbers number="13"/></td>
                    <td><Numbers number="14"/></td>
                    <td><Numbers number="15"/></td>
                    <td><Numbers number="16"/></td>
                    <td><Numbers number="17"/></td>
                    <td><Numbers number="18"/></td>
                </tr>
                <tr>
                    <td><Numbers number="19"/></td>
                    <td><Numbers number="20"/></td>
                    <td colSpan = "2"><button onClick = {randomHandler} className = "btn_action">RANDOM</button></td>
                    <td colSpan = "2"><button onClick = {clearHandler} className = "btn_action">CLEAR</button></td>   
                </tr>
                <tr>
                    <td colSpan = "6"><button onClick = {cashHandler} className = "btn_action"  style={cash_style}>CASH</button></td>
                </tr>
            </table>
        </div>
    )
}

export default MiddleContainer
