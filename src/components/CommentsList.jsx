import SingleComment from './SingleComment';

const CommentsList = (props) => {
  return (
    <>
      {props.comments.map((singleComment) => {
        return (
          <li key={singleComment._id}>
            <SingleComment comment={singleComment.comment} />
          </li>
        );
      })}
    </>
  );
};

export default CommentsList;
