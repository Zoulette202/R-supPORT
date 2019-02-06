import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';


export default class ServiceScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const items = [
      { name: 'Loss', code: '#c0392b' , team1:"Fnatic", team2:"Cloud9", score1:1, score2:2, icon1:0 , icon2 :1 ,choice1:true, choice2:false, type : "loss"},
      { name: 'Win', code: '#2ecc71' , team1:"MYM", team2:"SKT1", score1:2, score2:0,  icon1:2 , icon2 :6 ,choice1:true, choice2:false,type : "win"},
      { name: 'Loss', code: '#c0392b' , team1:"OG", team2:"Team WE",score1:2,score2:1, icon1:4 , icon2 :5 ,choice1:false, choice2:true, type : "loss"},
      { name: 'AMETHYST', code: '#9b59b6', team1:"Fnatic" ,team2:"Cloud9",score1:1,score2:2,  icon1:0, icon2 :1 ,choice1:false, choice2:false, type : "loss"},
      { name: 'WET ASPHALT', code: '#34495e', team1:"Fnatic",team2:"Cloud9",score1:1,score2:2, icon1:0 , icon2 :1 ,choice1:false, choice2:false,  type : "loss"},
      { name: 'GREEN SEA', code: '#16a085', team1:"Fnatic",team2:"Cloud9", score1:0, score2:0, icon1:0 , icon2 :1 ,choice1:false, choice2:false,  type : 'undetermined'  },
      { name: '1:05:45', code: '#2980b9' , team1:"Edward Gaming",team2:"Cloud9", score1:0, score2:0,  icon1:3 , icon2 :1 ,choice1:false, choice2:false, type : "undetermined" },
      { name: '1:55:45', code: '#2980b9', team1:"Fnatic"  , team2:"SKT1", score1:0, score2:0,  icon1:0 , icon2 :6 ,choice1:false, choice2:false, type : "undetermined"},
      { name: '2:35:45', code: '#2980b9' , team1:"OG", team2:"Edward Gaming", score1:0, score2:0,  icon1:4, icon2 :3 ,choice1:false, choice2:false, type : "undetermined"},
      { name: '3:05:45', code: '#2980b9' , team1:"MYM" , team2:"Team WE", score1:0, score2:0,  icon1:2 , icon2 :5 ,choice1:false, choice2:false, type : "undetermined"},
      { name: 'Tomorow', code: '#2980b9' , team1:"SKT1", team2:"Cloud9", score1:0, score2:0,  icon1:6 , icon2 :1 , choice1:false, choice2:false, type : "undetermined" },
      { name: 'Sunday', code: '#2980b9' , team1:"Fnatic", team2:"OG", score1:0, score2:0,  icon1:0 , icon2 :4 ,choice1:false, choice2:false,  type : "undetermined" },
      { name: '', code: '#2980b9' , team1:"Fnatic", team2:"Cloud9", type : "loss" },
      { name: '', code: '#2980b9' , team1:"Fnatic" , team2:"Cloud9", type : "loss"},
      { name: 'CONCRETE', code: '#95a5a6' , match:"Fnatic vs Cloud9" },
      { name: 'ORANGE', code: '#f39c12' , match:"Fnatic vs Cloud9" },
      { name: 'PUMPKIN', code: '#d35400' , match:"Fnatic vs Cloud9" },
      { name: 'POMEGRANATE', code: '#c0392b' , match:"Fnatic vs Cloud9" },
      { name: 'SILVER', code: '#bdc3c7', match:"Fnatic vs Cloud9"  },
      { name: 'ASBESTOS', code: '#7f8c8d' , match:"Fnatic vs Cloud9" },
    ];

    const hotels = [
        {name: "Hotel Nice Riviera", code: "#2980b9", latitude:43.700008, longitude :7.2695535 ,stars: 4,price:64, description:"Relaxed hotel offering warm rooms, minibars, plus free Wi-Fi, an indoor pool & a cafe bar.",icon:require('../assets/icons/hotel.png')},
        {name: "Hotel Vendome", code: "#2980b9", latitude:43.7009352, longitude :7.2713842 ,stars: 4, price:62,description:"Warm rooms with Wi-Fi included in 19th-century mansions offering cocktail bar & bright lounge.",icon:require('../assets/icons/hotel.png')},
        {name: "Hotel Radisson Blu", code: "#2980b9", latitude:43.6846665, longitude :7.23506193 ,stars: 4,price:121, description:"Modern residence with free Wi-Fi, breakfast, plenty of dining options, plus a pool & sauna.",icon:require('../assets/icons/hotel.png')},
        {name: "Hotel Alba", code: "#2980b9", latitude:43.7038916, longitude :7.2656768 ,stars: 4,price:76, description:"Sophisticated hotel in former palace offering restaurant and bar with sea views and terraces.",icon:require('../assets/icons/hotel.png')},
        {name: "Hotel Nice Exelsior", code: "#2980b9", latitude:43.7033392,longitude :7.2623368 ,stars: 4,price:58, description:"Colorful rooms with murals and free Wi-Fi in a 19th-century hotel offering a garden bar.",icon:require('../assets/icons/hotel.png')},

    ]
    
    return (
        <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
        <ScrollView>
        <View style={{flex:0.2, justifyContent: 'center',alignItems: 'center', marginTop:20}}>
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"Home/Hotels"}</Text>
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


        <View style={{flex:0.2, justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"Restaurants"}</Text>
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
                            data: items
                            }
                        ]}
                        horizontal={true}
                        style={styles.gridView}
                        renderItem={({ item, section, index }) => (
                            <TouchableOpacity onPress={ () => {this.navigateDetail(item)}}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.team1 + " vs " + item.team2}</Text>
                            <Text style={styles.itemCode}>{item.name}</Text>
                            </View>
                            </TouchableOpacity>
                        )}
                    />
        </View>
        <View style={{flex:0.2, justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{fontSize: 20,color: '#000',fontWeight: '600'}}>{"Bars"}</Text>
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
                            data: items
                            }
                        ]}
                        horizontal={true}
                        style={styles.gridView}
                        renderItem={({ item, section, index }) => (
                            <TouchableOpacity onPress={ () => {this.navigateDetail(item)}}>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.team1 + " vs " + item.team2}</Text>
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