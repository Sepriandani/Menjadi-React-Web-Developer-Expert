import {
  BiDislike,
  BiLike,
  BiShare,
  BiSolidDislike,
  BiSolidLike,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { postedAt } from "../utils";
import PropTypes from "prop-types";

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteBy,
  downVoteBy,
  owner,
  authUser,
}) {
  const navigate = useNavigate();

  const isThreadUpVote = upVotesBy.includes(authUser);
  const isThreadDownVote = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVoteBy(id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVoteBy(id);
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div className="p-6 my-5 rounded-md shadow-sm border">
      <div className="mb-2 px-3 py-1 ring-1 ring-gray-500 rounded-sm inline-block">
        #{category}
      </div>
      <div
        className="mb-2 text-xl font-semibold text-indigo-500"
        role="button"
        tabIndex={0}
        onClick={onThreadClick}
        onKeyDown={onThreadPress}
      >
        {title}
      </div>
      <div className="mb-2">{body}</div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          {upVoteBy && (
            <>
              <button className="text-lg" type="button" onClick={onUpVoteClick}>
                {isThreadUpVote ? <BiSolidLike /> : <BiLike />}
              </button>
              <div>{upVotesBy.length}</div>
            </>
          )}
        </div>
        <div className="flex items-center gap-1">
          {upVoteBy && (
            <>
              <button
                className="text-lg"
                type="button"
                onClick={onDownVoteClick}
              >
                {isThreadDownVote ? <BiSolidDislike /> : <BiDislike />}
              </button>
              <div>{downVotesBy.length}</div>
            </>
          )}
        </div>

        <div className="flex items-center gap-1">
          <button className="text-lg" type="button">
            <BiShare />
          </button>
          <div>0</div>
        </div>
        <div>{postedAt(createdAt)}</div>
        <p>
          Dibuat oleh <strong>{owner}</strong>
        </p>
      </div>
    </div>
  );
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVoteBy: PropTypes.func,
  downVoteBy: PropTypes.func,
};

export default ThreadItem;
