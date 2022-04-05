import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Wish = (props) => {
  return <CategoryTemplate category="Wish" donation={props.donation} />;
};

export default Wish;
