import {
  RadioButton,
  RadioButtonModule
} from "./chunk-HUQRLZZ7.js";
import {
  Select,
  SelectModule
} from "./chunk-62L5LOQM.js";
import {
  Scroller,
  ScrollerModule
} from "./chunk-6E77CKQF.js";
import "./chunk-G3PT24AS.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-O4GAR3UW.js";
import "./chunk-IO2QM5MS.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-RNG2C7IZ.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-BBXTGPPP.js";
import {
  ObjectUtils,
  UniqueComponentId,
  zindexutils
} from "./chunk-ZOPTFNUZ.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-YH7I42SQ.js";
import {
  InputText,
  InputTextModule
} from "./chunk-4DTG2XHF.js";
import {
  Button,
  ButtonModule
} from "./chunk-GIE4FEU5.js";
import {
  Ripple
} from "./chunk-OF6ZDBBK.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-BPNJNXY6.js";
import {
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
  AngleLeftIcon,
  AngleRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  FilterIcon,
  FilterSlashIcon,
  PlusIcon,
  SortAltIcon,
  SortAmountDownIcon,
  SortAmountUpAltIcon,
  SpinnerIcon,
  TrashIcon
} from "./chunk-QVENGJHY.js";
import {
  BaseComponent
} from "./chunk-4S6Z5BSW.js";
import "./chunk-LUEIMEA4.js";
import {
  BaseStyle
} from "./chunk-V3FTI7LL.js";
import {
  FilterMatchMode,
  FilterOperator,
  FilterService,
  OverlayService,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  equals,
  resolveFieldData
} from "./chunk-6KYG62FN.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-5NT6O4YD.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-REMGT6RI.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
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
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-QJB5IFYQ.js";
import "./chunk-WPM5VTLQ.js";
import "./chunk-PEBH6BBU.js";
import {
  Subject
} from "./chunk-4S3KYZTJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-paginator.mjs
var theme = ({
  dt
}) => `
.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: ${dt("paginator.background")};
    color: ${dt("paginator.color")};
    padding: ${dt("paginator.padding")};
    border-radius: ${dt("paginator.border.radius")};
    gap: ${dt("paginator.gap")};
}

.p-paginator-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${dt("paginator.gap")};
}

.p-paginator-content-start {
    margin-inline-end: auto;
}

.p-paginator-content-end {
    margin-inline-start: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
    background: ${dt("paginator.nav.button.background")};
    border: 0 none;
    color: ${dt("paginator.nav.button.color")};
    min-width: ${dt("paginator.nav.button.width")};
    height: ${dt("paginator.nav.button.height")};
    transition: background ${dt("paginator.transition.duration")}, color ${dt("paginator.transition.duration")}, outline-color ${dt("paginator.transition.duration")}, box-shadow ${dt("paginator.transition.duration")};
    border-radius: ${dt("paginator.nav.button.border.radius")};
    padding: 0;
    margin: 0;
}

.p-paginator-page:focus-visible,
.p-paginator-next:focus-visible,
.p-paginator-last:focus-visible,
.p-paginator-first:focus-visible,
.p-paginator-prev:focus-visible {
    box-shadow: ${dt("paginator.nav.button.focus.ring.shadow")};
    outline: ${dt("paginator.nav.button.focus.ring.width")} ${dt("paginator.nav.button.focus.ring.style")} ${dt("paginator.nav.button.focus.ring.color")};
    outline-offset: ${dt("paginator.nav.button.focus.ring.offset")};
}

.p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
.p-paginator-first:not(.p-disabled):hover,
.p-paginator-prev:not(.p-disabled):hover,
.p-paginator-next:not(.p-disabled):hover,
.p-paginator-last:not(.p-disabled):hover {
    background: ${dt("paginator.nav.button.hover.background")};
    color: ${dt("paginator.nav.button.hover.color")};
}

.p-paginator-first:dir(rtl),
.p-paginator-prev:dir(rtl),
.p-paginator-next:dir(rtl),
.p-paginator-last:dir(rtl) {
    transform: rotate(180deg);
}

.p-paginator-page.p-paginator-page-selected {
    background: ${dt("paginator.nav.button.selected.background")};
    color: ${dt("paginator.nav.button.selected.color")};
}

.p-paginator-current {
    color: ${dt("paginator.current.page.report.color")};
}

.p-paginator-pages {
    display: flex;
    align-items: center;
    gap: ${dt("paginator.gap")};
}

.p-paginator-jtp-input .p-inputtext {
    max-width: ${dt("paginator.jump.to.page.input.max.width")};
}
`;
var classes = {
  paginator: ({
    instance,
    key
  }) => ["p-paginator p-component", {
    "p-paginator-default": !instance.hasBreakpoints(),
    [`p-paginator-${key}`]: instance.hasBreakpoints()
  }],
  content: "p-paginator-content",
  contentStart: "p-paginator-content-start",
  contentEnd: "p-paginator-content-end",
  first: ({
    instance
  }) => ["p-paginator-first", {
    "p-disabled": instance.$attrs.disabled
  }],
  firstIcon: "p-paginator-first-icon",
  prev: ({
    instance
  }) => ["p-paginator-prev", {
    "p-disabled": instance.$attrs.disabled
  }],
  prevIcon: "p-paginator-prev-icon",
  next: ({
    instance
  }) => ["p-paginator-next", {
    "p-disabled": instance.$attrs.disabled
  }],
  nextIcon: "p-paginator-next-icon",
  last: ({
    instance
  }) => ["p-paginator-last", {
    "p-disabled": instance.$attrs.disabled
  }],
  lastIcon: "p-paginator-last-icon",
  pages: "p-paginator-pages",
  page: ({
    props,
    pageLink
  }) => ["p-paginator-page", {
    "p-paginator-page-selected": pageLink - 1 === props.page
  }],
  current: "p-paginator-current",
  pcRowPerPageDropdown: "p-paginator-rpp-dropdown",
  pcJumpToPageDropdown: "p-paginator-jtp-dropdown",
  pcJumpToPageInput: "p-paginator-jtp-input"
};
var PaginatorStyle = class _PaginatorStyle extends BaseStyle {
  name = "paginator";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPaginatorStyle_BaseFactory;
    return function PaginatorStyle_Factory(__ngFactoryType__) {
      return (ɵPaginatorStyle_BaseFactory || (ɵPaginatorStyle_BaseFactory = ɵɵgetInheritedFactory(_PaginatorStyle)))(__ngFactoryType__ || _PaginatorStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _PaginatorStyle,
    factory: _PaginatorStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorStyle, [{
    type: Injectable
  }], null, null);
})();
var PaginatorClasses;
(function(PaginatorClasses2) {
  PaginatorClasses2["paginator"] = "p-paginator";
  PaginatorClasses2["contentStart"] = "p-paginator-content-start";
  PaginatorClasses2["contentEnd"] = "p-paginator-content-end";
  PaginatorClasses2["first"] = "p-paginator-first";
  PaginatorClasses2["firstIcon"] = "p-paginator-first-icon";
  PaginatorClasses2["prev"] = "p-paginator-prev";
  PaginatorClasses2["prevIcon"] = "p-paginator-prev-icon";
  PaginatorClasses2["next"] = "p-paginator-next";
  PaginatorClasses2["nextIcon"] = "p-paginator-next-icon";
  PaginatorClasses2["last"] = "p-paginator-last";
  PaginatorClasses2["lastIcon"] = "p-paginator-last-icon";
  PaginatorClasses2["pages"] = "p-paginator-pages";
  PaginatorClasses2["page"] = "p-paginator-page";
  PaginatorClasses2["current"] = "p-paginator-current";
  PaginatorClasses2["pcRowPerPageDropdown"] = "p-paginator-rpp-dropdown";
  PaginatorClasses2["pcJumpToPageDropdown"] = "p-paginator-jtp-dropdown";
  PaginatorClasses2["pcJumpToPageInput"] = "p-paginator-jtp-input";
})(PaginatorClasses || (PaginatorClasses = {}));
var _c0 = ["dropdownicon"];
var _c1 = ["firstpagelinkicon"];
var _c2 = ["previouspagelinkicon"];
var _c3 = ["lastpagelinkicon"];
var _c4 = ["nextpagelinkicon"];
var _c5 = (a0) => ({
  "p-disabled": a0
});
var _c6 = (a0) => ({
  $implicit: a0
});
var _c7 = (a0) => ({
  "p-paginator-page-selected": a0
});
function Paginator_div_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, Paginator_div_0_div_1_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "start");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.templateLeft)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c6, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleLeftIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-first-icon");
  }
}
function Paginator_div_0_button_3_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_button_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtemplate(1, Paginator_div_0_button_3_span_2_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.firstPageLinkIconTemplate || ctx_r1._firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 19);
    ɵɵlistener("click", function Paginator_div_0_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changePageToFirst($event));
    });
    ɵɵtemplate(1, Paginator_div_0_button_3_AngleDoubleLeftIcon_1_Template, 1, 1, "AngleDoubleLeftIcon", 6)(2, Paginator_div_0_button_3_span_2_Template, 2, 1, "span", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(5, _c5, ctx_r1.isFirstPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("firstPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.firstPageLinkIconTemplate && !ctx_r1._firstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.firstPageLinkIconTemplate || ctx_r1._firstPageLinkIconTemplate);
  }
}
function Paginator_div_0_AngleLeftIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleLeftIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-prev-icon");
  }
}
function Paginator_div_0_span_6_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtemplate(1, Paginator_div_0_span_6_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.previousPageLinkIconTemplate || ctx_r1._previousPageLinkIconTemplate);
  }
}
function Paginator_div_0_span_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵlistener("click", function Paginator_div_0_span_7_button_1_Template_button_click_0_listener($event) {
      const pageLink_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onPageLinkClick($event, pageLink_r5 - 1));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageLink_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c7, pageLink_r5 - 1 == ctx_r1.getPage()));
    ɵɵattribute("aria-label", ctx_r1.getPageAriaLabel(pageLink_r5))("aria-current", pageLink_r5 - 1 == ctx_r1.getPage() ? "page" : void 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getLocalization(pageLink_r5), " ");
  }
}
function Paginator_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtemplate(1, Paginator_div_0_span_7_button_1_Template, 2, 6, "button", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.pageLinks);
  }
}
function Paginator_div_0_p_select_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵtextInterpolate(ctx_r1.currentPageReport);
  }
}
function Paginator_div_0_p_select_8_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_select_8_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_select_8_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.jumpToPageItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, item_r7));
  }
}
function Paginator_div_0_p_select_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Paginator_div_0_p_select_8_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", 31);
    ɵɵelementContainerEnd();
  }
}
function Paginator_div_0_p_select_8_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_select_8_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_select_8_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_p_select_8_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_select_8_3_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function Paginator_div_0_p_select_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-select", 28);
    ɵɵlistener("onChange", function Paginator_div_0_p_select_8_Template_p_select_onChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPageDropdownChange($event));
    });
    ɵɵtemplate(1, Paginator_div_0_p_select_8_ng_template_1_Template, 1, 1, "ng-template", 29)(2, Paginator_div_0_p_select_8_ng_container_2_Template, 2, 0, "ng-container", 30)(3, Paginator_div_0_p_select_8_3_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("options", ctx_r1.pageItems)("ngModel", ctx_r1.getPage())("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight);
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("jumpToPageDropdownLabel"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.jumpToPageItemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_AngleRightIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-next-icon");
  }
}
function Paginator_div_0_span_11_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 33);
    ɵɵtemplate(1, Paginator_div_0_span_11_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nextPageLinkIconTemplate || ctx_r1._nextPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleRightIcon", 21);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-paginator-last-icon");
  }
}
function Paginator_div_0_button_12_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_div_0_button_12_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_button_12_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_div_0_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 36);
    ɵɵtemplate(1, Paginator_div_0_button_12_span_2_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.lastPageLinkIconTemplate || ctx_r1._lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 34);
    ɵɵlistener("click", function Paginator_div_0_button_12_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changePageToLast($event));
    });
    ɵɵtemplate(1, Paginator_div_0_button_12_AngleDoubleRightIcon_1_Template, 1, 1, "AngleDoubleRightIcon", 6)(2, Paginator_div_0_button_12_span_2_Template, 2, 1, "span", 35);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(5, _c5, ctx_r1.isLastPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("lastPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.lastPageLinkIconTemplate && !ctx_r1._lastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.lastPageLinkIconTemplate || ctx_r1._lastPageLinkIconTemplate);
  }
}
function Paginator_div_0_p_inputnumber_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-inputnumber", 37);
    ɵɵlistener("ngModelChange", function Paginator_div_0_p_inputnumber_13_Template_p_inputnumber_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changePage($event - 1));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r1.currentPage())("disabled", ctx_r1.empty());
  }
}
function Paginator_div_0_p_select_14_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_select_14_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_select_14_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dropdownItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c6, item_r11));
  }
}
function Paginator_div_0_p_select_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Paginator_div_0_p_select_14_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 31);
    ɵɵelementContainerEnd();
  }
}
function Paginator_div_0_p_select_14_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_p_select_14_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_select_14_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_p_select_14_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_div_0_p_select_14_2_ng_template_0_Template, 1, 1, "ng-template", 32);
  }
}
function Paginator_div_0_p_select_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-select", 38);
    ɵɵtwoWayListener("ngModelChange", function Paginator_div_0_p_select_14_Template_p_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.rows, $event) || (ctx_r1.rows = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("onChange", function Paginator_div_0_p_select_14_Template_p_select_onChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onRppChange($event));
    });
    ɵɵtemplate(1, Paginator_div_0_p_select_14_ng_container_1_Template, 2, 0, "ng-container", 30)(2, Paginator_div_0_p_select_14_2_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("options", ctx_r1.rowsPerPageItems);
    ɵɵtwoWayProperty("ngModel", ctx_r1.rows);
    ɵɵproperty("disabled", ctx_r1.empty())("appendTo", ctx_r1.dropdownAppendTo)("scrollHeight", ctx_r1.dropdownScrollHeight)("ariaLabel", ctx_r1.getAriaLabel("rowsPerPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.dropdownItemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.dropdownIconTemplate || ctx_r1._dropdownIconTemplate);
  }
}
function Paginator_div_0_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, Paginator_div_0_div_15_ng_container_1_Template, 1, 0, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "end");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.templateRight)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c6, ctx_r1.paginatorState));
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Paginator_div_0_div_1_Template, 2, 5, "div", 2)(2, Paginator_div_0_span_2_Template, 2, 1, "span", 3)(3, Paginator_div_0_button_3_Template, 3, 7, "button", 4);
    ɵɵelementStart(4, "button", 5);
    ɵɵlistener("click", function Paginator_div_0_Template_button_click_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePageToPrev($event));
    });
    ɵɵtemplate(5, Paginator_div_0_AngleLeftIcon_5_Template, 1, 1, "AngleLeftIcon", 6)(6, Paginator_div_0_span_6_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵtemplate(7, Paginator_div_0_span_7_Template, 2, 1, "span", 8)(8, Paginator_div_0_p_select_8_Template, 4, 8, "p-select", 9);
    ɵɵelementStart(9, "button", 10);
    ɵɵlistener("click", function Paginator_div_0_Template_button_click_9_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changePageToNext($event));
    });
    ɵɵtemplate(10, Paginator_div_0_AngleRightIcon_10_Template, 1, 1, "AngleRightIcon", 6)(11, Paginator_div_0_span_11_Template, 2, 1, "span", 11);
    ɵɵelementEnd();
    ɵɵtemplate(12, Paginator_div_0_button_12_Template, 3, 7, "button", 12)(13, Paginator_div_0_p_inputnumber_13_Template, 1, 2, "p-inputnumber", 13)(14, Paginator_div_0_p_select_14_Template, 3, 8, "p-select", 14)(15, Paginator_div_0_div_15_Template, 2, 5, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngStyle", ctx_r1.style)("ngClass", "p-paginator p-component");
    ɵɵattribute("data-pc-section", "paginator")("data-pc-section", "root");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.templateLeft);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showCurrentPageReport);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showFirstLastIcon);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isFirstPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(25, _c5, ctx_r1.isFirstPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("prevPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.previousPageLinkIconTemplate && !ctx_r1._previousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.previousPageLinkIconTemplate || ctx_r1._previousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showPageLinks);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showJumpToPageDropdown);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.isLastPage() || ctx_r1.empty())("ngClass", ɵɵpureFunction1(27, _c5, ctx_r1.isLastPage() || ctx_r1.empty()));
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel("nextPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.nextPageLinkIconTemplate && !ctx_r1._nextPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nextPageLinkIconTemplate || ctx_r1._nextPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showFirstLastIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showJumpToPageInput);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.rowsPerPageOptions);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.templateRight);
  }
}
var Paginator = class _Paginator extends BaseComponent {
  /**
   * Number of page links to display.
   * @group Props
   */
  pageLinkSize = 5;
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
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShow = true;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  dropdownAppendTo;
  /**
   * Template instance to inject into the left side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateLeft;
  /**
   * Template instance to inject into the right side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateRight;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  dropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Number of total records.
   * @group Props
   */
  totalRecords = 0;
  /**
   * Data count to display per page.
   * @group Props
   */
  rows = 0;
  /**
   * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * Template instance to inject into the jump to page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  jumpToPageItemTemplate;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * Template instance to inject into the rows per page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  dropdownItemTemplate;
  /**
   * Zero-relative number of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  /**
   * Callback to invoke when page changes, the event object contains information about the new state.
   * @param {PaginatorState} event - Paginator state.
   * @group Emits
   */
  onPageChange = new EventEmitter();
  /**
   * Template for the dropdown icon.
   * @group Templates
   */
  dropdownIconTemplate;
  /**
   * Template for the first page link icon.
   * @group Templates
   */
  firstPageLinkIconTemplate;
  /**
   * Template for the previous page link icon.
   * @group Templates
   */
  previousPageLinkIconTemplate;
  /**
   * Template for the last page link icon.
   * @group Templates
   */
  lastPageLinkIconTemplate;
  /**
   * Template for the next page link icon.
   * @group Templates
   */
  nextPageLinkIconTemplate;
  templates;
  _dropdownIconTemplate;
  _firstPageLinkIconTemplate;
  _previousPageLinkIconTemplate;
  _lastPageLinkIconTemplate;
  _nextPageLinkIconTemplate;
  pageLinks;
  pageItems;
  rowsPerPageItems;
  paginatorState;
  _first = 0;
  _page = 0;
  _componentStyle = inject(PaginatorStyle);
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
    this.updatePaginatorState();
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "firstpagelinkicon":
          this._firstPageLinkIconTemplate = item.template;
          break;
        case "previouspagelinkicon":
          this._previousPageLinkIconTemplate = item.template;
          break;
        case "lastpagelinkicon":
          this._lastPageLinkIconTemplate = item.template;
          break;
        case "nextpagelinkicon":
          this._nextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabel(labelType) {
    return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
  }
  getPageAriaLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, `${value}`) : void 0;
  }
  getLocalization(digit) {
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [i, d]));
    if (digit > 9) {
      const numbers = String(digit).split("");
      return numbers.map((number) => index.get(Number(number))).join("");
    } else {
      return index.get(digit);
    }
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    if (simpleChange.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.first) {
      this._first = simpleChange.first.currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rowsPerPageOptions) {
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.pageLinkSize) {
      this.updatePageLinks();
    }
  }
  updateRowsPerPageOptions() {
    if (this.rowsPerPageOptions) {
      this.rowsPerPageItems = [];
      for (let opt of this.rowsPerPageOptions) {
        if (typeof opt == "object" && opt["showAll"]) {
          this.rowsPerPageItems.unshift({
            label: opt["showAll"],
            value: this.totalRecords
          });
        } else {
          this.rowsPerPageItems.push({
            label: String(this.getLocalization(opt)),
            value: opt
          });
        }
      }
    }
  }
  isFirstPage() {
    return this.getPage() === 0;
  }
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows);
  }
  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  }
  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
    if (this.showJumpToPageDropdown) {
      this.pageItems = [];
      for (let i = 0; i < this.getPageCount(); i++) {
        this.pageItems.push({
          label: String(i + 1),
          value: i
        });
      }
    }
  }
  changePage(p) {
    var pc = this.getPageCount();
    if (p >= 0 && p < pc) {
      this._first = this.rows * p;
      var state = {
        page: p,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();
      this.onPageChange.emit(state);
      this.updatePaginatorState();
    }
  }
  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }
  getPage() {
    return Math.floor(this.first / this.rows);
  }
  changePageToFirst(event) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }
    event.preventDefault();
  }
  changePageToPrev(event) {
    this.changePage(this.getPage() - 1);
    event.preventDefault();
  }
  changePageToNext(event) {
    this.changePage(this.getPage() + 1);
    event.preventDefault();
  }
  changePageToLast(event) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }
    event.preventDefault();
  }
  onPageLinkClick(event, page) {
    this.changePage(page);
    event.preventDefault();
  }
  onRppChange(event) {
    this.changePage(this.getPage());
  }
  onPageDropdownChange(event) {
    this.changePage(event.value);
  }
  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }
  empty() {
    return this.getPageCount() === 0;
  }
  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }
  get currentPageReport() {
    return this.currentPageReportTemplate.replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords > 0 ? this._first + 1 : 0)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
  }
  static ɵfac = function Paginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Paginator)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Paginator,
    selectors: [["p-paginator"]],
    contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.previousPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      pageLinkSize: [2, "pageLinkSize", "pageLinkSize", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      alwaysShow: [2, "alwaysShow", "alwaysShow", booleanAttribute],
      dropdownAppendTo: "dropdownAppendTo",
      templateLeft: "templateLeft",
      templateRight: "templateRight",
      appendTo: "appendTo",
      dropdownScrollHeight: "dropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
      jumpToPageItemTemplate: "jumpToPageItemTemplate",
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      locale: "locale",
      dropdownItemTemplate: "dropdownItemTemplate",
      first: "first"
    },
    outputs: {
      onPageChange: "onPageChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([PaginatorStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "class", "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["class", "p-paginator-content-start", 4, "ngIf"], ["class", "p-paginator-current", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-first", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-prev", 3, "click", "disabled", "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-paginator-prev-icon", 4, "ngIf"], ["class", "p-paginator-pages", 4, "ngIf"], ["styleClass", "p-paginator-jtp-dropdown", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "onChange", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-paginator-next", 3, "click", "disabled", "ngClass"], ["class", "p-paginator-next-icon", 4, "ngIf"], ["type", "button", "pRipple", "", "class", "p-paginator-last", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "p-paginator-jtp-input", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["styleClass", "p-paginator-rpp-dropdown", 3, "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel", "ngModelChange", "onChange", 4, "ngIf"], ["class", "p-paginator-content-end", 4, "ngIf"], [1, "p-paginator-content-start"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-paginator-current"], ["type", "button", "pRipple", "", 1, "p-paginator-first", 3, "click", "disabled", "ngClass"], ["class", "p-paginator-first-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-paginator-first-icon"], [4, "ngTemplateOutlet"], [1, "p-paginator-prev-icon"], [1, "p-paginator-pages"], ["type", "button", "class", "p-paginator-page", "pRipple", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 1, "p-paginator-page", 3, "click", "ngClass"], ["styleClass", "p-paginator-jtp-dropdown", 3, "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "item"], ["pTemplate", "dropdownicon"], [1, "p-paginator-next-icon"], ["type", "button", "pRipple", "", 1, "p-paginator-last", 3, "click", "disabled", "ngClass"], ["class", "p-paginator-last-icon", 4, "ngIf"], [1, "p-paginator-last-icon"], [1, "p-paginator-jtp-input", 3, "ngModelChange", "ngModel", "disabled"], ["styleClass", "p-paginator-rpp-dropdown", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled", "appendTo", "scrollHeight", "ariaLabel"], [1, "p-paginator-content-end"]],
    template: function Paginator_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Paginator_div_0_Template, 16, 29, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.alwaysShow ? true : ctx.pageLinks && ctx.pageLinks.length > 1);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Select, InputNumber, FormsModule, NgControlStatus, NgModel, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, SharedModule, PrimeTemplate],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Paginator, [{
    type: Component,
    args: [{
      selector: "p-paginator",
      standalone: true,
      imports: [CommonModule, Select, InputNumber, FormsModule, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, SharedModule],
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-paginator p-component'" *ngIf="alwaysShow ? true : pageLinks && pageLinks.length > 1" [attr.data-pc-section]="'paginator'" [attr.data-pc-section]="'root'">
            <div class="p-paginator-content-start" *ngIf="templateLeft" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>
            </div>
            <span class="p-paginator-current" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isFirstPage() || empty()"
                (click)="changePageToFirst($event)"
                pRipple
                class="p-paginator-first"
                [ngClass]="{ 'p-disabled': isFirstPage() || empty() }"
                [attr.aria-label]="getAriaLabel('firstPageLabel')"
            >
                <AngleDoubleLeftIcon *ngIf="!firstPageLinkIconTemplate && !_firstPageLinkIconTemplate" [styleClass]="'p-paginator-first-icon'" />
                <span class="p-paginator-first-icon" *ngIf="firstPageLinkIconTemplate || _firstPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate || _firstPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button type="button" [disabled]="isFirstPage() || empty()" (click)="changePageToPrev($event)" pRipple class="p-paginator-prev" [ngClass]="{ 'p-disabled': isFirstPage() || empty() }" [attr.aria-label]="getAriaLabel('prevPageLabel')">
                <AngleLeftIcon *ngIf="!previousPageLinkIconTemplate && !_previousPageLinkIconTemplate" [styleClass]="'p-paginator-prev-icon'" />
                <span class="p-paginator-prev-icon" *ngIf="previousPageLinkIconTemplate || _previousPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate || _previousPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <span class="p-paginator-pages" *ngIf="showPageLinks">
                <button
                    type="button"
                    *ngFor="let pageLink of pageLinks"
                    class="p-paginator-page"
                    [ngClass]="{ 'p-paginator-page-selected': pageLink - 1 == getPage() }"
                    [attr.aria-label]="getPageAriaLabel(pageLink)"
                    [attr.aria-current]="pageLink - 1 == getPage() ? 'page' : undefined"
                    (click)="onPageLinkClick($event, pageLink - 1)"
                    pRipple
                >
                    {{ getLocalization(pageLink) }}
                </button>
            </span>
            <p-select
                [options]="pageItems"
                [ngModel]="getPage()"
                *ngIf="showJumpToPageDropdown"
                [disabled]="empty()"
                [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
                styleClass="p-paginator-jtp-dropdown"
                (onChange)="onPageDropdownChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
            >
                <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>
                <ng-container *ngIf="jumpToPageItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"></ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-select>
            <button type="button" [disabled]="isLastPage() || empty()" (click)="changePageToNext($event)" pRipple class="p-paginator-next" [ngClass]="{ 'p-disabled': isLastPage() || empty() }" [attr.aria-label]="getAriaLabel('nextPageLabel')">
                <AngleRightIcon *ngIf="!nextPageLinkIconTemplate && !_nextPageLinkIconTemplate" [styleClass]="'p-paginator-next-icon'" />
                <span class="p-paginator-next-icon" *ngIf="nextPageLinkIconTemplate || _nextPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate || _nextPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <button
                *ngIf="showFirstLastIcon"
                type="button"
                [disabled]="isLastPage() || empty()"
                (click)="changePageToLast($event)"
                pRipple
                class="p-paginator-last"
                [ngClass]="{ 'p-disabled': isLastPage() || empty() }"
                [attr.aria-label]="getAriaLabel('lastPageLabel')"
            >
                <AngleDoubleRightIcon *ngIf="!lastPageLinkIconTemplate && !_lastPageLinkIconTemplate" [styleClass]="'p-paginator-last-icon'" />
                <span class="p-paginator-last-icon" *ngIf="lastPageLinkIconTemplate || _lastPageLinkIconTemplate">
                    <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate || _lastPageLinkIconTemplate"></ng-template>
                </span>
            </button>
            <p-inputnumber *ngIf="showJumpToPageInput" [ngModel]="currentPage()" class="p-paginator-jtp-input" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputnumber>
            <p-select
                [options]="rowsPerPageItems"
                [(ngModel)]="rows"
                *ngIf="rowsPerPageOptions"
                styleClass="p-paginator-rpp-dropdown"
                [disabled]="empty()"
                (onChange)="onRppChange($event)"
                [appendTo]="dropdownAppendTo"
                [scrollHeight]="dropdownScrollHeight"
                [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
            >
                <ng-container *ngIf="dropdownItemTemplate">
                    <ng-template let-item pTemplate="item">
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"></ng-container>
                    </ng-template>
                </ng-container>
                <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
                </ng-template>
            </p-select>
            <div class="p-paginator-content-end" *ngIf="templateRight" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [PaginatorStyle]
    }]
  }], () => [], {
    pageLinkSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    alwaysShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownAppendTo: [{
      type: Input
    }],
    templateLeft: [{
      type: Input
    }],
    templateRight: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    dropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    jumpToPageItemTemplate: [{
      type: Input
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    dropdownItemTemplate: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    onPageChange: [{
      type: Output
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    firstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["firstpagelinkicon", {
        descendants: false
      }]
    }],
    previousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["previouspagelinkicon", {
        descendants: false
      }]
    }],
    lastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["lastpagelinkicon", {
        descendants: false
      }]
    }],
    nextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["nextpagelinkicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Paginator, {
    className: "Paginator"
  });
})();
var PaginatorModule = class _PaginatorModule {
  static ɵfac = function PaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginatorModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PaginatorModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Paginator, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [Paginator, SharedModule],
      exports: [Paginator, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var theme2 = ({
  dt
}) => `
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${dt("togglebutton.color")};
    background: ${dt("togglebutton.background")};
    border: 1px solid ${dt("togglebutton.border.color")};
    padding: ${dt("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt("togglebutton.transition.duration")}, color ${dt("togglebutton.transition.duration")}, border-color ${dt("togglebutton.transition.duration")},
        outline-color ${dt("togglebutton.transition.duration")}, box-shadow ${dt("togglebutton.transition.duration")};
    border-radius: ${dt("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${dt("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${dt("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${dt("togglebutton.transition.duration")}, color ${dt("togglebutton.transition.duration")}, border-color ${dt("togglebutton.transition.duration")},
            outline-color ${dt("togglebutton.transition.duration")}, box-shadow ${dt("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${dt("togglebutton.content.left")};
    top: ${dt("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${dt("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${dt("togglebutton.content.top")}));
    border-radius: ${dt("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${dt("togglebutton.content.checked.background")};
    box-shadow: ${dt("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${dt("togglebutton.hover.background")};
    color: ${dt("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${dt("togglebutton.checked.background")};
    border-color: ${dt("togglebutton.checked.border.color")};
    color: ${dt("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${dt("togglebutton.focus.ring.shadow")};
    outline: ${dt("togglebutton.focus.ring.width")} ${dt("togglebutton.focus.ring.style")} ${dt("togglebutton.focus.ring.color")};
    outline-offset: ${dt("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${dt("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${dt("togglebutton.disabled.background")};
    border-color: ${dt("togglebutton.disabled.border.color")};
    color: ${dt("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${dt("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${dt("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${dt("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${dt("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${dt("togglebutton.sm.padding")};
    font-size: ${dt("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${dt("togglebutton.lg.padding")};
    font-size: ${dt("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${dt("togglebutton.invalid.border.color")};
}
`;
var classes2 = {
  root: ({
    instance
  }) => ({
    "p-togglebutton p-component": true,
    "p-togglebutton-checked": instance.checked,
    "p-disabled": instance.disabled,
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large"
  }),
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  theme = theme2;
  classes = classes2;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (ɵToggleButtonStyle_BaseFactory || (ɵToggleButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var _c02 = ["icon"];
var _c12 = ["content"];
var _c22 = (a0) => ({
  $implicit: a0
});
var _c32 = (a0, a1) => ({
  "p-togglebutton-icon": true,
  "p-togglebutton-icon-left": a0,
  "p-togglebutton-icon-right": a1
});
function ToggleButton_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToggleButton_Conditional_3_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon);
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c32, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));
    ɵɵattribute("data-pc-section", "icon");
  }
}
function ToggleButton_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleButton_Conditional_3_Conditional_0_Conditional_0_Template, 1, 7, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_3_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToggleButton_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleButton_Conditional_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c22, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleButton_Conditional_3_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_3_Conditional_1_Template, 1, 4, "ng-container");
    ɵɵelementStart(2, "span", 1);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!ctx_r0.iconTemplate ? 0 : 1);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r0.cx("label"));
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : " " : ctx_r0.hasOffLabel ? ctx_r0.offLabel : " ");
  }
}
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseComponent {
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  get hostClass() {
    return this.styleClass || "";
  }
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  _componentStyle = inject(ToggleButtonStyle);
  toggle(event) {
    if (!this.disabled && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  onBlur() {
    this.onModelTouched();
  }
  writeValue(value) {
    this.checked = value;
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
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (ɵToggleButton_BaseFactory || (ɵToggleButton_BaseFactory = ɵɵgetInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c02, 4);
        ɵɵcontentQuery(dirIndex, _c12, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.hostClass);
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      size: "size",
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      allowEmpty: "allowEmpty"
    },
    outputs: {
      onChange: "onChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 15,
    consts: [["pRipple", "", "type", "button", 3, "click", "ngClass", "tabindex", "disabled"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngClass"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function ToggleButton_Template_button_click_0_listener($event) {
          return ctx.toggle($event);
        });
        ɵɵelementStart(1, "span", 1);
        ɵɵtemplate(2, ToggleButton_ng_container_2_Template, 1, 0, "ng-container", 2)(3, ToggleButton_Conditional_3_Template, 4, 4, "span", 1);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.cx("root"))("tabindex", ctx.tabindex)("disabled", ctx.disabled);
        ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy)("aria-pressed", ctx.checked)("data-p-checked", ctx.active)("data-p-disabled", ctx.disabled);
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.cx("content"));
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c22, ctx.checked));
        ɵɵadvance();
        ɵɵconditional(!ctx.contentTemplate ? 3 : -1);
      }
    },
    dependencies: [Ripple, CommonModule, NgClass, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [Ripple, CommonModule, SharedModule],
      template: `
        <button
            pRipple
            type="button"
            [ngClass]="cx('root')"
            [class]="styleClass"
            [tabindex]="tabindex"
            [disabled]="disabled"
            (click)="toggle($event)"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-pressed]="checked"
            [attr.data-p-checked]="active"
            [attr.data-p-disabled]="disabled"
        >
            <span [ngClass]="cx('content')">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
                @if (!contentTemplate) {
                    @if (!iconTemplate) {
                        @if (onIcon || offIcon) {
                            <span
                                [class]="checked ? this.onIcon : this.offIcon"
                                [ngClass]="{
                                    'p-togglebutton-icon': true,
                                    'p-togglebutton-icon-left': iconPos === 'left',
                                    'p-togglebutton-icon-right': iconPos === 'right'
                                }"
                                [attr.data-pc-section]="'icon'"
                            ></span>
                        }
                    } @else {
                        <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
                    }
                    <span [ngClass]="cx('label')" [attr.data-pc-section]="'label'">{{ checked ? (hasOnLabel ? onLabel : ' ') : hasOffLabel ? offLabel : ' ' }}</span>
                }
            </span>
        </button>
    `,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class"]
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ToggleButton, {
    className: "ToggleButton"
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static ɵfac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToggleButtonModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-selectbutton.mjs
var theme3 = ({
  dt
}) => `
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${dt("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${dt("selectbutton.border.radius")};
    border-end-start-radius: ${dt("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${dt("selectbutton.border.radius")};
    border-end-end-radius: ${dt("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${dt("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`;
var classes3 = {
  root: ({
    props
  }) => ["p-selectbutton p-component", {
    "p-invalid": props.invalid
  }]
};
var SelectButtonStyle = class _SelectButtonStyle extends BaseStyle {
  name = "selectbutton";
  theme = theme3;
  classes = classes3;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSelectButtonStyle_BaseFactory;
    return function SelectButtonStyle_Factory(__ngFactoryType__) {
      return (ɵSelectButtonStyle_BaseFactory || (ɵSelectButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_SelectButtonStyle)))(__ngFactoryType__ || _SelectButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SelectButtonStyle,
    factory: _SelectButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectButtonClasses;
(function(SelectButtonClasses2) {
  SelectButtonClasses2["root"] = "p-selectbutton";
})(SelectButtonClasses || (SelectButtonClasses = {}));
var _c03 = ["item"];
var _c13 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SelectButton_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    const option_r3 = ctx_r5.$implicit;
    const ɵ$index_1_r4 = ctx_r5.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c13, option_r3, ɵ$index_1_r4));
  }
}
function SelectButton_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SelectButton_For_1_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
}
function SelectButton_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-toggleButton", 2);
    ɵɵlistener("onChange", function SelectButton_For_1_Template_p_toggleButton_onChange_0_listener($event) {
      const ctx_r1 = ɵɵrestoreView(_r1);
      const option_r3 = ctx_r1.$implicit;
      const ɵ$index_1_r4 = ctx_r1.$index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onOptionSelect($event, option_r3, ɵ$index_1_r4));
    });
    ɵɵtemplate(1, SelectButton_For_1_Conditional_1_Template, 2, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("autofocus", ctx_r4.autofocus)("styleClass", ctx_r4.styleClass)("ngModel", ctx_r4.isSelected(option_r3))("onLabel", ctx_r4.getOptionLabel(option_r3))("offLabel", ctx_r4.getOptionLabel(option_r3))("disabled", ctx_r4.disabled || ctx_r4.isOptionDisabled(option_r3))("allowEmpty", ctx_r4.allowEmpty)("size", ctx_r4.size);
    ɵɵadvance();
    ɵɵconditional(ctx_r4.itemTemplate || ctx_r4._itemTemplate ? 1 : -1);
  }
}
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class _SelectButton extends BaseComponent {
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  options;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Whether selection can be cleared.
   * @group Props
   */
  unselectable = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty = true;
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
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on input click.
   * @param {SelectButtonOptionClickEvent} event - Custom click event.
   * @group Emits
   */
  onOptionClick = new EventEmitter();
  /**
   * Callback to invoke on selection change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Template of an item in the list.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  get equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  focusedIndex = 0;
  _componentStyle = inject(SelectButtonStyle);
  getOptionLabel(option) {
    return this.optionLabel ? resolveFieldData(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? resolveFieldData(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  writeValue(value) {
    this.value = value;
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
  onOptionSelect(event, option, index) {
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    if (selected && this.unselectable) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let newValue;
    if (this.multiple) {
      if (selected) newValue = this.value.filter((val) => !equals(val, optionValue, this.equalityKey));
      else newValue = this.value ? [...this.value, optionValue] : [optionValue];
    } else {
      if (selected && !this.allowEmpty) {
        return;
      }
      newValue = selected ? null : optionValue;
    }
    this.focusedIndex = index;
    this.value = newValue;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onOptionClick.emit({
      originalEvent: event,
      option,
      index
    });
  }
  changeTabIndexes(event, direction) {
    let firstTabableChild, index;
    for (let i = 0; i <= this.el.nativeElement.children.length - 1; i++) {
      if (this.el.nativeElement.children[i].getAttribute("tabindex") === "0") firstTabableChild = {
        elem: this.el.nativeElement.children[i],
        index: i
      };
    }
    if (direction === "prev") {
      if (firstTabableChild.index === 0) index = this.el.nativeElement.children.length - 1;
      else index = firstTabableChild.index - 1;
    } else {
      if (firstTabableChild.index === this.el.nativeElement.children.length - 1) index = 0;
      else index = firstTabableChild.index + 1;
    }
    this.focusedIndex = index;
    this.el.nativeElement.children[index].focus();
  }
  onFocus(event, index) {
    this.focusedIndex = index;
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !equals(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    const optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (equals(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = equals(this.getOptionValue(option), this.value, this.equalityKey);
    }
    return selected;
  }
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSelectButton_BaseFactory;
    return function SelectButton_Factory(__ngFactoryType__) {
      return (ɵSelectButton_BaseFactory || (ɵSelectButton_BaseFactory = ɵɵgetInheritedFactory(_SelectButton)))(__ngFactoryType__ || _SelectButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SelectButton,
    selectors: [["p-selectButton"], ["p-selectbutton"], ["p-select-button"]],
    contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c03, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 10,
    hostBindings: function SelectButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.group)("aria-labelledby", ctx.ariaLabelledBy)("data-pc-section", "root")("data-pc-name", "selectbutton");
        ɵɵstyleMap(ctx.style);
        ɵɵclassProp("p-selectbutton", true)("p-component", true);
      }
    },
    inputs: {
      options: "options",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      unselectable: [2, "unselectable", "unselectable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy",
      size: "size",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      dataKey: "dataKey",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onOptionClick: "onOptionClick",
      onChange: "onChange"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size"], [3, "onChange", "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SelectButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, SelectButton_For_1_Template, 2, 9, "p-toggleButton", 1, ɵɵrepeaterTrackByIdentity);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.options);
      }
    },
    dependencies: [ToggleButton, FormsModule, NgControlStatus, NgModel, CommonModule, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton, p-selectbutton, p-select-button",
      standalone: true,
      imports: [ToggleButton, FormsModule, CommonModule, SharedModule],
      template: `
        @for (option of options; track option; let i = $index) {
            <p-toggleButton
                [autofocus]="autofocus"
                [styleClass]="styleClass"
                [ngModel]="isSelected(option)"
                [onLabel]="this.getOptionLabel(option)"
                [offLabel]="this.getOptionLabel(option)"
                [disabled]="disabled || isOptionDisabled(option)"
                (onChange)="onOptionSelect($event, option, i)"
                [allowEmpty]="allowEmpty"
                [size]="size"
            >
                @if (itemTemplate || _itemTemplate) {
                    <ng-template #content>
                        <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                    </ng-template>
                }
            </p-toggleButton>
        }
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class.p-selectbutton]": "true",
        "[class.p-component]": "true",
        "[style]": "style",
        "[attr.role]": "group",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-pc-section]": "'root'",
        "[attr.data-pc-name]": "'selectbutton'"
      }
    }]
  }], null, {
    options: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    unselectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(SelectButton, {
    className: "SelectButton"
  });
})();
var SelectButtonModule = class _SelectButtonModule {
  static ɵfac = function SelectButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SelectButtonModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [SelectButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SelectButton, SharedModule],
      exports: [SelectButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-table.mjs
var theme4 = ({
  dt
}) => `
.p-datatable {
    position: relative;
}

.p-datatable-table {
    border-spacing: 0;
    border-collapse: separate;
    width: 100%;
}

.p-datatable-scrollable > .p-datatable-table-container {
    position: relative;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 2;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 2;
}
/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-frozen-tbody:last-child {
    z-index: 1;
}

.p-datatable-scrollable-table > .p-datatable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-datatable-scrollable .p-datatable-frozen-column {
    position: sticky;
    background: ${dt("datatable.header.cell.background")};
}

.p-datatable-scrollable th.p-datatable-frozen-column {
    z-index: 1;
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
    background: ${dt("datatable.header.cell.background")};
}

.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background: ${dt("datatable.footer.cell.background")};
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable > .p-datatable-table-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
    position: sticky;
    z-index: 1;
}

.p-datatable-resizable-table > .p-datatable-thead > tr > th,
.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
.p-datatable-resizable-table > .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
    display: none;
}

.p-datatable-column-resizer {
    display: block;
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    margin: 0;
    width: ${dt("datatable.column.resizer.width")};
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

/*
.p-datatable-column-header-content {
    display: flex;
    align-items: center;
    gap: ${dt("datatable.header.cell.gap")};
}
.p-datatable-thead > tr > th {
    display: flex;
    align-items: center;
    gap: ${dt("datatable.header.cell.gap")};
}
*/

.p-datatable-column-resize-indicator {
    width: ${dt("datatable.resize.indicator.width")};
    position: absolute;
    z-index: 10;
    display: none;
    background: ${dt("datatable.resize.indicator.color")};
}

.p-datatable-row-reorder-indicator-up,
.p-datatable-row-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-datatable-reorderable-column,
.p-datatable-reorderable-row-handle {
    cursor: move;
}

.p-datatable-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}

