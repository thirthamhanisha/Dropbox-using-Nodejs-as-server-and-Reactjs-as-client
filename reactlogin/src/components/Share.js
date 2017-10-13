import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';
class Share extends Component {

	static propTypes = {
        handleShare: PropTypes.func.isRequired
    };
    state = {
        username: '',
        username1:'',
        folder: '',
              
    };

    componentWillMount(){
        this.setState({
            username: '',
            username1:'',
            folder: '',
            
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <form>
                        <div className="form-group">
                            <h1>Group</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                label="Username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                        </div>
                            <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                label="Username1"
                                placeholder="Enter Username1"
                                value={this.state.username1}
                                onChange={(event) => {
                                    this.setState({
                                        username1: event.target.value
                                    });
                                }}
                            />
                        </div>
                            <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="folder"
                                placeholder="Enter folder"
                                value={this.state.folder}
                                onChange={(event) => {
                                    this.setState({
                                        folder: event.target.value
                                    });
                                }}
                            />
                        </div>
                        
                        <div className="form-group">
                            <button
                                className="btn btn-primary"
                                type="button"
                            //    onClick={() => this.props.handleShare(this.state)}
                                	>
                                share
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default Share;