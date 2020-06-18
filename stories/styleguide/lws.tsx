import * as React from 'react';
import { LWSSelectWallet } from '../../src/lws/lws-select-wallet';
import { LWSRequiredInfo } from '../../src/lws/lws-required-info';
import { LWSWalletConnectionError } from '../../src/lws/lws-wallet-connection-error';
import { LWSSelfkeyIdError } from '../../src/lws/lws-selfkey-id-error';
import { LWSExtensionError } from '../../src/lws/lws-extension-error';
import { LWSSuccess } from '../../src/lws/lws-success';
import { LWSAuthError } from '../../src/lws/lws-auth-error';

export const LWSSelectWalletWrapper = () => (
    <div>
        <LWSSelectWallet
            wallets={[
                { publicKey: '0x4184288c556524df9cb9e58b73265ee66dca4efe', unlocked: true, profile: 'local' },
                { publicKey: '0x4184288c556524df9cb9e58b73265ee66dca4ef2', unlocked: false, profile: 'local' },
            ]}
            loginAction={(wallet, password) => {
                alert(`${wallet.publicKey}:${password}`);
            }}
        />
    </div>
);

export const LWSRequiredInfoWrapper = () => (
    <div>
        <LWSRequiredInfo
            requested={[
                {
                    label: 'Name',
                    key: 'first_name',
                    attribute: 'http://platform.selfkey.org/schema/attribute/first-name.json',
                },
                { label: 'Country', key: 'country' },
                {
                    key: 'last_name',
                    attribute: 'http://platform.selfkey.org/schema/attribute/last-name.json',
                },
                {
                    label: 'Birth Day',
                    key: 'birthdate',
                    attribute: 'http://platform.selfkey.org/schema/attribute/birth-date.json',
                },
            ]}
            attributes={[
                {
                    url: 'http://platform.selfkey.org/schema/attribute/first-name.json',
                    value: 'Test1',
                    name: 'first_name',
                    schema: {
                        $id: 'http://platform.selfkey.org/schema/attribute/first-name.json',
                        $schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
                        identityAttribute: true,
                        identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
                        title: 'First Name',
                        description: "An individual's first (given) name.",
                        type: 'string',
                    },
                    id: 1,
                },
                {
                    url: 'http://platform.selfkey.org/schema/attribute/last-name.json',
                    value: 'Test2',
                    name: 'last_name',
                    schema: {
                        $id: 'http://platform.selfkey.org/schema/attribute/last-name.json',
                        $schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
                        identityAttribute: true,
                        identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
                        title: 'Last Name',
                        description: "An individual's last (family) name.",
                        type: 'string',
                    },
                    id: 2,
                },
                {
                    url: 'http://platform.selfkey.org/schema/attribute/birth-date.json',
                    value: { day: 1, month: 2, year: 1991 },
                    name: 'birthdate1',
                    schema: {
                        $id: 'http://platform.selfkey.org/schema/attribute/last-name.json',
                        $schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
                        identityAttribute: true,
                        identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
                        title: 'Birtdate',
                        description: "An individual's last (family) name.",
                        type: 'string',
                    },
                    id: 2,
                },
            ]}
            notAllowedAttributes={['http://platform.selfkey.org/schema/attribute/birth-date.json']}
            disallowAttributeAction={(attribute, disallow) => {
                alert(attribute.key + ' ' + disallow);
            }}
            website={{
                name: 'PaveziCoin',
                url: 'http://www.pavezicoin.org',
                termsUrl: 'http://www.pavezicoin.org/terms',
                policyUrl: 'http://www.pavezicoin.org/privacy',
            }}
        />
    </div>
);

export const LWSWalletConnectionErrorWrapper = () => (
    <div>
        <LWSWalletConnectionError />
    </div>
);

export const LWSSelfkeyIdErrorWrapper = () => (
    <div>
        <LWSSelfkeyIdError />
    </div>
);

export const LWSExtensionErrorWrapper = () => (
    <div>
        <LWSExtensionError />
    </div>
);

export const LWSSuccessWrapper = () => (
    <div>
        <LWSSuccess />
    </div>
);

export const LWSAuthErrorWrapper = () => (
    <div>
        <LWSAuthError
            website={{
                name: 'PaveziCoin',
                url: 'http://www.pavezicoin.org',
                termsUrl: 'http://www.pavezicoin.org/terms',
                policyUrl: 'http://www.pavezicoin.org/privacy',
            }}
        />
    </div>
);
