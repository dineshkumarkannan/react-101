import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("parent constructor");
    }

    componentDidMount() {
        // console.log("parent componentDidMount");
    }

    render() {
        // console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                {/* <User name="Dinesh K (fuctional component)"></User> */}
                <UserClass
                    name="First (class component)"
                    location="Chennai class"
                ></UserClass>
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name="Dinesh K (fuctional component)"></User>
//             <UserClass
//                 name="Dinesh K (class component)"
//                 location="Chennai class"
//             ></UserClass>
//         </div>
//     );
// };

export default About;
