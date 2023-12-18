import { PostCardContainer, PostContent, PostHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../../../@types/post";


interface PostCardProps {
    post: PostType;
}

export function PostCard({ post }: PostCardProps) {
    const navigate = useNavigate();

    function handlePostClick() {
        navigate(`/post/${post.number}`)
    }

    return (
        <PostCardContainer onClick={handlePostClick}>
            <PostHeader>
                <div><h2>{post.title}</h2></div>
            </PostHeader>
            <PostContent>
                <span>{(post.body).substring(0, 170)}...</span>
            </PostContent>

        </PostCardContainer>
    )
}