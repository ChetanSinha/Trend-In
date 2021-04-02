import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../src/screens/Home";
import GeneralSource from "../src/sources/General";
import SpecificSource from "../src/sources/Specific";
import SearchTopic from "../src/sources/SearchTopic";
import Bookmarks from "../src/sources/Bookmarks";
import Reddit from "../src/screens/Reddit";
import RedditTrends from "../src/sources/RedditTrends";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Fresh Off the World 🔥",
    },
  },
  General: {
    screen: GeneralSource,
    navigationOptions: {
      headerShown: false,
    },
  },
  Specific: {
    screen: SpecificSource,
    navigationOptions: {
      title: "",
      headerShown: false,
    },
  },
  SearchTopic: {
    screen: SearchTopic,
    navigationOptions: {
      title: "Search 🔍",
      headerShown: false,
    },
  },
  Bookmarks: {
    screen: Bookmarks,
    navigationOptions: {
      title: "Your Bookmarks 🔖",
      headerShown: false,
    },
  },
  Reddit: {
    screen: Reddit,
    navigationOptions: {
      title: "Sub Reddits 💟",
      headerShown: false,
    },
  },
  RedditTrends: {
    screen: RedditTrends,
    navigationOptions: {
      title: "Selected",
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#ffffff",
    headerStyle: { backgroundColor: "#0B3861" },
  },
});

export default createAppContainer(HomeStack);
