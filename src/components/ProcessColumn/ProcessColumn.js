import React from "react";
import { Stage } from "../Stage/Stage.js"
import { TaskList } from "../TaskList/TaskList.js"

export class ProcessColumn extends React.Component {
    constructor(props) {
        super(props);
    }


    render = () => {
        const stageName = this.props.stageName;
        const id = this.props.id;
        return (
            <div className="process-column process-column_left" id={id}>
                <Stage name={stageName}
                    deleteCallback={this.props.deleteCallback}
                    ownerId={id}></Stage>
                <TaskList
                    taskList={this.props.taskList}
                    taskListIndex={this.props.taskListIndex}
                    taskAdder={this.props.taskAdder}>
                </TaskList>
            </div>
        );
    }
}