import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, useWindowDimensions } from 'react-native';
import { Fonts, Colors, Images } from '../constants/index';
import { useNavigation } from "@react-navigation/native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { SleepTabRoute } from '../components';

const FitnessDetailsScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const renderScene = SceneMap({
    first: SleepTabRoute,
    second: SleepTabRoute,
    third: SleepTabRoute
  });

  const [routes] = useState([
    { key: 'first', title: 'Day' },
    { key: 'second', title: 'Week' },
    { key: 'third', title: 'Month' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicatorStyle}
      pressOpacity={1}
      pressColor={Colors.APP_PRIMARY_COLOR}
      bounces={true}
      style={styles.tabBarStyle}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={[styles.tabBarTextStyle, { color: focused ? Colors.BLACK_COLOR : Colors.TAB_BAR_TEXT_GRAY_COLOR, }]}
        >
          {route.title}
        </Text>
      )}
      tabStyle={{}}
      labelStyle={{}}
      getLabelText={({ route }) => route.title}
    />
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Top View */}
      <View style={styles.topViewStyle}>
        {/* back button */}
        <TouchableOpacity style={styles.settingsButtonStyle}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.settingsIconStyle}
            source={Images.BACK_ICON}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <Text style={styles.titleTextStyle}>Sleep</Text>

      </View>
      <View style={styles.containerCurveViewStyle}>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          lazy={true}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{ width: layout.width }}
        />

      </View>

    </SafeAreaView>
  );
}

export default FitnessDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND_COLOR
  },
  topViewStyle: {
    backgroundColor: Colors.WHITE_COLOR,
    paddingBottom: 22
  },

  titleTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.GREEN_TEXT_COLOR,
    alignSelf: 'center',
    marginTop: 12
  },
  settingsButtonStyle: {
    position: 'absolute',
    left: 16,
    top: 16
  },
  containerCurveViewStyle: {
    flex: 1,
    zIndex: 2,
    backgroundColor: Colors.WHITE_COLOR,

  },
  tabBarStyle: {
    backgroundColor: Colors.APP_BACKGROUND_COLOR,
    marginLeft: 35,
    marginRight: 35,
    height: 32,
    borderRadius: 16,
    shadowColor: 'transparent',
  },
  tabBarIndicatorStyle: {
    backgroundColor: Colors.WHITE_COLOR,
    height: 26,
    marginBottom: 3,
    marginLeft: 3,
    borderRadius: 16,
    width: '31.5%'
  },
  tabBarTextStyle: {
    fontFamily: Fonts.MERGE_ONE,
    fontWeight: '600',
    fontSize: 14,
    textAlign: "center",
    marginTop: -15,
  }

});
