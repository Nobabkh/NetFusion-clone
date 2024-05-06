import React from "react";
import RoundedButton from "../../RoundedButton";

const Email = () => {
  return (
    // <div className="md:grid grid-cols-1 lg:w-[35%] md:w-[100%] w-full">
    //   <div className=" gap-3">
    //     <div className="flex flex-wrap mb-5 gap-4">
    //       <div className="">
    //         <RoundedButton text="Full Name"></RoundedButton>
    //       </div>
    //       <div className="flex p-[2px] justify-start items-center w-max  bg-gradient-to-r from-[#02c17366] rounded-full flex-grow">
    //         <input
    //           type="text"
    //           placeholder=""
    //           className="input w-full md:h-full bg-black rounded-full"
    //         />
    //       </div>
    //     </div>

    //     <div className="flex flex-wrap mb-5 gap-4">
    //       <div className="">
    //         <RoundedButton text="Email Address"></RoundedButton>
    //       </div>
    //       <div className="flex p-[2px] justify-start items-center w-max  bg-gradient-to-r from-[#02c17366] rounded-full flex-grow">
    //         <input
    //           type="text"
    //           placeholder=""
    //           className="input w-full md:h-full bg-black rounded-full"
    //         />
    //       </div>
    //     </div>

    //     <div className="flex flex-wrap mb-5 gap-4">
    //       <div className="">
    //         <RoundedButton text="Your Message"></RoundedButton>
    //       </div>
    //       <div className="flex p-[2px] justify-start items-center w-max  bg-gradient-to-r from-[#02c17366] rounded-full flex-grow">
    //         <input
    //           type="text"
    //           placeholder=""
    //           className="input w-full md:h-full bg-black rounded-full"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-10">
    //     <RoundedButton text="Submit" className="mx-auto"></RoundedButton>
    //   </div>
    // </div>
    <div className="hero bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black border border-[#02C173]  px-5">
        {/* <h1 className="text-orange-400 text-3xl font-bold text-center">Registration</h1> */}
          <form  className="card-body">
            {/* onSubmit={handleSignUp} */}
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
            </div>
            <div className="form-control mt-6">
              {/* <button className="btn bg-opacity-0 border-[#02C173] hover:bg-opacity-0 hover:border-green-200">Send Your Message</button> */}
              <RoundedButton text="Send Your Message"></RoundedButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
