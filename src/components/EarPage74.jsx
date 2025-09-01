import { useContext } from "react"
import { EarContext } from "./EarContext";  // ✅ Correct import



const ears = [
  { id: 23, src: "/ears/Layer 23.png" },
  { id: 22, src: "/ears/Layer 22.png" },
  { id: 21, src: "/ears/Layer 21.png" },
  { id: 18, src: "/ears/Layer 18.png" },
  { id: 19, src: "/ears/Layer 19.png" },
  { id: 20, src: "/ears/Layer 20.png" },
  { id: 17, src: "/ears/Layer 17.png" },
  { id: 16, src: "/ears/Layer 16.png" },
  { id: 15, src: "/ears/Layer 15.png" },
];

const EarPage74 = () => {

  const { setDraggingEar, placedEars } = useContext(EarContext);

  const handleMouseDown = (e, ear, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDraggingEar({
      ...ear,
      index,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-full h-full">
      <img
        src="/ears/clean plate bg.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-1/2 left-1/2 w-[70%] h-[60%] -translate-x-1/2 -translate-y-1/2">
        {ears.map((ear, index) => (
          <img
            key={ear.id}
            src={ear.src}
            onMouseDown={(e) => handleMouseDown(e, ear, index)}
            className="absolute w-10 h-auto cursor-grab active:cursor-grabbing"
            style={{
              left: `${(index % 3) * 30}%`,
              top: `${Math.floor(index / 3) * 35}%`,
            }}
            draggable={false}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-30">
        <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg border">
          <p className="text-sm text-gray-700 font-medium">
            {/* {placedEars.length === 0
              ? "Drag the ears to any desired part of the body"
              : `${placedEars.length} ear${placedEars.length !== 1 ? 's' : ''} placed` */}
            {/* } */}
            Drag the ears  to any desired part of the body
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarPage74;
