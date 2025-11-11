const shapeData = [
  { className: "shape shape--0", src: "/assets/semi circle.svg" },
  { className: "shape shape--1", src: "/assets/circle.svg" },
  { className: "shape shape--2", src: "/assets/squiggly.svg" },
  { className: "shape shape--3", src: "/assets/circle.svg" },
  { className: "shape shape--4", src: "/assets/triangle.svg" },
  { className: "shape shape--5", src: "/assets/circle.svg" },
  { className: "shape shape--6", src: "/assets/squiggly.svg" },
  { className: "shape shape--7", src: "/assets/circle.svg" },
  { className: "shape shape--8", src: "/assets/semi circle.svg" },
];

const BackgroundShapes = () => (
    <>
    {shapeData.map(({ className, src }, index) => (
        <img
          key={className}
          className={className}
          src={src} 
          alt=""
          data-parallax-shape
          data-index={index} 
        />
    ))}
    </>
);

export default BackgroundShapes;