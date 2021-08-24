import { useHistory } from "react-router-dom";

interface IRedirectComponentProps {
  path: string;
}

export const RedirectComponent = ({ path }: IRedirectComponentProps): null => {
  const history = useHistory();

  history.push(path);

  return null;
};
