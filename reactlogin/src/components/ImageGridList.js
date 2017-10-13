import Modal from 'react-modal';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import {withStyles} from 'material-ui/styles';
import {GridList, GridListTile} from 'material-ui/GridList';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Share from "./Share";
import NewerHomePage from "./NewerHomePage";
import * as API from '../api/API';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
        display: 'none',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.block,
        opacity: 0
    },
    gridList: {
        width: 500,
        height: 450,
    },
    subheader: {
        width: '100%',
    },
    modal: {
        display: 'none', 
        
        left: 0,
        top: 0,
        width: 200, 
        height: 100, 
        overflow: 'auto',
    }
});

const customStyles = {
	    content : {
	        top                   : '50%',
	        left                  : '50%',
	        right                 : 'auto',
	        bottom                : 'auto',
	        marginRight           : '-50%',
	        transform             : 'translate(-50%, -50%)',
	        
	    }
	};
class ImageGridList extends Component {

	  static propTypes = {
		 //   handleShare: PropTypes.func.isRequired,
	        classes: PropTypes.object.isRequired,
	        items: PropTypes.array.isRequired,
	    };

	    
	  
	  
	constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            activeItemName: '',
            activeItemId: null,
            username: '',
            username1:''
        };

        this.openModal = this.openModal.bind(this);
    //    this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleShare = this.handleShare.bind(this);
    }
	
	
	
	handleShare = (userdata) => {
        API.doShare(userdata)
            .then((status) => {
                if (status === 201) {
                    this.setState({
                        modalIsOpen: true,
                        message: "Share succesful",
                        username: userdata.username,
                        username1:userdata.username1,
                        activeItemId: userdata.activeItemId
                    //    activeItemName: userdata.activeItemNames
                    });
                //    this.props.history.push("/message");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Enter valid information. Try again..!!"
                    });
                }
            });
    };
  


    openModal(item) {
        this.setState({
            modalIsOpen: true,
            activeItemName: item,
            activeItemId: item.id,
            username:'',
            username1:''
            
        });
    }
    
    componentWillMount(item){
        this.setState({
        	modalIsOpen: false,
            activeItemName: '',
            activeItemId: null,
            username:'',
            username1:''
            
        });
    }

  /*  afterOpenModal() {
        
        this.subtitle.style.color = '#f00';
    } */

    closeModal() {
        this.setState({modalIsOpen: false});
    }
	
	
  
   

    render(){
        const classes = this.props;
        
        let buttonList = this.props.items.map( item => {
            return (<button onClick={() => this.openModal(item)}>{item}</button>)
        });

        return (
            <div className={classes.root}>
                    <GridList cellHeight={49} className={classes.gridList} cols={1}>
                        {this.props.items.map(tile => (
                        		
                            <GridListTile key={tile} cols={tile.cols || 1}>
                         
                            
                            		
                                    <div>
                                      
                                    <a href= {'http://localhost:3001/files/download/'+tile} download>{tile} </a> 
                                      
                                    <button onClick={() => this.openModal(tile)}>Share</button>


                                    <Modal
                                        isOpen={this.state.modalIsOpen}
                                        onAfterOpen={this.afterOpenModal}
                                        onRequestClose={this.closeModal}
                                        style={customStyles}
                                       // contentLabel="Example Modal"
                                        itemId={this.state.activeItemId}
                                        itemName={this.state.activeItemName}
                                    >
                                    
                                    
                                    <div id="id01" className="w3-modal">
                                    <div className="w3-modal-content">
                                    <header className="w3-container w3-teal">   
                                    
                                        <button onClick={this.closeModal}>close</button>
                                        
                                        <form>
                                        
                                          <div className="form-group">
                                            <input
                                              className="form-control"
                                              type="text"
                                              label="activeItemName"
                                              value={this.state.activeItemName}
                                              onChange={(event) => {
                                                this.setState({
                                                    activeItemName : this.state.activeItemName
                                                });
                                              }}
                                            />   
                                          </div>
                                          <div className="form-group">
                                            <input
                                              className="form-control"
                                              type="email"
                                              label="username"
                                              placeholder="Enter username"
                                              value={this.state.username}
                                              onChange={(event) => {
                                                this.setState({
                                                      username : event.target.value
                                                  });
                                              }}
                                            />   
                                          </div>
                                            <div className="form-group">
                                            <input
                                              className="form-control"
                                              type="email"
                                              label="username1"
                                              placeholder="Enter username to share"
                                              value={this.state.username1}
                                              onChange={(event) => {
                                                this.setState({
                                                      username1 : event.target.value
                                                  });
                                              }}
                                            />   
                                          </div>
                                        <div className="form-group">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => this.handleShare(this.state)}>
                                            shareNow
                                        </button>
                                    </div>
                                        

                                            
                                        </form>
                                        
                                        </header>
                                        </div>
                                        </div>
                                    </Modal>
                                    
                            </div>

                        </GridListTile>
                    ))}
                        
                </GridList>
            </div>
        );
    }

}

export default withStyles(styles)(ImageGridList);