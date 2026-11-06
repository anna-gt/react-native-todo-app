import { COLORS } from "@/constants/ui";
import { Note } from "@/types/note";
import { Pressable, StyleSheet, Text, View } from "react-native";

type NoteItemProps = {
  note: Note;
  onPress: () => void;
  style?: object;
};

const NoteItem = ({ note, onPress, style }: NoteItemProps) => {
  return (
    <View style={[styles.noteItem, style]}>
      <Pressable onPress={onPress}>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text style={styles.noteContent} numberOfLines={6}>
          {note.content}{" "}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    padding: 10,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    maxHeight: 200,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.PRIMARY_TEXT,
  },
  noteContent: {
    fontSize: 14,
    color: COLORS.PRIMARY_TEXT,
  },
});

export default NoteItem;
