import { FaHome } from 'react-icons/fa';
import { MdOutlineReorder, MdTableBar } from 'react-icons/md';
import { CiCircleMore } from 'react-icons/ci';
import {BiSolidDish} from "react-icons/bi"

export default function BottomNav() {
    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-20 flex justify-around'>
            <button className='text-[#ababab] bg-[#343434] w-[200px] rounded-[20px] flex items-center justify-center'><FaHome className='inline mr-2' size={20} /> <p>Home</p></button>
            <button className='text-[#ababab]  w-[200px] flex items-center justify-center'><MdOutlineReorder className='inline mr-2' size={20} /> <p>Orders</p> </button>
            <button className='text-[#ababab]  w-[200px] flex items-center justify-center'><MdTableBar className='inline mr-2' size={20} /> <p>Tables</p> </button>
            <button className='text-[#ababab]  w-[200px] flex items-center justify-center'><CiCircleMore className='inline mr-2' size={20} /> <p>More</p></button>
            <button className='absolute bottom-4 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center'> <BiSolidDish size={30}  /> </button>
        </div>
    )
} 