import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Competition = (props) => {
  return <CategoryTemplate category="Competition" donation={props.donation} />;
};

export default Competition;
