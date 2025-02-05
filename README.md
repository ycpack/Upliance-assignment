## Overview
This project is an implementation of the assignment that involves building a React application with navigation, form handling, and a rich text editor using React-Quill. 

## My Thougt process:

- The Header component was straightforward; I used routes for navigation as mentioned in the assignment.
- The Counter component was also simple, and I used conditional rendering for the reset button. Chose Counter's background for color animation by calculating the height which also counts for sensitivity of increment of the color.
- I created forms using controlled components to maintain a single source of truth for the state.
- I saved the user data to local storage and also used conditional rendering to notify the user about unsaved changes.
- For the text editor, I used React-Quill to implement the desired toolbar.
- In the Editor component, we first check if any editor data is available in local storage. If it's present, we display that data. If not, we check for user data; if it's found, we display it. Otherwise, we return an empty string instead of displaying a "no user data found" message. This is because rendering such a message would cause the richTextEditor key to always exist in local storage, preventing form data from being shown in the editor.
Thank you for the opportunity.



## Usage
- **Counter Page**: The homepage features a counter with background color animation.
- **User Data Form**: A form collects user data (name, address, email, phone) and saves it in local storage.
- **Rich Text Editor**: The editor is powered by React-Quill and allows the user to format text. It fetches data from local storage or displays user data.

## Approach
1. **React Router**: Used for navigating between pages.
2. **Controlled Components**: Used for form handling to ensure a single source of truth.
3. **Local Storage**: The user data is saved and fetched from local storage for persistence.
4. **Text Editor**: React-Quill is used for editing text, and the content is persisted in local storage.
5. **Conditional Rendering**: Ensured unsaved changes are not lost, and the editor shows relevant content.
6. **Deployement**: Deployed to netlify using GITHUB desktop for Continous Deployement.

