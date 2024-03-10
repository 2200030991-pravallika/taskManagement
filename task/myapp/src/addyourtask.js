import React, { useState } from 'react';

function AddYourTask() {
  const [task, setTask] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track submission status

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle submitting the task, such as sending it to a server or updating state in the parent component.
    console.log('Task submitted:', task);
    // Clear the input field after submitting
    setTask('');
    // Set submission status to true
    setSubmitted(true);
    // Reset submission status after a delay
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Reset after 3 seconds
  };

  return (
    <div>
      <h2>Add Your Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter your task..."
        />
        <button type="submit">Add Task</button>
      </form>
      {submitted && <p>Task added successfully!</p>} {/* Display success message if submitted */}
    </div>
  );
}

export default AddYourTask;
