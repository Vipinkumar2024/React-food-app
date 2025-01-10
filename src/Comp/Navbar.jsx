
import { useDispatch,useSelector } from 'react-redux'
import { setSearch } from '../Redux/Slice/SearchSlice';


const Navbar = () => {
  
  const dispatch=useDispatch();
  const search = useSelector((state) => state.search.search);
  return (
    <nav className='flex flex-col  md:flex-row w-full md:w-[30%,70%]   justify-center md:justify-between   shadow-xl   border-2   mb-10 sticky top-0 bg-green-300'>
        <div className=' text-sm items-center justify-center mx-10 flex-row md:flex-col flex md:text-lg  font-sans text-blue-600  '>
<h3>{new Date().toUTCString().slice(0,16)}</h3>
<h1>Flavoro Food</h1>
        </div>
        <div  className=' flex justify-center items-center   mx-10 '>
<input type='search'   value={search}  onChange={(e)=>dispatch(setSearch(e.target.value))}

placeholder='search'
 name='search here' id='' autoComplete='off' className='p-2  m-2 rounded-lg outline-none border-2 border-gray-300 hover:text-orange-300 cursor-pointer' />
        </div>
    </nav>
  )
}
 
export default Navbar