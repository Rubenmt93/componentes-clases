
import { Component } from "react";
class Button extends Component{
render() {
  console.log('banana')
  return (
    <button>
      Enviar
    </button>
  )
}
}
class App extends Component{
  state={
    valor:3
  }
  render (){
    console.log(this.state);
    return(
      <div> 
        <p>Hola Mundo</p>
        <Button/>
        <button className={`${this.state.valor}`} 
                onClick={() => this.setState({valor:1})}>
          Enviar en App
        </button> 
      </div>
    )
  }

}
export default App;
