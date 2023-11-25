import { useState } from "react";
import axios from "axios";

export default function AddUser() {
    const [item, setItem] = useState({Id:'', Name: "", Phone: '', Email: '' });

    function handleClick(e) {
        e.preventDefault();
        axios.post("http://localhost:5001/insert", item)
            .then(response => {
                console.log('Data added successfully', response.data);
                setItem({ Id:'',Name: "", Phone: '', Email: '' });
            })
            .catch(error => {
                console.error('Error adding data:', error);
            });
    }

    return (
        <form onSubmit={handleClick}>
            <label>Id</label>
            <input type="number" onChange={(e) => { setItem({ ...item, Id: e.target.value }) }} value={item.Id} />
            <label>Name</label>
            <input type="text" onChange={(e) => { setItem({ ...item, Name: e.target.value }) }} value={item.Name} />
            <label>Email</label>
            <input type="email" onChange={(e) => { setItem({ ...item, Email: e.target.value }) }} value={item.Email} />
            <label>Phone</label>
            <input type="tel" onChange={(e) => { setItem({ ...item, Phone: e.target.value }) }} value={item.Phone} />
            <input type="submit" />
        </form>
    );
}
