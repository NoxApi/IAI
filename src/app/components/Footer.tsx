"use client";
export const Footer = () => {
  return (
    <footer className="w-full bg-[#111F60] py-4 flex flex-col items-center">
      <div className="max-w-[1360px] w-full h-full flex flex-col items-center justify-center">
        <div className="w-[1049.414px] lgm:w-full flex flex-col gap-y-[20px] items-center">
          <div className="w-full h-[1px] bg-[#516381]" />
          {/* fix text */}
          <div className="text-[#DEDEE0] w-fit">
            © 2025 iAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
