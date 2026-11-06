import { COLORS } from "@/constants/ui";
import { Stack } from "expo-router";

export default function NotesStack() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerStyle: {
          backgroundColor: COLORS.PRIMARY_BACKGROUND,
        },
        headerTintColor: COLORS.PRIMARY_TEXT,
        contentStyle: {
          backgroundColor: COLORS.PRIMARY_BACKGROUND,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Notes" }} />

      <Stack.Screen name="[id]" options={{ title: "Note" }} />
    </Stack>
  );
}
