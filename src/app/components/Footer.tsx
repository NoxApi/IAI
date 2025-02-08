"use client";
export const Footer = () => {
  return (
    <footer className="w-full bg-[#111F60] py-4 flex flex-col items-center ">
      <div className="max-w-[1360px] w-full h-full flex flex-col items-center justify-center">
        {/* add margin top for new style + responsive */}
        <div className="w-[1049.414px] lgm:w-full items-center" />
        <div className="w-full h-[1px] bg-[#516381]" />
        <div className="text-[#DEDEE0] w-fit mt-5">
          © 2025 iAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
