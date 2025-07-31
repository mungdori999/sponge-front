import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header/Header";
import routerUrl from "../data/router-url";
import BackButton from "../component/common/BackButton";
import LoginButton from "../component/Header/LoginButton";
import Post from "../component/PostList/Post";
import { BsGenderAmbiguous } from "react-icons/bs";
import { b } from "framer-motion/client";

const PostPage = () => {
  const nav = useNavigate();
  const { postId } = useParams();
  const post = {
    title: "제가 없을 때 아이가 계속 짖어요",
    content:
      "안녕하세요, 제가 외출할 때마다 제 강아지가 계속 짖는 문제가 있습니다. 이 문제를 해결할 수 있는 방법이 있을까요? 제가 집에 없을 때 아이가 불안해하는 것 같아서 걱정입니다. 훈련사님들의 조언을 부탁드립니다.",
    postCategoryList: ["훈련", "짖음", "분리불안"],
    tagList: ["훈련", "짖음", "분리불안"],
  };
  const pet = {
    name: "바둑이",
    gender: "수컷",
    breed: "믹스견",
    weight: "5",
    age: "3살",
  };
  return (
    <div className="PostPage">
      <Header
        leftchild={<BackButton />}
        rightchild={
          <LoginButton
            text={"로그인/가입"}
            onClick={() => nav(routerUrl.login)}
          />
        }
      />
      <Post post={post} pet={pet} />
    </div>
  );
};

export default PostPage;
