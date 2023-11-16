import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
const axiosSecure=useAxiosSecure()
    const {refetch, data:users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
         const res=await axiosSecure.get('/users')
          
          return res.data 
      }})




   const handleDeleteUser=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          

         axiosSecure.delete(`/users/${id}`)
         .then(res=>{

              if(res.data.deletedCount>0){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "his person is deleted .",
                    icon: "success"
                  });

                 
              }
         })

        }
      });
   }




   const handleMakeAdmin=user=>{
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
            Swal.fire(`${user.name} is an admin now`)
            refetch()
        }
      })
   }

    return (
        <div>
           <div className="flex justify-evenly my-4"> 
             <h2 className="text-3xl "> All Users</h2>
             <h2 className="text-3xl "> Total Users: {users.length}</h2>  
           </div>


           <div className="overflow-x-auto">
  <table className="table table-zebra w-full mx-auto ">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { users.map((user,idx)=><tr key={user?._id}>
        <th>{idx+1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
           {
            user.role==='admin'? 'Admin':
             <button onClick={()=>handleMakeAdmin(user)} className="btn bg-[#D1A055]"><FaUsers className=" text-white text-2xl"></FaUsers></button>
           }
        </td>
        <td>
             <button onClick={()=>handleDeleteUser(user?._id)}  className="text-2xl text-red-600"><MdDelete></MdDelete></button>
        </td>
      </tr>)}
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;