import PromptCard from "./PromptCard"
import Image from "next/image"

export default function Profile({name, desc, data, handleEdit, handleDelete, user, loading}) {
  return (
    <section className="w-full">
    <h1 className="head_text text-left"><span className="blue_gradient">{name} Profile</span></h1>
      {<>
        {user && (<div className="flex-1 flex justify-start items-center gap-3 cursor-pointer mt-6">
            <Image
                src={user?.image}
                alt='user_image'
                width={60}
                height={60}
                className="rounded-full object-contain"
            ></Image>
  
            <div className="flex flex-col">
                <h3 className="font-satoshi text-2xl font-semibold text-gray-900">{user?.username}</h3>
                <p className="font-inter text-md text-sm text-gray-500">{user?.email}</p>
            </div>
        </div>)}
        <p className="desc text-left">{desc}</p>
        
        <div className="mt-10 prompt_layout">
        {data.map(post => (
          <PromptCard
            post={post}
            key={post._id}
            handleEdit={()=> handleEdit && handleEdit(post)}
            handleDelete={()=> handleDelete && handleDelete(post)}
          />
        ))}
      </div>
      </>}
    </section>
  )
}