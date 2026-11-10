import StyledButton from "@/components/StyledButton";
import { COLORS } from "@/constants/ui";
import { AuthContext } from "@/context/auth-context";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";

export default function Login() {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StyledButton onPress={login} label="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});
