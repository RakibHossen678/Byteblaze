import toast from 'react-hot-toast'
export const getBlog=()=>{
    let blogs=[]
    const storedBlog=localStorage.getItem('blog')
    if(storedBlog){
        blogs=JSON.parse(storedBlog)
    }
    return blogs
}

//save

export const saveBlog=blog=>{
    let blogs=getBlog()
    const isExist=blogs.find(b=>b.id===blog.id)
    if(isExist){
        return toast.error('Already Bookmarked!')
    }
    blogs.push(blog)
    localStorage.setItem('blog',JSON.stringify(blogs))
    toast.success('Blog Bookmarked Successfully!')
}

//delete

export const deleteBlogs=(id)=>{
    let blogs=getBlog()
    const  remaining=blogs.filter(blog=>blog.id !== id)
    localStorage.setItem('blog',JSON.stringify (remaining))
    toast.success('Blog removed from Bookmark!')
}