export type RootStackParamList = {
  Home: {
    newPost?: Post;
    updatedPost?: Post;
    deletedPostId?: number;
  } | undefined;
  PostForm: { post?: Post } | undefined;
  PostDetail: { post: Post };
};

export type Post = {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
};

export type Comment = {
  id: number;
  text: string;
};
