import { FC } from "react"
import { IPost } from "../models/IPost"

interface PostItemProps {
	post: IPost
}

const Postitem: FC<PostItemProps> = ({ post }) => {
	return (
		<div>
			{post.title}
			<button>delete</button>
		</div>
	)
}
export default Postitem