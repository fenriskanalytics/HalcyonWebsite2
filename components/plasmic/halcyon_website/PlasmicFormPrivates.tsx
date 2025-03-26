// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
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

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdSelect } from "@plasmicpkgs/antd5/skinny/registerSelect";
import { AntdInputNumber } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
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

export type PlasmicFormPrivates__ArgsType = {};
type ArgPropType = keyof PlasmicFormPrivates__ArgsType;
export const PlasmicFormPrivates__ArgProps = new Array<ArgPropType>();

export type PlasmicFormPrivates__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  privatesForm2?: Flex__<typeof FormWrapper>;
  firstName?: Flex__<typeof FormItemWrapper>;
  firstNameInput?: Flex__<typeof AntdInput>;
  lastName?: Flex__<typeof FormItemWrapper>;
  lastNameInput?: Flex__<typeof AntdInput>;
  phone?: Flex__<typeof FormItemWrapper>;
  phoneInput?: Flex__<typeof AntdInput>;
  email?: Flex__<typeof FormItemWrapper>;
  emailInput?: Flex__<typeof AntdInput>;
  interestedIn?: Flex__<typeof FormItemWrapper>;
  interestedInSelect?: Flex__<typeof AntdSelect>;
  expectedGuests?: Flex__<typeof FormItemWrapper>;
  expectedGuestsInput?: Flex__<typeof AntdInputNumber>;
  comments?: Flex__<typeof FormItemWrapper>;
  commentsInput?: Flex__<typeof AntdTextArea>;
  numberInput2?: Flex__<typeof AntdInputNumber>;
  input5?: Flex__<typeof AntdInput>;
  submitButton?: Flex__<typeof AntdButton>;
};

