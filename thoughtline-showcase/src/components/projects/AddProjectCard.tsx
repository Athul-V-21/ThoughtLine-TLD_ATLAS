import { useNavigate } from "react-router-dom";
import "./AddProjectCard.css";

const AddProjectCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="add-project-card"
      onClick={() => navigate("/add-project")}
    >
      <div className="add-icon">+</div>
      <p>Add Project</p>
    </div>
  );
};

export default AddProjectCard;
