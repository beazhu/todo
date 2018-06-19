import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";

firebase.initializeApp(config);
class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      input: "",
      tasks: []
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  submit(event) {
    console.log(this.state.input);
    var tasks = this.state.tasks;
    tasks.push(this.state.input);
    this.setState({tasks: tasks, 
      input: ""});

  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submit}>Submit</button>

        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
}

class Tasks extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      tasks: this.props.tasks
    }

    this.done = this.done.bind(this);
    this.rem = this.rem.bind(this);
  }

  done(index) {



    var doneTask = document.getElementById(index).innerHTML;
    document.getElementById(index).innerHTML = "<strike>"+doneTask+"</strike>";
     console.log(doneTask.innerHTML);
    console.log("ind",index);
  }

  rem(index) {
    document.getElementById(index).innerHTML="";
    console.log("rem",index);
  }
  render() {
    return(
        <div id="taskArea">
          {this.state.tasks.map((task, index) => 
           <div id={task}> <span id={index}>{task}  </span> <button onClick={(e) => this.done(index,e)}> done</button> 
           <button onClick={(e) => this.rem(task,e)}> remove</button> </div>)}
        </div>
      );
  }
}
export default App;
