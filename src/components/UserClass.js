import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy",
            },
        };
        // console.log(this.props.name + "child constructor");
    }
    async componentDidMount() {
        // console.log(this.props.name + "child componentDidMount");
        const data = await fetch(
            "https://api.github.com/users/dineshkumarkannan"
        );
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        // const { name, location } = this.props;
        console.log(this.props.name + "child render");
        return (
            <div className="user-card">
                <h2>Name : {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Contacts: @dineshk</h4>
            </div>
        );
    }
}

export default UserClass;
