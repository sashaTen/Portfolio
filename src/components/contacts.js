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
            <div>
              <CopyToClipboard
                className="contactIcon"
                text="sasha1keshten@gmail.com"
                onCopy={() => alert(" your  email was Copied")}
              >
                <AiOutlineMail />
              </CopyToClipboard>
            </div>
            <div>
              <CopyToClipboard
                className="contactIcon"
                text="010 7777 7777"
                onCopy={() => alert(" your  phone number was Copied")}
              >
                <AiOutlinePhone />
              </CopyToClipboard>
            </div>

            <div>
              <a
                href="https://github.com/sashaTen"
                target="_blank"
                className="tooltip"
              >
                <AiOutlineGithub className="contactIcon" />
              </a>
            </div>

            <div>
              <a
                target="_blank"
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              >
                <AiFillLinkedin className="contactIcon" />
              </a>
            </div>
            <div>
              <CopyToClipboard
                className="contactIcon"
                text="sasha_keshten"
                onCopy={() => alert(" your telegram username was Copied")}
              >
                <BsTelegram className="contactIcon" />
              </CopyToClipboard>
            </div>
            <div>
              <a
                target="_blank"
                href="https://www.instagram.com/invites/contact/?i=77gjw0tb77r1&utm_content=dn3ldcl"
              >
                <BsInstagram className="contactIcon" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacts;
