import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


const Home = () => {
	const [tasks, setTasks] = useState([]);

	function addTasks (title) {
		const newTask = {
			id: Date.now(), 
			title,
			is_done: false
		}

		setTasks([...tasks, newTask])

	}

	function deleteTask(id) {
		setTasks(tasks.filter(tasks => tasks.id !== id))
	}

	function toggleTaskComplete(id) {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, is_done: !task.is_done } : task
			)
		);
	}
	


	return (
			<div className="container mt-4">
				<h1 className="mb-4">Gestor de tareas</h1>
				<TaskForm onAddTask={addTasks} />
				<TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleTaskComplete} />
			</div>
	);
};

export default Home;