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
import StarRating from 'react-native-star-rating';
import openMap from 'react-native-open-maps';



export default class DetailServiceScreen extends React.Component{
    static navigationOptions = {
        title:'Service detail'
       }
       goToLocation( lat, long, name) {
        openMap({ latitude: lat, longitude: long, query:name });
      }
    
    render(){
       const { navigation } = this.props
        const item = navigation.getParam('service')
        return(
            <View style={{ flex:1,flexDirection: 'column' }}>
           

            <View style={{flex:0.4, justifyContent: 'center',alignItems: 'center', flexDirection:'column', backgroundColor: '#636e72'}}>
            
                <View  >
                    <Image source={item.icon} style={{width:100,height:100,borderWidth : 3, borderColor:"green", borderRadius:50}}/>
                </View>
                <View>
                    <Text style={{fontSize: 16,color: '#fff',fontWeight: '600'}}>{item.title}</Text>
                </View>
                
            </View>

            <ScrollView style={{flex:0.7,flexDirection:'column'}}>
                <View style={{flex:0.1, justifyContent: 'center',alignItems: 'center'}}> 
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"Information"}</Text>
                </View>
                <View style={{flex:0.5}}>
                    <View style={{ marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Name"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{item.name}</Text>  
                    </View>
                    <View style={{ marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Price"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{item.price +"€/night"}</Text>  
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Description"}</Text>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '300'}}>{item.description}</Text>  
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize: 16,color: 'grey',fontWeight: '600'}}>{"Rate"}</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={item.stars}
                            starSize={20}
                            containerStyle={{width:200}}
                        />
                    </View>
                    
                   
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:10}}> 
                        <TouchableOpacity style={{width:100 , borderRadius:10, borderColor: 'black', borderWidth:1, alignItems:"center",backgroundColor:"#636e72"}} onPress={() =>this.goToLocation(item.latitude, item.longitude, item.name)}>
                            <Text style={{color:'white', alignItems:"center", fontSize: 20}}>
                                {"See its location"}
                            </Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>
           
        </View>
        )
    }

    navigateDetail = (item) =>{
        this.props.navigation.push('MatchDetail', {item : item})
      }
}
