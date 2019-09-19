import { Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get("window");

const metrics = {
  DEVICE_WIDTH: width < height ? width : height,
  DEVICE_HEIGHT: width < height ? height : width,
  NAV_BAR_HEIGHT: Platform.OS === 'ios' ? 54 : 66
};

export default metrics;
