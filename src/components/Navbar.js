import React from "react";

// here i am gonna making navbar function so wheneven there is added any new catagery it is automatically added in the nav list
 const Nav=({filterItem, menuList})=>{
    return <>
     <nav className="navbar">
            <div className="btn-group">
                {menuList.map((curElem)=>{
                    return (
                    <button className="btn-group-item" onClick={()=> filterItem(curElem)}>{curElem}</button>
                    )
                })}
            </div>
        </nav>
    </> 
 }

 export default Nav;
