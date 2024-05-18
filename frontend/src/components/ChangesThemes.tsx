// import React from 'react';
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const ChangeThemes = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <Icon
          icon="mdi:theme-outline"
          className="text-xl 2xl:text-2xl 3xl:text-3xl"
        />
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-30"
      >
        <div className="menu-title">选择主题</div>
        {themes.map((theme) => (
          <li>
            <button
              data-set-theme={theme}
              data-act-class="ACTIVECLASS"
              className="justify-between"
            >
              {theme}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  // const { toggleTheme } = useTheme();

  // return (
  //   <div className="w-full">
  //     <label className="swap swap-rotate">
  //       <input
  //         onClick={toggleTheme}
  //         type="checkbox"
  //         //   value="synthwave"
  //         className="theme-controller"
  //       />
  //       <svg
  //         className="swap-off fill-current w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-[30px] 3xl:h-[30px]"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  //       </svg>

  //       <svg
  //         className="swap-on fill-current w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-[30px] 3xl:h-[30px]"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  //       </svg>
  //     </label>
  //   </div>
  // );
};

export default ChangeThemes;
