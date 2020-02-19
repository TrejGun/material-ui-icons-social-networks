"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
exports.Badoo = props => {
  return react_1.default.createElement(
    core_1.SvgIcon,
    Object.assign({}, props),
    react_1.default.createElement("rect", {fill: "#F88400", x: "0", y: "0", width: "23.9858421", height: "23.9858421"}),
    react_1.default.createElement("path", {
      d:
        "M11.9929474,6.47736842 C10.0753158,6.47736842 8.33426316,7.24689474 7.06147368,8.49294737 L7.06147368,4.19894737 C7.06147368,3.61289474 6.58636842,3.13773684 6.00026316,3.13773684 C5.41415789,3.13773684 4.93905263,3.61284211 4.93905263,4.19894737 L4.93905263,13.5312632 C4.93905263,17.4207895 8.10336842,20.5851053 11.9928947,20.5851053 C15.8824211,20.5851053 19.0467368,17.4207895 19.0467368,13.5312632 C19.0467368,9.64173684 15.8824211,6.47736842 11.9929474,6.47736842 Z M11.9929474,18.4626842 C9.27373684,18.4626842 7.06147368,16.2504211 7.06147368,13.5312105 C7.06147368,10.812 9.27373684,8.59973684 11.9929474,8.59973684 C14.7121579,8.59973684 16.9244211,10.812 16.9244211,13.5312105 C16.9244211,16.2504211 14.7121053,18.4626842 11.9929474,18.4626842 Z",
      fill: "#FFFFFF",
    }),
    react_1.default.createElement("circle", {fill: "#FFFFFF", cx: "9.40236842", cy: "13.5000526", r: "1.40452632"}),
  );
};
//# sourceMappingURL=badoo.js.map
