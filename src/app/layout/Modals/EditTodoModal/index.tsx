import StyledButton from "@/app/components/StyledButton";
import StyledModal from "@/app/components/StyledModal";
import StyledText from "@/app/components/StyledText";
import StyledTextInput from "@/app/components/StyledTextInput";
import { Todo } from "@/app/types/todo";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (title: string) => void;
  title: Todo["title"];
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  title,
}) => {
  const [updatedTitle, setUpdateTitle] = useState(title);
  const [inputError, setInputError] = useState(false);

  const onPressSave = () => {
    if (!updatedTitle) {
      setInputError(true);
      return;
    }
    onUpdate(updatedTitle);
    onClose();
  };

  const onChangeText = (text: string) => {
    if (inputError && text) {
      setInputError(false);
    }
    setUpdateTitle(text);
  };

  const onCloseModal = () => {
    setUpdateTitle(title);
    onClose();
  };

  return (
    <StyledModal isOpen={isOpen} onClose={onCloseModal}>
      <View style={styles.modalContentContainer}>
        <StyledText variant="heading">Edit todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput
            value={updatedTitle}
            onChangeText={onChangeText}
            placeholder="Edit todo..."
            isError={inputError}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton label="Cancel" onPress={onClose} variant="secondary" />
          <StyledButton
            label="Save"
            onPress={onPressSave}
            disabled={inputError}
          />
        </View>
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  inputContainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
});

export default EditTodoModal;
