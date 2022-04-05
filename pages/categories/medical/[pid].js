import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Medical = (props) => {
  return <CategoryTemplate category="Medical" donation={props.donation} />;
};

export default Medical;
