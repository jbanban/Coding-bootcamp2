import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, Post } from '../constants/types';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!route.params) return;

    const { newPost, updatedPost, deletedPostId } = route.params;

    if (newPost) {
      setPosts(prev => [...prev, newPost]);
    }
    if (updatedPost) {
      setPosts(prev =>
        prev.map(p => (p.id === updatedPost.id ? updatedPost : p))
      );
    }
    if (deletedPostId) {
      setPosts(prev => prev.filter(p => p.id !== deletedPostId));
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Button title="Create Post" onPress={() => navigation.navigate('PostForm')} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { post: item })}>
            <View style={styles.postItem}>
              <Text style={styles.postTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  postItem: { padding: 12, borderBottomWidth: 1 },
  postTitle: { fontSize: 18, fontWeight: 'bold' },
});
