import { Header } from "../Header";
import { Footer } from "../Footer";
import { CategoryMain } from "./CategoryMain";
import { Banner3 } from "./Banner3";
import { FastCategory } from "./FastCategory";

function Category() {
  return (
    <div className="bg-[#FDFDFD] flex flex-col">
      <Header />
      <FastCategory />
      <Banner3 />
      <CategoryMain />
      <Footer />
    </div>
  );
}

export default Category;
