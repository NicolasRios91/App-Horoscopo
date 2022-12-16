import "./styles.css";
import { useHistory } from "react-router-dom";

export const EmptySign = () => {
  const history = useHistory();

  return (
    <div className="no-sign-container">
      <h3>No sign selected, please go to main page and select a sign</h3>
      <button onClick={() => history.push("/")}>Go to main page</button>
    </div>
  );
};
