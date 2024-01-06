import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
} from "../states/threadDetail/action";
import NotFoundPage from "./NotFoundPage";
import ThreadDetail from "../components/ThreadDetail";

function DetailThreadPage() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeutralizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  if (threadDetail === null) {
    return <NotFoundPage />;
  }

  return (
    <ThreadDetail
      {...threadDetail}
      authUser={authUser.id}
      upVoteThreadDetail={onUpVoteThreadDetail}
      downVoteThreadDetail={onDownVoteThreadDetail}
      neutralizeVoteThreadDetail={onNeutralizeVoteThreadDetail}
    />
  );
}

export default DetailThreadPage;
