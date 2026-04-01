import {
  AutoFocus
} from "./chunk-BPNJNXY6.js";
import {
  BaseComponent
} from "./chunk-4S6Z5BSW.js";
import {
  BaseStyle
} from "./chunk-V3FTI7LL.js";
import {
  SharedModule
} from "./chunk-6KYG62FN.js";
import {
  NG_VALUE_ACCESSOR,
  NgControl
} from "./chunk-5NT6O4YD.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-REMGT6RI.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  ViewChild,
  booleanAttribute,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuery
} from "./chunk-QJB5IFYQ.js";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var theme = ({
  dt
}) => `
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${dt("radiobutton.width")};
    height: ${dt("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${dt("radiobutton.border.color")};
    background: ${dt("radiobutton.background")};
    width: ${dt("radiobutton.width")};
    height: ${dt("radiobutton.height")};
    transition: background ${dt("radiobutton.transition.duration")}, color ${dt("radiobutton.transition.duration")}, border-color ${dt("radiobutton.transition.duration")}, box-shadow ${dt("radiobutton.transition.duration")}, outline-color ${dt("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${dt("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${dt("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${dt("radiobutton.icon.size")};
    width: ${dt("radiobutton.icon.size")};
    height: ${dt("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${dt("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.border.color")};
    background: ${dt("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.hover.border.color")};
    background: ${dt("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${dt("radiobutton.focus.border.color")};
    box-shadow: ${dt("radiobutton.focus.ring.shadow")};
    outline: ${dt("radiobutton.focus.ring.width")} ${dt("radiobutton.focus.ring.style")} ${dt("radiobutton.focus.ring.color")};
    outline-offset: ${dt("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${dt("radiobutton.checked.focus.border.color")};
}

.p-radiobutton.ng-invalid.ng-dirty > .p-radiobutton-box {
    border-color: ${dt("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${dt("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${dt("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${dt("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${dt("radiobutton.disabled.background")};
    border-color: ${dt("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${dt("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${dt("radiobutton.sm.width")};
    height: ${dt("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${dt("radiobutton.icon.sm.size")};
    width: ${dt("radiobutton.icon.sm.size")};
    height: ${dt("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${dt("radiobutton.lg.width")};
    height: ${dt("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${dt("radiobutton.icon.lg.size")};
    width: ${dt("radiobutton.icon.lg.size")};
    height: ${dt("radiobutton.icon.lg.size")};
}
`;
var classes = {
  root: ({
    instance,
    props
  }) => ["p-radiobutton p-component", {
    "p-radiobutton-checked": instance.checked,
    "p-disabled": props.disabled,
    "p-invalid": props.invalid,
    "p-variant-filled": props.variant ? props.variant === "filled" : instance.config.inputStyle === "filled" || instance.config.inputVariant === "filled"
  }],
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = class _RadioButtonStyle extends BaseStyle {
  name = "radiobutton";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRadioButtonStyle_BaseFactory;
    return function RadioButtonStyle_Factory(__ngFactoryType__) {
      return (ɵRadioButtonStyle_BaseFactory || (ɵRadioButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_RadioButtonStyle)))(__ngFactoryType__ || _RadioButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _RadioButtonStyle,
    factory: _RadioButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var RadioButtonClasses;
(function(RadioButtonClasses2) {
  RadioButtonClasses2["root"] = "p-radiobutton";
  RadioButtonClasses2["box"] = "p-radiobutton-box";
  RadioButtonClasses2["input"] = "p-radiobutton-input";
  RadioButtonClasses2["icon"] = "p-radiobutton-icon";
})(RadioButtonClasses || (RadioButtonClasses = {}));
var _c0 = ["input"];
var _c1 = (a0, a1, a2, a3, a4) => ({
  "p-radiobutton p-component": true,
  "p-radiobutton-checked": a0,
  "p-disabled": a1,
  "p-variant-filled": a2,
  "p-radiobutton-sm p-inputfield-sm": a3,
  "p-radiobutton-lg p-inputfield-lg": a4
});
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
  }
  static ɵfac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton extends BaseComponent {
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * The name of the form control.
   * @group Props
   */
  formControlName;
  /**
   * Name of the radiobutton group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Allows to select a boolean value.
   * @group Props
   */
  binary;
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  checked;
  focused;
  control;
  _componentStyle = inject(RadioButtonStyle);
  injector = inject(Injector);
  registry = inject(RadioControlRegistry);
  ngOnInit() {
    super.ngOnInit();
    this.control = this.injector.get(NgControl);
    this.checkName();
    this.registry.add(this.control, this);
  }
  onChange(event) {
    if (!this.disabled) {
      this.select(event);
    }
  }
  select(event) {
    if (!this.disabled) {
      this.checked = true;
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  writeValue(value) {
    if (!this.binary) {
      this.checked = value == this.value;
    } else {
      this.checked = !!value;
    }
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.checked = this.checked;
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  ngOnDestroy() {
    this.registry.remove(this);
    super.ngOnDestroy();
  }
  checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
  throwNameError() {
    throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRadioButton_BaseFactory;
    return function RadioButton_Factory(__ngFactoryType__) {
      return (ɵRadioButton_BaseFactory || (ɵRadioButton_BaseFactory = ɵɵgetInheritedFactory(_RadioButton)))(__ngFactoryType__ || _RadioButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"], ["p-radiobutton"], ["p-radio-button"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    inputs: {
      value: "value",
      formControlName: "formControlName",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      variant: "variant",
      size: "size",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR, RadioButtonStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 24,
    consts: [["input", ""], [3, "ngStyle", "ngClass"], ["type", "radio", 1, "p-radiobutton-input", 3, "focus", "blur", "change", "checked", "disabled", "value", "pAutoFocus"], [1, "p-radiobutton-box"], [1, "p-radiobutton-icon"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1)(1, "input", 2, 0);
        ɵɵlistener("focus", function RadioButton_Template_input_focus_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        })("change", function RadioButton_Template_input_change_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChange($event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 3);
        ɵɵelement(4, "div", 4);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction5(18, _c1, ctx.checked, ctx.disabled, ctx.variant === "filled" || ctx.config.inputStyle() === "filled" || ctx.config.inputVariant() === "filled", ctx.size === "small", ctx.size === "large"));
        ɵɵattribute("data-pc-name", "radiobutton")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled)("value", ctx.value)("pAutoFocus", ctx.autofocus);
        ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.tabindex)("aria-checked", ctx.checked);
        ɵɵadvance(2);
        ɵɵattribute("data-pc-section", "input");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "icon");
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle, AutoFocus, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton, p-radiobutton, p-radio-button",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule],
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-radiobutton p-component': true,
                'p-radiobutton-checked': checked,
                'p-disabled': disabled,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled' || config.inputVariant() === 'filled',
                'p-radiobutton-sm p-inputfield-sm': size === 'small',
                'p-radiobutton-lg p-inputfield-lg': size === 'large'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'radiobutton'"
            [attr.data-pc-section]="'root'"
        >
            <input
                #input
                [attr.id]="inputId"
                type="radio"
                class="p-radiobutton-input"
                [attr.name]="name"
                [checked]="checked"
                [disabled]="disabled"
                [value]="value"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.tabindex]="tabindex"
                [attr.aria-checked]="checked"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (change)="onChange($event)"
                [pAutoFocus]="autofocus"
            />
            <div class="p-radiobutton-box" [attr.data-pc-section]="'input'">
                <div class="p-radiobutton-icon" [attr.data-pc-section]="'icon'"></div>
            </div>
        </div>
    `,
      providers: [RADIO_VALUE_ACCESSOR, RadioButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    value: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    variant: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(RadioButton, {
    className: "RadioButton"
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static ɵfac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RadioButtonModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [RadioButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [RadioButton, SharedModule],
      exports: [RadioButton, SharedModule]
    }]
  }], null, null);
})();

export {
  RadioButtonStyle,
  RadioButtonClasses,
  RADIO_VALUE_ACCESSOR,
  RadioControlRegistry,
  RadioButton,
  RadioButtonModule
};
//# sourceMappingURL=chunk-HUQRLZZ7.js.map
