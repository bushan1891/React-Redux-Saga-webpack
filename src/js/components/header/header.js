import React ,{Component} from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import { createAction } from 'redux-actions';
import { Router, Route, Link } from 'react-router'
import {HEADER_LOAD} from './types';
class Header extends React.Component {

    constructor(props){
        super(props);
        // set you state for Component
    }

    componentWillMount(){
        this.props.headerLoad();
    }


    render(){
        return(
            <nav className={styles.nav_container}>
                <ul className={styles.nav}>
                    <li className={styles.nav_item}>Home</li>
                    <li className={styles.nav_item}>
                    <Link to='/test/2'>Go to nested Route</Link>	
                    </li>
                </ul>   
            </nav>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        headerLoad :()=>{dispatch(createAction(HEADER_LOAD)())}
    }
}


function mapStateToProps(state){
    return{
        test:state.test
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);