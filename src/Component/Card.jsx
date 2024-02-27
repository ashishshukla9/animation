import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({ data,refrence }) => {
    return (
        <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>

            <FaRegFileAlt />
            <p className='test-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0 '>
                <div className='flex justify-between items-center px-8 py-3'>
                    <h4>{data.filesize}</h4>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <LuDownload size=".8em" color="#fff" />}

                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}

            </div>
        </motion.div>
    )
}

export default Card
