import LinkPreviewer from "./LinkPreivew";
import { Link } from "react-router-dom";

const ProjectItems = ({
  slug,
  href,
  image,
  text,
  name,
  type,
  description,
  tech,
  github,
  isFirst = false,
  isLast = false,
}) => {
  const hrStyles = {
    first: {
      top: "gradient-fade",
      bottom: "gradient-fade-top",
    },
    middle: {
      top: "gradient-fade-bottom",
      bottom: "gradient-fade-top",
    },
    last: {
      top: "gradient-fade-bottom",
      bottom: "gradient-fade",
    },
  };

  const position = isFirst ? "first" : isLast ? "last" : "middle";
  const { top, bottom } = hrStyles[position];

  return (
    <Link to={`/projects/${slug}`}>
      <LinkPreviewer href={href} image={image} text={text}>
        <hr className={top} />

        <div className="
          grid grid-cols-1 sm:grid-cols-2
          max-w-3xl mx-auto
          gap-2 sm:gap-5
          px-4 sm:px-0
          place-items-center sm:place-items-stretch
        ">
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl
            font-semibold
            text-center sm:text-left
          ">
            {name}
          </h2>

          <p className="
            text-base sm:text-lg md:text-xl
            font-semibold
            text-center sm:text-right
          ">
            {type}
          </p>
        </div>

        <hr className={bottom} />
      </LinkPreviewer>
    </Link>
  );
};

export default ProjectItems;
