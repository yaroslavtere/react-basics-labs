const AddTaskForm = (props) => {

  return (
    <div>
        <form onSubmit={props.submit}>
            <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
    </label>

    <label>
        Priority:
        <select className="prioritySelect" name="priority" defaultValue="Medium" onChange={(event) => props.change(event)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
    </label>

    <button className="submitButton" type="submit">
        Submit
    </button>

        </form>
    </div>
  )
};

export default AddTaskForm;
