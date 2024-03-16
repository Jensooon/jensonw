import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";

const IconFooter = () => {
  return (
    <footer style={{ position: "fixed", bottom: 0, marginBottom: "20px" }}>
      <div className="icon-row">
        <a href="https://github.com/Jensooon">
          <GitHubIcon style={{ fontSize: "2rem" }} />
        </a>
        <a href="https://linkedin.com/in/jenson-w">
          <LinkedInIcon style={{ fontSize: "2rem" }} />
        </a>
        <a href="mailto:jenson.wintle@gmail.com">
          <Email style={{ fontSize: "2rem" }} />
        </a>
      </div>
    </footer>
  );
};

export default IconFooter;
