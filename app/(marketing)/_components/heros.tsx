import Image from "next/image";
export const Heros = () => {
  return (
    <div className="flex felx-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          image1
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          image2
        </div>
      </div>
    </div>
  );
};
