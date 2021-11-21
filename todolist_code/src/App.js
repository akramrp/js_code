import React, {Component} from 'react';
import Plan from './Plan';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = { items : [], text : '' }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleAdd = e => {
    if(this.state.text !==''){
      const itemsArr = [...this.state.items, this.state.text];
      this.setState({ items:itemsArr, text:'' });
      console.log(itemsArr);
    }
  }

  handleDelete = id => {
    //console.log('delete', id);
    const newItems = this.state.items.filter((element, index) => {
      return index !== id;
    })
    this.setState({items:newItems, text:''});
  }

  render(){
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">Today's Plan</h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-9">
                  <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text}  onChange={this.handleChange}/>
                </div>
                <div className="col-sm-2">
                  <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
                </div>
              </div>
              <div className="container">
                <ul className="list-unstyled row m-5">
                {
                  this.state.items.map((value, index) => {
                    return <Plan value={value} key={index} id={index} sendData={this.handleDelete}/>
                  })
                }
                </ul>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default App;