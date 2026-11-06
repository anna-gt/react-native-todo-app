import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { defaultNotes } from '.';
import { COLORS } from '@/constants/ui';

export default function NoteScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const note = defaultNotes.find((note) => note.id === Number(id));

  return (
    <View style={styles.container}>
      <Text style={styles.noteTitle}>{note?.title}</Text>
      <Text style={styles.noteContent}>{note?.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.PRIMARY_TEXT,
  },
  noteContent: {
    fontSize: 16,
    color: COLORS.PRIMARY_TEXT,
    marginTop: 10,
  },
});