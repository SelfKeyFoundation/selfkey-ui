"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_jss_1 = require("react-jss");
var core_1 = require("@material-ui/core");
var styles = {
    root: {
        width: '66px !important',
        height: '66px !important'
    }
};
exports.PaymentIcon = react_jss_1.default(styles)(function (props) { return (React.createElement(core_1.SvgIcon, __assign({}, props, { viewBox: '0 0 66 66' }),
    React.createElement("title", null, "icon-payment-large"),
    React.createElement("defs", null,
        React.createElement("linearGradient", { x1: "50%", y1: "97.783801%", x2: "41.8489583%", y2: "-16.3970588%", id: "linearGradient-1" },
            React.createElement("stop", { "stop-color": "#08BCCD", offset: "0%" }),
            React.createElement("stop", { "stop-color": "#2DA1F8", offset: "100%" }))),
    React.createElement("g", { id: "\uD83D\uDCB9-Marketplace", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        React.createElement("g", { id: "702.1-Incorporation-Payment-confirmation", transform: "translate(-375.000000, -273.000000)", fill: "url(#linearGradient-1)", "fill-rule": "nonzero" },
            React.createElement("g", { id: "Modal", transform: "translate(330.000000, 159.000000)" },
                React.createElement("path", { d: "M78,114 C59.785156,114 45,128.785156 45,147 C45,165.214844 59.785156,180 78,180 C96.214844,180 111,165.214844 111,147 C111,128.785156 96.214844,114 78,114 Z M78,116 C95.132813,116 109,129.867188 109,147 C109,164.132813 95.132813,178 78,178 C60.867188,178 47,164.132813 47,147 C47,129.867188 60.867188,116 78,116 Z M78,119 C77.449219,119 77,119.449219 77,120 C77,120.550781 77.449219,121 78,121 C78.550781,121 79,120.550781 79,120 C79,119.449219 78.550781,119 78,119 Z M83.292969,119.515625 C82.804688,119.503906 82.382813,119.84375 82.285156,120.324219 C82.179688,120.863281 82.53125,121.390625 83.074219,121.5 C83.613281,121.605469 84.140625,121.253906 84.25,120.714844 C84.355469,120.171875 84.003906,119.644531 83.464844,119.535156 C83.40625,119.527344 83.351563,119.519531 83.292969,119.515625 Z M72.738281,119.519531 C72.671875,119.519531 72.605469,119.523438 72.539063,119.535156 C71.996094,119.644531 71.644531,120.171875 71.753906,120.714844 C71.804688,120.972656 71.957031,121.203125 72.179688,121.351563 C72.398438,121.496094 72.667969,121.550781 72.929688,121.5 C73.472656,121.390625 73.824219,120.867188 73.714844,120.324219 C73.621094,119.859375 73.214844,119.523438 72.738281,119.519531 Z M67.675781,121.054688 C67.542969,121.054688 67.410156,121.078125 67.285156,121.128906 C66.773438,121.34375 66.53125,121.925781 66.746094,122.4375 C66.957031,122.949219 67.539063,123.191406 68.050781,122.980469 C68.5625,122.765625 68.804688,122.183594 68.59375,121.671875 C68.4375,121.300781 68.078125,121.058594 67.675781,121.054688 Z M88.355469,121.054688 C87.941406,121.046875 87.566406,121.289063 87.40625,121.671875 C87.195313,122.183594 87.4375,122.765625 87.949219,122.980469 C88.460938,123.191406 89.042969,122.949219 89.253906,122.4375 C89.46875,121.925781 89.226563,121.34375 88.714844,121.128906 C88.601563,121.082031 88.476563,121.058594 88.355469,121.054688 Z M63.011719,123.546875 C62.808594,123.546875 62.609375,123.605469 62.441406,123.71875 C61.984375,124.023438 61.859375,124.644531 62.167969,125.105469 C62.472656,125.5625 63.09375,125.6875 63.554688,125.378906 C64.015625,125.074219 64.136719,124.453125 63.832031,123.996094 C63.648438,123.71875 63.339844,123.550781 63.011719,123.546875 Z M93.015625,123.546875 C92.675781,123.542969 92.355469,123.710938 92.167969,123.996094 C91.859375,124.453125 91.984375,125.074219 92.441406,125.378906 C92.902344,125.6875 93.523438,125.5625 93.828125,125.105469 C93.976563,124.886719 94.03125,124.613281 93.980469,124.355469 C93.929688,124.09375 93.777344,123.863281 93.554688,123.71875 C93.394531,123.609375 93.210938,123.550781 93.015625,123.546875 Z M58.921875,126.90625 C58.652344,126.90625 58.390625,127.011719 58.203125,127.203125 C57.8125,127.589844 57.8125,128.226563 58.203125,128.613281 C58.589844,129.003906 59.226563,129.003906 59.613281,128.613281 C60.003906,128.226563 60.003906,127.589844 59.613281,127.203125 C59.429688,127.015625 59.183594,126.910156 58.921875,126.90625 Z M97.105469,126.90625 C96.835938,126.90625 96.574219,127.011719 96.386719,127.203125 C95.996094,127.589844 95.996094,128.226563 96.386719,128.613281 C96.773438,129.003906 97.410156,129.003906 97.796875,128.613281 C98.1875,128.226563 98.1875,127.589844 97.796875,127.203125 C97.613281,127.015625 97.367188,126.910156 97.105469,126.90625 Z M100.460938,131 C100.257813,130.996094 100.0625,131.054688 99.894531,131.167969 C99.4375,131.472656 99.3125,132.09375 99.621094,132.550781 C99.925781,133.011719 100.546875,133.136719 101.003906,132.828125 C101.464844,132.519531 101.589844,131.902344 101.28125,131.441406 C101.097656,131.167969 100.789063,131 100.460938,131 Z M55.566406,131 C55.226563,130.992188 54.90625,131.160156 54.71875,131.441406 C54.414063,131.902344 54.535156,132.523438 54.996094,132.828125 C55.457031,133.136719 56.074219,133.011719 56.382813,132.554688 C56.6875,132.09375 56.566406,131.472656 56.105469,131.167969 C55.945313,131.0625 55.761719,131.003906 55.566406,131 Z M102.953125,135.667969 C102.820313,135.664063 102.6875,135.691406 102.5625,135.742188 C102.050781,135.953125 101.808594,136.539063 102.019531,137.046875 C102.234375,137.558594 102.816406,137.800781 103.328125,137.589844 C103.839844,137.378906 104.082031,136.792969 103.871094,136.28125 C103.714844,135.914063 103.355469,135.667969 102.953125,135.667969 Z M53.078125,135.667969 C52.664063,135.660156 52.289063,135.902344 52.132813,136.285156 C51.921875,136.796875 52.164063,137.378906 52.671875,137.59375 C53.183594,137.804688 53.769531,137.5625 53.980469,137.050781 C54.191406,136.539063 53.949219,135.957031 53.4375,135.746094 C53.324219,135.695313 53.203125,135.671875 53.078125,135.667969 Z M104.484375,140.734375 C104.417969,140.730469 104.351563,140.738281 104.285156,140.75 C103.746094,140.859375 103.394531,141.386719 103.5,141.925781 C103.609375,142.46875 104.136719,142.820313 104.675781,142.714844 C105.21875,142.605469 105.570313,142.078125 105.464844,141.535156 C105.371094,141.070313 104.960938,140.734375 104.484375,140.734375 Z M51.546875,140.734375 C51.058594,140.722656 50.636719,141.058594 50.539063,141.535156 C50.488281,141.796875 50.539063,142.070313 50.6875,142.289063 C50.835938,142.511719 51.066406,142.664063 51.328125,142.714844 C51.585938,142.765625 51.855469,142.710938 52.078125,142.566406 C52.296875,142.417969 52.449219,142.1875 52.5,141.925781 C52.609375,141.386719 52.257813,140.859375 51.71875,140.75 C51.660156,140.742188 51.605469,140.734375 51.546875,140.734375 Z M51,146 C50.449219,146 50,146.449219 50,147 C50,147.550781 50.449219,148 51,148 C51.550781,148 52,147.550781 52,147 C52,146.449219 51.550781,146 51,146 Z M105,146 C104.449219,146 104,146.449219 104,147 C104,147.550781 104.449219,148 105,148 C105.550781,148 106,147.550781 106,147 C106,146.449219 105.550781,146 105,146 Z M51.523438,151.265625 C51.457031,151.265625 51.390625,151.273438 51.324219,151.285156 C50.78125,151.394531 50.429688,151.921875 50.539063,152.464844 C50.648438,153.003906 51.171875,153.355469 51.714844,153.25 C52.257813,153.140625 52.609375,152.613281 52.5,152.074219 C52.40625,151.605469 52,151.269531 51.523438,151.265625 Z M104.507813,151.265625 C104.019531,151.253906 103.597656,151.59375 103.5,152.074219 C103.394531,152.613281 103.746094,153.140625 104.285156,153.25 C104.828125,153.355469 105.355469,153.003906 105.464844,152.464844 C105.570313,151.921875 105.21875,151.394531 104.675781,151.285156 C104.621094,151.277344 104.566406,151.269531 104.507813,151.265625 Z M102.96875,156.328125 C102.554688,156.320313 102.179688,156.566406 102.019531,156.949219 C101.808594,157.457031 102.050781,158.042969 102.5625,158.253906 C103.074219,158.464844 103.65625,158.222656 103.871094,157.714844 C104.082031,157.203125 103.839844,156.617188 103.328125,156.40625 C103.214844,156.359375 103.089844,156.332031 102.96875,156.328125 Z M53.0625,156.332031 C52.929688,156.332031 52.796875,156.355469 52.671875,156.40625 C52.429688,156.507813 52.234375,156.703125 52.132813,156.949219 C52.03125,157.195313 52.03125,157.46875 52.128906,157.714844 C52.34375,158.226563 52.925781,158.46875 53.4375,158.253906 C53.683594,158.15625 53.878906,157.960938 53.980469,157.714844 C54.082031,157.46875 54.082031,157.195313 53.980469,156.949219 C53.828125,156.578125 53.464844,156.335938 53.0625,156.332031 Z M100.46875,161 C100.128906,160.992188 99.808594,161.160156 99.621094,161.441406 C99.3125,161.902344 99.4375,162.519531 99.894531,162.828125 C100.113281,162.976563 100.386719,163.03125 100.644531,162.976563 C100.90625,162.925781 101.136719,162.773438 101.28125,162.550781 C101.589844,162.09375 101.464844,161.472656 101.003906,161.167969 C100.847656,161.058594 100.660156,161 100.46875,161 Z M55.5625,161 C55.359375,160.996094 55.164063,161.054688 54.996094,161.167969 C54.539063,161.476563 54.414063,162.09375 54.71875,162.554688 C55.027344,163.011719 55.648438,163.136719 56.109375,162.828125 C56.566406,162.523438 56.691406,161.902344 56.382813,161.441406 C56.199219,161.167969 55.890625,161.003906 55.5625,161 Z M58.921875,165.09375 C58.652344,165.089844 58.390625,165.195313 58.203125,165.386719 C57.8125,165.773438 57.8125,166.410156 58.203125,166.796875 C58.589844,167.1875 59.226563,167.1875 59.613281,166.796875 C60.003906,166.410156 60.003906,165.773438 59.613281,165.386719 C59.429688,165.199219 59.183594,165.09375 58.921875,165.09375 Z M97.105469,165.09375 C96.835938,165.089844 96.574219,165.195313 96.386719,165.386719 C95.996094,165.773438 95.996094,166.410156 96.386719,166.796875 C96.773438,167.1875 97.410156,167.1875 97.796875,166.796875 C98.1875,166.410156 98.1875,165.773438 97.796875,165.386719 C97.613281,165.199219 97.367188,165.09375 97.105469,165.09375 Z M63.019531,168.449219 C62.679688,168.441406 62.359375,168.609375 62.171875,168.890625 C61.863281,169.351563 61.988281,169.972656 62.449219,170.28125 C62.90625,170.585938 63.527344,170.460938 63.832031,170.003906 C64.140625,169.542969 64.015625,168.925781 63.558594,168.617188 C63.398438,168.511719 63.210938,168.449219 63.019531,168.449219 Z M93.011719,168.449219 C92.808594,168.445313 92.613281,168.503906 92.445313,168.613281 C92.222656,168.761719 92.070313,168.992188 92.019531,169.253906 C91.96875,169.511719 92.023438,169.785156 92.171875,170.003906 C92.476563,170.460938 93.097656,170.585938 93.558594,170.28125 C94.015625,169.972656 94.140625,169.351563 93.832031,168.890625 C93.652344,168.617188 93.34375,168.449219 93.011719,168.449219 Z M67.691406,170.941406 C67.277344,170.933594 66.902344,171.179688 66.746094,171.5625 C66.535156,172.070313 66.777344,172.65625 67.285156,172.867188 C67.796875,173.078125 68.382813,172.835938 68.59375,172.328125 C68.804688,171.816406 68.5625,171.230469 68.050781,171.019531 C67.9375,170.972656 67.816406,170.945313 67.691406,170.941406 Z M88.339844,170.941406 C88.207031,170.941406 88.074219,170.96875 87.953125,171.019531 C87.707031,171.121094 87.511719,171.316406 87.410156,171.558594 C87.308594,171.804688 87.308594,172.082031 87.40625,172.328125 C87.621094,172.835938 88.203125,173.078125 88.714844,172.867188 C88.960938,172.765625 89.15625,172.570313 89.257813,172.328125 C89.359375,172.082031 89.359375,171.804688 89.257813,171.5625 C89.105469,171.1875 88.742188,170.945313 88.339844,170.941406 Z M72.761719,172.480469 C72.273438,172.46875 71.847656,172.808594 71.753906,173.285156 C71.644531,173.828125 71.996094,174.351563 72.539063,174.460938 C73.082031,174.570313 73.605469,174.21875 73.714844,173.675781 C73.824219,173.132813 73.472656,172.609375 72.929688,172.5 C72.875,172.488281 72.816406,172.480469 72.761719,172.480469 Z M83.269531,172.484375 C83.203125,172.480469 83.136719,172.488281 83.074219,172.5 C82.53125,172.609375 82.179688,173.132813 82.285156,173.675781 C82.339844,173.9375 82.492188,174.164063 82.710938,174.3125 C82.933594,174.460938 83.203125,174.515625 83.464844,174.464844 C83.722656,174.410156 83.953125,174.257813 84.101563,174.039063 C84.246094,173.816406 84.300781,173.546875 84.25,173.285156 C84.15625,172.820313 83.746094,172.484375 83.269531,172.484375 Z M78,173 C78.550781,173 79,173.449219 79,174 C79,174.550781 78.550781,175 78,175 C77.449219,175 77,174.550781 77,174 C77,173.449219 77.449219,173 78,173 Z M84.5322581,133 C86.8003379,133 88.8570629,133.439611 90.3887981,134.18227 C91.9205327,134.92493 93,136.016225 93,137.354839 L93,140.741935 L93,144.129032 L93,147.516129 L93,150.903226 L93,154.290323 C93,155.628875 91.9205144,156.720213 90.3887981,157.462891 C88.8570813,158.205568 86.8004139,158.645161 84.5322581,158.645161 C82.830991,158.645161 81.24837,158.396637 79.9175279,157.959992 C79.7771545,159.169511 78.7464619,160.16042 77.3242819,160.849988 C75.7925652,161.592665 73.7358977,162.032258 71.4677419,162.032258 C69.1995861,162.032258 67.1429187,161.592665 65.6112019,160.849988 C64.0794856,160.10731 63,159.015971 63,157.677419 L63,154.290323 L63,150.903226 L63,147.516129 C63,146.177515 64.0794673,145.08622 65.6112019,144.343561 C67.1429371,143.600902 69.1996621,143.16129 71.4677419,143.16129 C73.161796,143.16129 74.7369682,143.407195 76.0645161,143.840789 L76.0645161,140.741935 L76.0645161,137.354839 C76.0645161,136.016225 77.1439834,134.92493 78.6757181,134.18227 C80.2074532,133.439611 82.2641782,133 84.5322581,133 Z M84.5322581,133.967742 C82.3909679,133.967742 80.4560182,134.394315 79.0981602,135.052672 C77.7403026,135.711026 77.0322581,136.555576 77.0322581,137.354839 C77.0322581,138.154102 77.7403026,138.99865 79.0981602,139.657006 C80.4560182,140.315362 82.3909679,140.741935 84.5322581,140.741935 C86.6735482,140.741935 88.6084979,140.315362 89.966356,139.657006 C91.3242135,138.99865 92.0322581,138.154102 92.0322581,137.354839 C92.0322581,136.555576 91.3242135,135.711026 89.966356,135.052672 C88.6084979,134.394315 86.6735482,133.967742 84.5322581,133.967742 Z M81.8709677,135.419355 C82.1382023,135.419355 82.3548387,135.635991 82.3548387,135.903226 C82.3548387,136.17046 82.1382023,136.387097 81.8709677,136.387097 C81.6037332,136.387097 81.3870968,136.17046 81.3870968,135.903226 C81.3870968,135.635991 81.6037332,135.419355 81.8709677,135.419355 Z M83.8064516,135.419355 C84.0736862,135.419355 84.2903226,135.635991 84.2903226,135.903226 C84.2903226,136.17046 84.0736862,136.387097 83.8064516,136.387097 C83.5392171,136.387097 83.3225806,136.17046 83.3225806,135.903226 C83.3225806,135.635991 83.5392171,135.419355 83.8064516,135.419355 Z M85.7419355,135.419355 C86.00917,135.419355 86.2258065,135.635991 86.2258065,135.903226 C86.2258065,136.17046 86.00917,136.387097 85.7419355,136.387097 C85.4747009,136.387097 85.2580645,136.17046 85.2580645,135.903226 C85.2580645,135.635991 85.4747009,135.419355 85.7419355,135.419355 Z M87.6774194,135.419355 C87.9446539,135.419355 88.1612903,135.635991 88.1612903,135.903226 C88.1612903,136.17046 87.9446539,136.387097 87.6774194,136.387097 C87.4101848,136.387097 87.1935484,136.17046 87.1935484,135.903226 C87.1935484,135.635991 87.4101848,135.419355 87.6774194,135.419355 Z M80.9032258,136.870968 C81.1704604,136.870968 81.3870968,137.087604 81.3870968,137.354839 C81.3870968,137.622073 81.1704604,137.83871 80.9032258,137.83871 C80.6359913,137.83871 80.4193548,137.622073 80.4193548,137.354839 C80.4193548,137.087604 80.6359913,136.870968 80.9032258,136.870968 Z M82.8387097,136.870968 C83.1059442,136.870968 83.3225806,137.087604 83.3225806,137.354839 C83.3225806,137.622073 83.1059442,137.83871 82.8387097,137.83871 C82.5714751,137.83871 82.3548387,137.622073 82.3548387,137.354839 C82.3548387,137.087604 82.5714751,136.870968 82.8387097,136.870968 Z M84.7741935,136.870968 C85.0414281,136.870968 85.2580645,137.087604 85.2580645,137.354839 C85.2580645,137.622073 85.0414281,137.83871 84.7741935,137.83871 C84.506959,137.83871 84.2903226,137.622073 84.2903226,137.354839 C84.2903226,137.087604 84.506959,136.870968 84.7741935,136.870968 Z M86.7096774,136.870968 C86.976912,136.870968 87.1935484,137.087604 87.1935484,137.354839 C87.1935484,137.622073 86.976912,137.83871 86.7096774,137.83871 C86.4424429,137.83871 86.2258065,137.622073 86.2258065,137.354839 C86.2258065,137.087604 86.4424429,136.870968 86.7096774,136.870968 Z M88.6451613,136.870968 C88.9123958,136.870968 89.1290323,137.087604 89.1290323,137.354839 C89.1290323,137.622073 88.9123958,137.83871 88.6451613,137.83871 C88.3779267,137.83871 88.1612903,137.622073 88.1612903,137.354839 C88.1612903,137.087604 88.3779267,136.870968 88.6451613,136.870968 Z M81.8709677,138.322581 C82.1382023,138.322581 82.3548387,138.539217 82.3548387,138.806452 C82.3548387,139.073686 82.1382023,139.290323 81.8709677,139.290323 C81.6037332,139.290323 81.3870968,139.073686 81.3870968,138.806452 C81.3870968,138.539217 81.6037332,138.322581 81.8709677,138.322581 Z M83.8064516,138.322581 C84.0736862,138.322581 84.2903226,138.539217 84.2903226,138.806452 C84.2903226,139.073686 84.0736862,139.290323 83.8064516,139.290323 C83.5392171,139.290323 83.3225806,139.073686 83.3225806,138.806452 C83.3225806,138.539217 83.5392171,138.322581 83.8064516,138.322581 Z M85.7419355,138.322581 C86.00917,138.322581 86.2258065,138.539217 86.2258065,138.806452 C86.2258065,139.073686 86.00917,139.290323 85.7419355,139.290323 C85.4747009,139.290323 85.2580645,139.073686 85.2580645,138.806452 C85.2580645,138.539217 85.4747009,138.322581 85.7419355,138.322581 Z M87.6774194,138.322581 C87.9446539,138.322581 88.1612903,138.539217 88.1612903,138.806452 C88.1612903,139.073686 87.9446539,139.290323 87.6774194,139.290323 C87.4101848,139.290323 87.1935484,139.073686 87.1935484,138.806452 C87.1935484,138.539217 87.4101848,138.322581 87.6774194,138.322581 Z M77.0322581,139.40373 L77.0322581,140.741935 C77.0322581,141.541125 77.74032,142.385732 79.0981602,143.044103 C80.4560003,143.702474 82.3908977,144.129032 84.5322581,144.129032 C86.6736184,144.129032 88.6085158,143.702474 89.966356,143.044103 C91.3241961,142.385732 92.0322581,141.541125 92.0322581,140.741935 L92.0322581,139.40373 C91.5938802,139.834294 91.0359135,140.213653 90.3887981,140.527407 C88.8570629,141.270066 86.8003379,141.709677 84.5322581,141.709677 C82.2641782,141.709677 80.2074532,141.270066 78.6757181,140.527407 C78.0286026,140.213653 77.470636,139.834294 77.0322581,139.40373 Z M85.7419355,142.193548 C86.00917,142.193548 86.2258065,142.410185 86.2258065,142.677419 C86.2258065,142.944654 86.00917,143.16129 85.7419355,143.16129 C85.4747009,143.16129 85.2580645,142.944654 85.2580645,142.677419 C85.2580645,142.410185 85.4747009,142.193548 85.7419355,142.193548 Z M87.6774194,142.193548 C87.9446539,142.193548 88.1612903,142.410185 88.1612903,142.677419 C88.1612903,142.944654 87.9446539,143.16129 87.6774194,143.16129 C87.4101848,143.16129 87.1935484,142.944654 87.1935484,142.677419 C87.1935484,142.410185 87.4101848,142.193548 87.6774194,142.193548 Z M77.0322581,142.790827 L77.0322581,144.129032 C77.0322581,144.158849 77.0379953,144.188209 77.0398185,144.217868 C77.1345474,144.259857 77.2331995,144.2994 77.3242819,144.343561 C78.5410524,144.933511 79.4621424,145.745952 79.7937247,146.725113 C81.0823263,147.213398 82.7324598,147.516129 84.5322581,147.516129 C86.6736184,147.516129 88.6085158,147.089571 89.966356,146.431199 C91.3241961,145.772829 92.0322581,144.928222 92.0322581,144.129032 L92.0322581,142.790827 C91.5938787,143.221398 91.0359058,143.600743 90.3887981,143.914504 C88.8570813,144.657181 86.8004139,145.096774 84.5322581,145.096774 C82.2641023,145.096774 80.2074348,144.657181 78.6757181,143.914504 C78.0286103,143.600743 77.4706374,143.221398 77.0322581,142.790827 Z M71.4677419,144.129032 C69.3264518,144.129032 67.3915021,144.555606 66.033644,145.213962 C64.6757865,145.872317 63.9677419,146.716866 63.9677419,147.516129 C63.9677419,148.315392 64.6757865,149.159941 66.033644,149.818296 C67.3915021,150.476652 69.3264518,150.903226 71.4677419,150.903226 C73.6090321,150.903226 75.5439818,150.476652 76.9018398,149.818296 C78.2596974,149.159941 78.9677419,148.315392 78.9677419,147.516129 C78.9677419,146.716866 78.2596974,145.872317 76.9018398,145.213962 C75.5439818,144.555606 73.6090321,144.129032 71.4677419,144.129032 Z M68.8064516,145.580645 C69.0736862,145.580645 69.2903226,145.797282 69.2903226,146.064516 C69.2903226,146.331751 69.0736862,146.548387 68.8064516,146.548387 C68.5392171,146.548387 68.3225806,146.331751 68.3225806,146.064516 C68.3225806,145.797282 68.5392171,145.580645 68.8064516,145.580645 Z M70.7419355,145.580645 C71.00917,145.580645 71.2258065,145.797282 71.2258065,146.064516 C71.2258065,146.331751 71.00917,146.548387 70.7419355,146.548387 C70.4747009,146.548387 70.2580645,146.331751 70.2580645,146.064516 C70.2580645,145.797282 70.4747009,145.580645 70.7419355,145.580645 Z M72.6774194,145.580645 C72.9446539,145.580645 73.1612903,145.797282 73.1612903,146.064516 C73.1612903,146.331751 72.9446539,146.548387 72.6774194,146.548387 C72.4101848,146.548387 72.1935484,146.331751 72.1935484,146.064516 C72.1935484,145.797282 72.4101848,145.580645 72.6774194,145.580645 Z M74.6129032,145.580645 C74.8801378,145.580645 75.0967742,145.797282 75.0967742,146.064516 C75.0967742,146.331751 74.8801378,146.548387 74.6129032,146.548387 C74.3456687,146.548387 74.1290323,146.331751 74.1290323,146.064516 C74.1290323,145.797282 74.3456687,145.580645 74.6129032,145.580645 Z M85.7419355,145.580645 C86.00917,145.580645 86.2258065,145.797282 86.2258065,146.064516 C86.2258065,146.331751 86.00917,146.548387 85.7419355,146.548387 C85.4747009,146.548387 85.2580645,146.331751 85.2580645,146.064516 C85.2580645,145.797282 85.4747009,145.580645 85.7419355,145.580645 Z M87.6774194,145.580645 C87.9446539,145.580645 88.1612903,145.797282 88.1612903,146.064516 C88.1612903,146.331751 87.9446539,146.548387 87.6774194,146.548387 C87.4101848,146.548387 87.1935484,146.331751 87.1935484,146.064516 C87.1935484,145.797282 87.4101848,145.580645 87.6774194,145.580645 Z M92.0322581,146.177923 C91.5938787,146.608495 91.0359058,146.98784 90.3887981,147.3016 C88.8570813,148.044278 86.8004139,148.483871 84.5322581,148.483871 C82.8380695,148.483871 81.2631615,148.235772 79.9354839,147.802482 L79.9354839,150.164188 C81.2028561,150.621535 82.7972782,150.903226 84.5322581,150.903226 C86.6736184,150.903226 88.6085158,150.476667 89.966356,149.818296 C91.3241961,149.159926 92.0322581,148.315319 92.0322581,147.516129 L92.0322581,146.177923 Z M67.8387097,147.032258 C68.1059442,147.032258 68.3225806,147.248894 68.3225806,147.516129 C68.3225806,147.783364 68.1059442,148 67.8387097,148 C67.5714751,148 67.3548387,147.783364 67.3548387,147.516129 C67.3548387,147.248894 67.5714751,147.032258 67.8387097,147.032258 Z M69.7741935,147.032258 C70.0414281,147.032258 70.2580645,147.248894 70.2580645,147.516129 C70.2580645,147.783364 70.0414281,148 69.7741935,148 C69.506959,148 69.2903226,147.783364 69.2903226,147.516129 C69.2903226,147.248894 69.506959,147.032258 69.7741935,147.032258 Z M71.7096774,147.032258 C71.976912,147.032258 72.1935484,147.248894 72.1935484,147.516129 C72.1935484,147.783364 71.976912,148 71.7096774,148 C71.4424429,148 71.2258065,147.783364 71.2258065,147.516129 C71.2258065,147.248894 71.4424429,147.032258 71.7096774,147.032258 Z M73.6451613,147.032258 C73.9123958,147.032258 74.1290323,147.248894 74.1290323,147.516129 C74.1290323,147.783364 73.9123958,148 73.6451613,148 C73.3779267,148 73.1612903,147.783364 73.1612903,147.516129 C73.1612903,147.248894 73.3779267,147.032258 73.6451613,147.032258 Z M75.5806452,147.032258 C75.8478797,147.032258 76.0645161,147.248894 76.0645161,147.516129 C76.0645161,147.783364 75.8478797,148 75.5806452,148 C75.3134106,148 75.0967742,147.783364 75.0967742,147.516129 C75.0967742,147.248894 75.3134106,147.032258 75.5806452,147.032258 Z M68.8064516,148.483871 C69.0736862,148.483871 69.2903226,148.700507 69.2903226,148.967742 C69.2903226,149.234976 69.0736862,149.451613 68.8064516,149.451613 C68.5392171,149.451613 68.3225806,149.234976 68.3225806,148.967742 C68.3225806,148.700507 68.5392171,148.483871 68.8064516,148.483871 Z M70.7419355,148.483871 C71.00917,148.483871 71.2258065,148.700507 71.2258065,148.967742 C71.2258065,149.234976 71.00917,149.451613 70.7419355,149.451613 C70.4747009,149.451613 70.2580645,149.234976 70.2580645,148.967742 C70.2580645,148.700507 70.4747009,148.483871 70.7419355,148.483871 Z M72.6774194,148.483871 C72.9446539,148.483871 73.1612903,148.700507 73.1612903,148.967742 C73.1612903,149.234976 72.9446539,149.451613 72.6774194,149.451613 C72.4101848,149.451613 72.1935484,149.234976 72.1935484,148.967742 C72.1935484,148.700507 72.4101848,148.483871 72.6774194,148.483871 Z M74.6129032,148.483871 C74.8801378,148.483871 75.0967742,148.700507 75.0967742,148.967742 C75.0967742,149.234976 74.8801378,149.451613 74.6129032,149.451613 C74.3456687,149.451613 74.1290323,149.234976 74.1290323,148.967742 C74.1290323,148.700507 74.3456687,148.483871 74.6129032,148.483871 Z M85.7419355,148.967742 C86.00917,148.967742 86.2258065,149.184378 86.2258065,149.451613 C86.2258065,149.718847 86.00917,149.935484 85.7419355,149.935484 C85.4747009,149.935484 85.2580645,149.718847 85.2580645,149.451613 C85.2580645,149.184378 85.4747009,148.967742 85.7419355,148.967742 Z M87.6774194,148.967742 C87.9446539,148.967742 88.1612903,149.184378 88.1612903,149.451613 C88.1612903,149.718847 87.9446539,149.935484 87.6774194,149.935484 C87.4101848,149.935484 87.1935484,149.718847 87.1935484,149.451613 C87.1935484,149.184378 87.4101848,148.967742 87.6774194,148.967742 Z M63.9677419,149.56502 L63.9677419,150.903226 C63.9677419,151.702416 64.6758039,152.547023 66.033644,153.205393 C67.3914842,153.863764 69.3263816,154.290323 71.4677419,154.290323 C73.6091023,154.290323 75.5439997,153.863764 76.9018398,153.205393 C78.25968,152.547022 78.9677419,151.702416 78.9677419,150.903226 L78.9677419,149.56502 C78.529364,149.995585 77.9713974,150.374944 77.3242819,150.688697 C75.7925468,151.431356 73.7358218,151.870968 71.4677419,151.870968 C69.1996621,151.870968 67.1429371,151.431356 65.6112019,150.688697 C64.9640865,150.374944 64.4061198,149.995585 63.9677419,149.56502 Z M92.0322581,149.56502 C91.5938787,149.995591 91.0359058,150.374936 90.3887981,150.688697 C88.8570813,151.431375 86.8004139,151.870968 84.5322581,151.870968 C82.8379079,151.870968 81.2630603,151.622755 79.9354839,151.189579 L79.9354839,153.55223 C81.2023815,154.009593 82.7972429,154.290323 84.5322581,154.290323 C86.6736184,154.290323 88.6085158,153.863764 89.966356,153.205393 C91.3241961,152.547022 92.0322581,151.702416 92.0322581,150.903226 L92.0322581,149.56502 Z M72.6774194,152.354839 C72.9446539,152.354839 73.1612903,152.571475 73.1612903,152.83871 C73.1612903,153.105944 72.9446539,153.322581 72.6774194,153.322581 C72.4101848,153.322581 72.1935484,153.105944 72.1935484,152.83871 C72.1935484,152.571475 72.4101848,152.354839 72.6774194,152.354839 Z M74.6129032,152.354839 C74.8801378,152.354839 75.0967742,152.571475 75.0967742,152.83871 C75.0967742,153.105944 74.8801378,153.322581 74.6129032,153.322581 C74.3456687,153.322581 74.1290323,153.105944 74.1290323,152.83871 C74.1290323,152.571475 74.3456687,152.354839 74.6129032,152.354839 Z M85.7419355,152.354839 C86.00917,152.354839 86.2258065,152.571475 86.2258065,152.83871 C86.2258065,153.105944 86.00917,153.322581 85.7419355,153.322581 C85.4747009,153.322581 85.2580645,153.105944 85.2580645,152.83871 C85.2580645,152.571475 85.4747009,152.354839 85.7419355,152.354839 Z M87.6774194,152.354839 C87.9446539,152.354839 88.1612903,152.571475 88.1612903,152.83871 C88.1612903,153.105944 87.9446539,153.322581 87.6774194,153.322581 C87.4101848,153.322581 87.1935484,153.105944 87.1935484,152.83871 C87.1935484,152.571475 87.4101848,152.354839 87.6774194,152.354839 Z M63.9677419,152.952117 L63.9677419,154.290323 C63.9677419,155.089512 64.6758039,155.934119 66.033644,156.59249 C67.3914842,157.250861 69.3263816,157.677419 71.4677419,157.677419 C73.6091023,157.677419 75.5439997,157.250861 76.9018398,156.59249 C78.25968,155.934119 78.9677419,155.089512 78.9677419,154.290323 L78.9677419,152.952117 C78.5293626,153.382688 77.9713897,153.762033 77.3242819,154.075794 C75.7925652,154.818472 73.7358977,155.258065 71.4677419,155.258065 C69.1995861,155.258065 67.1429187,154.818472 65.6112019,154.075794 C64.9640942,153.762033 64.4061213,153.382688 63.9677419,152.952117 Z M92.0322581,152.952117 C91.5938787,153.382688 91.0359058,153.762033 90.3887981,154.075794 C88.8570813,154.818472 86.8004139,155.258065 84.5322581,155.258065 C82.8382156,155.258065 81.2626752,155.010552 79.9354839,154.577621 L79.9354839,156.939327 C81.2023152,157.396895 82.7975855,157.677419 84.5322581,157.677419 C86.6736184,157.677419 88.6085158,157.250861 89.966356,156.59249 C91.3241961,155.934119 92.0322581,155.089512 92.0322581,154.290323 L92.0322581,152.952117 Z M72.6774194,155.741935 C72.9446539,155.741935 73.1612903,155.958572 73.1612903,156.225806 C73.1612903,156.493041 72.9446539,156.709677 72.6774194,156.709677 C72.4101848,156.709677 72.1935484,156.493041 72.1935484,156.225806 C72.1935484,155.958572 72.4101848,155.741935 72.6774194,155.741935 Z M74.6129032,155.741935 C74.8801378,155.741935 75.0967742,155.958572 75.0967742,156.225806 C75.0967742,156.493041 74.8801378,156.709677 74.6129032,156.709677 C74.3456687,156.709677 74.1290323,156.493041 74.1290323,156.225806 C74.1290323,155.958572 74.3456687,155.741935 74.6129032,155.741935 Z M85.7419355,155.741935 C86.00917,155.741935 86.2258065,155.958572 86.2258065,156.225806 C86.2258065,156.493041 86.00917,156.709677 85.7419355,156.709677 C85.4747009,156.709677 85.2580645,156.493041 85.2580645,156.225806 C85.2580645,155.958572 85.4747009,155.741935 85.7419355,155.741935 Z M87.6774194,155.741935 C87.9446539,155.741935 88.1612903,155.958572 88.1612903,156.225806 C88.1612903,156.493041 87.9446539,156.709677 87.6774194,156.709677 C87.4101848,156.709677 87.1935484,156.493041 87.1935484,156.225806 C87.1935484,155.958572 87.4101848,155.741935 87.6774194,155.741935 Z M63.9677419,156.339214 L63.9677419,157.677419 C63.9677419,158.476609 64.6758039,159.321216 66.033644,159.979586 C67.3914842,160.637959 69.3263816,161.064516 71.4677419,161.064516 C73.6091023,161.064516 75.5439997,160.637959 76.9018398,159.979586 C78.25968,159.321217 78.9677419,158.476609 78.9677419,157.677419 L78.9677419,156.339214 C78.5293626,156.769785 77.9713897,157.14913 77.3242819,157.462891 C75.7925652,158.205568 73.7358977,158.645161 71.4677419,158.645161 C69.1995861,158.645161 67.1429187,158.205568 65.6112019,157.462891 C64.9640942,157.14913 64.4061213,156.769785 63.9677419,156.339214 Z M72.6774194,159.129032 C72.9446539,159.129032 73.1612903,159.345669 73.1612903,159.612903 C73.1612903,159.880138 72.9446539,160.096774 72.6774194,160.096774 C72.4101848,160.096774 72.1935484,159.880138 72.1935484,159.612903 C72.1935484,159.345669 72.4101848,159.129032 72.6774194,159.129032 Z M74.6129032,159.129032 C74.8801378,159.129032 75.0967742,159.345669 75.0967742,159.612903 C75.0967742,159.880138 74.8801378,160.096774 74.6129032,160.096774 C74.3456687,160.096774 74.1290323,159.880138 74.1290323,159.612903 C74.1290323,159.345669 74.3456687,159.129032 74.6129032,159.129032 Z", id: "icon-payment-large" })))))); });
exports.default = exports.PaymentIcon;
//# sourceMappingURL=payment.js.map