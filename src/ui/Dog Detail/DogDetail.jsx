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
  const [dogArr, setDogArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setLoading(true);
        const { data: dogsData, error } = await supabase
          .from("dogsData")
          .select("*");

        if (error) throw error;

        setDogArr(dogsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  const location = useLocation();
  const link = location.pathname.split("/");
  link.shift();
  link.shift();
  const newLink = link[0].split("%20").join(" ");
  const item = dogArr.find((item) => item.name === newLink);

  if (loading) return <div></div>;

  return (
    <div className="bg-[#FDFDFD]">
      <div className="mobile:hidden">
        <Header />
      </div>
      <DetailMain item={item} newLink={newLink} />
      <DetailMainMobile item={item} newLink={newLink} />
      <LovelyCustomer />
      <SeeMorePuppies item={dogArr} />
      <Footer />
    </div>
  );
}

export default DogDetail;
