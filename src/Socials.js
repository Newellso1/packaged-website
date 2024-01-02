import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="socials">
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
}
