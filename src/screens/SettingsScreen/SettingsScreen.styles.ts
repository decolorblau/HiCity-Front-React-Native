import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.h1,
    color: colors.yellow,
    fontWeight: "600",
    marginBottom: 5,
  },
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: colors.white,
  },
  dataContainer: {
    flex: 1,
    width: 320,
    top: 70,
  },
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
  line: {
    height: 1,
    width: 320,
    backgroundColor: colors.grey,
  },
  buttonContainer: {
    width: 320,
    height: 400,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default styles;
