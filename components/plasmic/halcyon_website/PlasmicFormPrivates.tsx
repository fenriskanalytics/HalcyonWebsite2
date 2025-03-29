/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: v0QNEp-b2qKw

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicFormPrivates.module.css"; // plasmic-import: v0QNEp-b2qKw/css

createPlasmicElementProxy;

export type PlasmicFormPrivates__VariantMembers = {};
export type PlasmicFormPrivates__VariantsArgs = {};
type VariantPropType = keyof PlasmicFormPrivates__VariantsArgs;
export const PlasmicFormPrivates__VariantProps = new Array<VariantPropType>();

export type PlasmicFormPrivates__ArgsType = {
  privatesForm2?: any;
  onPrivatesFormChange?: (val: any) => void;
};
type ArgPropType = keyof PlasmicFormPrivates__ArgsType;
export const PlasmicFormPrivates__ArgProps = new Array<ArgPropType>(
  "privatesForm2",
  "onPrivatesFormChange"
);

export type PlasmicFormPrivates__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  privatesForm?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  input2?: Flex__<typeof AntdInput>;
  input3?: Flex__<typeof AntdInput>;
  input4?: Flex__<typeof AntdInput>;
  numberInput?: Flex__<typeof AntdInputNumber>;
  select?: Flex__<typeof AntdSelect>;
  input5?: Flex__<typeof AntdInput>;
  input6?: Flex__<typeof AntdInput>;
  numberInput2?: Flex__<typeof AntdInputNumber>;
  submitButton?: Flex__<typeof AntdButton>;
};

