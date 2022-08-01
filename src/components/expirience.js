import image from "../photo/furniture.jpg";
import image2 from "../photo/furniture1.jpg";
import image3 from "../photo/furniture2.jpg";
import image4 from "../photo/food.jpg";
import image5 from "../photo/food2.jpg";
import image6 from "../photo/food3.jpg";
import image7 from "../photo/Screenshot_20220726-125123_Chrome.jpg";
import image8 from "../photo/Screenshot_20220726-125137_Chrome.jpg";
import image9 from "../photo/Screenshot_20220726-125320_Chrome.jpg";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
const Projects = () => {
  const [moveToRight, setMoveToRight] = useState(0);
  const furnitureImg = [image, image2, image3];
  const foodImgList = [image4, image5, image6];
  const movieImgList = [image7, image8, image9];
  const [currentImgList, setcurrentImgList] = useState(furnitureImg);

  function moveGalleryToLeft() {
    setMoveToRight(moveToRight - 100);
    if (moveToRight < 100) {
      setMoveToRight(0);
    }
  }

  function moveGalleryToRight() {
    setMoveToRight(moveToRight + 100);
    if (moveToRight > 100) {
      setMoveToRight(moveToRight - 200);
    }
  }

  return (
    <div className="projectContainer">
      <button
        onClick={() => {
          setcurrentImgList(foodImgList);
        }}
      >
        press
      </button>
      <button
        onClick={() => {
          moveGalleryToRight();
        }}
        className="galleryBtnRight"
      >
        <MdArrowForwardIos />
      </button>
      {moveToRight > 0 && (
        <button
          onClick={() => {
            moveGalleryToLeft();
          }}
          className="galleryBtnLeft"
        >
          <MdArrowBackIosNew />
        </button>
      )}
      <article
        className="galleryContainer"
        style={{ right: moveToRight + "%" }}
      >
        <div className="projectImg1">
          <img className="projectImg1" src={currentImgList[0]} />
        </div>
        <div className="projectImg2">
          <img className="projectImg2" src={currentImgList[1]} />
        </div>
        <div className="projectImg3">
          <img className="projectImg2" src={currentImgList[2]} />
        </div>
      </article>
    </div>
  );
};

export default Projects;
