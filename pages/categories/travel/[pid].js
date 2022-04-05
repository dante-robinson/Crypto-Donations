import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Travel = (props) => {
  return <CategoryTemplate category="Travel" donation={props.donation} />;
};

export default Travel;
