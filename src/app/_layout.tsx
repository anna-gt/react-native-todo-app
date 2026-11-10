import { AuthContext, AuthProvider } from "@/context/auth-context";
import * as Notifications from "expo-notifications";
import { router, Stack } from "expo-router";
import { useContext, useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldShowAlert: true,
  }),
});

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

function useNotificationObserver() {
  useEffect(() => {
    function redirect(notification: Notifications.Notification) {
      const url = notification.request.content.data?.url;
      if (typeof url === "string") {
        router.push(url as "/notes");
        Notifications.clearLastNotificationResponse();
      }
    }

    const response = Notifications.getLastNotificationResponse();
    if (response?.notification) {
      redirect(response.notification);
    }

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        redirect(response.notification);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);
}

// function useNotificationObserver() {
//   const response = Notifications.useLastNotificationResponse();

//   useEffect(() => {
//     if (
//       response?.actionIdentifier !== Notifications.DEFAULT_ACTION_IDENTIFIER
//     ) {
//       return;
//     }

//     const url = response.notification.request.content.data?.url;

//     if (typeof url === "string") {
//       router.push(url as "/notes");
//       void Notifications.clearLastNotificationResponseAsync();
//     }
//   }, [response]);
// }

export default function RootLayout() {
  useNotificationObserver();

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
