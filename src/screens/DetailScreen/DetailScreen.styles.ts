import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/hicity.styles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  imageContainer: {
    top: 0,
    height: 420,
  },
  image: {
    height: 520,
    width: 520,
    position: "absolute",
    top: -55,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: colors.white,
    borderRadius: 50,
    height: 25,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  backText: {
    color: colors.darkGrey,
    fontSize: fontSize.extraText,
    zIndex: 3,
  },
  categoryContainer: {
    backgroundColor: colors.yellow,
    width: 120,
    height: 22,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 400,
    left: 35,
  },
  category: {
    color: colors.white,
    fontSize: fontSize.text,
    fontWeight: "600",
  },
  textContainer: {
    paddingLeft: 35,
    paddingRight: 30,
  },
  text: {
    fontSize: fontSize.text,
    color: colors.grey,
    marginBottom: 20,
  },
  imageLogo: {
    marginBottom: 20,
  },
  textFooter: {
    fontSize: fontSize.text,
    color: colors.grey,
    marginBottom: 5,
  },
  textEdit: {
    fontSize: fontSize.text,
    color: colors.yellow,
    marginBottom: 20,
  },
  title: {
    color: colors.darkGrey,
    marginTop: 18,
    marginBottom: 3,
    fontSize: fontSize.h3,
  },
  city: {
    fontSize: fontSize.text,
    color: colors.grey,
    marginBottom: 15,
  },
  textBorrar: {
    fontSize: fontSize.extraText,
    color: colors.lightGrey,
    marginBottom: 60,
  },
  textContainerButton: {
    alignItems: "flex-end",
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  line: {
    backgroundColor: colors.lightGrey,
    height: 1,
    width: "100%",
    marginBottom: 10,
  },
  footer: {
    alignItems: "center",
    marginBottom: 60,
  },
  date: {
    fontSize: fontSize.extraText,
    color: colors.grey,
    marginBottom: 20,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 280,
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    width: 90,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: colors.yellow,
  },

  buttonBorrar: {
    backgroundColor: colors.darkGrey,
  },
  textStyle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    color: colors.darkGrey,
    fontSize: fontSize.text,
    fontWeight: "600",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: colors.darkGrey,
    fontSize: fontSize.text,
  },
});

export default styles;
