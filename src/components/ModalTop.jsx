import { projects } from "../data/ieum";

const ModalTop = ({ projectId }) => {
  const project = projects.find((item) => item.id === projectId);

  if (!project) return null;

  const {
    image,
    title,
    name,
    period,
    team,
    description,
    roles,
    buttonText,
    buttonLink,
  } = project;

  return (
    <div className="top">
      <img src={image} alt={title} />
      <div className="description-box">
        <h3 className="main-h3">
          {title} | {name}
        </h3>
        <p className="main-h6">
          {period} | {team}
        </p>
        <p className="description">{description}</p>
        <ul className="description">
          {roles?.map((line, idx) => (
            <li key={idx}>· {line}</li>
          ))}
        </ul>
        {buttonLink && (
          <a href={buttonLink} target="_blank" rel="noreferrer">
            <button className="view-button main-h5">
              {buttonText || "→ 자세히 보기"}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ModalTop;
