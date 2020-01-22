import React from "react"
import { Section } from "../Section/Section.js";


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionsList: [
                "Проектирование",
            ]
        }
    }

    render = () => {
        const sections = this.state.sectionsList;
        return (
            <div className="Board">
                {sections.map((section, num) => (
                    <Section sectionName={section} key={num}></Section>
                ))}
            </div>
        )
    }
}