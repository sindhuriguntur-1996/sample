import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component{
     constructor(props){
         super(props);
         this.state={username:'',password:''};
         this.handlesubmit=this.handlesubmit.bind(this);
     }
     handlesubmit(e){
        {
           // if (this.state.username==null?)
        }
     }
     render(){
         return(
    <div className="wrap" >
    <form className='box-layout' onClick={this.handlesubmit}>
       <p className='elements-position inputs-field-signIn'> Sign-In with</p>
        <div className='button-seperation'>
            <button className='button-facebook inputs-field'>facebook</button>
            <button className='button-google inputs-field'>Google</button>
        </div>
        <div>
        <p className='inputs-field'>UserName</p>
        <input className='inputs' type ='text' value={this.state.username}></input> 
        <p className='inputs-field'>Password <Link to="/" >forgot?</Link></p>
        <input className='inputs' type='password'></input>    
        </div>
        <div>
            <input className='button-signIn' type="button" value="Sign In"/>
        </div>
        <div>
            <p className='elements-position inputs-field'>Not a member <Link to="/" >sign up now</Link></p>
        </div>
        </form>
    </div>
         )}
}

export default Login;