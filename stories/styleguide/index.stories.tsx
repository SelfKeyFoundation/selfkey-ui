import * as React from "react";

import { setAddon, storiesOf, Story } from "@storybook/react";
import { host } from "storybook-host";
import JSXAddon from "storybook-addon-jsx";
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { H1 } from "../../src/typography/headings";
import { P } from "../../src/typography/paragraph";
import { Logo } from "../../src/images/logo";
import { CryptoPriceList } from "./crypto-price-list";
import { TokenList } from "./token-list";


setAddon(JSXAddon);

const lightOnDark = host({
  title: "Light on Dark",
  align: "center",
  background: "#262f39"
});

const tStory = storiesOf("Typography", module).addDecorator(
  lightOnDark
) as Story & { addWithJSX: Function };

tStory.addWithJSX("Primary Heading (H1)", () => <H1>Primary Heading</H1>);

tStory.addWithJSX("Paragraph", () => (
  <P>
    Create a new SelfKey ID to start building your identity profile. If you were
    previously whitelisted for the KEY token sale, simply import the zip file we
    provided as your SelfKey ID. This data is stored locally on your device, not
    in a server or on the blockchain.
  </P>
));

const iStory = storiesOf("Images", module).addDecorator(
  lightOnDark
) as Story & { addWithJSX: Function };

iStory.addWithJSX("SelfKey Logo", () => <Logo />);


const priceStory = storiesOf("Prices", module).addDecorator(
  lightOnDark
) as Story & { addWithJSX: Function };

priceStory.addWithJSX("PriceList", () => <CryptoPriceList />);
priceStory.addWithJSX("TokenList", () => <TokenList/>);