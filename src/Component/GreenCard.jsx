import React from 'react'
import { motion } from "framer-motion"
const GreenCard = ({ data }) => {
    return (
        <>
            <motion.div drag  whileDrag={{scale:1.2}} dragElastic={0.2} className='relative px-20 py-20 rounded-2xl bg-gray border border-gray-100  '>
                <div className='text-white z-0'>
                    <span className='relative mx-auto ' />{data.icon}</div>
                <div className="temperature text-center">
                    <span className="value">{data.temprature}</span>
                    <span className="unit">°C</span>
                </div>
                <div className='text-center text-white text-2xl'>
                    <h4>{data.city},</h4>
                    <h4>{data.country}</h4>
                </div>
            </motion.div>


        </>
    )
}

export default GreenCard
