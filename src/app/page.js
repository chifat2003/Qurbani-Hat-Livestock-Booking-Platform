import HeroHome from "./component/home/hero";
import CardContainer from "./component/home/cardcontainer";
import Tips from "./component/home/tips";
import BuyTips from "./component/home/buy-tips";
import Sats from "./component/home/sats";
import Topbreads from "./component/home/topbreads";

export default function Home() {
  return (
    <div>
      <HeroHome></HeroHome>
      <Sats></Sats>
      <CardContainer></CardContainer>
      <Tips></Tips>
      <Topbreads></Topbreads>
      <BuyTips></BuyTips>

    </div>
  );
}
