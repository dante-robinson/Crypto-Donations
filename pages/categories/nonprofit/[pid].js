import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const NonProfit = (props) => {
  return <CategoryTemplate category="NonProfit" donation={props.donation} />;
};

export default NonProfit;
