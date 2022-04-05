import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Education = (props) => {
  return <CategoryTemplate category="Education" donation={props.donation} />;
};

export default Education;
