import React from 'react';
import { Books } from '../Books/books';
import { firebaseAuth } from '../../environment/config';
import { SafeAreaView, FlatList, View, Text, StyleSheet, Button } from 'react-native';
export default class Main extends React.Component {

constructor(props) {
        super(props);
        this.state = { currentUser: null, errorMessage: null }
 }

componentDidMount() {
  const { currentUser } = firebaseAuth;
  this.setState({ currentUser })
}

onPressButton = () => {
console.log('PressButton')
firebaseAuth.signOut()
.then(() => this.props.navigation.navigate('Login'))
.catch(error => this.setState({ errorMessage: error.message }));
}

FlatListHeader = () => {
  return (
  <View>
  <Text style={styles.heading}>Here's what's trending</Text>
  </View>
  )
};

render() {
const { currentUser } = this.state

const DATA = Books

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.title} />
);



return (
<View style={styles.container}>

      <FlatList
        numColumns={3}
        data={DATA}
        ListHeaderComponent = { this.FlatListHeader } 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
   <Text>
     Hi {currentUser && currentUser.email}!
    </Text>
 <View>
  <Button
   onPress={this.onPressButton}
   title="Sign Out"
   />
  </View>
  </View>
)}
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  justifyContent: 'center',
  paddingHorizontal: 8,
},
heading: {
  marginTop: 50,
  marginLeft: 15,
  color: '#828282',
  fontSize: 26,
  marginBottom: 10
 }, 
item: {
  backgroundColor: '#f9c2ff',
  marginVertical: 8,
  marginHorizontal: 8,
  height: 149,
  width: 94,
  flex: 1, 
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
},
title: {
  fontSize: 32,
},
})