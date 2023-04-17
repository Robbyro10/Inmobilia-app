import Image from "next/image";
import { FC, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

interface Props {
  images: string[];
}

export const Carousel: FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePlus = () => {
    if (currentIndex === images.length - 1) return setCurrentIndex(0);
    setCurrentIndex(currentIndex + 1);
  };

  const handleMinus = () => {
    if (currentIndex === 0) return setCurrentIndex(images.length - 1);
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="w-full relative ">
      <div className="max-w-screen-xl max-h-screen h-[600px] md:h-[800px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className="h-full w-full bg-center bg-cover duration-300 bg-no-repeat"
        />
        {/* Left Arrow */}
        <button
          className="opacity-0 group-hover:opacity-50 transition ease-in h-fit absolute top-0 my-auto bottom-0 left-5 rounded-full bg-white p-2 text-blue"
          onClick={handleMinus}
        >
          <AiOutlineLeft />
        </button>
        {/* Right Arrow */}
        <button
          className="opacity-0 group-hover:opacity-50 transition ease-in h-fit absolute top-0 my-auto bottom-0 right-5 rounded-full bg-white p-2 text-blue"
          onClick={handlePlus}
        >
          <AiOutlineRight />
        </button>

        <div className="flex gap-3 bottom-4 right-0 left-0 mx-auto justify-center py-2 absolute">
          {images.map((image, index) => (
            <button
              onClick={() => setCurrentIndex(index)}
              className="text-2xl"
              key={index}
            >
              <RxDotFilled
                className={
                  index === currentIndex
                    ? "text-yellow"
                    : "text-white hover:text-yellow transition ease-in"
                }
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
