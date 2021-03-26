export const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem("userInfo");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
