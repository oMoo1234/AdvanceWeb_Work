import React, { Component } from 'react';
import './App.css'
export class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list:[]

    }
  }

updateInput(key,value){
  this.setState({
    [key]: value
  });

}

addItem(){
  const newItem={
    id: 1+ Math.random(),
    value: this.state.newItem.slice()
  };
  const list = [...this.state.list];
  list.push(newItem);
  this.setState({
    list,
    newItem:""
  });
}

deleteItem(id){
  const list = [...this.state.list];
  const updatedList = list.filter(item => item.id !== id);
  this.setState({list: updatedList});

}
  render() {
    return <div className="App">
      <h1> To Do List </h1>
      <br></br>
      <div className='addItem'>
        Add Item here
        <br></br>
        <input className='input'
        type="text"
        placeholder='Type here'
        value={this.state.newItem}
        onChange={e=> this.updateInput("newItem", e.target.value)}
        >
        </input>
        <button className='button' onClick={() => this.addItem() }> Add </button>
        <br/>
        <ol>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>
                {item.value}
                <button className='deleteButton' onClick={() => this.deleteItem(item.id)}>
                 X
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>;
  }
}

export default App;

