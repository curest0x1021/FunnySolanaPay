import { Accordion, Card } from "flowbite-react";
import Link from "next/link";
import SiteHeading from "../components/SiteHeading";

export default function HelpPage() {
  return (
    <div className="relative w-1/2 pt-24 m-auto">
      <SiteHeading>How to use Funny Solana Pay</SiteHeading>
      <Card>
        <Accordion flush={true}>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="font-middle text-xl">What is Funny Solana Pay?</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Funny Solana Pay is the test project for using Solana Pay
                easily.
              </p>
              <p className="mb-2 font-semibold text-gray-500 dark:text-gray-400">
                CryoptoCurrency Problem
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Onboarding onto Web 3.0 remains complex, multi-step.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Why do we need to address this issue?
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  Merchants accepting Solana Pay is growing, but the users are
                  not.
                </li>
                <li>
                  No easy way for merchants to issue custom SPL-tokens to
                  customers
                </li>
                <li>Underbanked populations have no easy access.</li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="font-middle text-xl">Solana Network</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">
                Funny Solana Pay works on{" "}
                <span className="font-semibold">Solana devnet</span>.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="font-middle text-xl">
                How to airdrop WL token(DWLT)?
              </p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">
                In{" "}
                <Link
                  href="/faucet"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Faucet
                </Link>{" "}
                page, users airdrop 2 WL token (DWLT) into their wallets.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="font-middle text-xl">Our Crypto Cash Point</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">
                In{" "}
                <Link
                  href="/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Home
                </Link>{" "}
                page, user sends the WL token to the merchant and in return
                gets:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <p>
                    <span className="font-semibold">0.0001 SOL. </span>
                    To cover independent TX fees on the blockchain.
                    <br />
                    User might want to send some tokens to his friend or do some
                    in wallet swap.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Store token(DST). </span>
                    User can purchase goods in the store or mint NFT by using
                    this token.
                    <br />
                    This can be anything from a merchant specific token to
                    stablecoins.
                  </p>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="font-middle text-xl">
                How to donate into Funny Solana Pay?
              </p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">
                In{" "}
                <Link
                  href="/donate"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Donate
                </Link>{" "}
                page, user can donate SOL into Funnay Solana Pay.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="font-middle text-xl">How to mint NFT?</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="text-gray-500 dark:text-gray-400">
                In{" "}
                <Link
                  href="/mint"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Mint
                </Link>{" "}
                page, users can mint NFT using Store token(DST).
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                To get Store token(DST), go to the{" "}
                <Link
                  href="/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Home
                </Link>{" "}
                page and send WL tokens as you need the amount of Store tokens.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Card>
    </div>
  );
}
