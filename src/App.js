import React from "react";
import "./App.css";
import Fade from "react-reveal";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

//components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about.component";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavBar />
      <MyCarousal />
      <TitleMessage />

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
