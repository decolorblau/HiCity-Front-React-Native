import { StyleSheet } from "react-native";
import colors from "../../styles/color.styles";

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    backgroundColor: colors.white,
  },
  container: {
    alignItems: "center",
  },
  dataContainer: {
    flex: 1,
    alignItems: "center",
    top: 70,
  },
  imageContainer: {
    width: 400,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  form: { marginTop: 50 },
});

export default styles;
