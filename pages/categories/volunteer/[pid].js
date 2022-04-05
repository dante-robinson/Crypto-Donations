import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";

const Volunteer = (props) => {
  return <CategoryTemplate category="Volunteer" donation={props.donation} />;
};

export default Volunteer;
