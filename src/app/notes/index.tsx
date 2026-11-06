import { COLORS } from "@/constants/ui";
import NoteItem from "@/layout/NoteItem";
import { router } from "expo-router";
import { FlatList, StatusBar, StyleSheet, View } from "react-native";

export const defaultNotes = [
  {
    id: 1,
    title: "Note 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor purus eget pretium fringilla. Vestibulum viverra placerat massa ac sodales. Pellentesque ut enim at tortor efficitur posuere sed non lectus. Vestibulum massa libero, vehicula et leo interdum, feugiat consequat lacus. Proin ut ligula vel ante condimentum fringilla in vel enim. Suspendisse semper libero at neque blandit volutpat. Nam vel mauris iaculis, aliquet nibh ac, maximus quam. Vestibulum gravida metus non condimentum dignissim. Cras convallis sed lectus dapibus porttitor. Sed ut risus nisi. Nunc nec tempor mauris. Fusce posuere elementum elit, congue maximus ligula.",
  },
  {
    id: 2,
    title: "Note 2",
    content:
      "Phasellus rutrum leo sed ipsum fermentum luctus. Etiam ultricies tincidunt nunc in semper. Vivamus fermentum tristique nisi nec ultrices. Proin faucibus ante id vehicula sagittis. Sed nec sem eu leo tincidunt dapibus at eu mi. Fusce quam turpis, pulvinar eget purus vitae, sollicitudin suscipit felis. Mauris sed aliquet lorem. Ut dignissim in augue ac interdum. Praesent efficitur tortor ut turpis imperdiet porttitor. Pellentesque at imperdiet sem. Proin eu dolor mauris. Phasellus molestie urna quis molestie mollis. Vestibulum nec risus a orci hendrerit tempor.",
  },
  {
    id: 3,
    title: "Note 3",
    content:
      "Nullam auctor, nisl eget tincidunt aliquam, nisi libero aliquet massa, nec aliquam libero nisl eget nisl. Nullam auctor, nisl eget tincidunt aliquam, nisi libero aliquet massa, nec aliquam libero nisl eget nisl.",
  },
];

export default function NotesScreen() {
  const onPressNote = (noteId: number) => {
    router.push(`/notes/${noteId}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <FlatList
        data={defaultNotes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onPress={() => onPressNote(item.id)}
            style={styles.noteItem}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.notesContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  noteItem: {
    marginBottom: 20,
    width: "45%",
  },
  notesContainer: {
    justifyContent: "space-between",
  },
});
