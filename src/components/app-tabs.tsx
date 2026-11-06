import { COLORS } from "@/constants/ui";
import { AntDesign } from "@react-native-vector-icons/ant-design";
import { NativeTabs } from "expo-router/native-tabs";

export default function AppTabs() {
  return (
    <NativeTabs
      iconColor={{
        default: COLORS.PRIMARY_TEXT,
        selected: COLORS.SECONDARY_TEXT,
      }}
      labelStyle={{
        default: { color: COLORS.SECONDARY_TEXT },
        selected: { color: COLORS.PRIMARY_TEXT },
      }}
      backgroundColor={COLORS.PRIMARY_BACKGROUND}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Todo list</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={<NativeTabs.Trigger.VectorIcon family={AntDesign} name="bars" />}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="notes">
        <NativeTabs.Trigger.Label>Notes</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={
            <NativeTabs.Trigger.VectorIcon family={AntDesign} name="book" />
          }
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
