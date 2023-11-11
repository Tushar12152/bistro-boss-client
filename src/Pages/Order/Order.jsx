import { useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";
import useMenu from "../../Hooks/useMenu";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categories=['salad','pizza','soup','dessert','drinks']
   const {category}=useParams()
   const initialIndex=categories.indexOf(category)
   

   const [tabIndex,setTabIndex]=useState(initialIndex)

const [menu]=useMenu()
const dessert=menu.filter(item=>item.category==='dessert')
const soup=menu.filter(item=>item.category==='soup')
const salad=menu.filter(item=>item.category==='salad')
const pizza=menu.filter(item=>item.category==='pizza')
const drinks=menu.filter(item=>item.category==='drinks')



  return (
    <div >

<Helmet>
                <title>bistro-boss | orderFood</title>
            </Helmet>
      <Cover
        img={orderCover}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      ></Cover>

<Tabs className='my-16' defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
          }
      </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
          }
      </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
          }
      </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
          }
      </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
          }
      </div>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Order;
