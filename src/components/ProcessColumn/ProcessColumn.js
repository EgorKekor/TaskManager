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
        const stageNumber = id[id.length - 1];
        const length = this.props.length;
        const position = this.props.num;

        let positionClass = "";
        if (position === 0) {
            positionClass = "process-column_left"
        } else if (position === length - 1) {
            positionClass = "process-column_right"
        } else {
            positionClass = "process-column_center"
        }
        return (
            <div className={positionClass + " " + "process-column"} id={id}>
                <Stage name={stageName}
                    deleteCallback={this.props.deleteCallback}
                    ownerId={id}></Stage>
                <TaskList
                    taskMover={this.props.taskMover}
                    taskList={this.props.taskList}
                    taskListIndex={this.props.taskListIndex}
                    taskAdder={this.props.taskAdder}
                    stageNumber={stageNumber}>
                </TaskList>
            </div>
        );
    }
}