import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Learing Redux Toolkit",
        content: "I have heard good things.",
    },
    {
        id: "2",
        title: "Slices...",
        content: "The more I say slice, the more I want pizza.",
    },
];

export const PostSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                //postAdded tetiklendiğinde bu kısım çalışır, nasıl değişkecek?
                state.push(action.payload);
            },
            prepare(title, content,userId) {
                //veri buradah hazırlanır
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    },
                };
            },
        },
    },
});

export const selecAllPosts = (state) => state.posts; //useSelector kullanırken direkt olarak selectAllPosts çağırılacak

export const { postAdded } = PostSlice.actions;
export default PostSlice.reducer;
