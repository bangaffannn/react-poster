import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="MAGM" body="React JS is awesome" />
            <Post author="RISMA" body="Check out the full course" />
        </ul>
    );
}

export default PostsList;