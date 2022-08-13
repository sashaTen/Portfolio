const JobTitles = (props) => {
  const blurred = props.blurState;

  //    filter: blur(15px);
  return (
    <div className="mainContainer">
      <div className="jobTitleContainer" style={blurred}>
        <h1>hello </h1>
        <h1>i am ten alexander</h1>
        <h1>i am web developer</h1>
        <h1>and ux/ui designer</h1>
      </div>
    </div>
  );
};

export default JobTitles;
