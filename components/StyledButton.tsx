import { AntDesign } from "@react-native-vector-icons/ant-design";
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import { COLORS } from "../constants/ui";
import StyledText from "./StyledText";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
  size?: "default" | "small" | "large";
  variant?: "primary" | "delete" | "secondary";
};

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = "default",
  variant = "primary",
  disabled,
  ...props
}) => {
  const textVariant = (() => {
    if (size === "large") return "heading";
    return "small";
  })();

  return (
    <TouchableOpacity
      style={[
        styles.base,
        //sizes
        size === "small" ? styles.small : null,
        size === "large" ? styles.large : null,
        //disabled
        disabled ? styles.disabled : null,
        //variants
        variant === "delete" ? styles.delete : null,
        variant === "secondary" ? styles.secondary : null,
      ]}
      {...props}
    >
      {label && <StyledText variant={textVariant}>{label}</StyledText>}
      {icon && <AntDesign name={icon} size={20} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  disabled: {
    opacity: 0.5,
  },
  // sizes
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  large: {
    paddingHorizontal: 30,
  },
  // variants
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
  secondary: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderColor: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
});

export default StyledButton;
