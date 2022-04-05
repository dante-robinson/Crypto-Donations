import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Family = (props) => {
  return <CategoryTemplate category="Family" donation={props.donation} />;
};

export default Family;
