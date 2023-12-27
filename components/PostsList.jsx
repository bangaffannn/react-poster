import { useState } from 'react'

import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList( {isPosting, onStopPosting} ) {

    // APPROACH VISIBLE CONTENT USING VARIABLE
    // let modalContent;
    // if (modalIsVisible) {
    //     modalContent = <Modal onClose={hideModallHandler}>
    //         <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    //     </Modal>
    // }

    return (
    <>
        {isPosting && (<Modal onClose={onStopPosting}>
            <NewPost 
                onCancel={onStopPosting} />
         </Modal>)}
        <ul className={classes.posts}>
            <Post author="RISMA" body="Check out the full course" />
        </ul>
    </>
    );
}

export default PostsList;