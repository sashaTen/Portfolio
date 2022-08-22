const JobTitles = (props) => {
  const blurred = props.blurState;

  //    filter: blur(15px);
  return (
    <div className="mainContainer">
      <div className="jobTitleContainer" style={blurred}>
        <h1>hello </h1>
        <h1 style={{ animationDelay: "0.8s" }}>i am ten alexander</h1>
        <h1 style={{ animationDelay: "1.2s" }}>i am web developer</h1>
        <h1 style={{ animationDelay: "1.5s" }}>and ux/ui designer</h1>
      </div>
    </div>
  );
};

export default JobTitles;
