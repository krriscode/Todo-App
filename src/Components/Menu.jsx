import React from "react";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: false,
        };

        this.LoginOnClick = () => {
            this.setState({ signIn: true });
        };
    }

    render() {
        // if (this.state.signIn) {
        //     return (
        //         <div className="container">
        //             {/* <SignIn /> */}
        //             Welcome Home User!
        //         </div>
        //     );
        // }

        return (
            <div className='container'>
                { this.state.signIn ?  "Welcome Home User!" :
                <button onClick={this.LoginOnClick}>Login</button>
                }
                {/* <Login /> */}
            </div>
        );
    }
}

export default Menu;