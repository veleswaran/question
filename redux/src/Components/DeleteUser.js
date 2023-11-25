import axios from "axios";
import { useState } from "react";

export default function DeleteUser() {
    const [id, setId] = useState('');

    function handleClick(e) {
        e.preventDefault();
        axios.post('http://localhost:5001/delete', { id: id }) 
            .then(response => {
                console.log("Deleted successfully");    
            })
            .catch(error => {
                console.error("Error occurred while deleting:", error);
            });
    }

    return (
        <form onSubmit={handleClick}>
            <label>Id</label>
            <input type="number" onChange={(e) => { setId(e.target.value) }} value={id} />
            <input type="submit" value="Delete" />
        </form>
    );
}
