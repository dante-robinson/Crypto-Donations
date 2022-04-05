import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Environment = (props) => {
  return <CategoryTemplate category="Environment" donation={props.donation} />;
};

export default Environment;
