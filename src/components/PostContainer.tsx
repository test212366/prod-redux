import { FC } from "react"
import { postAPI } from "../services/PostService"
import Postitem from "./PostItem"

const PostContainer: FC = () => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5)


	return (
		<div>
			{posts?.map((post, i: number) =>
				<Postitem key={i} post={post} />
			)}
		</div>
	)
}
export default PostContainer