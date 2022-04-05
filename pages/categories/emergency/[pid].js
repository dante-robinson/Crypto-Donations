import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Emergency = (props) => {
  return <CategoryTemplate category="Emergency" donation={props.donation} />;
};

export default Emergency;
