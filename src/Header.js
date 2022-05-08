import './Header.css';
import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            render: false,
            value: ""
        };
        this.alertHi = this.alertHi.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    alertHi() {
        this.setState({ render: !this.state.render });
    }
    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    handleClick() {
        console.log('Click happened');

    }
    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
      }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div>;
        return (
            <div id='city'>
                <input id='cityinput' value={this.state.value} onChange={this.handleChange} placeholder='Enter City Name..'></input>
                <button id='fetchbtn' onClick={this.alertHi}>Submit</button>
                {this.state.render && <div className="App">
                    <h1> Fetch data from an api in react </h1> {
                        items.map((item) => (
                            <ol key={item.id} >
                                User_Name: {item.username},
                                Full_Name: {item.name},
                                User_Email: {item.email}
                            </ol>
                        ))
                    }
                </div>}
            </div>
        )
    }
}

export default Header






















// import React from "react";
// import './App.css';
// class App extends React.Component {

//     // Constructor
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: [],
//             DataisLoaded: false
//         };
//     }

//     // ComponentDidMount is used to
//     // execute the code
//     componentDidMount() {
//         fetch(
//             "https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }
//     render() {
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Pleses wait some time.... </h1> </div>;

//         return (
//             <div className="App">
//                 <h1> Fetch data from an api in react </h1> {
//                     items.map((item) => (
//                         <ol key={item.id} >
//                             User_Name: {item.username},
//                             Full_Name: {item.name},
//                             User_Email: {item.email}
//                         </ol>
//                     ))
//                 }
//             </div>
//         );
//     }
// }

// export default App;
