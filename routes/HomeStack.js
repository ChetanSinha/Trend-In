import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../src/screens/Home";
import GeneralSource from "../src/sources/General";
import SpecificSource from "../src/sources/Specific";

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
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
