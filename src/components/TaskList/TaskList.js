import React from "react";
import ReactDOM from "react-dom";

import { InputTask } from "../InputTask/InputTask.js";


export class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.moveTimer = null;
        this.isMoving = false;
    }

    _getColumnNum = (x, y) => {
        const allColumns = document.querySelectorAll(".process-column");

        for (const column of allColumns) {
            const rect = column.getBoundingClientRect();
            if ((x > rect.x) && (x < rect.x + rect.width) &&
                (y > rect.y) && (y < rect.y + rect.height)) {
                    return column.id[column.id.length - 1];
                }
        }

        return null;
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

    taskDown = (event) => {
        const task = event.currentTarget;
        this.moveTimer = setTimeout(this.move, 500, task, event.pageX, event.pageY);
    }

    move = (task, x, y) => {
        this.isMoving = true;
        const startStage = this._getColumnNum(x, y);

        task.style.position = "absolute";
        task.style.zIndex = 1000;
        task.style.width = "200px";

        task.style.left = x - task.offsetWidth / 2 + 'px';
        task.style.top = y - task.offsetHeight / 2 + 'px';


        document.onmousemove = (ev) => {
            const elements = document.elementsFromPoint(ev.pageX, ev.pageY);
            task.style.left = ev.pageX - task.offsetWidth / 2 + 'px';
            task.style.top = ev.pageY - task.offsetHeight / 2 + 'px';
        }

        task.onmouseup = (ev) => {
            const finalStage = this._getColumnNum(ev.pageX, ev.pageY);
            document.onmousemove = null;
            task.onmouseup = null;
            this.props.taskMover(task.id.slice(0, 2), startStage, finalStage);
            task.remove();
        }
    }

    taskUp = (event) => {
        if (this.isMoving) {
            this.isMoving = false;
            return;
        }
        clearTimeout(this.moveTimer);
        alert("Тут должно быть описание задачи, но его нет(");
    }


    render = () => {
        const list = this.props.taskList;
        const stageNumber = this.props.stageNumber;
        console.log(list)

        return (
            <div className="TaskList">
                <img className="TaskList__add"
                    src="https://localhost:8080/static/add.png"
                    onClick={this.addTask}>
                </img>
                {list && list.map((task, num) => (
                    <div className="Task task_theme_1"
                        key={num}
                        id={stageNumber + num + "_task"}
                        onMouseDown={this.taskDown}
                        onMouseUp={this.taskUp}
                    >
                        <div className="task__name">{task.name}</div>
                        <div className="task__description">{task.description}</div>
                        <div className="task__author">Author:{task.author}</div>
                    </div>
                ))}
            </div>
        );
    }
}