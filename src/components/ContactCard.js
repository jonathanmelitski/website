
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { useState } from 'react'

function ContactCard() {

    const [selected, setSelected] = useState(null);

    return (
        <div className="font-mono text-white py-4 grid grid-cols-3 justify-items-center place-content-center">
            <div className="text-2xl font-bold text-center col-span-full">
                Jonathan Melitski
            </div>

            <div className='text-center text-sm col-span-full pb-4'>
                jonathanmelitski@gmail.com
            </div>

            <a href="https://github.com/jonathanmelitski">
             <div className='p-4 border-2 hover:bg-white border-white rounded-lg'
            onMouseEnter={() => {setSelected(1)}}
            onMouseLeave={() => {setSelected(null)}}>
                <FaGithub style={{color: selected === 1 ? 'black' : 'white'}}/>
             </div>
            </a>

            <a href="https://www.linkedin.com/in/jonathanmelitski">
                <div className='p-4 border-2 hover:bg-white border-white rounded-lg'
                    onMouseEnter={() => {setSelected(2)}}
                    onMouseLeave={() => {setSelected(null)}}>
                    <FaLinkedinIn style={{color: selected === 2 ? 'black' : 'white'}}/>
                </div>
            </a>

            <a href="https://www.instagram.com/jmelitski">
                <div className='p-4 border-2 hover:bg-white border-white rounded-lg'
                    onMouseEnter={() => {setSelected(3)}}
                    onMouseLeave={() => {setSelected(null)}}>
                    <FaInstagram style={{color: selected === 3 ? 'black' : 'white'}}/>
                </div>
            </a>
        </div>
    )
}

export default ContactCard;