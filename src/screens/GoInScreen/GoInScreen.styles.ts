import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";

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
  buttonContainer: {
    alignItems: "center",
  },
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
  textInfo: {
    color: colors.lightGrey,
    fontSize: fontSize.text,
    marginTop: 35,
    textAlign: "center",
  },

  title: {
    fontSize: fontSize.h1,
    color: colors.grey,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 45,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  save: {
    width: 300,
    alignItems: "center",
  },
});

export default styles;
