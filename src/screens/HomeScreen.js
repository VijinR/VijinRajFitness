import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import { Fonts, Colors, Images } from '../constants/index';
import PieChart from 'react-native-pie-chart'
import { useNavigation } from "@react-navigation/native";

const FITNESSDATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2dfg",
    name: "Sleep",
    icon: Images.SLEEP_ICON,
    backgroundColor: Colors.SLEEP_BACKGROUND_COLOR,
    value: '5',
    unit: 'h',
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2dkg",
    name: "Heart Rate",
    icon: Images.HEART_ICON,
    backgroundColor: Colors.HEART_RATE_BACKGROUND_COLOR,
    value: '96',
    unit: 'bpm',
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abr8ii",
    name: "Temperature",
    icon: Images.TEMPARATURE_ICON,
    backgroundColor: Colors.TEMPARATURE_BACKGROUND_COLOR,
    value: '36.3',
    unit: '°C',
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad5www",
    name: "Sport Record",
    icon: Images.WALK_ICON,
    backgroundColor: Colors.SPORT_RECORD_BACKGROUND_COLOR,
    value: '36.3',
    unit: 'h',
  },
  {
    id: "bd7acbea-c1b1-46c2-aaed5-3ad5ttt",
    name: "Body Weight",
    icon: Images.WEIGHT_ICON,
    backgroundColor: Colors.BODY_WEIGHT_BACKGROUND_COLOR,
    value: '53.0',
    unit: 'kg',
  },
  {
    id: "bd7acbea-c1ssb1-46c2-aaed5-3ad5233",
    name: "Distance",
    icon: Images.LOCATION_ICON,
    backgroundColor: Colors.DISTANCE_BACKGROUND_COLOR,
    value: '132/82',
    unit: 'kg',
  },
  {
    id: "bd7acba-c1ssb01-46c2-aaed5-3ad5111",
    name: "Blood Pressure",
    icon: Images.PRESSURE_ICON,
    backgroundColor: Colors.BODY_PRESSURE_BACKGROUND_COLOR,
    value: '1.02',
    unit: 'mmHg'
  },

];

