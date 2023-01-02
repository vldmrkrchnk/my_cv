import "./Carousel.scss";
import html5 from "./svg/html5.svg";
import MaterialUI from "./svg/MaterialUI.svg";
import MongoDB from "./svg/MongoDB.svg";
import NodeJS from "./svg/NodeJS.svg";
import react from "./svg/React.svg";
import ReduxSaga from "./svg/ReduxSaga.svg";
import Redux from "./svg/Redux.svg";
import SASS from "./svg/SASS.svg";
import StyledComponents from "./svg/StyledComponents.svg";
import Typescript from "./svg/Typescript.svg";

const Carousel = () => {
  return (
    <div class="wrapper">
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img class="svg" src={html5} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={MaterialUI} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={MongoDB} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={NodeJS} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={react} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={ReduxSaga} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={Redux} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={SASS} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={Typescript} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img
              class="svg"
              src={StyledComponents}
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img class="svg" src={html5} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={MaterialUI} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={MongoDB} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={NodeJS} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={react} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={ReduxSaga} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={Redux} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={SASS} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img class="svg" src={Typescript} height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img
              class="svg"
              src={StyledComponents}
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
