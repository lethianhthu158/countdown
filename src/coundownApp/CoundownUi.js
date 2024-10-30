import React, { useEffect, useState } from 'react';
import DrappStyle from '../component/DrappStyle';
import "./coundown.scss"
import LunarCalendar from 'lunar-calendar';


const CoundownUi = () => {


    // Ví dụ sử dụng
    const [isLunar, setIslunar] = useState(false)
    const [flipAnimation, setFlipAnimation] = useState('');

    const calculateTimeLeft = () => {


        const eventDate = new Date('2025-01-01T00:00:00');
        const eventLunarDate = new Date("2025-01-29T00:00:00")
        const now = new Date();

        const countdown = eventDate - now;
        const countdownLunar = eventLunarDate - now;
        const count = isLunar ? countdownLunar : countdown;




        //con lai
        let timeLeft = {};

        if (count > 0) {
            const differenceSecond = Math.floor(count / 1000);
            const differenceMinute = Math.floor(differenceSecond / 60);
            const differenceHours = Math.floor(differenceMinute / 60);
            const differenceDay = Math.floor(differenceHours / 24);

            //Thời gian còn lại 
            timeLeft = [
                { value: differenceDay, label: "Ngày" },
                { value: (differenceHours - (differenceDay * 24)), label: "Giờ" },
                { value: (differenceMinute - (differenceHours * 60)), label: "Phút" },
                { value: (differenceSecond - (differenceMinute * 60)), label: "Giây" },
            ]
        }
        return timeLeft;


    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    useEffect(() => {
       
        setTimeLeft(calculateTimeLeft())
       
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);
        return () => clearInterval(timer)
    }, [isLunar])
    
    const handleClickLunar = () => {
       
        setIslunar(!isLunar);
        setFlipAnimation('flip');
        setTimeout(() => setFlipAnimation(''), 600);
       
    }
    
   







    return (
        <div className="container-website">
            <div className='title year'> 2025</div>
            <div className="title newyear">New Year CountDown</div>

            <div className="container-coundown">


                {
                    timeLeft.map((timeUnit, index) => (
                        <DrappStyle key={index} countdown={timeUnit.value} content={timeUnit.label}  styleAnimation= {flipAnimation}></DrappStyle>
                    ))
                }
            </div>
            <button className="Lunar-Button" onClick={handleClickLunar}  > {isLunar ? "Dương lịch": "Âm lịch"}</button>
        </div>
    );
};

export default CoundownUi;