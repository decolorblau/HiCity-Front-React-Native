import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";

const styles = StyleSheet.create({
  imageContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    position: "absolute",
    left: 20,
    top: -85,
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    height: "100%",
    width: 150,
    borderRadius: 20,
  },
  allText: {
    flexDirection: "row",
  },
  categoryContainer: {
    backgroundColor: colors.yellow,
    height: 25,
    width: 118,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 70,
    top: 20,
  },
  category: {
    color: colors.white,
    fontSize: fontSize.extraText,
  },
  modaltitle: {
    marginTop: 55,
    color: colors.darkGrey,
    fontSize: fontSize.h3,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalText: {
    marginBottom: 15,
    color: colors.grey,
    width: 235,
    height: 70,
  },
  buttonPlay: {
    width: 70,
    height: 70,
    borderRadius: 90,
    backgroundColor: colors.white,
    position: "absolute",
    right: 0,
    top: -120,
  },
  play: {
    color: colors.yellow,
    fontSize: 80,
    top: 0,
    right: -3,
    position: "absolute",
  },
});

export default styles;
