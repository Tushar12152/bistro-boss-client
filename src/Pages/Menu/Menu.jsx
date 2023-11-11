import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import bgImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import SoupImg from '../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";


const Menu = () => {
    const [menu]=useMenu()
    const dessert=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const offered=menu.filter(item=>item.category==='offered')
    return (
        <div className="">
            <Helmet>
                <title>bistro-boss | Menu</title>
            </Helmet>
            <Cover
             img={bgImg}
             title={'OUR MENU'}
             description={'Would you like to try a dish?'}
             ></Cover>
             <SectionTitle
              subHading={"don't miss"}
              heading={"Today's offer"}
             ></SectionTitle>

             <MenuCategory items={offered}></MenuCategory>                          
             <MenuCategory items={dessert} 
             title={'Dessert'}
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={dessertImg}
             ></MenuCategory>     



              <MenuCategory items={pizza} 
             title={'pizza'}
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={pizzaImg}
             ></MenuCategory>  


              <MenuCategory items={salad} 
             title={'salad'}
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={saladImg}
             ></MenuCategory>   


              <MenuCategory items={soup} 
             title={'soup'}
             description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
             img={SoupImg}
             ></MenuCategory>   


                           
             
             
        </div>
    );
};

export default Menu;