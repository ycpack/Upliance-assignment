import React from "react"
import { nanoid } from "nanoid" 


export default function Form() {
    const [formData, setFormData] = React.useState({
        id: "",
        name: "",
        address: "",
        email: "",
        phone: "",
    })
    const [isDirty, setIsDirty] = React.useState(false) // tracking unsaved changes

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setIsDirty(true) 
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        const userId = nanoid() 
        const userData = { ...formData, id: userId }

        // Save to local storage
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.removeItem("richText")
        alert(`Data saved successfully! Your ID is: ${userId}`)
        setIsDirty(false)
    }
    

    return (
        <div className="user-form">
            <h2>User Data Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">
                   Save
                </button>
            </form>
            {isDirty && <h3 className="unsaved-changes">Unsaved changes detected</h3>}
        </div>
    )
}