.p-datatable-inline-filter {
    display: flex;
    align-items: center;
    width: 100%;
    gap: ${dt("datatable.filter.inline.gap")};
}

.p-datatable-inline-filter .p-datatable-filter-element-container {
    flex: 1 1 auto;
    width: 1%;
}

.p-datatable-filter-overlay {
    position: absolute;
    background: ${dt("datatable.filter.overlay.select.background")};
    color: ${dt("datatable.filter.overlay.select.color")};
    border: 1px solid ${dt("datatable.filter.overlay.select.border.color")};
    border-radius: ${dt("datatable.filter.overlay.select.border.radius")};
    box-shadow: ${dt("datatable.filter.overlay.select.shadow")};
    min-width: 12.5rem;
}

.p-datatable-filter-constraint-list {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: ${dt("datatable.filter.constraint.list.padding")};
    gap: ${dt("datatable.filter.constraint.list.gap")};
}

.p-datatable-filter-constraint {
    padding: ${dt("datatable.filter.constraint.padding")};
    color: ${dt("datatable.filter.constraint.color")};
    border-radius: ${dt("datatable.filter.constraint.border.radius")};
    cursor: pointer;
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
        box-shadow ${dt("datatable.transition.duration")};
}

.p-datatable-filter-constraint-selected {
    background: ${dt("datatable.filter.constraint.selected.background")};
    color: ${dt("datatable.filter.constraint.selected.color")};
}

.p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
    background: ${dt("datatable.filter.constraint.focus.background")};
    color: ${dt("datatable.filter.constraint.focus.color")};
}

.p-datatable-filter-constraint:focus-visible {
    outline: 0 none;
    background: ${dt("datatable.filter.constraint.focus.background")};
    color: ${dt("datatable.filter.constraint.focus.color")};
}

.p-datatable-filter-constraint-selected:focus-visible {
    outline: 0 none;
    background: ${dt("datatable.filter.constraint.selected.focus.background")};
    color: ${dt("datatable.filter.constraint.selected.focus.color")};
}

.p-datatable-filter-constraint-separator {
    border-top: 1px solid ${dt("datatable.filter.constraint.separator.border.color")};
}

.p-datatable-popover-filter {
    display: inline-flex;
    margin-inline-start: auto;
}

.p-datatable-filter-overlay-popover {
    background: ${dt("datatable.filter.overlay.popover.background")};
    color: ${dt("datatable.filter.overlay.popover.color")};
    border: 1px solid ${dt("datatable.filter.overlay.popover.border.color")};
    border-radius: ${dt("datatable.filter.overlay.popover.border.radius")};
    box-shadow: ${dt("datatable.filter.overlay.popover.shadow")};
    min-width: 12.5rem;
    padding: ${dt("datatable.filter.overlay.popover.padding")};
    display: flex;
    flex-direction: column;
    gap: ${dt("datatable.filter.overlay.popover.gap")};
}

.p-datatable-filter-operator-dropdown, .p-datatable-filter-constraint-dropdown {
    width: 100%;
}

.p-datatable-filter-rule-list,
.p-datatable-filter-rule {
    display: flex;
    flex-direction: column;
    gap: ${dt("datatable.filter.overlay.popover.gap")};
}

.p-datatable-filter-rule {
    border-bottom: 1px solid ${dt("datatable.filter.rule.border.color")};
}

.p-datatable-filter-rule:last-child {
    border-bottom: 0 none;
}

.p-datatable-filter-add-rule-button, .p-datatable-filter-remove-rule-button {
    width: 100%;
}

.p-datatable-filter-remove-button {
    width: 100%;
}

.p-datatable-filter-buttonbar {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-datatable-virtualscroller-spacer {
    display: flex;
}

.p-datatable .p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    inset-inline-start: 0;
}

.p-datatable-paginator-top {
    border-color: ${dt("datatable.paginator.top.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.paginator.top.border.width")};
}

.p-datatable-paginator-bottom {
    border-color: ${dt("datatable.paginator.bottom.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.paginator.bottom.border.width")};
}

.p-datatable-header {
    background: ${dt("datatable.header.background")};
    color: ${dt("datatable.header.color")};
    border-color: ${dt("datatable.header.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.header.border.width")};
    padding: ${dt("datatable.header.padding")};
}

.p-datatable-footer {
    background: ${dt("datatable.footer.background")};
    color: ${dt("datatable.footer.color")};
    border-color: ${dt("datatable.footer.border.color")};
    border-style: solid;
    border-width: ${dt("datatable.footer.border.width")};
    padding: ${dt("datatable.footer.padding")};
}

.p-datatable-thead > tr > th {
    padding: ${dt("datatable.header.cell.padding")};
    background: ${dt("datatable.header.cell.background")};
    border-color: ${dt("datatable.header.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt("datatable.header.cell.color")};
    font-weight: ${dt("datatable.column.title.font.weight")};
    text-align: start;
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
            outline-color ${dt("datatable.transition.duration")}, box-shadow ${dt("datatable.transition.duration")};
}

/** For PrimeNG **/
.p-datatable-thead > tr > th p-columnfilter {
    font-weight: normal;
}
/** For PrimeNG End **/

/*
.p-datatable-column-title {
    font-weight: ${dt("datatable.column.title.font.weight")};
}
*/

.p-datatable-tbody > tr {
    outline-color: transparent;
    background: ${dt("datatable.row.background")};
    color: ${dt("datatable.row.color")};
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
            outline-color ${dt("datatable.transition.duration")}, box-shadow ${dt("datatable.transition.duration")};
}

.p-datatable-tbody > tr > td {
    text-align: start;
    border-color: ${dt("datatable.body.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    padding: ${dt("datatable.body.cell.padding")};
}

.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
    background: ${dt("datatable.row.hover.background")};
    color: ${dt("datatable.row.hover.color")};
}

.p-datatable-tbody > tr.p-datatable-row-selected {
    background: ${dt("datatable.row.selected.background")};
    color: ${dt("datatable.row.selected.color")};
}

.p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
    border-bottom-color: ${dt("datatable.body.cell.selected.border.color")};
}

.p-datatable-tbody > tr.p-datatable-row-selected > td {
    border-bottom-color: ${dt("datatable.body.cell.selected.border.color")};
}

.p-datatable-tbody > tr:focus-visible,
.p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
    box-shadow: ${dt("datatable.row.focus.ring.shadow")};
    outline: ${dt("datatable.row.focus.ring.width")} ${dt("datatable.row.focus.ring.style")} ${dt("datatable.row.focus.ring.color")};
    outline-offset: ${dt("datatable.row.focus.ring.offset")};
}

.p-datatable-tfoot > tr > td {
    text-align: start;
    padding: ${dt("datatable.footer.cell.padding")};
    border-color: ${dt("datatable.footer.cell.border.color")};
    border-style: solid;
    border-width: 0 0 1px 0;
    color: ${dt("datatable.footer.cell.color")};
    background: ${dt("datatable.footer.cell.background")};
}

.p-datatable-column-footer {
    font-weight: ${dt("datatable.column.footer.font.weight")};
}

.p-datatable-sortable-column {
    cursor: pointer;
    user-select: none;
    outline-color: transparent;
}

.p-datatable-thead > tr > th,
.p-datatable-sort-icon,
.p-datatable-sort-badge {
    vertical-align: middle;
}

.p-datatable-sort-icon {
    color: ${dt("datatable.sort.icon.color")};
    transition: color ${dt("datatable.transition.duration")};
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
    background: ${dt("datatable.header.cell.hover.background")};
    color: ${dt("datatable.header.cell.hover.color")};
}

.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {
    color: ${dt("datatable.sort.icon.hover.color")};
}

.p-datatable-thead > tr > th.p-datatable-column-sorted {
    background: ${dt("datatable.header.cell.selected.background")};
    color: ${dt("datatable.header.cell.selected.color")};
}

.p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
    color: ${dt("datatable.header.cell.selected.color")};
}

.p-datatable-sortable-column:focus-visible {
    box-shadow: ${dt("datatable.header.cell.focus.ring.shadow")};
    outline: ${dt("datatable.header.cell.focus.ring.width")} ${dt("datatable.header.cell.focus.ring.style")} ${dt("datatable.header.cell.focus.ring.color")};
    outline-offset: ${dt("datatable.header.cell.focus.ring.offset")};
}

.p-datatable-hoverable .p-datatable-selectable-row {
    cursor: pointer;
}

.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 ${dt("datatable.drop.point.color")};
}

.p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 ${dt("datatable.drop.point.color")};
}

.p-datatable-loading-icon {
    font-size: ${dt("datatable.loading.icon.size")};
    width: ${dt("datatable.loading.icon.size")};
    height: ${dt("datatable.loading.icon.size")};
}

.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
}

.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
}

.p-datatable-gridlines .p-datatable-paginator-top {
    border-width: 1px 1px 0 1px;
}

.p-datatable-gridlines .p-datatable-paginator-bottom {
    border-width: 0 1px 1px 1px;
}

.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
}

p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
}

.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
}

.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
}

.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd) {
    background: ${dt("datatable.row.striped.background")};
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
    background: ${dt("datatable.row.selected.background")};
    color: ${dt("datatable.row.selected.color")};
}

.p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.375rem 0.5rem;
}

.p-datatable.p-datatable-lg .p-datatable-header {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tbody>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-tfoot>tr>td {
    padding: 0.9375rem 1.25rem;
}

.p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 0.9375rem 1.25rem;
}

.p-datatable-row-toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${dt("datatable.row.toggle.button.size")};
    height: ${dt("datatable.row.toggle.button.size")};
    color: ${dt("datatable.row.toggle.button.color")};
    border: 0 none;
    background: transparent;
    cursor: pointer;
    border-radius: ${dt("datatable.row.toggle.button.border.radius")};
    transition: background ${dt("datatable.transition.duration")}, color ${dt("datatable.transition.duration")}, border-color ${dt("datatable.transition.duration")},
            outline-color ${dt("datatable.transition.duration")}, box-shadow ${dt("datatable.transition.duration")};
    outline-color: transparent;
    user-select: none;
}

.p-datatable-row-toggle-button:enabled:hover {
    color: ${dt("datatable.row.toggle.button.hover.color")};
    background: ${dt("datatable.row.toggle.button.hover.background")};
}

.p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {
    background: ${dt("datatable.row.toggle.button.selected.hover.background")};
    ${dt("datatable.row.toggle.button.selected.hover.color")};
}

