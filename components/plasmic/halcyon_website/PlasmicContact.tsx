/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: j9TSd2_kMNv9

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

import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: UDe2_-rIrkzi/component
import SectionContactUs from "../../SectionContactUs"; // plasmic-import: jDe8VPrKN8I9/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: WgtcOX7lLlZ3/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: DyM3o4afMIzM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: j9TSd2_kMNv9/css

createPlasmicElementProxy;

export type PlasmicContact__VariantMembers = {};
export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: Flex__<"div">;
  halcyonNavBar?: Flex__<typeof HalcyonNavBar>;
  sectionContactUs?: Flex__<typeof SectionContactUs>;
  halcyonFooter?: Flex__<typeof HalcyonFooter>;
  halcyonFooterBottom?: Flex__<typeof HalcyonFooterBottom>;
};

export interface DefaultContactProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
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

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicContact.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicContact.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicContact.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <HalcyonNavBar
            data-plasmic-name={"halcyonNavBar"}
            data-plasmic-override={overrides.halcyonNavBar}
            className={classNames("__wab_instance", sty.halcyonNavBar)}
          />

          <SectionContactUs
            data-plasmic-name={"sectionContactUs"}
            data-plasmic-override={overrides.sectionContactUs}
            className={classNames("__wab_instance", sty.sectionContactUs)}
          />

          <HalcyonFooter
            data-plasmic-name={"halcyonFooter"}
            data-plasmic-override={overrides.halcyonFooter}
            className={classNames("__wab_instance", sty.halcyonFooter)}
          />

          <HalcyonFooterBottom
            data-plasmic-name={"halcyonFooterBottom"}
            data-plasmic-override={overrides.halcyonFooterBottom}
            className={classNames("__wab_instance", sty.halcyonFooterBottom)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "halcyonNavBar",
    "sectionContactUs",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],
  halcyonNavBar: ["halcyonNavBar"],
  sectionContactUs: ["sectionContactUs"],
  halcyonFooter: ["halcyonFooter"],
  halcyonFooterBottom: ["halcyonFooterBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  halcyonNavBar: typeof HalcyonNavBar;
  sectionContactUs: typeof SectionContactUs;
  halcyonFooter: typeof HalcyonFooter;
  halcyonFooterBottom: typeof HalcyonFooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContact__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    sectionContactUs: makeNodeComponent("sectionContactUs"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Contact",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
