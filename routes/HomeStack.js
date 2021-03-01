import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../components/screens/Home";
import GeneralSource from "../components/sources/General";
import SpecificSource from "../components/sources/Specific";

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
