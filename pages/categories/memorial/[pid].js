import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Memorial = (props) => {
  return <CategoryTemplate category="Memorial" donation={props.donation} />;
};

export default Memorial;
