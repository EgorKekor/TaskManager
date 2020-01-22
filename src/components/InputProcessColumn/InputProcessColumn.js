import React from "react"

export class InputProcessColumn extends React.Component {
    constructor(props) {
        super(props);
        this.minInstructions = 1;
        this.instructionInputed = false;
        this.instructions = new Array(this.minInstructions);
        this.name = "default_name"
        this.state = { instructionAmount: this.minInstructions }
    }

    addInstruction = () => {
        this.instructions.push("");
        this.setState(prevState => (
            { instructionAmount: prevState.instructionAmount + 1 }
        ));
    }

    saveInstruction = (event) => {
        if (event.target.value !== "") {
            this.instructionInputed = true;
        } 
        const position = event.target.getAttribute("position");
        this.instructions[position] = event.target.value;
    }

    saveName = (event) => {
        this.name = event.target.value;
    }


    okClick = (event) => {
        if (this.instructionInputed !== true) {
            this.instructions = null;
        }
        this.props.okHandler(event, {
            name: this.name,
            instructions: this.instructions
        });
    }


    render = () => {
        const instrInputs = new Array;
        for (let i = 0; i < this.state.instructionAmount; i++) {
            instrInputs.push(
                <textarea
                    position={i}
                    key={i}
                    onBlur={this.saveInstruction}
                    className="InputProcessColumn__instruction"
                    placeholder="Инструкция"></textarea>
            );
        }
        return (
            <div className="InputProcessColumn">
                <textarea className="InputProcessColumn__name"
                    placeholder="Название шага"
                    onBlur={this.saveName}></textarea>
                {instrInputs}

                <img className="InputProcessColumn-instruction__add"
                    onClick={this.addInstruction}
                    src="https://localhost:8080/static/add.png"
                ></img>
                <div className="InputProcessColumn__button-container">
                    <div className="InputProcessColumn__button"
                        onClick={this.okClick}>Ок</div>
                    <div className="InputProcessColumn__button"
                        onClick={this.props.cancelHandler}>Отмена</div>
                </div>
            </div>
        );
    }
}