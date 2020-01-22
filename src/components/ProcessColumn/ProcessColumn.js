import React from "react";
import { Stage } from "../Stage/Stage.js"
import { TaskList } from "../TaskList/TaskList.js"

export class ProcessColumn extends React.Component {
    constructor(props) {
        super(props);
    }


    render = () => {
        const taskList = this.props.taskList;
        const stageName = this.props.stageName;
        return (
            <div className="process-column process-column_left">
                <Stage name={stageName}></Stage>
                <TaskList taskList={taskList}> </TaskList>
            </div>
        );
    }
}