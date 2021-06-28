import React from 'react';
import { useContext } from 'react';
import LotteryContext from '../context/LotteryContext';

const RightContainer = () => {
    const {totalMoney, numbers} = useContext(LotteryContext);



    return (
        <div className = "right_container inline_block">
            <header>Numbers Selected:</header>
            {numbers.map((number, index)=>(<p key = {index}>Mark: {number}</p>))}
           
            <footer>Total:${totalMoney} </footer>
        </div>
    )
}

export default RightContainer
