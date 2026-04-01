import {
  BaseComponent
} from "./chunk-4S6Z5BSW.js";
import "./chunk-LUEIMEA4.js";
import {
  BaseStyle
} from "./chunk-V3FTI7LL.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-6KYG62FN.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-REMGT6RI.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QJB5IFYQ.js";
import "./chunk-WPM5VTLQ.js";
import "./chunk-PEBH6BBU.js";
import "./chunk-4S3KYZTJ.js";
import "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-tag.mjs
var theme = ({
  dt
}) => `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${dt("tag.primary.background")};
    color: ${dt("tag.primary.color")};
    font-size: ${dt("tag.font.size")};
    font-weight: ${dt("tag.font.weight")};
    padding: ${dt("tag.padding")};
    border-radius: ${dt("tag.border.radius")};
    gap: ${dt("tag.gap")};
}

.p-tag-icon {
    font-size: ${dt("tag.icon.size")};
    width: ${dt("tag.icon.size")};
    height:${dt("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${dt("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${dt("tag.success.background")};
    color: ${dt("tag.success.color")};
}

.p-tag-info {
    background: ${dt("tag.info.background")};
    color: ${dt("tag.info.color")};
}

.p-tag-warn {
    background: ${dt("tag.warn.background")};
    color: ${dt("tag.warn.color")};
}

.p-tag-danger {
    background: ${dt("tag.danger.background")};
    color: ${dt("tag.danger.color")};
}

.p-tag-secondary {
    background: ${dt("tag.secondary.background")};
    color: ${dt("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${dt("tag.contrast.background")};
    color: ${dt("tag.contrast.color")};
}
`;
var classes = {
  root: ({
    props
  }) => ["p-tag p-component", {
    "p-tag-info": props.severity === "info",
    "p-tag-success": props.severity === "success",
    "p-tag-warn": props.severity === "warn",
    "p-tag-danger": props.severity === "danger",
    "p-tag-secondary": props.severity === "secondary",
    "p-tag-contrast": props.severity === "contrast",
    "p-tag-rounded": props.rounded
  }],
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = class _TagStyle extends BaseStyle {
  name = "tag";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTagStyle_BaseFactory;
    return function TagStyle_Factory(__ngFactoryType__) {
      return (ɵTagStyle_BaseFactory || (ɵTagStyle_BaseFactory = ɵɵgetInheritedFactory(_TagStyle)))(__ngFactoryType__ || _TagStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TagStyle,
    factory: _TagStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{
    type: Injectable
  }], null, null);
})();
var TagClasses;
(function(TagClasses2) {
  TagClasses2["root"] = "p-tag";
  TagClasses2["icon"] = "p-tag-icon";
  TagClasses2["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var _c0 = ["icon"];
var _c1 = ["*"];
function Tag_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Tag_ng_container_1_span_1_Template, 1, 1, "span", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.icon);
  }
}
function Tag_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Tag_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, Tag_span_2_1_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
var Tag = class _Tag extends BaseComponent {
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   * @deprecated since 15.4.2. Use 'icon' template.
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  iconTemplate;
  templates;
  _iconTemplate;
  _style;
  _componentStyle = inject(TagStyle);
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
      }
    });
  }
  containerClass() {
    let classes2 = "p-tag p-component";
    if (this.severity) {
      classes2 += ` p-tag-${this.severity}`;
    }
    if (this.rounded) {
      classes2 += " p-tag-rounded";
    }
    if (this.styleClass) {
      classes2 += ` ${this.styleClass}`;
    }
    return classes2;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTag_BaseFactory;
    return function Tag_Factory(__ngFactoryType__) {
      return (ɵTag_BaseFactory || (ɵTag_BaseFactory = ɵɵgetInheritedFactory(_Tag)))(__ngFactoryType__ || _Tag);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Tag_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleMap(ctx.style);
        ɵɵclassMap(ctx.containerClass());
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    standalone: true,
    features: [ɵɵProvidersFeature([TagStyle]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 3,
    consts: [[4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-label"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, Tag_ng_container_1_Template, 2, 1, "ng-container", 0)(2, Tag_span_2_Template, 2, 1, "span", 1);
        ɵɵelementStart(3, "span", 2);
        ɵɵtext(4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.iconTemplate && !ctx._iconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.iconTemplate || ctx._iconTemplate);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.value);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span class="p-tag-icon" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span class="p-tag-label">{{ value }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [TagStyle],
      host: {
        "[class]": "containerClass()",
        "[style]": "style"
      }
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Tag, {
    className: "Tag"
  });
})();
var TagModule = class _TagModule {
  static ɵfac = function TagModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TagModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TagModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Tag, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [Tag, SharedModule],
      exports: [Tag, SharedModule]
    }]
  }], null, null);
})();
export {
  Tag,
  TagClasses,
  TagModule,
  TagStyle
};
//# sourceMappingURL=primeng_tag.js.map