export interface DefaultFormPrivatesProps {
  privatesForm2?: any;
  onPrivatesFormChange?: (val: any) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFormPrivates__RenderFunc(props: {
  variants: PlasmicFormPrivates__VariantsArgs;
  args: PlasmicFormPrivates__ArgsType;
  overrides: PlasmicFormPrivates__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "privatesForm.value",
        type: "writable",
        variableType: "object",

        valueProp: "privatesForm2",
        onChangeProp: "onPrivatesFormChange",
        refName: "privatesForm",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "privatesForm.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "privatesForm",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "numberInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input5.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input6.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "numberInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  return (
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wZriG
          )}
        >
          {"Privates Inquiry Form"}
        </div>
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.privatesForm),
            extendedOnValuesChange: async (...eventArgs: any) => {
              generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["privatesForm", "value"],
                FormWrapper_Helpers
              ).apply(null, eventArgs);
            },
            formItems: [
              { label: "Name", name: "name", inputType: "Text" },
              { label: "Message", name: "message", inputType: "Text Area" }
            ],
            labelCol: { span: 8, horizontalOnly: true },
            layout: "vertical",
            mode: "advanced",
            onFinish: async values => {
              const $steps = {};

              $steps["defaultSubmit"] = true
                ? (() => {
                    const actionArgs = {
                      dataOp: {
                        sourceId: "wp17K6dTyNJfMVu3RB7ygH",
                        opId: "5c1fbbd2-cada-4407-817b-171d8f26bb58",
                        userArgs: {
                          variables: [$state.privatesForm.value]
                        },
                        cacheKey: null,
                        invalidatedKeys: ["plasmic_refresh_all"],
                        roleId: null
                      }
                    };
                    return (async ({ dataOp, continueOnError }) => {
                      try {
                        const response = await executePlasmicDataOp(dataOp, {
                          userAuthToken: dataSourcesCtx?.userAuthToken,
                          user: dataSourcesCtx?.user
                        });
                        await plasmicInvalidate(dataOp.invalidatedKeys);
                        return response;
                      } catch (e) {
                        if (!continueOnError) {
                          throw e;
                        }
                        return e;
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["defaultSubmit"] != null &&
                typeof $steps["defaultSubmit"] === "object" &&
                typeof $steps["defaultSubmit"].then === "function"
              ) {
                $steps["defaultSubmit"] = await $steps["defaultSubmit"];
              }

              $steps["invokeGlobalAction"] = true
                ? (() => {
                    const actionArgs = {
                      args: [
                        undefined,
                        "Thank You for Inquiring!",
                        undefined,
                        undefined,
                        "bottom"
                      ]
                    };
                    return $globalActions[
                      "plasmic-antd5-config-provider.showNotification"
                    ]?.apply(null, [...actionArgs.args]);
                  })()
                : undefined;
              if (
                $steps["invokeGlobalAction"] != null &&
                typeof $steps["invokeGlobalAction"] === "object" &&
                typeof $steps["invokeGlobalAction"].then === "function"
              ) {
                $steps["invokeGlobalAction"] = await $steps[
                  "invokeGlobalAction"
                ];
              }

              $steps["runActionOnPrivatesForm2"] = true
                ? (() => {
                    const actionArgs = {
                      tplRef: "privatesForm",
                      action: "resetFields"
                    };
                    return (({ tplRef, action, args }) => {
                      return $refs?.[tplRef]?.[action]?.(...(args ?? []));
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runActionOnPrivatesForm2"] != null &&
                typeof $steps["runActionOnPrivatesForm2"] === "object" &&
                typeof $steps["runActionOnPrivatesForm2"].then === "function"
              ) {
                $steps["runActionOnPrivatesForm2"] = await $steps[
                  "runActionOnPrivatesForm2"
                ];
              }
            },
            onIsSubmittingChange: async (...eventArgs: any) => {
              generateStateOnChangePropForCodeComponents(
                $state,
                "isSubmitting",
                ["privatesForm", "isSubmitting"],
                FormWrapper_Helpers
              ).apply(null, eventArgs);
            },
            ref: ref => {
              $refs["privatesForm"] = ref;
            },
            submitSlot: null,
            wrapperCol: { span: 16, horizontalOnly: true }
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "privatesForm.value"
              },
              {
                name: "isSubmitting",
                plasmicStateName: "privatesForm.isSubmitting"
              }
            ],
            [],
            FormWrapper_Helpers ?? {},
            child$Props
          );

          return (
            <FormWrapper
              data-plasmic-name={"privatesForm"}
              data-plasmic-override={overrides.privatesForm}
              {...child$Props}
            >
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__pts86)}
                initialValue={undefined}
                label={"First Name"}
                name={"first_name"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.input),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["input", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, ["input", "value"])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "input.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"input"}
                      data-plasmic-override={overrides.input}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__oWaEj)}
                initialValue={undefined}
                label={"Last Name"}
                name={"last_name"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.input2),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["input2", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, ["input2", "value"])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "input2.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"input2"}
                      data-plasmic-override={overrides.input2}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField___2FEsl)}
                initialValue={undefined}
                label={"Phone"}
                name={"phone"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.input3),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["input3", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, ["input3", "value"])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "input3.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"input3"}
                      data-plasmic-override={overrides.input3}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField___1IKyn)}
                label={"Email"}
                name={"email"}
                rules={[{ ruleType: "advanced" }]}
                valuePropName={"email"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.input4),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["input4", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, ["input4", "value"])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "input4.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"input4"}
                      data-plasmic-override={overrides.input4}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__qx3Xj)}
                initialValue={undefined}
                label={"Expected Number of Guests"}
                name={"number_guests"}
              >
                <AntdInputNumber
                  data-plasmic-name={"numberInput"}
                  data-plasmic-override={overrides.numberInput}
                  className={classNames("__wab_instance", sty.numberInput)}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "numberInput",
                      "value"
                    ]).apply(null, eventArgs);
                  }}
                  type={"number"}
                  value={generateStateValueProp($state, [
                    "numberInput",
                    "value"
                  ])}
                />
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__k3ScK)}
                initialValue={undefined}
                label={"Interested In"}
                name={"privates_type"}
              >
                <AntdSelect
                  data-plasmic-name={"select"}
                  data-plasmic-override={overrides.select}
                  className={classNames("__wab_instance", sty.select)}
                  defaultStylesClassName={classNames(
                    projectcss.root_reset,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens
                  )}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "select",
                      "value"
                    ]).apply(null, eventArgs);
                  }}
                  options={(() => {
                    const __composite = [
                      { type: "option", label: null, value: null },
                      { type: "option", label: null, value: null },
                      { type: "option", label: null, value: null },
                      { type: "option", label: null, value: null },
                      { type: "option", label: null, value: null }
                    ];
                    __composite["0"]["label"] = "Private Yoga";
                    __composite["0"]["value"] = "Private Yoga";
                    __composite["1"]["label"] = "Private Pilates";
                    __composite["1"]["value"] = "Private Pilates";
                    __composite["2"]["label"] = "Studio Rental";
                    __composite["2"]["value"] = "Studio Rental";
                    __composite["3"]["label"] = "Photo Shoot";
                    __composite["3"]["value"] = "Photo Shoot";
                    __composite["4"]["label"] = "Other";
                    __composite["4"]["value"] = "Other";
                    return __composite;
                  })()}
                  placeholder={"Select..."}
                  popupScopeClassName={sty["select__popup"]}
                  value={generateStateValueProp($state, ["select", "value"])}
                />
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField___9IfIh)}
                hidden={true}
                initialValue={undefined}
                label={"created_at"}
                name={"created_at"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.input5),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["input5", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, ["input5", "value"])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "input5.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"input5"}
                      data-plasmic-override={overrides.input5}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__isKqB)}
                initialValue={undefined}
                label={"Comments"}
                name={"comments"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.input6),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["input6", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, ["input6", "value"])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "input6.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"input6"}
                      data-plasmic-override={overrides.input6}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__hSDhT)}
                hidden={true}
                initialValue={undefined}
                label={"privates_id"}
                name={"privates_id"}
              >
                <AntdInputNumber
                  data-plasmic-name={"numberInput2"}
                  data-plasmic-override={overrides.numberInput2}
                  className={classNames("__wab_instance", sty.numberInput2)}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "numberInput2",
                      "value"
                    ]).apply(null, eventArgs);
                  }}
                  type={"number"}
                  value={generateStateValueProp($state, [
                    "numberInput2",
                    "value"
                  ])}
                />
              </FormItemWrapper>
              <AntdButton
                data-plasmic-name={"submitButton"}
                data-plasmic-override={overrides.submitButton}
                className={classNames("__wab_instance", sty.submitButton)}
                size={"large"}
                submitsForm={true}
                type={"primary"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5Wd5U
                  )}
                >
                  {"Submit"}
                </div>
              </AntdButton>
            </FormWrapper>
          );
        })()}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "privatesForm",
    "input",
    "input2",
    "input3",
    "input4",
    "numberInput",
    "select",
    "input5",
    "input6",
    "numberInput2",
    "submitButton"
  ],
  freeBox: [
    "freeBox",
    "privatesForm",
    "input",
    "input2",
    "input3",
    "input4",
    "numberInput",
    "select",
    "input5",
    "input6",
    "numberInput2",
    "submitButton"
  ],
  privatesForm: [
    "privatesForm",
    "input",
    "input2",
    "input3",
    "input4",
    "numberInput",
    "select",
    "input5",
    "input6",
    "numberInput2",
    "submitButton"
  ],
  input: ["input"],
  input2: ["input2"],
  input3: ["input3"],
  input4: ["input4"],
  numberInput: ["numberInput"],
  select: ["select"],
  input5: ["input5"],
  input6: ["input6"],
  numberInput2: ["numberInput2"],
  submitButton: ["submitButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  privatesForm: typeof FormWrapper;
  input: typeof AntdInput;
  input2: typeof AntdInput;
  input3: typeof AntdInput;
  input4: typeof AntdInput;
  numberInput: typeof AntdInputNumber;
  select: typeof AntdSelect;
  input5: typeof AntdInput;
  input6: typeof AntdInput;
  numberInput2: typeof AntdInputNumber;
  submitButton: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFormPrivates__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFormPrivates__VariantsArgs;
    args?: PlasmicFormPrivates__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFormPrivates__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFormPrivates__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFormPrivates__ArgProps,
          internalVariantPropNames: PlasmicFormPrivates__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFormPrivates__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormPrivates";
  } else {
    func.displayName = `PlasmicFormPrivates.${nodeName}`;
  }
  return func;
}

export const PlasmicFormPrivates = Object.assign(
  // Top-level PlasmicFormPrivates renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    privatesForm: makeNodeComponent("privatesForm"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    input3: makeNodeComponent("input3"),
    input4: makeNodeComponent("input4"),
    numberInput: makeNodeComponent("numberInput"),
    select: makeNodeComponent("select"),
    input5: makeNodeComponent("input5"),
    input6: makeNodeComponent("input6"),
    numberInput2: makeNodeComponent("numberInput2"),
    submitButton: makeNodeComponent("submitButton"),

    // Metadata about props expected for PlasmicFormPrivates
    internalVariantProps: PlasmicFormPrivates__VariantProps,
    internalArgProps: PlasmicFormPrivates__ArgProps
  }
);

export default PlasmicFormPrivates;
/* prettier-ignore-end */
