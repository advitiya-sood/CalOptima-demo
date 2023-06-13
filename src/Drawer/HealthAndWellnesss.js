
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    Linking,
  } from "react-native";
  import React from "react";
  import {Styles} from '../Styles/Styles'
  import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
  import { Image } from "react-native-elements";
  

const HealthAndWellnesss = ({navigation}) => {
  // fxn to open dial screen on android/ios.
  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:${1888587808}";
    } else {
      number = "tel:${1888587808}";
    }
    Linking.openURL(number);
  };


  // function to open location on google maps 
  const openGps = (lat, lng) => {
    var scheme = Platform.OS === "ios" ? "maps:" : "geo:";
    var url = scheme + `${lat},${lng}`;
    Linking.openURL(url);
  };

  const handleAssessment = () => {
    navigation.navigate("Bmi");
  };
  return (
    <SafeAreaView style={Styles.healthContainer}>
      <View>
        <Text style={Styles.headingTitle}>Health and Wellness</Text>
        <Text style={{ marginBottom: 10,fontSize: 16,padding: 10,justifyContent:'center',fontWeight:500 }}>
          CalOptima is here to support you to take an active role in your
          health. Complete the Health Assessment to help you understand how you
          can improve your health and quality of life. Call CalOptima's Health
          Management department at 1-714-246-8895 for more information about our
          health and wellness programs and services. TDD/TTY users can call
          1-800-735-2929. We are here to help you Monday through Friday from 8
          a.m to 5 p.m. We have staff who speak your language.
        </Text>
      </View>
      <View style={Styles.centerBody}>
        <Text
          style={{
            color: "#fff",
            marginBottom: 5,
            marginLeft: 50,
            fontSize: 18,
          }}
        >
          It's time to take your Health Assessment!
        </Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 200,
            marginTop: 10,
            marginLeft: 110,
            backgroundColor: "#54B7B2",
          }}
        >
          <Text
            style={{
              color: "#fff",
              marginLeft: 40,
              fontSize: 16,
              marginTop: 4,
            }}
            onPress={handleAssessment}
          >
            Take Assessment
          </Text>
        </TouchableOpacity>
      </View>
      <CardDivider width={50} />
      <View>
        <Text style={{fontSize: 16,padding: 8,justifyContent:'center',fontWeight:500}}>
          If you have questions or need help with your health care services,
          please call CalOptima's Customer Service Department
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 40,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => openDialScreen()}
          style={{ padding: 2, margin: 2 }}
        >
          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                marginHorizontal: 25,
              }}
              source={{
                uri: "https://media.istockphoto.com/id/1180028723/vector/phone-with-waves-symbol-icon-black-simple-isolated-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=0t-EGRLmVQvE6gDdbAw3XWm0G84ODOkYG_HnUrJM09I=",
              }}
            />
            <Text style={{ marginHorizontal: 10 }}>1-888-587-8088</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openGps(33.78278768730307, -117.89545817116365)}
        >
          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                marginHorizontal: 25,
              }}
              source={{
                uri: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
              }}
            />
            <Text style={{ marginHorizontal: 10 }}>City Parkway, CA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
                marginHorizontal: 25,
              }}
              source={{
                uri: "https://img.freepik.com/premium-vector/clock-vector-icon-white-background-vector-illustration_736051-174.jpg",
              }}
            />
            <Text style={{ marginHorizontal: 10 }}>Monday - Friday</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HealthAndWellnesss

const styles = StyleSheet.create({})