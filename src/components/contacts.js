//phone ,  email ,  github  ,  linked id  , telegram
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlinePhone,
  AiFillLinkedin
} from "react-icons/ai";
import { BsTelegram, BsInstagram } from "react-icons/bs";
const Contacts = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="blackBack"></div>
        <section className="contacts">
          <div className="contactHeader">contact me</div>
          <div className="contactIconsContainer">
            <AiOutlineMail className="contactIcon" />
            <AiOutlineGithub className="contactIcon" />
            <AiOutlinePhone className="contactIcon" />
            <AiFillLinkedin className="contactIcon" />
            <BsTelegram className="contactIcon" />
            <BsInstagram className="contactIcon" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacts;
