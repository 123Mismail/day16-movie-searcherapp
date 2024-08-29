import Image from "next/image";
import MyStyledIcon, { MyIcon } from "./icons/iconNext";
import TailwindSvg from "./icons/iconNext";

export default function Home() {
  return (
    <div className="grid h-screen lg:grid-cols-3 md:grid-cols-2 text-white p-3 max-w-[1400px] mx-auto">
      <div className="lg:p-4 p:1 mx-auto bg-black/90">
        <h1 className="text-5xl font-medium pl-12 pr-12 mt-4 text-center p-4">
          Portfolio <br /> Templates
        </h1>
        <hr className="h-1 bg-black" />
        <p className="p-4 mt-3 text-center pl-8 pr-8 text-5xl m-3 mb-3  ">
          Shape Your Dreams throungh
        </p>
        <p className="mb-4 text-center mt-5 text-xl">
          {" "}
          Nextjs And Tailwind Css
        </p>

        <div className="text-2xl mx-auto text-center   ml-16 lg:ml-28 mt-8">{<MyIcon />}</div>
        <p className="text-center mt-6 text-xl">
          {" "}
          Explore the beauty of nextjs
        </p>

        <div className="text-2xl mx-auto w-[100px] mt-6 "><img   src="tailwind.jpeg" alt="" /></div>
        <p className="text-center mt-6 text-xl">
          {" "}
          Explore the beauty of tailwind css
        </p>
      </div>



      

      <div className="bg-white  text-black ">
        <div className="flex justify-center p-4  ">
          <div className="pl-8 pr-8 pt-2 pb-2 gap-y-3">
            <h2 className="text-xl font-medium ">Branding Portfolio making</h2>
            <h1 className="text-3xl font-medium ">web Designer</h1>
            <p> this is the ultimate web services platform </p>
            <button className="px-6 py-2 rounded-lg bg-black/70 mt-4 hover:bg-black text-white">
              Contact
            </button>
          </div>
          <div className="max-w-[250px]  ">
            <img className=" rounded-full  " src="p1.jpeg" alt="" />
          </div>
        </div>
        <div className="mt-2 ">
          <h1 className="p-2 text-2xl mb-4 font-medium text-center">
            Latest Projects{" "}
          </h1>
          <div className="grid grid-cols-3 mt-3 font-serif p-1 m-2 gap-4 ">
            <div className="shadow-2xl">
              <img src="p4.jpeg" alt="" />
              <h1 className="font-semibold  pt-2 pl-3">Title</h1>
              <p className="text-sm ml-3"> description</p>
            </div>
            <div className="shadow-2xl">
              <img src="p4.jpeg" alt="" />
              <h1 className="font-semibold   mt-2 ml-3"> Title</h1>
              <p className="text-sm ml-3"> description</p>
            </div>
            <div className="shadow-2xl">
              <img src="p4.jpeg" alt="" />
              <h1 className="font-semibold  mt-2 ml-3">Title</h1>
              <p className="text-sm ml-3"> description</p>
            </div>
            <div className="shadow-2xl">
              <img src="p4.jpeg" alt="" />
              <h1 className="font-semibold mt-2 ml-3">Title</h1>
              <p className="text-sm ml-3"> description</p>
            </div>
            <div className="shadow-2xl">
              <img src="p4.jpeg" alt="" />
              <h1 className="font-semibold  mt-2 ml-3">Title</h1>
              <p className="text-sm ml-3"> description</p>
            </div>
            <div className="shadow-2xl">
              <img src="p4.jpeg" alt="" />
              <h1 className="font-semibold  mt-2 ml-3"> Title</h1>
              <p className="text-sm ml-3"> description</p>
            </div>
          </div>
          <h1 className="text-xl font-medium text-center">
            its a sample piece of our creativity
          </h1>
        </div>
      </div>
      {/* // third col */}
      <div className="bg-[#80d3e1]   gap-4">
        <div>
          <div className=" gap-2 ml-2 mr-2 grid grid-cols-2 m-4 mx-auto ">
            <div className="max-w-200px shadow-2xl">
              <img src="card2.jpeg" alt="" />
            </div>
            <div className="max-w-200px shadow-2xl">
              <img src="card3.jpeg" alt="" />
            </div>
          </div>
          {/* 2nd */}
          <div>
            <div className=" gap-2    pt-6  grid grid-cols-1   ">
              <div className="   mx-auto shadow-2xl">
                <img className="w-[440px]" src="card1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* 3rd  */}

        <div className="   pt-4">
          <div className="gap-2 ml-2 mr-2 grid grid-cols-2 m-4 mx-auto">
            <div className="shadow-2xl ">
              <img src="p1.jpeg" alt="" />
            </div>
            <div className="shadow-2xl">
              <img src="p1.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
