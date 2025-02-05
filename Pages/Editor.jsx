import React from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"


export default function Editor() {
    
    const getInitialContent = () => {
        const userData = JSON.parse(localStorage.getItem("userData"))
        const savedContent = localStorage.getItem("richText")
    
        if (savedContent && userData) {
            const isUserDataChanged = JSON.stringify(userData) !== localStorage.getItem("lastUserData")
            if (isUserDataChanged) {
                localStorage.setItem("lastUserData", JSON.stringify(userData))
                localStorage.removeItem("richText") // Reset editor if form data changed
                return formatUserData(userData);  // Use new form data
            }
            return savedContent // Use edited content if user data is unchanged
        }
    
        return userData ? formatUserData(userData) : "" // Use form data if no richText exists
    }
    
    const formatUserData = (userData) => `
        <h2>User Details</h2>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Address:</strong> ${userData.address}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Phone:</strong> ${userData.phone}</p>
    `
    

    const [content, setContent] = React.useState(getInitialContent());

    // Save the content back to localStorage when it changes
    React.useEffect(() => {
        localStorage.setItem("richText", content);
    }, [content])


    return (
        <div className="editor">
            <h2 className="editor-title">Rich Text Editor</h2>
            <ReactQuill className="editor-body" theme="snow" value={content} onChange={setContent} />
        </div>
    )
}
