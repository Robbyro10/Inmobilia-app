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
    <div className="w-full">
      <img
        src={images[currentIndex]}
        alt={images[currentIndex]}
        className="h-[400px] md:h-[700px] lg:h-[940px] w-full bg-center object-cover blur-md absolute"
      />
    <div className="max-w-screen-xl h-1/2 w-full m-auto relative group">
      <img
        src={images[currentIndex]}
        alt={images[currentIndex]}
        className="h-[450px] md:h-[700px] lg:h-[940px] w-full bg-center object-cover"
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
              className={index === currentIndex ? "text-yellow" : "text-white hover:text-yellow transition ease-in"}
            />
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};
