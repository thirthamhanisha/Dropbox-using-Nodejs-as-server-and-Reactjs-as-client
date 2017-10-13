import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Share from "./Share";
import ImageGridList from "./ImageGridList";

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: ''
    };
    
    
    
    
    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        username: userdata.username
                    });
                    this.props.history.push("/welcome");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };
    

    
    handleSignUp = (userdata) => {
        API.doSignup(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        isLoggedIn: true,
                        message: "Registration successful!! please login",
                        username: userdata.username
                    });
                    this.props.history.push("/login");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Enter valid information. Try again..!!"
                    });
                }
            });
    };
    

    render() {
        return (
            <div className="container-fluid">
            <div className="col-md-8">
              <img src="./../public/dropbox-logo1.jpeg"/>
           </div>
                <Route exact path="/" render={() => (             		
                		               	            		
                		<div>             		    
                		   
                    
                    <Login handleSubmit={this.handleSubmit}/>
                    <Message message={this.state.message}/>
                        <Message message="Welcome to DropBox !!"/>                 
                            
                        
                                              
                            <button className="btn btn-success" onClick={() => {
                                this.props.history.push("/signup");
                            }}>
                             New users? SignUp
                            </button>
                    </div>
                		
                		
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <Login handleSubmit={this.handleSubmit}/>
                        <Message message={this.state.message}/>
                    </div>
                )}/>
               <Route exact path="/imagegridlist" render={() => (
                        <div>
                            <ImageGridList handleShare={this.handleShare}/>
                            <Message message={this.state.message} />
                        </div>
                    )}/> 
                <Route exact path="/signup" render={() => (
                        <div>
                            <Signup handleSignUp={this.handleSignUp}/>
                            <Message message={this.state.message}/>
                        </div>
                    )}/>
                <Route exact path="/welcome" render={() => (
                    <Welcome username={this.state.username} route={this.props.history.push}/>
                )}/>
            </div>
        );
    }
}

export default withRouter(NewerHomePage);