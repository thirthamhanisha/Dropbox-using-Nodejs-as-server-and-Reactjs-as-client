import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import { Route} from 'react-router-dom';
import PropTypes from 'prop-types';
//import '/App.css';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";
import UserProfile from "./userprofile";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class Welcome extends Component {
	
	 handleFileUpload = (event) => {

	        const payload = new FormData();
	     //   var username = this.props.username;
	        payload.append( 'mypic',event.target.files[0]);
	        payload.append( 'username', this.props.username);
	               
	    
	        API.uploadFile(payload)
	            .then((status) => {
	                if (status === 201) {
	                	API.doGetUser(status.username)
	     	           // .then((status) => {
	     	            //    if (status === 201) {
	     	               // 	API.getFiles()
	                             .then((data) => {
	                                 this.setState({
	                                     images: data,
	                                     username: status.username
	                                 });
	                             })
	                    /*API.getImages()
	                        .then((data) => {
	                            this.setState({
	                                images: data
	                            });
	                        });*/
	                }
	            });

	    };
	    
	    
	    handleFileUser = (userdata) => {    	
	    	    	
	        API.doGetUser(userdata)
	           // .then((status) => {
	            //    if (status === 201) {
	               // 	API.getFiles()
                        .then((data) => {
                            this.setState({
                                images: data
                            });
                        })
                };
            
	            

    
	    
	    
	    
	   

    static propTypes = {
        username: PropTypes.string.isRequired
    };

    constructor(props)
    {
    super(props);
    this.handleFileUser = this.handleFileUser.bind(this);
    
    
    this.state = {
        username : '',
        	images: []
    };
    }
   componentWillMount(){
        this.setState({
            username : this.props.username       
            
            
        });
        /*API.getImages()
        .then((data) => {
            console.log(data);
            this.setState({
                images: data
            });
        });*/
       /* API.doGetUser(this.state)
        // .then((status) => {
         //    if (status === 201) {
            // 	API.getFiles()
                 .then((data) => {
                     this.setState({
                         images: data
                     });
                 })*/
        this.handleFileUser(this.state);
        //document.title = `Welcome, ${this.state.username} !!`;
     /*   API.doGetUser(this.state)
        .then((status) => {
            if (status === 201) {
                this.setState({
                    isLoggedIn: true,
                    message: "Welcome to my App..!!",
                    
                });
                this.props.history.push("/welcome");
            } else if (status === 401) {
                this.setState({
                    isLoggedIn: false,
                    message: "Wrong username or password. Try again..!!"
                });
            }
        }); */
    } 
componentWillReceiveProps(nextProps){
	if(this.props.username !== nextProps.username){
		this.setState({
			username: this.props.username
		})
	}
};
    componentDidMount(){
    //	username: this.props.username;
        document.title = `Welcome, ${this.state.username} !!`;
        this.handleFileUser(this.state);
        /*API.getImages()
        .then((data) => {
            console.log(data);
            this.setState({
                images: data
            });
        });*/
    /*    API.doGetUser(this.state)
        .then((status) => {
           console.log(this.state);
        	if (status === 201) {
                this.setState({
                    isLoggedIn: true,
                    message: "Welcome to my App..!!",
                    
                });
                this.props.history.push("/welcome");
            } else if (status === 401) {
                this.setState({
                    isLoggedIn: false,
                    message: "Wrong username or password. Try again..!!"
                });
            }
        }); */
    }

    render(){
        return(
        		
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <div className="alert alert-warning" role="alert">
                        {this.state.username}, welcome to my App..!!
                        <Link to = "/userprofile">     Click here for User profile</Link>
                    </div>                        
                        
                        <Typography
                        align={'center'}
                        type="display3"
                    >
                        DropBox
                    </Typography>
                    <TextField
                        className={'fileupload'}
                        type="file"
                        name="mypic"
                        onChange={this.handleFileUpload}
                    />
                    <ImageGridList items={this.state.images} route={this.props.route} username={this.state.username}/>
                    <div className="form-group" >                                       
                    
                    
                </div>
                <Route exact path="/userprofile" render={() => (
                        <div>
                            <UserProfile handleSignUp={this.handleSignUp}/>
                            
                        </div>
                    )}/> 
                    <Link to="/login">Logout</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Welcome);