import image from "../photo/furniture.jpg";

const Projects = () => {
  return (
    <div className="projectContainer">
      <article className="galleryContainer">
        <div className="projectImg1">
          <img className="projectImg1" src={image} />
        </div>
        <div className="projectImg2"></div>
        <div className="projectImg3"></div>
      </article>
    </div>
  );
};

export default Projects;
