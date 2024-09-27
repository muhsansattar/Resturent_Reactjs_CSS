import React, { useState } from "react";
import Menu from './menuApi';
import MenuCard from "./MenuCard";
import Cart from "./cart";
import Nav from './Navbar';
// here I am gonna making first functional components
// here i am gonna selecting the each catagory from the list
const uniqueList=[
    ...new Set(Menu.map((curElem)=>{
   return curElem.category;
}),
),
"All",];
console.log(uniqueList)
const Resturent = () => {
    // here i have used  usestate hook
    const [menuData,setMenuData]=useState(Menu);
    const [menuList, setMenuList]=useState(uniqueList);
    const [cart, setCart]=useState([]);

   //here i am gonna making an add to cart function
   const addToCart=(item)=>{
      setCart((prevCart)=>[...prevCart,item]);
   }

    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        if(category==="All"){
            setMenuData(Menu)
            return
           }
        setMenuData(updatedList);
    }
    return (
        <>
        <header>
            <Nav filterItem={filterItem} setMenuData={setMenuData} menuList={menuList}></Nav>
        <Cart cart={cart}></Cart>
        </header>
        <MenuCard menuData={menuData} addToCart={addToCart}/>
        </>
    );
};

export default Resturent;