import React, { Component } from 'react'

class Controller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }
    startHandler(event) {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true,
            reset: false
        })

        this.props.start()
    }

    pauseHandler(event) {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true
        })
        this.props.pause()
    }
    lapHandler(event) {
        this.props.lap()
    }
    resetHandler(event) {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }
    getController() {
        let output = null;
        if (this.state.start && !this.state.reset) {
            output = (
                <div>
                    <button
                        onClick={event => this.startHandler()}
                        className="btn btn-success btn-lg px-5 ml-5">
                        Start
                    </button>
                </div>
            )
        } else if (this.state.pause && this.state.lap) {
            output = (<div className="my-5">
                <button
                    onClick={event => this.pauseHandler()}
                    className="btn btn-primary btn-lg px-5">
                    Pause
                </button>
                <button
                    onClick={event => this.lapHandler()}
                    className="btn btn-warning btn-lg px-5 ml-5">
                    Lap
                </button>
            </div>)
        } else if (this.state.start && this.state.reset) {
            output = (<div className="my-5">
                <button
                    onClick={event => this.startHandler()}
                    className="btn btn-success btn-lg px-5 ml-5">
                    Start
                    </button>
                <button
                    onClick={event => this.resetHandler()}
                    className="btn btn-danger btn-lg px-5 ml-5">
                    Reset
                </button>
            </div>)
        }

        return output;
    }

    render() {
        return this.getController();

    }

}

export default Controller;