import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';


export default class ProfilScreen extends React.Component{
    static navigationOptions = {
        title:'Profile'
       }
    
    
    
    render(){
        const hotels = [
            {name: "Hotel Nice Riviera", code: "#2980b9", latitude:43.700008, longitude :7.2695535 ,stars: 4,price:64, description:"Relaxed hotel offering warm rooms, minibars, plus free Wi-Fi, an indoor pool & a cafe bar.",icon:require('../assets/icons/hotel.png')},
            {name: "Hotel Vendome", code: "#2980b9", latitude:43.7009352, longitude :7.2713842 ,stars: 4, price:62,description:"Warm rooms with Wi-Fi included in 19th-century mansions offering cocktail bar & bright lounge.",icon:require('../assets/icons/hotel.png')},
            {name: "Hotel Radisson Blu", code: "#2980b9", latitude:43.6846665, longitude :7.23506193 ,stars: 4,price:121, description:"Modern residence with free Wi-Fi, breakfast, plenty of dining options, plus a pool & sauna.",icon:require('../assets/icons/hotel.png')},
            {name: "Hotel Alba", code: "#2980b9", latitude:43.7038916, longitude :7.2656768 ,stars: 4,price:76, description:"Sophisticated hotel in former palace offering restaurant and bar with sea views and terraces.",icon:require('../assets/icons/hotel.png')},
            {name: "Hotel Nice Exelsior", code: "#2980b9", latitude:43.7033392,longitude :7.2623368 ,stars: 4,price:58, description:"Colorful rooms with murals and free Wi-Fi in a 19th-century hotel offering a garden bar.",icon:require('../assets/icons/hotel.png')},
    
        ]
        return(
            <View style={{ flex:1,flexDirection: 'column' }}>
           

            <View style={{flex:0.4, justifyContent: 'center',alignItems: 'center', flexDirection:'column', backgroundColor: '#636e72'}}>
            
                <View  >
                    <Image source={require('../assets/icons/user.png')} style={{width:100,height:100,borderWidth : 3, borderColor:"green", borderRadius:50}}/>
                </View>
                <View>
                    <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{'My Profil name'}</Text>
                </View>
                
            </View>

            <ScrollView style={{flex:0.7,flexDirection:'column'}}>
                <View style={{flex:0.1, justifyContent: 'center',alignItems: 'center'}}> 
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"My information"}</Text>
                </View>
                <View style={{flex:0.5, borderBottomWidth:2}}>
                    <View style={{ marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Name"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{"Your Name"}</Text>  
                    </View>
                    <View style={{ marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Email"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{"Your Email"}</Text>  
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Phone"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{"Your phone number"}</Text>  
                    </View>
                    <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:10}}> 
                        <TouchableOpacity style={{width:100 , borderRadius:10, borderColor: 'black', borderWidth:1, alignItems:"center",backgroundColor:"#636e72"}}>
                            <Text style={{color:'white', alignItems:"center", fontSize: 20}}>
                                {"Modify"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:0.2, justifyContent: 'center',alignItems: 'center', marginTop:20}}>
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"Your last booking"}</Text>
                </View>
        <View style={{ borderBottomWidth:2, flex:0.3}}>
        <SectionGrid
                        itemDimension={90}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        sections={[
                            {
                            title: 'Home/Hotels',
                            data: hotels
                            }
                        ]}
                        horizontal={true}
                        style={styles.gridView}
                        renderItem={({ item, section, index }) => (
                            <TouchableOpacity onPress={ () => {this.navigateDetail(item)}}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Image source={item.icon} />
                            <Text style={styles.itemName}>{"Hotel"}</Text>
                            <Text style={styles.itemCode}>{item.name}</Text>
                            </View>
                            </TouchableOpacity>
                        )}
                    />
        </View>
            </ScrollView>
           
        </View>
        )
    }

    navigateDetail = (item) =>{
        this.props.navigation.push('Detail', {service : item})
      }
}

const styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    sectionHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#636e72',
      color: 'white',
      padding: 10,
    },
  });