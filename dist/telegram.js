"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
exports.Telegram = props => {
  return react_1.default.createElement(
    core_1.SvgIcon,
    Object.assign({}, props),
    react_1.default.createElement("rect", {fill: "#61A8DE", x: "0", y: "0", width: "23.9858421", height: "23.9858421"}),
    react_1.default.createElement("path", {
      d:
        "M18.8865263,5.29473684 L2.84689474,11.5452105 C2.32736842,11.7476842 2.35884211,12.4932105 2.89363158,12.6511053 L6.96947368,13.8546842 L8.49057895,18.6813158 C8.64947368,19.1854737 9.28836842,19.3383158 9.65821053,18.9606842 L11.7655263,16.809 L15.9002632,19.844 C16.4062632,20.2154211 17.1268947,19.9394737 17.2553684,19.3251053 L19.9938421,6.23247368 C20.1279474,5.59115789 19.497,5.05684211 18.8865263,5.29473684 Z M16.8755789,8.20031579 L9.42526316,14.7886316 C9.351,14.8543158 9.30373684,14.9452105 9.29268421,15.0437368 L9.00584211,17.5936316 C8.99647368,17.6767895 8.88010526,17.6877895 8.85526316,17.6078947 L7.67510526,13.8051053 C7.62105263,13.631 7.69152632,13.4423684 7.84642105,13.3463158 L16.6444737,7.88968421 C16.8467895,7.76410526 17.0539474,8.04263158 16.8755789,8.20031579 Z",
      fill: "#FFFFFF",
    }),
  );
};
//# sourceMappingURL=telegram.js.map
