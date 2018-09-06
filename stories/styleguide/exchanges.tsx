import * as React from 'react';

import { Items } from '../../src/marketplace/items/items';

export const ExchangesWrapper = () => (
    <Items category='Exchanges'
    items={[
        {
            name: 'Gatecoin',
            description: 'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets.',
            status: 'Active',
            logoUrl: 'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png'
        },
        {
            name: 'WandX',
            description: 'WandX is a decentralized exchange that enables seamless creation and trade of any ERC20 Token or ERC20 Token baskets. Create and trade a basket of ERC20 Tokens with a single transaction. Token basket themes such as decentralized identity or decentralized exchanges can be created. The WAND Token can be used to get a 75% discount on the exchange fee.',
            status: 'Active',
            logoUrl: 'https://dl.airtable.com/MXzYSwTATvSyeAP8sJCw_full_WandXBackground.png'
        },
        {
            name: 'Kyber Network',
            description: 'Kyber Network is a decentralized exchange for cryptocurrencies that focuses on both security and usability. The platform guarantees the liquidity with a novel design that incorporates all market makers or liquidity providers in our exchange. The trade in Kyber Network is fast, easy and happens almost instantly as compared to the 5-10 minutes waiting time on other exchanges. Most importantly, Kyber Network is powered by smart contract, a new technology enabled by the Ethereum blockchain, which allows users to trade without trusting Kyber Network and protects them from hacking incidents. Kyber Network will benefit a wider class of mainstream users who have less technical background and allow them to trade more securely, more efficiently.',
            status: 'Active',
            logoUrl: 'https://dl.airtable.com/kpw5QlaEQbOiGcMW1cEy_full_KyberBackground.png'
        },
        {
            name: 'TagCash',
            description: 'Tagcash aims to reinvent how people spend and receive money. Tagcash wallets can handle multiple fiat currencies, with all the benefits of a distributed ledger, but with more control to comply with regulations. Custom tokens can be created for many uses - rewards, cryptocurrency, private currencies, assets representing physical items and more. You can also trade cryptocurrencies such as Bitcoin and Ethereum and fiat currencies such as USD & PHP on Tagcash.',
            status: 'Active',
            logoUrl: 'https://dl.airtable.com/lZI7Fu6PStaiIOQG4Ong_full_TagCashBackground.png'
        }
    ]}
    />
);