import { useEffect, useState } from "react";
import axios from "axios";

export default function GetUser(){
    const [data,setData]=useState([]);
    const [delid,setDelid]= useState('');
    useEffect(()=>{
        const vel = async()=>{
            try{
                let response = await axios.get('http://localhost:5001/get')
                setData(response.data);
                console.log(response.data);
            }catch(e){
                console.error("error occur ",e);
            }
        }
        vel();
    },[data]);
    function deleteUser(userId){
   
        axios.post('http://localhost:5001/delete', {id:userId}) 
            .then(response => {
                console.log("Deleted successfully");    
            })
            .catch(error => {
                console.error("Error occurred while deleting:", error);
            });
    }

    return(
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>PHone</th>
            </thead>
            <tbody>
                {data?.result?.map((val)=>{
                  return  <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td><button value={val.id} onClick={()=>deleteUser(val.id)}>delete</button></td>
                    </tr>
                })}
            </tbody>

        </table>
    )
}