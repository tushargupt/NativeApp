import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import orderImage from './assets/image1.png'
import biryaniImage from './assets/foodImage.png'
import muttonBiryaniImage from './assets/foodImage2.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Component } from 'react';
import Item from './components/Item';
//export default function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: false,

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 22 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 28
          }}>
            <View style={{
              marginLeft: -80,
              borderRadius: 8,
              elevation: 4,
              shadowColor: '#000',
              backgroundColor: '#fff',
              shadowOffset: {
                width: 0,
                height: 0.5
              },
              shadowOpacity: 0.5,
              padding: 8,
              justifyContent: 'center'
            }}>
              <AntDesign name="arrowleft" size={20} color="black" />
            </View>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>Order details</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'rgba(67, 97, 238, 0.1)',
              padding: 12,
              borderColor: '#4361EE',
              borderRadius: 9,
              borderStyle: 'dashed',
              borderWidth: 1,
            }}
          >
            <Text style={{ color: '#4361EE', fontWeight: '700' }}>Note: </Text>
            <Text>Your order for the past 24 hrs</Text>
          </View>
          <View style={{ marginVertical: 30 }}>
            <TouchableOpacity
              onPress={() => this.setState({ screen: true })}
            >
              <View style={{ borderWidth: 1, borderColor: '#E63946', borderRadius: 8, flexDirection: 'row' }}>
                <Image source={orderImage} style={{ resizeMode: 'contain', height: 60, width: 60, borderRadius: 12, margin: 5 }} />
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{
                      fontSize: 17,
                      fontWeight: '500',
                      marginBottom: 4
                    }}>Order 1</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 13, color: '#4361EE' }}>Total: </Text>
                      <Text style={{ fontSize: 13, fontWeight: '700', color: '#4361EE' }}>₹500</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 75, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 23 }}>
                      <Text style={{ fontSize: 14, fontWeight: '700' }}>ID: </Text>
                      <Text style={{ fontSize: 14, fontWeight: '700', color: '#E63946' }}>1234567890</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'rgba(67, 97, 238, 0.1)', paddingHorizontal: 6, alignSelf: 'center', borderRadius: 9, paddingVertical: 5, marginLeft: 10 }}>
                      <Text style={{ fontWeight: '500', fontSize: 9, color: '#4361EE' }}>Being prepared</Text>
                      <MaterialIcons name="timer" size={12} color="#4361EE" style={{ marginLeft: 4 }} />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ screen: true })}
            >

              <View style={{ borderWidth: 1, borderColor: '#E63946', borderRadius: 8, flexDirection: 'row', marginVertical: 16 }}>
                <Image source={orderImage} style={{ resizeMode: 'contain', height: 60, width: 60, borderRadius: 12, margin: 5 }} />
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{
                      fontSize: 17,
                      fontWeight: '500',
                      marginBottom: 4
                    }}>Order 2</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 13, color: '#4361EE' }}>Total: </Text>
                      <Text style={{ fontSize: 13, fontWeight: '700', color: '#4361EE' }}>₹200</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 75, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 23 }}>
                      <Text style={{ fontSize: 14, fontWeight: '700' }}>ID: </Text>
                      <Text style={{ fontSize: 14, fontWeight: '700', color: '#E63946' }}>1234567890</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#EAEAEA', paddingHorizontal: 6, alignSelf: 'center', borderRadius: 9, paddingVertical: 4, marginLeft: 40, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 0.5 }, shadowOpacity: 0.5 }}>
                      <Text style={{ fontWeight: '500', fontSize: 9, color: '#2FBF71' }}>Served</Text>
                      <AntDesign name="checkcircleo" size={12} color="#27BF71" style={{ marginLeft: 4 }} />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ screen: true })}
            >
              <View style={{ borderWidth: 1, borderColor: '#E63946', borderRadius: 8, flexDirection: 'row' }}>
                <Image source={orderImage} style={{ resizeMode: 'contain', height: 60, width: 60, borderRadius: 12, margin: 5 }} />
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ alignSelf: 'center' }}>
                    <Text style={{
                      fontSize: 17,
                      fontWeight: '500',
                      marginBottom: 4
                    }}>Order 3</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 13, color: '#4361EE' }}>Total: </Text>
                      <Text style={{ fontSize: 13, fontWeight: '700', color: '#4361EE' }}>₹200</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 75, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 23 }}>
                      <Text style={{ fontSize: 14, fontWeight: '700' }}>ID: </Text>
                      <Text style={{ fontSize: 14, fontWeight: '700', color: '#E63946' }}>1234567890</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: '#FDFDBD', paddingHorizontal: 6, alignSelf: 'center', borderRadius: 9, paddingVertical: 4, marginLeft: -16 }}>
                      <Text style={{ fontWeight: '500', fontSize: 9, color: '#F9CA41' }}>Confirmation Pending</Text>
                      <MaterialCommunityIcons name="timer-sand-empty" size={12} color="#F9CA41" style={{ marginLeft: 4 }} />
                    </View>
                  </View>
                </View>
              </View>

            </TouchableOpacity>
          </View>
        </View>
        <Modal
          visible={this.state.screen}
        >
          <ScrollView>
            <View>
              <View style={{ padding: 10 }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 28
                }}>
                  <View style={{
                    marginLeft: -80,
                    borderRadius: 8,
                    elevation: 4,
                    shadowColor: '#000',
                    backgroundColor: '#fff',
                    shadowOffset: {
                      width: 0,
                      height: 0.5
                    },
                    shadowOpacity: 0.5,
                    padding: 8,
                    justifyContent: 'center'
                  }}>
                    <TouchableOpacity onPress={() => this.setState({ screen: false })}>
                      <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                    }}>Order 1</Text>
                    <Text style={{ color: '#4361EE', fontWeight: '500' }}>
                      Order ID: 123456789
                    </Text>
                  </View>
                </View>
                <View style={{ borderRadius: 12, backgroundColor: '#fff', shadowColor: '#000', elevation: 4, shadowOffset: { width: 0, height: 0.5 }, padding: 14 }}>
                  <View style={{ marginTop: 10, width: '99%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                    <View>
                      <Text style={{ color: 'rgba(15, 25, 26, 0.5)', fontWeight: '500', fontSize: 16 }}>Total items</Text>
                      <Text style={{ color: 'rgba(15, 25, 26, 0.5)', fontWeight: '500', fontSize: 16, marginVertical: 4 }}>Total amount</Text>
                      <Text style={{ color: 'rgba(15, 25, 26, 0.5)', fontWeight: '500', fontSize: 16 }}>Discount</Text>
                    </View>
                    <View>
                      <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 25 }}>4</Text>
                      <Text style={{ fontWeight: '500', fontSize: 16, marginVertical: 4 }}>₹500</Text>
                      <Text style={{ fontWeight: '500', fontSize: 16, color: '#2FBF71', marginLeft: 6 }}>-₹50</Text>
                    </View>
                  </View>
                  <View style={{ borderWidth: 1, borderColor: 'rgba(15, 25, 26, 0.1)', borderStyle: 'dashed', marginVertical: 15 }}></View>
                  <View style={{ width: '99%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>

                    <Text style={{ color: '#E63946', fontWeight: '500', fontSize: 16 }}>GRAND TOTAL</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginLeft: 25, color: '#4361EE' }}>₹500</Text>
                  </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: 'rgba(15, 25, 26, 0.1)', borderStyle: 'dashed', marginVertical: 15, width: 900, alignSelf: 'center' }}></View>


                <Item nos={2} name="Chicken Biryani" price={170} />

                <View style={{ borderColor: '#D90429', borderWidth: 2, borderRadius: 8, padding: 7, marginVertical: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Image source={muttonBiryaniImage} style={{ height: 65, width: 65, borderRadius: 12 }} />
                    <View style={{ alignSelf: 'center', marginLeft: 7 }}>
                      <Text style={{
                        marginBottom: 9,
                        fontWeight: '700'
                      }}>Mutton Biryani</Text>
                      <Text
                        style={{
                          color: 'rgba(15, 25, 26, 0.5)'
                        }}
                      >₹210</Text>
                    </View>
                    <View>
                      <View style={{ flexDirection: 'row', backgroundColor: '#FAD4D4', paddingHorizontal: 6, alignSelf: 'center', borderRadius: 9, paddingVertical: 4, marginLeft: 58, marginBottom: 22 }}>
                        <Text style={{ fontWeight: '500', fontSize: 9, color: '#D90429' }}>Item Unavailable</Text>
                      </View>
                      <View style={{ marginLeft: 110 }}>
                        <AntDesign name="arrowright" size={24} color="#D90429" />
                      </View>
                    </View>
                  </View>
                </View>

                <Item nos={2} name="Chicken Biryani" price={170} />

                <View style={{ marginTop: 10 }}>
                  <Item nos={1} name="Mutton Biryani" price={210} />
                </View>
                <TouchableOpacity style={{ backgroundColor: '#E63946', alignItems: 'center', padding: 15, borderRadius: 12, marginTop: 10 }}
                  onPress={() => this.setState({ screen: false })}
                >
                  <Text style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}>Go home</Text>
                </TouchableOpacity>

              </View>
            </View>
          </ScrollView>
        </Modal>

      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
