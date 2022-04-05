import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Community = (props) => {
  return <CategoryTemplate category="Community" donation={props.donation} />;
};

export default Community;
