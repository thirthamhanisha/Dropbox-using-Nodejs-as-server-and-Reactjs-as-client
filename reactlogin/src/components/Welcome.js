import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
//import '/App.css';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class Welcome extends Component {
	
	 handleFileUpload = (event) => {

	        const payload = new FormData();

	        payload.append('mypic', event.target.files[0]);

	        API.uploadFile(payload)
	            .then((status) => {
	                if (status === 204) {
	                    API.getImages()
	                        .then((data) => {
	                            this.setState({
	                                images: data
	                            });
	                        });
	                }
	            });

	    };
	    
	    
	    handleFileUser = (userdata) => {    	
	    	    	
	        API.doGetUser(userdata)
	            .then((status) => {
	                if (status === 201) {
	                	API.getFiles()
                        .then((data) => {
                            this.setState({
                                images: data
                            });
                        });
                }
            
	            });

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
                    <ImageGridList items={this.state.images} route={this.props.route}/>
                    <div className="form-group" >                                       
                    
                    
                </div>
                    
                    <Link to="/login">Logout</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Welcome);