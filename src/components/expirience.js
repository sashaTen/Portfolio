import image from "../photo/furniture.jpg";
import image2 from "../photo/furniture1.jpg";
import image3 from "../photo/furniture2.jpg";
const Projects = () => {
  return (
    <div className="projectContainer">
      <article className="galleryContainer">
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
