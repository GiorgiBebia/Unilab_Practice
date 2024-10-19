import { useState, useEffect } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Dogs } from "./Dogs";
import supabase from "../../data/supabase";

export function CategoryMain() {
  const [dogData, setDogData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (window.innerWidth <= 414) setItemsPerPage(20);
    if (window.innerWidth > 414) setItemsPerPage(15);
  }, []);

  // Fetch Dogs Data
  useEffect(() => {
    const fetchDogs = async () => {
      let { data: dogsData, error } = await supabase
        .from("dogsData")
        .select("*");

      if (error) console.log(`err: ${error}`);

      if (dogsData) setDogData(dogsData);
    };

    fetchDogs();
  }, []);
  // Fetch Dogs Data

  // Pagination
  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handlePageChange(pageNumber) {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  }
  // Pagination

  // Filter
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const filteredDogs = dogData.filter((dog) => {
    const genderMatch = selectedGender ? dog.gender === selectedGender : true;
    const colorMatch = selectedColor ? dog.color === selectedColor : true;
    const breedMatch = selectedBreed ? dog.breed === selectedBreed : true;
    const priceMatch =
      (minPrice === null || dog.price >= minPrice) &&
      (maxPrice === null || dog.price <= maxPrice);

    return genderMatch && colorMatch && breedMatch && priceMatch;
  });

  function handleFilterChange(type, value) {
    setCurrentPage(1);

    if (type === "gender") setSelectedGender(value);
    if (type === "color") setSelectedColor(value);
    if (type === "breed") setSelectedBreed(value);
  }

  function handlePriceChange(type, value) {
    setCurrentPage(1);

    if (type === "minPrice") setMinPrice(value !== "" ? Number(value) : null);
    if (type === "maxPrice") setMaxPrice(value !== "" ? Number(value) : null);
  }

  function clearFilter() {
    setSelectedGender(null);
    setSelectedColor(null);
    setSelectedBreed(null);
    setMinPrice(null);
    setMaxPrice(null);
  }
  // Filter

  // Sort
  const [sortType, setSortType] = useState("age");
  const [sortOrder, setSortOrder] = useState("asc");
  const currentItems = sortedDogs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedDogs.length / itemsPerPage);

  const sortedDogs = [...filteredDogs].sort((a, b) => {
    if (sortType === "age") {
      return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
    }
    if (sortType === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  function handleSortChange(type) {
    setSortType(type);
    setCurrentPage(1);
  }

  function handleSortOrderChange(order) {
    setSortOrder(order);
    setCurrentPage(1);
  }

  function handleSort(e) {
    const [selectedSortType, selectedSortOrder] = e.target.value.split("-");
    handleSortChange(selectedSortType);
    handleSortOrderChange(selectedSortOrder);
  }
  // Sort

  // Mobile Filter
  const [showFilter, setShowFilter] = useState(false);

  function handleFilter() {
    setShowFilter((val) => !val);
  }
  // Mobile Filter

  return (
    <div className="max-w-[1180px] mobile:max-w-[383px] w-full mt-[35px] mx-auto flex gap-[20px] mb-[60px] mobile:flex-col">
      <div className="w-[280px] h-[685px] flex flex-col mobile:hidden">
        <h3 className="font-SFProDisplay font-bold text-[24px] text-[#003459]">
          Filter
        </h3>
        <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F] mt-[14px]">
          Gender
        </h3>

        <div className="flex gap-[10px] items-center mt-[10px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="gender"
            value="Male"
            checked={selectedGender === "Male"}
            onChange={() => handleFilterChange("gender", "Male")}
          />
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Male
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="gender"
            value="Female"
            checked={selectedGender === "Female"}
            onChange={() => handleFilterChange("gender", "Female")}
          />
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Female
          </label>
        </div>

        <div className="w-[280px] h-[1px] bg-[#EBEEEF] my-[16px]"></div>

        <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F]">
          Color
        </h3>

        <div className="flex gap-[10px] items-center mt-[10px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="color"
            value="Red"
            checked={selectedColor === "Red"}
            onChange={() => handleFilterChange("color", "Red")}
          />
          <div className="w-[15px] h-[15px] bg-[#FF564F] rounded-full"></div>
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Red
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="color"
            value="Apricot"
            checked={selectedColor === "Apricot"}
            onChange={() => handleFilterChange("color", "Apricot")}
          />
          <div className="w-[15px] h-[15px] bg-[#FFB672] rounded-full"></div>
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Apricot
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="color"
            value="Black"
            checked={selectedColor === "Black"}
            onChange={() => handleFilterChange("color", "Black")}
          />
          <div className="w-[15px] h-[15px] bg-[#242B33] rounded-full"></div>
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Black
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="color"
            value="Black & White"
            checked={selectedColor === "Black & White"}
            onChange={() => handleFilterChange("color", "Black & White")}
          />
          <div className="w-[15px] h-[15px] bg-blackWhite rounded-full"></div>
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Black & White
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="color"
            value="Silver"
            checked={selectedColor === "Silver"}
            onChange={() => handleFilterChange("color", "Silver")}
          />
          <div className="w-[15px] h-[15px] bg-[#CECECE] rounded-full"></div>
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Silver
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="color"
            value="Tan"
            checked={selectedColor === "Tan"}
            onChange={() => handleFilterChange("color", "Tan")}
          />
          <div className="w-[15px] h-[15px] bg-[#FFF7CE] rounded-full"></div>
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Tan
          </label>
        </div>

        <div className="w-[280px] h-[1px] bg-[#EBEEEF] my-[16px]"></div>

        <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F]">
          Price
        </h3>

        <div className="w-[280px] h-[40px] mt-[10px] flex justify-between">
          <input
            className="w-[135px] h-[40px] border-b border-b-[#EBEEEF]"
            type="number"
            placeholder="Min"
            value={minPrice !== null ? minPrice : ""}
            onChange={(e) => handlePriceChange("minPrice", e.target.value)}
          />
          <input
            className="w-[135px] h-[40px] border-b border-b-[#EBEEEF]"
            type="number"
            placeholder="Max"
            value={maxPrice !== null ? maxPrice : ""}
            onChange={(e) => handlePriceChange("maxPrice", e.target.value)}
          />
        </div>

        <div className="w-[280px] h-[1px] bg-[#EBEEEF] my-[16px]"></div>

        <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F]">
          Breed
        </h3>

        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="breed"
            value="Small"
            checked={selectedBreed === "Small"}
            onChange={() => handleFilterChange("breed", "Small")}
          />
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Small
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="breed"
            value="Medium"
            checked={selectedBreed === "Medium"}
            onChange={() => handleFilterChange("breed", "Medium")}
          />
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Medium
          </label>
        </div>
        <div className="flex gap-[10px] items-center mt-[8px]">
          <input
            className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
            type="radio"
            name="breed"
            value="Large"
            checked={selectedBreed === "Large"}
            onChange={() => handleFilterChange("breed", "Large")}
          />
          <label
            className="font-SFProDisplay font-medium text-[14px]"
            htmlFor=""
          >
            Large
          </label>
        </div>

        {(selectedGender ||
          selectedColor ||
          selectedBreed ||
          minPrice ||
          maxPrice) && (
          <div
            className="w-[100px] h-[44px] bg-red-500 p-[10px] rounded-full mx-auto mt-[20px] font-SFProDisplay text-white text-center cursor-pointer"
            onClick={clearFilter}
          >
            Clear Filter
          </div>
        )}
      </div>

      <div className="hidden mobile:flex justify-between w-[374px] h-[38px] items-center">
        <div className="w-[215px] h-[34px] border border-[#CCD1D2] rounded-[20px] flex items-center gap-[16px] justify-center">
          <select
            className="font-SFProDisplay text-[14px] text-[#667479]"
            value={`${sortType}-${sortOrder}`}
            onChange={(e) => {
              handleSort(e);
            }}
          >
            <option value="age-asc">Sort by: Age (Ascending)</option>
            <option value="age-desc">Sort by: Age (Descending)</option>
            <option value="price-asc">Sort by: Price (Ascending)</option>
            <option value="price-desc">Sort by: Price (Descending)</option>
          </select>
        </div>

        <div className="w-[89px] h-[38px] flex gap-[12px] items-center justify-center">
          <BiFilterAlt
            className="text-[#002A48] w-[24px] h-[24px]"
            onClick={handleFilter}
          />

          <span className="font-SFProDisplay font-bold text-[16px] text-[#002A48]">
            Filter
          </span>
        </div>
      </div>

      {showFilter && (
        <div className="fixed inset-0 bg-[rgba(18,18,18,0.6)]">
          <div className="w-[380px] h-[468px] absolute top-[53px] left-[17px] bg-white rounded-[16px]">
            <div className="w-[350px] h-[468px] flex flex-col mx-auto justify-between">
              <div className="flex gap-[115px]">
                <MdClose
                  className="w-[32px] h-[32px] mt-[5px]"
                  onClick={() => setShowFilter(false)}
                />
                <h3 className="font-SFProDisplay font-bold text-[24px] text-[#003459] text-center">
                  Filter
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F]">
                  Gender
                </h3>

                <div className="flex gap-[10px] items-center">
                  <input
                    className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={selectedGender === "Male"}
                    onChange={() => handleFilterChange("gender", "Male")}
                  />
                  <label
                    className="font-SFProDisplay font-medium text-[14px]"
                    htmlFor=""
                  >
                    Male
                  </label>
                </div>
                <div className="flex gap-[10px] items-center">
                  <input
                    className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={selectedGender === "Female"}
                    onChange={() => handleFilterChange("gender", "Female")}
                  />
                  <label
                    className="font-SFProDisplay font-medium text-[14px]"
                    htmlFor=""
                  >
                    Female
                  </label>
                </div>
              </div>

              <div className="w-[350px] flex items-center justify-between gap-[18px]">
                <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F]">
                  Color
                </h3>
                <div className="flex w-[230px] flex-wrap justify-between">
                  <div className="flex gap-[10px] items-center mt-[10px]">
                    <input
                      className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                      type="radio"
                      name="color"
                      value="Red"
                      checked={selectedColor === "Red"}
                      onChange={() => handleFilterChange("color", "Red")}
                    />
                    <div className="w-[15px] h-[15px] bg-[#FF564F] rounded-full"></div>
                    <label
                      className="font-SFProDisplay font-medium text-[14px]"
                      htmlFor=""
                    >
                      Red
                    </label>
                  </div>
                  <div className="flex gap-[10px] items-center mt-[8px]">
                    <input
                      className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                      type="radio"
                      name="color"
                      value="Apricot"
                      checked={selectedColor === "Apricot"}
                      onChange={() => handleFilterChange("color", "Apricot")}
                    />
                    <div className="w-[15px] h-[15px] bg-[#FFB672] rounded-full"></div>
                    <label
                      className="font-SFProDisplay font-medium text-[14px]"
                      htmlFor=""
                    >
                      Apricot
                    </label>
                  </div>
                  <div className="flex gap-[10px] items-center mt-[8px]">
                    <input
                      className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                      type="radio"
                      name="color"
                      value="Black"
                      checked={selectedColor === "Black"}
                      onChange={() => handleFilterChange("color", "Black")}
                    />
                    <div className="w-[15px] h-[15px] bg-[#242B33] rounded-full"></div>
                    <label
                      className="font-SFProDisplay font-medium text-[14px]"
                      htmlFor=""
                    >
                      Black
                    </label>
                  </div>
                  <div className="flex gap-[10px] items-center mt-[8px]">
                    <input
                      className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                      type="radio"
                      name="color"
                      value="Black & White"
                      checked={selectedColor === "Black & White"}
                      onChange={() =>
                        handleFilterChange("color", "Black & White")
                      }
                    />
                    <div className="w-[15px] h-[15px] bg-blackWhite rounded-full"></div>
                    <label
                      className="font-SFProDisplay font-medium text-[14px]"
                      htmlFor=""
                    >
                      Black & White
                    </label>
                  </div>
                  <div className="flex gap-[10px] items-center mt-[8px]">
                    <input
                      className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                      type="radio"
                      name="color"
                      value="Silver"
                      checked={selectedColor === "Silver"}
                      onChange={() => handleFilterChange("color", "Silver")}
                    />
                    <div className="w-[15px] h-[15px] bg-[#CECECE] rounded-full"></div>
                    <label
                      className="font-SFProDisplay font-medium text-[14px]"
                      htmlFor=""
                    >
                      Silver
                    </label>
                  </div>
                  <div className="flex gap-[10px] items-center mt-[8px]">
                    <input
                      className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                      type="radio"
                      name="color"
                      value="Tan"
                      checked={selectedColor === "Tan"}
                      onChange={() => handleFilterChange("color", "Tan")}
                    />
                    <div className="w-[15px] h-[15px] bg-[#FFF7CE] rounded-full"></div>
                    <label
                      className="font-SFProDisplay font-medium text-[14px]"
                      htmlFor=""
                    >
                      Tan
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F]">
                  Price
                </h3>
                <div className="w-[280px] h-[40px] flex justify-between">
                  <input
                    className="w-[135px] h-[40px] border-b border-b-[#EBEEEF]"
                    type="number"
                    placeholder="Min"
                    value={minPrice !== null ? minPrice : ""}
                    onChange={(e) =>
                      handlePriceChange("minPrice", e.target.value)
                    }
                  />
                  <input
                    className="w-[135px] h-[40px] border-b border-b-[#EBEEEF] "
                    type="number"
                    placeholder="Max"
                    value={maxPrice !== null ? maxPrice : ""}
                    onChange={(e) =>
                      handlePriceChange("maxPrice", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h3 className="font-SFProDisplay font-bold text-[16px] text-[#00171F]">
                  Breed
                </h3>
                <div className="flex gap-[10px] items-center ">
                  <input
                    className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                    type="radio"
                    name="breed"
                    value="Small"
                    checked={selectedBreed === "Small"}
                    onChange={() => handleFilterChange("breed", "Small")}
                  />
                  <label
                    className="font-SFProDisplay font-medium text-[14px]"
                    htmlFor=""
                  >
                    Small
                  </label>
                </div>
                <div className="flex gap-[10px] items-center ">
                  <input
                    className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                    type="radio"
                    name="breed"
                    value="Medium"
                    checked={selectedBreed === "Medium"}
                    onChange={() => handleFilterChange("breed", "Medium")}
                  />
                  <label
                    className="font-SFProDisplay font-medium text-[14px]"
                    htmlFor=""
                  >
                    Medium
                  </label>
                </div>
                <div className="flex gap-[10px] items-center ">
                  <input
                    className="appearance-none w-[16px] h-[16px] border border-gray-400 rounded-none checked:bg-blue-500 checked:border-transparent"
                    type="radio"
                    name="breed"
                    value="Large"
                    checked={selectedBreed === "Large"}
                    onChange={() => handleFilterChange("breed", "Large")}
                  />
                  <label
                    className="font-SFProDisplay font-medium text-[14px]"
                    htmlFor=""
                  >
                    Large
                  </label>
                </div>
              </div>

              <div
                className="w-[100px] h-[44px] bg-red-500 p-[10px] rounded-full mx-auto mt-[20px] font-SFProDisplay text-white text-center cursor-pointer"
                onClick={clearFilter}
              >
                Clear Filter
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-[880px] mobile:w-[382px] mobile:mx-auto">
        <div className="max-w-[873px] w-full h-[39px] flex items-center justify-between">
          <div className="flex gap-[17px] items-center">
            <h3 className="font-SFProDisplay font-bold text-[24px] text-[#003459]">
              Small Dog
            </h3>
            <span className="font-SFProDisplay text-[14px] text-[#667479] mt-[5px]">
              {filteredDogs.length} puppies
            </span>
          </div>

          <div className="w-[215px] h-[34px] border border-[#CCD1D2] rounded-[20px] flex items-center gap-[16px] justify-center mobile:hidden">
            <select
              className="font-SFProDisplay text-[14px] text-[#667479]"
              value={`${sortType}-${sortOrder}`}
              onChange={(e) => {
                handleSort(e);
              }}
            >
              <option value="age-asc">Sort by: Age (Ascending)</option>
              <option value="age-desc">Sort by: Age (Descending)</option>
              <option value="price-asc">Sort by: Price (Ascending)</option>
              <option value="price-desc">Sort by: Price (Descending)</option>
            </select>
          </div>
        </div>

        <div className="flex gap-[20px] mobile:gap-[12px] flex-wrap mt-[22px] mobile:mt-[16px] mobile:w-[382px] mobile:h-[3278px]">
          {currentItems.map((item, i) => (
            <Dogs item={item} key={i} />
          ))}
        </div>

        <div className="flex justify-center mt-4 w-[356px] h-[34px] mx-auto gap-[12px]">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-[34px] h-[34px] ${
              currentPage === 1 ? "opacity-50" : ""
            }`}
          >
            <IoArrowBackSharp className="text-[#002A48]" />
          </button>
          <span className="flex justify-center items-center gap-[12px]">
            {currentPage > 1 && (
              <span
                className="w-[34px] h-[34px] font-SFProDisplay text-[#002A48] font-bold content-center text-center cursor-pointer"
                onClick={handlePrevPage}
              >
                {currentPage - 1}
              </span>
            )}
            <span className="w-[34px] h-[34px] font-SFProDisplay text-[18px] bg-[#003459] text-white rounded-[8px] content-center text-center cursor-pointer">
              {currentPage}
            </span>
            {currentPage < totalPages && (
              <span
                className="w-[34px] h-[34px] font-SFProDisplay text-[#002A48] font-bold content-center text-center cursor-pointer"
                onClick={handleNextPage}
              >
                {currentPage + 1}
              </span>
            )}

            {currentPage + 1 < totalPages && (
              <>
                <span className="w-[34px] h-[34px] font-SFProDisplay text-[#002A48] font-bold content-center text-center cursor-pointer">
                  ...
                </span>
                <span
                  className="w-[34px] h-[34px] font-SFProDisplay text-[#002A48] font-bold content-center text-center cursor-pointer"
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </span>
              </>
            )}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-[34px] h-[34px] ${
              currentPage === totalPages ? "opacity-50" : ""
            }`}
          >
            <IoMdArrowRoundForward className="text-[#002A48]" />
          </button>
        </div>
      </div>
    </div>
  );
}