export interface DefaultFormPrivatesProps {
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
        path: "privatesForm2.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "privatesForm2",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "privatesForm2.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "privatesForm2",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "firstNameInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "lastNameInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "phoneInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "interestedInSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "expectedGuestsInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "commentsInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdTextArea_Helpers)
      },
      {
        path: "numberInput2.value",
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
            className: classNames("__wab_instance", sty.privatesForm2),
            extendedOnValuesChange: async (...eventArgs: any) => {
              generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["privatesForm2", "value"],
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

              $steps["invokeGlobalAction"] = true
                ? (() => {
                    const actionArgs = {
                      args: [
                        "success",
                        "Thank You For Inquiring!",
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
            },
            onIsSubmittingChange: async (...eventArgs: any) => {
              generateStateOnChangePropForCodeComponents(
                $state,
                "isSubmitting",
                ["privatesForm2", "isSubmitting"],
                FormWrapper_Helpers
              ).apply(null, eventArgs);
            },
            ref: ref => {
              $refs["privatesForm2"] = ref;
            },
            submitSlot: null,
            wrapperCol: { span: 16, horizontalOnly: true }
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "privatesForm2.value"
              },
              {
                name: "isSubmitting",
                plasmicStateName: "privatesForm2.isSubmitting"
              }
            ],
            [],
            FormWrapper_Helpers ?? {},
            child$Props
          );

          return (
            <FormWrapper
              data-plasmic-name={"privatesForm2"}
              data-plasmic-override={overrides.privatesForm2}
              {...child$Props}
            >
              <FormItemWrapper
                data-plasmic-name={"firstName"}
                data-plasmic-override={overrides.firstName}
                className={classNames("__wab_instance", sty.firstName)}
                initialValue={undefined}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3ELq
                    )}
                  >
                    {"First Name"}
                  </div>
                }
                name={"first_name"}
              >
                {(() => {
                  const child$Props = {
                    allowClear: false,
                    bordered: true,
                    className: classNames("__wab_instance", sty.firstNameInput),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["firstNameInput", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, [
                      "firstNameInput",
                      "value"
                    ])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "firstNameInput.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"firstNameInput"}
                      data-plasmic-override={overrides.firstNameInput}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                data-plasmic-name={"lastName"}
                data-plasmic-override={overrides.lastName}
                className={classNames("__wab_instance", sty.lastName)}
                initialValue={undefined}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ou7U
                    )}
                  >
                    {"Last Name"}
                  </div>
                }
                name={"last_name"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.lastNameInput),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["lastNameInput", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, [
                      "lastNameInput",
                      "value"
                    ])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "lastNameInput.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"lastNameInput"}
                      data-plasmic-override={overrides.lastNameInput}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                data-plasmic-name={"phone"}
                data-plasmic-override={overrides.phone}
                className={classNames("__wab_instance", sty.phone)}
                initialValue={``}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0V74T
                    )}
                  >
                    {"Phone Number"}
                  </div>
                }
                name={"phone"}
                validateTrigger={["onChange"]}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.phoneInput),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["phoneInput", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    placeholder: "(xxx)xxx-xxxx",
                    value: generateStateValueProp($state, [
                      "phoneInput",
                      "value"
                    ])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "phoneInput.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"phoneInput"}
                      data-plasmic-override={overrides.phoneInput}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                data-plasmic-name={"email"}
                data-plasmic-override={overrides.email}
                className={classNames("__wab_instance", sty.email)}
                initialValue={undefined}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__b4YfU
                    )}
                  >
                    {"Email"}
                  </div>
                }
                name={"email"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.emailInput),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["emailInput", "value"],
                        AntdInput_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, [
                      "emailInput",
                      "value"
                    ])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "emailInput.value"
                      }
                    ],
                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"emailInput"}
                      data-plasmic-override={overrides.emailInput}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                data-plasmic-name={"interestedIn"}
                data-plasmic-override={overrides.interestedIn}
                className={classNames("__wab_instance", sty.interestedIn)}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wrrGv
                    )}
                  >
                    {"Interested In"}
                  </div>
                }
                name={"privates_type"}
              >
                <AntdSelect
                  data-plasmic-name={"interestedInSelect"}
                  data-plasmic-override={overrides.interestedInSelect}
                  bordered={false}
                  className={classNames(
                    "__wab_instance",
                    sty.interestedInSelect
                  )}
                  defaultStylesClassName={classNames(
                    projectcss.root_reset,
                    projectcss.plasmic_default_styles,
                    projectcss.plasmic_mixins,
                    projectcss.plasmic_tokens,
                    plasmic_antd_5_hostless_css.plasmic_tokens
                  )}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "interestedInSelect",
                      "value"
                    ]).apply(null, eventArgs);
                  }}
                  options={(() => {
                    const __composite = [
                      { value: null, label: null, type: "option" },
                      { value: null, label: null, type: "option" }
                    ];
                    __composite["0"]["value"] = "Private Pilates";
                    __composite["0"]["label"] = "Private Pilates";
                    __composite["1"]["value"] = "Private Yoga";
                    __composite["1"]["label"] = "Private Yoga";
                    return __composite;
                  })()}
                  placeholder={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ahMmh
                      )}
                    >
                      {"Select..."}
                    </div>
                  }
                  popupScopeClassName={sty["interestedInSelect__popup"]}
                  value={generateStateValueProp($state, [
                    "interestedInSelect",
                    "value"
                  ])}
                />
              </FormItemWrapper>
              <FormItemWrapper
                data-plasmic-name={"expectedGuests"}
                data-plasmic-override={overrides.expectedGuests}
                className={classNames("__wab_instance", sty.expectedGuests)}
                initialValue={undefined}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qzOS
                    )}
                  >
                    {"Expected Guests"}
                  </div>
                }
                name={"number_guests"}
              >
                <AntdInputNumber
                  data-plasmic-name={"expectedGuestsInput"}
                  data-plasmic-override={overrides.expectedGuestsInput}
                  className={classNames(
                    "__wab_instance",
                    sty.expectedGuestsInput
                  )}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "expectedGuestsInput",
                      "value"
                    ]).apply(null, eventArgs);
                  }}
                  type={"number"}
                  value={generateStateValueProp($state, [
                    "expectedGuestsInput",
                    "value"
                  ])}
                />
              </FormItemWrapper>
              <FormItemWrapper
                data-plasmic-name={"comments"}
                data-plasmic-override={overrides.comments}
                className={classNames("__wab_instance", sty.comments)}
                initialValue={undefined}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gdT38
                    )}
                  >
                    {"Comments (Optional)"}
                  </div>
                }
                name={"comments"}
              >
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.commentsInput),
                    onChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["commentsInput", "value"],
                        AntdTextArea_Helpers
                      ).apply(null, eventArgs);
                    },
                    value: generateStateValueProp($state, [
                      "commentsInput",
                      "value"
                    ])
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "commentsInput.value"
                      }
                    ],
                    [],
                    AntdTextArea_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdTextArea
                      data-plasmic-name={"commentsInput"}
                      data-plasmic-override={overrides.commentsInput}
                      {...child$Props}
                    />
                  );
                })()}
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__v6CX5)}
                hidden={true}
                initialValue={undefined}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0YGfo
                    )}
                  >
                    {"privates_id"}
                  </div>
                }
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
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__oslah)}
                hidden={true}
                initialValue={undefined}
                label={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4Y6Bz
                    )}
                  >
                    {"created_at"}
                  </div>
                }
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
                    sty.text__dH3DC
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
    "privatesForm2",
    "firstName",
    "firstNameInput",
    "lastName",
    "lastNameInput",
    "phone",
    "phoneInput",
    "email",
    "emailInput",
    "interestedIn",
    "interestedInSelect",
    "expectedGuests",
    "expectedGuestsInput",
    "comments",
    "commentsInput",
    "numberInput2",
    "input5",
    "submitButton"
  ],
  freeBox: [
    "freeBox",
    "privatesForm2",
    "firstName",
    "firstNameInput",
    "lastName",
    "lastNameInput",
    "phone",
    "phoneInput",
    "email",
    "emailInput",
    "interestedIn",
    "interestedInSelect",
    "expectedGuests",
    "expectedGuestsInput",
    "comments",
    "commentsInput",
    "numberInput2",
    "input5",
    "submitButton"
  ],
  privatesForm2: [
    "privatesForm2",
    "firstName",
    "firstNameInput",
    "lastName",
    "lastNameInput",
    "phone",
    "phoneInput",
    "email",
    "emailInput",
    "interestedIn",
    "interestedInSelect",
    "expectedGuests",
    "expectedGuestsInput",
    "comments",
    "commentsInput",
    "numberInput2",
    "input5",
    "submitButton"
  ],
  firstName: ["firstName", "firstNameInput"],
  firstNameInput: ["firstNameInput"],
  lastName: ["lastName", "lastNameInput"],
  lastNameInput: ["lastNameInput"],
  phone: ["phone", "phoneInput"],
  phoneInput: ["phoneInput"],
  email: ["email", "emailInput"],
  emailInput: ["emailInput"],
  interestedIn: ["interestedIn", "interestedInSelect"],
  interestedInSelect: ["interestedInSelect"],
  expectedGuests: ["expectedGuests", "expectedGuestsInput"],
  expectedGuestsInput: ["expectedGuestsInput"],
  comments: ["comments", "commentsInput"],
  commentsInput: ["commentsInput"],
  numberInput2: ["numberInput2"],
  input5: ["input5"],
  submitButton: ["submitButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  privatesForm2: typeof FormWrapper;
  firstName: typeof FormItemWrapper;
  firstNameInput: typeof AntdInput;
  lastName: typeof FormItemWrapper;
  lastNameInput: typeof AntdInput;
  phone: typeof FormItemWrapper;
  phoneInput: typeof AntdInput;
  email: typeof FormItemWrapper;
  emailInput: typeof AntdInput;
  interestedIn: typeof FormItemWrapper;
  interestedInSelect: typeof AntdSelect;
  expectedGuests: typeof FormItemWrapper;
  expectedGuestsInput: typeof AntdInputNumber;
  comments: typeof FormItemWrapper;
  commentsInput: typeof AntdTextArea;
  numberInput2: typeof AntdInputNumber;
  input5: typeof AntdInput;
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
    privatesForm2: makeNodeComponent("privatesForm2"),
    firstName: makeNodeComponent("firstName"),
    firstNameInput: makeNodeComponent("firstNameInput"),
    lastName: makeNodeComponent("lastName"),
    lastNameInput: makeNodeComponent("lastNameInput"),
    phone: makeNodeComponent("phone"),
    phoneInput: makeNodeComponent("phoneInput"),
    email: makeNodeComponent("email"),
    emailInput: makeNodeComponent("emailInput"),
    interestedIn: makeNodeComponent("interestedIn"),
    interestedInSelect: makeNodeComponent("interestedInSelect"),
    expectedGuests: makeNodeComponent("expectedGuests"),
    expectedGuestsInput: makeNodeComponent("expectedGuestsInput"),
    comments: makeNodeComponent("comments"),
    commentsInput: makeNodeComponent("commentsInput"),
    numberInput2: makeNodeComponent("numberInput2"),
    input5: makeNodeComponent("input5"),
    submitButton: makeNodeComponent("submitButton"),

    // Metadata about props expected for PlasmicFormPrivates
    internalVariantProps: PlasmicFormPrivates__VariantProps,
    internalArgProps: PlasmicFormPrivates__ArgProps
  }
);

export default PlasmicFormPrivates;
/* prettier-ignore-end */
