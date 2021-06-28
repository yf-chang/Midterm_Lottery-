import React from 'react';
import MoneyButton from './MoneyButton';
import image from "../img/LotteryBall.webp";

const LeftContainer = () => {
    return (
        <div className = "left_container inline_block">
            <img src={image} alt=""/>
            <br />
            <MoneyButton  money = {1}/>
            <MoneyButton  money = {5}/>
            <br />
            <MoneyButton  money = {10}/>
            <MoneyButton  money = {20}/>
        </div>
    )
}

export default LeftContainer
