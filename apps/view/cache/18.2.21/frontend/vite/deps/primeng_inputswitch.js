import {
  AutoFocus,
  AutoFocusModule
} from "./chunk-BPNJNXY6.js";
import {
  BaseComponent
} from "./chunk-4S6Z5BSW.js";
import "./chunk-LUEIMEA4.js";
import {
  BaseStyle
} from "./chunk-V3FTI7LL.js";
import {
  SharedModule
} from "./chunk-6KYG62FN.js";
import {
  NG_VALUE_ACCESSOR
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
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵviewQuery
} from "./chunk-QJB5IFYQ.js";
import "./chunk-WPM5VTLQ.js";
import "./chunk-PEBH6BBU.js";
import "./chunk-4S3KYZTJ.js";
import "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-inputswitch.mjs
var theme = ({
  dt
}) => `
.p-toggleswitch {
    display: inline-block;
    width: ${dt("toggleswitch.width")};
    height: ${dt("toggleswitch.height")};

}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${dt("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${dt("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${dt("toggleswitch.border.color")};
    background: ${dt("toggleswitch.background")};
    transition: background ${dt("toggleswitch.transition.duration")}, color ${dt("toggleswitch.transition.duration")}, border-color ${dt("toggleswitch.transition.duration")}, outline-color ${dt("toggleswitch.transition.duration")}, box-shadow ${dt("toggleswitch.transition.duration")};
    border-radius: ${dt("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${dt("toggleswitch.shadow")};
}

.p-toggleswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: ${dt("toggleswitch.handle.background")};
    width: ${dt("toggleswitch.handle.size")};
    height: ${dt("toggleswitch.handle.size")};
    left: ${dt("toggleswitch.gap")};
    margin-top: calc(-1 * calc(${dt("toggleswitch.handle.size")} / 2));
    border-radius: ${dt("toggleswitch.handle.border.radius")};
    transition: background ${dt("toggleswitch.transition.duration")}, left ${dt("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt("toggleswitch.checked.background")};
    border-color: ${dt("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${dt("toggleswitch.handle.checked.background")};
    left: calc(${dt("toggleswitch.width")} - calc(${dt("toggleswitch.handle.size")} + ${dt("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${dt("toggleswitch.hover.background")};
    border-color: ${dt("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    background: ${dt("toggleswitch.handle.hover.background")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt("toggleswitch.checked.hover.background")};
    border-color: ${dt("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${dt("toggleswitch.handle.checked.hover.background")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${dt("toggleswitch.focus.ring.shadow")};
    outline: ${dt("toggleswitch.focus.ring.width")} ${dt("toggleswitch.focus.ring.style")} ${dt("toggleswitch.focus.ring.color")};
    outline-offset: ${dt("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${dt("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${dt("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider:before {
    background: ${dt("toggleswitch.handle.disabled.background")};
}
`;
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: ({
    instance
  }) => ({
    "p-toggleswitch p-component": true,
    "p-toggleswitch-checked": instance.checked(),
    "p-disabled": instance.disabled,
    "p-invalid": instance.invalid
  }),
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider"
};
var InputSwitchStyle = class _InputSwitchStyle extends BaseStyle {
  name = "toggleswitch";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputSwitchStyle_BaseFactory;
    return function InputSwitchStyle_Factory(__ngFactoryType__) {
      return (ɵInputSwitchStyle_BaseFactory || (ɵInputSwitchStyle_BaseFactory = ɵɵgetInheritedFactory(_InputSwitchStyle)))(__ngFactoryType__ || _InputSwitchStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputSwitchStyle,
    factory: _InputSwitchStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSwitchStyle, [{
    type: Injectable
  }], null, null);
})();
var _c0 = ["input"];
var INPUTSWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputSwitch),
  multi: true
};
var InputSwitch = class _InputSwitch extends BaseComponent {
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
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {InputSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  modelValue = false;
  focused = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  _componentStyle = inject(InputSwitchStyle);
  onClick(event) {
    if (!this.disabled && !this.readonly) {
      this.modelValue = this.checked() ? this.falseValue : this.trueValue;
      this.onModelChange(this.modelValue);
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  writeValue(value) {
    this.modelValue = value;
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
  checked() {
    return this.modelValue === this.trueValue;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputSwitch_BaseFactory;
    return function InputSwitch_Factory(__ngFactoryType__) {
      return (ɵInputSwitch_BaseFactory || (ɵInputSwitch_BaseFactory = ɵɵgetInheritedFactory(_InputSwitch)))(__ngFactoryType__ || _InputSwitch);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _InputSwitch,
    selectors: [["p-inputSwitch"], ["p-inputswitch"]],
    viewQuery: function InputSwitch_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([INPUTSWITCH_VALUE_ACCESSOR, InputSwitchStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 22,
    consts: [["input", ""], [3, "click", "ngClass", "ngStyle"], [1, "p-hidden-accessible"], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "ngClass", "checked", "disabled", "pAutoFocus"], [3, "ngClass"]],
    template: function InputSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1);
        ɵɵlistener("click", function InputSwitch_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onClick($event));
        });
        ɵɵelementStart(1, "div", 2)(2, "input", 3, 0);
        ɵɵlistener("focus", function InputSwitch_Template_input_focus_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        })("blur", function InputSwitch_Template_input_blur_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd()();
        ɵɵelement(4, "span", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.cx("root"))("ngStyle", ctx.sx("root"))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "inputswitch")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "hiddenInputWrapper")("data-p-hidden-accessible", true);
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.cx("input"))("checked", ctx.checked())("disabled", ctx.disabled)("pAutoFocus", ctx.autofocus);
        ɵɵattribute("id", ctx.inputId)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name)("tabindex", ctx.tabindex)("data-pc-section", "hiddenInput");
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ctx.cx("slider"));
        ɵɵattribute("data-pc-section", "slider");
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle, AutoFocusModule, AutoFocus, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSwitch, [{
    type: Component,
    args: [{
      selector: "p-inputSwitch, p-inputswitch",
      standalone: true,
      imports: [CommonModule, AutoFocusModule, SharedModule],
      template: `
        <div [ngClass]="cx('root')" [ngStyle]="sx('root')" [ngStyle]="style" [class]="styleClass" (click)="onClick($event)" [attr.data-pc-name]="'inputswitch'" [attr.data-pc-section]="'root'">
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'" [attr.data-p-hidden-accessible]="true">
                <input
                    #input
                    [attr.id]="inputId"
                    type="checkbox"
                    role="switch"
                    [ngClass]="cx('input')"
                    [checked]="checked()"
                    [disabled]="disabled"
                    [attr.aria-checked]="checked()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.name]="name"
                    [attr.tabindex]="tabindex"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.data-pc-section]="'hiddenInput'"
                    [pAutoFocus]="autofocus"
                />
            </div>
            <span [ngClass]="cx('slider')" [attr.data-pc-section]="'slider'"></span>
        </div>
    `,
      providers: [INPUTSWITCH_VALUE_ACCESSOR, InputSwitchStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
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
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(InputSwitch, {
    className: "InputSwitch"
  });
})();
var InputSwitchModule = class _InputSwitchModule {
  static ɵfac = function InputSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputSwitchModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputSwitchModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [InputSwitch, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [InputSwitch, SharedModule],
      exports: [InputSwitch, SharedModule]
    }]
  }], null, null);
})();
export {
  INPUTSWITCH_VALUE_ACCESSOR,
  InputSwitch,
  InputSwitchModule,
  InputSwitchStyle
};
//# sourceMappingURL=primeng_inputswitch.js.map
