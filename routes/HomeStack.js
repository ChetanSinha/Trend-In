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
  },
  General: {
    screen: GeneralSource,
  },
  Specific: {
    screen: SpecificSource,
  },
  SearchTopic: {
    screen: SearchTopic,
  },
  Bookmarks: {
    screen: Bookmarks,
  },
  Reddit: {
    screen: Reddit,
  },
  RedditTrends: {
    screen: RedditTrends,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
