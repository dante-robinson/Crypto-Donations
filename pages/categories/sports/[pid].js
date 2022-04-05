import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Sports = (props) => {
  return <CategoryTemplate category="Sports" donation={props.donation} />;
};

export default Sports;
