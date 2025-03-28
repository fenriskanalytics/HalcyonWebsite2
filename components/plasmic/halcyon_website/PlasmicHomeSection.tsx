/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: LXjBXx0xs4DF

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

import Button from "../../Button"; // plasmic-import: pYhfWVlbz6rK/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicHomeSection.module.css"; // plasmic-import: LXjBXx0xs4DF/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 7lEB-QKUC23V/icon

createPlasmicElementProxy;

export type PlasmicHomeSection__VariantMembers = {};
export type PlasmicHomeSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeSection__VariantsArgs;
export const PlasmicHomeSection__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeSection__ArgsType = {};
type ArgPropType = keyof PlasmicHomeSection__ArgsType;
export const PlasmicHomeSection__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeSection__OverridesType = {
  root?: Flex__<"section">;
  membershipsButton?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultHomeSectionProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomeSection__RenderFunc(props: {
  variants: PlasmicHomeSection__VariantsArgs;
  args: PlasmicHomeSection__ArgsType;
  overrides: PlasmicHomeSection__OverridesType;
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
    <section
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
      <div className={classNames(projectcss.all, sty.freeBox__tRn8P)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6MtVg)}
        >
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1__js8Bt
            )}
          >
            {"Halcyon Studios"}
          </h1>
          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1___4ANgA
            )}
          >
            {"Find Tranquility in Motion"}
          </h1>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ykXpP
            )}
          >
            {"New Memberships Available Including Reformer Pilates"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___4DSn5)}>
            <Button
              data-plasmic-name={"membershipsButton"}
              data-plasmic-override={overrides.membershipsButton}
              className={classNames("__wab_instance", sty.membershipsButton)}
              color={"green"}
              endIcon={
                <CheckSvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              }
              size={"minimal"}
              submitsForm={false}
            >
              <PlasmicLink__
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={`/memberships`}
                platform={"nextjs"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jxuNt
                  )}
                >
                  {"See Memberships"}
                </div>
              </PlasmicLink__>
            </Button>
          </div>
        </Stack__>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "membershipsButton", "svg", "link"],
  membershipsButton: ["membershipsButton", "svg", "link"],
  svg: ["svg"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  membershipsButton: typeof Button;
  svg: "svg";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeSection__VariantsArgs;
    args?: PlasmicHomeSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomeSection__ArgProps,
          internalVariantPropNames: PlasmicHomeSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeSection";
  } else {
    func.displayName = `PlasmicHomeSection.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeSection = Object.assign(
  // Top-level PlasmicHomeSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    membershipsButton: makeNodeComponent("membershipsButton"),
    svg: makeNodeComponent("svg"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHomeSection
    internalVariantProps: PlasmicHomeSection__VariantProps,
    internalArgProps: PlasmicHomeSection__ArgProps
  }
);

export default PlasmicHomeSection;
/* prettier-ignore-end */
