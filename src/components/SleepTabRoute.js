import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Fonts, Colors, Images } from '../constants/index';
import { useNavigation } from "@react-navigation/native";
import PieChart from 'react-native-pie-chart'
import { AppleButton, appleAuth, AppleAuthRequestOperation, AppleAuthRequestScope } from '@invertase/react-native-apple-authentication';

const FITNESSDATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2dfg",
    type: "fallAsleep",
    backgroundColor: Colors.SPORT_RECORD_BACKGROUND_COLOR,
    value: 50,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2dkg",
    type: "lightSleep",
    backgroundColor: Colors.BODY_PRESSURE_BACKGROUND_COLOR,
    value: 10,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-ssdfd53abr8ii",
    type: "deepSleep",
    backgroundColor: Colors.GREEN_PRIMARY_COLOR,
    value: 10,
  },
  {
    id: "bd7acbea-c1b1-4233242-aed5-3ad53abb2dkg",
    type: "lightSleep",
    backgroundColor: Colors.BODY_PRESSURE_BACKGROUND_COLOR,
    value: 10,
  },
  {
    id: "bd7acbea-c132e-46c2-aed5-ssdfd53abr8ii",
    type: "deepSleep",
    backgroundColor: Colors.GREEN_PRIMARY_COLOR,
    value: 20,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad5www",
    type: "lightSleep",
    backgroundColor: Colors.BODY_PRESSURE_BACKGROUND_COLOR,
    value: 50,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abr8ii",
    type: "deepSleep",
    backgroundColor: Colors.GREEN_PRIMARY_COLOR,
    value: 25,
  },
  {
    id: "bd7acbea-ce2r1-46c2-aed5-3ad5www",
    type: "lightSleep",
    backgroundColor: Colors.BODY_PRESSURE_BACKGROUND_COLOR,
    value: 25,
  },

  {
    id: "bd7acbea-c1b1-46c2-aaed5-3ad5ttt",
    type: "deepSleep",
    backgroundColor: Colors.GREEN_PRIMARY_COLOR,
    value: 25,
  },
  {
    id: "bd7acb34535-c1b1-46c2-aed5-3ad53abb2dkg",
    type: "awake",
    backgroundColor: Colors.DISTANCE_BACKGROUND_COLOR,
    value: 25,
  },
  {
    id: "bd7acbea-c1ssb1-46c2-aaed5-3ad5233",
    type: "deepSleep",
    backgroundColor: Colors.GREEN_PRIMARY_COLOR,
    value: 20,
  },
  {
    id: "bd7ac33a-ce2r1-46c2-aed5-3ad5www",
    type: "lightSleep",
    backgroundColor: Colors.BODY_PRESSURE_BACKGROUND_COLOR,
    value: 20,
  },
  {
    id: "bd7acbwr2r-c1ssb1-46c2-aaed5-3ad5233",
    type: "deepSleep",
    backgroundColor: Colors.GREEN_PRIMARY_COLOR,
    value: 10,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2dkg",
    type: "awake",
    backgroundColor: Colors.DISTANCE_BACKGROUND_COLOR,
    value: 50,
  },

];

