import image from "../photo/furniture.jpg";
import image2 from "../photo/furniture1.jpg";
import image3 from "../photo/furniture2.jpg";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
const Projects = () => {
  const [moveToRight, setMoveToRight] = useState(0);

  /* 
[0 ,  100  ,  200]


*/

  function moveGallery() {
    setMoveToRight(moveToRight + 100);
    if (moveToRight > 100) {
      setMoveToRight(moveToRight - 200);
    }
  }

  return (
    <div className="projectContainer">
      <button
        onClick={() => {
          moveGallery();
        }}
        className="galleryBtnRight"
      >
        <MdArrowForwardIos />
      </button>
      <button
        onClick={() => {
          moveGallery();
        }}
        className="galleryBtnLeft"
      >
        <MdArrowBackIosNew />
      </button>
      <article
        className="galleryContainer"
        style={{ right: moveToRight + "%" }}
      >
        <div className="projectImg1">
          <img className="projectImg1" src={image} />
        </div>
        <div className="projectImg2">
          <img className="projectImg2" src={image2} />
        </div>
        <div className="projectImg3" src={image}>
          <img className="projectImg2" src={image3} />
        </div>
      </article>
    </div>
  );
};

export default Projects;
