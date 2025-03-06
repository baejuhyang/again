// PostItem 컴포넌트입니다.

export type Post = {
    userid: number;
    id: number;
    title: string;
    body: string;
};

interface Props {
    key: number;
    post: Post;
}

const PostItem = ({ post }: Props) => {
    return (
        <div className="PostItem">
            <div>
                <span className="id">No. {post.id}</span>
                <span className="title">- {post.title}</span>
            </div>
            <p className="body">{post.body.slice(0, 120)}...</p>
        </div>
    );
};

export default PostItem;
