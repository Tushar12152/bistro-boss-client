import { MdDelete, MdUpdate } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const ManageItems = () => {

    const [menu]=useMenu()
    return (
        <div>
             <SectionTitle heading='Manage All Items' subHading='Hurry Up'></SectionTitle>



             <div>
             <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Item-Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {menu.map((item,idx)=><tr key={item._id}>
        <th>
          {idx+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
            
            </div>
          </div>
        </td>
        <td>
         {item?.name}
        </td>
        <td>$ {item?.price}</td>
        <th>
          <button className="btn bg-[#D1A055] text-lg"><MdUpdate></MdUpdate></button>
        </th>
        <th>
          <button className="btn bg-[#D1A055] text-lg text-red-700"><MdDelete></MdDelete></button>
        </th>
      </tr>)}
      
      
     
      
    </tbody>
    
   
    
  </table>
</div>
             </div>
        </div>

        


    );
};

export default ManageItems;