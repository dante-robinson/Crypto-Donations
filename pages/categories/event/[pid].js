import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Event = (props) => {
  return <CategoryTemplate category="Event" donation={props.donation} />;
};

export default Event;
