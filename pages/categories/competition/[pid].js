import { useRouter } from "next/router";
import CategoryTemplate from "../../../src/components/CategoryTemplate";
// Calling from [pid] prevents needing to redownload same images over and over
import Algorand from "../../../public/Algorand.png";
import Avalanche from "../../../public/Avalanche.png";
import Bitcoin from "../../../public/Bitcoin.png";
import BitcoinCash from "../../../public/BitcoinCash.png";
import BSC from "../../../public/BSC.png";
import Cardano from "../../../public/Cardano.png";
import Cosmos from "../../../public/Cosmos.png";
import Dash from "../../../public/Dash.png";
import Dogecoin from "../../../public/Dogecoin.png";
import Elrond from "../../../public/Elrond.png";
import Ethereum from "../../../public/Ethereum.png";
import EthereumClassic from "../../../public/EthereumClassic.png";
import Fantom from "../../../public/Fantom.png";
import Harmony from "../../../public/Harmony.png";
import Litecoin from "../../../public/Litecoin.png";
import Monero from "../../../public/Monero.png";
import Polkadot from "../../../public/Polkadot.png";
import Polygon from "../../../public/Polygon.png";
import Ripple from "../../../public/Ripple.png";
import Solana from "../../../public/Solana.png";
import Stellar from "../../../public/Stellar.png";
import Terra from "../../../public/Terra.png";
import ZCash from "../../../public/ZCash.png";

const Competition = (props) => {
  const router = useRouter();
  const currentPage = router.query.pid;

  return (
    <CategoryTemplate
      Algorand={Algorand}
      Avalanche={Avalanche}
      Bitcoin={Bitcoin}
      BitcoinCash={BitcoinCash}
      BSC={BSC}
      Cardano={Cardano}
      Cosmos={Cosmos}
      Dash={Dash}
      Dogecoin={Dogecoin}
      Elrond={Elrond}
      Ethereum={Ethereum}
      EthereumClassic={EthereumClassic}
      Fantom={Fantom}
      Harmony={Harmony}
      Litecoin={Litecoin}
      Monero={Monero}
      Polkadot={Polkadot}
      Polygon={Polygon}
      Ripple={Ripple}
      Solana={Solana}
      Stellar={Stellar}
      Terra={Terra}
      ZCash={ZCash}
      currentPage={currentPage}
      category="animal"
      donation={props.donation}
    />
  );
};

export default Competition;
