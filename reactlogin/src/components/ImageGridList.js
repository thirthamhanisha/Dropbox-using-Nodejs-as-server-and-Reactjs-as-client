import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {GridList, GridListTile} from 'material-ui/GridList';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    subheader: {
        width: '100%',
    },
});

class ImageGridList extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        items: PropTypes.array.isRequired
    };

    render(){
        const classes = this.props;

        return (
            <div className={classes.root}>
                    <GridList cellHeight={25} className={classes.gridList} cols={1}>
                        {this.props.items.map(tile => (
                            <GridListTile key={tile} cols={tile.cols || 1}>
                            
                            <div> {tile} </div>
                          
                            </GridListTile>
                        ))}
                    </GridList>
            </div>
        );
    }


}


export default withStyles(styles)(ImageGridList);