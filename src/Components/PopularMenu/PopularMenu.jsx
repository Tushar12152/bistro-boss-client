// import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {

    const [menu]=useMenu()
    const popular=menu.filter(item=>item.category==='popular')



// const [menu,setMenu]=useState([])

// useEffect(()=>{
//     fetch('menu.json')
//     .then(res=>res.json())
//     .then(data=>{
//         const popuerItems=data.filter(item=>item.category==='popular')
//         setMenu(popuerItems)})
// },[])

// console.log(menu);

    return (
        <section className="mb-12">
             <SectionTitle
               subHading={'---Check it out---'}
               heading={'FROM OUR MENU'}
             > </SectionTitle>
 

          <div className="grid md:grid-cols-2 gap-10">
             {
                 popular.map(item=><MenuItem key={item._id} 
                    item={item}
                 ></MenuItem>)
             }
          </div>
         <div className="text-center my-10"> <button className="btn btn-outline border-0 border-b-4 ">View full menu</button></div>

        </section>
    );
};

export default PopularMenu;