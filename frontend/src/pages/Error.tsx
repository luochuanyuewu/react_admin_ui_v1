import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="font-bold text-7xl">🐔 Boom! Are you lost? 🙄</h1>
          <button onClick={() => navigate("/")} className="btn">
            <Icon icon="heroicons:home" className="xl:text-2xl" />
            <span>Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
