import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { postedAt } from "../utils";
import PropTypes from "prop-types";
import UpVoteButton from "./button/UpVoteButton";
import DownVoteButton from "./button/DownVoteButton";
import ShareVoteButton from "./button/ShareVoteButton";

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
      <div className="mb-2">{parse(body)}</div>
      <div className="flex gap-4">
        <UpVoteButton
          upVoteBy={upVoteBy}
          upVotesBy={upVotesBy}
          isThreadUpVote={isThreadUpVote}
          onUpVoteClick={onUpVoteClick}
        />
        <DownVoteButton
          downVoteBy={downVoteBy}
          downVotesBy={downVotesBy}
          isThreadDownVote={isThreadDownVote}
          onDownVoteClick={onDownVoteClick}
        />
        <ShareVoteButton />
        <div>{postedAt(createdAt)}</div>
        <p>
          Dibuat oleh <strong>{owner}</strong>
        </p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVoteBy: PropTypes.func,
  downVoteBy: PropTypes.func,
};

export default ThreadItem;
export { threadItemShape, userShape };