const HomeScreen = () => {
  const navigation = useNavigation();

  //Dummy Pie chart values
  const widthAndHeight = 107
  const dailyTargetSeries = [80, 280]
  const dailyTargetSliceColor = [Colors.PIE_CHART_RED_COLOR, Colors.GREEN_PRIMARY_COLOR]
  const dailyCalorieSeries = [220, 140]
  const dailyCalorieSliceColor = [Colors.PIE_CHART_ORANGE_COLOR, Colors.PIE_CHART_LIGHT_GREEN_COLOR]
  const stepCountSeries = [80, 280]
  const stepCountSliceColor = [Colors.PIE_CHART_PINK_COLOR, Colors.PIE_CHART_GRAY_COLOR]

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.cellViewStyle}
        onPress={() => navigation.navigate('FitnessDetailsScreen')}
      >
        {/* title */}
        <View style={styles.fitnessNameViewStyle}>

          <Text style={styles.fitnessNameTextStyle}>{item.name}</Text>
          <Image
            style={styles.fitnessIconStyle}
            source={item.icon}
            resizeMode='contain'
          />

        </View>

        {/* count view */}
        <View style={styles.cellCountViewStyle}>
          <Text style={styles.cellCountTextStyle}>5/28</Text>
          <View style={{ backgroundColor: item.backgroundColor, borderRadius: 4 }}>
            <Text style={styles.timeTextStyle}>{item.value} <Text style={styles.unitTextStyle}>{item.unit}</Text></Text>
          </View>
        </View>

      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* Top View */}
      <View style={styles.topViewStyle}>
        {/* watch view */}
        <View style={styles.watchViewStyle}>
          <Image
            style={styles.watchIconStyle}
            source={Images.WATCH_ICON}
          />
          <Text style={styles.watchTextStyle}>Kcal Fit</Text>
        </View>
        {/* settings button */}
        <TouchableOpacity style={styles.settingsButtonStyle}>
          <Image
            style={styles.settingsIconStyle}
            source={Images.SETTINGS_ICON}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Ellipse View */}
        <ImageBackground source={Images.ELLIPSE_IMAGE} resizeMode="stretch">
          <Image
            style={styles.dottedLineIconStyle}
            source={Images.DOTTED_LINE_IMAGE}
            resizeMode='contain'
          />

          {/* TItle View */}
          <View style={styles.titleViewStyle}>
            {/* title info view */}
            <View style={styles.titleInfoViewStyle}>
              <Text style={styles.titleTextStyle}>Daily Target Calories</Text>
              <Image
                style={styles.infoIconStyle}
                source={Images.INFO_ICON}
              />
            </View>
            {/* add calories button */}
            <View style={styles.addCalorieViewStyle}>
              <Image
                style={styles.plusIconStyle}
                source={Images.PLUS_ICON}
              />
              <Text style={styles.addCalorieTextStyle}>Add Calories</Text>
            </View>
          </View>

          <Text style={[styles.calorieTextStyle, { marginTop: 21 }]}>1100 kcal</Text>
          <Text style={styles.calorieTextStyle}>Goal</Text>

          {/* Piechart */}
          <View style={{ alignSelf: 'center', marginTop: 20 }}>
            <View>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={dailyTargetSeries}
                sliceColor={dailyTargetSliceColor}
                coverRadius={0.8}
              />
              <Text style={styles.kTextStyle}>k</Text>

              <View style={{ position: 'absolute', top: 10, left: -80 }}>
                <Text style={styles.excessTextStyle}>+100 kcal</Text>
                <Text style={styles.excessTextStyle}>Excess</Text>
              </View>

              <View style={{ position: 'absolute', top: 10, right: -90 }}>
                <Text style={styles.intakeTextStyle}>1200 kcal</Text>
                <Text style={styles.intakeTextStyle}>Intake</Text>
              </View>
            </View>
          </View>

          <View style={{ height: 30 }}></View>

        </ImageBackground>

        {/* Count view */}
        <View style={styles.countViewStyle}>
          <View style={styles.countContainerViewStyle}>
            <View style={styles.dailyCalorieInfoViewStyle}>
              <Text style={styles.dailyCalorieTitleTextStyle} numberOfLines={1}>Daily Calorie Output</Text>
              <Image
                style={styles.infoIconStyle}
                source={Images.INFO_ICON}
              />
            </View>
            <View style={{ alignSelf: 'center', marginTop: 16 }}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={dailyCalorieSeries}
                sliceColor={dailyCalorieSliceColor}
                coverRadius={0.8}
              />
              <Text style={styles.pieChartCountTextStyle} numberOfLines={1}>1500</Text>
            </View>
            <View style={styles.optionViewStyle}>
              <View style={styles.subOptionViewStyle}>
                <Image
                  source={Images.ORANGE_DOT_ICON}
                  style={styles.dotImageStyle}
                />
                <Text style={styles.optionTextStyle}>BMR</Text>
              </View>

              <View style={styles.subOptionViewStyle}>
                <Image
                  source={Images.ORANGE_DOT_ICON}
                  style={[styles.dotImageStyle, { tintColor: Colors.PIE_CHART_LIGHT_GREEN_COLOR }]}
                />
                <Text style={styles.optionTextStyle}>Active</Text>
              </View>

            </View>
          </View>

          <View style={styles.countContainerViewStyle}>
            <Text style={styles.stepCountTitleTextStyle} numberOfLines={1}>Step Count</Text>
            <View style={{ alignSelf: 'center', marginTop: 16 }}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={stepCountSeries}
                sliceColor={stepCountSliceColor}
                coverRadius={0.8}
              />
              <Text style={styles.pieChartCountTextStyle} numberOfLines={1}>2500</Text>
            </View>

            <TouchableOpacity style={styles.nextButtonStyle}>
              <Image
                source={Images.NEXT_ICON}
                resizeMode='contain'
              />
            </TouchableOpacity>

          </View>
        </View>

        {/* Fitness List */}
        <FlatList
          //ref={(ref) => flatListRef = ref}
          style={styles.flatListStyle}
          scrollEnabled={false}
          horizontal={false}
          data={FITNESSDATA}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()} //2
        />

      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND_COLOR
  },
  topViewStyle: {
    backgroundColor: Colors.WHITE_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  watchViewStyle: {
    flexDirection: 'row',
    borderRadius: 8,
    height: 30,
    borderWidth: 1,
    borderColor: Colors.GREEN_BORDER_COLOR,
    backgroundColor: Colors.BACKGROUND_GREEN_COLOR,
    marginLeft: 16,
    alignItems: 'center',
    marginVertical: 16
  },
  watchIconStyle: {
    marginLeft: 10,
    height: 20,
    width: 12
  },
  watchTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 14,
    color: Colors.GREEN_TEXT_COLOR,
    marginLeft: 7,
    marginRight: 8,
  },
  settingsButtonStyle: {
    alignSelf: 'center',
    marginRight: 19
  },
  dottedLineIconStyle: {
    marginLeft: 10,
    height: 2,
    width: '85%',
    alignSelf: 'center'
  },
  titleViewStyle: {
    backgroundColor: Colors.WHITE_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  titleInfoViewStyle: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',

  },
  titleTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.BLACK_COLOR,
  },
  infoIconStyle: {
    marginLeft: 4,
    height: 24,
    width: 24
  },
  addCalorieViewStyle: {
    flexDirection: 'row',
    borderRadius: 8,
    height: 32,
    backgroundColor: Colors.GREEN_PRIMARY_COLOR,
    alignItems: 'center',
    marginRight: 16,
  },
  plusIconStyle: {
    height: 18,
    width: 18,
    marginLeft: 8,
  },
  addCalorieTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: '500',
    fontSize: 14,
    color: Colors.WHITE_COLOR,
    marginLeft: 7,
    marginRight: 8,
  },
  calorieTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: '700',
    fontSize: 14,
    color: Colors.GRAY_TEXT_COLOR,
    textAlign: 'center',
  },
  kTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.GREEN_TEXT_COLOR,
    position: 'absolute',
    bottom: 42,
    right: 46
  },
  excessTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.PIE_CHART_RED_COLOR,
  },
  intakeTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.GREEN_PRIMARY_COLOR,
  },
  countViewStyle: {
    flexDirection: 'row',
    height: 200,
    marginTop: 21,
    justifyContent: 'space-between',
    marginHorizontal: 16,

  },
  countContainerViewStyle: {
    height: 200,
    flex: 0.48,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 16
  },
  dailyCalorieInfoViewStyle: {
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
    marginTop: 14,
  },
  dailyCalorieTitleTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: '700',
    fontSize: 13,
    color: Colors.LIGHT_BLACK_TEXT_COLOR,
    width: '80%'
  },
  pieChartCountTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.GREEN_TEXT_COLOR,
    position: 'absolute',
    alignSelf: 'center',
    top: 35,
  },
  optionViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12
  },
  subOptionViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotImageStyle: {
    height: 6,
    width: 6
  },
  optionTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 12,
    color: Colors.BLACK_COLOR,
    marginLeft: 5
  },
  stepCountTitleTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: '700',
    fontSize: 13,
    color: Colors.LIGHT_BLACK_TEXT_COLOR,
    width: '80%',
    marginTop: 16,
    marginHorizontal: 16
  },
  nextButtonStyle: {
    position: 'absolute',
    right: 16,
    bottom: 12
  },
  flatListStyle: {
    flex: 1,
    marginTop: 16,
  },
  cellViewStyle: {
    height: 70,
    marginBottom: 16,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 12,
    marginHorizontal: 16
  },
  fitnessNameViewStyle: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 8
  },
  fitnessNameTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'normal',
    fontSize: 16,
    color: Colors.EXTRA_LIGHT_GRAY_COLOR,
  },
  fitnessIconStyle: {
    marginLeft: 6,
    height: 18,
    width: 18
  },
  cellCountViewStyle: {
    flexDirection: 'row',
    marginHorizontal: 12,
    justifyContent: 'space-between', marginTop: 8
  },
  cellCountTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.BLACK_COLOR,
  },
  timeTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.BLACK_COLOR,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  unitTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'medium',
    fontSize: 14,
    color: Colors.BLACK_COLOR,
  },

});
