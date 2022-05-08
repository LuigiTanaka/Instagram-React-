import Stories from "./Stories";
import Posts from "./Posts";

export default function Container() {
    return (
        <div class="stories-posts">
            <Stories />
            <Posts />
        </div>
    );
}