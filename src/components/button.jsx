import { Link } from "react-router-dom";
import { Container } from "../styles/components/Button";

const Button = ({ info }) => {
  // type:
  // content:
  // fontSize:
  // paddingX:
  // paddingY:
  // borderRadius:
  // Ghost:
  // width:
  // url:
  // disable

  return (
    <>
      {info.url !== undefined ? (
        <Link to={info.url}>
          <Container type={info.type} info={info} disabled={info.disable}>
            {info.content}
          </Container>
        </Link>
      ) : (
        <Container type={info.type} info={info} disabled={info.disable}>
          {info.content}
        </Container>
      )}
    </>
  );
};

export default Button;
