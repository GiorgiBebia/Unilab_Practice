import { useLocation } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { SeeMorePuppies } from "./SeeMorePuppies";
import { LovelyCustomer } from "./LovelyCustomer";
import { DetailMainMobile } from "./DetailMainMobile";
import { DetailMain } from "./DetailMain";
import supabase from "../../data/supabase";
import { useEffect, useState } from "react";

function DogDetail() {
  const [arr, setArr] = useState([]);

  const location = useLocation();
  const link = location.pathname.split("/");
  link.shift();
  link.shift();
  const newLink = link[0].split("%20").join(" ");
  const item = arr.find((item) => item.name === newLink);

  useEffect(() => {
    const fetchDogs = async () => {
      let { data: dogsData, error } = await supabase
        .from("dogsData")
        .select("*");

      if (error) console.log(`err: ${error}`);

      if (dogsData) setArr(dogsData);
    };

    fetchDogs();
  }, []);

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
