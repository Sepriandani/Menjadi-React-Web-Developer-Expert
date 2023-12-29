import ThreadItem from "./ThreadItem";
import PropTypes from "prop-types";

function ThreadsList({ threads, upVoteBy, downVoteBy }) {
  console.log(threads);
  return (
    <div className="my-10">
      <div className="text-2xl font-semibold">Diskusi Tesedia</div>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          upVoteBy={upVoteBy}
          downVoteBy={downVoteBy}
        />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.array.isRequired,
  upVoteBy: PropTypes.func.isRequired,
  downVoteBy: PropTypes.func.isRequired,
};

export default ThreadsList;
