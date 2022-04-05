import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Creative = (props) => {
  return <CategoryTemplate category="Creative" donation={props.donation} />;
};

export default Creative;
