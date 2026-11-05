import AntDesign from "@react-native-vector-icons/ant-design";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../constants/ui";

type StylesCheckboxProps = {
  isChecked: boolean;
  onCheck?: () => void;
};

const StyledCheckbox: React.FC<StylesCheckboxProps> = ({
  isChecked,
  onCheck,
}) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <AntDesign
        name={isChecked ? "check-circle" : "meh"}
        color={isChecked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER }
        size={24}
      />
    </TouchableOpacity>
  );
};

export default StyledCheckbox;
