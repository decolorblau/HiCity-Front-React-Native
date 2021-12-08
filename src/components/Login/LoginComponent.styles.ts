import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: colors.white,
    borderBottomColor: colors.grey,
    fontSize: fontSize.text,
    paddingHorizontal: 0,
    color: colors.grey,
  },
  label: {
    fontSize: fontSize.text,
    marginTop: 15,
    color: colors.darkGrey,
  },
  title: {
    fontSize: fontSize.h1,
    color: colors.yellow,
    fontWeight: "600",
    marginBottom: 5,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: colors.yellow,
    padding: 10,
    marginTop: 30,
  },
  buttonDisabled: {
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 90,
    backgroundColor: colors.lightYellow,
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.textButton,
    fontWeight: "600",
  },
  inputHelp: {
    fontSize: fontSize.extraText,
    color: colors.grey,
    marginTop: 5,
  },
  register: {
    marginTop: 5,
    color: colors.yellow,
    fontSize: fontSize.text,
  },
  infoText: {
    color: colors.darkGrey,
    fontSize: fontSize.extraText,
  },
  goRegister: {
    width: 300,
    height: 150,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default styles;
