import React from "react";

export class Stage extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        const name = this.props.name;
        return (
            <div className="stage">
                <div className="stage__name">{name}</div>
                <div className="stage__close-container">
                    <img
                        className="stage__close"
                        src="https://localhost:8080/static/close.png"
                        onClick={this.props.deleteCallback}
                        owner_id={this.props.ownerId}
                        >
                    </img>
                </div>
            </div>
        );
    }
}