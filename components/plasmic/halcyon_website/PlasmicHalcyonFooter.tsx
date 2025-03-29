/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: WgtcOX7lLlZ3

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import { useScreenVariants as useScreenVariantsqAyk5ZgNfB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: q_ayk5ZGNfB_/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicHalcyonFooter.module.css"; // plasmic-import: WgtcOX7lLlZ3/css

import Instagram1SvgrepoComSvgIcon from "./icons/PlasmicIcon__Instagram1SvgrepoComSvg"; // plasmic-import: HvHYiYVE64hp/icon
import TiktokLogoLogoSvgrepoComSvgIcon from "./icons/PlasmicIcon__TiktokLogoLogoSvgrepoComSvg"; // plasmic-import: KfGPUyuU1GIA/icon
import PinterestSvgrepoComSvg2Icon from "./icons/PlasmicIcon__PinterestSvgrepoComSvg2"; // plasmic-import: RxN6QMK2WuQ4/icon
import LogoSvgIcon from "./icons/PlasmicIcon__LogoSvg"; // plasmic-import: 54DQJ6tyhv9Y/icon

createPlasmicElementProxy;

export type PlasmicHalcyonFooter__VariantMembers = {};
export type PlasmicHalcyonFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicHalcyonFooter__VariantsArgs;
export const PlasmicHalcyonFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicHalcyonFooter__ArgsType = { footerLinks3?: boolean };
type ArgPropType = keyof PlasmicHalcyonFooter__ArgsType;
export const PlasmicHalcyonFooter__ArgProps = new Array<ArgPropType>(
  "footerLinks3"
);

export type PlasmicHalcyonFooter__OverridesType = {
  footerTop?: Flex__<"div">;
  container?: Flex__<"div">;
  button?: Flex__<typeof AntdButton>;
  emailAddressText?: Flex__<"div">;
  modal?: Flex__<typeof AntdModal>;
  embedHtml?: Flex__<typeof Embed>;
  instagramIcon?: Flex__<"svg">;
  pinterestIcon2?: Flex__<"svg">;
  pinterestIcon?: Flex__<"svg">;
  twitterIcon?: Flex__<"svg">;
  homePage?: Flex__<"a"> & Partial<LinkProps>;
  homeText?: Flex__<"div">;
  membershipsPage?: Flex__<"a"> & Partial<LinkProps>;
  membershipsText?: Flex__<"div">;
  schedulePage?: Flex__<"a"> & Partial<LinkProps>;
  homeText3?: Flex__<"div">;
  privatesPage?: Flex__<"a"> & Partial<LinkProps>;
  homeText6?: Flex__<"div">;
  aboutUsPage?: Flex__<"a"> & Partial<LinkProps>;
  homeText4?: Flex__<"div">;
  contactPage?: Flex__<"a"> & Partial<LinkProps>;
  homeText5?: Flex__<"div">;
  privacyPolicyPage?: Flex__<"a"> & Partial<LinkProps>;
  termsOfServicePage?: Flex__<"a"> & Partial<LinkProps>;
  cookiesPolicyPage?: Flex__<"a"> & Partial<LinkProps>;
  h5?: Flex__<"h5">;
};

export interface DefaultHalcyonFooterProps {
  footerLinks3?: boolean;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHalcyonFooter__RenderFunc(props: {
  variants: PlasmicHalcyonFooter__VariantsArgs;
  args: PlasmicHalcyonFooter__ArgsType;
  overrides: PlasmicHalcyonFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          footerLinks3: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqAyk5ZgNfB()
  });

  return (
    <div
      data-plasmic-name={"footerTop"}
      data-plasmic-override={overrides.footerTop}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.footerTop
      )}
    >
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(projectcss.all, sty.container)}
      >
        <div className={classNames(projectcss.all, sty.columns__uC1A)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__a0XcF)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yFdn
              )}
            >
              {"Halcyon Studios"}
            </div>
            <AntdButton
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              ghost={true}
              onClick={async () => {
                const $steps = {};

                $steps["updateModalOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["modal", "open"]
                        },
                        operation: 4
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateModalOpen"] != null &&
                  typeof $steps["updateModalOpen"] === "object" &&
                  typeof $steps["updateModalOpen"].then === "function"
                ) {
                  $steps["updateModalOpen"] = await $steps["updateModalOpen"];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aPzDy
                )}
              >
                {"2305 W Morrison Ave\nTampa, FL 33609"}
              </div>
            </AntdButton>
            <div className={classNames(projectcss.all, sty.freeBox__mJ5)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h5GKs
                )}
              >
                {"EMAIL"}
              </div>
              <div
                data-plasmic-name={"emailAddressText"}
                data-plasmic-override={overrides.emailAddressText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.emailAddressText
                )}
              >
                {"Info@HalcyonStudio.us"}
              </div>
              <AntdModal
                data-plasmic-name={"modal"}
                data-plasmic-override={overrides.modal}
                className={classNames("__wab_instance", sty.modal)}
                defaultStylesClassName={classNames(
                  projectcss.root_reset,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens
                )}
                modalScopeClassName={sty["modal__modal"]}
                onOpenChange={async (...eventArgs: any) => {
                  generateStateOnChangeProp($state, ["modal", "open"]).apply(
                    null,
                    eventArgs
                  );
                }}
                open={generateStateValueProp($state, ["modal", "open"])}
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xmtFn
                    )}
                  >
                    {"Halcyon Studios"}
                  </div>
                }
                trigger={null}
                width={"650"}
              >
                <div className={classNames(projectcss.all, sty.freeBox__qjxGl)}>
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={
                      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.9592825997906!2d-82.48591732531897!3d27.933893476053484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c30f3960f8cf%3A0x2bebf5a2a4db0690!2sHalcyon%20Studio!5e0!3m2!1sen!2sus!4v1713144134165!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                    }
                  />
                </div>
              </AntdModal>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jFkXy
              )}
            >
              {"FOLLOW US"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__igy4E)}
            >
              <Instagram1SvgrepoComSvgIcon
                data-plasmic-name={"instagramIcon"}
                data-plasmic-override={overrides.instagramIcon}
                className={classNames(projectcss.all, sty.instagramIcon)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToHttpsWwwInstagramComHalcyonstudiosus"] = true
                    ? (() => {
                        const actionArgs = {
                          destination:
                            "https://www.instagram.com/halcyonstudiosus/"
                        };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToHttpsWwwInstagramComHalcyonstudiosus"] !=
                      null &&
                    typeof $steps[
                      "goToHttpsWwwInstagramComHalcyonstudiosus"
                    ] === "object" &&
                    typeof $steps["goToHttpsWwwInstagramComHalcyonstudiosus"]
                      .then === "function"
                  ) {
                    $steps["goToHttpsWwwInstagramComHalcyonstudiosus"] =
                      await $steps["goToHttpsWwwInstagramComHalcyonstudiosus"];
                  }
                }}
                role={"img"}
              />

              <TiktokLogoLogoSvgrepoComSvgIcon
                data-plasmic-name={"pinterestIcon2"}
                data-plasmic-override={overrides.pinterestIcon2}
                className={classNames(projectcss.all, sty.pinterestIcon2)}
                role={"img"}
              />

              <PinterestSvgrepoComSvg2Icon
                data-plasmic-name={"pinterestIcon"}
                data-plasmic-override={overrides.pinterestIcon}
                className={classNames(projectcss.all, sty.pinterestIcon)}
                role={"img"}
              />

              <LogoSvgIcon
                data-plasmic-name={"twitterIcon"}
                data-plasmic-override={overrides.twitterIcon}
                className={classNames(projectcss.all, sty.twitterIcon)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToPage"] = true
                    ? (() => {
                        const actionArgs = {};
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToPage"] != null &&
                    typeof $steps["goToPage"] === "object" &&
                    typeof $steps["goToPage"].then === "function"
                  ) {
                    $steps["goToPage"] = await $steps["goToPage"];
                  }
                }}
                role={"img"}
              />
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__qxxG4)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kBnWi
              )}
            >
              {"Menu"}
            </div>
            <PlasmicLink__
              data-plasmic-name={"homePage"}
              data-plasmic-override={overrides.homePage}
              className={classNames(projectcss.all, projectcss.a, sty.homePage)}
              component={Link}
              href={`/home`}
              platform={"nextjs"}
              tabIndex={1}
            >
              <div
                data-plasmic-name={"homeText"}
                data-plasmic-override={overrides.homeText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.homeText
                )}
              >
                {"Home"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"membershipsPage"}
              data-plasmic-override={overrides.membershipsPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.membershipsPage
              )}
              component={Link}
              href={`/memberships`}
              platform={"nextjs"}
              tabIndex={2}
            >
              <div
                data-plasmic-name={"membershipsText"}
                data-plasmic-override={overrides.membershipsText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.membershipsText
                )}
              >
                {"Memberships"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"schedulePage"}
              data-plasmic-override={overrides.schedulePage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.schedulePage
              )}
              component={Link}
              href={`/schedule`}
              platform={"nextjs"}
              tabIndex={3}
            >
              <div
                data-plasmic-name={"homeText3"}
                data-plasmic-override={overrides.homeText3}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.homeText3
                )}
              >
                {"Schedule"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"privatesPage"}
              data-plasmic-override={overrides.privatesPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.privatesPage
              )}
              component={Link}
              href={`/privates`}
              platform={"nextjs"}
              tabIndex={4}
            >
              <div
                data-plasmic-name={"homeText6"}
                data-plasmic-override={overrides.homeText6}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.homeText6
                )}
              >
                {"Privates"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"aboutUsPage"}
              data-plasmic-override={overrides.aboutUsPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.aboutUsPage
              )}
              component={Link}
              href={`/about-us`}
              platform={"nextjs"}
              tabIndex={5}
            >
              <div
                data-plasmic-name={"homeText4"}
                data-plasmic-override={overrides.homeText4}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.homeText4
                )}
              >
                {"About Us"}
              </div>
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"contactPage"}
              data-plasmic-override={overrides.contactPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.contactPage
              )}
              component={Link}
              href={`/contact`}
              platform={"nextjs"}
              tabIndex={6}
            >
              <div
                data-plasmic-name={"homeText5"}
                data-plasmic-override={overrides.homeText5}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.homeText5
                )}
              >
                {"Contact"}
              </div>
            </PlasmicLink__>
            <div className={classNames(projectcss.all, sty.freeBox__xdPun)}>
              <PlasmicLink__
                data-plasmic-name={"privacyPolicyPage"}
                data-plasmic-override={overrides.privacyPolicyPage}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.privacyPolicyPage
                )}
                component={Link}
                href={`/privacy-policy`}
                platform={"nextjs"}
                tabIndex={1}
                target={"_blank"}
              >
                {"Privacy Policy "}
              </PlasmicLink__>
              <PlasmicLink__
                data-plasmic-name={"termsOfServicePage"}
                data-plasmic-override={overrides.termsOfServicePage}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.termsOfServicePage
                )}
                component={Link}
                href={`/terms-of-service`}
                platform={"nextjs"}
                tabIndex={2}
                target={"_blank"}
              >
                {"Terms of Service "}
              </PlasmicLink__>
              <PlasmicLink__
                data-plasmic-name={"cookiesPolicyPage"}
                data-plasmic-override={overrides.cookiesPolicyPage}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.cookiesPolicyPage
                )}
                component={Link}
                href={`/cookies-policy`}
                platform={"nextjs"}
                tabIndex={3}
                target={"_blank"}
              >
                {"Cookies Policy"}
              </PlasmicLink__>
            </div>
          </Stack__>
          <div className={classNames(projectcss.all, sty.column__oh6Bc)}>
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {"Gallery"}
            </h5>
            <div className={classNames(projectcss.all, sty.columns__rpJzJ)}>
              <div className={classNames(projectcss.all, sty.column__mmaqc)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__olwDc)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/halcyonAngleViewJpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__qvKh)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__yQagK)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/halcyonZoomedAngleViewJpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns___8JNkK)}>
              <div className={classNames(projectcss.all, sty.column__ohOVz)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__qlnwt)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/_28Jpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__w7Dk)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__vHrY6)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/_24Jpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footerTop: [
    "footerTop",
    "container",
    "button",
    "emailAddressText",
    "modal",
    "embedHtml",
    "instagramIcon",
    "pinterestIcon2",
    "pinterestIcon",
    "twitterIcon",
    "homePage",
    "homeText",
    "membershipsPage",
    "membershipsText",
    "schedulePage",
    "homeText3",
    "privatesPage",
    "homeText6",
    "aboutUsPage",
    "homeText4",
    "contactPage",
    "homeText5",
    "privacyPolicyPage",
    "termsOfServicePage",
    "cookiesPolicyPage",
    "h5"
  ],
  container: [
    "container",
    "button",
    "emailAddressText",
    "modal",
    "embedHtml",
    "instagramIcon",
    "pinterestIcon2",
    "pinterestIcon",
    "twitterIcon",
    "homePage",
    "homeText",
    "membershipsPage",
    "membershipsText",
    "schedulePage",
    "homeText3",
    "privatesPage",
    "homeText6",
    "aboutUsPage",
    "homeText4",
    "contactPage",
    "homeText5",
    "privacyPolicyPage",
    "termsOfServicePage",
    "cookiesPolicyPage",
    "h5"
  ],
  button: ["button"],
  emailAddressText: ["emailAddressText"],
  modal: ["modal", "embedHtml"],
  embedHtml: ["embedHtml"],
  instagramIcon: ["instagramIcon"],
  pinterestIcon2: ["pinterestIcon2"],
  pinterestIcon: ["pinterestIcon"],
  twitterIcon: ["twitterIcon"],
  homePage: ["homePage", "homeText"],
  homeText: ["homeText"],
  membershipsPage: ["membershipsPage", "membershipsText"],
  membershipsText: ["membershipsText"],
  schedulePage: ["schedulePage", "homeText3"],
  homeText3: ["homeText3"],
  privatesPage: ["privatesPage", "homeText6"],
  homeText6: ["homeText6"],
  aboutUsPage: ["aboutUsPage", "homeText4"],
  homeText4: ["homeText4"],
  contactPage: ["contactPage", "homeText5"],
  homeText5: ["homeText5"],
  privacyPolicyPage: ["privacyPolicyPage"],
  termsOfServicePage: ["termsOfServicePage"],
  cookiesPolicyPage: ["cookiesPolicyPage"],
  h5: ["h5"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footerTop: "div";
  container: "div";
  button: typeof AntdButton;
  emailAddressText: "div";
  modal: typeof AntdModal;
  embedHtml: typeof Embed;
  instagramIcon: "svg";
  pinterestIcon2: "svg";
  pinterestIcon: "svg";
  twitterIcon: "svg";
  homePage: "a";
  homeText: "div";
  membershipsPage: "a";
  membershipsText: "div";
  schedulePage: "a";
  homeText3: "div";
  privatesPage: "a";
  homeText6: "div";
  aboutUsPage: "a";
  homeText4: "div";
  contactPage: "a";
  homeText5: "div";
  privacyPolicyPage: "a";
  termsOfServicePage: "a";
  cookiesPolicyPage: "a";
  h5: "h5";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHalcyonFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHalcyonFooter__VariantsArgs;
    args?: PlasmicHalcyonFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHalcyonFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHalcyonFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHalcyonFooter__ArgProps,
          internalVariantPropNames: PlasmicHalcyonFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHalcyonFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footerTop") {
    func.displayName = "PlasmicHalcyonFooter";
  } else {
    func.displayName = `PlasmicHalcyonFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicHalcyonFooter = Object.assign(
  // Top-level PlasmicHalcyonFooter renders the root element
  makeNodeComponent("footerTop"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    button: makeNodeComponent("button"),
    emailAddressText: makeNodeComponent("emailAddressText"),
    modal: makeNodeComponent("modal"),
    embedHtml: makeNodeComponent("embedHtml"),
    instagramIcon: makeNodeComponent("instagramIcon"),
    pinterestIcon2: makeNodeComponent("pinterestIcon2"),
    pinterestIcon: makeNodeComponent("pinterestIcon"),
    twitterIcon: makeNodeComponent("twitterIcon"),
    homePage: makeNodeComponent("homePage"),
    homeText: makeNodeComponent("homeText"),
    membershipsPage: makeNodeComponent("membershipsPage"),
    membershipsText: makeNodeComponent("membershipsText"),
    schedulePage: makeNodeComponent("schedulePage"),
    homeText3: makeNodeComponent("homeText3"),
    privatesPage: makeNodeComponent("privatesPage"),
    homeText6: makeNodeComponent("homeText6"),
    aboutUsPage: makeNodeComponent("aboutUsPage"),
    homeText4: makeNodeComponent("homeText4"),
    contactPage: makeNodeComponent("contactPage"),
    homeText5: makeNodeComponent("homeText5"),
    privacyPolicyPage: makeNodeComponent("privacyPolicyPage"),
    termsOfServicePage: makeNodeComponent("termsOfServicePage"),
    cookiesPolicyPage: makeNodeComponent("cookiesPolicyPage"),
    h5: makeNodeComponent("h5"),

    // Metadata about props expected for PlasmicHalcyonFooter
    internalVariantProps: PlasmicHalcyonFooter__VariantProps,
    internalArgProps: PlasmicHalcyonFooter__ArgProps
  }
);

export default PlasmicHalcyonFooter;
/* prettier-ignore-end */
