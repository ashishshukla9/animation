import React from 'react'
import { WiDaySunny } from "react-icons/wi";
import { BsCloudSun } from "react-icons/bs";
import { FaCloudRain } from "react-icons/fa";
import GreenCard from './GreenCard'
const data = [
    {
        icon: <FaCloudRain size="10em" />,
        temprature: "24",
        city: "Canada",
        country: "United States"
    },
    {
        icon: <BsCloudSun size="10em" />,
        temprature: "30",
        city: "Maharashtra",
        country: "India"
    },
    {
        icon: <WiDaySunny size="10em" />,
        temprature: "-14",
        city: "Moscow",
        country: "Russia"
    }

]
const Green = () => {
    return (
        <div className='fixed green flex gap-10 flex-wrap px-20 py-20'>
            {
                data.map((temp, index) => (
                    <GreenCard data={temp} />
                ))
            }

        </div>
    )
}

export default Green
