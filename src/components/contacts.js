//phone ,  email ,  github  ,  linked id  , telegram
import { useNavigate } from "react-router";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlinePhone,
  AiFillLinkedin
} from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsTelegram, BsInstagram } from "react-icons/bs";
const Contacts = () => {
  return (
    <>
      <div className="contactContainer">
        <div className="blackBack"></div>
        <section className="contacts">
          <div className="contactHeader">contact me</div>
          <div className="contactIconsContainer">
            <CopyToClipboard
              text="sasha1keshten@gmail.com"
              onCopy={() => alert(" your  email was Copied")}
            >
              <AiOutlineMail className="contactIcon" />
            </CopyToClipboard>

            <CopyToClipboard
              text="010 7777 7777"
              onCopy={() => alert(" your  phone number was Copied")}
            >
              <AiOutlinePhone className="contactIcon" />
            </CopyToClipboard>

            <AiOutlineGithub className="contactIcon" />

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
