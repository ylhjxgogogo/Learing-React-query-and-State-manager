import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams(); //获取动态路由参数 {id:1}
  //钩子用于获取和操作 URL 查询参数（query parameters）, ？后面的查询参数
  //
  const [searchParam, setSearchParam] = useSearchParams();
  // 钩子用于获取当前的 location 对象，包含有关当前 URL 的详细信息，例如路径名、查询字符串、哈希等。
  const location = useLocation();
  // console.log(params);
  // console.log(searchParam.get("name"));
  // console.log(location);
  return <p>{`User ${params.id}`}</p>;
};

export default UserDetail;
