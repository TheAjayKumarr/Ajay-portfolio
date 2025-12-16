// DockPortal.jsx
import { createPortal } from "react-dom";

export default function DockPortal({ children }) {
  return createPortal(children, document.body);
}
