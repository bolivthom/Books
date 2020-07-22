import React from 'react';
import { firebaseAuth } from '../../environment/config';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
export default class Loading extends React.Component {

    componentDidMount() {
        firebaseAuth.onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Main' : 'SignUp')
        })
      }
      
render() {
return (
<View style={styles.container}>
<Text>Loading</Text>
<ActivityIndicator size="large" />
</View>
)}
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
}
})