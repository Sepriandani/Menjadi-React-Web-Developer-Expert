import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import ThreadsList from "../components/ThreadsList";
import {
  asyncToogleDownVoteThread,
  asyncToogleUpVoteThread,
} from "../states/threads/action";
import { useEffect } from "react";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";

function ThreadsPage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteBy = (id) => {
    dispatch(asyncToogleUpVoteThread(id));
  };

  const onDownVoteBy = (id) => {
    dispatch(asyncToogleDownVoteThread(id));
  };

  const threadsList = threads.map((thread) => ({
    ...thread,
    authUser: authUser.id,
    owner: users.find((user) => user.id === thread.ownerId)?.name || null,
  }));

  return (
    <>
      <Categories threads={threadsList} />
      <ThreadsList
        threads={threadsList}
        upVoteBy={onUpVoteBy}
        downVoteBy={onDownVoteBy}
      />
    </>
  );
}

export default ThreadsPage;
