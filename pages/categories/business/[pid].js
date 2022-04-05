import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Business = (props) => {
  return <CategoryTemplate category="Business" donation={props.donation} />;
};

export default Business;
