import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./LinkPreviewer.css";

const LinkPreviewer = ({ href, children, image, title, text }) => {
  const previewRef = useRef(null);

  useEffect(() => {
    const preview = previewRef.current;

    // smooth mouse following
    const xTo = gsap.quickTo(preview, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(preview, "y", { duration: 0.3, ease: "power3" });

    const move = (e) => {
      xTo(e.clientX + 20);
      yTo(e.clientY + 20);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const showPreview = () => {
    gsap.to(previewRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const hidePreview = () => {
    gsap.to(previewRef.current, {
      autoAlpha: 0,
      scale: 0.95,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  return (
    <>
      <a
        href={href}
        className="link-with-preview"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={showPreview}
        onMouseLeave={hidePreview}
      >
        {children}
      </a>

      {/* floating preview */}
      <div ref={previewRef} className="preview-card">
        <img src={image} alt={title} />
        <div className="card-body">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default LinkPreviewer;
