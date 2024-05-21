import { SignUp } from "@clerk/nextjs";
// import logo from "../../../public/next-logo.png";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      {/* <div className="flex justify-center items-center mt-4">
        <div className="h-10 w-10">
          <img src={logo.src} alt="logo" className="object-contain" />
        </div>
      </div> */}
      <div>
      <h1 className="text-2xl font-bold mt-10">Create new Account</h1>
      </div>
      <SignUp />
    </div>
  );
}
