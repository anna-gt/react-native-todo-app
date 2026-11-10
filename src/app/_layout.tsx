import { AuthContext, AuthProvider } from "@/context/auth-context";
import { Stack } from "expo-router";
import { useContext } from "react";

function RootNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={!!isLoggedIn}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
