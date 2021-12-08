import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";

const styles = StyleSheet.create({
  button: {
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderRadius: 90,
    backgroundColor: colors.yellow,
    padding: 10,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.textButton,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;
