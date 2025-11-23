import semiCircle from '@/assets/semi circle.svg'
import circle from '@/assets/circle.svg'
import squiggly from '@/assets/squiggly.svg'
import triangle from '@/assets/triangle.svg'
import '@/components/BackgroundShapes.css'

const shapeData = [
  { className: "shape shape--0", src: semiCircle },
  { className: "shape shape--1", src: circle },
  { className: "shape shape--2", src: squiggly },
  { className: "shape shape--3", src: circle },
  { className: "shape shape--4", src: triangle },
  { className: "shape shape--5", src: circle },
  { className: "shape shape--6", src: squiggly },
  { className: "shape shape--7", src: circle },
  { className: "shape shape--8", src: semiCircle },
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