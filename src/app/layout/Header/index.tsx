import StyledText from "@/app/components/StyledText";
import { COLORS } from "@/app/constants/ui";
import { getFullFormattedDate } from "@/app/helpers/date";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
};

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  const formattedDate = getFullFormattedDate(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
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
