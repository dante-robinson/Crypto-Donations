import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Individual = (props) => {
  return <CategoryTemplate category="Individual" donation={props.donation} />;
};

export default Individual;
