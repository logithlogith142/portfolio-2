import { FaRegCopyright } from "react-icons/fa";
import "./contact.css";
export default function Footer() {
  return (
    <div className="footer d-flex gap-2 text-white p-4 justify-content-center pb-5">
      <FaRegCopyright size={20} style={{ color: "#d1a25d", marginTop: 3 }} />
      <div>
        <p>Designed by LOGITH</p>
      </div>
    </div>
  );
}
