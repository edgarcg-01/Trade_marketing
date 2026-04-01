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
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-REMGT6RI.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵproperty
} from "./chunk-QJB5IFYQ.js";
import "./chunk-WPM5VTLQ.js";
import "./chunk-PEBH6BBU.js";
import "./chunk-4S3KYZTJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/primeng/fesm2022/primeng-skeleton.mjs
var theme = ({
  dt
}) => `
.p-skeleton {
    overflow: hidden;
    background: ${dt("skeleton.background")};
    border-radius: ${dt("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${dt("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`;
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: ({
    props
  }) => ["p-skeleton p-component", {
    "p-skeleton-circle": props.shape === "circle",
    "p-skeleton-animation-none": props.animation === "none"
  }]
};
var SkeletonStyle = class _SkeletonStyle extends BaseStyle {
  name = "skeleton";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkeletonStyle_BaseFactory;
    return function SkeletonStyle_Factory(__ngFactoryType__) {
      return (ɵSkeletonStyle_BaseFactory || (ɵSkeletonStyle_BaseFactory = ɵɵgetInheritedFactory(_SkeletonStyle)))(__ngFactoryType__ || _SkeletonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SkeletonStyle,
    factory: _SkeletonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonStyle, [{
    type: Injectable
  }], null, null);
})();
var SkeletonClasses;
(function(SkeletonClasses2) {
  SkeletonClasses2["root"] = "p-skeleton";
})(SkeletonClasses || (SkeletonClasses = {}));
var Skeleton = class _Skeleton extends BaseComponent {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "rectangle";
  /**
   * Type of the animation.
   * @gruop Props
   */
  animation = "wave";
  /**
   * Border radius of the element, defaults to value from theme.
   * @group Props
   */
  borderRadius;
  /**
   * Size of the skeleton.
   * @group Props
   */
  size;
  /**
   * Width of the element.
   * @group Props
   */
  width = "100%";
  /**
   * Height of the element.
   * @group Props
   */
  height = "1rem";
  _componentStyle = inject(SkeletonStyle);
  containerClass() {
    return {
      "p-skeleton p-component": true,
      "p-skeleton-circle": this.shape === "circle",
      "p-skeleton-animation-none": this.animation === "none"
    };
  }
  get containerStyle() {
    const inlineStyles2 = this._componentStyle?.inlineStyles["root"];
    let style;
    if (this.size) style = __spreadProps(__spreadValues(__spreadValues({}, this.style), inlineStyles2), {
      width: this.size,
      height: this.size,
      borderRadius: this.borderRadius
    });
    else style = __spreadValues(__spreadProps(__spreadValues({}, inlineStyles2), {
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius
    }), this.style);
    return style;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkeleton_BaseFactory;
    return function Skeleton_Factory(__ngFactoryType__) {
      return (ɵSkeleton_BaseFactory || (ɵSkeleton_BaseFactory = ɵɵgetInheritedFactory(_Skeleton)))(__ngFactoryType__ || _Skeleton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Skeleton,
    selectors: [["p-skeleton"]],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      shape: "shape",
      animation: "animation",
      borderRadius: "borderRadius",
      size: "size",
      width: "width",
      height: "height"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([SkeletonStyle]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 1,
    vars: 7,
    consts: [[3, "ngClass", "ngStyle"]],
    template: function Skeleton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 0);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.containerStyle);
        ɵɵattribute("data-pc-name", "skeleton")("aria-hidden", true)("data-pc-section", "root");
      }
    },
    dependencies: [CommonModule, NgClass, NgStyle, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Skeleton, [{
    type: Component,
    args: [{
      selector: "p-skeleton",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="containerStyle" [attr.data-pc-name]="'skeleton'" [attr.aria-hidden]="true" [attr.data-pc-section]="'root'"></div> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [SkeletonStyle]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    borderRadius: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassDebugInfo(Skeleton, {
    className: "Skeleton"
  });
})();
var SkeletonModule = class _SkeletonModule {
  static ɵfac = function SkeletonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkeletonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SkeletonModule
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Skeleton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
    type: NgModule,
    args: [{
      imports: [Skeleton, SharedModule],
      exports: [Skeleton, SharedModule]
    }]
  }], null, null);
})();
export {
  Skeleton,
  SkeletonClasses,
  SkeletonModule,
  SkeletonStyle
};
//# sourceMappingURL=primeng_skeleton.js.map
