import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, Post, Comment } from '../constants/types';

type Props = StackScreenProps<RootStackParamList, 'PostDetail'>;

export default function PostDetail({ route, navigation }: Props) {
  const [post, setPost] = useState<Post>(route.params.post);
  const [commentText, setCommentText] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const addComment = () => {
    if (!commentText.trim()) return;
    const newComment: Comment = { id: Date.now(), text: commentText.trim() };
    setPost(prev => ({ ...prev, comments: [...prev.comments, newComment] }));
    setCommentText('');
  };

  const updateComment = (id: number) => {
    setPost(prev => ({
      ...prev,
      comments: prev.comments.map(c =>
        c.id === id ? { ...c, text: editingText } : c
      ),
    }));
    setEditingCommentId(null);
    setEditingText('');
  };

  const deleteComment = (id: number) => {
    setPost(prev => ({
      ...prev,
      comments: prev.comments.filter(c => c.id !== id),
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text>{post.content}</Text>

      <View style={styles.row}>
        <Button title="Edit" onPress={() => navigation.navigate('PostForm', { post })} />
        <Button
          title="Delete"
          color="red"
          onPress={() => navigation.navigate('Home', { deletedPostId: post.id })}
        />
      </View>

      <Text style={styles.subtitle}>Comments</Text>
      <FlatList
        data={post.comments}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            {editingCommentId === item.id ? (
              <>
                <TextInput
                  style={styles.input}
                  value={editingText}
                  onChangeText={setEditingText}
                />
                <Button title="Save" onPress={() => updateComment(item.id)} />
                <Button
                  title="Cancel"
                  color="gray"
                  onPress={() => {
                    setEditingCommentId(null);
                    setEditingText('');
                  }}
                />
              </>
            ) : (
              <>
                <Text>{item.text}</Text>
                <View style={styles.row}>
                  <Button
                    title="Edit"
                    onPress={() => {
                      setEditingCommentId(item.id);
                      setEditingText(item.text);
                    }}
                  />
                  <Button
                    title="Delete"
                    color="red"
                    onPress={() => deleteComment(item.id)}
                  />
                </View>
              </>
            )}
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Add a comment"
        value={commentText}
        onChangeText={setCommentText}
      />
      <Button title="Add Comment" onPress={addComment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  postTitle: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { marginTop: 16, fontSize: 16, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 8, marginVertical: 8, borderRadius: 6 },
  commentItem: { padding: 8, borderBottomWidth: 1 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
});
