import React from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"


export default function Editor() {
    // Get user data from localStorage
    const getInitialContent = () => {
        const savedContent = localStorage.getItem("richText");
        if (savedContent) {
            return savedContent; // If richText exists, use it
        }

        // Fallback to userData if richText is not available
        const userData = JSON.parse(localStorage.getItem("userData"));
        if (!userData) return ""; // If no user data found, return empty string

        // Format userData into HTML
        return `
            <h2>User Details</h2>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Address:</strong> ${userData.address}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
        `;
    };

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
