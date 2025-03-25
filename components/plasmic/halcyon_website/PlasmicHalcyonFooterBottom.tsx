// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: DyM3o4afMIzM

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicHalcyonFooterBottom.module.css"; // plasmic-import: DyM3o4afMIzM/css

createPlasmicElementProxy;

export type PlasmicHalcyonFooterBottom__VariantMembers = {};
export type PlasmicHalcyonFooterBottom__VariantsArgs = {};
type VariantPropType = keyof PlasmicHalcyonFooterBottom__VariantsArgs;
export const PlasmicHalcyonFooterBottom__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHalcyonFooterBottom__ArgsType = {};
type ArgPropType = keyof PlasmicHalcyonFooterBottom__ArgsType;
export const PlasmicHalcyonFooterBottom__ArgProps = new Array<ArgPropType>();

export type PlasmicHalcyonFooterBottom__OverridesType = {
  halcyonFooterBottom?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultHalcyonFooterBottomProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHalcyonFooterBottom__RenderFunc(props: {
  variants: PlasmicHalcyonFooterBottom__VariantsArgs;
  args: PlasmicHalcyonFooterBottom__ArgsType;
  overrides: PlasmicHalcyonFooterBottom__OverridesType;
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
    <div
      data-plasmic-name={"halcyonFooterBottom"}
      data-plasmic-override={overrides.halcyonFooterBottom}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.halcyonFooterBottom
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"\u00a9 HalcyonStudios. All rights reserved."}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  halcyonFooterBottom: ["halcyonFooterBottom", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  halcyonFooterBottom: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHalcyonFooterBottom__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHalcyonFooterBottom__VariantsArgs;
    args?: PlasmicHalcyonFooterBottom__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHalcyonFooterBottom__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHalcyonFooterBottom__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHalcyonFooterBottom__ArgProps,
          internalVariantPropNames: PlasmicHalcyonFooterBottom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHalcyonFooterBottom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "halcyonFooterBottom") {
    func.displayName = "PlasmicHalcyonFooterBottom";
  } else {
    func.displayName = `PlasmicHalcyonFooterBottom.${nodeName}`;
  }
  return func;
}

export const PlasmicHalcyonFooterBottom = Object.assign(
  // Top-level PlasmicHalcyonFooterBottom renders the root element
  makeNodeComponent("halcyonFooterBottom"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHalcyonFooterBottom
    internalVariantProps: PlasmicHalcyonFooterBottom__VariantProps,
    internalArgProps: PlasmicHalcyonFooterBottom__ArgProps
  }
);

export default PlasmicHalcyonFooterBottom;
/* prettier-ignore-end */