const SleepTabRoute = () => {
  const navigation = useNavigation();

  const widthAndHeight = 95
  const targetSeries = [430, 321, 185, 123]
  const targetSliceColor = [Colors.GREEN_PRIMARY_COLOR, Colors.DISTANCE_BACKGROUND_COLOR, Colors.BODY_PRESSURE_BACKGROUND_COLOR, Colors.SPORT_RECORD_BACKGROUND_COLOR]

  const renderItem = ({ item, index }) => {

    return (
      <View style={{ width: item.value, height: 200 }}>
        <View style={{ height: 50, width: item.value, borderBottomWidth: 1, borderBottomColor: Colors.SEPARATOR_COLOR }}>
          <View style={{ backgroundColor: item.type == 'awake' ? item.backgroundColor : 'transparent', borderRadius: 6, height: 50, width: item.value }}>

          </View>
        </View>

        <View style={{ height: 50, width: item.value, borderBottomWidth: 1, borderBottomColor: Colors.SEPARATOR_COLOR }}>
          <View style={{ borderRadius: 6, backgroundColor: item.type == 'deepSleep' ? item.backgroundColor : 'transparent', height: 50, width: item.value }}>

          </View>

        </View>

        <View style={{ height: 50, width: item.value, borderBottomWidth: 1, borderBottomColor: Colors.SEPARATOR_COLOR }}>
          <View style={{ borderRadius: 6, backgroundColor: item.type == 'lightSleep' ? item.backgroundColor : 'transparent', height: 50, width: item.value }}>

          </View>

        </View>

        <View style={{ height: 50, width: item.value, borderBottomWidth: 1, borderBottomColor: Colors.SEPARATOR_COLOR }}>
          <View style={{ borderRadius: 6, backgroundColor: item.type == 'fallAsleep' ? item.backgroundColor : 'transparent', height: 50, width: item.value }}>

          </View>
        </View>

      </View>
    )
  }

  //Need developer account to check
  const handleAppleLogin = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
      });

      const { email, fullName, identityToken, realUserStatus /* etc */ } = appleAuthRequestResponse;

      // Use the user details as needed
      Alert.alert('Apple Login Success', `Email: ${email}, FullName: ${fullName}, IdentityToken: ${identityToken}, RealUserStatus: ${realUserStatus}`);
    } catch (error) {
      console.log('Apple Login Error:', error);
      Alert.alert('Apple Login Failed', 'An error occurred during Apple Login.');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: Colors.WHITE_COLOR }}>
          <Text style={styles.awakeTextStyle}>Awake</Text>
          <Text style={styles.durationTextStyle}>4 <Text style={styles.unitTextStyle}>h</Text> 50 <Text style={styles.unitTextStyle}>min</Text></Text>
          <Text style={[styles.unitTextStyle, { marginTop: 6, color: Colors.TIME_TEXT_GRAY_COLOR }]}>7:45-7:45</Text>
        </View>

        {/* GRAPH VIEW */}
        <View style={{ backgroundColor: Colors.WHITE_COLOR }}>
          <FlatList
            //ref={(ref) => flatListRef = ref}
            style={styles.flatListStyle}
            scrollEnabled={false}
            horizontal={true}
            data={FITNESSDATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()} //2
          />

          <View style={styles.xaXisViewStyle}>
            <Text style={styles.xAxisTextStyle}>09:00</Text>
            <Text style={styles.xAxisTextStyle}>05:10</Text>
          </View>

        </View>

        {/* Total Sleep View */}
        <View style={styles.totalSleepViewStyle}>
          <Text style={styles.totalSleepTitleTextStyle}>Total Sleep</Text>
          <Text style={[styles.durationTextStyle, { marginTop: 0, marginRight: 12 }]}>4 <Text style={styles.unitTextStyle}>h</Text> 50 <Text style={styles.unitTextStyle}>min</Text></Text>
        </View>

        {/* Chart View */}
        <View style={styles.chartViewStyle}>

          <View style={styles.pieChartViewStyle}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={targetSeries}
              sliceColor={targetSliceColor}
              coverRadius={0.8}
            />
            <Text style={styles.awakeTextStyle}>Sleep ratio </Text>
          </View>

          <View style={styles.optionViewStyle}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
              <View style={styles.subOptionViewStyle}>
                <Image
                  source={Images.ORANGE_DOT_ICON}
                  style={[styles.dotImageStyle, { tintColor: Colors.PIE_CHART_ORANGE_COLOR }]}
                />
                <Text style={styles.optionTextStyle}>Awake</Text>
              </View>
              <Text style={[styles.optionDurationTextStyle, { marginTop: 0, marginRight: 12 }]}>0 <Text style={styles.unitTextStyle}>h</Text> 15 <Text style={styles.unitTextStyle}>min</Text></Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 4 }}>
              <View style={styles.subOptionViewStyle}>
                <Image
                  source={Images.ORANGE_DOT_ICON}
                  style={[styles.dotImageStyle, { tintColor: Colors.PIE_CHART_LIGHT_GREEN_COLOR }]}
                />
                <Text style={styles.optionTextStyle}>Fall asleep</Text>
              </View>
              <Text style={[styles.optionDurationTextStyle, { marginTop: 0, marginRight: 12 }]}>4 <Text style={styles.unitTextStyle}>h</Text> 50 <Text style={styles.unitTextStyle}>min</Text></Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 4 }}>
              <View style={styles.subOptionViewStyle}>
                <Image
                  source={Images.ORANGE_DOT_ICON}
                  style={[styles.dotImageStyle, { tintColor: Colors.BODY_PRESSURE_BACKGROUND_COLOR }]}
                />
                <Text style={styles.optionTextStyle}>Light sleep</Text>
              </View>
              <Text style={[styles.optionDurationTextStyle, { marginTop: 0, marginRight: 12 }]}>4 <Text style={styles.unitTextStyle}>h</Text> 50 <Text style={styles.unitTextStyle}>min</Text></Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 4 }}>
              <View style={styles.subOptionViewStyle}>
                <Image
                  source={Images.ORANGE_DOT_ICON}
                  style={[styles.dotImageStyle, { tintColor: Colors.GREEN_BORDER_COLOR }]}
                />
                <Text style={styles.optionTextStyle}>Deep sleep</Text>
              </View>
              <Text style={[styles.optionDurationTextStyle, { marginTop: 0, marginRight: 12 }]}>4 <Text style={styles.unitTextStyle}>h</Text> 50 <Text style={styles.unitTextStyle}>min</Text></Text>
            </View>

          </View>

        </View>

        {/* <TouchableOpacity
          style={{ height: 40, width: 100, backgroundColor: Colors.GRAY_TEXT_COLOR }}
          onPress={handleAppleLogin}
        >
          <Text>Sign in with apple</Text>
          </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SleepTabRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND_COLOR
  },
  topViewStyle: {
    backgroundColor: Colors.WHITE_COLOR,
  },

  awakeTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.TAB_BAR_TEXT_GRAY_COLOR,
    alignSelf: 'center',
    marginTop: 12
  },
  durationTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.BLACK_COLOR,
    alignSelf: 'center',
    marginTop: 12
  },
  unitTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.BLACK_COLOR,
    alignSelf: 'center',
  },
  flatListStyle: {
    height: 200,
    width: '90%',
    alignSelf: 'center',
    marginTop: 40
  },
  xAxisTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 14,
    marginTop: 6,
    color: Colors.TIME_TEXT_GRAY_COLOR,

  },
  xaXisViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginBottom: 20
  },
  totalSleepViewStyle: {
    height: 57,
    marginBottom: 16,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalSleepTitleTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 18,
    color: Colors.EXTRA_LIGHT_GRAY_COLOR,
    alignSelf: 'center',
    marginLeft: 12
  },
  chartViewStyle: {
    height: 153,
    marginBottom: 16,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pieChartViewStyle: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: 20
  },

  fitnessNameTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.TAB_BAR_TEXT_GRAY_COLOR,
    alignSelf: 'center',
  },
  optionViewStyle: {
    flex: 0.6,
    marginVertical: 20
  },
  subOptionViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotImageStyle: {
    height: 9,
    width: 9
  },
  optionTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 12,
    color: Colors.TAB_BAR_TEXT_GRAY_COLOR,
    marginLeft: 5
  },
  optionDurationTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.BLACK_COLOR,
  },
});