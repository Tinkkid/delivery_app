import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      Created by{" "}
      <a
        href="https://github.com/Tinkkid"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "inherit" }}
      >
        Yuliia Kostovynska
      </a>
    </FooterStyled>
  );
};

export default Footer;
