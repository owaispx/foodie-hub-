import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Createitem.css'

const Createitem = () => {
    const [formdata, setFormdata] = useState({
        title: "",
        description: "",
        price: ""
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formdataToSend = new FormData();
            formdataToSend.append('title', formdata.title);
            formdataToSend.append('description', formdata.description);
            formdataToSend.append('price', formdata.price);
            formdataToSend.append('image', image);

            const response = await axios.post('http://localhost:2000/admin/create', formdataToSend);
            if (response.data.message === 'Item saved') {
                toast.success("Item saved");
                setFormdata({ title: "", description: "", price: "" });
                setImage(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="Acontainer">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            
            <div className="formcontainer">
            <div className="formtitle">
                <h1>Add new item</h1>
            </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formdata.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                    />
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formdata.description}
                        onChange={handleChange}
                        placeholder="Enter description"
                    />
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={formdata.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                    />
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Createitem;
