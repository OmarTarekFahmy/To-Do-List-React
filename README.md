# React JS To-Do List

**Overview**

This project is a simple **To-Do List** application built with React. It allows users to manage their tasks efficiently by adding, deleting, and rearranging tasks. The app is interactive and demonstrates core React concepts such as state management and event handling.

## Features

- **Add Tasks**: Users can add new tasks via an input field.
- **Delete Tasks**: Tasks can be removed by clicking the delete button.
- **Reorder Tasks**: Move tasks up or down using respective buttons.
- **Keyboard Support**: Add tasks by pressing `Enter` in the input field.
- **Dynamic UI**: Smooth animations for moving and removing tasks.

## Tech Stack

- **Frontend**: React (Functional Components, Hooks)
- **CSS**: For styling and animations
- **JavaScript**: Core logic

## Setup Instructions

1. **Clone the Repository**:
   *git clone https://github.com/OmarTarekFahmy/To-Do-List-React*

2. **Navigate to the Project Directory**:
   *cd my-react-app*

3. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   *npm install*


4. **Start the Development Server**:
   *npm start*


5. **View the App**:
   Open your browser and go to `http://localhost:5173`.


## How to Use

1. **Add a Task**:

   - Enter the task name in the input field.
   - Press the "Add New Task" button or hit `Enter` to add the task to the list.

2. **Delete a Task**:

   - Click the red `X` button next to a task to remove it from the list.

3. **Reorder Tasks**:

   - Use the `⬇` button to move a task down.
   - Use the `⬆` button to move a task up.

## File Structure

```
my-react-app/
├── public/          # Public assets (e.g., index.html)
├── src/             # Source code
  ├── assets/      
  ├── App.jsx        # Main application logic
  ├── main.jsx       # Entry point
  ├── index.css 
  └── ToDoList.jsx   # Main To-Do List component 
```


## Key Concepts Used

1. **React State Management**:

   - State is used to store and update the list of tasks.

2. **Event Handling**:

   - `onClick` and `onKeyDown` events handle user interactions.

3. **Array Manipulation**:

   - Tasks are managed in an array, with methods like `filter` and `map` for efficient updates.
  
4. **Persistent Local Storage**:

   - Local Storage is used to allow tasks to persist on refreshing or reopening webpage.

## Future Improvements

- Add task prioritization or categorization.
- Enhance the UI with additional animations and themes.



