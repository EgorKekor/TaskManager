import React from "react";
import ReactDOM from "react-dom";

import { InputTask } from "../InputTask/InputTask.js";


export class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    addTask = (event) => {
        ReactDOM.render(
            <InputTask
                okHandler={this.inputOk}
                cancelHandler={this.inputCancel} />,
            document.getElementById("input_form"));
    }

    inputOk = (event, taskData) => {
        taskData.author = "kekor";
        this.props.taskAdder(taskData, this.props.taskListIndex);

        ReactDOM.unmountComponentAtNode(document.getElementById("input_form"));
        this.setState(prevState => ({}));
    }

    inputCancel = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("input_form"));
    }

    render = () => {
        const list = this.props.taskList;
        console.log(list)

        return (
            <div className="TaskList">
                <img className="TaskList__add"
                    src="https://localhost:8080/static/add.png"
                    onClick={this.addTask}>
                </img>
                {list && list.map((task, num) => (
                    <div className="Task task_theme_1" key={num}>
                        <div className="task__name">{task.name}</div>
                        <div className="task__description">{task.description}</div>
                        <div className="task__author">Author:{task.author}</div>
                    </div>
                ))}
            </div>
        );
    }
}