'use client'

import { useState, useEffect } from 'react'

import Profile from '@components/Profile'

export default function OtherProfile({ params }) {
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json()
    
            setPosts(data?.prompts)
            setUser(data?.user)
        }
    
        fetchPosts()
      },[])

  return (
      <Profile
          name=''
          user={user}
          desc={`Welcome to ${user?.username || ''} profile page`}
          data={posts}
      />
  )
}
