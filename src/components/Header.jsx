import React,{useState} from 'react';
import { Badge ,} from 'antd';
import { ShoppingCartOutlined,DeleteOutlined,CloseOutlined,MenuOutlined } from '@ant-design/icons';


const Header = () =>{

  const [menuOpen,setMenuopen]=useState(false)
  const [cartOpen,setCartOpen] =useState(false)
  const [item,setItem]=useState([])

  return (

  <div className="w-screen h-[100px] header bg-white">
    <div className='w-4/5 border-b-2 h-full mx-auto flex items-center justify-between '>
      <div className='flex items-center flex-wrap gap-5'>
      <div className='lg:hidden   text-left text-3xl ' onClick={()=>setMenuopen(true)}>
      <MenuOutlined />
        </div>
      <h1 className='text-3xl font-bold  '>sneakers</h1>
      <ul className={`${menuOpen?"open":"close"} flex lg:flex-row flex-col w-max  items-center leading-[60px] lg:leading-[100px] menu-link `}>
        <div onClick={()=>setMenuopen(false)} className='lg:hidden w-full bg-white text-left pl-5 text-3xl py-5'>
        <CloseOutlined />
        </div>
        <li  className='lg:text-gray-300 inline-block font-bold lg:font-normal leading-[60px] lg:leading-[100px] text-xl hover:text-black lg:border-b-2 pl-5 lg:pl-0 cursor-pointer hover:border-b-orange-400 w-[250px] lg:w-[100px]  text-left lg:text-center'>
          Collections
        </li>
        <li  className='lg:text-gray-300 inline-block font-bold lg:font-normal leading-[60px] lg:leading-[100px] text-xl hover:text-black lg:border-b-2 pl-5 lg:pl-0 cursor-pointer hover:border-b-orange-400 w-[250px] lg:w-[100px]  text-left lg:text-center'>
          Men
        </li>
        <li  className='lg:text-gray-300 inline-block font-bold lg:font-normal leading-[60px] lg:leading-[100px] text-xl hover:text-black lg:border-b-2 pl-5 lg:pl-0 cursor-pointer hover:border-b-orange-400 w-[250px] lg:w-[100px]  text-left lg:text-center'>
          Women
        </li>
        <li  className='lg:text-gray-300 inline-block font-bold lg:font-normal leading-[60px] lg:leading-[100px] text-xl hover:text-black lg:border-b-2 pl-5 lg:pl-0 cursor-pointer hover:border-b-orange-400 w-[250px] lg:w-[100px]  text-left lg:text-center'>
          About
        </li>
        <li  className='lg:text-gray-300 inline-block font-bold lg:font-normal leading-[60px] lg:leading-[100px] text-xl hover:text-black lg:border-b-2 pl-5 lg:pl-0 cursor-pointer hover:border-b-orange-400 w-[250px] lg:w-[100px]  text-left lg:text-center'>
          Contact
        </li>
      </ul>
      </div>
      <div className='flex flex-wrap gap-5'>
        <span className='relative'>
      <Badge dot count={5}  onClick={()=>setCartOpen(!cartOpen)}>
        <ShoppingCartOutlined className="text-2xl cursor-pointer" />
      </Badge>

   {cartOpen &&  <div className='w-[300px] rounded shadow-xl top-[60px] -right-[60px] min-h-[200px] absolute '>
          <h2 className='p-4 border-b-2 border-b-gray-200 font-bold'>Cart</h2>
          {item.lengt>0 ?
          (  
            <>
          <div className='flex justify-between my-3 mb-5 p-2'>
       
          
          <img src="https://joeschmoe.io/api/v1/random" className='w-[50px] h-[50px] rounded-lg' />
            <div className='grow ml-2'>
            <p>Fall limited edition sneakers</p>
            <span>$100 x 3 <span className="font-bold">$300 </span></span>
            </div>
            <DeleteOutlined className='text-2xl pr-3 text-gray-400 hover:text-red-400' />
          </div>
          <div className='w-[90%] mb-4 text-center h-[50px] cursor-pointer leading-[50px] rounded-lg text-white mx-auto  bg-orange-400'>
          Checkout
        </div>
        </>
           ):(
            <h1 className='text-center leading-[150px]'>Your cart is empty!</h1>
           )
          }
          
      </div>
}


      </span>
    <div className='w-[35px] h-[35px] rounded-full border-2  border-orange-400'>
      <img src="https://joeschmoe.io/api/v1/random" className="w-full h-full overflow-hidden" />
      </div>
      </div>
    </div>
  </div>

)
  }
export default Header;