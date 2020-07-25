import * as React from 'react';
import { SvgIcon } from '@material-ui/core';
export const HelpIcon = ((props) => (React.createElement(SvgIcon, Object.assign({ style: { width: props.width || '36px', height: props.height || '36px' } }, props, { viewBox: props.viewBox || '0 0 36 36' }),
    React.createElement("path", { fill: "#009DB4", fillRule: "nonzero", d: "M15.882 0c-.397 0-.746.23-.926.558L14.788.53h-.053l-.424.213-.033.189c-.41.089-.813.192-1.21.31l.058-.331L12.8.562 12.617.53h-.052l-.424.213-.084.466.254.273A17.513 17.513 0 0 0 1.352 12.7l-.442-.077-.348.323-.033.184v.054l.213.424.333.057c-.099.393-.186.788-.26 1.19A1.067 1.067 0 0 0 0 15.882v4.236c0 .397.23.746.558.926l-.029.168v.053l.213.424.189.033c.089.41.192.813.31 1.21l-.331-.058-.348.325-.033.184v.052l.213.424.466.084.273-.254A17.521 17.521 0 0 0 12.7 34.65l-.077.441.323.347.184.034h.054l.424-.213.057-.333c.393.099.788.186 1.19.258.111.465.533.817 1.027.817h4.236c.397 0 .746-.23.926-.56l.168.03h.053l.424-.212.033-.19c.41-.088.813-.19 1.21-.309l-.058.331.325.347.184.034h.052l.424-.213.084-.466-.254-.273A17.521 17.521 0 0 0 34.65 23.3l.441.077.347-.323.034-.184v-.054l-.213-.424-.333-.057c.099-.393.186-.788.258-1.19.465-.111.817-.533.817-1.027v-4.236c0-.397-.23-.746-.56-.926l.03-.168v-.053l-.212-.424-.19-.033a15.69 15.69 0 0 0-.309-1.21l.331.058.347-.325.034-.184v-.052l-.213-.424-.466-.084-.273.254A17.513 17.513 0 0 0 23.3 1.352l.077-.442-.323-.348L22.87.53h-.054l-.424.213-.057.333c-.393-.099-.788-.186-1.19-.26A1.067 1.067 0 0 0 20.118 0h-4.236zm9.106.53l-.424.212-.085.466.327.347.182.033h.054l.424-.213.084-.465-.326-.348-.182-.033h-.054zM10.42.537l-.054.002-.414.233-.06.472.342.329.186.023.051-.003.414-.233.06-.472-.341-.329-.184-.022zM27.23.7l-.453.147-.151.449.266.39.176.06.054.009.45-.147.154-.449-.269-.39-.176-.06L27.23.7zM8.355.82l-.186.016-.052.013-.358.31.035.474.402.254.184-.012.051-.015.36-.312-.037-.472-.4-.256zm7.527.24h1.06a.53.53 0 0 0 1.058 0h2.118v8.47H18a.53.53 0 0 0-1.059 0h-1.059V1.06zm13.567.318l-.474.009-.28.384.143.453.153.11.046.022.476-.006.277-.384-.143-.455-.149-.108-.05-.025zM6.22 1.574l-.18.05-.046.022-.291.377.128.457.44.17.18-.05.05-.021.29-.379-.129-.455-.442-.171zm8.603.362v7.122a9.502 9.502 0 0 0-5.766 5.766H1.936A16.38 16.38 0 0 1 14.824 1.936zm6.352 0a16.38 16.38 0 0 1 12.888 12.888h-7.122a9.502 9.502 0 0 0-5.766-5.766V1.936zm9.764.504l-.348.323.054.471.126.139.041.029.47.085.345-.325-.051-.472-.129-.134-.041-.033-.467-.083zm-13.47.207a.53.53 0 0 0 0 1.059.53.53 0 0 0 0-1.059zm-13.204.155l-.157.1-.04.035-.173.44.255.403.473.04.157-.1.04-.037.17-.44-.251-.404-.474-.037zm28.357 1.094l-.403.255-.04.473.1.157.037.04.44.17.404-.251.037-.474-.1-.157-.035-.04-.44-.173zm-29.461.476l-.472.051-.134.129-.033.041-.083.467.323.348.471-.054.139-.126.029-.041.085-.47-.325-.345zm14.309.393a.53.53 0 0 0 0 1.059.53.53 0 0 0 0-1.06zm16.509.939l-.46.128-.17.44.05.18.021.05.379.29.455-.129.171-.442-.05-.18-.022-.046-.374-.291zM1.965 6.21l-.455.143-.108.149-.025.05.009.473.384.28.453-.143.11-.153.022-.046-.006-.476-.384-.277zm15.506.672a.53.53 0 0 0 0 1.06.53.53 0 0 0 0-1.06zm17.37.877l-.473.035-.254.402.014.184.013.051.312.36.472-.037.256-.4-.016-.185-.01-.052-.313-.358zm-33.68.515l-.392.269-.06.176-.008.051.147.453.449.151.39-.266.06-.176.009-.054-.147-.45-.449-.154zm33.596 1.62l-.33.34-.024.187.003.051.233.414.47.06.33-.341.023-.184-.002-.054-.233-.414-.47-.06zm-19.77.19c.186.3.519.504.895.504h4.236c.376 0 .709-.204.895-.504a8.49 8.49 0 0 1 4.903 4.903c-.3.186-.504.519-.504.895v4.236c0 .376.204.709.504.895a8.49 8.49 0 0 1-4.903 4.903 1.06 1.06 0 0 0-.895-.504h-4.236c-.376 0-.709.204-.895.504a8.49 8.49 0 0 1-4.903-4.903c.3-.186.504-.519.504-.895v-4.236c0-.376-.204-.709-.504-.895a8.49 8.49 0 0 1 4.903-4.903zM.91 10.45l-.348.326-.033.182v.054l.213.424.466.085.347-.327.033-.182v-.054l-.213-.424-.465-.084zm.149 5.432h8.47v1.06a.53.53 0 0 0 0 1.058v2.118H1.06V18a.53.53 0 0 0 0-1.059v-1.059zm25.412 0h8.47v1.06a.53.53 0 0 0 0 1.058v2.118h-8.47V18a.53.53 0 0 0 0-1.059v-1.059zm-23.295 1.06a.53.53 0 0 0 0 1.058.53.53 0 0 0 0-1.059zm2.118 0a.53.53 0 0 0 0 1.058.53.53 0 0 0 0-1.059zm2.118 0a.53.53 0 0 0 0 1.058.53.53 0 0 0 0-1.059zm21.176 0a.53.53 0 0 0 0 1.058.53.53 0 0 0 0-1.059zm2.118 0a.53.53 0 0 0 0 1.058.53.53 0 0 0 0-1.059zm2.118 0a.53.53 0 0 0 0 1.058.53.53 0 0 0 0-1.059zM1.936 21.175h7.122a9.502 9.502 0 0 0 5.766 5.766v7.122A16.38 16.38 0 0 1 1.936 21.176zm25.006 0h7.122a16.38 16.38 0 0 1-12.888 12.888v-7.122a9.502 9.502 0 0 0 5.766-5.766zm7.85 3.303l-.347.327-.033.182v.054l.213.424.465.084.347-.326.034-.182v-.054l-.213-.424-.466-.085zM.89 25.054l-.329.341-.022.184.002.054.233.414.472.06.329-.342.023-.186-.003-.051-.233-.414-.472-.06zm14.993 1.417h1.06a.53.53 0 0 0 1.058 0h2.118v8.47H18a.53.53 0 0 0-1.059 0h-1.059v-8.47zm18.821.155l-.39.266-.06.176-.009.054.145.45.45.154.392-.269.06-.176.008-.051-.145-.453-.45-.151zm-33.156.583l-.472.037-.256.4.016.185.013.052.31.358.474-.035.254-.402-.012-.184-.015-.051-.312-.36zm15.924.85a.53.53 0 0 0 0 1.059.53.53 0 0 0 0-1.06zm16.759.637l-.453.142-.11.153-.022.046.006.476.386.277.451-.143.112-.149.02-.05-.006-.473-.384-.28zm-32.03.513l-.455.128-.171.442.05.18.022.046.377.291.457-.128.17-.44-.05-.18-.021-.05-.379-.29zm15.27.967a.53.53 0 0 0 0 1.06.53.53 0 0 0 0-1.06zm15.767.416l-.471.054-.139.126-.029.041-.085.47.325.345.472-.051.134-.129.033-.041.083-.467-.323-.348zm-29.994.418l-.404.25-.037.474.1.157.035.04.44.173.403-.255.04-.473-.1-.157-.037-.04-.44-.17zm28.133 1.17l-.157.1-.04.037-.17.44.251.404.474.037.157-.1.04-.035.173-.44-.255-.403-.473-.04zm-13.905.114a.53.53 0 0 0 0 1.059.53.53 0 0 0 0-1.059zm-12.754.22l-.345.324.051.472.129.134.041.033.467.083.348-.323-.054-.471-.126-.139-.041-.029-.47-.085zm25.01.837l-.18.05-.049.02-.29.379.129.455.442.171.18-.05.046-.022.291-.374-.128-.46-.44-.17zm-22.764.294l-.476.006-.277.386.143.451.149.112.05.02.473-.006.28-.384-.143-.453-.153-.11-.046-.022zm20.841.469l-.184.014-.051.013-.36.312.037.472.4.256.185-.016.052-.01.358-.313-.035-.474-.402-.254zm-18.926.13l-.45.145-.154.45.269.392.176.06.051.008.453-.145.151-.45-.266-.392-.176-.06-.054-.008zm16.701.16l-.051.002-.414.233-.06.47.341.33.184.023.054-.002.414-.233.06-.47-.342-.33-.186-.024zm-14.62.008l-.425.213-.084.465.326.347.182.034h.054l.424-.213.085-.466-.327-.347-.182-.033h-.054z", opacity: ".6" }))));
export default HelpIcon;
//# sourceMappingURL=help.js.map