import React, {Component} from 'react'
import {View, StyleSheet,Text} from 'react-native'
import Logo from '../components/Logo'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/index'
import SignupForm from '../components/SignupForm'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    _SignupClicked = (userData) =>{
        console.warn('clicked ......... >')
        this.props.onSignup(userData,this.props.navigation)
    }

    render(){
        console.warn('userName',this.props.userName)
        return(
            <View style={styles.container}>
                <SignupForm clicked={(userData)=>this._SignupClicked(userData)}/>
                <View style={styles.signupTextCount}>
                    <Text style={styles.signupText}> Already have an account?</Text>
                    <Text 
                        style={styles.signupButton}
                        onPress={()=>this.props.navigation.navigate('Main')}
                        > Sign in </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#455a64'
    },
    signupTextCount:{
        flexGrow: 1,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center'
    },
    signupText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16
    },
    signupButton:{
        fontSize:18,
        fontWeight:'500',
        color:'#ffffff'
    }
  });

  const mapStateToProps = state => {
    console.log(state);
    return {loading: state.Auth.loading, userName: state.Auth.ownerName}
  };
  const mapDispatchToProps = dispatch => {
    return {
      onSignup: (userData,navigation) => dispatch(actionCreators.onSignup(userData,navigation))
    };
  }

  export default connect (mapStateToProps,mapDispatchToProps)(Signup)

