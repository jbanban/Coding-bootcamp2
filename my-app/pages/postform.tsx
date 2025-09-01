import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, Post } from '../constants/types';

type Props = StackScreenProps<RootStackParamList, 'PostForm'>;

export default function PostForm({ navigation, route }: Props) {
  const editing = route.params?.post;

  const [title, setTitle] = useState(editing?.title ?? '');
  const [content, setContent] = useState(editing?.content ?? '');

  const handleSave = () => {
    if (editing) {
      // update existing post
      navigation.navigate('Home', {
        updatedPost: { ...editing, title, content },
      });
    } else {
      // create new post
      const newPost: Post = {
        id: Date.now(),
        title,
        content,
        comments: [],
      };
      navigation.navigate('Home', { newPost });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title={editing ? 'Update Post' : 'Add Post'} onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 6 },
});
