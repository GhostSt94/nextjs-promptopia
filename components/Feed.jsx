"use client"

import { useState, useEffect, useRef } from "react";
import PromptCard from "./PromptCard";

export default function Feed() {

  const [posts, setPosts] = useState([])
  const inputSearch = useRef()
  let timeoutId;

  const searchPosts = async (immediate=false) => {
    window.clearTimeout(timeoutId)
    let timer = immediate ? 0 : 750
    timeoutId = setTimeout(async () => {

      console.log('timer', timer);
      
      let q = inputSearch.current.value || ''
      console.log('search', q);
      const response = await fetch('/api/prompt?search='+q);
      const data = await response.json()

      setPosts(data)
    },timer);
  }

  const selectTag = (val) => {
    if(inputSearch.current.value === val) return
    
    inputSearch.current.value = val
    searchPosts(true)
  }
  
  useEffect(() => {
    searchPosts()
  },[])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          className="search_input peer"
          ref={inputSearch}
          onChange={()=>searchPosts()}
          required
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={selectTag}
      />
    </section>
  )
}

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map(post => (
        <PromptCard
          post={post}
          key={post._id}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}