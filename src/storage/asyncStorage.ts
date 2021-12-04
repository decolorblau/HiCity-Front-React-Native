import AsyncStorage from "@react-native-async-storage/async-storage";

export const tokenStorage = async (keyToken: string, token: object) => {
  try {
    const jsonToken = await JSON.stringify(token);
    if (jsonToken !== null) {
      await AsyncStorage.setItem(keyToken, jsonToken);
      return jsonToken;
    }
  } catch ({ message }) {
    return message;
  }
};

export const getDataObject = async (keyToken: string) => {
  try {
    const userDataObject = await AsyncStorage.getItem(keyToken);
    if (userDataObject !== null) {
      return JSON.parse(userDataObject);
    }
  } catch ({ message }) {
    return message;
  }
};

export const removeStorage = async (keyToken: string) => {
  try {
    await AsyncStorage.removeItem(keyToken);
  } catch ({ message }) {
    return message;
  }
};
