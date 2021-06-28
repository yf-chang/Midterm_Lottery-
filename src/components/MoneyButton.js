import React,{useContext} from 'react'
import LotteryContext from '../context/LotteryContext';

const MoneyButton = (props) => {
    const {numbers, totalMoney, setTotalMoney} = useContext(LotteryContext);
    const addMoney = (money)=>{
        if (numbers.length == 5){
            setTotalMoney(totalMoney+money);
        }
        else {
            alert("You can only assign money after you select your numbers.")
        }
    }
    
    const clickHandler = () => addMoney(props.money);
 
    return (
        <button onClick = {clickHandler}>
            ${props.money}
        </button>
        
    )
};

export default MoneyButton
