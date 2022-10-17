import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import orderImage from '../assets/image1.png'
import biryaniImage from '../assets/foodImage.png'
import muttonBiryaniImage from '../assets/foodImage2.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Item extends Component {
    render(){
        return(
            <View style={{ borderColor: 'rgba(249, 202, 65, 0.25)', borderWidth: 2, borderRadius: 8, padding: 7}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Image source={biryaniImage} style={{ height: 65, width: 65, borderRadius: 12 }} />
              <View style={{ alignSelf: 'center', marginLeft: 7 }}>
                <Text style={{
                  marginBottom: 9,
                  fontWeight: '700'
                }}>{this.props.name}</Text>
                <Text
                  style={{
                    color: 'rgba(15, 25, 26, 0.5)'
                  }}
                >₹{this.props.price}</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row', backgroundColor: 'rgba(67, 97, 238, 0.1)', paddingHorizontal: 6, alignSelf: 'center', borderRadius: 9, paddingVertical: 5, marginLeft: 48, marginBottom: 22 }}>
                  <Text style={{ fontWeight: '500', fontSize: 9, color: '#4361EE' }}>Being prepared</Text>
                  <MaterialIcons name="timer" size={12} color="#4361EE" style={{ marginLeft: 4 }} />
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 68 }}>
                  <Text style={{ color: '#E63946', fontWeight: '400' }}>Qty: </Text>
                  <Text style={{ color: '#E63946', fontWeight: 'bold' }}>{this.props.nos} Nos</Text>
                </View>
              </View>
            </View>
          </View>
        );
    }
}

export default Item