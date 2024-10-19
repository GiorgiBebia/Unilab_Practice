import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import supabase from "../../data/supabase";

function Chat() {
  const [dogsArray, setDogsArray] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const link = location.pathname.split("/").slice(2);
  const dogName = decodeURIComponent(link[0]);
  const item = dogsArray.find((dog) => dog.name === dogName);

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem(`chat-${dogName}`);
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    const fetchDogs = async () => {
      let { data: dogsData, error } = await supabase
        .from("dogsData")
        .select("*");

      if (error) console.log(`err: ${error}`);

      if (dogsData) setDogsArray(dogsData);
    };

    fetchDogs();
  }, []);

  useEffect(() => {
    localStorage.setItem(`chat-${dogName}`, JSON.stringify(messages));
  }, [messages, dogName]);

  const handleSendMessage = (message, response) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "sent" },
    ]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, type: "received" },
      ]);
    }, 1000);
  };

  const handleQuickReply = (query) => {
    let response;
    switch (query) {
      case "What is the price?":
        response = `My Price is ${item.price.toLocaleString()} VND`;
        break;
      case "What is your age?":
        response = `My Age is ${item.age} Month`;
        break;
      case "What is your gender?":
        response = `My Gender is ${item.gender}`;
        break;
      default:
        response = "I don't understand.";
    }
    handleSendMessage(query, response);
  };

  return (
    <div className="w-[414px] h-[997px] relative">
      <img
        className="w-[414px] h-[523px] object-cover"
        src={item.img}
        alt={item.name}
      />

      <IoIosArrowBack
        className="absolute top-[69.5px] left-[26px] w-[25px] h-[25px] text-white cursor-pointer"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      />
      <AiOutlineInfoCircle
        className="absolute text-white top-[64px] right-[16px] w-[25px] h-[25px]"
        aria-label="More information"
      />

      <div className="w-[414px] h-[367px] overflow-scroll p-4 flex flex-col gap-[10px]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.type === "sent"
                ? "justify-end"
                : "justify-start flex-col-reverse"
            }`}
          >
            {msg.type === "received" && (
              <div className="w-[48px] h-[48px] bg-[#003459] rounded-full flex items-center justify-center">
                <img
                  className="w-[33px] h-[33px] rounded-full"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            )}
            <div
              className={`font-inter text-[15px] p-[10px] max-w-[70%] rounded-t-[20px] ${
                msg.type === "sent"
                  ? "bg-[#F7DBA7] text-[#444444] rounded-bl-[20px]"
                  : "bg-[#003459] text-white rounded-br-[20px] ml-[23px]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="w-[414px] h-[105px] bg-white absolute bottom-[10px] flex flex-col items-center justify-center gap-2">
        <div className="w-[387px] h-[22px] mt-[13.23px] flex justify-between gap-2">
          <button
            className="bg-[#F3F5F6] rounded-[8.27px] px-[5px] self-center font-inter text-[10px] text-[#444444]"
            onClick={() => handleQuickReply("What is the price?")}
            aria-label="Price inquiry"
          >
            Price
          </button>
          <button
            className="bg-[#F3F5F6] rounded-[8.27px] px-[5px] self-center font-inter text-[10px] text-[#444444]"
            onClick={() => handleQuickReply("What is your age?")}
            aria-label="Age inquiry"
          >
            Age
          </button>
          <button
            className="bg-[#F3F5F6] rounded-[8.27px] px-[5px] self-center font-inter text-[10px] text-[#444444]"
            onClick={() => handleQuickReply("What is your gender?")}
            aria-label="Gender inquiry"
          >
            Gender
          </button>
        </div>

        <input
          className="w-[387px] h-[51px] rounded-[13.23px] p-2 border border-gray-300"
          type="text"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim()) {
              handleSendMessage(
                e.target.value,
                "I'm not programmed to respond to that yet."
              );
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
}

export default Chat;
