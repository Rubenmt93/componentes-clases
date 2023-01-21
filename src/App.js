
import { Component } from "react";
// class Button extends Component{
//   state={}
//   constructor(props){
//     super(props)
//     console.log('constructor',props)
//   }
//   componentDidMount(){
//     console.log('component did mount')
//   }
//   componentDidUpdate(prevProps, prevState){
//     console.log('Component did update', prevProps,prevState )
//   }
//   componentWillUnmount(prevProps, prevState){
//     console.log('Component will unmount', prevProps,prevState )

//   }
//   render() {
//     console.log('Renderizado')
//     return (
//       <button onClick={() => {this.setState({prop:1})}}>
//         Enviar
//       </button>
//     )
//   }
// }
class Input extends Component{
 
  render(){
    return(
      <input  value={this.props.value}
              onChange={ this.props.onChange}>
      </input>
    )
  }
}
class App extends Component{
  state= {
    nombre:'',
    apellido:''
  }

  updateValues = (prop,value) => {
    this.setState({ [prop]:value })
  }
  render (){
    
    return(
      <p> 
        Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
        <Input value={this.state.nombre}
               onChange= {e => this.updateValues('nombre', e.target.value)}/>
        <Input value={this.state.apellido}
               onChange= {e => this.updateValues('apellido', e.target.value)}/>
      </p>
     
      // <div> 
      //   <p>Hola Mundo</p>
      //   {this.state.valor ===3 
      //   ?<Button chanchito='feliz'/>
      //   :null}
        
      //   <button className={`${this.state.valor}`} 
      //           onClick={() => this.setState({valor:1})}>
      //     Enviar en App
      //   </button> 
      // </div>
    )
  }

}
export default App;
