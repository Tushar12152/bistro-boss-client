import { MdDelete, MdUpdate } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu,,refetch] = useMenu();
  const axiosSecure=useAxiosSecure()


  const handleDellete=(item)=>{
    //   console.log(item._id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
         

        const res=await axiosSecure.delete(`/menu/${item._id}`)
            if(res.data.deletedCount>0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: `${item.name} has been deleted.`,
                    icon: "success"
                  });
            }

        







        }
      });
  }


  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHading="Hurry Up"
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item-Image</th>
                <th>Item Name</th>
                <th className="text-right">Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <td >{item?.name}</td>
                  <td className="text-right">$ {item?.price}</td>
                  <th>
                   <Link to={`/dashboard/updateItem/${item._id}`}>
                   <button  className="btn bg-[#D1A055] text-lg">
                      <MdUpdate></MdUpdate>
                    </button>
                   </Link>
                  </th>
                  <th>
                    <button onClick={()=>handleDellete(item)} className="btn bg-[#D1A055] text-lg text-red-700">
                      <MdDelete></MdDelete>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
