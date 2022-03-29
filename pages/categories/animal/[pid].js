import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Animal = (props) => {
  return <CategoryTemplate category="Animal" donation={props.donation} />;
};

export default Animal;
