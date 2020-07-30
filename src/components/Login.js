import React from 'react';
//import {Link} from 'react-router-dom';
import database from '../firebase/firebase';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={input1:'',input2:'',input3:'',input4:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount() {
          database.ref().on('value', snap => console.log('from db', snap.val()));
      }

    handleChange(e){ 
           this.setState({[e.target.name]:e.target.value})      
        };

    handleSubmit(e){
            e.preventDefault();
            database.ref('inputs').push({
                input1:this.state.input1,
                input2:this.state.input2,
                input3:this.state.input3,
                input4:this.state.input4

           // }).then(() =>{
                
           // }).catch(()=>{
           //     console.log('error')
            })
               
    }

    render(){
    return(
       <div>
           <form>
               <input type='text' name='input1' value={this.state.input1} onChange={this.handleChange}/>
               <input type='text' name='input2' value={this.state.input2} onChange={this.handleChange}/>
               <input type='text' name='input3' value={this.state.input3} onChange={this.handleChange}/>
               <input type='text' name='input4' value={this.state.input4} onChange={this.handleChange}/>
               
               <input type='submit' onClick={this.handleSubmit}/>
           </form>
       </div>
    )
}}


export default Login;