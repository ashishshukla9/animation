import React, { useRef } from 'react'
import Card from './Card'


const Forground = () => {

    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Upload", tagColor: "blue" }
        },
        {
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
    ];
    return (

        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap'>
            {
                data.map((item, index) => (
                    <Card data={item} refrence={ref} />
                ))
            }


        </div>

    )
}

export default Forground
