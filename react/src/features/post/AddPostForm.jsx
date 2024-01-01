import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';


export default function AddPostForm() {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userId,setUseId] = useState('');

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();


    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const onSavePostCliked = () => {
        if (canSave) {
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('')
            setContent('')
        }
    }


    const usersOptions = users.map((user,index)=>(
        <option key={index} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <div className='text-white w-full text-center'>
        <h3 className='text-5xl'>Add a New Post</h3>
        <form  className='flex flex-col justify-center items-center gap-4 mt-10 w-1/2 mx-auto' >
            <div className='flex flex-col justify-center items-center gap-2 w-full'>
                <label className='text-3xl' htmlFor="">
                    Post Title
                </label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={e =>setTitle(e.target.value)}
                 className='w-1/2 rounded-md bg-amber-800 p-2'  />
            </div>

            <div className='flex flex-col justify-center items-center gap-2 w-full mt-2'>
                <label className='text-3xl' htmlFor="">
                      Author
                </label>
                <select className='w-1/2 rounded-md bg-amber-800 p-2'
                 name="postAuthor" value={userId} onChange={e =>setUseId(e.target.value)} >
                    <option value="">Select...</option>
                    {usersOptions}
                </select>
            </div>

            <div className='flex flex-col justify-center items-center gap-2 w-full mt-2'>
                <label htmlFor="">
                    Content
                </label>

               <textarea id="postContent" name="postContent" value={content} onChange={e=> setContent(e.target.value)}
                className='w-1/2 rounded-md bg-amber-800 p-2' cols="30" rows="10"></textarea>
            </div>

            <div className='mt-4'>
                <button type='button' disabled={!canSave}
                onClick={onSavePostCliked} className="bg-amber-600 px-4 py-2 rounded-md hover:bg-amber-700">
                    Save Post
                </button>
            </div>
        </form>
    </div>
  )
}

