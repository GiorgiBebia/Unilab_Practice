import { useLocation } from "react-router-dom";
import { dogsData } from "../../data/dogsData";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { SeeMorePuppies } from "./SeeMorePuppies";
import { LovelyCustomer } from "./LovelyCustomer";
import { DetailMainMobile } from "./DetailMainMobile";
import { DetailMain } from "./DetailMain";

function DogDetail() {
  const arr = [...dogsData];
  const location = useLocation();
  const link = location.pathname.split("/");
  link.shift();
  link.shift();
  const newLink = link[0].split("%20").join(" ");
  const item = arr.find((item) => item.name === newLink);

  return (
    <div className="bg-[#FDFDFD]">
      <div className="mobile:hidden">
        <Header />
      </div>
      <DetailMain item={item} newLink={newLink} />
      <DetailMainMobile item={item} newLink={newLink} />
      <LovelyCustomer />
      <SeeMorePuppies item={arr} />
      <Footer />
    </div>
  );
}

export default DogDetail;
