import React from 'react';
import { firebaseAuth } from '../../environment/config';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default class Login extends React.Component {
state = { email: '', password: '', errorMessage: null }

//Firebase Login
handleLogin = () => {
  firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => this.props.navigation.navigate('Main'))
.catch(error => this.setState({ errorMessage: error.message }));
}

render() {
return (
   <View style={styles.container}>
    <View style={styles.headingSection}>
    </View>
     <Text style={styles.heading}>Login</Text>
     {this.state.errorMessage &&
      <Text style={{ color: 'red' }}>
       {this.state.errorMessage}
       </Text>}
       <TextInput
       placeholder="Email"
       autoCapitalize="none"
       style={styles.textInput}
       onChangeText={email => this.setState({ email })}
       value={this.state.email}/>
       <TextInput
       secureTextEntry
       placeholder="Password"
       autoCapitalize="none"
       style={styles.textInput}
       onChangeText={password => this.setState({ password })}
       value={this.state.password}/>
      <TouchableOpacity onPress={this.handleLogin}>
        <View style={styles.signupBtn}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
      </TouchableOpacity>
     <Button
     title="Don't have an account? Sign Up" color="#828282"
     onPress={() => this.props.navigation.navigate('SignUp')}
     />
  </View>
)}
}
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
container: {
 height: heightConst - 50,
 justifyContent: 'center',
 alignItems: 'center'
},
headingSection: {
 borderColor: 1,
 textAlign: 'center',
 alignItems: 'center',
 marginBottom: 35
},
heading: {
 color: '#828282',
 fontSize: 26,
 marginBottom: 10
}, 
textInput: {
 borderColor: 'transparent',
 backgroundColor: '#F2F2F2',
 width: 350,
 height: 45,
 borderRadius: 6,
 borderWidth: 1,
 marginTop: 8,
 color: '#204051',
 marginTop: 15,
 paddingHorizontal: 20,
},
signupBtn: {
 borderRadius: 6,
 marginBottom: 5,
 backgroundColor: '#BDBDBD',
 borderWidth: 1,
 borderColor: 'transparent',
 width: 350,
 height: 45,
 overflow: 'hidden',
 alignItems: 'center',
 justifyContent: 'center',
 marginTop: 15
},
buttonText: {
color: '#fff',
textAlign: 'center'}
})