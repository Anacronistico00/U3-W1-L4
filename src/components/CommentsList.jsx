import SingleComment from './SingleComment';

const CommentsList = (props) => {
  return (
    <>
      {props.comments.map((singleComment) => {
        return (
          <li key={singleComment._id}>
            <SingleComment
              comment={singleComment.comment}
              id={singleComment._id}
            />
          </li>
        );
      })}
    </>
  );
};

export default CommentsList;
