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

        <div className="grid grid-cols-2 max-w-3xl m-auto gap-5 text-justify">
          <h2 className="text-4xl font-semibold flex justify-start">{name}</h2>
          <p className="text-xl font-semibold flex justify-end items-end">
            {type}
          </p>
        </div>

        <hr className={bottom} />
      </LinkPreviewer>
    </Link>
  );
};

export default ProjectItems;
