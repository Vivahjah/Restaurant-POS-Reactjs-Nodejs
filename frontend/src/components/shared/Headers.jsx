import logo from '../../assets/logo.png'
import { FaSearch } from 'react-icons/fa'
export default function Headers(){
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logo} className='h-8 w-8' alt="restro logo" />
                <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
            </div>

            {/* Search */}
            <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5
            py-2 w-[500px]">
                <FaSearch className="text-[#f5f5f5]" />
                <input type="text" placeholder="Search for food" className="bg-[#1f1f1f] outline-none text-[#f5f5f5]" />
            </div>
        </header>
    )
}