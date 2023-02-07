import React from "react";

import Button from "./_Button.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.state = {
            color: this.colorCode
        };
    }

    colorRGB = [255, 255, 255]

    colorCode = "rgb(" + this.colorRGB[0] + "," +
        this.colorRGB[1] + "," + this.colorRGB[2] + ")"

    changeColor() {
        let i = 0;
        for (i; i < 3; i++) {
            this.randomColor(i);
        };
        this.colorCode = "rgb(" + this.colorRGB[0] + "," +
            this.colorRGB[1] + "," + this.colorRGB[2] + ")";
        this.setState({ color: this.colorCode });
    }

    randomColor(i) {
        const colorNumber = Math.floor(Math.random() * 1000);
        if (colorNumber > 255) {
            this.randomColor(i);
        } else {
            this.colorRGB[i] = colorNumber;
        };
    }

    render() {
        document.body.style.backgroundColor = this.state.color;
        return (
            <div>
                <Button fire={this.changeColor} />
            </div>
        )
    }
}