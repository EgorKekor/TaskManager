import React from "react"
import { ProcessColumn } from "../ProcessColumn/ProcessColumn.js";

export class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: [
                "Сделать",
                "Готово"
            ],
            taskList1: [
                {
                    name: "task1",
                    author: "Kekos",
                    description: "Написать приложение 11111111111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
                },
                {
                    name: "task2",
                    author: "Kekos",
                    description: "Написать хорошее приложение"
                },
            ],
            taskList2: [
                {
                    name: "task3",
                    author: "Kekos",
                    description: "iiiiii"
                },
                {
                    name: "task4",
                    author: "Kekos",
                    description: "sssssss"
                },
                {
                    name: "task5",
                    author: "Kekos",
                    description: "zzzzzzzzzzzz"
                },
                {
                    name: "task4",
                    author: "Kekos",
                    description: "sssssss"
                },
            ],
            instructions: [
                "Здесь вы можете указать инструкции к выполнению",
                "aaaaa"
            ],
        };
    }

    render = () => {
        const sectionName = this.props.sectionName;
        const stages = this.state.stages;
        const tasks = [this.state.taskList1, this.state.taskList2];
        const instructions = this.state.instructions;
        return (
            <div className="Section">
                <div className="section__header">{sectionName}</div>
                <div className="section__stages">
                    {stages.map((stage, num) => (
                        <ProcessColumn taskList={tasks[num]} stageName={stage} key={num}></ProcessColumn>
                    ))}
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