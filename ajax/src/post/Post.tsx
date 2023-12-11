import './Post.css';
import {Post as TPost} from "../service/post-service.tsx";
export function Post({title, body}: TPost) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}