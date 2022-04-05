import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Religious = (props) => {
  return <CategoryTemplate category="Religious" donation={props.donation} />;
};

export default Religious;