.p-datatable-row-toggle-button:focus-visible {
    box-shadow: ${dt("datatable.row.toggle.button.focus.ring.shadow")};
    outline: ${dt("datatable.row.toggle.button.focus.ring.width")} ${dt("datatable.row.toggle.button.focus.ring.style")} ${dt("datatable.row.toggle.button.focus.ring.color")};
    outline-offset: ${dt("datatable.row.toggle.button.focus.ring.offset")};
}
`;
var classes4 = {
  root: ({
    instance
  }) => ({
    "p-datatable p-component": true,
    "p-datatable-hoverable": instance.rowHover || instance.selectionMode,
    "p-datatable-resizable": instance.resizableColumns,
    "p-datatable-resizable-fit": instance.resizableColumns && instance.columnResizeMode === "fit",
    "p-datatable-scrollable": instance.scrollable,
    "p-datatable-flex-scrollable": instance.scrollable && instance.scrollHeight === "flex",
    "p-datatable-striped": instance.stripedRows,
    "p-datatable-gridlines": instance.showGridlines,
    "p-datatable-sm": instance.size === "small",
    "p-datatable-lg": instance.size === "large"
  }),
  mask: "p-datatable-mask p-overlay-mask",
  loadingIcon: "p-datatable-loading-icon",
  header: "p-datatable-header",
  pcPaginator: ({
    instance
  }) => "p-datatable-paginator-" + instance.paginatorPosition,
  tableContainer: "p-datatable-table-container",
  table: ({
    instance
  }) => ({
    "p-datatable-table": true,
    "p-datatable-scrollable-table": instance.scrollable,
    "p-datatable-resizable-table": instance.resizableColumns,
    "p-datatable-resizable-table-fit": instance.resizableColumns && instance.columnResizeMode === "fit"
  }),
  thead: "p-datatable-thead",
  columnResizer: "p-datatable-column-resizer",
  columnHeaderContent: "p-datatable-column-header-content",
  columnTitle: "p-datatable-column-title",
  columnFooter: "p-datatable-column-footer",
  sortIcon: "p-datatable-sort-icon",
  pcSortBadge: "p-datatable-sort-badge",
  filter: ({
    instance
  }) => ({
    "p-datatable-filter": true,
    "p-datatable-inline-filter": instance.display === "row",
    "p-datatable-popover-filter": instance.display === "menu"
  }),
  filterElementContainer: "p-datatable-filter-element-container",
  pcColumnFilterButton: "p-datatable-column-filter-button",
  pcColumnFilterClearButton: "p-datatable-column-filter-clear-button",
  filterOverlay: ({
    instance
  }) => ({
    "p-datatable-filter-overlay p-component": true,
    "p-datatable-filter-overlay-popover": instance.display === "menu"
  }),
  filterConstraintList: "p-datatable-filter-constraint-list",
  filterConstraint: "p-datatable-filter-constraint",
  filterConstraintSeparator: "p-datatable-filter-constraint-separator",
  filterOperator: "p-datatable-filter-operator",
  pcFilterOperatorDropdown: "p-datatable-filter-operator-dropdown",
  filterRuleList: "p-datatable-filter-rule-list",
  filterRule: "p-datatable-filter-rule",
  pcFilterConstraintDropdown: "p-datatable-filter-constraint-dropdown",
  pcFilterRemoveRuleButton: "p-datatable-filter-remove-rule-button",
  pcFilterAddRuleButton: "p-datatable-filter-add-rule-button",
  filterButtonbar: "p-datatable-filter-buttonbar",
  pcFilterClearButton: "p-datatable-filter-clear-button",
  pcFilterApplyButton: "p-datatable-filter-apply-button",
  tbody: ({
    instance
  }) => ({
    "p-datatable-tbody": true,
    "p-datatable-frozen-tbody": instance.frozenValue || instance.frozenBodyTemplate,
    "p-virtualscroller-content": instance.virtualScroll
  }),
  rowGroupHeader: "p-datatable-row-group-header",
  rowToggleButton: "p-datatable-row-toggle-button",
  rowToggleIcon: "p-datatable-row-toggle-icon",
  rowExpansion: "p-datatable-row-expansion",
  rowGroupFooter: "p-datatable-row-group-footer",
  emptyMessage: "p-datatable-empty-message",
  bodyCell: ({
    instance
  }) => ({
    "p-datatable-frozen-column": instance.columnProp("frozen")
  }),
  reorderableRowHandle: "p-datatable-reorderable-row-handle",
  pcRowEditorInit: "p-datatable-row-editor-init",
  pcRowEditorSave: "p-datatable-row-editor-save",
  pcRowEditorCancel: "p-datatable-row-editor-cancel",
  tfoot: "p-datatable-tfoot",
  footerCell: ({
    instance
  }) => ({
    "p-datatable-frozen-column": instance.columnProp("frozen")
  }),
  virtualScrollerSpacer: "p-datatable-virtualscroller-spacer",
  footer: "p-datatable-tfoot",
  columnResizeIndicator: "p-datatable-column-resize-indicator",
  rowReorderIndicatorUp: "p-datatable-row-reorder-indicator-up",
  rowReorderIndicatorDown: "p-datatable-row-reorder-indicator-down"
};
var inlineStyles = {
  tableContainer: ({
    instance
  }) => ({
    "max-height": instance.virtualScroll ? "" : instance.scrollHeight,
    overflow: "auto"
  }),
  thead: {
    position: "sticky"
  },
  tfoot: {
    position: "sticky"
  }
};
var TableStyle = class _TableStyle extends BaseStyle {
  name = "datatable";
  theme = theme4;
  classes = classes4;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTableStyle_BaseFactory;
    return function TableStyle_Factory(__ngFactoryType__) {
      return (ɵTableStyle_BaseFactory || (ɵTableStyle_BaseFactory = ɵɵgetInheritedFactory(_TableStyle)))(__ngFactoryType__ || _TableStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TableStyle,
    factory: _TableStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableStyle, [{
    type: Injectable
  }], null, null);
})();
var TableClasses;
(function(TableClasses2) {
  TableClasses2["root"] = "p-datatable";
  TableClasses2["mask"] = "p-datatable-mask";
  TableClasses2["loadingIcon"] = "p-datatable-loading-icon";
  TableClasses2["header"] = "p-datatable-header";
  TableClasses2["pcPaginator"] = "p-datatable-paginator-[position]";
  TableClasses2["tableContainer"] = "p-datatable-table-container";
  TableClasses2["table"] = "p-datatable-table";
  TableClasses2["thead"] = "p-datatable-thead";
  TableClasses2["columnResizer"] = "p-datatable-column-resizer";
  TableClasses2["columnHeaderContent"] = "p-datatable-column-header-content";
  TableClasses2["columnTitle"] = "p-datatable-column-title";
  TableClasses2["sortIcon"] = "p-datatable-sort-icon";
  TableClasses2["pcSortBadge"] = "p-datatable-sort-badge";
  TableClasses2["filter"] = "p-datatable-filter";
  TableClasses2["filterElementContainer"] = "p-datatable-filter-element-container";
  TableClasses2["pcColumnFilterButton"] = "p-datatable-column-filter-button";
  TableClasses2["pcColumnFilterClearButton"] = "p-datatable-column-filter-clear-button";
  TableClasses2["filterOverlay"] = "p-datatable-filter-overlay";
  TableClasses2["filterConstraintList"] = "p-datatable-filter-constraint-list";
  TableClasses2["filterConstraint"] = "p-datatable-filter-constraint";
  TableClasses2["filterConstraintSeparator"] = "p-datatable-filter-constraint-separator";
  TableClasses2["filterOperator"] = "p-datatable-filter-operator";
  TableClasses2["pcFilterOperatorDropdown"] = "p-datatable-filter-operator-dropdown";
  TableClasses2["filterRuleList"] = "p-datatable-filter-rule-list";
  TableClasses2["filterRule"] = "p-datatable-filter-rule";
  TableClasses2["pcFilterConstraintDropdown"] = "p-datatable-filter-constraint-dropdown";
  TableClasses2["pcFilterRemoveRuleButton"] = "p-datatable-filter-remove-rule-button";
  TableClasses2["pcFilterAddRuleButton"] = "p-datatable-filter-add-rule-button";
  TableClasses2["filterButtonbar"] = "p-datatable-filter-buttonbar";
  TableClasses2["pcFilterClearButton"] = "p-datatable-filter-clear-button";
  TableClasses2["pcFilterApplyButton"] = "p-datatable-filter-apply-button";
  TableClasses2["tbody"] = "p-datatable-tbody";
  TableClasses2["rowGroupHeader"] = "p-datatable-row-group-header";
  TableClasses2["rowToggleButton"] = "p-datatable-row-toggle-button";
  TableClasses2["rowToggleIcon"] = "p-datatable-row-toggle-icon";
  TableClasses2["rowExpansion"] = "p-datatable-row-expansion";
  TableClasses2["rowGroupFooter"] = "p-datatable-row-group-footer";
  TableClasses2["emptyMessage"] = "p-datatable-empty-message";
  TableClasses2["reorderableRowHandle"] = "p-datatable-reorderable-row-handle";
  TableClasses2["pcRowEditorInit"] = "p-datatable-row-editor-init";
  TableClasses2["pcRowEditorSave"] = "p-datatable-row-editor-save";
  TableClasses2["pcRowEditorCancel"] = "p-datatable-row-editor-cancel";
  TableClasses2["tfoot"] = "p-datatable-tfoot";
  TableClasses2["virtualScrollerSpacer"] = "p-datatable-virtualscroller-spacer";
  TableClasses2["footer"] = "p-datatable-footer";
  TableClasses2["columnResizeIndicator"] = "p-datatable-column-resize-indicator";
  TableClasses2["rowReorderIndicatorUp"] = "p-datatable-row-reorder-indicator-up";
  TableClasses2["rowReorderIndicatorDown"] = "p-datatable-row-reorder-indicator-down";
})(TableClasses || (TableClasses = {}));
var _c04 = ["header"];
var _c14 = ["headergrouped"];
var _c23 = ["body"];
var _c33 = ["loadingbody"];
var _c42 = ["caption"];
var _c52 = ["footer"];
var _c62 = ["footergrouped"];
var _c72 = ["summary"];
var _c8 = ["colgroup"];
var _c9 = ["expandedrow"];
var _c10 = ["groupheader"];
var _c11 = ["groupfooter"];
var _c122 = ["frozenexpandedrow"];
var _c132 = ["frozenheader"];
var _c142 = ["frozenbody"];
var _c15 = ["frozenfooter"];
var _c16 = ["frozencolgroup"];
var _c17 = ["emptymessage"];
var _c18 = ["paginatorleft"];
var _c19 = ["paginatorright"];
var _c20 = ["paginatordropdownitem"];
var _c21 = ["loadingicon"];
var _c222 = ["reorderindicatorupicon"];
var _c232 = ["reorderindicatordownicon"];
var _c24 = ["sorticon"];
var _c25 = ["checkboxicon"];
var _c26 = ["headercheckboxicon"];
var _c27 = ["paginatordropdownicon"];
var _c28 = ["paginatorfirstpagelinkicon"];
var _c29 = ["paginatorlastpagelinkicon"];
var _c30 = ["paginatorpreviouspagelinkicon"];
var _c31 = ["paginatornextpagelinkicon"];
var _c322 = ["container"];
var _c332 = ["resizeHelper"];
var _c34 = ["reorderIndicatorUp"];
var _c35 = ["reorderIndicatorDown"];
var _c36 = ["wrapper"];
var _c37 = ["table"];
var _c38 = ["thead"];
var _c39 = ["tfoot"];
var _c40 = ["scroller"];
var _c41 = (a0) => ({
  height: a0
});
var _c422 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c43 = (a0) => ({
  columns: a0
});
var _c44 = (a0) => ({
  $implicit: a0
});
function Table_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap("p-datatable-loading-icon " + ctx_r0.loadingIcon);
  }
}
function Table_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 22);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("spin", true)("styleClass", ctx_r0.cx("loadingIcon"));
  }
}
function Table_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Table_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtemplate(1, Table_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.cx("loadingIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Table_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Table_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 21)(2, Table_div_2_ng_container_2_span_2_Template, 2, 2, "span", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Table_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, Table_div_2_i_1_Template, 1, 2, "i", 20)(2, Table_div_2_ng_container_2_Template, 3, 2, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("mask"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIcon);
  }
}
function Table_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("header"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.captionTemplate || ctx_r0._captionTemplate);
  }
}
function Table_p_paginator_4_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_1_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_4_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_2_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_4_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_3_ng_template_0_Template, 1, 1, "ng-template", 27);
  }
}
function Table_p_paginator_4_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_4_ng_template_0_Template, 1, 1, "ng-template", 28);
  }
}
function Table_p_paginator_4_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_5_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Table_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 24);
    ɵɵlistener("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPageChange($event));
    });
    ɵɵtemplate(1, Table_p_paginator_4_1_Template, 1, 0, null, 16)(2, Table_p_paginator_4_2_Template, 1, 0, null, 16)(3, Table_p_paginator_4_3_Template, 1, 0, null, 16)(4, Table_p_paginator_4_4_Template, 1, 0, null, 16)(5, Table_p_paginator_4_5_Template, 1, 0, null, 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate || ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cx("pcPaginator") + " " + ctx_r0.paginatorStyleClass && ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_scroller_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_scroller_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_scroller_7_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const items_r4 = ctx.$implicit;
    const scrollerOptions_r5 = ctx.options;
    ɵɵnextContext(2);
    const buildInTable_r6 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c422, items_r4, scrollerOptions_r5));
  }
}
function Table_p_scroller_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 30, 3);
    ɵɵlistener("onLazyLoad", function Table_p_scroller_7_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onLazyItemLoad($event));
    });
    ɵɵtemplate(2, Table_p_scroller_7_ng_template_2_Template, 1, 5, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(15, _c41, ctx_r0.scrollHeight !== "flex" ? ctx_r0.scrollHeight : void 0));
    ɵɵproperty("items", ctx_r0.processedData)("columns", ctx_r0.columns)("scrollHeight", ctx_r0.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r0.virtualScrollItemSize || ctx_r0._virtualRowHeight)("step", ctx_r0.rows)("delay", ctx_r0.lazy ? ctx_r0.virtualScrollDelay : 0)("inline", true)("lazy", ctx_r0.lazy)("loaderDisabled", true)("showSpacer", false)("showLoader", ctx_r0.loadingBodyTemplate || ctx_r0._loadingBodyTemplate)("options", ctx_r0.virtualScrollOptions)("autoSize", true);
  }
}
function Table_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Table_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const buildInTable_r6 = ɵɵreference(10);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c422, ctx_r0.processedData, ɵɵpureFunction1(2, _c43, ctx_r0.columns)));
  }
}
function Table_ng_template_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_9_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tbody", 38);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ɵɵnextContext().options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("tbody"))("value", ctx_r0.frozenValue)("frozenRows", true)("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.frozenBodyTemplate || ctx_r0._frozenBodyTemplate)("frozen", true);
  }
}
function Table_ng_template_9_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tbody", 39);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ɵɵnextContext().options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap("height: calc(" + scrollerOptions_r7.spacerStyle.height + " - " + scrollerOptions_r7.rows.length * scrollerOptions_r7.itemSize + "px);");
    ɵɵproperty("ngClass", ctx_r0.cx("virtualScrollerSpacer"));
  }
}
function Table_ng_template_9_tfoot_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_9_tfoot_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tfoot", 39, 7);
    ɵɵtemplate(2, Table_ng_template_9_tfoot_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ɵɵnextContext().options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("footer"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate || ctx_r0._footerTemplate || ctx_r0._footerGroupedTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c44, scrollerOptions_r7.columns));
  }
}
function Table_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 32, 5);
    ɵɵtemplate(2, Table_ng_template_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    ɵɵelementStart(3, "thead", 33, 6);
    ɵɵtemplate(5, Table_ng_template_9_ng_container_5_Template, 1, 0, "ng-container", 31);
    ɵɵelementEnd();
    ɵɵtemplate(6, Table_ng_template_9_tbody_6_Template, 1, 6, "tbody", 34);
    ɵɵelement(7, "tbody", 35);
    ɵɵtemplate(8, Table_ng_template_9_tbody_8_Template, 1, 3, "tbody", 36)(9, Table_ng_template_9_tfoot_9_Template, 3, 5, "tfoot", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ctx.options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.tableStyle);
    ɵɵclassMap(ctx_r0.tableStyleClass);
    ɵɵproperty("ngClass", ctx_r0.cx("table"));
    ɵɵattribute("id", ctx_r0.id + "-table");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.colGroupTemplate || ctx_r0._colGroupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(22, _c44, scrollerOptions_r7.columns));
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.cx("thead"))("ngStyle", ctx_r0.sx("thead"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerGroupedTemplate || ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(24, _c44, scrollerOptions_r7.columns));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.frozenValue || ctx_r0.frozenBodyTemplate || ctx_r0._frozenBodyTemplate);
    ɵɵadvance();
    ɵɵstyleMap(scrollerOptions_r7.contentStyle);
    ɵɵproperty("ngClass", ctx_r0.cx("tbody", scrollerOptions_r7.contentStyleClass))("value", ctx_r0.dataToRender(scrollerOptions_r7.rows))("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.bodyTemplate || ctx_r0._bodyTemplate)("scrollerOptions", scrollerOptions_r7);
    ɵɵadvance();
    ɵɵproperty("ngIf", scrollerOptions_r7.spacerStyle);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate || ctx_r0._footerTemplate || ctx_r0._footerGroupedTemplate);
  }
}
function Table_p_paginator_11_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_1_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_11_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_2_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_11_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_3_ng_template_0_Template, 1, 1, "ng-template", 27);
  }
}
function Table_p_paginator_11_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_4_ng_template_0_Template, 1, 1, "ng-template", 28);
  }
}
function Table_p_paginator_11_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_5_ng_template_0_Template, 1, 1, "ng-template", 29);
  }
}
function Table_p_paginator_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 24);
    ɵɵlistener("onPageChange", function Table_p_paginator_11_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPageChange($event));
    });
    ɵɵtemplate(1, Table_p_paginator_11_1_Template, 1, 0, null, 16)(2, Table_p_paginator_11_2_Template, 1, 0, null, 16)(3, Table_p_paginator_11_3_Template, 1, 0, null, 16)(4, Table_p_paginator_11_4_Template, 1, 0, null, 16)(5, Table_p_paginator_11_5_Template, 1, 0, null, 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate || ctx_r0._paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate || ctx_r0._paginatorRightTemplate)("dropdownAppendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate || ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cx("pcPaginator") + " " + ctx_r0.paginatorStyleClass && ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, Table_div_12_ng_container_1_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("footer"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.summaryTemplate || ctx_r0._summaryTemplate);
  }
}
function Table_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 40, 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("columnResizeIndicator"));
  }
}
function Table_span_14_ArrowDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ArrowDownIcon");
  }
}
function Table_span_14_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_14_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_span_14_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 40, 9);
    ɵɵtemplate(2, Table_span_14_ArrowDownIcon_2_Template, 1, 0, "ArrowDownIcon", 16)(3, Table_span_14_3_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("rowReorderIndicatorUp"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.reorderIndicatorUpIconTemplate && !ctx_r0._reorderIndicatorUpIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.reorderIndicatorUpIconTemplate || ctx_r0._reorderIndicatorUpIconTemplate);
  }
}
function Table_span_15_ArrowUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ArrowUpIcon");
  }
}
function Table_span_15_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_15_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_span_15_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 40, 10);
    ɵɵtemplate(2, Table_span_15_ArrowUpIcon_2_Template, 1, 0, "ArrowUpIcon", 16)(3, Table_span_15_3_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("rowReorderIndicatorDown"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.reorderIndicatorDownIconTemplate && !ctx_r0._reorderIndicatorDownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.reorderIndicatorDownIconTemplate || ctx_r0._reorderIndicatorDownIconTemplate);
  }
}
var _c45 = ["pTableBody", ""];
var _c46 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4
});
var _c47 = (a0, a1, a2, a3, a4, a5, a6) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4,
  rowgroup: a5,
  rowspan: a6
});
var _c48 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  expanded: a3,
  editing: a4,
  frozen: a5
});
var _c49 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  frozen: a3
});
var _c50 = (a0, a1) => ({
  $implicit: a0,
  frozen: a1
});
function TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c46, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dt.loadingBodyTemplate || ctx_r3.dt._loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c46, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dt.loadingBodyTemplate || ctx_r3.dt._loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction7(2, _c47, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen, ctx_r3.shouldRenderRowspan(ctx_r3.value, rowData_r2, rowIndex_r3), ctx_r3.calculateRowGroupSize(ctx_r3.value, rowData_r2, rowIndex_r3)));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c46, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 8, "ng-container", 2)(1, TableBody_ng_container_0_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 0)(2, TableBody_ng_container_0_ng_template_1_ng_container_2_Template, 2, 10, "ng-container", 0)(3, TableBody_ng_container_0_ng_template_1_ng_container_3_Template, 2, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const rowData_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", (ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate) && !ctx_r3.dt.virtualScroll && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r2, rowIndex_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dt.rowGroupMode !== "rowspan");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dt.rowGroupMode === "rowspan");
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate) && !ctx_r3.dt.virtualScroll && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r2, rowIndex_r3));
  }
}
function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_Template, 4, 4, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c48, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c48, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c48, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r6), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template, 2, 9, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.expandedRowTemplate || ctx_r3.dt._expandedRowTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(3, _c49, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.frozen));
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r3.dt.groupFooterTemplate || ctx_r3.dt._groupFooterTemplate) && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
  }
}
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 9, "ng-container", 0)(1, TableBody_ng_container_1_ng_template_1_ng_container_1_Template, 2, 9, "ng-container", 2)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_Template, 3, 8, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !(ctx_r3.dt.groupHeaderTemplate && ctx_r3.dt._groupHeaderTemplate));
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r3.dt.groupHeaderTemplate || ctx_r3.dt._groupHeaderTemplate) && ctx_r3.dt.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dt.isRowExpanded(rowData_r6));
  }
}
function TableBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_Template, 3, 3, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const rowData_r9 = ctx_r7.$implicit;
    const rowIndex_r10 = ctx_r7.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.frozenExpandedRowTemplate || ctx_r3.dt._frozenExpandedRowTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c49, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4)(1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 7, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const rowIndex_r10 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", ɵɵpureFunction6(3, _c48, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.dt.isRowExpanded(rowData_r9), ctx_r3.dt.editMode === "row" && ctx_r3.dt.isRowEditing(rowData_r9), ctx_r3.frozen));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dt.isRowExpanded(rowData_r9));
  }
}
function TableBody_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_Template, 2, 10, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dt.rowTrackBy);
  }
}
function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.loadingBodyTemplate || ctx_r3.dt._loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c50, ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.emptyMessageTemplate || ctx_r3.dt._emptyMessageTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c50, ctx_r3.columns, ctx_r3.frozen));
  }
}
function SortIcon_ng_container_0_SortAltIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAltIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAmountUpAltIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountDownIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAmountDownIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SortIcon_ng_container_0_SortAltIcon_1_Template, 1, 1, "SortAltIcon", 3)(2, SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template, 1, 1, "SortAmountUpAltIcon", 3)(3, SortIcon_ng_container_0_SortAmountDownIcon_3_Template, 1, 1, "SortAmountDownIcon", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === -1);
  }
}
function SortIcon_span_1_1_ng_template_0_Template(rf, ctx) {
}
function SortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, SortIcon_span_1_1_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dt.sortIconTemplate || ctx_r0.dt._sortIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c44, ctx_r0.sortOrder));
  }
}
function SortIcon_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.getBadgeValue());
  }
}
var _c51 = ["input"];
var _c522 = ["output"];
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate || ctx_r0._inputTemplate);
  }
}
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.outputTemplate || ctx_r0._outputTemplate);
  }
}
var _c53 = ["rb"];
function TableCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function TableCheckbox_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableCheckbox_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableCheckbox_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dt.checkboxIconTemplate || ctx_r0.dt._checkboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c44, ctx_r0.checked));
  }
}
function TableCheckbox_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableCheckbox_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 2);
    ɵɵelementContainerEnd();
  }
}
function TableHeaderCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template(rf, ctx) {
}
function TableHeaderCheckbox_ng_container_1_ng_template_1_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableHeaderCheckbox_ng_container_1_ng_template_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableHeaderCheckbox_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableHeaderCheckbox_ng_container_1_ng_template_1_0_Template, 1, 0, null, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dt.headerCheckboxIconTemplate || ctx_r0.dt._headerCheckboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c44, ctx_r0.checked));
  }
}
function TableHeaderCheckbox_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableHeaderCheckbox_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 2);
    ɵɵelementContainerEnd();
  }
}
var _c54 = ["filter"];
var _c55 = ["filtericon"];
var _c56 = ["removeruleicon"];
var _c57 = ["addruleicon"];
var _c58 = ["clearfiltericon"];
var _c59 = ["clearBtn"];
function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-columnFilterFormElement", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.type)("field", ctx_r0.field)("ariaLabel", ctx_r0.ariaLabel)("filterConstraint", ctx_r0.dt.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("showButtons", ctx_r0.showButtons);
  }
}
function ColumnFilter_p_button_2_ng_template_1_FilterIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "FilterIcon");
  }
}
function ColumnFilter_p_button_2_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_p_button_2_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_p_button_2_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_p_button_2_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, ColumnFilter_p_button_2_ng_template_1_span_1_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function ColumnFilter_p_button_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_p_button_2_ng_template_1_FilterIcon_0_Template, 1, 0, "FilterIcon", 10)(1, ColumnFilter_p_button_2_ng_template_1_span_1_Template, 2, 1, "span", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r0.filterIconTemplate && !ctx_r0._filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function ColumnFilter_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 9);
    ɵɵlistener("click", function ColumnFilter_p_button_2_Template_p_button_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.toggleMenu($event));
    })("keydown", function ColumnFilter_p_button_2_Template_p_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onToggleButtonKeyDown($event));
    });
    ɵɵtemplate(1, ColumnFilter_p_button_2_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("styleClass", ctx_r0.cx("pcColumnFilterButton"))("ariaLabel", ctx_r0.filterMenuButtonAriaLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.filter);
    ɵɵattribute("aria-haspopup", true)("aria-controls", ctx_r0.overlayVisible ? ctx_r0.overlayId : null)("aria-expanded", (tmp_7_0 = ctx_r0.overlayVisible) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false);
  }
}
function ColumnFilter_p_button_3_ng_template_1_FilterSlashIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "FilterSlashIcon");
  }
}
function ColumnFilter_p_button_3_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_p_button_3_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_p_button_3_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_p_button_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_p_button_3_ng_template_1_FilterSlashIcon_0_Template, 1, 0, "FilterSlashIcon", 10)(1, ColumnFilter_p_button_3_ng_template_1_1_Template, 1, 0, null, 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r0.clearFilterIconTemplate && !ctx_r0._clearFilterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.clearFilterIconTemplate || ctx_r0._clearFilterIconTemplate);
  }
}
function ColumnFilter_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 14);
    ɵɵlistener("onClick", function ColumnFilter_p_button_3_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.clearFilter());
    });
    ɵɵtemplate(1, ColumnFilter_p_button_3_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("styleClass", ctx_r0.cx("pcColumnfilterClearButton"))("ariaLabel", ctx_r0.clearButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.inline == null ? null : ctx_r0.filterButtonProps.inline.clear);
  }
}
function ColumnFilter_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ColumnFilter_div_4_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 19);
    ɵɵlistener("click", function ColumnFilter_div_4_ul_2_li_1_Template_li_click_0_listener() {
      const matchMode_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onRowMatchModeChange(matchMode_r7.value));
    })("keydown", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_enter_0_listener() {
      const matchMode_r7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onRowMatchModeChange(matchMode_r7.value));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const matchMode_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassProp("p-datatable-filter-constraint-selected", ctx_r0.isRowMatchModeSelected(matchMode_r7.value));
    ɵɵproperty("ngClass", ctx_r0.cx("filterConstraint"));
    ɵɵattribute("tabindex", i_r8 === 0 ? "0" : null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", matchMode_r7.label, " ");
  }
}
function ColumnFilter_div_4_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 3);
    ɵɵtemplate(1, ColumnFilter_div_4_ul_2_li_1_Template, 2, 5, "li", 18);
    ɵɵelement(2, "li", 3);
    ɵɵelementStart(3, "li", 19);
    ɵɵlistener("click", function ColumnFilter_div_4_ul_2_Template_li_click_3_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRowClearItemClick());
    })("keydown", function ColumnFilter_div_4_ul_2_Template_li_keydown_3_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_Template_li_keydown_enter_3_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRowClearItemClick());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.cx("filterConstraintList"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.matchModes);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.cx("filterConstraintSeparator"));
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.cx("filterConstraint"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.noFilterLabel, " ");
  }
}
function ColumnFilter_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "p-select", 24);
    ɵɵlistener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_0_Template_p_select_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onOperatorChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.cx("filterOperator"));
    ɵɵadvance();
    ɵɵproperty("options", ctx_r0.operatorOptions)("ngModel", ctx_r0.operator)("styleClass", ctx_r0.cx("pcFilterOperatorDropdown"));
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-select", 24);
    ɵɵlistener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_2_p_select_1_Template_p_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const fieldConstraint_r11 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onMenuMatchModeChange($event, fieldConstraint_r11));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fieldConstraint_r11 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("options", ctx_r0.matchModes)("ngModel", fieldConstraint_r11.matchMode)("styleClass", ctx_r0.cx("pcFilterConstraintDropdown"));
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_TrashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TrashIcon");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 28);
    ɵɵlistener("onClick", function ColumnFilter_div_4_ng_template_3_div_2_p_button_4_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r12);
      const fieldConstraint_r11 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.removeConstraint(fieldConstraint_r11));
    });
    ɵɵtemplate(1, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_TrashIcon_1_Template, 1, 0, "TrashIcon", 10)(2, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_2_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("styleClass", ctx_r0.cx("pcFilterRemoveRuleButton"))("text", true)("ariaLabel", ctx_r0.removeRuleButtonLabel)("label", ctx_r0.removeRuleButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.removeRule);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.removeRuleIconTemplate && !ctx_r0._removeRuleIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.removeRuleIconTemplate || ctx_r0._removeRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, ColumnFilter_div_4_ng_template_3_div_2_p_select_1_Template, 1, 3, "p-select", 25);
    ɵɵelement(2, "p-columnFilterFormElement", 26);
    ɵɵelementStart(3, "div");
    ɵɵtemplate(4, ColumnFilter_div_4_ng_template_3_div_2_p_button_4_Template, 3, 7, "p-button", 27);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const fieldConstraint_r11 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.cx("filterRule"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showMatchModes && ctx_r0.matchModes);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", fieldConstraint_r11)("filterTemplate", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.showRemoveIcon);
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_4_ng_template_3_div_3_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "p-button", 29);
    ɵɵlistener("onClick", function ColumnFilter_div_4_ng_template_3_div_3_Template_p_button_onClick_1_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.addConstraint());
    });
    ɵɵtemplate(2, ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template, 1, 0, "PlusIcon", 10)(3, ColumnFilter_div_4_ng_template_3_div_3_3_Template, 1, 0, null, 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("label", ctx_r0.addRuleButtonLabel)("styleClass", ctx_r0.cx("pcFilterAddRuleButton"))("text", true)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.addRule);
    ɵɵattribute("aria-label", ctx_r0.addRuleButtonLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.addRuleIconTemplate && !ctx_r0._addRuleIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.addRuleIconTemplate || ctx_r0._addRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_p_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 30, 2);
    ɵɵlistener("onClick", function ColumnFilter_div_4_ng_template_3_p_button_5_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.clearFilter());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("outlined", true)("label", ctx_r0.clearButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.clear);
    ɵɵattribute("aria-label", ctx_r0.clearButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 31);
    ɵɵlistener("onClick", function ColumnFilter_div_4_ng_template_3_p_button_6_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.applyFilter());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r0.applyButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.apply);
    ɵɵattribute("aria-label", ctx_r0.applyButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_4_ng_template_3_div_0_Template, 2, 4, "div", 20);
    ɵɵelementStart(1, "div", 3);
    ɵɵtemplate(2, ColumnFilter_div_4_ng_template_3_div_2_Template, 5, 17, "div", 21);
    ɵɵelementEnd();
    ɵɵtemplate(3, ColumnFilter_div_4_ng_template_3_div_3_Template, 4, 7, "div", 10);
    ɵɵelementStart(4, "div", 3);
    ɵɵtemplate(5, ColumnFilter_div_4_ng_template_3_p_button_5_Template, 2, 4, "p-button", 22)(6, ColumnFilter_div_4_ng_template_3_p_button_6_Template, 1, 3, "p-button", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.isShowOperator);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.cx("filterRuleList"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.fieldConstraints);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isShowAddConstraint);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.cx("filterButtonbar"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showClearButton);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showApplyButton);
  }
}
function ColumnFilter_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ColumnFilter_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function ColumnFilter_div_4_Template_div_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onContentClick());
    })("@overlayAnimation.start", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onOverlayAnimationEnd($event));
    })("keydown.escape", function ColumnFilter_div_4_Template_div_keydown_escape_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onEscape());
    });
    ɵɵtemplate(1, ColumnFilter_div_4_ng_container_1_Template, 1, 0, "ng-container", 16)(2, ColumnFilter_div_4_ul_2_Template, 5, 5, "ul", 17)(3, ColumnFilter_div_4_ng_template_3_Template, 7, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, ColumnFilter_div_4_ng_container_5_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const menu_r16 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("filterOverlay"))("id", ctx_r0.overlayId)("@overlayAnimation", "visible");
    ɵɵattribute("aria-modal", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c44, ctx_r0.field));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.display === "row")("ngIfElse", menu_r16);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c44, ctx_r0.field));
  }
}
var _c60 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => ({
  $implicit: a0,
  filterCallback: a1,
  type: a2,
  field: a3,
  filterConstraint: a4,
  placeholder: a5,
  minFractionDigits: a6,
  maxFractionDigits: a7,
  prefix: a8,
  suffix: a9,
  locale: a10,
  localeMatcher: a11,
  currency: a12,
  currencyDisplay: a13,
  useGrouping: a14,
  showButtons: a15
});
function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunctionV(2, _c60, [ctx_r0.filterConstraint.value, ctx_r0.filterCallback, ctx_r0.type, ctx_r0.field, ctx_r0.filterConstraint, ctx_r0.placeholder, ctx_r0.minFractionDigits, ctx_r0.maxFractionDigits, ctx_r0.prefix, ctx_r0.suffix, ctx_r0.locale, ctx_r0.localeMatcher, ctx_r0.currency, ctx_r0.currencyDisplay, ctx_r0.useGrouping, ctx_r0.showButtons]));
  }
}
function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 8);
    ɵɵlistener("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event.target.value));
    })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onTextInputEnterKeyDown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ariaLabel", ctx_r0.ariaLabel)("value", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
    ɵɵattribute("placeholder", ctx_r0.placeholder);
  }
}
function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-inputNumber", 9);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event));
    })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onNumericInputKeyDown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value)("showButtons", ctx_r0.showButtons)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("ariaLabel", ctx_r0.ariaLabel)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("placeholder", ctx_r0.placeholder)("mode", ctx_r0.currency ? "currency" : "decimal")("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping);
  }
}
function ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-checkbox", 10);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template_p_checkbox_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("indeterminate", true)("binary", true)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-datepicker", 11);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template_p_datepicker_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ariaLabel", ctx_r0.ariaLabel)("placeholder", ctx_r0.placeholder)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 3, "input", 4)(2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 14, "p-inputNumber", 5)(3, ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template, 1, 3, "p-checkbox", 6)(4, ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template, 1, 3, "p-datepicker", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r0.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "text");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "numeric");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "boolean");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "date");
  }
}
var TableService = class _TableService {
  sortSource = new Subject();
  selectionSource = new Subject();
  contextMenuSource = new Subject();
  valueSource = new Subject();
  totalRecordsSource = new Subject();
  columnsSource = new Subject();
  sortSource$ = this.sortSource.asObservable();
  selectionSource$ = this.selectionSource.asObservable();
  contextMenuSource$ = this.contextMenuSource.asObservable();
  valueSource$ = this.valueSource.asObservable();
  totalRecordsSource$ = this.totalRecordsSource.asObservable();
  columnsSource$ = this.columnsSource.asObservable();
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onContextMenu(data) {
    this.contextMenuSource.next(data);
  }
  onValueChange(value) {
    this.valueSource.next(value);
  }
  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }
  onColumnsChange(columns) {
    this.columnsSource.next(columns);
  }
  static ɵfac = function TableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TableService,
    factory: _TableService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableService, [{
    type: Injectable
  }], null, null);
})();
var Table = class _Table extends BaseComponent {
  /**
   * An array of objects to represent dynamic columns that are frozen.
   * @group Props
   */
  frozenColumns;
  /**
   * An array of objects to display as frozen.
   * @group Props
   */
  frozenValue;
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
   * Inline style of the table.
   * @group Props
   */
  tableStyle;
  /**
   * Style class of the table.
   * @group Props
   */
  tableStyleClass;
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Position of the paginator, options are "top", "bottom" or "both".
   * @group Props
   */
  paginatorPosition = "bottom";
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Sort order to use when an unsorted column gets sorted by user interaction.
   * @group Props
   */
  defaultSortOrder = 1;
  /**
   * Defines whether sorting works on single column or on multiple columns.
   * @group Props
   */
  sortMode = "single";
  /**
   * When true, resets paginator to first page after sorting. Available only when sortMode is set to single.
   * @group Props
   */
  resetPageOnSort = true;
  /**
   * Specifies the selection mode, valid values are "single" and "multiple".
   * @group Props
   */
  selectionMode;
  /**
   * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
   * @group Props
   */
  selectionPageOnly;
  /**
   * Selected row with a context menu.
   * @group Props
   */
  contextMenuSelection;
  /**
   * Callback to invoke on context menu selection change.
   * @param {*} object - row data.
   * @group Emits
   */
  contextMenuSelectionChange = new EventEmitter();
  /**
   *  Defines the behavior of context menu selection, in "separate" mode context menu updates contextMenuSelection property whereas in joint mode selection property is used instead so that when row selection is enabled, both row selection and context menu selection use the same property.
   * @group Props
   */
  contextMenuSelectionMode = "separate";
  /**
   * A property to uniquely identify a record in data.
   * @group Props
   */
  dataKey;
  /**
   * Defines whether metaKey should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Defines if the row is selectable.
   * @group Props
   */
  rowSelectable;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  rowTrackBy = (index, item) => item;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
   * @group Props
   */
  compareSelectionBy = "deepEquals";
  /**
   * Character to use as the csv separator.
   * @group Props
   */
  csvSeparator = ",";
  /**
   * Name of the exported file.
   * @group Props
   */
  exportFilename = "download";
  /**
   * An array of FilterMetadata objects to provide external filters.
   * @group Props
   */
  filters = {};
  /**
   * An array of fields as string to use in global filtering.
   * @group Props
   */
  globalFilterFields;
  /**
   * Delay in milliseconds before filtering the data.
   * @group Props
   */
  filterDelay = 300;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Map instance to keep the expanded rows where key of the map is the data key of the row.
   * @group Props
   */
  expandedRowKeys = {};
  /**
   * Map instance to keep the rows being edited where key of the map is the data key of the row.
   * @group Props
   */
  editingRowKeys = {};
  /**
   * Whether multiple rows can be expanded at any time. Valid values are "multiple" and "single".
   * @group Props
   */
  rowExpandMode = "multiple";
  /**
   * Enables scrollable tables.
   * @group Props
   */
  scrollable;
  /**
   * Orientation of the scrolling, options are "vertical", "horizontal" and "both".
   * @group Props
   * @deprecated Property is obselete since v14.2.0.
   */
  scrollDirection = "vertical";
  /**
   * Type of the row grouping, valid values are "subheader" and "rowspan".
   * @group Props
   */
  rowGroupMode;
  /**
   * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
   * @group Props
   */
  scrollHeight;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of a row to use in calculations of virtual scrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Threshold in milliseconds to delay lazy loading during scrolling.
   * @group Props
   */
  virtualScrollDelay = 250;
  /**
   * Width of the frozen columns container.
   * @group Props
   */
  frozenWidth;
  /**
   * Defines if the table is responsive.
   * @group Props
   * @deprecated table is always responsive with scrollable behavior.
   */
  get responsive() {
    return this._responsive;
  }
  set responsive(val) {
    this._responsive = val;
    console.log("responsive property is deprecated as table is always responsive with scrollable behavior.");
  }
  _responsive;
  /**
   * Local ng-template varilable of a ContextMenu.
   * @group Props
   */
  contextMenu;
  /**
   * When enabled, columns can be resized using drag and drop.
   * @group Props
   */
  resizableColumns;
  /**
   * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
   * @group Props
   */
  columnResizeMode = "fit";
  /**
   * When enabled, columns can be reordered using drag and drop.
   * @group Props
   */
  reorderableColumns;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to show the loading mask when loading property is true.
   * @group Props
   */
  showLoader = true;
  /**
   * Adds hover effect to rows without the need for selectionMode. Note that tr elements that can be hovered need to have "p-selectable-row" class for rowHover to work.
   * @group Props
   */
  rowHover;
  /**
   * Whether to use the default sorting or a custom one using sortFunction.
   * @group Props
   */
  customSort;
  /**
   * Whether to use the initial sort badge or not.
   * @group Props
   */
  showInitialSortBadge = true;
  /**
   * Whether the cell widths scale according to their content or not.  Deprecated:  Table layout is always "auto".
   * @group Props
   */
  autoLayout;
  /**
   * Export function.
   * @group Props
   */
  exportFunction;
  /**
   * Custom export header of the column to be exported as CSV.
   * @group Props
   */
  exportHeader;
  /**
   * Unique identifier of a stateful table to use in state storage.
   * @group Props
   */
  stateKey;
  /**
   * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.
   * @group Props
   */
  stateStorage = "session";
  /**
   * Defines the editing mode, valid values are "cell" and "row".
   * @group Props
   */
  editMode = "cell";
  /**
   * Field name to use in row grouping.
   * @group Props
   */
  groupRowsBy;
  /**
   * Defines the size of the table.
   * @group Props
   */
  size;
  /**
   * Whether to show grid lines between cells.
   * @group Props
   */
  showGridlines;
  /**
   * Whether to display rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * Order to sort when default row grouping is enabled.
   * @group Props
   */
  groupRowsByOrder = 1;
  /**
   * Defines the responsive mode, valid options are "stack" and "scroll".
   * @group Props
   */
  responsiveLayout = "scroll";
  /**
   * The breakpoint to define the maximum width boundary when using stack responsive layout.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Locale to be used in paginator formatting.
   * @group Props
   */
  paginatorLocale;
  /**
   * An array of objects to display.
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * An array of objects to represent dynamic columns.
   * @group Props
   */
  get columns() {
    return this._columns;
  }
  set columns(cols) {
    this._columns = cols;
  }
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  /**
   * Number of rows to display per page.
   * @group Props
   */
  get rows() {
    return this._rows;
  }
  set rows(val) {
    this._rows = val;
  }
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }
  /**
   * Name of the field to sort data by default.
   * @group Props
   */
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  /**
   * Order to sort when default sorting is enabled.
   * @group Props
   */
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode.
   * @group Props
   */
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  /**
   * Selected row in single mode or an array of values in multiple mode.
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  /**
   * Indicates the height of rows to be scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get virtualRowHeight() {
    return this._virtualRowHeight;
  }
  set virtualRowHeight(val) {
    this._virtualRowHeight = val;
    console.log("The virtualRowHeight property is deprecated.");
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selection;
  }
  set selectAll(val) {
    this._selection = val;
  }
  /**
   * Emits when the all of the items selected or unselected.
   * @param {TableSelectAllChangeEvent} event - custom  all selection change event.
   * @group Emits
   */
  selectAllChange = new EventEmitter();
  /**
   * Callback to invoke on selection changed.
   * @param {any | null} value - selected data.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a row is selected.
   * @param {TableRowSelectEvent} event - custom select event.
   * @group Emits
   */
  onRowSelect = new EventEmitter();
  /**
   * Callback to invoke when a row is unselected.
   * @param {TableRowUnSelectEvent} event - custom unselect event.
   * @group Emits
   */
  onRowUnselect = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {TablePageEvent} event - custom pagination event.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when a column gets sorted.
   * @param {Object} object - sort meta.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TableFilterEvent} event - custom filtering event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {TableLazyLoadEvent} event - custom lazy loading event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when a row is expanded.
   * @param {TableRowExpandEvent} event - custom row expand event.
   * @group Emits
   */
  onRowExpand = new EventEmitter();
  /**
   * Callback to invoke when a row is collapsed.
   * @param {TableRowCollapseEvent} event - custom row collapse event.
   * @group Emits
   */
  onRowCollapse = new EventEmitter();
  /**
   * Callback to invoke when a row is selected with right click.
   * @param {TableContextMenuSelectEvent} event - custom context menu select event.
   * @group Emits
   */
  onContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when a column is resized.
   * @param {TableColResizeEvent} event - custom column resize event.
   * @group Emits
   */
  onColResize = new EventEmitter();
  /**
   * Callback to invoke when a column is reordered.
   * @param {TableColumnReorderEvent} event - custom column reorder event.
   * @group Emits
   */
  onColReorder = new EventEmitter();
  /**
   * Callback to invoke when a row is reordered.
   * @param {TableRowReorderEvent} event - custom row reorder event.
   * @group Emits
   */
  onRowReorder = new EventEmitter();
  /**
   * Callback to invoke when a cell switches to edit mode.
   * @param {TableEditInitEvent} event - custom edit init event.
   * @group Emits
   */
  onEditInit = new EventEmitter();
  /**
   * Callback to invoke when cell edit is completed.
   * @param {TableEditCompleteEvent} event - custom edit complete event.
   * @group Emits
   */
  onEditComplete = new EventEmitter();
  /**
   * Callback to invoke when cell edit is cancelled with escape key.
   * @param {TableEditCancelEvent} event - custom edit cancel event.
   * @group Emits
   */
  onEditCancel = new EventEmitter();
  /**
   * Callback to invoke when state of header checkbox changes.
   * @param {TableHeaderCheckboxToggleEvent} event - custom header checkbox event.
   * @group Emits
   */
  onHeaderCheckboxToggle = new EventEmitter();
  /**
   * A function to implement custom sorting, refer to sorting section for details.
   * @param {any} any - sort meta.
   * @group Emits
   */
  sortFunction = new EventEmitter();
  /**
   * Callback to invoke on pagination.
   * @param {number} number - first element.
   * @group Emits
   */
  firstChange = new EventEmitter();
  /**
   * Callback to invoke on rows change.
   * @param {number} number - Row count.
   * @group Emits
   */
  rowsChange = new EventEmitter();
  /**
   * Callback to invoke table state is saved.
   * @param {TableState} object - table state.
   * @group Emits
   */
  onStateSave = new EventEmitter();
  /**
   * Callback to invoke table state is restored.
   * @param {TableState} object - table state.
   * @group Emits
   */
  onStateRestore = new EventEmitter();
  containerViewChild;
  resizeHelperViewChild;
  reorderIndicatorUpViewChild;
  reorderIndicatorDownViewChild;
  wrapperViewChild;
  tableViewChild;
  tableHeaderViewChild;
  tableFooterViewChild;
  scroller;
  _templates;
  _virtualRowHeight = 28;
  _value = [];
  _columns;
  _totalRecords = 0;
  _first = 0;
  _rows;
  filteredValue;
  // @todo will be refactored later
  _headerTemplate;
  headerTemplate;
  _headerGroupedTemplate;
  headerGroupedTemplate;
  _bodyTemplate;
  bodyTemplate;
  _loadingBodyTemplate;
  loadingBodyTemplate;
  _captionTemplate;
  captionTemplate;
  _footerTemplate;
  footerTemplate;
  _footerGroupedTemplate;
  footerGroupedTemplate;
  _summaryTemplate;
  summaryTemplate;
  _colGroupTemplate;
  colGroupTemplate;
  _expandedRowTemplate;
  expandedRowTemplate;
  _groupHeaderTemplate;
  groupHeaderTemplate;
  _groupFooterTemplate;
  groupFooterTemplate;
  _frozenExpandedRowTemplate;
  frozenExpandedRowTemplate;
  _frozenHeaderTemplate;
  frozenHeaderTemplate;
  _frozenBodyTemplate;
  frozenBodyTemplate;
  _frozenFooterTemplate;
  frozenFooterTemplate;
  _frozenColGroupTemplate;
  frozenColGroupTemplate;
  _emptyMessageTemplate;
  emptyMessageTemplate;
  _paginatorLeftTemplate;
  paginatorLeftTemplate;
  _paginatorRightTemplate;
  paginatorRightTemplate;
  _paginatorDropdownItemTemplate;
  paginatorDropdownItemTemplate;
  _loadingIconTemplate;
  loadingIconTemplate;
  _reorderIndicatorUpIconTemplate;
  reorderIndicatorUpIconTemplate;
  _reorderIndicatorDownIconTemplate;
  reorderIndicatorDownIconTemplate;
  _sortIconTemplate;
  sortIconTemplate;
  _checkboxIconTemplate;
  checkboxIconTemplate;
  _headerCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  _paginatorDropdownIconTemplate;
  paginatorDropdownIconTemplate;
  _paginatorFirstPageLinkIconTemplate;
  paginatorFirstPageLinkIconTemplate;
  _paginatorLastPageLinkIconTemplate;
  paginatorLastPageLinkIconTemplate;
  _paginatorPreviousPageLinkIconTemplate;
  paginatorPreviousPageLinkIconTemplate;
  _paginatorNextPageLinkIconTemplate;
  paginatorNextPageLinkIconTemplate;
  selectionKeys = {};
  lastResizerHelperX;
  reorderIconWidth;
  reorderIconHeight;
  draggedColumn;
  draggedRowIndex;
  droppedRowIndex;
  rowDragging;
  dropPosition;
  editingCell;
  editingCellData;
  editingCellField;
  editingCellRowIndex;
  selfClick;
  documentEditListener;
  _multiSortMeta;
  _sortField;
  _sortOrder = 1;
  preventSelectionSetterPropagation;
  _selection;
  _selectAll = null;
  anchorRowIndex;
  rangeRowIndex;
  filterTimeout;
  initialized;
  rowTouched;
  restoringSort;
  restoringFilter;
  stateRestored;
  columnOrderStateRestored;
  columnWidthsState;
  tableWidthState;
  overlaySubscription;
  resizeColumnElement;
  columnResizing = false;
  rowGroupHeaderStyleObject = {};
  id = UniqueComponentId();
  styleElement;
  responsiveStyleElement;
  overlayService = inject(OverlayService);
  filterService = inject(FilterService);
  tableService = inject(TableService);
  zone = inject(NgZone);
  _componentStyle = inject(TableStyle);
  ngOnInit() {
    super.ngOnInit();
    if (this.lazy && this.lazyLoadOnInit) {
      if (!this.virtualScroll) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }
      if (this.restoringFilter) {
        this.restoringFilter = false;
      }
    }
    if (this.responsiveLayout === "stack") {
      this.createResponsiveStyle();
    }
    this.initialized = true;
  }
  ngAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "caption":
          this.captionTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "headergrouped":
          this.headerGroupedTemplate = item.template;
          break;
        case "body":
          this.bodyTemplate = item.template;
          break;
        case "loadingbody":
          this.loadingBodyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "footergrouped":
          this.footerGroupedTemplate = item.template;
          break;
        case "summary":
          this.summaryTemplate = item.template;
          break;
        case "colgroup":
          this.colGroupTemplate = item.template;
          break;
        case "rowexpansion":
          this.expandedRowTemplate = item.template;
          break;
        case "groupheader":
          this.groupHeaderTemplate = item.template;
          break;
        case "groupfooter":
          this.groupFooterTemplate = item.template;
          break;
        case "frozenheader":
          this.frozenHeaderTemplate = item.template;
          break;
        case "frozenbody":
          this.frozenBodyTemplate = item.template;
          break;
        case "frozenfooter":
          this.frozenFooterTemplate = item.template;
          break;
        case "frozencolgroup":
          this.frozenColGroupTemplate = item.template;
          break;
        case "frozenrowexpansion":
          this.frozenExpandedRowTemplate = item.template;
          break;
        case "emptymessage":
          this.emptyMessageTemplate = item.template;
          break;
        case "paginatorleft":
          this.paginatorLeftTemplate = item.template;
          break;
        case "paginatorright":
          this.paginatorRightTemplate = item.template;
          break;
        case "paginatordropdownicon":
          this.paginatorDropdownIconTemplate = item.template;
          break;
        case "paginatordropdownitem":
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case "paginatorfirstpagelinkicon":
          this.paginatorFirstPageLinkIconTemplate = item.template;
          break;
        case "paginatorlastpagelinkicon":
          this.paginatorLastPageLinkIconTemplate = item.template;
          break;
        case "paginatorpreviouspagelinkicon":
          this.paginatorPreviousPageLinkIconTemplate = item.template;
          break;
        case "paginatornextpagelinkicon":
          this.paginatorNextPageLinkIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "reorderindicatorupicon":
          this.reorderIndicatorUpIconTemplate = item.template;
          break;
        case "reorderindicatordownicon":
          this.reorderIndicatorDownIconTemplate = item.template;
          break;
        case "sorticon":
          this.sortIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "headercheckboxicon":
          this.headerCheckboxIconTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      if (this.isStateful() && this.resizableColumns) {
        this.restoreColumnWidths();
      }
    }
  }
  ngOnChanges(simpleChange) {
    super.ngOnChanges(simpleChange);
    if (simpleChange.value) {
      if (this.isStateful() && !this.stateRestored && isPlatformBrowser(this.platformId)) {
        this.restoreState();
      }
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == "single" && (this.sortField || this.groupRowsBy)) this.sortSingle();
        else if (this.sortMode == "multiple" && (this.multiSortMeta || this.groupRowsBy)) this.sortMultiple();
        else if (this.hasFilter())
          this._filter();
      }
      this.tableService.onValueChange(simpleChange.value.currentValue);
    }
    if (simpleChange.columns) {
      if (!this.isStateful()) {
        this._columns = simpleChange.columns.currentValue;
        this.tableService.onColumnsChange(simpleChange.columns.currentValue);
      }
      if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
        this.restoreColumnOrder();
        this.tableService.onColumnsChange(this._columns);
      }
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsBy) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsByOrder) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === "multiple" && (this.initialized || !this.lazy && !this.virtualScroll)) {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
    if (simpleChange.selectAll) {
      this._selectAll = simpleChange.selectAll.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
          this.saveState();
        }
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  get processedData() {
    return this.filteredValue || this.value || [];
  }
  _initialColWidths;
  dataToRender(data) {
    const _data = data || this.processedData;
    if (_data && this.paginator) {
      const first = this.lazy ? 0 : this.first;
      return _data.slice(first, first + this.rows);
    }
    return _data;
  }
  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};
      if (Array.isArray(this._selection)) {
        for (let data of this._selection) {
          this.selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.selectionKeys[String(ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.firstChange.emit(this.first);
    this.rowsChange.emit(this.rows);
    this.tableService.onValueChange(this.value);
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event) {
    let originalEvent = event.originalEvent;
    if (this.sortMode === "single") {
      this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event.field;
      if (this.resetPageOnSort) {
        this._first = 0;
        this.firstChange.emit(this._first);
        if (this.scrollable) {
          this.resetScrollTop();
        }
      }
      this.sortSingle();
    }
    if (this.sortMode === "multiple") {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
            if (this.scrollable) {
              this.resetScrollTop();
            }
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
          }
        }
        this._multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
  }
  sortSingle() {
    let field = this.sortField || this.groupRowsBy;
    let order = this.sortField ? this.sortOrder : this.groupRowsByOrder;
    if (this.groupRowsBy && this.sortField && this.groupRowsBy !== this.sortField) {
      this._multiSortMeta = [this.getGroupRowsMeta(), {
        field: this.sortField,
        order: this.sortOrder
      }];
      this.sortMultiple();
      return;
    }
    if (field && order) {
      if (this.restoringSort) {
        this.restoringSort = false;
      }
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            field,
            order
          });
        } else {
          this.value.sort((data1, data2) => {
            let value1 = ObjectUtils.resolveFieldData(data1, field);
            let value2 = ObjectUtils.resolveFieldData(data2, field);
            let result = null;
            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * result;
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field,
        order
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }
  sortMultiple() {
    if (this.groupRowsBy) {
      if (!this._multiSortMeta) this._multiSortMeta = [this.getGroupRowsMeta()];
      else if (this.multiSortMeta[0].field !== this.groupRowsBy) this._multiSortMeta = [this.getGroupRowsMeta(), ...this._multiSortMeta];
    }
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            multiSortMeta: this.multiSortMeta
          });
        } else {
          this.value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.multiSortMeta, 0);
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  multisortField(data1, data2, multiSortMeta, index) {
    const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
    if (ObjectUtils.compare(value1, value2, this.filterLocale) === 0) {
      return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    }
    return this.compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  }
  compareValuesOnSort(value1, value2, order) {
    return ObjectUtils.sort(value1, value2, order, this.filterLocale, this.sortOrder);
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === "single") {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === "multiple") {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  handleRowClick(event) {
    let target = event.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;
    if (targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || parentNode == "INPUT" || parentNode == "BUTTON" || parentNode == "A" || DomHandler.hasClass(event.originalEvent.target, "p-clickable")) {
      return;
    }
    if (this.selectionMode) {
      let rowData = event.rowData;
      let rowIndex = event.rowIndex;
      this.preventSelectionSetterPropagation = true;
      if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
        DomHandler.clearSelection();
        if (this.rangeRowIndex != null) {
          this.clearSelectionRange(event.originalEvent);
        }
        this.rangeRowIndex = rowIndex;
        this.selectRange(event.originalEvent, rowIndex);
      } else {
        let selected = this.isSelected(rowData);
        if (!selected && !this.isRowSelectable(rowData, rowIndex)) {
          return;
        }
        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.anchorRowIndex = rowIndex;
        this.rangeRowIndex = rowIndex;
        if (metaSelection) {
          let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row"
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowData;
              this.selectionChange.emit(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }
              this._selection = [...this.selection, rowData];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
          }
        } else {
          if (this.selectionMode === "single") {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
            } else {
              this._selection = rowData;
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === "multiple") {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection ? [...this.selection, rowData] : [rowData];
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }
  handleRowRightClick(event) {
    if (this.contextMenu) {
      const rowData = event.rowData;
      const rowIndex = event.rowIndex;
      if (this.contextMenuSelectionMode === "separate") {
        this.contextMenuSelection = rowData;
        this.contextMenuSelectionChange.emit(rowData);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.rowIndex
        });
        this.contextMenu.show(event.originalEvent);
        this.tableService.onContextMenu(rowData);
      } else if (this.contextMenuSelectionMode === "joint") {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        if (!selected) {
          if (!this.isRowSelectable(rowData, rowIndex)) {
            return;
          }
          if (this.isSingleSelectionMode()) {
            this.selection = rowData;
            this.selectionChange.emit(rowData);
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        }
        this.tableService.onSelectionChange();
        this.contextMenu.show(event.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event,
          data: rowData,
          index: event.rowIndex
        });
      }
    }
  }
  selectRange(event, rowIndex) {
    let rangeStart, rangeEnd;
    if (this.anchorRowIndex > rowIndex) {
      rangeStart = rowIndex;
      rangeEnd = this.anchorRowIndex;
    } else if (this.anchorRowIndex < rowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = rowIndex;
    } else {
      rangeStart = rowIndex;
      rangeEnd = rowIndex;
    }
    if (this.lazy && this.paginator) {
      rangeStart -= this.first;
      rangeEnd -= this.first;
    }
    let rangeRowsData = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
      if (!this.isSelected(rangeRowData)) {
        if (!this.isRowSelectable(rangeRowData, rowIndex)) {
          continue;
        }
        rangeRowsData.push(rangeRowData);
        this._selection = [...this.selection, rangeRowData];
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      }
    }
    this.selectionChange.emit(this.selection);
    this.onRowSelect.emit({
      originalEvent: event,
      data: rangeRowsData,
      type: "row"
    });
  }
  clearSelectionRange(event) {
    let rangeStart, rangeEnd;
    let rangeRowIndex = this.rangeRowIndex;
    let anchorRowIndex = this.anchorRowIndex;
    if (rangeRowIndex > anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (rangeRowIndex < anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      this._selection = this.selection.filter((val, i2) => i2 != selectionIndex);
      let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
      this.onRowUnselect.emit({
        originalEvent: event,
        data: rangeRowData,
        type: "row"
      });
    }
  }
  isSelected(rowData) {
    if (rowData && this.selection) {
      if (this.dataKey) {
        return this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0;
      } else {
        if (Array.isArray(this.selection)) return this.findIndexInSelection(rowData) > -1;
        else return this.equals(rowData, this.selection);
      }
    }
    return false;
  }
  findIndexInSelection(rowData) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(rowData, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isRowSelectable(data, index) {
    if (this.rowSelectable && !this.rowSelectable({
      data,
      index
    })) {
      return false;
    }
    return true;
  }
  toggleRowWithRadio(event, rowData) {
    this.preventSelectionSetterPropagation = true;
    if (this.selection != rowData) {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }
      this._selection = rowData;
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
      if (this.dataKey) {
        this.selectionKeys = {};
        this.selectionKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
      }
    } else {
      this._selection = null;
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowWithCheckbox(event, rowData) {
    this.selection = this.selection || [];
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
    this.preventSelectionSetterPropagation = true;
    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    } else {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }
      this._selection = this.selection ? [...this.selection, rowData] : [rowData];
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowsWithCheckbox(event, check) {
    if (this._selectAll !== null) {
      this.selectAllChange.emit({
        originalEvent: event,
        checked: check
      });
    } else {
      const data = this.selectionPageOnly ? this.dataToRender(this.processedData) : this.processedData;
      let selection = this.selectionPageOnly && this._selection ? this._selection.filter((s) => !data.some((d) => this.equals(s, d))) : [];
      if (check) {
        selection = this.frozenValue ? [...selection, ...this.frozenValue, ...data] : [...selection, ...data];
        selection = this.rowSelectable ? selection.filter((data2, index) => this.rowSelectable({
          data: data2,
          index
        })) : selection;
      }
      this._selection = selection;
      this.preventSelectionSetterPropagation = true;
      this.updateSelectionKeys();
      this.selectionChange.emit(this._selection);
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent: event,
        checked: check
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
  }
  equals(data1, data2) {
    return this.compareSelectionBy === "equals" ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
  }
  /* Legacy Filtering for custom elements */
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value,
        matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
    this.anchorRowIndex = null;
  }
  filterGlobal(value, matchMode) {
    this.filter(value, "global", matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== void 0) {
      if (typeof filter === "string" && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;
      else return false;
    }
    return true;
  }
  _filter() {
    if (!this.restoringFilter) {
      this.first = 0;
      this.firstChange.emit(this.first);
    }
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredValue = null;
        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters["global"]) {
          if (!this.columns && !this.globalFilterFields) throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");
          else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredValue = [];
        for (let i = 0; i < this.value.length; i++) {
          let localMatch = true;
          let globalMatch = false;
          let localFiltered = false;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== "global") {
              localFiltered = true;
              let filterField = prop;
              let filterMeta = this.filters[filterField];
              if (Array.isArray(filterMeta)) {
                for (let meta of filterMeta) {
                  localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
                  if (meta.operator === FilterOperator.OR && localMatch || meta.operator === FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } else {
                localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) {
            for (let j = 0; j < globalFilterFieldsArray.length; j++) {
              let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
              globalMatch = this.filterService.filters[this.filters["global"].matchMode](ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters["global"].value, this.filterLocale);
              if (globalMatch) {
                break;
              }
            }
          }
          let matches;
          if (this.filters["global"]) {
            matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
          } else {
            matches = localFiltered && localMatch;
          }
          if (matches) {
            this.filteredValue.push(this.value[i]);
          }
        }
        if (this.filteredValue.length === this.value.length) {
          this.filteredValue = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
      }
    }
    this.onFilter.emit({
      filters: this.filters,
      filteredValue: this.filteredValue || this.value
    });
    this.tableService.onValueChange(this.value);
    if (this.isStateful() && !this.restoringFilter) {
      this.saveState();
    }
    if (this.restoringFilter) {
      this.restoringFilter = false;
    }
    this.cd.markForCheck();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  executeLocalFilter(field, rowData, filterMeta) {
    let filterValue = filterMeta.value;
    let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
    let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
    let filterConstraint = this.filterService.filters[filterMatchMode];
    return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters["global"] ? this.filters["global"].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  clear() {
    this._sortField = null;
    this._sortOrder = this.defaultSortOrder;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    this.clearFilterValues();
    this.filteredValue = null;
    this.first = 0;
    this.firstChange.emit(this.first);
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }
  clearFilterValues() {
    for (const [, filterMetadata] of Object.entries(this.filters)) {
      if (Array.isArray(filterMetadata)) {
        for (let filter of filterMetadata) {
          filter.value = null;
        }
      } else if (filterMetadata) {
        filterMetadata.value = null;
      }
    }
  }
  reset() {
    this.clear();
  }
  getExportHeader(column) {
    return column[this.exportHeader] || column.header || column.field;
  }
  /**
   * Data export method.
   * @param {ExportCSVOptions} object - Export options.
   * @group Method
   */
  exportCSV(options) {
    let data;
    let csv = "";
    let columns = this.columns;
    if (options && options.selectionOnly) {
      data = this.selection || [];
    } else if (options && options.allValues) {
      data = this.value || [];
    } else {
      data = this.filteredValue || this.value;
      if (this.frozenValue) {
        data = data ? [...this.frozenValue, ...data] : this.frozenValue;
      }
    }
    const exportableColumns = columns.filter((column) => column.exportable !== false && column.field);
    csv += exportableColumns.map((column) => '"' + this.getExportHeader(column) + '"').join(this.csvSeparator);
    const body = data.map((record) => exportableColumns.map((column) => {
      let cellData = ObjectUtils.resolveFieldData(record, column.field);
      if (cellData != null) {
        if (this.exportFunction) {
          cellData = this.exportFunction({
            data: cellData,
            field: column.field
          });
        } else cellData = String(cellData).replace(/"/g, '""');
      } else cellData = "";
      return '"' + cellData + '"';
    }).join(this.csvSeparator)).join("\n");
    if (body.length) {
      csv += "\n" + body;
    }
    let blob = new Blob([new Uint8Array([239, 187, 191]), csv], {
      type: "text/csv;charset=utf-8;"
    });
    let link = this.renderer.createElement("a");
    link.style.display = "none";
    this.renderer.appendChild(this.document.body, link);
    if (link.download !== void 0) {
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", this.exportFilename + ".csv");
      link.click();
    } else {
      csv = "data:text/csv;charset=utf-8," + csv;
      this.document.defaultView.open(encodeURI(csv));
    }
    this.renderer.removeChild(this.document.body, link);
  }
  onLazyItemLoad(event) {
    this.onLazyLoad.emit(__spreadProps(__spreadValues(__spreadValues({}, this.createLazyLoadMetadata()), event), {
      rows: event.last - event.first
    }));
  }
  /**
   * Resets scroll to top.
   * @group Method
   */
  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);
    else this.scrollTo({
      top: 0
    });
  }
  /**
   * Scrolls to given index when using virtual scroll.
   * @param {number} index - index of the element.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.scroller && this.scroller.scrollToIndex(index);
  }
  /**
   * Scrolls to given index.
   * @param {ScrollToOptions} options - scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  updateEditingCell(cell, data, field, index) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.editingCellRowIndex = index;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && DomHandler.find(this.editingCell, ".ng-invalid.ng-dirty").length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = this.renderer.listen(this.document, "click", (event) => {
        if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
          DomHandler.removeClass(this.editingCell, "p-cell-editing");
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData,
            originalEvent: event,
            index: this.editingCellRowIndex
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.editingCellRowIndex = null;
          this.unbindDocumentEditListener();
          this.cd.markForCheck();
          if (this.overlaySubscription) {
            this.overlaySubscription.unsubscribe();
          }
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  initRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    this.editingRowKeys[dataKeyValue] = true;
  }
  saveRowEdit(rowData, rowElement) {
    if (DomHandler.find(rowElement, ".ng-invalid.ng-dirty").length === 0) {
      let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
      delete this.editingRowKeys[dataKeyValue];
    }
  }
  cancelRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    delete this.editingRowKeys[dataKeyValue];
  }
  toggleRow(rowData, event) {
    if (!this.dataKey && !this.groupRowsBy) {
      throw new Error("dataKey or groupRowsBy must be defined to use row expansion");
    }
    let dataKeyValue = this.groupRowsBy ? String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy)) : String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    if (this.expandedRowKeys[dataKeyValue] != null) {
      delete this.expandedRowKeys[dataKeyValue];
      this.onRowCollapse.emit({
        originalEvent: event,
        data: rowData
      });
    } else {
      if (this.rowExpandMode === "single") {
        this.expandedRowKeys = {};
      }
      this.expandedRowKeys[dataKeyValue] = true;
      this.onRowExpand.emit({
        originalEvent: event,
        data: rowData
      });
    }
    if (event) {
      event.preventDefault();
    }
    if (this.isStateful()) {
      this.saveState();
    }
  }
  isRowExpanded(rowData) {
    return this.groupRowsBy ? this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy))] === true : this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isRowEditing(rowData) {
    return this.editingRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isSingleSelectionMode() {
    return this.selectionMode === "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode === "multiple";
  }
  onColumnResizeBegin(event) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    this.resizeColumnElement = event.target.parentElement;
    this.columnResizing = true;
    if (event.type == "touchstart") {
      this.lastResizerHelperX = event.changedTouches[0].clientX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
    } else {
      this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
    }
    this.onColumnResize(event);
    event.preventDefault();
  }
  onColumnResize(event) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
    DomHandler.addClass(this.containerViewChild?.nativeElement, "p-unselectable-text");
    this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild?.nativeElement.offsetHeight + "px";
    this.resizeHelperViewChild.nativeElement.style.top = "0px";
    if (event.type == "touchmove") {
      this.resizeHelperViewChild.nativeElement.style.left = event.changedTouches[0].clientX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + "px";
    } else {
      this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + "px";
    }
    this.resizeHelperViewChild.nativeElement.style.display = "block";
  }
  onColumnResizeEnd() {
    let delta = this.resizeHelperViewChild?.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = this.resizeColumnElement.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g, "") || 15;
    if (newColumnWidth >= minWidth) {
      if (this.columnResizeMode === "fit") {
        let nextColumn = this.resizeColumnElement.nextElementSibling;
        let nextColumnWidth = nextColumn.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          this.resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (this.columnResizeMode === "expand") {
        this._initialColWidths = this._totalTableWidth();
        let tableWidth = this.tableViewChild?.nativeElement.offsetWidth + delta;
        this.setResizeTableWidth(tableWidth + "px");
        this.resizeTableCells(newColumnWidth, null);
      }
      this.onColResize.emit({
        element: this.resizeColumnElement,
        delta
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.resizeHelperViewChild.nativeElement.style.display = "none";
    DomHandler.removeClass(this.containerViewChild?.nativeElement, "p-unselectable-text");
  }
  _totalTableWidth() {
    let widths = [];
    const tableHead = DomHandler.findSingle(this.containerViewChild.nativeElement, ".p-datatable-thead");
    let headers = DomHandler.find(tableHead, "tr > th");
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    return widths;
  }
  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
    this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData("text", "b");
  }
  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = DomHandler.getOffset(this.containerViewChild?.nativeElement);
      let dropHeaderOffset = DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
        let dropIndex = DomHandler.indexWithinGroup(dropHeader, "preorderablecolumn");
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + "px";
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = "block";
        this.reorderIndicatorDownViewChild.nativeElement.style.display = "block";
      } else {
        event.dataTransfer.dropEffect = "none";
      }
    }
  }
  onColumnDragLeave(event) {
    if (this.reorderableColumns && this.draggedColumn) {
      event.preventDefault();
    }
  }
  onColumnDrop(event, dropColumn) {
    event.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
      let dropIndex = DomHandler.indexWithinGroup(dropColumn, "preorderablecolumn");
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex,
          dropIndex,
          columns: this.columns
        });
        if (this.isStateful()) {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              this.saveState();
            });
          });
        }
      }
      if (this.resizableColumns && this.resizeColumnElement) {
        let width = this.columnResizeMode === "expand" ? this._initialColWidths : this._totalTableWidth();
        ObjectUtils.reorderArray(width, dragIndex + 1, dropIndex + 1);
        this.updateStyleElement(width, dragIndex, null, null);
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  resizeTableCells(newColumnWidth, nextColumnWidth) {
    let colIndex = DomHandler.index(this.resizeColumnElement);
    let width = this.columnResizeMode === "expand" ? this._initialColWidths : this._totalTableWidth();
    this.updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth);
  }
  updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth) {
    this.destroyStyleElement();
    this.createStyleElement();
    let innerHTML = "";
    width.forEach((width2, index) => {
      let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width2;
      let style2 = `width: ${colWidth}px !important; max-width: ${colWidth}px !important;`;
      innerHTML += `
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style2}
                }
            `;
    });
    this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
  }
  onRowDragStart(event, index) {
    this.rowDragging = true;
    this.draggedRowIndex = index;
    event.dataTransfer.setData("text", "b");
  }
  onRowDragOver(event, index, rowElement) {
    if (this.rowDragging && this.draggedRowIndex !== index) {
      let rowY = DomHandler.getOffset(rowElement).top;
      let pageY = event.pageY;
      let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
      let prevRowElement = rowElement.previousElementSibling;
      if (pageY < rowMidY) {
        DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
        this.droppedRowIndex = index;
        if (prevRowElement) DomHandler.addClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
      } else {
        if (prevRowElement) DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
        this.droppedRowIndex = index + 1;
        DomHandler.addClass(rowElement, "p-datatable-dragpoint-bottom");
      }
    }
  }
  onRowDragLeave(event, rowElement) {
    let prevRowElement = rowElement.previousElementSibling;
    if (prevRowElement) {
      DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
    }
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-top");
  }
  onRowDragEnd(event) {
    this.rowDragging = false;
    this.draggedRowIndex = null;
    this.droppedRowIndex = null;
  }
  onRowDrop(event, rowElement) {
    if (this.droppedRowIndex != null) {
      let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
      ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
      if (this.virtualScroll) {
        this._value = [...this._value];
      }
      this.onRowReorder.emit({
        dragIndex: this.draggedRowIndex,
        dropIndex
      });
    }
    this.onRowDragLeave(event, rowElement);
    this.onRowDragEnd(event);
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  getStorage() {
    if (isPlatformBrowser(this.platformId)) {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    } else {
      throw new Error("Browser storage is not available in the server side.");
    }
  }
  isStateful() {
    return this.stateKey != null;
  }
  saveState() {
    const storage = this.getStorage();
    let state = {};
    if (this.paginator) {
      state.first = this.first;
      state.rows = this.rows;
    }
    if (this.sortField) {
      state.sortField = this.sortField;
      state.sortOrder = this.sortOrder;
    }
    if (this.multiSortMeta) {
      state.multiSortMeta = this.multiSortMeta;
    }
    if (this.hasFilter()) {
      state.filters = this.filters;
    }
    if (this.resizableColumns) {
      this.saveColumnWidths(state);
    }
    if (this.reorderableColumns) {
      this.saveColumnOrder(state);
    }
    if (this.selection) {
      state.selection = this.selection;
    }
    if (Object.keys(this.expandedRowKeys).length) {
      state.expandedRowKeys = this.expandedRowKeys;
    }
    storage.setItem(this.stateKey, JSON.stringify(state));
    this.onStateSave.emit(state);
  }
  clearState() {
    const storage = this.getStorage();
    if (this.stateKey) {
      storage.removeItem(this.stateKey);
    }
  }
  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = function(key, value) {
      if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
      }
      return value;
    };
    if (stateString) {
      let state = JSON.parse(stateString, reviver);
      if (this.paginator) {
        if (this.first !== void 0) {
          this.first = state.first;
          this.firstChange.emit(this.first);
        }
        if (this.rows !== void 0) {
          this.rows = state.rows;
          this.rowsChange.emit(this.rows);
        }
      }
      if (state.sortField) {
        this.restoringSort = true;
        this._sortField = state.sortField;
        this._sortOrder = state.sortOrder;
      }
      if (state.multiSortMeta) {
        this.restoringSort = true;
        this._multiSortMeta = state.multiSortMeta;
      }
      if (state.filters) {
        this.restoringFilter = true;
        this.filters = state.filters;
      }
      if (this.resizableColumns) {
        this.columnWidthsState = state.columnWidths;
        this.tableWidthState = state.tableWidth;
      }
      if (state.expandedRowKeys) {
        this.expandedRowKeys = state.expandedRowKeys;
      }
      if (state.selection) {
        Promise.resolve(null).then(() => this.selectionChange.emit(state.selection));
      }
      this.stateRestored = true;
      this.onStateRestore.emit(state);
    }
  }
  saveColumnWidths(state) {
    let widths = [];
    let headers = DomHandler.find(this.containerViewChild?.nativeElement, ".p-datatable-thead > tr > th");
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    state.columnWidths = widths.join(",");
    if (this.columnResizeMode === "expand") {
      state.tableWidth = DomHandler.getOuterWidth(this.tableViewChild?.nativeElement);
    }
  }
  setResizeTableWidth(width) {
    this.tableViewChild.nativeElement.style.width = width;
    this.tableViewChild.nativeElement.style.minWidth = width;
  }
  restoreColumnWidths() {
    if (this.columnWidthsState) {
      let widths = this.columnWidthsState.split(",");
      if (this.columnResizeMode === "expand" && this.tableWidthState) {
        this.setResizeTableWidth(this.tableWidthState + "px");
      }
      if (ObjectUtils.isNotEmpty(widths)) {
        this.createStyleElement();
        let innerHTML = "";
        widths.forEach((width, index) => {
          let style2 = `width: ${width}px !important; max-width: ${width}px !important`;
          innerHTML += `
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style2}
                        }
                    `;
        });
        this.styleElement.innerHTML = innerHTML;
      }
    }
  }
  saveColumnOrder(state) {
    if (this.columns) {
      let columnOrder = [];
      this.columns.map((column) => {
        columnOrder.push(column.field || column.key);
      });
      state.columnOrder = columnOrder;
    }
  }
  restoreColumnOrder() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    if (stateString) {
      let state = JSON.parse(stateString);
      let columnOrder = state.columnOrder;
      if (columnOrder) {
        let reorderedColumns = [];
        columnOrder.map((key) => {
          let col = this.findColumnByKey(key);
          if (col) {
            reorderedColumns.push(col);
          }
        });
        this.columnOrderStateRestored = true;
        this.columns = reorderedColumns;
      }
    }
  }
  findColumnByKey(key) {
    if (this.columns) {
      for (let col of this.columns) {
        if (col.key === key || col.field === key) return col;
        else continue;
      }
    } else {
      return null;
    }
  }
  createStyleElement() {
    this.styleElement = this.renderer.createElement("style");
    this.styleElement.type = "text/css";
    this.renderer.appendChild(this.document.head, this.styleElement);
    DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
  }
  getGroupRowsMeta() {
    return {
      field: this.groupRowsBy,
      order: this.groupRowsByOrder
    };
  }
  createResponsiveStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        this.renderer.appendChild(this.document.head, this.responsiveStyleElement);
        let innerHTML = `
    @media screen and (max-width: ${this.breakpoint}) {
        #${this.id}-table > .p-datatable-thead > tr > th,
        #${this.id}-table > .p-datatable-tfoot > tr > td {
            display: none !important;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td {
            display: flex;
            width: 100% !important;
            align-items: center;
            justify-content: space-between;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
            border: 0 none;
        }

        #${this.id}.p-datatable-gridlines > .p-datatable-table-container > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td > .p-datatable-column-title {
            display: block;
        }
    }
    `;
        this.renderer.setProperty(this.responsiveStyleElement, "innerHTML", innerHTML);
      }
    }
  }
  destroyResponsiveStyle() {
    if (this.responsiveStyleElement) {
      this.renderer.removeChild(this.document.head, this.responsiveStyleElement);
      this.responsiveStyleElement = null;
    }
  }
  destroyStyleElement() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.initialized = null;
    this.destroyStyleElement();
    this.destroyResponsiveStyle();
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTable_BaseFactory;
    return function Table_Factory(__ngFactoryType__) {
      return (ɵTable_BaseFactory || (ɵTable_BaseFactory = ɵɵgetInheritedFactory(_Table)))(__ngFactoryType__ || _Table);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Table,
    selectors: [["p-table"]],
    contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c04, 4);
        ɵɵcontentQuery(dirIndex, _c14, 4);
        ɵɵcontentQuery(dirIndex, _c23, 4);
        ɵɵcontentQuery(dirIndex, _c33, 4);
        ɵɵcontentQuery(dirIndex, _c42, 4);
        ɵɵcontentQuery(dirIndex, _c52, 4);
        ɵɵcontentQuery(dirIndex, _c62, 4);
        ɵɵcontentQuery(dirIndex, _c72, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, _c10, 4);
        ɵɵcontentQuery(dirIndex, _c11, 4);
        ɵɵcontentQuery(dirIndex, _c122, 4);
        ɵɵcontentQuery(dirIndex, _c132, 4);
        ɵɵcontentQuery(dirIndex, _c142, 4);
        ɵɵcontentQuery(dirIndex, _c15, 4);
        ɵɵcontentQuery(dirIndex, _c16, 4);
        ɵɵcontentQuery(dirIndex, _c17, 4);
        ɵɵcontentQuery(dirIndex, _c18, 4);
        ɵɵcontentQuery(dirIndex, _c19, 4);
        ɵɵcontentQuery(dirIndex, _c20, 4);
        ɵɵcontentQuery(dirIndex, _c21, 4);
        ɵɵcontentQuery(dirIndex, _c222, 4);
        ɵɵcontentQuery(dirIndex, _c232, 4);
        ɵɵcontentQuery(dirIndex, _c24, 4);
        ɵɵcontentQuery(dirIndex, _c25, 4);
        ɵɵcontentQuery(dirIndex, _c26, 4);
        ɵɵcontentQuery(dirIndex, _c27, 4);
        ɵɵcontentQuery(dirIndex, _c28, 4);
        ɵɵcontentQuery(dirIndex, _c29, 4);
        ɵɵcontentQuery(dirIndex, _c30, 4);
        ɵɵcontentQuery(dirIndex, _c31, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._headerGroupedTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._bodyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._loadingBodyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._captionTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._footerGroupedTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._summaryTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._colGroupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._expandedRowTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._groupHeaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._groupFooterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._frozenExpandedRowTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._frozenHeaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._frozenBodyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._frozenFooterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._frozenColGroupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._emptyMessageTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorLeftTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorRightTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorDropdownItemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._loadingIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._reorderIndicatorUpIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._reorderIndicatorDownIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._sortIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._checkboxIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._headerCheckboxIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorDropdownIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorFirstPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorLastPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorPreviousPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._paginatorNextPageLinkIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._templates = _t);
      }
    },
    viewQuery: function Table_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c322, 5);
        ɵɵviewQuery(_c332, 5);
        ɵɵviewQuery(_c34, 5);
        ɵɵviewQuery(_c35, 5);
        ɵɵviewQuery(_c36, 5);
        ɵɵviewQuery(_c37, 5);
        ɵɵviewQuery(_c38, 5);
        ɵɵviewQuery(_c39, 5);
        ɵɵviewQuery(_c40, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeHelperViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableHeaderViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableFooterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
      }
    },
    inputs: {
      frozenColumns: "frozenColumns",
      frozenValue: "frozenValue",
      style: "style",
      styleClass: "styleClass",
      tableStyle: "tableStyle",
      tableStyleClass: "tableStyleClass",
      paginator: [2, "paginator", "paginator", booleanAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      defaultSortOrder: [2, "defaultSortOrder", "defaultSortOrder", numberAttribute],
      sortMode: "sortMode",
      resetPageOnSort: [2, "resetPageOnSort", "resetPageOnSort", booleanAttribute],
      selectionMode: "selectionMode",
      selectionPageOnly: [2, "selectionPageOnly", "selectionPageOnly", booleanAttribute],
      contextMenuSelection: "contextMenuSelection",
      contextMenuSelectionMode: "contextMenuSelectionMode",
      dataKey: "dataKey",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      rowSelectable: "rowSelectable",
      rowTrackBy: "rowTrackBy",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      compareSelectionBy: "compareSelectionBy",
      csvSeparator: "csvSeparator",
      exportFilename: "exportFilename",
      filters: "filters",
      globalFilterFields: "globalFilterFields",
      filterDelay: [2, "filterDelay", "filterDelay", numberAttribute],
      filterLocale: "filterLocale",
      expandedRowKeys: "expandedRowKeys",
      editingRowKeys: "editingRowKeys",
      rowExpandMode: "rowExpandMode",
      scrollable: [2, "scrollable", "scrollable", booleanAttribute],
      scrollDirection: "scrollDirection",
      rowGroupMode: "rowGroupMode",
      scrollHeight: "scrollHeight",
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      virtualScrollDelay: [2, "virtualScrollDelay", "virtualScrollDelay", numberAttribute],
      frozenWidth: "frozenWidth",
      responsive: "responsive",
      contextMenu: "contextMenu",
      resizableColumns: [2, "resizableColumns", "resizableColumns", booleanAttribute],
      columnResizeMode: "columnResizeMode",
      reorderableColumns: [2, "reorderableColumns", "reorderableColumns", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      showLoader: [2, "showLoader", "showLoader", booleanAttribute],
      rowHover: [2, "rowHover", "rowHover", booleanAttribute],
      customSort: [2, "customSort", "customSort", booleanAttribute],
      showInitialSortBadge: [2, "showInitialSortBadge", "showInitialSortBadge", booleanAttribute],
      autoLayout: [2, "autoLayout", "autoLayout", booleanAttribute],
      exportFunction: "exportFunction",
      exportHeader: "exportHeader",
      stateKey: "stateKey",
      stateStorage: "stateStorage",
      editMode: "editMode",
      groupRowsBy: "groupRowsBy",
      size: "size",
      showGridlines: [2, "showGridlines", "showGridlines", booleanAttribute],
      stripedRows: [2, "stripedRows", "stripedRows", booleanAttribute],
      groupRowsByOrder: [2, "groupRowsByOrder", "groupRowsByOrder", numberAttribute],
      responsiveLayout: "responsiveLayout",
      breakpoint: "breakpoint",
      paginatorLocale: "paginatorLocale",
      value: "value",
      columns: "columns",
      first: "first",
      rows: "rows",
      totalRecords: "totalRecords",
      sortField: "sortField",
      sortOrder: "sortOrder",
      multiSortMeta: "multiSortMeta",
      selection: "selection",
      virtualRowHeight: "virtualRowHeight",
      selectAll: "selectAll"
    },
    outputs: {
      contextMenuSelectionChange: "contextMenuSelectionChange",
      selectAllChange: "selectAllChange",
      selectionChange: "selectionChange",
      onRowSelect: "onRowSelect",
      onRowUnselect: "onRowUnselect",
      onPage: "onPage",
      onSort: "onSort",
      onFilter: "onFilter",
      onLazyLoad: "onLazyLoad",
      onRowExpand: "onRowExpand",
      onRowCollapse: "onRowCollapse",
      onContextMenuSelect: "onContextMenuSelect",
      onColResize: "onColResize",
      onColReorder: "onColReorder",
      onRowReorder: "onRowReorder",
      onEditInit: "onEditInit",
      onEditComplete: "onEditComplete",
      onEditCancel: "onEditCancel",
      onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
      sortFunction: "sortFunction",
      firstChange: "firstChange",
      rowsChange: "rowsChange",
      onStateSave: "onStateSave",
      onStateRestore: "onStateRestore"
    },
    features: [ɵɵProvidersFeature([TableService, TableStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    decls: 16,
    vars: 17,
    consts: [["container", ""], ["wrapper", ""], ["buildInTable", ""], ["scroller", ""], ["content", ""], ["table", ""], ["thead", ""], ["tfoot", ""], ["resizeHelper", ""], ["reorderIndicatorUp", ""], ["reorderIndicatorDown", ""], [3, "ngStyle", "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale", "onPageChange", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "items", "columns", "style", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["style", "display:none", 3, "ngClass", 4, "ngIf"], ["style", "display: none;", 3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], [3, "spin", "styleClass"], [4, "ngTemplateOutlet"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale"], ["pTemplate", "dropdownicon"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [3, "onLazyLoad", "items", "columns", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "table", 3, "ngClass"], ["role", "rowgroup", 3, "ngClass", "ngStyle"], ["role", "rowgroup", 3, "ngClass", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen", 4, "ngIf"], ["role", "rowgroup", 3, "ngClass", "value", "pTableBody", "pTableBodyTemplate", "scrollerOptions"], ["role", "rowgroup", 3, "style", "ngClass", 4, "ngIf"], ["role", "rowgroup", 3, "ngClass", 4, "ngIf"], ["role", "rowgroup", 3, "ngClass", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen"], ["role", "rowgroup", 3, "ngClass"], [2, "display", "none", 3, "ngClass"]],
    template: function Table_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 11, 0);
        ɵɵtemplate(2, Table_div_2_Template, 3, 3, "div", 12)(3, Table_div_3_Template, 2, 2, "div", 12)(4, Table_p_paginator_4_Template, 6, 24, "p-paginator", 13);
        ɵɵelementStart(5, "div", 14, 1);
        ɵɵtemplate(7, Table_p_scroller_7_Template, 4, 17, "p-scroller", 15)(8, Table_ng_container_8_Template, 2, 7, "ng-container", 16)(9, Table_ng_template_9_Template, 10, 26, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵtemplate(11, Table_p_paginator_11_Template, 6, 24, "p-paginator", 13)(12, Table_div_12_Template, 2, 2, "div", 12)(13, Table_div_13_Template, 2, 1, "div", 17)(14, Table_span_14_Template, 4, 3, "span", 18)(15, Table_span_15_Template, 4, 3, "span", 18);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", ctx.cx("root"));
        ɵɵattribute("id", ctx.id);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.loading && ctx.showLoader);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.captionTemplate || ctx._captionTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵɵadvance();
        ɵɵproperty("ngClass", ctx.cx("tableContainer"))("ngStyle", ctx.sx("tableContainer"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.virtualScroll);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.virtualScroll);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.summaryTemplate || ctx._summaryTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.resizableColumns);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.reorderableColumns);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.reorderableColumns);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Paginator, PrimeTemplate, Scroller, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, TableBody],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Table, [{
    type: Component,
    args: [{
      selector: "p-table",
      template: `
        <div #container [ngStyle]="style" [class]="styleClass" [ngClass]="cx('root')" [attr.id]="id">
            <div [ngClass]="cx('mask')" *ngIf="loading && showLoader">
                <i *ngIf="loadingIcon" [class]="'p-datatable-loading-icon ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate && !_loadingIconTemplate" [spin]="true" [styleClass]="cx('loadingIcon')" />
                    <span *ngIf="loadingIconTemplate || _loadingIconTemplate" [ngClass]="cx('loadingIcon')">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <div *ngIf="captionTemplate || _captionTemplate" [ngClass]="cx('header')">
                <ng-container *ngTemplateOutlet="captionTemplate || _captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate || _paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
                [styleClass]="cx('pcPaginator') + ' ' + paginatorStyleClass && paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="dropdownicon" *ngIf="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div #wrapper [ngClass]="cx('tableContainer')" [ngStyle]="sx('tableContainer')">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="processedData"
                    [columns]="columns"
                    [style]="{
                        height: scrollHeight !== 'flex' ? scrollHeight : undefined
                    }"
                    [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                    [itemSize]="virtualScrollItemSize || _virtualRowHeight"
                    [step]="rows"
                    [delay]="lazy ? virtualScrollDelay : 0"
                    [inline]="true"
                    [lazy]="lazy"
                    (onLazyLoad)="onLazyItemLoad($event)"
                    [loaderDisabled]="true"
                    [showSpacer]="false"
                    [showLoader]="loadingBodyTemplate || _loadingBodyTemplate"
                    [options]="virtualScrollOptions"
                    [autoSize]="true"
                >
                    <ng-template #content let-items let-scrollerOptions="options">
                        <ng-container
                            *ngTemplateOutlet="
                                buildInTable;
                                context: {
                                    $implicit: items,
                                    options: scrollerOptions
                                }
                            "
                        ></ng-container>
                    </ng-template>
                </p-scroller>
                <ng-container *ngIf="!virtualScroll">
                    <ng-container
                        *ngTemplateOutlet="
                            buildInTable;
                            context: {
                                $implicit: processedData,
                                options: { columns }
                            }
                        "
                    ></ng-container>
                </ng-container>

                <ng-template #buildInTable let-items let-scrollerOptions="options">
                    <table #table role="table" [ngClass]="cx('table')" [class]="tableStyleClass" [style]="tableStyle" [attr.id]="id + '-table'">
                        <ng-container *ngTemplateOutlet="colGroupTemplate || _colGroupTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        <thead role="rowgroup" #thead [ngClass]="cx('thead')" [ngStyle]="sx('thead')">
                            <ng-container
                                *ngTemplateOutlet="
                                    headerGroupedTemplate || headerTemplate || _headerTemplate;
                                    context: {
                                        $implicit: scrollerOptions.columns
                                    }
                                "
                            ></ng-container>
                        </thead>
                        <tbody
                            role="rowgroup"
                            [ngClass]="cx('tbody')"
                            *ngIf="frozenValue || frozenBodyTemplate || _frozenBodyTemplate"
                            [value]="frozenValue"
                            [frozenRows]="true"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="frozenBodyTemplate || _frozenBodyTemplate"
                            [frozen]="true"
                        ></tbody>
                        <tbody
                            role="rowgroup"
                            [ngClass]="cx('tbody', scrollerOptions.contentStyleClass)"
                            [style]="scrollerOptions.contentStyle"
                            [value]="dataToRender(scrollerOptions.rows)"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="bodyTemplate || _bodyTemplate"
                            [scrollerOptions]="scrollerOptions"
                        ></tbody>
                        <tbody
                            role="rowgroup"
                            *ngIf="scrollerOptions.spacerStyle"
                            [style]="'height: calc(' + scrollerOptions.spacerStyle.height + ' - ' + scrollerOptions.rows.length * scrollerOptions.itemSize + 'px);'"
                            [ngClass]="cx('virtualScrollerSpacer')"
                        ></tbody>
                        <tfoot role="rowgroup" *ngIf="footerGroupedTemplate || footerTemplate || _footerTemplate || _footerGroupedTemplate" #tfoot [ngClass]="cx('footer')">
                            <ng-container
                                *ngTemplateOutlet="
                                    footerGroupedTemplate || footerTemplate || _footerTemplate || _footerGroupedTemplate;
                                    context: {
                                        $implicit: scrollerOptions.columns
                                    }
                                "
                            ></ng-container>
                        </tfoot>
                    </table>
                </ng-template>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate || _paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate || _paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate || _paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
                [styleClass]="cx('pcPaginator') + ' ' + paginatorStyleClass && paginatorStyleClass"
                [locale]="paginatorLocale"
            >
                <ng-template pTemplate="dropdownicon" *ngIf="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div *ngIf="summaryTemplate || _summaryTemplate" [ngClass]="cx('footer')">
                <ng-container *ngTemplateOutlet="summaryTemplate || _summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper [ngClass]="cx('columnResizeIndicator')" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp [ngClass]="cx('rowReorderIndicatorUp')" style="display: none;" *ngIf="reorderableColumns">
                <ArrowDownIcon *ngIf="!reorderIndicatorUpIconTemplate && !_reorderIndicatorUpIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate || _reorderIndicatorUpIconTemplate"></ng-template>
            </span>
            <span #reorderIndicatorDown [ngClass]="cx('rowReorderIndicatorDown')" style="display: none;" *ngIf="reorderableColumns">
                <ArrowUpIcon *ngIf="!reorderIndicatorDownIconTemplate && !_reorderIndicatorDownIconTemplate" />
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate || _reorderIndicatorDownIconTemplate"></ng-template>
            </span>
        </div>
    `,
      providers: [TableService, TableStyle],
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    frozenColumns: [{
      type: Input
    }],
    frozenValue: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tableStyle: [{
      type: Input
    }],
    tableStyleClass: [{
      type: Input
    }],
    paginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pageLinks: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    paginatorDropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultSortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortMode: [{
      type: Input
    }],
    resetPageOnSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionMode: [{
      type: Input
    }],
    selectionPageOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contextMenuSelection: [{
      type: Input
    }],
    contextMenuSelectionChange: [{
      type: Output
    }],
    contextMenuSelectionMode: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowSelectable: [{
      type: Input
    }],
    rowTrackBy: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareSelectionBy: [{
      type: Input
    }],
    csvSeparator: [{
      type: Input
    }],
    exportFilename: [{
      type: Input
    }],
    filters: [{
      type: Input
    }],
    globalFilterFields: [{
      type: Input
    }],
    filterDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    filterLocale: [{
      type: Input
    }],
    expandedRowKeys: [{
      type: Input
    }],
    editingRowKeys: [{
      type: Input
    }],
    rowExpandMode: [{
      type: Input
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollDirection: [{
      type: Input
    }],
    rowGroupMode: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    virtualScrollDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    frozenWidth: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    resizableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnResizeMode: [{
      type: Input
    }],
    reorderableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    showLoader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    customSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showInitialSortBadge: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    exportFunction: [{
      type: Input
    }],
    exportHeader: [{
      type: Input
    }],
    stateKey: [{
      type: Input
    }],
    stateStorage: [{
      type: Input
    }],
    editMode: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    showGridlines: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stripedRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupRowsByOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    responsiveLayout: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    paginatorLocale: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    totalRecords: [{
      type: Input
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    multiSortMeta: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    virtualRowHeight: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    selectAllChange: [{
      type: Output
    }],
    selectionChange: [{
      type: Output
    }],
    onRowSelect: [{
      type: Output
    }],
    onRowUnselect: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRowExpand: [{
      type: Output
    }],
    onRowCollapse: [{
      type: Output
    }],
    onContextMenuSelect: [{
      type: Output
    }],
    onColResize: [{
      type: Output
    }],
    onColReorder: [{
      type: Output
    }],
    onRowReorder: [{
      type: Output
    }],
    onEditInit: [{
      type: Output
    }],
    onEditComplete: [{
      type: Output
    }],
    onEditCancel: [{
      type: Output
    }],
    onHeaderCheckboxToggle: [{
      type: Output
    }],
    sortFunction: [{
      type: Output
    }],
    firstChange: [{
      type: Output
    }],
    rowsChange: [{
      type: Output
    }],
    onStateSave: [{
      type: Output
    }],
    onStateRestore: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    resizeHelperViewChild: [{
      type: ViewChild,
      args: ["resizeHelper"]
    }],
    reorderIndicatorUpViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorUp"]
    }],
    reorderIndicatorDownViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorDown"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    tableViewChild: [{
      type: ViewChild,
      args: ["table"]
    }],
    tableHeaderViewChild: [{
      type: ViewChild,
      args: ["thead"]
    }],
    tableFooterViewChild: [{
      type: ViewChild,
      args: ["tfoot"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _headerGroupedTemplate: [{
      type: ContentChild,
      args: ["headergrouped", {
        descendants: false
      }]
    }],
    _bodyTemplate: [{
      type: ContentChild,
      args: ["body", {
        descendants: false
      }]
    }],
    _loadingBodyTemplate: [{
      type: ContentChild,
      args: ["loadingbody", {
        descendants: false
      }]
    }],
    _captionTemplate: [{
      type: ContentChild,
      args: ["caption", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _footerGroupedTemplate: [{
      type: ContentChild,
      args: ["footergrouped", {
        descendants: false
      }]
    }],
    _summaryTemplate: [{
      type: ContentChild,
      args: ["summary", {
        descendants: false
      }]
    }],
    _colGroupTemplate: [{
      type: ContentChild,
      args: ["colgroup", {
        descendants: false
      }]
    }],
    _expandedRowTemplate: [{
      type: ContentChild,
      args: ["expandedrow", {
        descendants: false
      }]
    }],
    _groupHeaderTemplate: [{
      type: ContentChild,
      args: ["groupheader", {
        descendants: false
      }]
    }],
    _groupFooterTemplate: [{
      type: ContentChild,
      args: ["groupfooter", {
        descendants: false
      }]
    }],
    _frozenExpandedRowTemplate: [{
      type: ContentChild,
      args: ["frozenexpandedrow", {
        descendants: false
      }]
    }],
    _frozenHeaderTemplate: [{
      type: ContentChild,
      args: ["frozenheader", {
        descendants: false
      }]
    }],
    _frozenBodyTemplate: [{
      type: ContentChild,
      args: ["frozenbody", {
        descendants: false
      }]
    }],
    _frozenFooterTemplate: [{
      type: ContentChild,
      args: ["frozenfooter", {
        descendants: false
      }]
    }],
    _frozenColGroupTemplate: [{
      type: ContentChild,
      args: ["frozencolgroup", {
        descendants: false
      }]
    }],
    _emptyMessageTemplate: [{
      type: ContentChild,
      args: ["emptymessage", {
        descendants: false
      }]
    }],
    _paginatorLeftTemplate: [{
      type: ContentChild,
      args: ["paginatorleft", {
        descendants: false
      }]
    }],
    _paginatorRightTemplate: [{
      type: ContentChild,
      args: ["paginatorright", {
        descendants: false
      }]
    }],
    _paginatorDropdownItemTemplate: [{
      type: ContentChild,
      args: ["paginatordropdownitem", {
        descendants: false
      }]
    }],
    _loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorUpIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatorupicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorDownIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatordownicon", {
        descendants: false
      }]
    }],
    _sortIconTemplate: [{
      type: ContentChild,
      args: ["sorticon", {
        descendants: false
      }]
    }],
    _checkboxIconTemplate: [{
      type: ContentChild,
      args: ["checkboxicon", {
        descendants: false
      }]
    }],
    _headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    _paginatorDropdownIconTemplate: [{
      type: ContentChild,
      args: ["paginatordropdownicon", {
        descendants: false
      }]
    }],
    _paginatorFirstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorfirstpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorLastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorlastpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorPreviousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorpreviouspagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorNextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatornextpagelinkicon", {
        descendants: false
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Table, {
    className: "Table"
  });
})();
var TableBody = class _TableBody {
  dt;
  tableService;
  cd;
  el;
  columns;
  template;
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  frozen;
  frozenRows;
  scrollerOptions;
  subscription;
  _value;
  ngAfterViewInit() {
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  constructor(dt, tableService, cd, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.el = el;
    this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
      if (this.dt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  shouldRenderRowGroupHeader(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - (1 + this.dt._first)];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowGroupFooter(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowData = value[i + (1 + this.dt._first)];
    if (nextRowData) {
      let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== nextRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowspan(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  calculateRowGroupSize(value, rowData, index) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowFieldData = currentRowFieldData;
    let groupRowSpan = 0;
    while (currentRowFieldData === nextRowFieldData) {
      groupRowSpan++;
      let nextRowData = value[++index];
      if (nextRowData) {
        nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      } else {
        break;
      }
    }
    return groupRowSpan === 1 ? null : groupRowSpan;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateFrozenRowStickyPosition() {
    this.el.nativeElement.style.top = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + "px";
  }
  updateFrozenRowGroupHeaderStickyPosition() {
    if (this.el.nativeElement.previousElementSibling) {
      let tableHeaderHeight = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
      this.dt.rowGroupHeaderStyleObject.top = tableHeaderHeight + "px";
    }
  }
  getScrollerOption(option, options) {
    if (this.dt.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const index = this.dt.paginator ? this.dt.first + rowIndex : rowIndex;
    const getItemOptions = this.getScrollerOption("getItemOptions");
    return getItemOptions ? getItemOptions(index).index : index;
  }
  static ɵfac = function TableBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableBody)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableBody,
    selectors: [["", "pTableBody", ""]],
    inputs: {
      columns: [0, "pTableBody", "columns"],
      template: [0, "pTableBodyTemplate", "template"],
      value: "value",
      frozen: [2, "frozen", "frozen", booleanAttribute],
      frozenRows: [2, "frozenRows", "frozenRows", booleanAttribute],
      scrollerOptions: "scrollerOptions"
    },
    features: [ɵɵInputTransformsFeature],
    attrs: _c45,
    decls: 5,
    vars: 5,
    consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["role", "row", 4, "ngIf"], ["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableBody_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TableBody_ng_container_0_Template, 2, 2, "ng-container", 0)(1, TableBody_ng_container_1_Template, 2, 2, "ng-container", 0)(2, TableBody_ng_container_2_Template, 2, 2, "ng-container", 0)(3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0)(4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.dt.expandedRowTemplate && !ctx.dt._expandedRowTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", (ctx.dt.expandedRowTemplate || ctx.dt._expandedRowTemplate) && !(ctx.frozen && (ctx.dt.frozenExpandedRowTemplate || ctx.dt._frozenExpandedRowTemplate)));
        ɵɵadvance();
        ɵɵproperty("ngIf", (ctx.dt.frozenExpandedRowTemplate || ctx.dt._frozenExpandedRowTemplate) && ctx.frozen);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dt.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBody, [{
    type: Component,
    args: [{
      selector: "[pTableBody]",
      template: `
        <ng-container *ngIf="!dt.expandedRowTemplate && !dt._expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="(dt.groupHeaderTemplate || dt._groupHeaderTemplate) && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupHeaderTemplate || dt._groupHeaderTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode !== 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dt.loadingBodyTemplate || dt._loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode === 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dt.loadingBodyTemplate || dt._loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen,
                                rowgroup: shouldRenderRowspan(value, rowData, rowIndex),
                                rowspan: calculateRowGroupSize(value, rowData, rowIndex)
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="(dt.groupFooterTemplate || dt._groupFooterTemplate) && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupFooterTemplate || dt._groupFooterTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="(dt.expandedRowTemplate || dt._expandedRowTemplate) && !(frozen && (dt.frozenExpandedRowTemplate || dt._frozenExpandedRowTemplate))">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="!(dt.groupHeaderTemplate && dt._groupHeaderTemplate)">
                    <ng-container
                        *ngTemplateOutlet="
                            template;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                expanded: dt.isRowExpanded(rowData),
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="(dt.groupHeaderTemplate || dt._groupHeaderTemplate) && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, getRowIndex(rowIndex))" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupHeaderTemplate || dt._groupHeaderTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                expanded: dt.isRowExpanded(rowData),
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.expandedRowTemplate || dt._expandedRowTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                    <ng-container *ngIf="(dt.groupFooterTemplate || dt._groupFooterTemplate) && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, getRowIndex(rowIndex))" role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dt.groupFooterTemplate || dt._groupFooterTemplate;
                                context: {
                                    $implicit: rowData,
                                    rowIndex: getRowIndex(rowIndex),
                                    columns: columns,
                                    expanded: dt.isRowExpanded(rowData),
                                    editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                    frozen: frozen
                                }
                            "
                        ></ng-container>
                    </ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="(dt.frozenExpandedRowTemplate || dt._frozenExpandedRowTemplate) && frozen">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container
                    *ngTemplateOutlet="
                        template;
                        context: {
                            $implicit: rowData,
                            rowIndex: getRowIndex(rowIndex),
                            columns: columns,
                            expanded: dt.isRowExpanded(rowData),
                            editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                            frozen: frozen
                        }
                    "
                ></ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.frozenExpandedRowTemplate || dt._frozenExpandedRowTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.loading">
            <ng-container *ngTemplateOutlet="dt.loadingBodyTemplate || dt._loadingBodyTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
        <ng-container *ngIf="dt.isEmpty() && !dt.loading">
            <ng-container *ngTemplateOutlet="dt.emptyMessageTemplate || dt._emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    columns: [{
      type: Input,
      args: ["pTableBody"]
    }],
    template: [{
      type: Input,
      args: ["pTableBodyTemplate"]
    }],
    value: [{
      type: Input
    }],
    frozen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    frozenRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollerOptions: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(TableBody, {
    className: "TableBody"
  });
})();
var RowGroupHeader = class _RowGroupHeader {
  dt;
  constructor(dt) {
    this.dt = dt;
  }
  get getFrozenRowGroupHeaderStickyPosition() {
    return this.dt.rowGroupHeaderStyleObject ? this.dt.rowGroupHeaderStyleObject.top : "";
  }
  static ɵfac = function RowGroupHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowGroupHeader)(ɵɵdirectiveInject(Table));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RowGroupHeader,
    selectors: [["", "pRowGroupHeader", ""]],
    hostAttrs: [1, "p-datatable-row-group-header"],
    hostVars: 2,
    hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("top", ctx.getFrozenRowGroupHeaderStickyPosition);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowGroupHeader, [{
    type: Directive,
    args: [{
      selector: "[pRowGroupHeader]",
      host: {
        class: "p-datatable-row-group-header",
        "[style.top]": "getFrozenRowGroupHeaderStickyPosition"
      }
    }]
  }], () => [{
    type: Table
  }], null);
})();
var FrozenColumn = class _FrozenColumn {
  el;
  zone;
  get frozen() {
    return this._frozen;
  }
  set frozen(val) {
    this._frozen = val;
    Promise.resolve(null).then(() => this.updateStickyPosition());
  }
  alignFrozen = "left";
  constructor(el, zone) {
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.recalculateColumns();
      }, 1e3);
    });
  }
  recalculateColumns() {
    const siblings = DomHandler.siblings(this.el.nativeElement);
    const index = DomHandler.index(this.el.nativeElement);
    const time = (siblings.length - index + 1) * 50;
    setTimeout(() => {
      this.updateStickyPosition();
    }, time);
  }
  _frozen = true;
  updateStickyPosition() {
    if (this._frozen) {
      if (this.alignFrozen === "right") {
        let right = 0;
        let next = this.el.nativeElement.nextElementSibling;
        if (next) {
          right = DomHandler.getOuterWidth(next) + (parseFloat(next.style.right) || 0);
        }
        this.el.nativeElement.style.right = right + "px";
      } else {
        let left = 0;
        let prev = this.el.nativeElement.previousElementSibling;
        if (prev) {
          left = DomHandler.getOuterWidth(prev) + (parseFloat(prev.style.left) || 0);
        }
        this.el.nativeElement.style.left = left + "px";
      }
      const filterRow = this.el.nativeElement?.parentElement?.nextElementSibling;
      if (filterRow) {
        let index = DomHandler.index(this.el.nativeElement);
        if (filterRow.children && filterRow.children[index]) {
          filterRow.children[index].style.left = this.el.nativeElement.style.left;
          filterRow.children[index].style.right = this.el.nativeElement.style.right;
        }
      }
    }
  }
  static ɵfac = function FrozenColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FrozenColumn)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FrozenColumn,
    selectors: [["", "pFrozenColumn", ""]],
    hostVars: 4,
    hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("resize", function FrozenColumn_resize_HostBindingHandler($event) {
          return ctx.recalculateColumns($event);
        }, false, ɵɵresolveWindow);
      }
      if (rf & 2) {
        ɵɵclassProp("p-datatable-frozen-column", ctx.frozen)("p-datatable-frozen-column-left", ctx.alignFrozen === "left");
      }
    },
    inputs: {
      frozen: "frozen",
      alignFrozen: "alignFrozen"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FrozenColumn, [{
    type: Directive,
    args: [{
      selector: "[pFrozenColumn]",
      host: {
        "[class.p-datatable-frozen-column]": "frozen",
        "[class.p-datatable-frozen-column-left]": 'alignFrozen === "left"'
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    frozen: [{
      type: Input
    }],
    alignFrozen: [{
      type: Input
    }],
    recalculateColumns: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
var SortableColumn = class _SortableColumn {
  dt;
  field;
  pSortableColumnDisabled;
  sorted;
  sortOrder;
  subscription;
  constructor(dt) {
    this.dt = dt;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.sortSource$.subscribe((sortMeta) => {
        this.updateSortState();
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    let sorted = false;
    let sortOrder = 0;
    if (this.dt.sortMode === "single") {
      sorted = this.dt.isSorted(this.field);
      sortOrder = this.dt.sortOrder;
    } else if (this.dt.sortMode === "multiple") {
      const sortMeta = this.dt.getSortMeta(this.field);
      sorted = !!sortMeta;
      sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.sorted = sorted;
    this.sortOrder = sorted ? sortOrder === 1 ? "ascending" : "descending" : "none";
  }
  onClick(event) {
    if (this.isEnabled() && !this.isFilterElement(event.target)) {
      this.updateSortState();
      this.dt.sort({
        originalEvent: event,
        field: this.field
      });
      DomHandler.clearSelection();
    }
  }
  onEnterKey(event) {
    this.onClick(event);
    event.preventDefault();
  }
  isEnabled() {
    return this.pSortableColumnDisabled !== true;
  }
  isFilterElement(element) {
    return this.isFilterElementIconOrButton(element) || this.isFilterElementIconOrButton(element?.parentElement?.parentElement);
  }
  isFilterElementIconOrButton(element) {
    return DomHandler.hasClass(element, "pi-filter-icon") || DomHandler.hasClass(element, "p-column-filter-menu-button");
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SortableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableColumn)(ɵɵdirectiveInject(Table));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SortableColumn,
    selectors: [["", "pSortableColumn", ""]],
    hostVars: 7,
    hostBindings: function SortableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SortableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.space", function SortableColumn_keydown_space_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
        ɵɵclassProp("p-datatable-sortable-column", ctx.isEnabled())("p-datatable-column-sorted", ctx.sorted);
      }
    },
    inputs: {
      field: [0, "pSortableColumn", "field"],
      pSortableColumnDisabled: [2, "pSortableColumnDisabled", "pSortableColumnDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableColumn, [{
    type: Directive,
    args: [{
      selector: "[pSortableColumn]",
      host: {
        "[class.p-datatable-sortable-column]": "isEnabled()",
        "[class.p-datatable-column-sorted]": "sorted",
        "[attr.tabindex]": 'isEnabled() ? "0" : null',
        "[attr.role]": '"columnheader"',
        "[attr.aria-sort]": "sortOrder"
      }
    }]
  }], () => [{
    type: Table
  }], {
    field: [{
      type: Input,
      args: ["pSortableColumn"]
    }],
    pSortableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKey: [{
      type: HostListener,
      args: ["keydown.space", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }]
  });
})();
var SortIcon = class _SortIcon {
  dt;
  cd;
  field;
  subscription;
  sortOrder;
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.sortSource$.subscribe((sortMeta) => {
      this.updateSortState();
    });
  }
  ngOnInit() {
    this.updateSortState();
  }
  onClick(event) {
    event.preventDefault();
  }
  updateSortState() {
    if (this.dt.sortMode === "single") {
      this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
    } else if (this.dt.sortMode === "multiple") {
      let sortMeta = this.dt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.cd.markForCheck();
  }
  getMultiSortMetaIndex() {
    let multiSortMeta = this.dt._multiSortMeta;
    let index = -1;
    if (multiSortMeta && this.dt.sortMode === "multiple" && this.dt.showInitialSortBadge && multiSortMeta.length > 1) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  getBadgeValue() {
    let index = this.getMultiSortMetaIndex();
    return this.dt.groupRowsBy && index > -1 ? index : index + 1;
  }
  isMultiSorted() {
    return this.dt.sortMode === "multiple" && this.getMultiSortMetaIndex() > -1;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SortIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortIcon)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SortIcon,
    selectors: [["p-sortIcon"]],
    inputs: {
      field: "field"
    },
    decls: 3,
    vars: 3,
    consts: [[4, "ngIf"], ["class", "p-sortable-column-icon", 4, "ngIf"], ["class", "p-sortable-column-badge", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-sortable-column-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-sortable-column-badge"]],
    template: function SortIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, SortIcon_ng_container_0_Template, 4, 3, "ng-container", 0)(1, SortIcon_span_1_Template, 2, 4, "span", 1)(2, SortIcon_span_2_Template, 2, 1, "span", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !(ctx.dt.sortIconTemplate && ctx.dt._sortIconTemplate));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dt.sortIconTemplate || ctx.dt._sortIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.isMultiSorted());
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortIcon, [{
    type: Component,
    args: [{
      selector: "p-sortIcon",
      template: `
        <ng-container *ngIf="!(dt.sortIconTemplate && dt._sortIconTemplate)">
            <SortAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 0" />
            <SortAmountUpAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 1" />
            <SortAmountDownIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="dt.sortIconTemplate || dt._sortIconTemplate" class="p-sortable-column-icon">
            <ng-template *ngTemplateOutlet="dt.sortIconTemplate || dt._sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>
        <span *ngIf="isMultiSorted()" class="p-sortable-column-badge">{{ getBadgeValue() }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: Table
  }, {
    type: ChangeDetectorRef
  }], {
    field: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(SortIcon, {
    className: "SortIcon"
  });
})();
var SelectableRow = class _SelectableRow {
  dt;
  tableService;
  el;
  data;
  index;
  pSelectableRowDisabled;
  selected;
  subscription;
  constructor(dt, tableService, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  setRowTabIndex() {
    if (this.dt.selectionMode === "single" || this.dt.selectionMode === "multiple") {
      return !this.dt.selection ? 0 : this.dt.anchorRowIndex === this.index ? 0 : -1;
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  onTouchEnd(event) {
    if (this.isEnabled()) {
      this.dt.handleRowTouchEnd(event);
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      default:
        if (event.code === "KeyA" && (event.metaKey || event.ctrlKey) && this.dt.selectionMode === "multiple") {
          const data = this.dt.dataToRender(this.dt.processedData);
          this.dt.selection = [...data];
          this.dt.selectRange(event, data.length - 1);
          event.preventDefault();
        }
        break;
    }
  }
  onArrowDownKey(event) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event.currentTarget;
    const nextRow = this.findNextSelectableRow(row);
    if (nextRow) {
      nextRow.focus();
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event.currentTarget;
    const prevRow = this.findPrevSelectableRow(row);
    if (prevRow) {
      prevRow.focus();
    }
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.isEnabled()) {
      return;
    }
    this.dt.handleRowClick({
      originalEvent: event,
      rowData: this.data,
      rowIndex: this.index
    });
  }
  onEndKey(event) {
    const lastRow = this.findLastSelectableRow();
    lastRow && this.focusRowChange(this.el.nativeElement, lastRow);
    if (event.ctrlKey && event.shiftKey) {
      const data = this.dt.dataToRender(this.dt.rows);
      const lastSelectableRowIndex = DomHandler.getAttribute(lastRow, "index");
      this.dt.anchorRowIndex = lastSelectableRowIndex;
      this.dt.selection = data.slice(this.index, data.length);
      this.dt.selectRange(event, this.index);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstRow = this.findFirstSelectableRow();
    firstRow && this.focusRowChange(this.el.nativeElement, firstRow);
    if (event.ctrlKey && event.shiftKey) {
      const data = this.dt.dataToRender(this.dt.rows);
      const firstSelectableRowIndex = DomHandler.getAttribute(firstRow, "index");
      this.dt.anchorRowIndex = this.dt.anchorRowIndex || firstSelectableRowIndex;
      this.dt.selection = data.slice(0, this.index + 1);
      this.dt.selectRange(event, this.index);
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    const isInput = event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement;
    if (isInput) {
      return;
    } else {
      this.onEnterKey(event);
      if (event.shiftKey && this.dt.selection !== null) {
        const data = this.dt.dataToRender(this.dt.rows);
        let index;
        if (ObjectUtils.isNotEmpty(this.dt.selection) && this.dt.selection.length > 0) {
          let firstSelectedRowIndex, lastSelectedRowIndex;
          firstSelectedRowIndex = ObjectUtils.findIndexInList(this.dt.selection[0], data);
          lastSelectedRowIndex = ObjectUtils.findIndexInList(this.dt.selection[this.dt.selection.length - 1], data);
          index = this.index <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
        } else {
          index = ObjectUtils.findIndexInList(this.dt.selection, data);
        }
        this.dt.anchorRowIndex = index;
        this.dt.selection = index !== this.index ? data.slice(Math.min(index, this.index), Math.max(index, this.index) + 1) : [this.data];
        this.dt.selectRange(event, this.index);
      }
      event.preventDefault();
    }
  }
  focusRowChange(firstFocusableRow, currentFocusedRow) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.tabIndex = "0";
    DomHandler.focus(currentFocusedRow);
  }
  findLastSelectableRow() {
    const rows = DomHandler.find(this.dt.el.nativeElement, ".p-datatable-selectable-row");
    return rows ? rows[rows.length - 1] : null;
  }
  findFirstSelectableRow() {
    const firstRow = DomHandler.findSingle(this.dt.el.nativeElement, ".p-datatable-selectable-row");
    return firstRow;
  }
  findNextSelectableRow(row) {
    let nextRow = row.nextElementSibling;
    if (nextRow) {
      if (DomHandler.hasClass(nextRow, "p-selectable-row")) return nextRow;
      else return this.findNextSelectableRow(nextRow);
    } else {
      return null;
    }
  }
  findPrevSelectableRow(row) {
    let prevRow = row.previousElementSibling;
    if (prevRow) {
      if (DomHandler.hasClass(prevRow, "p-selectable-row")) return prevRow;
      else return this.findPrevSelectableRow(prevRow);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SelectableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SelectableRow,
    selectors: [["", "pSelectableRow", ""]],
    hostVars: 6,
    hostBindings: function SelectableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SelectableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        })("keydown", function SelectableRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.setRowTabIndex())("data-p-selectable-row", true);
        ɵɵclassProp("p-datatable-selectable-row", ctx.isEnabled())("p-datatable-row-selected", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pSelectableRow", "data"],
      index: [0, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [2, "pSelectableRowDisabled", "pSelectableRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRow, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRow]",
      host: {
        "[class.p-datatable-selectable-row]": "isEnabled()",
        "[class.p-datatable-row-selected]": "selected",
        "[attr.tabindex]": "setRowTabIndex()",
        "[attr.data-p-selectable-row]": "true"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ElementRef
  }], {
    data: [{
      type: Input,
      args: ["pSelectableRow"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onTouchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var SelectableRowDblClick = class _SelectableRowDblClick {
  dt;
  tableService;
  data;
  index;
  pSelectableRowDisabled;
  selected;
  subscription;
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SelectableRowDblClick_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectableRowDblClick)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SelectableRowDblClick,
    selectors: [["", "pSelectableRowDblClick", ""]],
    hostVars: 4,
    hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pSelectableRowDblClick", "data"],
      index: [0, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [2, "pSelectableRowDisabled", "pSelectableRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRowDblClick, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRowDblClick]",
      host: {
        "[class.p-selectable-row]": "isEnabled()",
        "[class.p-highlight]": "selected"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    data: [{
      type: Input,
      args: ["pSelectableRowDblClick"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var ContextMenuRow = class _ContextMenuRow {
  dt;
  tableService;
  el;
  data;
  index;
  pContextMenuRowDisabled;
  selected;
  subscription;
  constructor(dt, tableService, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.contextMenuSource$.subscribe((data) => {
        this.selected = this.dt.equals(this.data, data);
      });
    }
  }
  onContextMenu(event) {
    if (this.isEnabled()) {
      this.dt.handleRowRightClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pContextMenuRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function ContextMenuRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ContextMenuRow,
    selectors: [["", "pContextMenuRow", ""]],
    hostVars: 3,
    hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : void 0);
        ɵɵclassProp("p-highlight-contextmenu", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pContextMenuRow", "data"],
      index: [0, "pContextMenuRowIndex", "index"],
      pContextMenuRowDisabled: [2, "pContextMenuRowDisabled", "pContextMenuRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuRow, [{
    type: Directive,
    args: [{
      selector: "[pContextMenuRow]",
      host: {
        "[class.p-highlight-contextmenu]": "selected",
        "[attr.tabindex]": "isEnabled() ? 0 : undefined"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ElementRef
  }], {
    data: [{
      type: Input,
      args: ["pContextMenuRow"]
    }],
    index: [{
      type: Input,
      args: ["pContextMenuRowIndex"]
    }],
    pContextMenuRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var RowToggler = class _RowToggler {
  dt;
  data;
  pRowTogglerDisabled;
  constructor(dt) {
    this.dt = dt;
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.toggleRow(this.data, event);
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pRowTogglerDisabled !== true;
  }
  static ɵfac = function RowToggler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowToggler)(ɵɵdirectiveInject(Table));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RowToggler,
    selectors: [["", "pRowToggler", ""]],
    hostBindings: function RowToggler_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RowToggler_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      data: [0, "pRowToggler", "data"],
      pRowTogglerDisabled: [2, "pRowTogglerDisabled", "pRowTogglerDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowToggler, [{
    type: Directive,
    args: [{
      selector: "[pRowToggler]"
    }]
  }], () => [{
    type: Table
  }], {
    data: [{
      type: Input,
      args: ["pRowToggler"]
    }],
    pRowTogglerDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ResizableColumn = class _ResizableColumn {
  document;
  platformId;
  renderer;
  dt;
  el;
  zone;
  pResizableColumnDisabled;
  resizer;
  resizerMouseDownListener;
  resizerTouchStartListener;
  resizerTouchMoveListener;
  resizerTouchEndListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  constructor(document2, platformId, renderer, dt, el, zone) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isEnabled()) {
        DomHandler.addClass(this.el.nativeElement, "p-datatable-resizable-column");
        this.resizer = this.renderer.createElement("span");
        this.renderer.addClass(this.resizer, "p-datatable-column-resizer");
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.zone.runOutsideAngular(() => {
          this.resizerMouseDownListener = this.renderer.listen(this.resizer, "mousedown", this.onMouseDown.bind(this));
          this.resizerTouchStartListener = this.renderer.listen(this.resizer, "touchstart", this.onTouchStart.bind(this));
        });
      }
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.renderer.listen(this.document, "mousemove", this.onDocumentMouseMove.bind(this));
      this.documentMouseUpListener = this.renderer.listen(this.document, "mouseup", this.onDocumentMouseUp.bind(this));
      this.resizerTouchMoveListener = this.renderer.listen(this.resizer, "touchmove", this.onTouchMove.bind(this));
      this.resizerTouchEndListener = this.renderer.listen(this.resizer, "touchend", this.onTouchEnd.bind(this));
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
    if (this.resizerTouchMoveListener) {
      this.resizerTouchMoveListener();
      this.resizerTouchMoveListener = null;
    }
    if (this.resizerTouchEndListener) {
      this.resizerTouchEndListener();
      this.resizerTouchEndListener = null;
    }
  }
  onMouseDown(event) {
    this.dt.onColumnResizeBegin(event);
    this.bindDocumentEvents();
  }
  onTouchStart(event) {
    this.dt.onColumnResizeBegin(event);
    this.bindDocumentEvents();
  }
  onTouchMove(event) {
    this.dt.onColumnResize(event);
  }
  onDocumentMouseMove(event) {
    this.dt.onColumnResize(event);
  }
  onDocumentMouseUp(event) {
    this.dt.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  onTouchEnd(event) {
    this.dt.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.pResizableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
  static ɵfac = function ResizableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizableColumn)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ResizableColumn,
    selectors: [["", "pResizableColumn", ""]],
    hostAttrs: [1, "p-datatable-resizable-column"],
    inputs: {
      pResizableColumnDisabled: [2, "pResizableColumnDisabled", "pResizableColumnDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableColumn, [{
    type: Directive,
    args: [{
      selector: "[pResizableColumn]",
      host: {
        class: "p-datatable-resizable-column"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    pResizableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var ReorderableColumn = class _ReorderableColumn {
  platformId;
  renderer;
  dt;
  el;
  zone;
  pReorderableColumnDisabled;
  dragStartListener;
  dragOverListener;
  dragEnterListener;
  dragLeaveListener;
  mouseDownListener;
  constructor(platformId, renderer, dt, el, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
        this.dragEnterListener = this.renderer.listen(this.el.nativeElement, "dragenter", this.onDragEnter.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
      });
    }
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragEnterListener) {
      this.dragEnterListener();
      this.dragEnterListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event) {
    if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA" || DomHandler.hasClass(event.target, "p-datatable-column-resizer")) this.el.nativeElement.draggable = false;
    else this.el.nativeElement.draggable = true;
  }
  onDragStart(event) {
    this.dt.onColumnDragStart(event, this.el.nativeElement);
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    this.dt.onColumnDragEnter(event, this.el.nativeElement);
  }
  onDragLeave(event) {
    this.dt.onColumnDragLeave(event);
  }
  onDrop(event) {
    if (this.isEnabled()) {
      this.dt.onColumnDrop(event, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.pReorderableColumnDisabled !== true;
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
  static ɵfac = function ReorderableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableColumn)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ReorderableColumn,
    selectors: [["", "pReorderableColumn", ""]],
    hostAttrs: [1, "p-datatable-reorderable-column"],
    hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      pReorderableColumnDisabled: [2, "pReorderableColumnDisabled", "pReorderableColumnDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableColumn, [{
    type: Directive,
    args: [{
      selector: "[pReorderableColumn]",
      host: {
        class: "p-datatable-reorderable-column"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    pReorderableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var EditableColumn = class _EditableColumn {
  dt;
  el;
  zone;
  data;
  field;
  rowIndex;
  pEditableColumnDisabled;
  pFocusCellSelector;
  overlayEventListener;
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngOnChanges(changes) {
    if (this.el.nativeElement && !changes.data?.firstChange) {
      this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    }
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      DomHandler.addClass(this.el.nativeElement, "p-editable-column");
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.selfClick = true;
      if (this.dt.editingCell) {
        if (this.dt.editingCell !== this.el.nativeElement) {
          if (!this.dt.isEditingCellValid()) {
            return;
          }
          this.closeEditingCell(true, event);
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    DomHandler.addClass(this.el.nativeElement, "p-cell-editing");
    this.dt.onEditInit.emit({
      field: this.field,
      data: this.data,
      index: this.rowIndex
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusCellSelector = this.pFocusCellSelector || "input, textarea, select";
        let focusableElement = DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
        if (focusableElement) {
          focusableElement.focus();
        }
      }, 50);
    });
    this.overlayEventListener = (e) => {
      if (this.el && this.el.nativeElement.contains(e.target)) {
        this.dt.selfClick = true;
      }
    };
    this.dt.overlaySubscription = this.dt.overlayService.clickObservable.subscribe(this.overlayEventListener);
  }
  closeEditingCell(completed, event) {
    const eventData = {
      field: this.dt.editingCellField,
      data: this.dt.editingCellData,
      originalEvent: event,
      index: this.dt.editingCellRowIndex
    };
    if (completed) {
      this.dt.onEditComplete.emit(eventData);
    } else {
      this.dt.onEditCancel.emit(eventData);
      this.dt.value.forEach((element) => {
        if (element[this.dt.editingCellField] === this.data) {
          element[this.dt.editingCellField] = this.dt.editingCellData;
        }
      });
    }
    DomHandler.removeClass(this.dt.editingCell, "p-cell-editing");
    this.dt.editingCell = null;
    this.dt.editingCellData = null;
    this.dt.editingCellField = null;
    this.dt.unbindDocumentEditListener();
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
  onEnterKeyDown(event) {
    if (this.isEnabled() && !event.shiftKey) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event);
      }
      event.preventDefault();
    }
  }
  onTabKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event);
      }
      event.preventDefault();
    }
  }
  onEscapeKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(false, event);
      }
      event.preventDefault();
    }
  }
  onShiftKeyDown(event) {
    if (this.isEnabled()) {
      if (event.shiftKey) this.moveToPreviousCell(event);
      else {
        this.moveToNextCell(event);
      }
    }
  }
  onArrowDown(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          DomHandler.invokeElementMethod(event.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event.preventDefault();
      }
    }
  }
  onArrowUp(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          DomHandler.invokeElementMethod(event.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event.preventDefault();
      }
    }
  }
  onArrowLeft(event) {
    if (this.isEnabled()) {
      this.moveToPreviousCell(event);
    }
  }
  onArrowRight(event) {
    if (this.isEnabled()) {
      this.moveToNextCell(event);
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !DomHandler.hasClass(cell, "p-cell-editing")) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        DomHandler.invokeElementMethod(event.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event.preventDefault();
      }
    }
  }
  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        DomHandler.invokeElementMethod(event.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event.preventDefault();
      } else {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
      }
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement?.previousElementSibling;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (DomHandler.hasClass(prevCell, "p-editable-column")) return prevCell;
      else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement?.nextElementSibling;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (DomHandler.hasClass(nextCell, "p-editable-column")) return nextCell;
      else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  findNextEditableColumnByIndex(cell, index) {
    let nextRow = cell.parentElement?.nextElementSibling;
    if (nextRow) {
      let nextCell = nextRow.children[index];
      if (nextCell && DomHandler.hasClass(nextCell, "p-editable-column")) {
        return nextCell;
      }
      return null;
    } else {
      return null;
    }
  }
  findPrevEditableColumnByIndex(cell, index) {
    let prevRow = cell.parentElement?.previousElementSibling;
    if (prevRow) {
      let prevCell = prevRow.children[index];
      if (prevCell && DomHandler.hasClass(prevCell, "p-editable-column")) {
        return prevCell;
      }
      return null;
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pEditableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
  static ɵfac = function EditableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditableColumn)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EditableColumn,
    selectors: [["", "pEditableColumn", ""]],
    hostBindings: function EditableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function EditableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKeyDown($event);
        })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeyDown($event);
        })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
          return ctx.onArrowDown($event);
        })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
          return ctx.onArrowUp($event);
        })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
          return ctx.onArrowLeft($event);
        })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
          return ctx.onArrowRight($event);
        });
      }
    },
    inputs: {
      data: [0, "pEditableColumn", "data"],
      field: [0, "pEditableColumnField", "field"],
      rowIndex: [0, "pEditableColumnRowIndex", "rowIndex"],
      pEditableColumnDisabled: [2, "pEditableColumnDisabled", "pEditableColumnDisabled", booleanAttribute],
      pFocusCellSelector: "pFocusCellSelector"
    },
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableColumn, [{
    type: Directive,
    args: [{
      selector: "[pEditableColumn]"
    }]
  }], () => [{
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    data: [{
      type: Input,
      args: ["pEditableColumn"]
    }],
    field: [{
      type: Input,
      args: ["pEditableColumnField"]
    }],
    rowIndex: [{
      type: Input,
      args: ["pEditableColumnRowIndex"]
    }],
    pEditableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pFocusCellSelector: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKeyDown: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    onTabKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }],
    onEscapeKeyDown: [{
      type: HostListener,
      args: ["keydown.escape", ["$event"]]
    }],
    onShiftKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.shift.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.meta.tab", ["$event"]]
    }],
    onArrowDown: [{
      type: HostListener,
      args: ["keydown.arrowdown", ["$event"]]
    }],
    onArrowUp: [{
      type: HostListener,
      args: ["keydown.arrowup", ["$event"]]
    }],
    onArrowLeft: [{
      type: HostListener,
      args: ["keydown.arrowleft", ["$event"]]
    }],
    onArrowRight: [{
      type: HostListener,
      args: ["keydown.arrowright", ["$event"]]
    }]
  });
})();
var EditableRow = class _EditableRow {
  el;
  data;
  pEditableRowDisabled;
  constructor(el) {
    this.el = el;
  }
  isEnabled() {
    return this.pEditableRowDisabled !== true;
  }
  static ɵfac = function EditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditableRow)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EditableRow,
    selectors: [["", "pEditableRow", ""]],
    inputs: {
      data: [0, "pEditableRow", "data"],
      pEditableRowDisabled: [2, "pEditableRowDisabled", "pEditableRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableRow, [{
    type: Directive,
    args: [{
      selector: "[pEditableRow]"
    }]
  }], () => [{
    type: ElementRef
  }], {
    data: [{
      type: Input,
      args: ["pEditableRow"]
    }],
    pEditableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var InitEditableRow = class _InitEditableRow {
  dt;
  editableRow;
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.initRowEdit(this.editableRow.data);
    event.preventDefault();
  }
  static ɵfac = function InitEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InitEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _InitEditableRow,
    selectors: [["", "pInitEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-init"],
    hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function InitEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pInitEditableRow]",
      host: {
        class: "p-datatable-row-editor-init"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SaveEditableRow = class _SaveEditableRow {
  dt;
  editableRow;
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
    event.preventDefault();
  }
  static ɵfac = function SaveEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaveEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SaveEditableRow,
    selectors: [["", "pSaveEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-save"],
    hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SaveEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pSaveEditableRow]",
      host: {
        class: "p-datatable-row-editor-save"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CancelEditableRow = class _CancelEditableRow {
  dt;
  editableRow;
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.cancelRowEdit(this.editableRow.data);
    event.preventDefault();
  }
  static ɵfac = function CancelEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CancelEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CancelEditableRow,
    selectors: [["", "pCancelEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-cancel"],
    hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function CancelEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pCancelEditableRow]",
      host: {
        class: "p-datatable-row-editor-cancel"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CellEditor = class _CellEditor {
  dt;
  editableColumn;
  editableRow;
  _templates;
  _inputTemplate;
  _outputTemplate;
  inputTemplate;
  outputTemplate;
  constructor(dt, editableColumn, editableRow) {
    this.dt = dt;
    this.editableColumn = editableColumn;
    this.editableRow = editableRow;
  }
  ngAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this.inputTemplate = item.template;
          break;
        case "output":
          this.outputTemplate = item.template;
          break;
      }
    });
  }
  get editing() {
    return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === "row" && this.dt.isRowEditing(this.editableRow.data);
  }
  static ɵfac = function CellEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CellEditor)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableColumn, 8), ɵɵdirectiveInject(EditableRow, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CellEditor,
    selectors: [["p-cellEditor"]],
    contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c51, 5);
        ɵɵcontentQuery(dirIndex, _c522, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._inputTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._outputTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._templates = _t);
      }
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function CellEditor_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0)(1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.editing);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.editing);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellEditor, [{
    type: Component,
    args: [{
      selector: "p-cellEditor",
      template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate || _inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate || _outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableColumn,
    decorators: [{
      type: Optional
    }]
  }, {
    type: EditableRow,
    decorators: [{
      type: Optional
    }]
  }], {
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _inputTemplate: [{
      type: ContentChild,
      args: ["input"]
    }],
    _outputTemplate: [{
      type: ContentChild,
      args: ["output"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(CellEditor, {
    className: "CellEditor"
  });
})();
var TableRadioButton = class _TableRadioButton {
  dt;
  cd;
  disabled;
  value;
  index;
  inputId;
  name;
  ariaLabel;
  inputViewChild;
  checked;
  focused;
  subscription;
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectRow : this.dt.config.translation.aria.unselectRow : void 0;
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithRadio({
        originalEvent: event.originalEvent,
        rowIndex: this.index
      }, this.value);
      this.inputViewChild?.inputViewChild.nativeElement?.focus();
    }
    DomHandler.clearSelection();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TableRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableRadioButton)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableRadioButton,
    selectors: [["p-tableRadioButton"]],
    viewQuery: function TableRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c53, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      value: "value",
      index: [2, "index", "index", numberAttribute],
      inputId: "inputId",
      name: "name",
      ariaLabel: "ariaLabel"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 2,
    vars: 7,
    consts: [["rb", ""], [3, "ngModelChange", "onClick", "ngModel", "disabled", "inputId", "name", "ariaLabel", "binary", "value"]],
    template: function TableRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "p-radioButton", 1, 0);
        ɵɵtwoWayListener("ngModelChange", function TableRadioButton_Template_p_radioButton_ngModelChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onClick", function TableRadioButton_Template_p_radioButton_onClick_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onClick($event));
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵtwoWayProperty("ngModel", ctx.checked);
        ɵɵproperty("disabled", ctx.disabled)("inputId", ctx.inputId)("name", ctx.name)("ariaLabel", ctx.ariaLabel)("binary", true)("value", ctx.value);
      }
    },
    dependencies: [NgControlStatus, NgModel, RadioButton],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRadioButton, [{
    type: Component,
    args: [{
      selector: "p-tableRadioButton",
      template: ` <p-radioButton #rb [(ngModel)]="checked" [disabled]="disabled" [inputId]="inputId" [name]="name" [ariaLabel]="ariaLabel" [binary]="true" [value]="value" (onClick)="onClick($event)" /> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: Table
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    index: [{
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
    ariaLabel: [{
      type: Input
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["rb"]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(TableRadioButton, {
    className: "TableRadioButton"
  });
})();
var TableCheckbox = class _TableCheckbox {
  dt;
  tableService;
  cd;
  disabled;
  value;
  index;
  inputId;
  name;
  required;
  ariaLabel;
  checked;
  focused;
  subscription;
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value) && !this.disabled;
      this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectRow : this.dt.config.translation.aria.unselectRow : void 0;
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithCheckbox({
        originalEvent: event,
        rowIndex: this.index
      }, this.value);
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TableCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableCheckbox)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableCheckbox,
    selectors: [["p-tableCheckbox"]],
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      value: "value",
      index: [2, "index", "index", numberAttribute],
      inputId: "inputId",
      name: "name",
      required: [2, "required", "required", booleanAttribute],
      ariaLabel: "ariaLabel"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 2,
    vars: 5,
    consts: [[3, "ngModelChange", "onChange", "ngModel", "binary", "disabled", "ariaLabel"], [4, "ngIf"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p-checkbox", 0);
        ɵɵtwoWayListener("ngModelChange", function TableCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
          ɵɵtwoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return $event;
        });
        ɵɵlistener("onChange", function TableCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        ɵɵtemplate(1, TableCheckbox_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵtwoWayProperty("ngModel", ctx.checked);
        ɵɵproperty("binary", true)("disabled", ctx.disabled)("ariaLabel", ctx.ariaLabel);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dt.checkboxIconTemplate || ctx.dt._checkboxIconTemplate);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, PrimeTemplate, NgControlStatus, NgModel, Checkbox],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableCheckbox",
      template: `
        <p-checkbox [(ngModel)]="checked" [binary]="true" (onChange)="onClick($event)" [disabled]="disabled" [ariaLabel]="ariaLabel">
            <ng-container *ngIf="dt.checkboxIconTemplate || dt._checkboxIconTemplate">
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="dt.checkboxIconTemplate || dt._checkboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    index: [{
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
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(TableCheckbox, {
    className: "TableCheckbox"
  });
})();
var TableHeaderCheckbox = class _TableHeaderCheckbox {
  dt;
  tableService;
  cd;
  disabled;
  inputId;
  name;
  ariaLabel;
  checked;
  focused;
  selectionChangeSubscription;
  valueChangeSubscription;
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
      this.ariaLabel = this.ariaLabel || this.dt.config.translation.aria ? this.checked ? this.dt.config.translation.aria.selectAll : this.dt.config.translation.aria.unselectAll : void 0;
    });
    this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  ngOnInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event) {
    if (!this.disabled) {
      if (this.dt.value && this.dt.value.length > 0) {
        this.dt.toggleRowsWithCheckbox(event, this.checked);
      }
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  isDisabled() {
    return this.disabled || !this.dt.value || !this.dt.value.length;
  }
  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    if (this.dt._selectAll !== null) {
      return this.dt._selectAll;
    } else {
      const data = this.dt.selectionPageOnly ? this.dt.dataToRender(this.dt.processedData) : this.dt.processedData;
      const val = this.dt.frozenValue ? [...this.dt.frozenValue, ...data] : data;
      const selectableVal = this.dt.rowSelectable ? val.filter((data2, index) => this.dt.rowSelectable({
        data: data2,
        index
      })) : val;
      return ObjectUtils.isNotEmpty(selectableVal) && ObjectUtils.isNotEmpty(this.dt.selection) && selectableVal.every((v) => this.dt.selection.some((s) => this.dt.equals(v, s)));
    }
  }
  static ɵfac = function TableHeaderCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableHeaderCheckbox)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableHeaderCheckbox,
    selectors: [["p-tableHeaderCheckbox"]],
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      inputId: "inputId",
      name: "name",
      ariaLabel: "ariaLabel"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 2,
    vars: 5,
    consts: [[3, "ngModelChange", "onChange", "ngModel", "binary", "disabled", "ariaLabel"], [4, "ngIf"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableHeaderCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p-checkbox", 0);
        ɵɵtwoWayListener("ngModelChange", function TableHeaderCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
          ɵɵtwoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return $event;
        });
        ɵɵlistener("onChange", function TableHeaderCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        ɵɵtemplate(1, TableHeaderCheckbox_ng_container_1_Template, 2, 0, "ng-container", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵtwoWayProperty("ngModel", ctx.checked);
        ɵɵproperty("binary", true)("disabled", ctx.isDisabled())("ariaLabel", ctx.ariaLabel);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dt.headerCheckboxIconTemplate || ctx.dt._headerCheckboxIconTemplate);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, PrimeTemplate, NgControlStatus, NgModel, Checkbox],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeaderCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableHeaderCheckbox",
      template: `
        <p-checkbox [(ngModel)]="checked" (onChange)="onClick($event)" [binary]="true" [disabled]="isDisabled()" [ariaLabel]="ariaLabel">
            <ng-container *ngIf="dt.headerCheckboxIconTemplate || dt._headerCheckboxIconTemplate">
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="dt.headerCheckboxIconTemplate || dt._headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </ng-template>
            </ng-container>
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }, {
    type: ChangeDetectorRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(TableHeaderCheckbox, {
    className: "TableHeaderCheckbox"
  });
})();
var ReorderableRowHandle = class _ReorderableRowHandle {
  el;
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
  }
  static ɵfac = function ReorderableRowHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableRowHandle)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ReorderableRowHandle,
    selectors: [["", "pReorderableRowHandle", ""]],
    hostAttrs: [1, "p-datatable-reorderable-row-handle"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRowHandle, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRowHandle]",
      host: {
        class: "p-datatable-reorderable-row-handle"
      }
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var ReorderableRow = class _ReorderableRow {
  renderer;
  dt;
  el;
  zone;
  index;
  pReorderableRowDisabled;
  mouseDownListener;
  dragStartListener;
  dragEndListener;
  dragOverListener;
  dragLeaveListener;
  dropListener;
  constructor(renderer, dt, el, zone) {
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.el.nativeElement.droppable = true;
      this.bindEvents();
    }
  }
  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
      this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
      this.dragEndListener = this.renderer.listen(this.el.nativeElement, "dragend", this.onDragEnd.bind(this));
      this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
      this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
    });
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragEndListener) {
      this.dragEndListener();
      this.dragEndListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event) {
    const targetElement = event.target;
    const isHandleClicked = this.isHandleElement(targetElement);
    this.el.nativeElement.draggable = isHandleClicked;
  }
  isHandleElement(element) {
    if (element?.classList.contains("p-datatable-reorderable-row-handle")) {
      return true;
    }
    if (element?.parentElement && !["TD", "TR"].includes(element?.parentElement?.tagName)) {
      return this.isHandleElement(element?.parentElement);
    }
    return false;
  }
  onDragStart(event) {
    this.dt.onRowDragStart(event, this.index);
  }
  onDragEnd(event) {
    this.dt.onRowDragEnd(event);
    this.el.nativeElement.draggable = false;
  }
  onDragOver(event) {
    this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
    event.preventDefault();
  }
  onDragLeave(event) {
    this.dt.onRowDragLeave(event, this.el.nativeElement);
  }
  isEnabled() {
    return this.pReorderableRowDisabled !== true;
  }
  onDrop(event) {
    if (this.isEnabled() && this.dt.rowDragging) {
      this.dt.onRowDrop(event, this.el.nativeElement);
    }
    event.preventDefault();
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
  static ɵfac = function ReorderableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableRow)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ReorderableRow,
    selectors: [["", "pReorderableRow", ""]],
    hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function ReorderableRow_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      index: [0, "pReorderableRow", "index"],
      pReorderableRowDisabled: [2, "pReorderableRowDisabled", "pReorderableRowDisabled", booleanAttribute]
    },
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRow, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRow]"
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    index: [{
      type: Input,
      args: ["pReorderableRow"]
    }],
    pReorderableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var ColumnFilter = class _ColumnFilter extends BaseComponent {
  /**
   * Property represented by the column.
   * @group Props
   */
  field;
  /**
   * Type of the input.
   * @group Props
   */
  type = "text";
  /**
   * Filter display.
   * @group Props
   */
  display = "row";
  /**
   * Decides whether to display filter menu popup.
   * @group Props
   */
  showMenu = true;
  /**
   * Filter match mode.
   * @group Props
   */
  matchMode;
  /**
   * Filter operator.
   * @defaultValue 'AND'
   * @group Props
   */
  operator = FilterOperator.AND;
  /**
   * Decides whether to display filter operator.
   * @group Props
   */
  showOperator = true;
  /**
   * Decides whether to display clear filter button.
   * @group Props
   */
  showClearButton = true;
  /**
   * Decides whether to display apply filter button.
   * @group Props
   */
  showApplyButton = true;
  /**
   * Decides whether to display filter match modes.
   * @group Props
   */
  showMatchModes = true;
  /**
   * Decides whether to display add filter button.
   * @group Props
   */
  showAddButton = true;
  /**
   * Decides whether to close popup on clear button click.
   * @group Props
   */
  hideOnClear = false;
  /**
   * Filter placeholder.
   * @group Props
   */
  placeholder;
  /**
   * Filter match mode options.
   * @group Props
   */
  matchModeOptions;
  /**
   * Defines maximum amount of constraints.
   * @group Props
   */
  maxConstraints = 2;
  /**
   * Defines minimum fraction of digits.
   * @group Props
   */
  minFractionDigits;
  /**
   * Defines maximum fraction of digits.
   * @group Props
   */
  maxFractionDigits;
  /**
   * Defines prefix of the filter.
   * @group Props
   */
  prefix;
  /**
   * Defines suffix of the filter.
   * @group Props
   */
  suffix;
  /**
   * Defines filter locale.
   * @group Props
   */
  locale;
  /**
   * Defines filter locale matcher.
   * @group Props
   */
  localeMatcher;
  /**
   * Enables currency input.
   * @group Props
   */
  currency;
  /**
   * Defines the display of the currency input.
   * @group Props
   */
  currencyDisplay;
  /**
   * Defines if filter grouping will be enabled.
   * @group Props
   */
  useGrouping = true;
  /**
   * Defines the visibility of buttons.
   * @group Props
   */
  showButtons = true;
  /**
   * Defines the aria-label of the form element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to pass all filter button property object
   * @defaultValue {
   filter: { severity: 'secondary', text: true, rounded: true },
   inline: {
   clear: { severity: 'secondary', text: true, rounded: true }
   },
   popover: {
   addRule: { severity: 'info', text: true, size: 'small' },
   removeRule: { severity: 'danger', text: true, size: 'small' },
   apply: { size: 'small' },
   clear: { outlined: true, size: 'small' }
   }
   }
   */
  filterButtonProps = {
    filter: {
      severity: "secondary",
      text: true,
      rounded: true
    },
    inline: {
      clear: {
        severity: "secondary",
        text: true,
        rounded: true
      }
    },
    popover: {
      addRule: {
        severity: "info",
        text: true,
        size: "small"
      },
      removeRule: {
        severity: "danger",
        text: true,
        size: "small"
      },
      apply: {
        size: "small"
      },
      clear: {
        outlined: true,
        size: "small"
      }
    }
  };
  /**
   * Callback to invoke on overlay is shown.
   * @param {AnimationEvent} originalEvent - animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on overlay is hidden.
   * @param {AnimationEvent} originalEvent - animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  icon;
  clearButtonViewChild;
  _templates;
  overlaySubscription;
  _headerTemplate;
  headerTemplate;
  _filterTemplate;
  filterTemplate;
  _footerTemplate;
  footerTemplate;
  _filterIconTemplate;
  filterIconTemplate;
  _removeRuleIconTemplate;
  removeRuleIconTemplate;
  _addRuleIconTemplate;
  addRuleIconTemplate;
  _clearFilterIconTemplate;
  clearFilterIconTemplate;
  operatorOptions;
  overlayVisible;
  overlay;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  matchModes;
  translationSubscription;
  resetSubscription;
  selfClick;
  overlayEventListener;
  overlayId;
  get fieldConstraints() {
    return this.dt.filters ? this.dt.filters[this.field] : null;
  }
  get showRemoveIcon() {
    return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
  }
  get showMenuButton() {
    return this.showMenu && (this.display === "row" ? this.type !== "boolean" : true);
  }
  get isShowOperator() {
    return this.showOperator && this.type !== "boolean";
  }
  get isShowAddConstraint() {
    return this.showAddButton && this.type !== "boolean" && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
  }
  get showMenuButtonLabel() {
    return this.config.getTranslation(TranslationKeys.SHOW_FILTER_MENU);
  }
  get applyButtonLabel() {
    return this.config.getTranslation(TranslationKeys.APPLY);
  }
  get clearButtonLabel() {
    return this.config.getTranslation(TranslationKeys.CLEAR);
  }
  get addRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.ADD_RULE);
  }
  get removeRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.REMOVE_RULE);
  }
  get noFilterLabel() {
    return this.config.getTranslation(TranslationKeys.NO_FILTER);
  }
  get filterMenuButtonAriaLabel() {
    return this.config.translation ? this.overlayVisible ? this.config.translation.aria.hideFilterMenu : this.config.translation.aria.showFilterMenu : void 0;
  }
  get removeRuleButtonAriaLabel() {
    return this.config.translation ? this.config.translation.removeRule : void 0;
  }
  get filterOperatorAriaLabel() {
    return this.config.translation ? this.config.translation.aria.filterOperator : void 0;
  }
  get filterConstraintAriaLabel() {
    return this.config.translation ? this.config.translation.aria.filterConstraint : void 0;
  }
  dt = inject(Table);
  overlayService = inject(OverlayService);
  hostName = "Table";
  parentInstance = inject(forwardRef(() => Table));
  ngOnInit() {
    super.ngOnInit();
    this.overlayId = UniqueComponentId();
    if (!this.dt.filters[this.field]) {
      this.initFieldFilterConstraint();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    });
    this.generateMatchModeOptions();
    this.generateOperatorOptions();
  }
  generateMatchModeOptions() {
    this.matchModes = this.matchModeOptions || this.config.filterMatchModeOptions[this.type]?.map((key) => {
      return {
        label: this.config.getTranslation(key),
        value: key
      };
    });
  }
  generateOperatorOptions() {
    this.operatorOptions = [{
      label: this.config.getTranslation(TranslationKeys.MATCH_ALL),
      value: FilterOperator.AND
    }, {
      label: this.config.getTranslation(TranslationKeys.MATCH_ANY),
      value: FilterOperator.OR
    }];
  }
  ngAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        case "clearfiltericon":
          this.clearFilterIconTemplate = item.template;
          break;
        case "removeruleicon":
          this.removeRuleIconTemplate = item.template;
          break;
        case "addruleicon":
          this.addRuleIconTemplate = item.template;
          break;
        default:
          this.filterTemplate = item.template;
          break;
      }
    });
  }
  initFieldFilterConstraint() {
    let defaultMatchMode = this.getDefaultMatchMode();
    this.dt.filters[this.field] = this.display == "row" ? {
      value: null,
      matchMode: defaultMatchMode
    } : [{
      value: null,
      matchMode: defaultMatchMode,
      operator: this.operator
    }];
  }
  onMenuMatchModeChange(value, filterMeta) {
    filterMeta.matchMode = value;
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  onRowMatchModeChange(matchMode) {
    const fieldFilter = this.dt.filters[this.field];
    fieldFilter.matchMode = matchMode;
    if (fieldFilter.value) {
      this.dt._filter();
    }
    this.hide();
  }
  onRowMatchModeKeyDown(event) {
    let item = event.target;
    switch (event.key) {
      case "ArrowDown":
        var nextItem = this.findNextItem(item);
        if (nextItem) {
          item.removeAttribute("tabindex");
          nextItem.tabIndex = "0";
          nextItem.focus();
        }
        event.preventDefault();
        break;
      case "ArrowUp":
        var prevItem = this.findPrevItem(item);
        if (prevItem) {
          item.removeAttribute("tabindex");
          prevItem.tabIndex = "0";
          prevItem.focus();
        }
        event.preventDefault();
        break;
    }
  }
  onRowClearItemClick() {
    this.clearFilter();
    this.hide();
  }
  isRowMatchModeSelected(matchMode) {
    return this.dt.filters[this.field].matchMode === matchMode;
  }
  addConstraint() {
    this.dt.filters[this.field].push({
      value: null,
      matchMode: this.getDefaultMatchMode(),
      operator: this.getDefaultOperator()
    });
    DomHandler.focus(this.clearButtonViewChild.nativeElement);
  }
  removeConstraint(filterMeta) {
    this.dt.filters[this.field] = this.dt.filters[this.field].filter((meta) => meta !== filterMeta);
    if (!this.showApplyButton) {
      this.dt._filter();
    }
    DomHandler.focus(this.clearButtonViewChild.nativeElement);
  }
  onOperatorChange(value) {
    this.dt.filters[this.field].forEach((filterMeta) => {
      filterMeta.operator = value;
      this.operator = value;
    });
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  toggleMenu(event) {
    this.overlayVisible = !this.overlayVisible;
    event.stopPropagation();
  }
  onToggleButtonKeyDown(event) {
    switch (event.key) {
      case "Escape":
      case "Tab":
        this.overlayVisible = false;
        break;
      case "ArrowDown":
        if (this.overlayVisible) {
          let focusable = DomHandler.getFocusableElements(this.overlay);
          if (focusable) {
            focusable[0].focus();
          }
          event.preventDefault();
        } else if (event.altKey) {
          this.overlayVisible = true;
          event.preventDefault();
        }
        break;
      case "Enter":
        this.toggleMenu(event);
        event.preventDefault();
        break;
    }
  }
  onEscape() {
    this.overlayVisible = false;
    this.icon?.nativeElement.focus();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return DomHandler.hasClass(nextItem, "p-datatable-filter-constraint-separator") ? this.findNextItem(nextItem) : nextItem;
    else return item.parentElement?.firstElementChild;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return DomHandler.hasClass(prevItem, "p-datatable-filter-constraint-separator") ? this.findPrevItem(prevItem) : prevItem;
    else return item.parentElement?.lastElementChild;
  }
  onContentClick() {
    this.selfClick = true;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.overlay = event.element;
        this.renderer.appendChild(this.document.body, this.overlay);
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        DomHandler.absolutePosition(this.overlay, this.icon?.nativeElement);
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
        this.overlayEventListener = (e) => {
          if (this.overlay && this.overlay.contains(e.target)) {
            this.selfClick = true;
          }
        };
        this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
        this.onShow.emit({
          originalEvent: event
        });
        break;
      case "void":
        this.onOverlayHide();
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "visible":
        this.focusOnFirstElement();
        break;
      case "void":
        zindexutils.clear(event.element);
        this.onHide.emit({
          originalEvent: event
        });
        break;
    }
  }
  focusOnFirstElement() {
    if (this.overlay) {
      DomHandler.focus(DomHandler.getFirstFocusableElement(this.overlay, ""));
    }
  }
  getDefaultMatchMode() {
    if (this.matchMode) {
      return this.matchMode;
    } else {
      if (this.type === "text") return FilterMatchMode.STARTS_WITH;
      else if (this.type === "numeric") return FilterMatchMode.EQUALS;
      else if (this.type === "date") return FilterMatchMode.DATE_IS;
      else return FilterMatchMode.CONTAINS;
    }
  }
  getDefaultOperator() {
    return this.dt.filters ? this.dt.filters[this.field][0].operator : this.operator;
  }
  hasRowFilter() {
    return this.dt.filters[this.field] && !this.dt.isFilterBlank(this.dt.filters[this.field].value);
  }
  get hasFilter() {
    let fieldFilter = this.dt.filters[this.field];
    if (fieldFilter) {
      if (Array.isArray(fieldFilter)) return !this.dt.isFilterBlank(fieldFilter[0].value);
      else return !this.dt.isFilterBlank(fieldFilter.value);
    }
    return false;
  }
  isOutsideClicked(event) {
    return !(DomHandler.hasClass(this.overlay?.nextElementSibling, "p-overlay") || DomHandler.hasClass(this.overlay?.nextElementSibling, "p-popover") || this.overlay?.isSameNode(event.target) || this.overlay?.contains(event.target) || this.icon?.nativeElement.isSameNode(event.target) || this.icon?.nativeElement.contains(event.target) || DomHandler.hasClass(event.target, "p-datatable-filter-add-rule-button") || DomHandler.hasClass(event.target.parentElement, "p-datatable-filter-add-rule-button") || DomHandler.hasClass(event.target, "p-datatable-filter-remove-rule-button") || DomHandler.hasClass(event.target.parentElement, "p-datatable-filter-remove-rule-button"));
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event) => {
        const dialogElements = document.querySelectorAll('[role="dialog"]');
        const targetIsColumnFilterMenuButton = event.target.closest(".p-datatable-column-filter-button");
        if (this.overlayVisible && this.isOutsideClicked(event) && (targetIsColumnFilterMenuButton || dialogElements?.length <= 1)) {
          this.hide();
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
        if (this.overlayVisible && !DomHandler.isTouchDevice()) {
          this.hide();
        }
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.icon?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  clearFilter() {
    this.initFieldFilterConstraint();
    this.dt._filter();
    if (this.hideOnClear) this.hide();
  }
  applyFilter() {
    this.dt._filter();
    this.hide();
  }
  ngOnDestroy() {
    if (this.overlay) {
      this.renderer.appendChild(this.el.nativeElement, this.overlay);
      zindexutils.clear(this.overlay);
      this.onOverlayHide();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.resetSubscription) {
      this.resetSubscription.unsubscribe();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵColumnFilter_BaseFactory;
    return function ColumnFilter_Factory(__ngFactoryType__) {
      return (ɵColumnFilter_BaseFactory || (ɵColumnFilter_BaseFactory = ɵɵgetInheritedFactory(_ColumnFilter)))(__ngFactoryType__ || _ColumnFilter);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ColumnFilter,
    selectors: [["p-columnFilter"]],
    contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c04, 4);
        ɵɵcontentQuery(dirIndex, _c54, 4);
        ɵɵcontentQuery(dirIndex, _c52, 4);
        ɵɵcontentQuery(dirIndex, _c55, 4);
        ɵɵcontentQuery(dirIndex, _c56, 4);
        ɵɵcontentQuery(dirIndex, _c57, 4);
        ɵɵcontentQuery(dirIndex, _c58, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._filterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._filterIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._removeRuleIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._addRuleIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._clearFilterIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._templates = _t);
      }
    },
    viewQuery: function ColumnFilter_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(Button, 5, ElementRef);
        ɵɵviewQuery(_c59, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.icon = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearButtonViewChild = _t.first);
      }
    },
    inputs: {
      field: "field",
      type: "type",
      display: "display",
      showMenu: [2, "showMenu", "showMenu", booleanAttribute],
      matchMode: "matchMode",
      operator: "operator",
      showOperator: [2, "showOperator", "showOperator", booleanAttribute],
      showClearButton: [2, "showClearButton", "showClearButton", booleanAttribute],
      showApplyButton: [2, "showApplyButton", "showApplyButton", booleanAttribute],
      showMatchModes: [2, "showMatchModes", "showMatchModes", booleanAttribute],
      showAddButton: [2, "showAddButton", "showAddButton", booleanAttribute],
      hideOnClear: [2, "hideOnClear", "hideOnClear", booleanAttribute],
      placeholder: "placeholder",
      matchModeOptions: "matchModeOptions",
      maxConstraints: [2, "maxConstraints", "maxConstraints", numberAttribute],
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      locale: "locale",
      localeMatcher: "localeMatcher",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      ariaLabel: "ariaLabel",
      filterButtonProps: "filterButtonProps"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature],
    decls: 5,
    vars: 5,
    consts: [["icon", ""], ["menu", ""], ["clearBtn", ""], [3, "ngClass"], ["class", "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", 4, "ngIf"], [3, "styleClass", "ariaLabel", "buttonProps", "click", "keydown", 4, "ngIf"], [3, "styleClass", "ariaLabel", "buttonProps", "onClick", 4, "ngIf"], ["role", "dialog", 3, "ngClass", "id", "click", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons"], [3, "click", "keydown", "styleClass", "ariaLabel", "buttonProps"], [4, "ngIf"], ["class", "pi-filter-icon", 4, "ngIf"], [1, "pi-filter-icon"], [4, "ngTemplateOutlet"], [3, "onClick", "styleClass", "ariaLabel", "buttonProps"], ["role", "dialog", 3, "click", "keydown.escape", "ngClass", "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass", "p-datatable-filter-constraint-selected", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [3, "click", "keydown", "keydown.enter", "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "outlined", "label", "buttonProps", "onClick", 4, "ngIf"], ["size", "small", 3, "label", "buttonProps", "onClick", 4, "ngIf"], [3, "ngModelChange", "options", "ngModel", "styleClass"], [3, "options", "ngModel", "styleClass", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["severity", "danger", "size", "small", 3, "styleClass", "text", "ariaLabel", "label", "buttonProps", "onClick", 4, "ngIf"], ["severity", "danger", "size", "small", 3, "onClick", "styleClass", "text", "ariaLabel", "label", "buttonProps"], ["type", "button", "size", "small", 3, "onClick", "label", "styleClass", "text", "buttonProps"], [3, "onClick", "outlined", "label", "buttonProps"], ["size", "small", 3, "onClick", "label", "buttonProps"]],
    template: function ColumnFilter_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 3);
        ɵɵtemplate(1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 16, "p-columnFilterFormElement", 4)(2, ColumnFilter_p_button_2_Template, 3, 6, "p-button", 5)(3, ColumnFilter_p_button_3_Template, 3, 3, "p-button", 6)(4, ColumnFilter_div_4_Template, 6, 14, "div", 7);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.cx("filter"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.display === "row");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showMenuButton);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showClearButton && ctx.display === "row" && ctx.hasFilter);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showMenu && ctx.overlayVisible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, Select, NgControlStatus, NgModel, Button, FilterIcon, FilterSlashIcon, PlusIcon, TrashIcon, ColumnFilterFormElement],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilter, [{
    type: Component,
    args: [{
      selector: "p-columnFilter",
      template: `
        <div [ngClass]="cx('filter')">
            <p-columnFilterFormElement
                *ngIf="display === 'row'"
                class="p-fluid"
                [type]="type"
                [field]="field"
                [ariaLabel]="ariaLabel"
                [filterConstraint]="dt.filters[field]"
                [filterTemplate]="filterTemplate"
                [placeholder]="placeholder"
                [minFractionDigits]="minFractionDigits"
                [maxFractionDigits]="maxFractionDigits"
                [prefix]="prefix"
                [suffix]="suffix"
                [locale]="locale"
                [localeMatcher]="localeMatcher"
                [currency]="currency"
                [currencyDisplay]="currencyDisplay"
                [useGrouping]="useGrouping"
                [showButtons]="showButtons"
            ></p-columnFilterFormElement>
            <p-button
                *ngIf="showMenuButton"
                [styleClass]="cx('pcColumnFilterButton')"
                [attr.aria-haspopup]="true"
                [ariaLabel]="filterMenuButtonAriaLabel"
                [attr.aria-controls]="overlayVisible ? overlayId : null"
                [attr.aria-expanded]="overlayVisible ?? false"
                (click)="toggleMenu($event)"
                (keydown)="onToggleButtonKeyDown($event)"
                [buttonProps]="filterButtonProps?.filter"
            >
                <ng-template #icon>
                    <FilterIcon *ngIf="!filterIconTemplate && !_filterIconTemplate" />
                    <span class="pi-filter-icon" *ngIf="filterIconTemplate || _filterIconTemplate">
                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                    </span>
                </ng-template>
            </p-button>
            <p-button *ngIf="showClearButton && display === 'row' && hasFilter" [styleClass]="cx('pcColumnfilterClearButton')" (onClick)="clearFilter()" [ariaLabel]="clearButtonLabel" [buttonProps]="filterButtonProps?.inline?.clear">
                <ng-template #icon>
                    <FilterSlashIcon *ngIf="!clearFilterIconTemplate && !_clearFilterIconTemplate" />
                    <ng-template *ngTemplateOutlet="clearFilterIconTemplate || _clearFilterIconTemplate"></ng-template>
                </ng-template>
            </p-button>
            <div
                *ngIf="showMenu && overlayVisible"
                [ngClass]="cx('filterOverlay')"
                [id]="overlayId"
                [attr.aria-modal]="true"
                role="dialog"
                (click)="onContentClick()"
                [@overlayAnimation]="'visible'"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                (keydown.escape)="onEscape()"
            >
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate; context: { $implicit: field }"></ng-container>
                <ul *ngIf="display === 'row'; else menu" [ngClass]="cx('filterConstraintList')">
                    <li
                        *ngFor="let matchMode of matchModes; let i = index"
                        (click)="onRowMatchModeChange(matchMode.value)"
                        (keydown)="onRowMatchModeKeyDown($event)"
                        (keydown.enter)="onRowMatchModeChange(matchMode.value)"
                        [ngClass]="cx('filterConstraint')"
                        [class.p-datatable-filter-constraint-selected]="isRowMatchModeSelected(matchMode.value)"
                        [attr.tabindex]="i === 0 ? '0' : null"
                    >
                        {{ matchMode.label }}
                    </li>
                    <li [ngClass]="cx('filterConstraintSeparator')"></li>
                    <li [ngClass]="cx('filterConstraint')" (click)="onRowClearItemClick()" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="onRowClearItemClick()">
                        {{ noFilterLabel }}
                    </li>
                </ul>
                <ng-template #menu>
                    <div [ngClass]="cx('filterOperator')" *ngIf="isShowOperator">
                        <p-select [options]="operatorOptions" [ngModel]="operator" (ngModelChange)="onOperatorChange($event)" [styleClass]="cx('pcFilterOperatorDropdown')"></p-select>
                    </div>
                    <div [ngClass]="cx('filterRuleList')">
                        <div *ngFor="let fieldConstraint of fieldConstraints; let i = index" [ngClass]="cx('filterRule')">
                            <p-select
                                *ngIf="showMatchModes && matchModes"
                                [options]="matchModes"
                                [ngModel]="fieldConstraint.matchMode"
                                (ngModelChange)="onMenuMatchModeChange($event, fieldConstraint)"
                                [styleClass]="cx('pcFilterConstraintDropdown')"
                            ></p-select>
                            <p-columnFilterFormElement
                                [type]="type"
                                [field]="field"
                                [filterConstraint]="fieldConstraint"
                                [filterTemplate]="filterTemplate || _filterTemplate"
                                [placeholder]="placeholder"
                                [minFractionDigits]="minFractionDigits"
                                [maxFractionDigits]="maxFractionDigits"
                                [prefix]="prefix"
                                [suffix]="suffix"
                                [locale]="locale"
                                [localeMatcher]="localeMatcher"
                                [currency]="currency"
                                [currencyDisplay]="currencyDisplay"
                                [useGrouping]="useGrouping"
                            ></p-columnFilterFormElement>
                            <div>
                                <p-button
                                    *ngIf="showRemoveIcon"
                                    [styleClass]="cx('pcFilterRemoveRuleButton')"
                                    [text]="true"
                                    severity="danger"
                                    size="small"
                                    (onClick)="removeConstraint(fieldConstraint)"
                                    [ariaLabel]="removeRuleButtonLabel"
                                    [label]="removeRuleButtonLabel"
                                    [buttonProps]="filterButtonProps?.popover?.removeRule"
                                >
                                    <TrashIcon *ngIf="!removeRuleIconTemplate && !_removeRuleIconTemplate" />
                                    <ng-template *ngTemplateOutlet="removeRuleIconTemplate || _removeRuleIconTemplate"></ng-template>
                                </p-button>
                            </div>
                        </div>
                    </div>
                    <div *ngIf="isShowAddConstraint">
                        <p-button
                            type="button"
                            [label]="addRuleButtonLabel"
                            [attr.aria-label]="addRuleButtonLabel"
                            [styleClass]="cx('pcFilterAddRuleButton')"
                            [text]="true"
                            size="small"
                            (onClick)="addConstraint()"
                            [buttonProps]="filterButtonProps?.popover?.addRule"
                        >
                            <PlusIcon *ngIf="!addRuleIconTemplate && !_addRuleIconTemplate" />
                            <ng-template *ngTemplateOutlet="addRuleIconTemplate || _addRuleIconTemplate"></ng-template>
                        </p-button>
                    </div>
                    <div [ngClass]="cx('filterButtonbar')">
                        <p-button #clearBtn *ngIf="showClearButton" [outlined]="true" (onClick)="clearFilter()" [attr.aria-label]="clearButtonLabel" [label]="clearButtonLabel" [buttonProps]="filterButtonProps?.popover?.clear" />
                        <p-button *ngIf="showApplyButton" (onClick)="applyFilter()" size="small" [label]="applyButtonLabel" [attr.aria-label]="applyButtonLabel" [buttonProps]="filterButtonProps?.popover?.apply" />
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate; context: { $implicit: field }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])],
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    showMenu: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    matchMode: [{
      type: Input
    }],
    operator: [{
      type: Input
    }],
    showOperator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClearButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showApplyButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showMatchModes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showAddButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    matchModeOptions: [{
      type: Input
    }],
    maxConstraints: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    filterButtonProps: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    icon: [{
      type: ViewChild,
      args: [Button, {
        static: false,
        read: ElementRef
      }]
    }],
    clearButtonViewChild: [{
      type: ViewChild,
      args: ["clearBtn"]
    }],
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    _removeRuleIconTemplate: [{
      type: ContentChild,
      args: ["removeruleicon", {
        descendants: false
      }]
    }],
    _addRuleIconTemplate: [{
      type: ContentChild,
      args: ["addruleicon", {
        descendants: false
      }]
    }],
    _clearFilterIconTemplate: [{
      type: ContentChild,
      args: ["clearfiltericon", {
        descendants: false
      }]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ColumnFilter, {
    className: "ColumnFilter"
  });
})();
var ColumnFilterFormElement = class _ColumnFilterFormElement {
  dt;
  colFilter;
  field;
  type;
  filterConstraint;
  filterTemplate;
  placeholder;
  minFractionDigits;
  maxFractionDigits;
  prefix;
  suffix;
  locale;
  localeMatcher;
  currency;
  currencyDisplay;
  useGrouping = true;
  ariaLabel;
  get showButtons() {
    return this.colFilter.showButtons;
  }
  filterCallback;
  constructor(dt, colFilter) {
    this.dt = dt;
    this.colFilter = colFilter;
  }
  ngOnInit() {
    this.filterCallback = (value) => {
      this.filterConstraint.value = value;
      this.dt._filter();
    };
  }
  onModelChange(value) {
    this.filterConstraint.value = value;
    if (this.type === "date" || this.type === "boolean" || value === "") {
      this.dt._filter();
    }
  }
  onTextInputEnterKeyDown(event) {
    this.dt._filter();
    event.preventDefault();
  }
  onNumericInputKeyDown(event) {
    if (event.key === "Enter") {
      this.dt._filter();
      event.preventDefault();
    }
  }
  static ɵfac = function ColumnFilterFormElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColumnFilterFormElement)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ColumnFilter));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColumnFilterFormElement,
    selectors: [["p-columnFilterFormElement"]],
    inputs: {
      field: "field",
      type: "type",
      filterConstraint: "filterConstraint",
      filterTemplate: "filterTemplate",
      placeholder: "placeholder",
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)],
      prefix: "prefix",
      suffix: "suffix",
      locale: "locale",
      localeMatcher: "localeMatcher",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      ariaLabel: "ariaLabel"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 3,
    vars: 2,
    consts: [["builtInElement", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "ariaLabel", "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "indeterminate", "binary", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["appendTo", "body", 3, "ariaLabel", "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "input", "keydown.enter", "ariaLabel", "value"], [3, "ngModelChange", "onKeyDown", "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], [3, "ngModelChange", "indeterminate", "binary", "ngModel"], ["appendTo", "body", 3, "ngModelChange", "ariaLabel", "placeholder", "ngModel"]],
    template: function ColumnFilterFormElement_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ColumnFilterFormElement_ng_container_0_Template, 2, 19, "ng-container", 1)(1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const builtInElement_r6 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.filterTemplate)("ngIfElse", builtInElement_r6);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, InputText, NgControlStatus, NgModel, DatePicker, InputNumber, Checkbox],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilterFormElement, [{
    type: Component,
    args: [{
      selector: "p-columnFilterFormElement",
      template: `
        <ng-container *ngIf="filterTemplate; else builtInElement">
            <ng-container
                *ngTemplateOutlet="
                    filterTemplate;
                    context: {
                        $implicit: filterConstraint.value,
                        filterCallback: filterCallback,
                        type: type,
                        field: field,
                        filterConstraint: filterConstraint,
                        placeholder: placeholder,
                        minFractionDigits: minFractionDigits,
                        maxFractionDigits: maxFractionDigits,
                        prefix: prefix,
                        suffix: suffix,
                        locale: locale,
                        localeMatcher: localeMatcher,
                        currency: currency,
                        currencyDisplay: currencyDisplay,
                        useGrouping: useGrouping,
                        showButtons: showButtons
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #builtInElement>
            <ng-container [ngSwitch]="type">
                <input
                    *ngSwitchCase="'text'"
                    type="text"
                    [ariaLabel]="ariaLabel"
                    pInputText
                    [value]="filterConstraint?.value"
                    (input)="onModelChange($event.target.value)"
                    (keydown.enter)="onTextInputEnterKeyDown($event)"
                    [attr.placeholder]="placeholder"
                />
                <p-inputNumber
                    *ngSwitchCase="'numeric'"
                    [ngModel]="filterConstraint?.value"
                    (ngModelChange)="onModelChange($event)"
                    (onKeyDown)="onNumericInputKeyDown($event)"
                    [showButtons]="showButtons"
                    [minFractionDigits]="minFractionDigits"
                    [maxFractionDigits]="maxFractionDigits"
                    [ariaLabel]="ariaLabel"
                    [prefix]="prefix"
                    [suffix]="suffix"
                    [placeholder]="placeholder"
                    [mode]="currency ? 'currency' : 'decimal'"
                    [locale]="locale"
                    [localeMatcher]="localeMatcher"
                    [currency]="currency"
                    [currencyDisplay]="currencyDisplay"
                    [useGrouping]="useGrouping"
                ></p-inputNumber>
                <p-checkbox [indeterminate]="true" [binary]="true" *ngSwitchCase="'boolean'" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)" />

                <p-datepicker [ariaLabel]="ariaLabel" *ngSwitchCase="'date'" [placeholder]="placeholder" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)" appendTo="body"></p-datepicker>
            </ng-container>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: Table
  }, {
    type: ColumnFilter
  }], {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    filterConstraint: [{
      type: Input
    }],
    filterTemplate: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(ColumnFilterFormElement, {
    className: "ColumnFilterFormElement"
  });
})();
var TableModule = class _TableModule {
  static ɵfac = function TableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TableModule
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [TableStyle],
    imports: [CommonModule, PaginatorModule, InputTextModule, SelectModule, FormsModule, ButtonModule, SelectButtonModule, DatePickerModule, InputNumberModule, CheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, FilterIcon, FilterSlashIcon, PlusIcon, TrashIcon, RadioButtonModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PaginatorModule, InputTextModule, SelectModule, FormsModule, ButtonModule, SelectButtonModule, DatePickerModule, InputNumberModule, CheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, FilterIcon, FilterSlashIcon, PlusIcon, TrashIcon, RadioButtonModule],
      exports: [Table, SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement, ScrollerModule],
      declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement],
      providers: [TableStyle]
    }]
  }], null, null);
})();
export {
  CancelEditableRow,
  CellEditor,
  ColumnFilter,
  ColumnFilterFormElement,
  ContextMenuRow,
  EditableColumn,
  EditableRow,
  FrozenColumn,
  InitEditableRow,
  ReorderableColumn,
  ReorderableRow,
  ReorderableRowHandle,
  ResizableColumn,
  RowGroupHeader,
  RowToggler,
  SaveEditableRow,
  SelectableRow,
  SelectableRowDblClick,
  SortIcon,
  SortableColumn,
  Table,
  TableBody,
  TableCheckbox,
  TableClasses,
  TableHeaderCheckbox,
  TableModule,
  TableRadioButton,
  TableService,
  TableStyle
};
//# sourceMappingURL=primeng_table.js.map
