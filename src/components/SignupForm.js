import React, {Component} from 'react'
import {View, Text, TextInput,StyleSheet,ImageBackground,Image,ImageStore,TouchableOpacity} from 'react-native'
import { ImagePicker } from 'expo';

//exp start --localhost --android

class SignupForm extends Component{

    state = {
        image: null,
        imgData:null,
        email:'',
        password:'',
        userName:'',
        firstName:'',
        lastName:''
      };

      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
          ImageStore.getBase64ForTag(result.uri,data=>{
              this.setState({
                  imgData:data
              })
            console.log('bae64:=>',data)
          },err=>{
            console.warn("getBase64ForTag: ", e)
          })
        }
      };


      _emailChangedHandler=(e)=>{
        this.setState({
            email:e.nativeEvent.text
        })
      }

      _passwordChangedHandler=(e)=>{
        this.setState({
            password:e.nativeEvent.text
        })
      }

      _userNameChangedHandler=(e)=>{
        this.setState({
            userName:e.nativeEvent.text
        })
      }

      _firstNameChangedHandler=(e)=>{
        this.setState({
            firstName:e.nativeEvent.text
        })
      }

      _secondNameChangedHandler=(e)=>{
        this.setState({
            lastName:e.nativeEvent.text
        })
      }

      signupClickedHandler = ()=>{
          console.warn('signup clicked')
          var fd = new FormData();

            if(this.state.imgData){
            fd.append('imgData', this.state.imgData);
            }
            fd.append('op', 'base64');
            fd.append('first', this.state.firstName);
            fd.append('last', this.state.lastName);
            fd.append('username', this.state.userName);
            fd.append('email', this.state.email);
            fd.append('password', this.state.password);
            fd.append('isOnline', true);

            this.props.clicked(fd)
      }



    render(){
        console.log(this.state.email,this.state.password,this.state.userName,this.state.firstName)
        let { image } = this.state;
        return(
            <View style={styles.container}>

                    <ImageBackground                     
                        // source={{uri:'https://i.imgur.com/NkfWoHB.jpg'}}
                        source={{uri:image}}
                        style={styles.image}
                        >
                        <TouchableOpacity
                             onPress={this._pickImage}
                            // onPress={ () => { alert("handler here") }}
                        >
                            <Image
                                source={require('../../assets/images/camera.png')}
                                style={styles.camera}
                            />
                        </TouchableOpacity>
                        </ImageBackground>

                <TextInput
                 placeholder='Email'
                 placeholderTextColor='#ffffff'
                 style={styles.inputBox}
                 onChange={this._emailChangedHandler}
                 value={this.state.email}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TextInput
                 placeholder='Password'
                 placeholderTextColor='#ffffff'
                 secureTextEntry={true}
                 style={styles.inputBox}
                 onChange={this._passwordChangedHandler}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TextInput
                 placeholder='User name'
                 placeholderTextColor='#ffffff'
                 style={styles.inputBox}
                 onChange={this._userNameChangedHandler}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <View style={styles.fullName}>
                    <TextInput
                        placeholder='First name'
                        placeholderTextColor='#ffffff'
                        style={styles.fullNameInputBox}
                        onChange={this._firstNameChangedHandler}
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                    <TextInput
                        placeholder='Last name'
                        placeholderTextColor='#ffffff'
                        style={styles.fullNameInputBox}
                        onChange={this._secondNameChangedHandler}
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.signupClickedHandler}>
                    <Text style={styles.buttonText}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    image:{
        height: 100,
        justifyContent:'flex-end',
        width: 100,
      },
      camera:{
          width:30,
          height:30,
          alignSelf: 'flex-end'
      },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:10,
        fontSize:16,
        color:'#ffffff'
    },
    fullName:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    fullNameInputBox:{
        width:150,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        marginHorizontal:3,
        marginVertical:10,
        fontSize:16,
        color:'#ffffff'
    },
    button:{
        width:300,
        backgroundColor:'#1c313a',
        borderRadius:25,
        paddingVertical:12,
        marginVertical:10,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
})

export default SignupForm