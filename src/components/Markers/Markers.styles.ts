import { StyleSheet } from "react-native";
import { colors } from "../../styles/hicity.styles";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  marker: {
    width: 35,
    height: 37,
  },
  modalView: {
    width: "90%",
    height: 240,
    marginBottom: 100,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 25,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: colors.lightGrey,
    fontWeight: "400",
    fontSize: 28,
  },
  button: {
    width: 50,
    height: 50,
    position: "absolute",
    right: -5,
    top: 15,
  },
  goDetail: {
    color: colors.yellow,
  },
});

export default styles;
