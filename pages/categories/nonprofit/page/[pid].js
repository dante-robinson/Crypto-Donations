import { useRouter } from "next/router";
import CategoryTemplate from "../../../../src/components/CategoryTemplate";

const NonProfit = (props) => {
  const router = useRouter();
  const currentPage = router.query.pid;

  return (
    <CategoryTemplate
      Bitcoin={props.Bitcoin}
      BitcoinCash={props.BitcoinCash}
      Cardano={props.Cardano}
      Dash={props.Dash}
      Dogecoin={props.Dogecoin}
      Ethereum={props.Ethereum}
      Litecoin={props.Litecoin}
      Monero={props.Monero}
      Polygon={props.Polygon}
      Ripple={props.Ripple}
      Stellar={props.Stellar}
      ZCash={props.ZCash}
      currentPage={currentPage}
      category="animal"
      donation={props.donation}
    />
  );
};

export default NonProfit;
