import React from "react"

export class InputTask extends React.Component {
    constructor(props) {
        super(props);
    }

    saveName = (event) => {
        this.name = event.target.value;
    }

    saveDescription = (event) => {
        this.description = event.target.value;
    }

    okClick = (event) => {
        this.props.okHandler(event, {
            name: this.name,
            description: this.description
        });
    }

    render = () => {


        return (
            <div className="InputTask">
                <textarea className="InputTask__name"
                    placeholder="Название Задачи"
                    onBlur={this.saveName}></textarea>
                <textarea className="InputTask__description"
                    placeholder="Описание задачи"
                    onBlur={this.saveDescription}></textarea>
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