// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: FL9UE5cenYH-

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
import sty from "./PlasmicNewsletterComponent.module.css"; // plasmic-import: FL9UE5cenYH-/css

createPlasmicElementProxy;

export type PlasmicNewsletterComponent__VariantMembers = {};
export type PlasmicNewsletterComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewsletterComponent__VariantsArgs;
export const PlasmicNewsletterComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNewsletterComponent__ArgsType = {};
type ArgPropType = keyof PlasmicNewsletterComponent__ArgsType;
export const PlasmicNewsletterComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicNewsletterComponent__OverridesType = {
  root?: Flex__<"div">;
  h2?: Flex__<"h2">;
};

export interface DefaultNewsletterComponentProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewsletterComponent__RenderFunc(props: {
  variants: PlasmicNewsletterComponent__VariantsArgs;
  args: PlasmicNewsletterComponent__ArgsType;
  overrides: PlasmicNewsletterComponent__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <h2
        data-plasmic-name={"h2"}
        data-plasmic-override={overrides.h2}
        className={classNames(
          projectcss.all,
          projectcss.h2,
          projectcss.__wab_text,
          sty.h2
        )}
      >
        {"Sign Up for Membership Promotions"}
      </h2>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewsletterComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewsletterComponent__VariantsArgs;
    args?: PlasmicNewsletterComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewsletterComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewsletterComponent__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicNewsletterComponent__ArgProps,
          internalVariantPropNames: PlasmicNewsletterComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewsletterComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewsletterComponent";
  } else {
    func.displayName = `PlasmicNewsletterComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicNewsletterComponent = Object.assign(
  // Top-level PlasmicNewsletterComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicNewsletterComponent
    internalVariantProps: PlasmicNewsletterComponent__VariantProps,
    internalArgProps: PlasmicNewsletterComponent__ArgProps
  }
);

export default PlasmicNewsletterComponent;
/* prettier-ignore-end */
