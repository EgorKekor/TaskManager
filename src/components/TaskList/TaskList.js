import React from "react";

export class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const list = this.props.taskList;

        return (
            <div className="TaskList">
                {list.map((task, num) => (
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