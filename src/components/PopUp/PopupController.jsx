import PopupView from "./PopupView"
import Model from './PopupModel';
import { useEffect, useState } from "react";

const PopupController = ({isOpen, setIsOpen}) => {
    const [posts, setPosts] = useState();
    
    useEffect(() => {
        Model.getUserPosts(isOpen)
        .then((data) => setPosts(data))
    }, [])
  return (
    <PopupView posts={posts} isOpen={isOpen} setIsOpen={setIsOpen} />
  )
}

export default PopupController