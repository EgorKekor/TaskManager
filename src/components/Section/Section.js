import React from "react"
import ReactDOM from "react-dom";

import { ProcessColumn } from "../ProcessColumn/ProcessColumn.js";
import { InputProcessColumn } from "../InputProcessColumn/InputProcessColumn.js";

export class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 2
        }
        this.data = {
            stages: [
                "Сделать",
                "Готово"
            ],
            taskList: [
                [],
                []
            ],
            instructions: [
                "Здесь вы можете указать инструкции к выполнению",
                "aaaaa"
            ],
        };
        console.log(this.data)
    }

    deleteColumn = (event) => {
        const id = event.target.getAttribute("owner_id");
        const deletePosition = id[id.length - 1];

        console.log(deletePosition);

        this.data.taskList.splice(deletePosition, 1);
        this.data.stages.splice(deletePosition, 1);

        this.setState(prevState => {
            const copyState = Object.assign({}, prevState);
            return {
                amount: prevState.amount - 1
            };
        });
    }

    moveTask = (taskId, src, dest) => {
        const stageNumber = src;
        const taskNumber = Number(taskId[1]);

        const task = this.data.taskList[stageNumber][taskNumber];
        this.data.taskList[stageNumber].slice(taskNumber, 1);
        this.data.taskList[dest].push(task);
        this.setState(prevState => {
            return {};
        });
        console.log(taskId, src, dest);
    }

    inputOk = (event, columnData) => {
        this.data.stages.push(columnData.name);
        if (columnData.instructions) {
            for (const instruction of columnData.instructions) {
                this.data.instructions.push(instruction);
            }
        }
        this.data.taskList.push(new Array);
        ReactDOM.unmountComponentAtNode(document.getElementById("input_form"));

        this.setState(prevState => {
            return {
                amount: prevState.amount + 1
            };
        });
    }

    inputCancel = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("input_form"));
    }

    addColumn = (event) => {
        ReactDOM.render(
            <InputProcessColumn
                okHandler={this.inputOk}
                cancelHandler={this.inputCancel} />,
            document.getElementById("input_form"));
    }

    addNewTask = (task, num) => {
        this.data.taskList[num].push(task);
    }

    render = () => {
        const sectionName = this.props.sectionName;
        const stages = this.data.stages;
        const tasks = this.data.taskList;
        const instructions = this.data.instructions;
        return (
            <div className="Section">
                <div className="section__header">{sectionName}</div>
                <div className="section__stages">
                    {stages.map((stage, num) => (
                        <ProcessColumn
                            length={this.data.stages.length}
                            taskMover={this.moveTask}
                            taskList={tasks[num]}
                            taskListIndex={num}
                            taskAdder={this.addNewTask}
                            stageName={stage}
                            key={num}
                            num={num}
                            id={sectionName + num}
                            deleteCallback={this.deleteColumn}
                        ></ProcessColumn>
                    ))}
                    <div className="ProcessColumnAdd">
                        <img className="process-column-add__item"
                            src="https://localhost:8080/static/add.png"
                            onClick={this.addColumn}>
                        </img>
                    </div>
                </div>
                <div className="section__footer">
                    {instructions.map((instr, num) => (
                        <li className="section__footer-item" key={num}>{instr}</li>
                    ))}
                </div>
            </div>
        );
    }
}