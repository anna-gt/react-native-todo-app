import * as Notifications from "expo-notifications";
import { Alert, StyleSheet, View } from "react-native";
import StyledText from "../../components/StyledText";
import { COLORS } from "../../constants/ui";
import { getFullFormattedDate } from "../../helpers/date";
import StyledButton from "@/components/StyledButton";

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
};

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  const formattedDate = getFullFormattedDate(new Date());

  const scheduleNotification = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Permission not granted");
        return;
      }

      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Reminder",
          body: "Don't forget to check your notes!",
          data: {
            url: "/notes",
          }
        },
        trigger: {
          seconds: 2,
          channelId: "default",
        },
      });

      console.log("Notification scheduled:", notificationId);
    } catch (error) {
      console.error("Notification error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledButton
          onPress={scheduleNotification}
          label="Schedule Notification"
        />
        <StyledText variant="title">Todo app</StyledText>
        <StyledText variant="subTitle">{formattedDate}</StyledText>
      </View>
      <StyledText variant="small">
        Completed: {completedTodos} / {totalTodos}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default Header;
