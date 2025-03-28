/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: YvW5mYN77oI5

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
import ContainerPrivates from "../../ContainerPrivates"; // plasmic-import: PZjNRg33hRNg/component
import PrivatesForm2 from "../../PrivatesForm2"; // plasmic-import: DGQUyhUXa44C/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: WgtcOX7lLlZ3/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: DyM3o4afMIzM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicPrivates.module.css"; // plasmic-import: YvW5mYN77oI5/css

createPlasmicElementProxy;

export type PlasmicPrivates__VariantMembers = {};
export type PlasmicPrivates__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrivates__VariantsArgs;
export const PlasmicPrivates__VariantProps = new Array<VariantPropType>();

export type PlasmicPrivates__ArgsType = {};
type ArgPropType = keyof PlasmicPrivates__ArgsType;
export const PlasmicPrivates__ArgProps = new Array<ArgPropType>();

export type PlasmicPrivates__OverridesType = {
  root?: Flex__<"div">;
  halcyonNavBar?: Flex__<typeof HalcyonNavBar>;
  section?: Flex__<"section">;
  containerPrivates?: Flex__<typeof ContainerPrivates>;
  freeBox?: Flex__<"div">;
  privatesForm2?: Flex__<typeof PrivatesForm2>;
  halcyonFooter?: Flex__<typeof HalcyonFooter>;
  halcyonFooterBottom?: Flex__<typeof HalcyonFooterBottom>;
};

export interface DefaultPrivatesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPrivates__RenderFunc(props: {
  variants: PlasmicPrivates__VariantsArgs;
  args: PlasmicPrivates__ArgsType;
  overrides: PlasmicPrivates__OverridesType;
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
      <Head></Head>

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

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <ContainerPrivates
              data-plasmic-name={"containerPrivates"}
              data-plasmic-override={overrides.containerPrivates}
              className={classNames("__wab_instance", sty.containerPrivates)}
            />

            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <PrivatesForm2
                data-plasmic-name={"privatesForm2"}
                data-plasmic-override={overrides.privatesForm2}
                className={classNames("__wab_instance", sty.privatesForm2)}
              />
            </div>
          </section>
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
    "section",
    "containerPrivates",
    "freeBox",
    "privatesForm2",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],
  halcyonNavBar: ["halcyonNavBar"],
  section: ["section", "containerPrivates", "freeBox", "privatesForm2"],
  containerPrivates: ["containerPrivates"],
  freeBox: ["freeBox", "privatesForm2"],
  privatesForm2: ["privatesForm2"],
  halcyonFooter: ["halcyonFooter"],
  halcyonFooterBottom: ["halcyonFooterBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  halcyonNavBar: typeof HalcyonNavBar;
  section: "section";
  containerPrivates: typeof ContainerPrivates;
  freeBox: "div";
  privatesForm2: typeof PrivatesForm2;
  halcyonFooter: typeof HalcyonFooter;
  halcyonFooterBottom: typeof HalcyonFooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrivates__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrivates__VariantsArgs;
    args?: PlasmicPrivates__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrivates__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrivates__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPrivates__ArgProps,
          internalVariantPropNames: PlasmicPrivates__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPrivates__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrivates";
  } else {
    func.displayName = `PlasmicPrivates.${nodeName}`;
  }
  return func;
}

export const PlasmicPrivates = Object.assign(
  // Top-level PlasmicPrivates renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    section: makeNodeComponent("section"),
    containerPrivates: makeNodeComponent("containerPrivates"),
    freeBox: makeNodeComponent("freeBox"),
    privatesForm2: makeNodeComponent("privatesForm2"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),

    // Metadata about props expected for PlasmicPrivates
    internalVariantProps: PlasmicPrivates__VariantProps,
    internalArgProps: PlasmicPrivates__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPrivates;
/* prettier-ignore-end */
