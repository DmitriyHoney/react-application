import React from "react";

class HandleError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(err) {
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <div>Что-то пошло не так</div>;
        }
        return this.props.children
    }
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    render() {
        if(this.state.count === 5) throw new Error('More than 5 was clicked');
        return <p onClick={() => this.setState({count: this.state.count + 1})}>{this.state.count}</p>
    }
};


function Final() {
    return (
        <div>
            <Counter />
        </div>
    );
}

export default Final;


