
import { Component } from "react";

class App extends Component{
  state={
    valor:3
  }
  render (){
    console.log(this.state);
    return(
      <div> 
        <p>Hola Mundo</p>
        <button className={`${this.state.valor}`} 
                onClick={() => this.setState({valor:1})}>
          Enviar  
        </button> 
      </div>
    )
  }

}
export default App;
