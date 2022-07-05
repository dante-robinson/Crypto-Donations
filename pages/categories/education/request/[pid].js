import { useRouter } from "next/router";
import RequestTemplate from "../../../../src/components/RequestTemplate";

const RequestDetails = (props) => {
  const router = useRouter();
  const currentRequest = router.query.pid;

  return (
    <RequestTemplate
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
      currentRequest={currentRequest}
      category="Education"
      donation={props.donation}
    />
  );
};

export default RequestDetails;
