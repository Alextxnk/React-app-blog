exports.id = 8353;
exports.ids = [8353];
exports.modules = {

/***/ 81781:
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "arrow": () => (/* binding */ floating_ui_react_dom_esm_arrow),
  "autoPlacement": () => (/* reexport */ autoPlacement),
  "autoUpdate": () => (/* reexport */ autoUpdate),
  "computePosition": () => (/* reexport */ floating_ui_dom_computePosition),
  "detectOverflow": () => (/* reexport */ detectOverflow),
  "flip": () => (/* reexport */ flip),
  "getOverflowAncestors": () => (/* reexport */ getOverflowAncestors),
  "hide": () => (/* reexport */ hide),
  "inline": () => (/* reexport */ inline),
  "limitShift": () => (/* reexport */ limitShift),
  "offset": () => (/* reexport */ offset),
  "shift": () => (/* reexport */ shift),
  "size": () => (/* reexport */ size),
  "useFloating": () => (/* binding */ useFloating)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@floating-ui+core@0.7.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getSide(placement) {
  return placement.split('-')[0];
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;

  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;

    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;

    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;

    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }

  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */

const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));

  if (false) {}

  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;

  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = { ...middlewareData,
      [name]: { ...middlewareData[name],
        ...data
      }
    };

    if (false) {}

    if (reset && resetCount <= 50) {
      resetCount++;

      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }

        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return { ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;

  if (options === void 0) {
    options = {};
  }

  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === 'floating' ? { ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}

const min = Math.min;
const max = Math.max;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,

  async fn(middlewareArguments) {
    // Since `element` is required, we don't Partial<> the type
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform
    } = middlewareArguments;

    if (element == null) {
      if (false) {}

      return {};
    }

    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const alignment = getAlignment(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const minProp = axis === 'y' ? 'top' : 'left';
    const maxProp = axis === 'y' ? 'bottom' : 'right';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;

    if (clientSize === 0) {
      clientSize = rects.floating[length];
    }

    const centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds

    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max); // Make sure that arrow points at the reference

    const alignmentPadding = alignment === 'start' ? paddingObject[minProp] : paddingObject[maxProp];
    const shouldAddOffset = alignmentPadding > 0 && center !== offset && rects.reference[length] <= rects.floating[length];
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }

});

const hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, matched => hash$1[matched]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }

  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const hash = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, matched => hash[matched]);
}

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }

    return true;
  });
}

/**
 * Automatically chooses the `placement` which has the most space available.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'autoPlacement',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _placementsSortedByLe;

      const {
        x,
        y,
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = middlewareArguments;
      const {
        alignment = null,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const currentIndex = (_middlewareData$autoP = (_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.index) != null ? _middlewareData$autoP : 0;
      const currentPlacement = placements[currentIndex];

      if (currentPlacement == null) {
        return {};
      }

      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))); // Make `computeCoords` start from the right place

      if (placement !== currentPlacement) {
        return {
          x,
          y,
          reset: {
            placement: placements[0]
          }
        };
      }

      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...((_middlewareData$autoP3 = (_middlewareData$autoP4 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP4.overflows) != null ? _middlewareData$autoP3 : []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1]; // There are more placements to check

      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }

      const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
      const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find(_ref => {
        let {
          overflows
        } = _ref;
        return overflows.every(overflow => overflow <= 0);
      })) == null ? void 0 : _placementsSortedByLe.placement;
      const resetPlacement = placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement;

      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }

      return {};
    }

  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

/**
 * Changes the placement of the floating element to one that will fit if the
 * initially specified `placement` does not.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'flip',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$flip;

      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];

      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }

      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }

      overflowsData = [...overflowsData, {
        placement,
        overflows
      }]; // One or more sides is overflowing

      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;

        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];

        if (nextPlacement) {
          // Try next placement and re-run the lifecycle
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        let resetPlacement = 'bottom';

        switch (fallbackStrategy) {
          case 'bestFit':
            {
              var _overflowsData$map$so;

              const placement = (_overflowsData$map$so = overflowsData.map(d => [d, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;

              if (placement) {
                resetPlacement = placement;
              }

              break;
            }

          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
        }

        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }

      return {};
    }

  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}

function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (_temp) {
  let {
    strategy = 'referenceHidden',
    ...detectOverflowOptions
  } = _temp === void 0 ? {} : _temp;
  return {
    name: 'hide',

    async fn(middlewareArguments) {
      const {
        rects
      } = middlewareArguments;

      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(middlewareArguments, { ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }

        case 'escaped':
          {
            const overflow = await detectOverflow(middlewareArguments, { ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }

        default:
          {
            return {};
          }
      }
    }

  };
};

async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform,
    elements
  } = middlewareArguments;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(middlewareArguments) : value; // eslint-disable-next-line prefer-const

  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };

  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }

  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
/**
 * Displaces the floating element from its reference element.
 * @see https://floating-ui.com/docs/offset
 */

const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }

  return {
    name: 'offset',
    options: value,

    async fn(middlewareArguments) {
      const {
        x,
        y
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }

  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Shifts the floating element in order to keep it in view when it will overflow
 * a clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'shift',
    options,

    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];

      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }

      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }

      const limitedCoords = limiter.fn({ ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return { ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }

  };
};

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    options,

    fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = options;
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = typeof offset === 'function' ? offset({ ...rects,
        placement
      }) : offset;
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };

      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;

        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }

      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;

        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);

        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }

      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }

  };
};

/**
 * Provides data to change the size of the floating element. For instance,
 * prevent it from overflowing its clipping boundary or match the width of the
 * reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'size',
    options,

    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform,
        elements
      } = middlewareArguments;
      const {
        apply,
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;

      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }

      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        availableHeight: rects.floating.height - (['left', 'right'].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        availableWidth: rects.floating.width - (['top', 'bottom'].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      const prevDimensions = await platform.getDimensions(elements.floating);
      apply == null ? void 0 : apply({ ...middlewareArguments,
        ...dimensions
      });
      const nextDimensions = await platform.getDimensions(elements.floating);

      if (prevDimensions.width !== nextDimensions.width || prevDimensions.height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }

      return {};
    }

  };
};

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'inline',
    options,

    async fn(middlewareArguments) {
      var _await$platform$getCl;

      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = middlewareArguments; // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.

      const {
        padding = 2,
        x,
        y
      } = options;
      const fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: rects.reference,
        offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
        strategy
      }) : rects.reference);
      const clientRects = (_await$platform$getCl = await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) != null ? _await$platform$getCl : [];
      const paddingObject = getSideObjectFromPadding(padding);

      function getBoundingClientRect() {
        // There are two rects and they are disjoined
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          var _clientRects$find;

          // Find the first rect in which the point is fully inside
          return (_clientRects$find = clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) != null ? _clientRects$find : fallback;
        } // There are 2 or more connected rects


        if (clientRects.length >= 2) {
          if (getMainAxisFromPlacement(placement) === 'x') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }

          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }

        return fallback;
      }

      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });

      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }

      return {};
    }

  };
};



;// CONCATENATED MODULE: ./node_modules/.pnpm/@floating-ui+dom@0.5.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs



function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function getNodeName(node) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function getUAString() {
  const uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(item => item.brand + "/" + item.version).join(' ');
  }

  return navigator.userAgent;
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element); // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return css.transform !== 'none' || css.perspective !== 'none' || // @ts-ignore (TS 4.1 compat)
  css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false);
}
function isLayoutViewport() {
  // Not Safari
  return !/^((?!chrome|android).)*safari/i.test(getUAString()); // Feature detection for this fails in various ways
  // • Always-visible scrollbar or not
  // • Width of <html>, etc.
  // const vV = win.visualViewport;
  // return vV ? Math.abs(win.innerWidth / vV.scale - vV.width) < 0.5 : true;
}

const floating_ui_dom_min = Math.min;
const floating_ui_dom_max = Math.max;
const round = Math.round;

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;

  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, // @ts-ignore - checked above (TS 4.1 compat)
  isOffsetParentAnElement && isScaled(offsetParent), strategy === 'fixed');
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || ( // DOM Element detected
    isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element) {
  let currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && !['html', 'body'].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  const window = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);

  if (offsetParent === documentElement) {
    return rect;
  }

  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }

  }

  return { ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = floating_ui_dom_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = floating_ui_dom_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += floating_ui_dom_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width,
    height,
    x,
    y
  };
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);

  if (['html', 'body', '#document'].includes(getNodeName(parentNode))) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;

  if (list === void 0) {
    list = [];
  }

  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : // @ts-ignore: isBody tells us target will be an HTMLElement here
  updatedList.concat(getOverflowAncestors(target));
}

function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;

    do {
      // use `===` replace node.isSameNode()
      if (next && parent === next) {
        return true;
      } // @ts-ignore: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  }

  return false;
}

function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === 'viewport') {
    return rectToClientRect(getViewportRect(element, strategy));
  }

  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }

  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping ancestor" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const canEscapeClipping = ['absolute', 'fixed'].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // @ts-ignore isElement check ensures we return Array<Element>


  return clippingAncestors.filter(clippingAncestors => isElement(clippingAncestors) && contains(clippingAncestors, clipperElement) && getNodeName(clippingAncestors) !== 'body');
} // Gets the maximum area that the element is visible in due to any number of
// clipping ancestors


function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === 'clippingAncestors' ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_dom_max(rect.top, accRect.top);
    accRect.right = floating_ui_dom_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_dom_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_dom_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: _ref => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: { ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }

  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize: _ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestorResize = _ancestorResize && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;

  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }

      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    observer.observe(floating);
  }

  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;

  if (animationFrame) {
    frameLoop();
  }

  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);

    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }

    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }

  update();
  return () => {
    var _observer;

    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;

    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */

const floating_ui_dom_computePosition = (reference, floating, options) => computePosition(reference, floating, {
  platform,
  ...options
});



// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@floating-ui+react-dom@0.7.2_@types+react@18.0.15_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js






var index = typeof document !== 'undefined' ? react_.useLayoutEffect : react_.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }

  let length, i, keys;

  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    keys = Object.keys(a);
    length = keys.length;

    if (length !== Object.keys(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }

    for (i = length; i-- !== 0;) {
      const key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        continue;
      }

      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}

function useLatestRef(value) {
  const ref = react_.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

function useFloating(_temp) {
  let {
    middleware,
    placement = 'bottom',
    strategy = 'absolute',
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const reference = react_.useRef(null);
  const floating = react_.useRef(null);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const cleanupRef = react_.useRef(null);
  const [data, setData] = react_.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = react_.useState(middleware);

  if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map(_ref => {
    let {
      options
    } = _ref;
    return options;
  }), middleware == null ? void 0 : middleware.map(_ref2 => {
    let {
      options
    } = _ref2;
    return options;
  }))) {
    setLatestMiddleware(middleware);
  }

  const update = react_.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }

    floating_ui_dom_computePosition(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then(data => {
      if (isMountedRef.current) {
        server_rendering_stub_.flushSync(() => {
          setData(data);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    // Skip first update
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = react_.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = react_.useCallback(() => {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = react_.useCallback(node => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = react_.useCallback(node => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = react_.useMemo(() => ({
    reference,
    floating
  }), []);
  return react_.useMemo(() => ({ ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */

const floating_ui_react_dom_esm_arrow = options => {
  const {
    element,
    padding
  } = options;

  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, 'current');
  }

  return {
    name: 'arrow',
    options,

    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }

        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }

      return {};
    }

  };
};




/***/ }),

/***/ 15790:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $hLIh8$babelruntimehelpersextends = __webpack_require__(81781);
var $hLIh8$react = __webpack_require__(18038);
var $hLIh8$radixuireactcontext = __webpack_require__(60708);
var $hLIh8$radixuireactcomposerefs = __webpack_require__(16849);
var $hLIh8$radixuireactdialog = __webpack_require__(206);
var $hLIh8$radixuiprimitive = __webpack_require__(74217);
var $hLIh8$radixuireactslot = __webpack_require__(32915);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createAlertDialogScope", () => $8c7baeec26a63e97$export$b8891880751c2c5b);
$parcel$export(module.exports, "AlertDialog", () => $8c7baeec26a63e97$export$de466dd8317b0b75);
$parcel$export(module.exports, "AlertDialogTrigger", () => $8c7baeec26a63e97$export$6edd7a623ef0f40b);
$parcel$export(module.exports, "AlertDialogPortal", () => $8c7baeec26a63e97$export$660f2bfdb986706c);
$parcel$export(module.exports, "AlertDialogOverlay", () => $8c7baeec26a63e97$export$a707a4895ce23256);
$parcel$export(module.exports, "AlertDialogContent", () => $8c7baeec26a63e97$export$94e6af45f0af4efd);
$parcel$export(module.exports, "AlertDialogAction", () => $8c7baeec26a63e97$export$b454f818c58ee85d);
$parcel$export(module.exports, "AlertDialogCancel", () => $8c7baeec26a63e97$export$2f67a923571aaea0);
$parcel$export(module.exports, "AlertDialogTitle", () => $8c7baeec26a63e97$export$225e0da62d314b7);
$parcel$export(module.exports, "AlertDialogDescription", () => $8c7baeec26a63e97$export$a23b55cde55ad9a5);
$parcel$export(module.exports, "Root", () => $8c7baeec26a63e97$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $8c7baeec26a63e97$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $8c7baeec26a63e97$export$602eac185826482c);
$parcel$export(module.exports, "Overlay", () => $8c7baeec26a63e97$export$c6fdb837b070b4ff);
$parcel$export(module.exports, "Content", () => $8c7baeec26a63e97$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Action", () => $8c7baeec26a63e97$export$e19cd5f9376f8cee);
$parcel$export(module.exports, "Cancel", () => $8c7baeec26a63e97$export$848c9b7ead0df967);
$parcel$export(module.exports, "Title", () => $8c7baeec26a63e97$export$f99233281efd08a0);
$parcel$export(module.exports, "Description", () => $8c7baeec26a63e97$export$393edc798c47379d);








/* -------------------------------------------------------------------------------------------------
 * AlertDialog
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$ROOT_NAME = 'AlertDialog';
const [$8c7baeec26a63e97$var$createAlertDialogContext, $8c7baeec26a63e97$export$b8891880751c2c5b] = $hLIh8$radixuireactcontext.createContextScope($8c7baeec26a63e97$var$ROOT_NAME, [
    $hLIh8$radixuireactdialog.createDialogScope
]);
const $8c7baeec26a63e97$var$useDialogScope = $hLIh8$radixuireactdialog.createDialogScope();
const $8c7baeec26a63e97$export$de466dd8317b0b75 = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...alertDialogProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Root, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, alertDialogProps, {
        modal: true
    }));
};
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$de466dd8317b0b75, {
    displayName: $8c7baeec26a63e97$var$ROOT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$TRIGGER_NAME = 'AlertDialogTrigger';
const $8c7baeec26a63e97$export$6edd7a623ef0f40b = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...triggerProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Trigger, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, triggerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$6edd7a623ef0f40b, {
    displayName: $8c7baeec26a63e97$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$PORTAL_NAME = 'AlertDialogPortal';
const $8c7baeec26a63e97$export$660f2bfdb986706c = (props)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...portalProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Portal, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, portalProps));
};
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$660f2bfdb986706c, {
    displayName: $8c7baeec26a63e97$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$OVERLAY_NAME = 'AlertDialogOverlay';
const $8c7baeec26a63e97$export$a707a4895ce23256 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...overlayProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Overlay, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, overlayProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$a707a4895ce23256, {
    displayName: $8c7baeec26a63e97$var$OVERLAY_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogContent
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$CONTENT_NAME = 'AlertDialogContent';
const [$8c7baeec26a63e97$var$AlertDialogContentProvider, $8c7baeec26a63e97$var$useAlertDialogContentContext] = $8c7baeec26a63e97$var$createAlertDialogContext($8c7baeec26a63e97$var$CONTENT_NAME);
const $8c7baeec26a63e97$export$94e6af45f0af4efd = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , children: children , ...contentProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    const contentRef = $hLIh8$react.useRef(null);
    const composedRefs = $hLIh8$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef);
    const cancelRef = $hLIh8$react.useRef(null);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.WarningProvider, {
        contentName: $8c7baeec26a63e97$var$CONTENT_NAME,
        titleName: $8c7baeec26a63e97$var$TITLE_NAME,
        docsSlug: "alert-dialog"
    }, /*#__PURE__*/ $hLIh8$react.createElement($8c7baeec26a63e97$var$AlertDialogContentProvider, {
        scope: __scopeAlertDialog,
        cancelRef: cancelRef
    }, /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Content, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({
        role: "alertdialog"
    }, dialogScope, contentProps, {
        ref: composedRefs,
        onOpenAutoFocus: $hLIh8$radixuiprimitive.composeEventHandlers(contentProps.onOpenAutoFocus, (event)=>{
            var _cancelRef$current;
            event.preventDefault();
            (_cancelRef$current = cancelRef.current) === null || _cancelRef$current === void 0 || _cancelRef$current.focus({
                preventScroll: true
            });
        }),
        onPointerDownOutside: (event)=>event.preventDefault()
        ,
        onInteractOutside: (event)=>event.preventDefault()
    }), /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactslot.Slottable, null, children), false)));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$94e6af45f0af4efd, {
    displayName: $8c7baeec26a63e97$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$TITLE_NAME = 'AlertDialogTitle';
const $8c7baeec26a63e97$export$225e0da62d314b7 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...titleProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Title, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$225e0da62d314b7, {
    displayName: $8c7baeec26a63e97$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$DESCRIPTION_NAME = 'AlertDialogDescription';
const $8c7baeec26a63e97$export$a23b55cde55ad9a5 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...descriptionProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Description, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$a23b55cde55ad9a5, {
    displayName: $8c7baeec26a63e97$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogAction
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$ACTION_NAME = 'AlertDialogAction';
const $8c7baeec26a63e97$export$b454f818c58ee85d = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...actionProps } = props;
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Close, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, actionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$b454f818c58ee85d, {
    displayName: $8c7baeec26a63e97$var$ACTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AlertDialogCancel
 * -----------------------------------------------------------------------------------------------*/ const $8c7baeec26a63e97$var$CANCEL_NAME = 'AlertDialogCancel';
const $8c7baeec26a63e97$export$2f67a923571aaea0 = /*#__PURE__*/ $hLIh8$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAlertDialog: __scopeAlertDialog , ...cancelProps } = props;
    const { cancelRef: cancelRef  } = $8c7baeec26a63e97$var$useAlertDialogContentContext($8c7baeec26a63e97$var$CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = $8c7baeec26a63e97$var$useDialogScope(__scopeAlertDialog);
    const ref = $hLIh8$radixuireactcomposerefs.useComposedRefs(forwardedRef, cancelRef);
    return /*#__PURE__*/ $hLIh8$react.createElement($hLIh8$radixuireactdialog.Close, ($parcel$interopDefault($hLIh8$babelruntimehelpersextends))({}, dialogScope, cancelProps, {
        ref: ref
    }));
});
/*#__PURE__*/ Object.assign($8c7baeec26a63e97$export$2f67a923571aaea0, {
    displayName: $8c7baeec26a63e97$var$CANCEL_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $8c7baeec26a63e97$var$DescriptionWarning = ({ contentRef: contentRef  })=>{
    const MESSAGE = `\`${$8c7baeec26a63e97$var$CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${$8c7baeec26a63e97$var$CONTENT_NAME}\` by passing a \`${$8c7baeec26a63e97$var$DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${$8c7baeec26a63e97$var$CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    $hLIh8$react.useEffect(()=>{
        var _contentRef$current;
        const hasDescription = document.getElementById((_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'));
        if (!hasDescription) console.warn(MESSAGE);
    }, [
        MESSAGE,
        contentRef
    ]);
    return null;
};
const $8c7baeec26a63e97$export$be92b6f5f03c0fe9 = $8c7baeec26a63e97$export$de466dd8317b0b75;
const $8c7baeec26a63e97$export$41fb9f06171c75f4 = $8c7baeec26a63e97$export$6edd7a623ef0f40b;
const $8c7baeec26a63e97$export$602eac185826482c = $8c7baeec26a63e97$export$660f2bfdb986706c;
const $8c7baeec26a63e97$export$c6fdb837b070b4ff = $8c7baeec26a63e97$export$a707a4895ce23256;
const $8c7baeec26a63e97$export$7c6e2c02157bb7d2 = $8c7baeec26a63e97$export$94e6af45f0af4efd;
const $8c7baeec26a63e97$export$e19cd5f9376f8cee = $8c7baeec26a63e97$export$b454f818c58ee85d;
const $8c7baeec26a63e97$export$848c9b7ead0df967 = $8c7baeec26a63e97$export$2f67a923571aaea0;
const $8c7baeec26a63e97$export$f99233281efd08a0 = $8c7baeec26a63e97$export$225e0da62d314b7;
const $8c7baeec26a63e97$export$393edc798c47379d = $8c7baeec26a63e97$export$a23b55cde55ad9a5;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 49576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $eQpDd$babelruntimehelpersextends = __webpack_require__(36305);
var $eQpDd$react = __webpack_require__(18038);
var $eQpDd$radixuireactprimitive = __webpack_require__(49140);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Arrow", () => $09f4ad68a9251bc3$export$21b07c8f274aebd5);
$parcel$export(module.exports, "Root", () => $09f4ad68a9251bc3$export$be92b6f5f03c0fe9);



/* -------------------------------------------------------------------------------------------------
 * Arrow
 * -----------------------------------------------------------------------------------------------*/ const $09f4ad68a9251bc3$var$NAME = 'Arrow';
const $09f4ad68a9251bc3$export$21b07c8f274aebd5 = /*#__PURE__*/ $eQpDd$react.forwardRef((props, forwardedRef)=>{
    const { children: children , width: width = 10 , height: height = 5 , ...arrowProps } = props;
    return /*#__PURE__*/ $eQpDd$react.createElement($eQpDd$radixuireactprimitive.Primitive.svg, ($parcel$interopDefault($eQpDd$babelruntimehelpersextends))({}, arrowProps, {
        ref: forwardedRef,
        width: width,
        height: height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none"
    }), props.asChild ? children : /*#__PURE__*/ $eQpDd$react.createElement("polygon", {
        points: "0,0 30,0 15,10"
    }));
});
/*#__PURE__*/ Object.assign($09f4ad68a9251bc3$export$21b07c8f274aebd5, {
    displayName: $09f4ad68a9251bc3$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $09f4ad68a9251bc3$export$be92b6f5f03c0fe9 = $09f4ad68a9251bc3$export$21b07c8f274aebd5;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 57096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $6FDFN$babelruntimehelpersextends = __webpack_require__(81781);
var $6FDFN$react = __webpack_require__(18038);
var $6FDFN$radixuireactcontext = __webpack_require__(60708);
var $6FDFN$radixuireactusecallbackref = __webpack_require__(86518);
var $6FDFN$radixuireactuselayouteffect = __webpack_require__(41572);
var $6FDFN$radixuireactprimitive = __webpack_require__(49140);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createAvatarScope", () => $94437fed6c1d6d8a$export$90370d16b488820f);
$parcel$export(module.exports, "Avatar", () => $94437fed6c1d6d8a$export$e2255cf6045e8d47);
$parcel$export(module.exports, "AvatarImage", () => $94437fed6c1d6d8a$export$2cd8ae1985206fe8);
$parcel$export(module.exports, "AvatarFallback", () => $94437fed6c1d6d8a$export$69fffb6a9571fbfe);
$parcel$export(module.exports, "Root", () => $94437fed6c1d6d8a$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Image", () => $94437fed6c1d6d8a$export$3e431a229df88919);
$parcel$export(module.exports, "Fallback", () => $94437fed6c1d6d8a$export$fb8d7f40caaeea67);






/* -------------------------------------------------------------------------------------------------
 * Avatar
 * -----------------------------------------------------------------------------------------------*/ const $94437fed6c1d6d8a$var$AVATAR_NAME = 'Avatar';
const [$94437fed6c1d6d8a$var$createAvatarContext, $94437fed6c1d6d8a$export$90370d16b488820f] = $6FDFN$radixuireactcontext.createContextScope($94437fed6c1d6d8a$var$AVATAR_NAME);
const [$94437fed6c1d6d8a$var$AvatarProvider, $94437fed6c1d6d8a$var$useAvatarContext] = $94437fed6c1d6d8a$var$createAvatarContext($94437fed6c1d6d8a$var$AVATAR_NAME);
const $94437fed6c1d6d8a$export$e2255cf6045e8d47 = /*#__PURE__*/ $6FDFN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = $6FDFN$react.useState('idle');
    return /*#__PURE__*/ $6FDFN$react.createElement($94437fed6c1d6d8a$var$AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus: imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus
    }, /*#__PURE__*/ $6FDFN$react.createElement($6FDFN$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($6FDFN$babelruntimehelpersextends))({}, avatarProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($94437fed6c1d6d8a$export$e2255cf6045e8d47, {
    displayName: $94437fed6c1d6d8a$var$AVATAR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AvatarImage
 * -----------------------------------------------------------------------------------------------*/ const $94437fed6c1d6d8a$var$IMAGE_NAME = 'AvatarImage';
const $94437fed6c1d6d8a$export$2cd8ae1985206fe8 = /*#__PURE__*/ $6FDFN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , src: src , onLoadingStatusChange: onLoadingStatusChange = ()=>{} , ...imageProps } = props;
    const context = $94437fed6c1d6d8a$var$useAvatarContext($94437fed6c1d6d8a$var$IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = $94437fed6c1d6d8a$var$useImageLoadingStatus(src);
    const handleLoadingStatusChange = $6FDFN$radixuireactusecallbackref.useCallbackRef((status)=>{
        onLoadingStatusChange(status);
        context.onImageLoadingStatusChange(status);
    });
    $6FDFN$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (imageLoadingStatus !== 'idle') handleLoadingStatusChange(imageLoadingStatus);
    }, [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === 'loaded' ? /*#__PURE__*/ $6FDFN$react.createElement($6FDFN$radixuireactprimitive.Primitive.img, ($parcel$interopDefault($6FDFN$babelruntimehelpersextends))({}, imageProps, {
        ref: forwardedRef,
        src: src
    })) : null;
});
/*#__PURE__*/ Object.assign($94437fed6c1d6d8a$export$2cd8ae1985206fe8, {
    displayName: $94437fed6c1d6d8a$var$IMAGE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AvatarFallback
 * -----------------------------------------------------------------------------------------------*/ const $94437fed6c1d6d8a$var$FALLBACK_NAME = 'AvatarFallback';
const $94437fed6c1d6d8a$export$69fffb6a9571fbfe = /*#__PURE__*/ $6FDFN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeAvatar: __scopeAvatar , delayMs: delayMs , ...fallbackProps } = props;
    const context = $94437fed6c1d6d8a$var$useAvatarContext($94437fed6c1d6d8a$var$FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = $6FDFN$react.useState(delayMs === undefined);
    $6FDFN$react.useEffect(()=>{
        if (delayMs !== undefined) {
            const timerId = window.setTimeout(()=>setCanRender(true)
            , delayMs);
            return ()=>window.clearTimeout(timerId)
            ;
        }
    }, [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== 'loaded' ? /*#__PURE__*/ $6FDFN$react.createElement($6FDFN$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($6FDFN$babelruntimehelpersextends))({}, fallbackProps, {
        ref: forwardedRef
    })) : null;
});
/*#__PURE__*/ Object.assign($94437fed6c1d6d8a$export$69fffb6a9571fbfe, {
    displayName: $94437fed6c1d6d8a$var$FALLBACK_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $94437fed6c1d6d8a$var$useImageLoadingStatus(src) {
    const [loadingStatus, setLoadingStatus] = $6FDFN$react.useState('idle');
    $6FDFN$react.useEffect(()=>{
        if (!src) {
            setLoadingStatus('error');
            return;
        }
        let isMounted = true;
        const image = new window.Image();
        const updateStatus = (status)=>()=>{
                if (!isMounted) return;
                setLoadingStatus(status);
            }
        ;
        setLoadingStatus('loading');
        image.onload = updateStatus('loaded');
        image.onerror = updateStatus('error');
        image.src = src;
        return ()=>{
            isMounted = false;
        };
    }, [
        src
    ]);
    return loadingStatus;
}
const $94437fed6c1d6d8a$export$be92b6f5f03c0fe9 = $94437fed6c1d6d8a$export$e2255cf6045e8d47;
const $94437fed6c1d6d8a$export$3e431a229df88919 = $94437fed6c1d6d8a$export$2cd8ae1985206fe8;
const $94437fed6c1d6d8a$export$fb8d7f40caaeea67 = $94437fed6c1d6d8a$export$69fffb6a9571fbfe;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $aJCrN$babelruntimehelpersextends = __webpack_require__(36305);
var $aJCrN$react = __webpack_require__(18038);
var $aJCrN$radixuiprimitive = __webpack_require__(74217);
var $aJCrN$radixuireactcomposerefs = __webpack_require__(16849);
var $aJCrN$radixuireactcontext = __webpack_require__(60708);
var $aJCrN$radixuireactid = __webpack_require__(37706);
var $aJCrN$radixuireactusecontrollablestate = __webpack_require__(69808);
var $aJCrN$radixuireactdismissablelayer = __webpack_require__(24827);
var $aJCrN$radixuireactfocusscope = __webpack_require__(56167);
var $aJCrN$radixuireactportal = __webpack_require__(17752);
var $aJCrN$radixuireactpresence = __webpack_require__(46474);
var $aJCrN$radixuireactprimitive = __webpack_require__(49140);
var $aJCrN$radixuireactfocusguards = __webpack_require__(95378);
var $aJCrN$reactremovescroll = __webpack_require__(61426);
var $aJCrN$ariahidden = __webpack_require__(48728);
var $aJCrN$radixuireactslot = __webpack_require__(32915);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createDialogScope", () => $f4833395aa1bca1a$export$cc702773b8ea3e41);
$parcel$export(module.exports, "Dialog", () => $f4833395aa1bca1a$export$3ddf2d174ce01153);
$parcel$export(module.exports, "DialogTrigger", () => $f4833395aa1bca1a$export$2e1e1122cf0cba88);
$parcel$export(module.exports, "DialogPortal", () => $f4833395aa1bca1a$export$dad7c95542bacce0);
$parcel$export(module.exports, "DialogOverlay", () => $f4833395aa1bca1a$export$bd1d06c79be19e17);
$parcel$export(module.exports, "DialogContent", () => $f4833395aa1bca1a$export$b6d9565de1e068cf);
$parcel$export(module.exports, "DialogTitle", () => $f4833395aa1bca1a$export$16f7638e4a34b909);
$parcel$export(module.exports, "DialogDescription", () => $f4833395aa1bca1a$export$94e94c2ec2c954d5);
$parcel$export(module.exports, "DialogClose", () => $f4833395aa1bca1a$export$fba2fb7cd781b7ac);
$parcel$export(module.exports, "Root", () => $f4833395aa1bca1a$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $f4833395aa1bca1a$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $f4833395aa1bca1a$export$602eac185826482c);
$parcel$export(module.exports, "Overlay", () => $f4833395aa1bca1a$export$c6fdb837b070b4ff);
$parcel$export(module.exports, "Content", () => $f4833395aa1bca1a$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Title", () => $f4833395aa1bca1a$export$f99233281efd08a0);
$parcel$export(module.exports, "Description", () => $f4833395aa1bca1a$export$393edc798c47379d);
$parcel$export(module.exports, "Close", () => $f4833395aa1bca1a$export$f39c2d165cd861fe);
$parcel$export(module.exports, "WarningProvider", () => $f4833395aa1bca1a$export$69b62a49393917d6);
















/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DIALOG_NAME = 'Dialog';
const [$f4833395aa1bca1a$var$createDialogContext, $f4833395aa1bca1a$export$cc702773b8ea3e41] = $aJCrN$radixuireactcontext.createContextScope($f4833395aa1bca1a$var$DIALOG_NAME);
const [$f4833395aa1bca1a$var$DialogProvider, $f4833395aa1bca1a$var$useDialogContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$DIALOG_NAME);
const $f4833395aa1bca1a$export$3ddf2d174ce01153 = (props)=>{
    const { __scopeDialog: __scopeDialog , children: children , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const triggerRef = $aJCrN$react.useRef(null);
    const contentRef = $aJCrN$react.useRef(null);
    const [open = false, setOpen] = $aJCrN$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogProvider, {
        scope: __scopeDialog,
        triggerRef: triggerRef,
        contentRef: contentRef,
        contentId: $aJCrN$radixuireactid.useId(),
        titleId: $aJCrN$radixuireactid.useId(),
        descriptionId: $aJCrN$radixuireactid.useId(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: $aJCrN$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, children);
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$3ddf2d174ce01153, {
    displayName: $f4833395aa1bca1a$var$DIALOG_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogTrigger
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TRIGGER_NAME = 'DialogTrigger';
const $f4833395aa1bca1a$export$2e1e1122cf0cba88 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...triggerProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.triggerRef);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, triggerProps, {
        ref: composedTriggerRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, context.onOpenToggle)
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$2e1e1122cf0cba88, {
    displayName: $f4833395aa1bca1a$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogPortal
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$PORTAL_NAME = 'DialogPortal';
const [$f4833395aa1bca1a$var$PortalProvider, $f4833395aa1bca1a$var$usePortalContext] = $f4833395aa1bca1a$var$createDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, {
    forceMount: undefined
});
const $f4833395aa1bca1a$export$dad7c95542bacce0 = (props)=>{
    const { __scopeDialog: __scopeDialog , forceMount: forceMount , children: children , container: container  } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$PORTAL_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$PortalProvider, {
        scope: __scopeDialog,
        forceMount: forceMount
    }, $aJCrN$react.Children.map(children, (child)=>/*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
            present: forceMount || context.open
        }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactportal.Portal, {
            asChild: true,
            container: container
        }, child))
    ));
};
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$dad7c95542bacce0, {
    displayName: $f4833395aa1bca1a$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogOverlay
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$OVERLAY_NAME = 'DialogOverlay';
const $f4833395aa1bca1a$export$bd1d06c79be19e17 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogOverlayImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, overlayProps, {
        ref: forwardedRef
    }))) : null;
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$bd1d06c79be19e17, {
    displayName: $f4833395aa1bca1a$var$OVERLAY_NAME
});
const $f4833395aa1bca1a$var$DialogOverlayImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...overlayProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$OVERLAY_NAME, __scopeDialog);
    return(/*#__PURE__*/ // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    $aJCrN$react.createElement($aJCrN$reactremovescroll.RemoveScroll, {
        as: $aJCrN$radixuireactslot.Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ]
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, overlayProps, {
        ref: forwardedRef // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
        ,
        style: {
            pointerEvents: 'auto',
            ...overlayProps.style
        }
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CONTENT_NAME = 'DialogContent';
const $f4833395aa1bca1a$export$b6d9565de1e068cf = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $f4833395aa1bca1a$var$usePortalContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, context.modal ? /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentNonModal, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$b6d9565de1e068cf, {
    displayName: $f4833395aa1bca1a$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.contentRef, contentRef); // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    $aJCrN$react.useEffect(()=>{
        const content = contentRef.current;
        if (content) return $aJCrN$ariahidden.hideOthers(content);
    }, []);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: composedRefs // we make sure focus isn't trapped once `DialogContent` has been closed
        ,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: $aJCrN$radixuiprimitive.composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            event.preventDefault();
            (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
        }),
        onPointerDownOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick; // If the event is a right-click, we shouldn't close because
            // it is effectively as if we right-clicked the `Overlay`.
            if (isRightClick) event.preventDefault();
        }) // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $aJCrN$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault()
        )
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentNonModal = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = $aJCrN$react.useRef(false);
    return /*#__PURE__*/ $aJCrN$react.createElement($f4833395aa1bca1a$var$DialogContentImpl, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            var _props$onCloseAutoFoc;
            (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
            if (!event.defaultPrevented) {
                var _context$triggerRef$c2;
                if (!hasInteractedOutsideRef.current) (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus(); // Always prevent auto focus because we either focus manually or want user agent focus
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            var _props$onInteractOuts, _context$triggerRef$c3;
            (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
            if (!event.defaultPrevented) hasInteractedOutsideRef.current = true; // Prevent dismissing when clicking the trigger.
            // As the trigger is already setup to close, without doing so would
            // cause it to close and immediately open.
            //
            // We use `onInteractOutside` as some browsers also
            // focus on pointer down, creating the same issue.
            const target = event.target;
            const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
            if (targetIsTrigger) event.preventDefault();
        }
    }));
});
/* -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DialogContentImpl = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , ...contentProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CONTENT_NAME, __scopeDialog);
    const contentRef = $aJCrN$react.useRef(null);
    const composedRefs = $aJCrN$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef); // Make sure the whole tree has focus guards as our `Dialog` will be
    // the last element in the DOM (beacuse of the `Portal`)
    $aJCrN$radixuireactfocusguards.useFocusGuards();
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$react.Fragment, null, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactfocusscope.FocusScope, {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactdismissablelayer.DismissableLayer, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        role: "dialog",
        id: context.contentId,
        "aria-describedby": context.descriptionId,
        "aria-labelledby": context.titleId,
        "data-state": $f4833395aa1bca1a$var$getState(context.open)
    }, contentProps, {
        ref: composedRefs,
        onDismiss: ()=>context.onOpenChange(false)
    }))), false);
});
/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$TITLE_NAME = 'DialogTitle';
const $f4833395aa1bca1a$export$16f7638e4a34b909 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...titleProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$TITLE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.h2, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.titleId
    }, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$16f7638e4a34b909, {
    displayName: $f4833395aa1bca1a$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$DESCRIPTION_NAME = 'DialogDescription';
const $f4833395aa1bca1a$export$94e94c2ec2c954d5 = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...descriptionProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$DESCRIPTION_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.p, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        id: context.descriptionId
    }, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$94e94c2ec2c954d5, {
    displayName: $f4833395aa1bca1a$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/ const $f4833395aa1bca1a$var$CLOSE_NAME = 'DialogClose';
const $f4833395aa1bca1a$export$fba2fb7cd781b7ac = /*#__PURE__*/ $aJCrN$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog: __scopeDialog , ...closeProps } = props;
    const context = $f4833395aa1bca1a$var$useDialogContext($f4833395aa1bca1a$var$CLOSE_NAME, __scopeDialog);
    return /*#__PURE__*/ $aJCrN$react.createElement($aJCrN$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($aJCrN$babelruntimehelpersextends))({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: $aJCrN$radixuiprimitive.composeEventHandlers(props.onClick, ()=>context.onOpenChange(false)
        )
    }));
});
/*#__PURE__*/ Object.assign($f4833395aa1bca1a$export$fba2fb7cd781b7ac, {
    displayName: $f4833395aa1bca1a$var$CLOSE_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $f4833395aa1bca1a$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $f4833395aa1bca1a$var$TITLE_WARNING_NAME = 'DialogTitleWarning';
const [$f4833395aa1bca1a$export$69b62a49393917d6, $f4833395aa1bca1a$var$useWarningContext] = $aJCrN$radixuireactcontext.createContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME, {
    contentName: $f4833395aa1bca1a$var$CONTENT_NAME,
    titleName: $f4833395aa1bca1a$var$TITLE_NAME,
    docsSlug: 'dialog'
});
const $f4833395aa1bca1a$var$TitleWarning = ({ titleId: titleId  })=>{
    const titleWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    $aJCrN$react.useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) throw new Error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
const $f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME = 'DialogDescriptionWarning';
const $f4833395aa1bca1a$var$DescriptionWarning = ({ contentRef: contentRef , descriptionId: descriptionId  })=>{
    const descriptionWarningContext = $f4833395aa1bca1a$var$useWarningContext($f4833395aa1bca1a$var$DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    $aJCrN$react.useEffect(()=>{
        var _contentRef$current;
        const describedById = (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.getAttribute('aria-describedby'); // if we have an id and the user hasn't set aria-describedby={undefined}
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
const $f4833395aa1bca1a$export$be92b6f5f03c0fe9 = $f4833395aa1bca1a$export$3ddf2d174ce01153;
const $f4833395aa1bca1a$export$41fb9f06171c75f4 = $f4833395aa1bca1a$export$2e1e1122cf0cba88;
const $f4833395aa1bca1a$export$602eac185826482c = $f4833395aa1bca1a$export$dad7c95542bacce0;
const $f4833395aa1bca1a$export$c6fdb837b070b4ff = $f4833395aa1bca1a$export$bd1d06c79be19e17;
const $f4833395aa1bca1a$export$7c6e2c02157bb7d2 = $f4833395aa1bca1a$export$b6d9565de1e068cf;
const $f4833395aa1bca1a$export$f99233281efd08a0 = $f4833395aa1bca1a$export$16f7638e4a34b909;
const $f4833395aa1bca1a$export$393edc798c47379d = $f4833395aa1bca1a$export$94e94c2ec2c954d5;
const $f4833395aa1bca1a$export$f39c2d165cd861fe = $f4833395aa1bca1a$export$fba2fb7cd781b7ac;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 48207:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $9g4ps$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useDirection", () => $cc45c1b701a63adc$export$b39126d51d94e6f3);
$parcel$export(module.exports, "Provider", () => $cc45c1b701a63adc$export$2881499e37b75b9a);
$parcel$export(module.exports, "DirectionProvider", () => $cc45c1b701a63adc$export$c760c09fdd558351);

const $cc45c1b701a63adc$var$DirectionContext = /*#__PURE__*/ $9g4ps$react.createContext(undefined);
/* -------------------------------------------------------------------------------------------------
 * Direction
 * -----------------------------------------------------------------------------------------------*/ const $cc45c1b701a63adc$export$c760c09fdd558351 = (props)=>{
    const { dir: dir , children: children  } = props;
    return /*#__PURE__*/ $9g4ps$react.createElement($cc45c1b701a63adc$var$DirectionContext.Provider, {
        value: dir
    }, children);
};
/* -----------------------------------------------------------------------------------------------*/ function $cc45c1b701a63adc$export$b39126d51d94e6f3(localDir) {
    const globalDir = $9g4ps$react.useContext($cc45c1b701a63adc$var$DirectionContext);
    return localDir || globalDir || 'ltr';
}
const $cc45c1b701a63adc$export$2881499e37b75b9a = $cc45c1b701a63adc$export$c760c09fdd558351;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 81294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $7dQ7Q$babelruntimehelpersextends = __webpack_require__(81781);
var $7dQ7Q$react = __webpack_require__(18038);
var $7dQ7Q$radixuiprimitive = __webpack_require__(74217);
var $7dQ7Q$radixuireactcomposerefs = __webpack_require__(16849);
var $7dQ7Q$radixuireactcontext = __webpack_require__(60708);
var $7dQ7Q$radixuireactusecontrollablestate = __webpack_require__(69808);
var $7dQ7Q$radixuireactprimitive = __webpack_require__(49140);
var $7dQ7Q$radixuireactmenu = __webpack_require__(63214);
var $7dQ7Q$radixuireactid = __webpack_require__(37706);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createDropdownMenuScope", () => $d1bf075a6b218014$export$c0623cd925aeb687);
$parcel$export(module.exports, "DropdownMenu", () => $d1bf075a6b218014$export$e44a253a59704894);
$parcel$export(module.exports, "DropdownMenuTrigger", () => $d1bf075a6b218014$export$d2469213b3befba9);
$parcel$export(module.exports, "DropdownMenuPortal", () => $d1bf075a6b218014$export$cd369b4d4d54efc9);
$parcel$export(module.exports, "DropdownMenuContent", () => $d1bf075a6b218014$export$6e76d93a37c01248);
$parcel$export(module.exports, "DropdownMenuGroup", () => $d1bf075a6b218014$export$246bebaba3a2f70e);
$parcel$export(module.exports, "DropdownMenuLabel", () => $d1bf075a6b218014$export$76e48c5b57f24495);
$parcel$export(module.exports, "DropdownMenuItem", () => $d1bf075a6b218014$export$ed97964d1871885d);
$parcel$export(module.exports, "DropdownMenuCheckboxItem", () => $d1bf075a6b218014$export$53a69729da201fa9);
$parcel$export(module.exports, "DropdownMenuRadioGroup", () => $d1bf075a6b218014$export$3323ad73d55f587e);
$parcel$export(module.exports, "DropdownMenuRadioItem", () => $d1bf075a6b218014$export$e4f69b41b1637536);
$parcel$export(module.exports, "DropdownMenuItemIndicator", () => $d1bf075a6b218014$export$42355ae145153fb6);
$parcel$export(module.exports, "DropdownMenuSeparator", () => $d1bf075a6b218014$export$da160178fd3bc7e9);
$parcel$export(module.exports, "DropdownMenuArrow", () => $d1bf075a6b218014$export$34b8980744021ec5);
$parcel$export(module.exports, "DropdownMenuSub", () => $d1bf075a6b218014$export$2f307d81a64f5442);
$parcel$export(module.exports, "DropdownMenuSubTrigger", () => $d1bf075a6b218014$export$21dcb7ec56f874cf);
$parcel$export(module.exports, "DropdownMenuSubContent", () => $d1bf075a6b218014$export$f34ec8bc2482cc5f);
$parcel$export(module.exports, "Root", () => $d1bf075a6b218014$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $d1bf075a6b218014$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Portal", () => $d1bf075a6b218014$export$602eac185826482c);
$parcel$export(module.exports, "Content", () => $d1bf075a6b218014$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Group", () => $d1bf075a6b218014$export$eb2fcfdbd7ba97d4);
$parcel$export(module.exports, "Label", () => $d1bf075a6b218014$export$b04be29aa201d4f5);
$parcel$export(module.exports, "Item", () => $d1bf075a6b218014$export$6d08773d2e66f8f2);
$parcel$export(module.exports, "CheckboxItem", () => $d1bf075a6b218014$export$16ce288f89fa631c);
$parcel$export(module.exports, "RadioGroup", () => $d1bf075a6b218014$export$a98f0dcb43a68a25);
$parcel$export(module.exports, "RadioItem", () => $d1bf075a6b218014$export$371ab307eab489c0);
$parcel$export(module.exports, "ItemIndicator", () => $d1bf075a6b218014$export$c3468e2714d175fa);
$parcel$export(module.exports, "Separator", () => $d1bf075a6b218014$export$1ff3c3f08ae963c0);
$parcel$export(module.exports, "Arrow", () => $d1bf075a6b218014$export$21b07c8f274aebd5);
$parcel$export(module.exports, "Sub", () => $d1bf075a6b218014$export$d7a01e11500dfb6f);
$parcel$export(module.exports, "SubTrigger", () => $d1bf075a6b218014$export$2ea8a7a591ac5eac);
$parcel$export(module.exports, "SubContent", () => $d1bf075a6b218014$export$6d4de93b380beddf);










/* -------------------------------------------------------------------------------------------------
 * DropdownMenu
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$DROPDOWN_MENU_NAME = 'DropdownMenu';
const [$d1bf075a6b218014$var$createDropdownMenuContext, $d1bf075a6b218014$export$c0623cd925aeb687] = $7dQ7Q$radixuireactcontext.createContextScope($d1bf075a6b218014$var$DROPDOWN_MENU_NAME, [
    $7dQ7Q$radixuireactmenu.createMenuScope
]);
const $d1bf075a6b218014$var$useMenuScope = $7dQ7Q$radixuireactmenu.createMenuScope();
const [$d1bf075a6b218014$var$DropdownMenuProvider, $d1bf075a6b218014$var$useDropdownMenuContext] = $d1bf075a6b218014$var$createDropdownMenuContext($d1bf075a6b218014$var$DROPDOWN_MENU_NAME);
const $d1bf075a6b218014$export$e44a253a59704894 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , children: children , dir: dir , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    const triggerRef = $7dQ7Q$react.useRef(null);
    const [open = false, setOpen] = $7dQ7Q$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $7dQ7Q$react.createElement($d1bf075a6b218014$var$DropdownMenuProvider, {
        scope: __scopeDropdownMenu,
        triggerId: $7dQ7Q$radixuireactid.useId(),
        triggerRef: triggerRef,
        contentId: $7dQ7Q$radixuireactid.useId(),
        open: open,
        onOpenChange: setOpen,
        onOpenToggle: $7dQ7Q$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ]),
        modal: modal
    }, /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Root, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, {
        open: open,
        onOpenChange: setOpen,
        dir: dir,
        modal: modal
    }), children));
};
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$e44a253a59704894, {
    displayName: $d1bf075a6b218014$var$DROPDOWN_MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuTrigger
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$TRIGGER_NAME = 'DropdownMenuTrigger';
const $d1bf075a6b218014$export$d2469213b3befba9 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , disabled: disabled = false , ...triggerProps } = props;
    const context = $d1bf075a6b218014$var$useDropdownMenuContext($d1bf075a6b218014$var$TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Anchor, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({
        asChild: true
    }, menuScope), /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : undefined,
        "data-state": context.open ? 'open' : 'closed',
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled
    }, triggerProps, {
        ref: $7dQ7Q$radixuireactcomposerefs.composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onPointerDown, (event)=>{
            // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onOpenToggle(); // prevent trigger focusing when opening
                // this allows the content to be given focus without competition
                if (!context.open) event.preventDefault();
            }
        }),
        onKeyDown: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            if (disabled) return;
            if ([
                'Enter',
                ' '
            ].includes(event.key)) context.onOpenToggle();
            if (event.key === 'ArrowDown') context.onOpenChange(true); // prevent keydown from scrolling window / first focused item to execute
            // that keydown (inadvertently closing the menu)
            if ([
                'Enter',
                ' ',
                'ArrowDown'
            ].includes(event.key)) event.preventDefault();
        })
    })));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$d2469213b3befba9, {
    displayName: $d1bf075a6b218014$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$PORTAL_NAME = 'DropdownMenuPortal';
const $d1bf075a6b218014$export$cd369b4d4d54efc9 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...portalProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Portal, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, portalProps));
};
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$cd369b4d4d54efc9, {
    displayName: $d1bf075a6b218014$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuContent
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$CONTENT_NAME = 'DropdownMenuContent';
const $d1bf075a6b218014$export$6e76d93a37c01248 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...contentProps } = props;
    const context = $d1bf075a6b218014$var$useDropdownMenuContext($d1bf075a6b218014$var$CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = $7dQ7Q$react.useRef(false);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Content, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({
        id: context.contentId,
        "aria-labelledby": context.triggerId
    }, menuScope, contentProps, {
        ref: forwardedRef,
        onCloseAutoFocus: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            var _context$triggerRef$c;
            if (!hasInteractedOutsideRef.current) (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
            hasInteractedOutsideRef.current = false; // Always prevent auto focus because we either focus manually or want user agent focus
            event.preventDefault();
        }),
        onInteractOutside: $7dQ7Q$radixuiprimitive.composeEventHandlers(props.onInteractOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
            ...props.style,
            // re-namespace exposed content custom property
            ['--radix-dropdown-menu-content-transform-origin']: 'var(--radix-popper-transform-origin)'
        }
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$6e76d93a37c01248, {
    displayName: $d1bf075a6b218014$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$GROUP_NAME = 'DropdownMenuGroup';
const $d1bf075a6b218014$export$246bebaba3a2f70e = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...groupProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Group, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$246bebaba3a2f70e, {
    displayName: $d1bf075a6b218014$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$LABEL_NAME = 'DropdownMenuLabel';
const $d1bf075a6b218014$export$76e48c5b57f24495 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...labelProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Label, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$76e48c5b57f24495, {
    displayName: $d1bf075a6b218014$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItem
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$ITEM_NAME = 'DropdownMenuItem';
const $d1bf075a6b218014$export$ed97964d1871885d = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...itemProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Item, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, itemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$ed97964d1871885d, {
    displayName: $d1bf075a6b218014$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$CHECKBOX_ITEM_NAME = 'DropdownMenuCheckboxItem';
const $d1bf075a6b218014$export$53a69729da201fa9 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...checkboxItemProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.CheckboxItem, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, checkboxItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$53a69729da201fa9, {
    displayName: $d1bf075a6b218014$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$RADIO_GROUP_NAME = 'DropdownMenuRadioGroup';
const $d1bf075a6b218014$export$3323ad73d55f587e = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...radioGroupProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.RadioGroup, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, radioGroupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$3323ad73d55f587e, {
    displayName: $d1bf075a6b218014$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$RADIO_ITEM_NAME = 'DropdownMenuRadioItem';
const $d1bf075a6b218014$export$e4f69b41b1637536 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...radioItemProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.RadioItem, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, radioItemProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$e4f69b41b1637536, {
    displayName: $d1bf075a6b218014$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$INDICATOR_NAME = 'DropdownMenuItemIndicator';
const $d1bf075a6b218014$export$42355ae145153fb6 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...itemIndicatorProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.ItemIndicator, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, itemIndicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$42355ae145153fb6, {
    displayName: $d1bf075a6b218014$var$INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$SEPARATOR_NAME = 'DropdownMenuSeparator';
const $d1bf075a6b218014$export$da160178fd3bc7e9 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...separatorProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Separator, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$da160178fd3bc7e9, {
    displayName: $d1bf075a6b218014$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$ARROW_NAME = 'DropdownMenuArrow';
const $d1bf075a6b218014$export$34b8980744021ec5 = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...arrowProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Arrow, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$34b8980744021ec5, {
    displayName: $d1bf075a6b218014$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSub
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$export$2f307d81a64f5442 = (props)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , children: children , open: openProp , onOpenChange: onOpenChange , defaultOpen: defaultOpen  } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    const [open = false, setOpen] = $7dQ7Q$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.Sub, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, {
        open: open,
        onOpenChange: setOpen
    }), children);
};
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$SUB_TRIGGER_NAME = 'DropdownMenuSubTrigger';
const $d1bf075a6b218014$export$21dcb7ec56f874cf = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...subTriggerProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.SubTrigger, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, subTriggerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$21dcb7ec56f874cf, {
    displayName: $d1bf075a6b218014$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DropdownMenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$var$SUB_CONTENT_NAME = 'DropdownMenuSubContent';
const $d1bf075a6b218014$export$f34ec8bc2482cc5f = /*#__PURE__*/ $7dQ7Q$react.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu: __scopeDropdownMenu , ...subContentProps } = props;
    const menuScope = $d1bf075a6b218014$var$useMenuScope(__scopeDropdownMenu);
    return /*#__PURE__*/ $7dQ7Q$react.createElement($7dQ7Q$radixuireactmenu.SubContent, ($parcel$interopDefault($7dQ7Q$babelruntimehelpersextends))({}, menuScope, subContentProps, {
        ref: forwardedRef,
        style: {
            ...props.style,
            // re-namespace exposed content custom property
            ['--radix-dropdown-menu-content-transform-origin']: 'var(--radix-popper-transform-origin)'
        }
    }));
});
/*#__PURE__*/ Object.assign($d1bf075a6b218014$export$f34ec8bc2482cc5f, {
    displayName: $d1bf075a6b218014$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $d1bf075a6b218014$export$be92b6f5f03c0fe9 = $d1bf075a6b218014$export$e44a253a59704894;
const $d1bf075a6b218014$export$41fb9f06171c75f4 = $d1bf075a6b218014$export$d2469213b3befba9;
const $d1bf075a6b218014$export$602eac185826482c = $d1bf075a6b218014$export$cd369b4d4d54efc9;
const $d1bf075a6b218014$export$7c6e2c02157bb7d2 = $d1bf075a6b218014$export$6e76d93a37c01248;
const $d1bf075a6b218014$export$eb2fcfdbd7ba97d4 = $d1bf075a6b218014$export$246bebaba3a2f70e;
const $d1bf075a6b218014$export$b04be29aa201d4f5 = $d1bf075a6b218014$export$76e48c5b57f24495;
const $d1bf075a6b218014$export$6d08773d2e66f8f2 = $d1bf075a6b218014$export$ed97964d1871885d;
const $d1bf075a6b218014$export$16ce288f89fa631c = $d1bf075a6b218014$export$53a69729da201fa9;
const $d1bf075a6b218014$export$a98f0dcb43a68a25 = $d1bf075a6b218014$export$3323ad73d55f587e;
const $d1bf075a6b218014$export$371ab307eab489c0 = $d1bf075a6b218014$export$e4f69b41b1637536;
const $d1bf075a6b218014$export$c3468e2714d175fa = $d1bf075a6b218014$export$42355ae145153fb6;
const $d1bf075a6b218014$export$1ff3c3f08ae963c0 = $d1bf075a6b218014$export$da160178fd3bc7e9;
const $d1bf075a6b218014$export$21b07c8f274aebd5 = $d1bf075a6b218014$export$34b8980744021ec5;
const $d1bf075a6b218014$export$d7a01e11500dfb6f = $d1bf075a6b218014$export$2f307d81a64f5442;
const $d1bf075a6b218014$export$2ea8a7a591ac5eac = $d1bf075a6b218014$export$21dcb7ec56f874cf;
const $d1bf075a6b218014$export$6d4de93b380beddf = $d1bf075a6b218014$export$f34ec8bc2482cc5f;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 95378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $cnctE$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "FocusGuards", () => $71476a6ed7dbbaf3$export$ac5b58043b79449b);
$parcel$export(module.exports, "Root", () => $71476a6ed7dbbaf3$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "useFocusGuards", () => $71476a6ed7dbbaf3$export$b7ece24a22aeda8c);

/** Number of components which have requested interest to have focus guards */ let $71476a6ed7dbbaf3$var$count = 0;
function $71476a6ed7dbbaf3$export$ac5b58043b79449b(props) {
    $71476a6ed7dbbaf3$export$b7ece24a22aeda8c();
    return props.children;
}
/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */ function $71476a6ed7dbbaf3$export$b7ece24a22aeda8c() {
    $cnctE$react.useEffect(()=>{
        var _edgeGuards$, _edgeGuards$2;
        const edgeGuards = document.querySelectorAll('[data-radix-focus-guard]');
        document.body.insertAdjacentElement('afterbegin', (_edgeGuards$ = edgeGuards[0]) !== null && _edgeGuards$ !== void 0 ? _edgeGuards$ : $71476a6ed7dbbaf3$var$createFocusGuard());
        document.body.insertAdjacentElement('beforeend', (_edgeGuards$2 = edgeGuards[1]) !== null && _edgeGuards$2 !== void 0 ? _edgeGuards$2 : $71476a6ed7dbbaf3$var$createFocusGuard());
        $71476a6ed7dbbaf3$var$count++;
        return ()=>{
            if ($71476a6ed7dbbaf3$var$count === 1) document.querySelectorAll('[data-radix-focus-guard]').forEach((node)=>node.remove()
            );
            $71476a6ed7dbbaf3$var$count--;
        };
    }, []);
}
function $71476a6ed7dbbaf3$var$createFocusGuard() {
    const element = document.createElement('span');
    element.setAttribute('data-radix-focus-guard', '');
    element.tabIndex = 0;
    element.style.cssText = 'outline: none; opacity: 0; position: fixed; pointer-events: none';
    return element;
}
const $71476a6ed7dbbaf3$export$be92b6f5f03c0fe9 = $71476a6ed7dbbaf3$export$ac5b58043b79449b;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 56167:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $buum9$babelruntimehelpersextends = __webpack_require__(36305);
var $buum9$react = __webpack_require__(18038);
var $buum9$radixuireactcomposerefs = __webpack_require__(16849);
var $buum9$radixuireactprimitive = __webpack_require__(49140);
var $buum9$radixuireactusecallbackref = __webpack_require__(86518);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "FocusScope", () => $2bc01e66e04aa9ed$export$20e40289641fbbb6);
$parcel$export(module.exports, "Root", () => $2bc01e66e04aa9ed$export$be92b6f5f03c0fe9);





const $2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT = 'focusScope.autoFocusOnMount';
const $2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT = 'focusScope.autoFocusOnUnmount';
const $2bc01e66e04aa9ed$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * FocusScope
 * -----------------------------------------------------------------------------------------------*/ const $2bc01e66e04aa9ed$var$FOCUS_SCOPE_NAME = 'FocusScope';
const $2bc01e66e04aa9ed$export$20e40289641fbbb6 = /*#__PURE__*/ $buum9$react.forwardRef((props, forwardedRef)=>{
    const { loop: loop = false , trapped: trapped = false , onMountAutoFocus: onMountAutoFocusProp , onUnmountAutoFocus: onUnmountAutoFocusProp , ...scopeProps } = props;
    const [container1, setContainer] = $buum9$react.useState(null);
    const onMountAutoFocus = $buum9$radixuireactusecallbackref.useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = $buum9$radixuireactusecallbackref.useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = $buum9$react.useRef(null);
    const composedRefs = $buum9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setContainer(node)
    );
    const focusScope = $buum9$react.useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current; // Takes care of trapping focus if focus is moved outside programmatically for example
    $buum9$react.useEffect(()=>{
        if (trapped) {
            function handleFocusIn(event) {
                if (focusScope.paused || !container1) return;
                const target = event.target;
                if (container1.contains(target)) lastFocusedElementRef.current = target;
                else $2bc01e66e04aa9ed$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            function handleFocusOut(event) {
                if (focusScope.paused || !container1) return;
                if (!container1.contains(event.relatedTarget)) $2bc01e66e04aa9ed$var$focus(lastFocusedElementRef.current, {
                    select: true
                });
            }
            document.addEventListener('focusin', handleFocusIn);
            document.addEventListener('focusout', handleFocusOut);
            return ()=>{
                document.removeEventListener('focusin', handleFocusIn);
                document.removeEventListener('focusout', handleFocusOut);
            };
        }
    }, [
        trapped,
        container1,
        focusScope.paused
    ]);
    $buum9$react.useEffect(()=>{
        if (container1) {
            $2bc01e66e04aa9ed$var$focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container1.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, $2bc01e66e04aa9ed$var$EVENT_OPTIONS);
                container1.addEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container1.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    $2bc01e66e04aa9ed$var$focusFirst($2bc01e66e04aa9ed$var$removeLinks($2bc01e66e04aa9ed$var$getTabbableCandidates(container1)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) $2bc01e66e04aa9ed$var$focus(container1);
                }
            }
            return ()=>{
                container1.removeEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_MOUNT, onMountAutoFocus); // We hit a react bug (fixed in v17) with focusing in unmount.
                // We need to delay the focus a little to get around it for now.
                // See: https://github.com/facebook/react/issues/17894
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, $2bc01e66e04aa9ed$var$EVENT_OPTIONS);
                    container1.addEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container1.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) $2bc01e66e04aa9ed$var$focus(previouslyFocusedElement !== null && previouslyFocusedElement !== void 0 ? previouslyFocusedElement : document.body, {
                        select: true
                    });
                     // we need to remove the listener after we `dispatchEvent`
                    container1.removeEventListener($2bc01e66e04aa9ed$var$AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    $2bc01e66e04aa9ed$var$focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container1,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]); // Takes care of looping focus (when tabbing whilst at the edges)
    const handleKeyDown = $buum9$react.useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === 'Tab' && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container = event.currentTarget;
            const [first, last] = $2bc01e66e04aa9ed$var$getTabbableEdges(container);
            const hasTabbableElementsInside = first && last; // we can only wrap focus if we have tabbable edges
            if (!hasTabbableElementsInside) {
                if (focusedElement === container) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) $2bc01e66e04aa9ed$var$focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) $2bc01e66e04aa9ed$var$focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /*#__PURE__*/ $buum9$react.createElement($buum9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($buum9$babelruntimehelpersextends))({
        tabIndex: -1
    }, scopeProps, {
        ref: composedRefs,
        onKeyDown: handleKeyDown
    }));
});
/*#__PURE__*/ Object.assign($2bc01e66e04aa9ed$export$20e40289641fbbb6, {
    displayName: $2bc01e66e04aa9ed$var$FOCUS_SCOPE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */ function $2bc01e66e04aa9ed$var$focusFirst(candidates, { select: select = false  } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        $2bc01e66e04aa9ed$var$focus(candidate, {
            select: select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
/**
 * Returns the first and last tabbable elements inside a container.
 */ function $2bc01e66e04aa9ed$var$getTabbableEdges(container) {
    const candidates = $2bc01e66e04aa9ed$var$getTabbableCandidates(container);
    const first = $2bc01e66e04aa9ed$var$findVisible(candidates, container);
    const last = $2bc01e66e04aa9ed$var$findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */ function $2bc01e66e04aa9ed$var$getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP; // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
            // runtime's understanding of tabbability, so this automatically accounts
            // for any kind of element that could be tabbed to.
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode); // we do not take into account the order of nodes with positive `tabIndex` as it
    // hinders accessibility to have tab order different from visual order.
    return nodes;
}
/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */ function $2bc01e66e04aa9ed$var$findVisible(elements, container) {
    for (const element of elements){
        // we stop checking if it's hidden at the `container` level (excluding)
        if (!$2bc01e66e04aa9ed$var$isHidden(element, {
            upTo: container
        })) return element;
    }
}
function $2bc01e66e04aa9ed$var$isHidden(node, { upTo: upTo  }) {
    if (getComputedStyle(node).visibility === 'hidden') return true;
    while(node){
        // we stop at `upTo` (excluding it)
        if (upTo !== undefined && node === upTo) return false;
        if (getComputedStyle(node).display === 'none') return true;
        node = node.parentElement;
    }
    return false;
}
function $2bc01e66e04aa9ed$var$isSelectableInput(element) {
    return element instanceof HTMLInputElement && 'select' in element;
}
function $2bc01e66e04aa9ed$var$focus(element, { select: select = false  } = {}) {
    // only focus if that element is focusable
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement; // NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
        element.focus({
            preventScroll: true
        }); // only select if its not the same element, it supports selection and we need to select
        if (element !== previouslyFocusedElement && $2bc01e66e04aa9ed$var$isSelectableInput(element) && select) element.select();
    }
}
/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/ const $2bc01e66e04aa9ed$var$focusScopesStack = $2bc01e66e04aa9ed$var$createFocusScopesStack();
function $2bc01e66e04aa9ed$var$createFocusScopesStack() {
    /** A stack of focus scopes, with the active one at the top */ let stack = [];
    return {
        add (focusScope) {
            // pause the currently active focus scope (at the top of the stack)
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) activeFocusScope === null || activeFocusScope === void 0 || activeFocusScope.pause();
             // remove in case it already exists (because we'll re-add it at the top of the stack)
            stack = $2bc01e66e04aa9ed$var$arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            var _stack$;
            stack = $2bc01e66e04aa9ed$var$arrayRemove(stack, focusScope);
            (_stack$ = stack[0]) === null || _stack$ === void 0 || _stack$.resume();
        }
    };
}
function $2bc01e66e04aa9ed$var$arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) updatedArray.splice(index, 1);
    return updatedArray;
}
function $2bc01e66e04aa9ed$var$removeLinks(items) {
    return items.filter((item)=>item.tagName !== 'A'
    );
}
const $2bc01e66e04aa9ed$export$be92b6f5f03c0fe9 = $2bc01e66e04aa9ed$export$20e40289641fbbb6;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 37706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $47woD$react = __webpack_require__(18038);
var $47woD$radixuireactuselayouteffect = __webpack_require__(41572);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useId", () => $dc478e4659f630c5$export$f680877a34711e37);


const $dc478e4659f630c5$var$useReactId = $47woD$react['useId'.toString()] || (()=>undefined
);
let $dc478e4659f630c5$var$count = 0;
function $dc478e4659f630c5$export$f680877a34711e37(deterministicId) {
    const [id, setId] = $47woD$react.useState($dc478e4659f630c5$var$useReactId()); // React versions older than 18 will have client-side ids only.
    $47woD$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (!deterministicId) setId((reactId)=>reactId !== null && reactId !== void 0 ? reactId : String($dc478e4659f630c5$var$count++)
        );
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : '');
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 63214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $cnSS2$babelruntimehelpersextends = __webpack_require__(81781);
var $cnSS2$react = __webpack_require__(18038);
var $cnSS2$radixuiprimitive = __webpack_require__(74217);
var $cnSS2$radixuireactcollection = __webpack_require__(13797);
var $cnSS2$radixuireactcomposerefs = __webpack_require__(16849);
var $cnSS2$radixuireactcontext = __webpack_require__(60708);
var $cnSS2$radixuireactdirection = __webpack_require__(48207);
var $cnSS2$radixuireactdismissablelayer = __webpack_require__(24827);
var $cnSS2$radixuireactfocusguards = __webpack_require__(95378);
var $cnSS2$radixuireactfocusscope = __webpack_require__(56167);
var $cnSS2$radixuireactid = __webpack_require__(37706);
var $cnSS2$radixuireactpopper = __webpack_require__(33880);
var $cnSS2$radixuireactportal = __webpack_require__(17752);
var $cnSS2$radixuireactpresence = __webpack_require__(46474);
var $cnSS2$radixuireactprimitive = __webpack_require__(49140);
var $cnSS2$radixuireactrovingfocus = __webpack_require__(93509);
var $cnSS2$radixuireactslot = __webpack_require__(32915);
var $cnSS2$radixuireactusecallbackref = __webpack_require__(86518);
var $cnSS2$ariahidden = __webpack_require__(48728);
var $cnSS2$reactremovescroll = __webpack_require__(61426);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createMenuScope", () => $213e4d2df823067d$export$4027731b685e72eb);
$parcel$export(module.exports, "Menu", () => $213e4d2df823067d$export$d9b273488cd8ce6f);
$parcel$export(module.exports, "MenuAnchor", () => $213e4d2df823067d$export$9fa5ebd18bee4d43);
$parcel$export(module.exports, "MenuPortal", () => $213e4d2df823067d$export$793392f970497feb);
$parcel$export(module.exports, "MenuContent", () => $213e4d2df823067d$export$479f0f2f71193efe);
$parcel$export(module.exports, "MenuGroup", () => $213e4d2df823067d$export$22a631d1f72787bb);
$parcel$export(module.exports, "MenuLabel", () => $213e4d2df823067d$export$dd37bec0e8a99143);
$parcel$export(module.exports, "MenuItem", () => $213e4d2df823067d$export$2ce376c2cc3355c8);
$parcel$export(module.exports, "MenuCheckboxItem", () => $213e4d2df823067d$export$f6f243521332502d);
$parcel$export(module.exports, "MenuRadioGroup", () => $213e4d2df823067d$export$ea2200c9eee416b3);
$parcel$export(module.exports, "MenuRadioItem", () => $213e4d2df823067d$export$69bd225e9817f6d0);
$parcel$export(module.exports, "MenuItemIndicator", () => $213e4d2df823067d$export$a2593e23056970a3);
$parcel$export(module.exports, "MenuSeparator", () => $213e4d2df823067d$export$1cec7dcdd713e220);
$parcel$export(module.exports, "MenuArrow", () => $213e4d2df823067d$export$bcdda4773debf5fa);
$parcel$export(module.exports, "MenuSub", () => $213e4d2df823067d$export$71bdb9d1e2909932);
$parcel$export(module.exports, "MenuSubTrigger", () => $213e4d2df823067d$export$5fbbb3ba7297405f);
$parcel$export(module.exports, "MenuSubContent", () => $213e4d2df823067d$export$e7142ab31822bde6);
$parcel$export(module.exports, "Root", () => $213e4d2df823067d$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Anchor", () => $213e4d2df823067d$export$b688253958b8dfe7);
$parcel$export(module.exports, "Portal", () => $213e4d2df823067d$export$602eac185826482c);
$parcel$export(module.exports, "Content", () => $213e4d2df823067d$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Group", () => $213e4d2df823067d$export$eb2fcfdbd7ba97d4);
$parcel$export(module.exports, "Label", () => $213e4d2df823067d$export$b04be29aa201d4f5);
$parcel$export(module.exports, "Item", () => $213e4d2df823067d$export$6d08773d2e66f8f2);
$parcel$export(module.exports, "CheckboxItem", () => $213e4d2df823067d$export$16ce288f89fa631c);
$parcel$export(module.exports, "RadioGroup", () => $213e4d2df823067d$export$a98f0dcb43a68a25);
$parcel$export(module.exports, "RadioItem", () => $213e4d2df823067d$export$371ab307eab489c0);
$parcel$export(module.exports, "ItemIndicator", () => $213e4d2df823067d$export$c3468e2714d175fa);
$parcel$export(module.exports, "Separator", () => $213e4d2df823067d$export$1ff3c3f08ae963c0);
$parcel$export(module.exports, "Arrow", () => $213e4d2df823067d$export$21b07c8f274aebd5);
$parcel$export(module.exports, "Sub", () => $213e4d2df823067d$export$d7a01e11500dfb6f);
$parcel$export(module.exports, "SubTrigger", () => $213e4d2df823067d$export$2ea8a7a591ac5eac);
$parcel$export(module.exports, "SubContent", () => $213e4d2df823067d$export$6d4de93b380beddf);






















const $213e4d2df823067d$var$SELECTION_KEYS = [
    'Enter',
    ' '
];
const $213e4d2df823067d$var$FIRST_KEYS = [
    'ArrowDown',
    'PageUp',
    'Home'
];
const $213e4d2df823067d$var$LAST_KEYS = [
    'ArrowUp',
    'PageDown',
    'End'
];
const $213e4d2df823067d$var$FIRST_LAST_KEYS = [
    ...$213e4d2df823067d$var$FIRST_KEYS,
    ...$213e4d2df823067d$var$LAST_KEYS
];
const $213e4d2df823067d$var$SUB_OPEN_KEYS = {
    ltr: [
        ...$213e4d2df823067d$var$SELECTION_KEYS,
        'ArrowRight'
    ],
    rtl: [
        ...$213e4d2df823067d$var$SELECTION_KEYS,
        'ArrowLeft'
    ]
};
const $213e4d2df823067d$var$SUB_CLOSE_KEYS = {
    ltr: [
        'ArrowLeft'
    ],
    rtl: [
        'ArrowRight'
    ]
};
/* -------------------------------------------------------------------------------------------------
 * Menu
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$MENU_NAME = 'Menu';
const [$213e4d2df823067d$var$Collection, $213e4d2df823067d$var$useCollection, $213e4d2df823067d$var$createCollectionScope] = $cnSS2$radixuireactcollection.createCollection($213e4d2df823067d$var$MENU_NAME);
const [$213e4d2df823067d$var$createMenuContext, $213e4d2df823067d$export$4027731b685e72eb] = $cnSS2$radixuireactcontext.createContextScope($213e4d2df823067d$var$MENU_NAME, [
    $213e4d2df823067d$var$createCollectionScope,
    $cnSS2$radixuireactpopper.createPopperScope,
    $cnSS2$radixuireactrovingfocus.createRovingFocusGroupScope
]);
const $213e4d2df823067d$var$usePopperScope = $cnSS2$radixuireactpopper.createPopperScope();
const $213e4d2df823067d$var$useRovingFocusGroupScope = $cnSS2$radixuireactrovingfocus.createRovingFocusGroupScope();
const [$213e4d2df823067d$var$MenuProvider, $213e4d2df823067d$var$useMenuContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$MENU_NAME);
const [$213e4d2df823067d$var$MenuRootProvider, $213e4d2df823067d$var$useMenuRootContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$MENU_NAME);
const $213e4d2df823067d$export$d9b273488cd8ce6f = (props)=>{
    const { __scopeMenu: __scopeMenu , open: open = false , children: children , dir: dir , onOpenChange: onOpenChange , modal: modal = true  } = props;
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    const [content, setContent] = $cnSS2$react.useState(null);
    const isUsingKeyboardRef = $cnSS2$react.useRef(false);
    const handleOpenChange = $cnSS2$radixuireactusecallbackref.useCallbackRef(onOpenChange);
    const direction = $cnSS2$radixuireactdirection.useDirection(dir);
    $cnSS2$react.useEffect(()=>{
        // Capture phase ensures we set the boolean before any side effects execute
        // in response to the key or pointer event as they might depend on this value.
        const handleKeyDown = ()=>{
            isUsingKeyboardRef.current = true;
            document.addEventListener('pointerdown', handlePointer, {
                capture: true,
                once: true
            });
            document.addEventListener('pointermove', handlePointer, {
                capture: true,
                once: true
            });
        };
        const handlePointer = ()=>isUsingKeyboardRef.current = false
        ;
        document.addEventListener('keydown', handleKeyDown, {
            capture: true
        });
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown, {
                capture: true
            });
            document.removeEventListener('pointerdown', handlePointer, {
                capture: true
            });
            document.removeEventListener('pointermove', handlePointer, {
                capture: true
            });
        };
    }, []);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Root, popperScope, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuProvider, {
        scope: __scopeMenu,
        open: open,
        onOpenChange: handleOpenChange,
        content: content,
        onContentChange: setContent
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuRootProvider, {
        scope: __scopeMenu,
        onClose: $cnSS2$react.useCallback(()=>handleOpenChange(false)
        , [
            handleOpenChange
        ]),
        isUsingKeyboardRef: isUsingKeyboardRef,
        dir: direction,
        modal: modal
    }, children)));
};
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$d9b273488cd8ce6f, {
    displayName: $213e4d2df823067d$var$MENU_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuAnchor
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ANCHOR_NAME = 'MenuAnchor';
const $213e4d2df823067d$export$9fa5ebd18bee4d43 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...anchorProps } = props;
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Anchor, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, popperScope, anchorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$9fa5ebd18bee4d43, {
    displayName: $213e4d2df823067d$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuPortal
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$PORTAL_NAME = 'MenuPortal';
const [$213e4d2df823067d$var$PortalProvider, $213e4d2df823067d$var$usePortalContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$PORTAL_NAME, {
    forceMount: undefined
});
const $213e4d2df823067d$export$793392f970497feb = (props)=>{
    const { __scopeMenu: __scopeMenu , forceMount: forceMount , children: children , container: container  } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$PORTAL_NAME, __scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$PortalProvider, {
        scope: __scopeMenu,
        forceMount: forceMount
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactportal.Portal, {
        asChild: true,
        container: container
    }, children)));
};
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$793392f970497feb, {
    displayName: $213e4d2df823067d$var$PORTAL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuContent
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$CONTENT_NAME = 'MenuContent';
const [$213e4d2df823067d$var$MenuContentProvider, $213e4d2df823067d$var$useMenuContentContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$CONTENT_NAME);
const $213e4d2df823067d$export$479f0f2f71193efe = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $213e4d2df823067d$var$usePortalContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount: forceMount = portalContext.forceMount , ...contentProps } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Provider, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Slot, {
        scope: props.__scopeMenu
    }, rootContext.modal ? /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuRootContentModal, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuRootContentNonModal, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, contentProps, {
        ref: forwardedRef
    })))));
});
/* ---------------------------------------------------------------------------------------------- */ const $213e4d2df823067d$var$MenuRootContentModal = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const ref = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref); // Hide everything from ARIA except the `MenuContent`
    $cnSS2$react.useEffect(()=>{
        const content = ref.current;
        if (content) return $cnSS2$ariahidden.hideOthers(content);
    }, []);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, props, {
        ref: composedRefs // we make sure we're not trapping once it's been closed
        ,
        trapFocus: context.open // make sure to only disable pointer events when open
        ,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true // When focus is trapped, a `focusout` event may still happen.
        ,
        onFocusOutside: $cnSS2$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault()
        , {
            checkForDefaultPrevented: false
        }),
        onDismiss: ()=>context.onOpenChange(false)
    }));
});
const $213e4d2df823067d$var$MenuRootContentNonModal = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: ()=>context.onOpenChange(false)
    }));
});
/* ---------------------------------------------------------------------------------------------- */ const $213e4d2df823067d$var$MenuContentImpl = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , loop: loop = false , trapFocus: trapFocus , onOpenAutoFocus: onOpenAutoFocus , onCloseAutoFocus: onCloseAutoFocus , disableOutsidePointerEvents: disableOutsidePointerEvents , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , disableOutsideScroll: disableOutsideScroll , ...contentProps } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, __scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$CONTENT_NAME, __scopeMenu);
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = $213e4d2df823067d$var$useRovingFocusGroupScope(__scopeMenu);
    const getItems = $213e4d2df823067d$var$useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = $cnSS2$react.useState(null);
    const contentRef = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = $cnSS2$react.useRef(0);
    const searchRef = $cnSS2$react.useRef('');
    const pointerGraceTimerRef = $cnSS2$react.useRef(0);
    const pointerGraceIntentRef = $cnSS2$react.useRef(null);
    const pointerDirRef = $cnSS2$react.useRef('right');
    const lastPointerXRef = $cnSS2$react.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? $cnSS2$reactremovescroll.RemoveScroll : $cnSS2$react.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? {
        as: $cnSS2$radixuireactslot.Slot,
        allowPinchZoom: true
    } : undefined;
    const handleTypeaheadSearch = (key)=>{
        var _items$find, _items$find2;
        const search = searchRef.current + key;
        const items = getItems().filter((item)=>!item.disabled
        );
        const currentItem = document.activeElement;
        const currentMatch = (_items$find = items.find((item)=>item.ref.current === currentItem
        )) === null || _items$find === void 0 ? void 0 : _items$find.textValue;
        const values = items.map((item)=>item.textValue
        );
        const nextMatch = $213e4d2df823067d$var$getNextMatch(values, search, currentMatch);
        const newItem = (_items$find2 = items.find((item)=>item.textValue === nextMatch
        )) === null || _items$find2 === void 0 ? void 0 : _items$find2.ref.current; // Reset `searchRef` 1 second after it was last updated
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== '') timerRef.current = window.setTimeout(()=>updateSearch('')
            , 1000);
        })(search);
        if (newItem) /**
       * Imperative focus during keydown is risky so we prevent React's batching updates
       * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
       */ setTimeout(()=>newItem.focus()
        );
    };
    $cnSS2$react.useEffect(()=>{
        return ()=>window.clearTimeout(timerRef.current)
        ;
    }, []); // Make sure the whole tree has focus guards as our `MenuContent` may be
    // the last element in the DOM (beacuse of the `Portal`)
    $cnSS2$radixuireactfocusguards.useFocusGuards();
    const isPointerMovingToSubmenu = $cnSS2$react.useCallback((event)=>{
        var _pointerGraceIntentRe, _pointerGraceIntentRe2;
        const isMovingTowards = pointerDirRef.current === ((_pointerGraceIntentRe = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe === void 0 ? void 0 : _pointerGraceIntentRe.side);
        return isMovingTowards && $213e4d2df823067d$var$isPointerInGraceArea(event, (_pointerGraceIntentRe2 = pointerGraceIntentRef.current) === null || _pointerGraceIntentRe2 === void 0 ? void 0 : _pointerGraceIntentRe2.area);
    }, []);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentProvider, {
        scope: __scopeMenu,
        searchRef: searchRef,
        onItemEnter: $cnSS2$react.useCallback((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        onItemLeave: $cnSS2$react.useCallback((event)=>{
            var _contentRef$current;
            if (isPointerMovingToSubmenu(event)) return;
            (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus();
            setCurrentItemId(null);
        }, [
            isPointerMovingToSubmenu
        ]),
        onTriggerLeave: $cnSS2$react.useCallback((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        pointerGraceTimerRef: pointerGraceTimerRef,
        onPointerGraceIntentChange: $cnSS2$react.useCallback((intent)=>{
            pointerGraceIntentRef.current = intent;
        }, [])
    }, /*#__PURE__*/ $cnSS2$react.createElement(ScrollLockWrapper, scrollLockWrapperProps, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactfocusscope.FocusScope, {
        asChild: true,
        trapped: trapFocus,
        onMountAutoFocus: $cnSS2$radixuiprimitive.composeEventHandlers(onOpenAutoFocus, (event)=>{
            var _contentRef$current2;
            // when opening, explicitly focus the content area only and leave
            // `onEntryFocus` in  control of focusing first item
            event.preventDefault();
            (_contentRef$current2 = contentRef.current) === null || _contentRef$current2 === void 0 || _contentRef$current2.focus();
        }),
        onUnmountAutoFocus: onCloseAutoFocus
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactdismissablelayer.DismissableLayer, {
        asChild: true,
        disableOutsidePointerEvents: disableOutsidePointerEvents,
        onEscapeKeyDown: onEscapeKeyDown,
        onPointerDownOutside: onPointerDownOutside,
        onFocusOutside: onFocusOutside,
        onInteractOutside: onInteractOutside,
        onDismiss: onDismiss
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactrovingfocus.Root, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        asChild: true
    }, rovingFocusGroupScope, {
        dir: rootContext.dir,
        orientation: "vertical",
        loop: loop,
        currentTabStopId: currentItemId,
        onCurrentTabStopIdChange: setCurrentItemId,
        onEntryFocus: (event)=>{
            // only focus first item when using keyboard
            if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
        }
    }), /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Content, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menu",
        "aria-orientation": "vertical",
        "data-state": $213e4d2df823067d$var$getOpenState(context.open),
        "data-radix-menu-content": "",
        dir: rootContext.dir
    }, popperScope, contentProps, {
        ref: composedRefs,
        style: {
            outline: 'none',
            ...contentProps.style
        },
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(contentProps.onKeyDown, (event)=>{
            // submenu key events bubble through portals. We only care about keys in this menu.
            const target = event.target;
            const isKeyDownInside = target.closest('[data-radix-menu-content]') === event.currentTarget;
            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
            const isCharacterKey = event.key.length === 1;
            if (isKeyDownInside) {
                // menus should not be navigated using tab key so we prevent it
                if (event.key === 'Tab') event.preventDefault();
                if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
            } // focus first/last item based on key pressed
            const content = contentRef.current;
            if (event.target !== content) return;
            if (!$213e4d2df823067d$var$FIRST_LAST_KEYS.includes(event.key)) return;
            event.preventDefault();
            const items = getItems().filter((item)=>!item.disabled
            );
            const candidateNodes = items.map((item)=>item.ref.current
            );
            if ($213e4d2df823067d$var$LAST_KEYS.includes(event.key)) candidateNodes.reverse();
            $213e4d2df823067d$var$focusFirst(candidateNodes);
        }),
        onBlur: $cnSS2$radixuiprimitive.composeEventHandlers(props.onBlur, (event)=>{
            // clear search buffer when leaving the menu
            if (!event.currentTarget.contains(event.target)) {
                window.clearTimeout(timerRef.current);
                searchRef.current = '';
            }
        }),
        onPointerMove: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerMove, $213e4d2df823067d$var$whenMouse((event)=>{
            const target = event.target;
            const pointerXHasChanged = lastPointerXRef.current !== event.clientX; // We don't use `event.movementX` for this check because Safari will
            // always return `0` on a pointer event.
            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                const newDir = event.clientX > lastPointerXRef.current ? 'right' : 'left';
                pointerDirRef.current = newDir;
                lastPointerXRef.current = event.clientX;
            }
        }))
    })))))));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$479f0f2f71193efe, {
    displayName: $213e4d2df823067d$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuGroup
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$GROUP_NAME = 'MenuGroup';
const $213e4d2df823067d$export$22a631d1f72787bb = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...groupProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "group"
    }, groupProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$22a631d1f72787bb, {
    displayName: $213e4d2df823067d$var$GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuLabel
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$LABEL_NAME = 'MenuLabel';
const $213e4d2df823067d$export$dd37bec0e8a99143 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...labelProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, labelProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$dd37bec0e8a99143, {
    displayName: $213e4d2df823067d$var$LABEL_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuItem
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ITEM_NAME = 'MenuItem';
const $213e4d2df823067d$var$ITEM_SELECT = 'menu.itemSelect';
const $213e4d2df823067d$export$2ce376c2cc3355c8 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { disabled: disabled = false , onSelect: onSelect , ...itemProps } = props;
    const ref = $cnSS2$react.useRef(null);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$ITEM_NAME, props.__scopeMenu);
    const contentContext = $213e4d2df823067d$var$useMenuContentContext($213e4d2df823067d$var$ITEM_NAME, props.__scopeMenu);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = $cnSS2$react.useRef(false);
    const handleSelect = ()=>{
        const menuItem = ref.current;
        if (!disabled && menuItem) {
            const itemSelectEvent = new CustomEvent($213e4d2df823067d$var$ITEM_SELECT, {
                bubbles: true,
                cancelable: true
            });
            menuItem.addEventListener($213e4d2df823067d$var$ITEM_SELECT, (event)=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(event)
            , {
                once: true
            });
            $cnSS2$radixuireactprimitive.dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
            if (itemSelectEvent.defaultPrevented) isPointerDownRef.current = false;
            else rootContext.onClose();
        }
    };
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuItemImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, itemProps, {
        ref: composedRefs,
        disabled: disabled,
        onClick: $cnSS2$radixuiprimitive.composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event)=>{
            var _props$onPointerDown;
            (_props$onPointerDown = props.onPointerDown) === null || _props$onPointerDown === void 0 || _props$onPointerDown.call(props, event);
            isPointerDownRef.current = true;
        },
        onPointerUp: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerUp, (event)=>{
            var _event$currentTarget;
            // Pointer down can move to a different menu item which should activate it on pointer up.
            // We dispatch a click for selection to allow composition with click based triggers and to
            // prevent Firefox from getting stuck in text selection mode when the menu closes.
            if (!isPointerDownRef.current) (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || _event$currentTarget.click();
        }),
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== '';
            if (disabled || isTypingAhead && event.key === ' ') return;
            if ($213e4d2df823067d$var$SELECTION_KEYS.includes(event.key)) {
                event.currentTarget.click();
                /**
         * We prevent default browser behaviour for selection keys as they should trigger
         * a selection only:
         * - prevents space from scrolling the page.
         * - if keydown causes focus to move, prevents keydown from firing on the new target.
         */ event.preventDefault();
            }
        })
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$2ce376c2cc3355c8, {
    displayName: $213e4d2df823067d$var$ITEM_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $213e4d2df823067d$var$MenuItemImpl = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , disabled: disabled = false , textValue: textValue , ...itemProps } = props;
    const contentContext = $213e4d2df823067d$var$useMenuContentContext($213e4d2df823067d$var$ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = $213e4d2df823067d$var$useRovingFocusGroupScope(__scopeMenu);
    const ref = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = $cnSS2$react.useState(false); // get the item's `.textContent` as default strategy for typeahead `textValue`
    const [textContent, setTextContent] = $cnSS2$react.useState('');
    $cnSS2$react.useEffect(()=>{
        const menuItem = ref.current;
        if (menuItem) {
            var _menuItem$textContent;
            setTextContent(((_menuItem$textContent = menuItem.textContent) !== null && _menuItem$textContent !== void 0 ? _menuItem$textContent : '').trim());
        }
    }, [
        itemProps.children
    ]);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.ItemSlot, {
        scope: __scopeMenu,
        disabled: disabled,
        textValue: textValue !== null && textValue !== void 0 ? textValue : textContent
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactrovingfocus.Item, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        asChild: true
    }, rovingFocusGroupScope, {
        focusable: !disabled
    }), /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menuitem",
        "data-highlighted": isFocused ? '' : undefined,
        "aria-disabled": disabled || undefined,
        "data-disabled": disabled ? '' : undefined
    }, itemProps, {
        ref: composedRefs,
        onPointerMove: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerMove, $213e4d2df823067d$var$whenMouse((event)=>{
            if (disabled) contentContext.onItemLeave(event);
            else {
                contentContext.onItemEnter(event);
                if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus();
                }
            }
        })),
        onPointerLeave: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerLeave, $213e4d2df823067d$var$whenMouse((event)=>contentContext.onItemLeave(event)
        )),
        onFocus: $cnSS2$radixuiprimitive.composeEventHandlers(props.onFocus, ()=>setIsFocused(true)
        ),
        onBlur: $cnSS2$radixuiprimitive.composeEventHandlers(props.onBlur, ()=>setIsFocused(false)
        )
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * MenuCheckboxItem
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$CHECKBOX_ITEM_NAME = 'MenuCheckboxItem';
const $213e4d2df823067d$export$f6f243521332502d = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { checked: checked = false , onCheckedChange: onCheckedChange , ...checkboxItemProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked: checked
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$2ce376c2cc3355c8, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menuitemcheckbox",
        "aria-checked": $213e4d2df823067d$var$isIndeterminate(checked) ? 'mixed' : checked
    }, checkboxItemProps, {
        ref: forwardedRef,
        "data-state": $213e4d2df823067d$var$getCheckedState(checked),
        onSelect: $cnSS2$radixuiprimitive.composeEventHandlers(checkboxItemProps.onSelect, ()=>onCheckedChange === null || onCheckedChange === void 0 ? void 0 : onCheckedChange($213e4d2df823067d$var$isIndeterminate(checked) ? true : !checked)
        , {
            checkForDefaultPrevented: false
        })
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$f6f243521332502d, {
    displayName: $213e4d2df823067d$var$CHECKBOX_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuRadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$RADIO_GROUP_NAME = 'MenuRadioGroup';
const [$213e4d2df823067d$var$RadioGroupProvider, $213e4d2df823067d$var$useRadioGroupContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$RADIO_GROUP_NAME, {
    value: undefined,
    onValueChange: ()=>{}
});
const $213e4d2df823067d$export$ea2200c9eee416b3 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { value: value , onValueChange: onValueChange , ...groupProps } = props;
    const handleValueChange = $cnSS2$radixuireactusecallbackref.useCallbackRef(onValueChange);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$RadioGroupProvider, {
        scope: props.__scopeMenu,
        value: value,
        onValueChange: handleValueChange
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$22a631d1f72787bb, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, groupProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$ea2200c9eee416b3, {
    displayName: $213e4d2df823067d$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuRadioItem
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$RADIO_ITEM_NAME = 'MenuRadioItem';
const $213e4d2df823067d$export$69bd225e9817f6d0 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { value: value , ...radioItemProps } = props;
    const context = $213e4d2df823067d$var$useRadioGroupContext($213e4d2df823067d$var$RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked: checked
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$2ce376c2cc3355c8, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "menuitemradio",
        "aria-checked": checked
    }, radioItemProps, {
        ref: forwardedRef,
        "data-state": $213e4d2df823067d$var$getCheckedState(checked),
        onSelect: $cnSS2$radixuiprimitive.composeEventHandlers(radioItemProps.onSelect, ()=>{
            var _context$onValueChang;
            return (_context$onValueChang = context.onValueChange) === null || _context$onValueChang === void 0 ? void 0 : _context$onValueChang.call(context, value);
        }, {
            checkForDefaultPrevented: false
        })
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$69bd225e9817f6d0, {
    displayName: $213e4d2df823067d$var$RADIO_ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuItemIndicator
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ITEM_INDICATOR_NAME = 'MenuItemIndicator';
const [$213e4d2df823067d$var$ItemIndicatorProvider, $213e4d2df823067d$var$useItemIndicatorContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$ITEM_INDICATOR_NAME, {
    checked: false
});
const $213e4d2df823067d$export$a2593e23056970a3 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , forceMount: forceMount , ...itemIndicatorProps } = props;
    const indicatorContext = $213e4d2df823067d$var$useItemIndicatorContext($213e4d2df823067d$var$ITEM_INDICATOR_NAME, __scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || $213e4d2df823067d$var$isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, itemIndicatorProps, {
        ref: forwardedRef,
        "data-state": $213e4d2df823067d$var$getCheckedState(indicatorContext.checked)
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$a2593e23056970a3, {
    displayName: $213e4d2df823067d$var$ITEM_INDICATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSeparator
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SEPARATOR_NAME = 'MenuSeparator';
const $213e4d2df823067d$export$1cec7dcdd713e220 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...separatorProps } = props;
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        role: "separator",
        "aria-orientation": "horizontal"
    }, separatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$1cec7dcdd713e220, {
    displayName: $213e4d2df823067d$var$SEPARATOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuArrow
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$ARROW_NAME = 'MenuArrow';
const $213e4d2df823067d$export$bcdda4773debf5fa = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu: __scopeMenu , ...arrowProps } = props;
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Arrow, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({}, popperScope, arrowProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$bcdda4773debf5fa, {
    displayName: $213e4d2df823067d$var$ARROW_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSub
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SUB_NAME = 'MenuSub';
const [$213e4d2df823067d$var$MenuSubProvider, $213e4d2df823067d$var$useMenuSubContext] = $213e4d2df823067d$var$createMenuContext($213e4d2df823067d$var$SUB_NAME);
const $213e4d2df823067d$export$71bdb9d1e2909932 = (props)=>{
    const { __scopeMenu: __scopeMenu , children: children , open: open = false , onOpenChange: onOpenChange  } = props;
    const parentMenuContext = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$SUB_NAME, __scopeMenu);
    const popperScope = $213e4d2df823067d$var$usePopperScope(__scopeMenu);
    const [trigger, setTrigger] = $cnSS2$react.useState(null);
    const [content, setContent] = $cnSS2$react.useState(null);
    const handleOpenChange = $cnSS2$radixuireactusecallbackref.useCallbackRef(onOpenChange); // Prevent the parent menu from reopening with open submenus.
    $cnSS2$react.useEffect(()=>{
        if (parentMenuContext.open === false) handleOpenChange(false);
        return ()=>handleOpenChange(false)
        ;
    }, [
        parentMenuContext.open,
        handleOpenChange
    ]);
    return /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpopper.Root, popperScope, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuProvider, {
        scope: __scopeMenu,
        open: open,
        onOpenChange: handleOpenChange,
        content: content,
        onContentChange: setContent
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuSubProvider, {
        scope: __scopeMenu,
        contentId: $cnSS2$radixuireactid.useId(),
        triggerId: $cnSS2$radixuireactid.useId(),
        trigger: trigger,
        onTriggerChange: setTrigger
    }, children)));
};
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$71bdb9d1e2909932, {
    displayName: $213e4d2df823067d$var$SUB_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSubTrigger
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SUB_TRIGGER_NAME = 'MenuSubTrigger';
const $213e4d2df823067d$export$5fbbb3ba7297405f = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = $213e4d2df823067d$var$useMenuSubContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = $213e4d2df823067d$var$useMenuContentContext($213e4d2df823067d$var$SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = $cnSS2$react.useRef(null);
    const { pointerGraceTimerRef: pointerGraceTimerRef , onPointerGraceIntentChange: onPointerGraceIntentChange  } = contentContext;
    const scope = {
        __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = $cnSS2$react.useCallback(()=>{
        if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
    }, []);
    $cnSS2$react.useEffect(()=>clearOpenTimer
    , [
        clearOpenTimer
    ]);
    $cnSS2$react.useEffect(()=>{
        const pointerGraceTimer = pointerGraceTimerRef.current;
        return ()=>{
            window.clearTimeout(pointerGraceTimer);
            onPointerGraceIntentChange(null);
        };
    }, [
        pointerGraceTimerRef,
        onPointerGraceIntentChange
    ]);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$export$9fa5ebd18bee4d43, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        asChild: true
    }, scope), /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuItemImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": $213e4d2df823067d$var$getOpenState(context.open)
    }, props, {
        ref: $cnSS2$radixuireactcomposerefs.composeRefs(forwardedRef, subContext.onTriggerChange) // This is redundant for mouse users but we cannot determine pointer type from
        ,
        onClick: (event)=>{
            var _props$onClick;
            (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, event);
            if (props.disabled || event.defaultPrevented) return;
            /**
       * We manually focus because iOS Safari doesn't always focus on click (e.g. buttons)
       * and we rely heavily on `onFocusOutside` for submenus to close when switching
       * between separate submenus.
       */ event.currentTarget.focus();
            if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerMove, $213e4d2df823067d$var$whenMouse((event)=>{
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
                contentContext.onPointerGraceIntentChange(null);
                openTimerRef.current = window.setTimeout(()=>{
                    context.onOpenChange(true);
                    clearOpenTimer();
                }, 100);
            }
        })),
        onPointerLeave: $cnSS2$radixuiprimitive.composeEventHandlers(props.onPointerLeave, $213e4d2df823067d$var$whenMouse((event)=>{
            var _context$content;
            clearOpenTimer();
            const contentRect = (_context$content = context.content) === null || _context$content === void 0 ? void 0 : _context$content.getBoundingClientRect();
            if (contentRect) {
                var _context$content2;
                // TODO: make sure to update this when we change positioning logic
                const side = (_context$content2 = context.content) === null || _context$content2 === void 0 ? void 0 : _context$content2.dataset.side;
                const rightSide = side === 'right';
                const bleed = rightSide ? -5 : 5;
                const contentNearEdge = contentRect[rightSide ? 'left' : 'right'];
                const contentFarEdge = contentRect[rightSide ? 'right' : 'left'];
                contentContext.onPointerGraceIntentChange({
                    area: [
                        // consistently within polygon bounds
                        {
                            x: event.clientX + bleed,
                            y: event.clientY
                        },
                        {
                            x: contentNearEdge,
                            y: contentRect.top
                        },
                        {
                            x: contentFarEdge,
                            y: contentRect.top
                        },
                        {
                            x: contentFarEdge,
                            y: contentRect.bottom
                        },
                        {
                            x: contentNearEdge,
                            y: contentRect.bottom
                        }
                    ],
                    side: side
                });
                window.clearTimeout(pointerGraceTimerRef.current);
                pointerGraceTimerRef.current = window.setTimeout(()=>contentContext.onPointerGraceIntentChange(null)
                , 300);
            } else {
                contentContext.onTriggerLeave(event);
                if (event.defaultPrevented) return; // There's 100ms where the user may leave an item before the submenu was opened.
                contentContext.onPointerGraceIntentChange(null);
            }
        })),
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== '';
            if (props.disabled || isTypingAhead && event.key === ' ') return;
            if ($213e4d2df823067d$var$SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
                var _context$content3;
                context.onOpenChange(true); // The trigger may hold focus if opened via pointer interaction
                // so we ensure content is given focus again when switching to keyboard.
                (_context$content3 = context.content) === null || _context$content3 === void 0 || _context$content3.focus(); // prevent window from scrolling
                event.preventDefault();
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$5fbbb3ba7297405f, {
    displayName: $213e4d2df823067d$var$SUB_TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * MenuSubContent
 * -----------------------------------------------------------------------------------------------*/ const $213e4d2df823067d$var$SUB_CONTENT_NAME = 'MenuSubContent';
const $213e4d2df823067d$export$e7142ab31822bde6 = /*#__PURE__*/ $cnSS2$react.forwardRef((props, forwardedRef)=>{
    const portalContext = $213e4d2df823067d$var$usePortalContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const { forceMount: forceMount = portalContext.forceMount , ...subContentProps } = props;
    const context = $213e4d2df823067d$var$useMenuContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const rootContext = $213e4d2df823067d$var$useMenuRootContext($213e4d2df823067d$var$CONTENT_NAME, props.__scopeMenu);
    const subContext = $213e4d2df823067d$var$useMenuSubContext($213e4d2df823067d$var$SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = $cnSS2$react.useRef(null);
    const composedRefs = $cnSS2$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    return /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Provider, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ $cnSS2$react.createElement($cnSS2$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$Collection.Slot, {
        scope: props.__scopeMenu
    }, /*#__PURE__*/ $cnSS2$react.createElement($213e4d2df823067d$var$MenuContentImpl, ($parcel$interopDefault($cnSS2$babelruntimehelpersextends))({
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId
    }, subContentProps, {
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === 'rtl' ? 'left' : 'right',
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event)=>{
            var _ref$current;
            // when opening a submenu, focus content for keyboard users only
            if (rootContext.isUsingKeyboardRef.current) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
            event.preventDefault();
        } // The menu might close because of focusing another menu item in the parent menu. We
        ,
        onCloseAutoFocus: (event)=>event.preventDefault()
        ,
        onFocusOutside: $cnSS2$radixuiprimitive.composeEventHandlers(props.onFocusOutside, (event)=>{
            // We prevent closing when the trigger is focused to avoid triggering a re-open animation
            // on pointer interaction.
            if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onEscapeKeyDown, rootContext.onClose),
        onKeyDown: $cnSS2$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            // Submenu key events bubble through portals. We only care about keys in this menu.
            const isKeyDownInside = event.currentTarget.contains(event.target);
            const isCloseKey = $213e4d2df823067d$var$SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
            if (isKeyDownInside && isCloseKey) {
                var _subContext$trigger;
                context.onOpenChange(false); // We focus manually because we prevented it in `onCloseAutoFocus`
                (_subContext$trigger = subContext.trigger) === null || _subContext$trigger === void 0 || _subContext$trigger.focus(); // prevent window from scrolling
                event.preventDefault();
            }
        })
    })))));
});
/*#__PURE__*/ Object.assign($213e4d2df823067d$export$e7142ab31822bde6, {
    displayName: $213e4d2df823067d$var$SUB_CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $213e4d2df823067d$var$getOpenState(open) {
    return open ? 'open' : 'closed';
}
function $213e4d2df823067d$var$isIndeterminate(checked) {
    return checked === 'indeterminate';
}
function $213e4d2df823067d$var$getCheckedState(checked) {
    return $213e4d2df823067d$var$isIndeterminate(checked) ? 'indeterminate' : checked ? 'checked' : 'unchecked';
}
function $213e4d2df823067d$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $213e4d2df823067d$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
/**
 * This is the "meat" of the typeahead matching logic. It takes in all the values,
 * the search and the current match, and returns the next match (or `undefined`).
 *
 * We normalize the search because if a user has repeatedly pressed a character,
 * we want the exact same behavior as if we only had that one character
 * (ie. cycle through options starting with that character)
 *
 * We also reorder the values by wrapping the array around the current match.
 * This is so we always look forward from the current match, and picking the first
 * match will always be the correct one.
 *
 * Finally, if the normalized search is exactly one character, we exclude the
 * current match from the values because otherwise it would be the first to match always
 * and focus would never move. This is as opposed to the regular case, where we
 * don't want focus to move if the current match still matches.
 */ function $213e4d2df823067d$var$getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]
    );
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = $213e4d2df823067d$var$wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v)=>v !== currentMatch
    );
    const nextMatch = wrappedValues.find((value)=>value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
    );
    return nextMatch !== currentMatch ? nextMatch : undefined;
}
// Determine if a point is inside of a polygon.
// Based on https://github.com/substack/point-in-polygon
function $213e4d2df823067d$var$isPointInPolygon(point, polygon) {
    const { x: x , y: y  } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].x;
        const yi = polygon[i].y;
        const xj = polygon[j].x;
        const yj = polygon[j].y; // prettier-ignore
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function $213e4d2df823067d$var$isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
        x: event.clientX,
        y: event.clientY
    };
    return $213e4d2df823067d$var$isPointInPolygon(cursorPos, area);
}
function $213e4d2df823067d$var$whenMouse(handler) {
    return (event)=>event.pointerType === 'mouse' ? handler(event) : undefined
    ;
}
const $213e4d2df823067d$export$be92b6f5f03c0fe9 = $213e4d2df823067d$export$d9b273488cd8ce6f;
const $213e4d2df823067d$export$b688253958b8dfe7 = $213e4d2df823067d$export$9fa5ebd18bee4d43;
const $213e4d2df823067d$export$602eac185826482c = $213e4d2df823067d$export$793392f970497feb;
const $213e4d2df823067d$export$7c6e2c02157bb7d2 = $213e4d2df823067d$export$479f0f2f71193efe;
const $213e4d2df823067d$export$eb2fcfdbd7ba97d4 = $213e4d2df823067d$export$22a631d1f72787bb;
const $213e4d2df823067d$export$b04be29aa201d4f5 = $213e4d2df823067d$export$dd37bec0e8a99143;
const $213e4d2df823067d$export$6d08773d2e66f8f2 = $213e4d2df823067d$export$2ce376c2cc3355c8;
const $213e4d2df823067d$export$16ce288f89fa631c = $213e4d2df823067d$export$f6f243521332502d;
const $213e4d2df823067d$export$a98f0dcb43a68a25 = $213e4d2df823067d$export$ea2200c9eee416b3;
const $213e4d2df823067d$export$371ab307eab489c0 = $213e4d2df823067d$export$69bd225e9817f6d0;
const $213e4d2df823067d$export$c3468e2714d175fa = $213e4d2df823067d$export$a2593e23056970a3;
const $213e4d2df823067d$export$1ff3c3f08ae963c0 = $213e4d2df823067d$export$1cec7dcdd713e220;
const $213e4d2df823067d$export$21b07c8f274aebd5 = $213e4d2df823067d$export$bcdda4773debf5fa;
const $213e4d2df823067d$export$d7a01e11500dfb6f = $213e4d2df823067d$export$71bdb9d1e2909932;
const $213e4d2df823067d$export$2ea8a7a591ac5eac = $213e4d2df823067d$export$5fbbb3ba7297405f;
const $213e4d2df823067d$export$6d4de93b380beddf = $213e4d2df823067d$export$e7142ab31822bde6;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 33880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $50Iv9$babelruntimehelpersextends = __webpack_require__(36305);
var $50Iv9$react = __webpack_require__(18038);
var $50Iv9$floatinguireactdom = __webpack_require__(50271);
var $50Iv9$radixuireactarrow = __webpack_require__(49576);
var $50Iv9$radixuireactcomposerefs = __webpack_require__(16849);
var $50Iv9$radixuireactcontext = __webpack_require__(60708);
var $50Iv9$radixuireactprimitive = __webpack_require__(49140);
var $50Iv9$radixuireactuselayouteffect = __webpack_require__(41572);
var $50Iv9$radixuireactusesize = __webpack_require__(69285);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createPopperScope", () => $34310caa050a8d63$export$722aac194ae923);
$parcel$export(module.exports, "Popper", () => $34310caa050a8d63$export$badac9ada3a0bdf9);
$parcel$export(module.exports, "PopperAnchor", () => $34310caa050a8d63$export$ecd4e1ccab6ed6d);
$parcel$export(module.exports, "PopperContent", () => $34310caa050a8d63$export$bc4ae5855d3c4fc);
$parcel$export(module.exports, "PopperArrow", () => $34310caa050a8d63$export$79d62cd4e10a3fd0);
$parcel$export(module.exports, "Root", () => $34310caa050a8d63$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Anchor", () => $34310caa050a8d63$export$b688253958b8dfe7);
$parcel$export(module.exports, "Content", () => $34310caa050a8d63$export$7c6e2c02157bb7d2);
$parcel$export(module.exports, "Arrow", () => $34310caa050a8d63$export$21b07c8f274aebd5);
$parcel$export(module.exports, "SIDE_OPTIONS", () => $34310caa050a8d63$export$36f0086da09c4b9f);
$parcel$export(module.exports, "ALIGN_OPTIONS", () => $34310caa050a8d63$export$3671ffab7b302fc9);









const $34310caa050a8d63$export$36f0086da09c4b9f = [
    'top',
    'right',
    'bottom',
    'left'
];
const $34310caa050a8d63$export$3671ffab7b302fc9 = [
    'start',
    'center',
    'end'
];
/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$POPPER_NAME = 'Popper';
const [$34310caa050a8d63$var$createPopperContext, $34310caa050a8d63$export$722aac194ae923] = $50Iv9$radixuireactcontext.createContextScope($34310caa050a8d63$var$POPPER_NAME);
const [$34310caa050a8d63$var$PopperProvider, $34310caa050a8d63$var$usePopperContext] = $34310caa050a8d63$var$createPopperContext($34310caa050a8d63$var$POPPER_NAME);
const $34310caa050a8d63$export$badac9ada3a0bdf9 = (props)=>{
    const { __scopePopper: __scopePopper , children: children  } = props;
    const [anchor, setAnchor] = $50Iv9$react.useState(null);
    return /*#__PURE__*/ $50Iv9$react.createElement($34310caa050a8d63$var$PopperProvider, {
        scope: __scopePopper,
        anchor: anchor,
        onAnchorChange: setAnchor
    }, children);
};
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$badac9ada3a0bdf9, {
    displayName: $34310caa050a8d63$var$POPPER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperAnchor
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$ANCHOR_NAME = 'PopperAnchor';
const $34310caa050a8d63$export$ecd4e1ccab6ed6d = /*#__PURE__*/ $50Iv9$react.forwardRef((props, forwardedRef)=>{
    const { __scopePopper: __scopePopper , virtualRef: virtualRef , ...anchorProps } = props;
    const context = $34310caa050a8d63$var$usePopperContext($34310caa050a8d63$var$ANCHOR_NAME, __scopePopper);
    const ref = $50Iv9$react.useRef(null);
    const composedRefs = $50Iv9$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    $50Iv9$react.useEffect(()=>{
        // Consumer can anchor the popper to something that isn't
        // a DOM node e.g. pointer position, so we override the
        // `anchorRef` with their virtual ref in this case.
        context.onAnchorChange((virtualRef === null || virtualRef === void 0 ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($50Iv9$babelruntimehelpersextends))({}, anchorProps, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$ecd4e1ccab6ed6d, {
    displayName: $34310caa050a8d63$var$ANCHOR_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperContent
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$CONTENT_NAME = 'PopperContent';
const [$34310caa050a8d63$var$PopperContentProvider, $34310caa050a8d63$var$useContentContext] = $34310caa050a8d63$var$createPopperContext($34310caa050a8d63$var$CONTENT_NAME);
const [$34310caa050a8d63$var$PositionContextProvider, $34310caa050a8d63$var$usePositionContext] = $34310caa050a8d63$var$createPopperContext($34310caa050a8d63$var$CONTENT_NAME, {
    hasParent: false,
    positionUpdateFns: new Set()
});
const $34310caa050a8d63$export$bc4ae5855d3c4fc = /*#__PURE__*/ $50Iv9$react.forwardRef((props, forwardedRef)=>{
    var _arrowSize$width, _arrowSize$height, _middlewareData$arrow, _middlewareData$arrow2, _middlewareData$arrow3, _middlewareData$hide, _middlewareData$trans, _middlewareData$trans2;
    const { __scopePopper: __scopePopper , side: side = 'bottom' , sideOffset: sideOffset = 0 , align: align = 'center' , alignOffset: alignOffset = 0 , arrowPadding: arrowPadding = 0 , collisionBoundary: collisionBoundary = [] , collisionPadding: collisionPaddingProp = 0 , sticky: sticky = 'partial' , hideWhenDetached: hideWhenDetached = false , avoidCollisions: avoidCollisions = true , ...contentProps } = props;
    const context = $34310caa050a8d63$var$usePopperContext($34310caa050a8d63$var$CONTENT_NAME, __scopePopper);
    const [content, setContent] = $50Iv9$react.useState(null);
    const composedRefs = $50Iv9$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setContent(node)
    );
    const [arrow, setArrow] = $50Iv9$react.useState(null);
    const arrowSize = $50Iv9$radixuireactusesize.useSize(arrow);
    const arrowWidth = (_arrowSize$width = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.width) !== null && _arrowSize$width !== void 0 ? _arrowSize$width : 0;
    const arrowHeight = (_arrowSize$height = arrowSize === null || arrowSize === void 0 ? void 0 : arrowSize.height) !== null && _arrowSize$height !== void 0 ? _arrowSize$height : 0;
    const desiredPlacement = side + (align !== 'center' ? '-' + align : '');
    const collisionPadding = typeof collisionPaddingProp === 'number' ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter($34310caa050a8d63$var$isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { reference: reference , floating: floating , strategy: strategy , x: x , y: y , placement: placement , middlewareData: middlewareData , update: update  } = $50Iv9$floatinguireactdom.useFloating({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: 'fixed',
        placement: desiredPlacement,
        whileElementsMounted: $50Iv9$floatinguireactdom.autoUpdate,
        middleware: [
            $50Iv9$floatinguireactdom.offset({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions ? $50Iv9$floatinguireactdom.shift({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === 'partial' ? $50Iv9$floatinguireactdom.limitShift() : undefined,
                ...detectOverflowOptions
            }) : undefined,
            arrow ? $50Iv9$floatinguireactdom.arrow({
                element: arrow,
                padding: arrowPadding
            }) : undefined,
            avoidCollisions ? $50Iv9$floatinguireactdom.flip({
                ...detectOverflowOptions
            }) : undefined,
            $34310caa050a8d63$var$transformOrigin({
                arrowWidth: arrowWidth,
                arrowHeight: arrowHeight
            }),
            hideWhenDetached ? $50Iv9$floatinguireactdom.hide({
                strategy: 'referenceHidden'
            }) : undefined
        ].filter($34310caa050a8d63$var$isDefined)
    }); // assign the reference dynamically once `Content` has mounted so we can collocate the logic
    $50Iv9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        reference(context.anchor);
    }, [
        reference,
        context.anchor
    ]);
    const isPlaced = x !== null && y !== null;
    const [placedSide, placedAlign] = $34310caa050a8d63$var$getSideAndAlignFromPlacement(placement);
    const arrowX = (_middlewareData$arrow = middlewareData.arrow) === null || _middlewareData$arrow === void 0 ? void 0 : _middlewareData$arrow.x;
    const arrowY = (_middlewareData$arrow2 = middlewareData.arrow) === null || _middlewareData$arrow2 === void 0 ? void 0 : _middlewareData$arrow2.y;
    const cannotCenterArrow = ((_middlewareData$arrow3 = middlewareData.arrow) === null || _middlewareData$arrow3 === void 0 ? void 0 : _middlewareData$arrow3.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = $50Iv9$react.useState();
    $50Iv9$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    const { hasParent: hasParent , positionUpdateFns: positionUpdateFns  } = $34310caa050a8d63$var$usePositionContext($34310caa050a8d63$var$CONTENT_NAME, __scopePopper);
    const isRoot = !hasParent;
    $50Iv9$react.useLayoutEffect(()=>{
        if (!isRoot) {
            positionUpdateFns.add(update);
            return ()=>{
                positionUpdateFns.delete(update);
            };
        }
    }, [
        isRoot,
        positionUpdateFns,
        update
    ]); // when nested contents are rendered in portals, they are appended out of order causing
    // children to be positioned incorrectly if initially open.
    // we need to re-compute the positioning once the parent has finally been placed.
    // https://github.com/floating-ui/floating-ui/issues/1531
    $50Iv9$react.useLayoutEffect(()=>{
        if (isRoot && isPlaced) Array.from(positionUpdateFns).reverse().forEach((fn)=>requestAnimationFrame(fn)
        );
    }, [
        isRoot,
        isPlaced,
        positionUpdateFns
    ]);
    const commonProps = {
        'data-side': placedSide,
        'data-align': placedAlign,
        ...contentProps,
        ref: composedRefs,
        style: {
            ...contentProps.style,
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: !isPlaced ? 'none' : undefined,
            // hide the content if using the hide middleware and should be hidden
            opacity: (_middlewareData$hide = middlewareData.hide) !== null && _middlewareData$hide !== void 0 && _middlewareData$hide.referenceHidden ? 0 : undefined
        }
    };
    return /*#__PURE__*/ $50Iv9$react.createElement("div", {
        ref: floating,
        "data-radix-popper-content-wrapper": "",
        style: {
            position: strategy,
            left: 0,
            top: 0,
            transform: isPlaced ? `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)` : 'translate3d(0, -200%, 0)',
            // keep off the page when measuring
            minWidth: 'max-content',
            zIndex: contentZIndex,
            ['--radix-popper-transform-origin']: [
                (_middlewareData$trans = middlewareData.transformOrigin) === null || _middlewareData$trans === void 0 ? void 0 : _middlewareData$trans.x,
                (_middlewareData$trans2 = middlewareData.transformOrigin) === null || _middlewareData$trans2 === void 0 ? void 0 : _middlewareData$trans2.y
            ].join(' ')
        }
    }, /*#__PURE__*/ $50Iv9$react.createElement($34310caa050a8d63$var$PopperContentProvider, {
        scope: __scopePopper,
        placedSide: placedSide,
        onArrowChange: setArrow,
        arrowX: arrowX,
        arrowY: arrowY,
        shouldHideArrow: cannotCenterArrow
    }, isRoot ? /*#__PURE__*/ $50Iv9$react.createElement($34310caa050a8d63$var$PositionContextProvider, {
        scope: __scopePopper,
        hasParent: true,
        positionUpdateFns: positionUpdateFns
    }, /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactprimitive.Primitive.div, commonProps)) : /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactprimitive.Primitive.div, commonProps)));
});
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$bc4ae5855d3c4fc, {
    displayName: $34310caa050a8d63$var$CONTENT_NAME
});
/* -------------------------------------------------------------------------------------------------
 * PopperArrow
 * -----------------------------------------------------------------------------------------------*/ const $34310caa050a8d63$var$ARROW_NAME = 'PopperArrow';
const $34310caa050a8d63$var$OPPOSITE_SIDE = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
};
const $34310caa050a8d63$export$79d62cd4e10a3fd0 = /*#__PURE__*/ $50Iv9$react.forwardRef(function $34310caa050a8d63$export$79d62cd4e10a3fd0(props, forwardedRef) {
    const { __scopePopper: __scopePopper , ...arrowProps } = props;
    const contentContext = $34310caa050a8d63$var$useContentContext($34310caa050a8d63$var$ARROW_NAME, __scopePopper);
    const baseSide = $34310caa050a8d63$var$OPPOSITE_SIDE[contentContext.placedSide];
    return(/*#__PURE__*/ // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    $50Iv9$react.createElement("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: 'absolute',
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0'
            }[contentContext.placedSide],
            transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: `rotate(180deg)`,
                left: 'translateY(50%) rotate(-90deg) translateX(50%)'
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? 'hidden' : undefined
        }
    }, /*#__PURE__*/ $50Iv9$react.createElement($50Iv9$radixuireactarrow.Root, ($parcel$interopDefault($50Iv9$babelruntimehelpersextends))({}, arrowProps, {
        ref: forwardedRef,
        style: {
            ...arrowProps.style,
            // ensures the element can be measured correctly (mostly for if SVG)
            display: 'block'
        }
    }))));
});
/*#__PURE__*/ Object.assign($34310caa050a8d63$export$79d62cd4e10a3fd0, {
    displayName: $34310caa050a8d63$var$ARROW_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $34310caa050a8d63$var$isDefined(value) {
    return value !== undefined;
}
function $34310caa050a8d63$var$isNotNull(value) {
    return value !== null;
}
const $34310caa050a8d63$var$transformOrigin = (options)=>({
        name: 'transformOrigin',
        options: options,
        fn (data) {
            var _middlewareData$arrow4, _middlewareData$arrow5, _middlewareData$arrow6, _middlewareData$arrow7, _middlewareData$arrow8;
            const { placement: placement , rects: rects , middlewareData: middlewareData  } = data;
            const cannotCenterArrow = ((_middlewareData$arrow4 = middlewareData.arrow) === null || _middlewareData$arrow4 === void 0 ? void 0 : _middlewareData$arrow4.centerOffset) !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = $34310caa050a8d63$var$getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: '0%',
                center: '50%',
                end: '100%'
            }[placedAlign];
            const arrowXCenter = ((_middlewareData$arrow5 = (_middlewareData$arrow6 = middlewareData.arrow) === null || _middlewareData$arrow6 === void 0 ? void 0 : _middlewareData$arrow6.x) !== null && _middlewareData$arrow5 !== void 0 ? _middlewareData$arrow5 : 0) + arrowWidth / 2;
            const arrowYCenter = ((_middlewareData$arrow7 = (_middlewareData$arrow8 = middlewareData.arrow) === null || _middlewareData$arrow8 === void 0 ? void 0 : _middlewareData$arrow8.y) !== null && _middlewareData$arrow7 !== void 0 ? _middlewareData$arrow7 : 0) + arrowHeight / 2;
            let x = '';
            let y = '';
            if (placedSide === 'bottom') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === 'top') {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === 'right') {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === 'left') {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x: x,
                    y: y
                }
            };
        }
    })
;
function $34310caa050a8d63$var$getSideAndAlignFromPlacement(placement) {
    const [side, align = 'center'] = placement.split('-');
    return [
        side,
        align
    ];
}
const $34310caa050a8d63$export$be92b6f5f03c0fe9 = $34310caa050a8d63$export$badac9ada3a0bdf9;
const $34310caa050a8d63$export$b688253958b8dfe7 = $34310caa050a8d63$export$ecd4e1ccab6ed6d;
const $34310caa050a8d63$export$7c6e2c02157bb7d2 = $34310caa050a8d63$export$bc4ae5855d3c4fc;
const $34310caa050a8d63$export$21b07c8f274aebd5 = $34310caa050a8d63$export$79d62cd4e10a3fd0;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 93509:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $9QJ9Y$babelruntimehelpersextends = __webpack_require__(36305);
var $9QJ9Y$react = __webpack_require__(18038);
var $9QJ9Y$radixuiprimitive = __webpack_require__(74217);
var $9QJ9Y$radixuireactcollection = __webpack_require__(13797);
var $9QJ9Y$radixuireactcomposerefs = __webpack_require__(16849);
var $9QJ9Y$radixuireactcontext = __webpack_require__(60708);
var $9QJ9Y$radixuireactid = __webpack_require__(37706);
var $9QJ9Y$radixuireactprimitive = __webpack_require__(49140);
var $9QJ9Y$radixuireactusecallbackref = __webpack_require__(86518);
var $9QJ9Y$radixuireactusecontrollablestate = __webpack_require__(69808);
var $9QJ9Y$radixuireactdirection = __webpack_require__(48207);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createRovingFocusGroupScope", () => $0063afae63b3fa70$export$c7109489551a4f4);
$parcel$export(module.exports, "RovingFocusGroup", () => $0063afae63b3fa70$export$8699f7c8af148338);
$parcel$export(module.exports, "RovingFocusGroupItem", () => $0063afae63b3fa70$export$ab9df7c53fe8454);
$parcel$export(module.exports, "Root", () => $0063afae63b3fa70$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Item", () => $0063afae63b3fa70$export$6d08773d2e66f8f2);











const $0063afae63b3fa70$var$ENTRY_FOCUS = 'rovingFocusGroup.onEntryFocus';
const $0063afae63b3fa70$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroup
 * -----------------------------------------------------------------------------------------------*/ const $0063afae63b3fa70$var$GROUP_NAME = 'RovingFocusGroup';
const [$0063afae63b3fa70$var$Collection, $0063afae63b3fa70$var$useCollection, $0063afae63b3fa70$var$createCollectionScope] = $9QJ9Y$radixuireactcollection.createCollection($0063afae63b3fa70$var$GROUP_NAME);
const [$0063afae63b3fa70$var$createRovingFocusGroupContext, $0063afae63b3fa70$export$c7109489551a4f4] = $9QJ9Y$radixuireactcontext.createContextScope($0063afae63b3fa70$var$GROUP_NAME, [
    $0063afae63b3fa70$var$createCollectionScope
]);
const [$0063afae63b3fa70$var$RovingFocusProvider, $0063afae63b3fa70$var$useRovingFocusContext] = $0063afae63b3fa70$var$createRovingFocusGroupContext($0063afae63b3fa70$var$GROUP_NAME);
const $0063afae63b3fa70$export$8699f7c8af148338 = /*#__PURE__*/ $9QJ9Y$react.forwardRef((props, forwardedRef)=>{
    return /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$Collection.Provider, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$Collection.Slot, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$RovingFocusGroupImpl, ($parcel$interopDefault($9QJ9Y$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef
    }))));
});
/*#__PURE__*/ Object.assign($0063afae63b3fa70$export$8699f7c8af148338, {
    displayName: $0063afae63b3fa70$var$GROUP_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $0063afae63b3fa70$var$RovingFocusGroupImpl = /*#__PURE__*/ $9QJ9Y$react.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , orientation: orientation , loop: loop = false , dir: dir , currentTabStopId: currentTabStopIdProp , defaultCurrentTabStopId: defaultCurrentTabStopId , onCurrentTabStopIdChange: onCurrentTabStopIdChange , onEntryFocus: onEntryFocus , ...groupProps } = props;
    const ref = $9QJ9Y$react.useRef(null);
    const composedRefs = $9QJ9Y$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const direction = $9QJ9Y$radixuireactdirection.useDirection(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = $9QJ9Y$radixuireactusecontrollablestate.useControllableState({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId,
        onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = $9QJ9Y$react.useState(false);
    const handleEntryFocus = $9QJ9Y$radixuireactusecallbackref.useCallbackRef(onEntryFocus);
    const getItems = $0063afae63b3fa70$var$useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = $9QJ9Y$react.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = $9QJ9Y$react.useState(0);
    $9QJ9Y$react.useEffect(()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener($0063afae63b3fa70$var$ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener($0063afae63b3fa70$var$ENTRY_FOCUS, handleEntryFocus)
            ;
        }
    }, [
        handleEntryFocus
    ]);
    return /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation: orientation,
        dir: direction,
        loop: loop,
        currentTabStopId: currentTabStopId,
        onItemFocus: $9QJ9Y$react.useCallback((tabStopId)=>setCurrentTabStopId(tabStopId)
        , [
            setCurrentTabStopId
        ]),
        onItemShiftTab: $9QJ9Y$react.useCallback(()=>setIsTabbingBackOut(true)
        , []),
        onFocusableItemAdd: $9QJ9Y$react.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount + 1
            )
        , []),
        onFocusableItemRemove: $9QJ9Y$react.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount - 1
            )
        , [])
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($9QJ9Y$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($9QJ9Y$babelruntimehelpersextends))({
        tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
        "data-orientation": orientation
    }, groupProps, {
        ref: composedRefs,
        style: {
            outline: 'none',
            ...props.style
        },
        onMouseDown: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onMouseDown, ()=>{
            isClickFocusRef.current = true;
        }),
        onFocus: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onFocus, (event)=>{
            // We normally wouldn't need this check, because we already check
            // that the focus is on the current target and not bubbling to it.
            // We do this because Safari doesn't focus buttons when clicked, and
            // instead, the wrapper will get focused and not through a bubbling event.
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent($0063afae63b3fa70$var$ENTRY_FOCUS, $0063afae63b3fa70$var$EVENT_OPTIONS);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                    const items = getItems().filter((item)=>item.focusable
                    );
                    const activeItem = items.find((item)=>item.active
                    );
                    const currentItem = items.find((item)=>item.id === currentTabStopId
                    );
                    const candidateItems = [
                        activeItem,
                        currentItem,
                        ...items
                    ].filter(Boolean);
                    const candidateNodes = candidateItems.map((item)=>item.ref.current
                    );
                    $0063afae63b3fa70$var$focusFirst(candidateNodes);
                }
            }
            isClickFocusRef.current = false;
        }),
        onBlur: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onBlur, ()=>setIsTabbingBackOut(false)
        )
    })));
});
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroupItem
 * -----------------------------------------------------------------------------------------------*/ const $0063afae63b3fa70$var$ITEM_NAME = 'RovingFocusGroupItem';
const $0063afae63b3fa70$export$ab9df7c53fe8454 = /*#__PURE__*/ $9QJ9Y$react.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , focusable: focusable = true , active: active = false , ...itemProps } = props;
    const id = $9QJ9Y$radixuireactid.useId();
    const context = $0063afae63b3fa70$var$useRovingFocusContext($0063afae63b3fa70$var$ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = $0063afae63b3fa70$var$useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd: onFocusableItemAdd , onFocusableItemRemove: onFocusableItemRemove  } = context;
    $9QJ9Y$react.useEffect(()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove()
            ;
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /*#__PURE__*/ $9QJ9Y$react.createElement($0063afae63b3fa70$var$Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id: id,
        focusable: focusable,
        active: active
    }, /*#__PURE__*/ $9QJ9Y$react.createElement($9QJ9Y$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($9QJ9Y$babelruntimehelpersextends))({
        tabIndex: isCurrentTabStop ? 0 : -1,
        "data-orientation": context.orientation
    }, itemProps, {
        ref: forwardedRef,
        onMouseDown: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onMouseDown, (event)=>{
            // We prevent focusing non-focusable items on `mousedown`.
            // Even though the item has tabIndex={-1}, that only means take it out of the tab order.
            if (!focusable) event.preventDefault(); // Safari doesn't focus a button when clicked so we run our logic on mousedown also
            else context.onItemFocus(id);
        }),
        onFocus: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onFocus, ()=>context.onItemFocus(id)
        ),
        onKeyDown: $9QJ9Y$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            if (event.key === 'Tab' && event.shiftKey) {
                context.onItemShiftTab();
                return;
            }
            if (event.target !== event.currentTarget) return;
            const focusIntent = $0063afae63b3fa70$var$getFocusIntent(event, context.orientation, context.dir);
            if (focusIntent !== undefined) {
                event.preventDefault();
                const items = getItems().filter((item)=>item.focusable
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if (focusIntent === 'last') candidateNodes.reverse();
                else if (focusIntent === 'prev' || focusIntent === 'next') {
                    if (focusIntent === 'prev') candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? $0063afae63b3fa70$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>$0063afae63b3fa70$var$focusFirst(candidateNodes)
                );
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($0063afae63b3fa70$export$ab9df7c53fe8454, {
    displayName: $0063afae63b3fa70$var$ITEM_NAME
});
/* -----------------------------------------------------------------------------------------------*/ // prettier-ignore
const $0063afae63b3fa70$var$MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last'
};
function $0063afae63b3fa70$var$getDirectionAwareKey(key, dir) {
    if (dir !== 'rtl') return key;
    return key === 'ArrowLeft' ? 'ArrowRight' : key === 'ArrowRight' ? 'ArrowLeft' : key;
}
function $0063afae63b3fa70$var$getFocusIntent(event, orientation, dir) {
    const key = $0063afae63b3fa70$var$getDirectionAwareKey(event.key, dir);
    if (orientation === 'vertical' && [
        'ArrowLeft',
        'ArrowRight'
    ].includes(key)) return undefined;
    if (orientation === 'horizontal' && [
        'ArrowUp',
        'ArrowDown'
    ].includes(key)) return undefined;
    return $0063afae63b3fa70$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $0063afae63b3fa70$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $0063afae63b3fa70$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $0063afae63b3fa70$export$be92b6f5f03c0fe9 = $0063afae63b3fa70$export$8699f7c8af148338;
const $0063afae63b3fa70$export$6d08773d2e66f8f2 = $0063afae63b3fa70$export$ab9df7c53fe8454;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 69285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ksDzM$react = __webpack_require__(18038);
var $ksDzM$radixuireactuselayouteffect = __webpack_require__(41572);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useSize", () => $d2c1d285af17635b$export$1ab7ae714698c4b8);


function $d2c1d285af17635b$export$1ab7ae714698c4b8(element) {
    const [size, setSize] = $ksDzM$react.useState(undefined);
    $ksDzM$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (element) {
            // provide size as early as possible
            setSize({
                width: element.offsetWidth,
                height: element.offsetHeight
            });
            const resizeObserver = new ResizeObserver((entries)=>{
                if (!Array.isArray(entries)) return;
                 // Since we only observe the one element, we don't need to loop over the
                // array
                if (!entries.length) return;
                const entry = entries[0];
                let width;
                let height;
                if ('borderBoxSize' in entry) {
                    const borderSizeEntry = entry['borderBoxSize']; // iron out differences between browsers
                    const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                    width = borderSize['inlineSize'];
                    height = borderSize['blockSize'];
                } else {
                    // for browsers that don't support `borderBoxSize`
                    // we calculate it ourselves to get the correct border box.
                    width = element.offsetWidth;
                    height = element.offsetHeight;
                }
                setSize({
                    width: width,
                    height: height
                });
            });
            resizeObserver.observe(element, {
                box: 'border-box'
            });
            return ()=>resizeObserver.unobserve(element)
            ;
        } else // We only want to reset to `undefined` when the element becomes `null`,
        // not if it changes to another element.
        setSize(undefined);
    }, [
        element
    ]);
    return size;
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 48728:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
    return targets.map(function (target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function (x) { return Boolean(x); });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                var attr = node.getAttribute(controlAttribute);
                var alreadyHidden = attr !== null && attr !== 'false';
                var counterValue = (counterMap.get(node) || 0) + 1;
                var markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenNodes.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledNodes.set(node, true);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, 'true');
                }
                if (!alreadyHidden) {
                    node.setAttribute(controlAttribute, 'true');
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-aria-hidden'; }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
exports.hideOthers = hideOthers;
/**
 * Marks everything except given node(or nodes) as inert
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var inertOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-inert-ed'; }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function () { return null; };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
exports.inertOthers = inertOthers;
/**
 * @returns if current browser supports inert
 */
var supportsInert = function () {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
exports.supportsInert = supportsInert;
/**
 * Automatic function to "suppress" DOM elements - _hide_ or _inert_ in the best possible way
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @return {Undo} undo command
 */
var suppressOthers = function (originalTarget, parentNode, markerName) {
    if (markerName === void 0) { markerName = 'data-suppressed'; }
    return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
};
exports.suppressOthers = suppressOthers;


/***/ }),

/***/ 3868:
/***/ ((module) => {

// Only Node.JS has a process variable that is of [[Class]] process
module.exports.isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';


/***/ }),

/***/ 66752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var currentNonce;
exports.setNonce = function (nonce) {
    currentNonce = nonce;
};
exports.getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ 20066:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScrollBar = void 0;
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_style_singleton_1 = __webpack_require__(52249);
var constants_1 = __webpack_require__(48177);
var utils_1 = __webpack_require__(40717);
var Style = (0, react_style_singleton_1.styleSingleton)();
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (props) {
    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? 'margin' : _a;
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = React.useMemo(function () { return (0, utils_1.getGapWidth)(gapMode); }, [gapMode]);
    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};
exports.RemoveScrollBar = RemoveScrollBar;


/***/ }),

/***/ 48177:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
exports.zeroRightClassName = 'right-scroll-bar-position';
exports.fullWidthClassName = 'width-before-scroll-bar';
exports.noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
exports.removedBarSizeVariable = '--removed-body-scroll-bar-size';


/***/ }),

/***/ 73800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
var component_1 = __webpack_require__(20066);
Object.defineProperty(exports, "RemoveScrollBar", ({ enumerable: true, get: function () { return component_1.RemoveScrollBar; } }));
var constants_1 = __webpack_require__(48177);
Object.defineProperty(exports, "zeroRightClassName", ({ enumerable: true, get: function () { return constants_1.zeroRightClassName; } }));
Object.defineProperty(exports, "fullWidthClassName", ({ enumerable: true, get: function () { return constants_1.fullWidthClassName; } }));
Object.defineProperty(exports, "noScrollbarsClassName", ({ enumerable: true, get: function () { return constants_1.noScrollbarsClassName; } }));
Object.defineProperty(exports, "removedBarSizeVariable", ({ enumerable: true, get: function () { return constants_1.removedBarSizeVariable; } }));
var utils_1 = __webpack_require__(40717);
Object.defineProperty(exports, "getGapWidth", ({ enumerable: true, get: function () { return utils_1.getGapWidth; } }));


/***/ }),

/***/ 40717:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGapWidth = exports.zeroGap = void 0;
exports.zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return exports.zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};
exports.getGapWidth = getGapWidth;


/***/ }),

/***/ 64715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var UI_1 = __webpack_require__(57990);
var sidecar_1 = tslib_1.__importDefault(__webpack_require__(86644));
var ReactRemoveScroll = React.forwardRef(function (props, ref) { return (React.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref: ref, sideCar: sidecar_1.default }))); });
ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
exports["default"] = ReactRemoveScroll;


/***/ }),

/***/ 27540:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_remove_scroll_bar_1 = __webpack_require__(73800);
var react_style_singleton_1 = __webpack_require__(52249);
var aggresiveCapture_1 = __webpack_require__(51074);
var handleScroll_1 = __webpack_require__(1344);
var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
exports.getTouchXY = getTouchXY;
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
exports.getDeltaXY = getDeltaXY;
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React.useRef([]);
    var touchStartRef = React.useRef([0, 0]);
    var activeAxis = React.useRef();
    var id = React.useState(idCounter++)[0];
    var Style = React.useState(function () { return (0, react_style_singleton_1.styleSingleton)(); })[0];
    var lastProps = React.useRef(props);
    React.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = React.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React.useCallback(function (event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React.createElement(React.Fragment, null,
        inert ? React.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null));
}
exports.RemoveScrollSideCar = RemoveScrollSideCar;


/***/ }),

/***/ 57990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScroll = void 0;
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var constants_1 = __webpack_require__(48177);
var use_callback_ref_1 = __webpack_require__(79537);
var medium_1 = __webpack_require__(4304);
var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React.forwardRef(function (props, parentRef) {
    var ref = React.useRef(null);
    var _a = React.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
    var SideCar = sideCar;
    var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
    var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
    return (React.createElement(React.Fragment, null,
        enabled && (React.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref })),
        forwardProps ? (React.cloneElement(React.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef }))) : (React.createElement(Container, tslib_1.__assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
exports.RemoveScroll = RemoveScroll;
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: constants_1.fullWidthClassName,
    zeroRight: constants_1.zeroRightClassName,
};


/***/ }),

/***/ 51074:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nonPassive = void 0;
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
exports.nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ 1344:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleScroll = exports.locationCouldBeScrolled = void 0;
var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== document.body);
    return false;
};
exports.locationCouldBeScrolled = locationCouldBeScrolled;
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        target = target.parentNode;
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    if (isDeltaPositive && ((noOverscroll && availableScroll === 0) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && availableScrollTop === 0) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
exports.handleScroll = handleScroll;


/***/ }),

/***/ 61426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScroll = void 0;
var tslib_1 = __webpack_require__(90894);
var Combination_1 = tslib_1.__importDefault(__webpack_require__(64715));
exports.RemoveScroll = Combination_1.default;


/***/ }),

/***/ 4304:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effectCar = void 0;
var use_sidecar_1 = __webpack_require__(1173);
exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();


/***/ }),

/***/ 86644:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var use_sidecar_1 = __webpack_require__(1173);
var SideEffect_1 = __webpack_require__(27540);
var medium_1 = __webpack_require__(4304);
exports["default"] = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);


/***/ }),

/***/ 61224:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleSingleton = void 0;
var hook_1 = __webpack_require__(27446);
/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = (0, hook_1.styleHookSingleton)();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
exports.styleSingleton = styleSingleton;


/***/ }),

/***/ 27446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleHookSingleton = void 0;
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var singleton_1 = __webpack_require__(9286);
/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = (0, singleton_1.stylesheetSingleton)();
    return function (styles, isDynamic) {
        React.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};
exports.styleHookSingleton = styleHookSingleton;


/***/ }),

/***/ 52249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
var component_1 = __webpack_require__(61224);
Object.defineProperty(exports, "styleSingleton", ({ enumerable: true, get: function () { return component_1.styleSingleton; } }));
var singleton_1 = __webpack_require__(9286);
Object.defineProperty(exports, "stylesheetSingleton", ({ enumerable: true, get: function () { return singleton_1.stylesheetSingleton; } }));
var hook_1 = __webpack_require__(27446);
Object.defineProperty(exports, "styleHookSingleton", ({ enumerable: true, get: function () { return hook_1.styleHookSingleton; } }));


/***/ }),

/***/ 9286:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stylesheetSingleton = void 0;
var get_nonce_1 = __webpack_require__(66752);
function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, get_nonce_1.getNonce)();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};
exports.stylesheetSingleton = stylesheetSingleton;


/***/ }),

/***/ 90894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ 61315:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assignRef = void 0;
/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}
exports.assignRef = assignRef;


/***/ }),

/***/ 81659:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCallbackRef = void 0;
/**
 * creates a Ref object with on change callback
 * @param callback
 * @returns {RefObject}
 *
 * @see {@link useCallbackRef}
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        },
    };
}
exports.createCallbackRef = createCallbackRef;


/***/ }),

/***/ 79537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
var assignRef_1 = __webpack_require__(61315);
Object.defineProperty(exports, "assignRef", ({ enumerable: true, get: function () { return assignRef_1.assignRef; } }));
// callback ref
var useRef_1 = __webpack_require__(10002);
Object.defineProperty(exports, "useCallbackRef", ({ enumerable: true, get: function () { return useRef_1.useCallbackRef; } }));
var createRef_1 = __webpack_require__(81659);
Object.defineProperty(exports, "createCallbackRef", ({ enumerable: true, get: function () { return createRef_1.createCallbackRef; } }));
// merge ref
var mergeRef_1 = __webpack_require__(14550);
Object.defineProperty(exports, "mergeRefs", ({ enumerable: true, get: function () { return mergeRef_1.mergeRefs; } }));
var useMergeRef_1 = __webpack_require__(76098);
Object.defineProperty(exports, "useMergeRefs", ({ enumerable: true, get: function () { return useMergeRef_1.useMergeRefs; } }));
// transform ref
var useTransformRef_1 = __webpack_require__(75779);
Object.defineProperty(exports, "useTransformRef", ({ enumerable: true, get: function () { return useTransformRef_1.useTransformRef; } }));
var transformRef_1 = __webpack_require__(3543);
Object.defineProperty(exports, "transformRef", ({ enumerable: true, get: function () { return transformRef_1.transformRef; } }));
// refToCallback
var refToCallback_1 = __webpack_require__(61837);
Object.defineProperty(exports, "refToCallback", ({ enumerable: true, get: function () { return refToCallback_1.refToCallback; } }));
Object.defineProperty(exports, "useRefToCallback", ({ enumerable: true, get: function () { return refToCallback_1.useRefToCallback; } }));


/***/ }),

/***/ 14550:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeRefs = void 0;
var assignRef_1 = __webpack_require__(61315);
var createRef_1 = __webpack_require__(81659);
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link useMergeRefs} to be used in ReactComponents
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function mergeRefs(refs) {
    return (0, createRef_1.createCallbackRef)(function (newValue) { return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); }); });
}
exports.mergeRefs = mergeRefs;


/***/ }),

/***/ 61837:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRefToCallback = exports.refToCallback = void 0;
/**
 * Unmemoized version of {@link useRefToCallback}
 * @see {@link useRefToCallback}
 * @param ref
 */
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
exports.refToCallback = refToCallback;
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    var storedRef = weakMem.get(usedRef);
    if (storedRef) {
        return storedRef;
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
/**
 * Transforms a given `ref` into `callback`.
 *
 * To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}
 *
 * @param {ReactRef} ref
 * @returns {Function}
 *
 * @see https://github.com/theKashey/use-callback-ref#reftocallback
 *
 * @example
 * const ref = useRef(0);
 * const setRef = useRefToCallback(ref);
 * 👉 setRef(10);
 * ✅ ref.current === 10
 */
function useRefToCallback(ref) {
    return weakMemoize(ref);
}
exports.useRefToCallback = useRefToCallback;


/***/ }),

/***/ 3543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformRef = void 0;
var assignRef_1 = __webpack_require__(61315);
var createRef_1 = __webpack_require__(81659);
/**
 * Transforms one ref to another
 * @example
 * ```tsx
 * const ResizableWithRef = forwardRef((props, ref) =>
 *   <Resizable {...props} ref={transformRef(ref, i => i ? i.resizable : null)}/>
 * );
 * ```
 */
function transformRef(ref, transformer) {
    return (0, createRef_1.createCallbackRef)(function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });
}
exports.transformRef = transformRef;


/***/ }),

/***/ 76098:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMergeRefs = void 0;
var assignRef_1 = __webpack_require__(61315);
var useRef_1 = __webpack_require__(10002);
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return (0, useRef_1.useCallbackRef)(defaultValue || null, function (newValue) { return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); }); });
}
exports.useMergeRefs = useMergeRefs;


/***/ }),

/***/ 10002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCallbackRef = void 0;
var react_1 = __webpack_require__(18038);
/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = (0, react_1.useState)(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
exports.useCallbackRef = useCallbackRef;


/***/ }),

/***/ 75779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTransformRef = void 0;
var assignRef_1 = __webpack_require__(61315);
var useRef_1 = __webpack_require__(10002);
/**
 * Create a _lense_ on Ref, making it possible to transform ref value
 * @param {ReactRef} ref
 * @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.
 * @returns {RefObject}
 *
 * @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle
 * @example
 *
 * const ResizableWithRef = forwardRef((props, ref) =>
 *  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>
 * );
 */
function useTransformRef(ref, transformer) {
    return (0, useRef_1.useCallbackRef)(null, function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });
}
exports.useTransformRef = useTransformRef;


/***/ }),

/***/ 53835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setConfig = exports.config = void 0;
exports.config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(exports.config, conf);
};
exports.setConfig = setConfig;


/***/ }),

/***/ 33816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.env = void 0;
var detect_node_es_1 = __webpack_require__(3868);
exports.env = {
    isNode: detect_node_es_1.isNode,
    forceCache: false,
};


/***/ }),

/***/ 7106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exportSidecar = void 0;
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return React.createElement(Target, tslib_1.__assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
exports.exportSidecar = exportSidecar;


/***/ }),

/***/ 66697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sidecar = void 0;
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var hook_1 = __webpack_require__(61878);
// eslint-disable-next-line @typescript-eslint/ban-types
function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        // @ts-expect-error type shenanigans
        return Car ? React.createElement(Car, tslib_1.__assign({}, props)) : null;
    };
}
exports.sidecar = sidecar;


/***/ }),

/***/ 61878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSidecar = void 0;
var react_1 = __webpack_require__(18038);
var env_1 = __webpack_require__(33816);
var cache = new WeakMap();
var NO_OPTIONS = {};
function useSidecar(importer, effect) {
    var options = (effect && effect.options) || NO_OPTIONS;
    if (env_1.env.isNode && !options.ssr) {
        return [null, null];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useRealSidecar(importer, effect);
}
exports.useSidecar = useSidecar;
function useRealSidecar(importer, effect) {
    var options = (effect && effect.options) || NO_OPTIONS;
    var couldUseCache = env_1.env.forceCache || (env_1.env.isNode && !!options.ssr) || !options.async;
    var _a = (0, react_1.useState)(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
    (0, react_1.useEffect)(function () {
        if (!Car) {
            importer().then(function (car) {
                var resolved = effect ? effect.read() : car.default || car;
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}


/***/ }),

/***/ 1173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
var hoc_1 = __webpack_require__(66697);
Object.defineProperty(exports, "sidecar", ({ enumerable: true, get: function () { return hoc_1.sidecar; } }));
var hook_1 = __webpack_require__(61878);
Object.defineProperty(exports, "useSidecar", ({ enumerable: true, get: function () { return hook_1.useSidecar; } }));
var config_1 = __webpack_require__(53835);
Object.defineProperty(exports, "setConfig", ({ enumerable: true, get: function () { return config_1.setConfig; } }));
var medium_1 = __webpack_require__(17921);
Object.defineProperty(exports, "createMedium", ({ enumerable: true, get: function () { return medium_1.createMedium; } }));
Object.defineProperty(exports, "createSidecarMedium", ({ enumerable: true, get: function () { return medium_1.createSidecarMedium; } }));
var renderProp_1 = __webpack_require__(74343);
Object.defineProperty(exports, "renderCar", ({ enumerable: true, get: function () { return renderProp_1.renderCar; } }));
var exports_1 = __webpack_require__(7106);
Object.defineProperty(exports, "exportSidecar", ({ enumerable: true, get: function () { return exports_1.exportSidecar; } }));


/***/ }),

/***/ 17921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSidecarMedium = exports.createMedium = void 0;
var tslib_1 = __webpack_require__(90894);
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
exports.createMedium = createMedium;
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
    return medium;
}
exports.createSidecarMedium = createSidecarMedium;


/***/ }),

/***/ 74343:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderCar = void 0;
var tslib_1 = __webpack_require__(90894);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_1 = __webpack_require__(18038);
function renderCar(WrappedComponent, defaults) {
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (0, react_1.useLayoutEffect)(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        // @ts-ignore
        return React.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
    }
    var Children = React.memo(function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = React.useRef(defaults(props));
        var ref = React.useRef(function (state) { return (defaultState.current = state); });
        return (React.createElement(React.Fragment, null,
            React.createElement(State, { stateRef: ref, props: props }),
            React.createElement(Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}
exports.renderCar = renderCar;


/***/ })

};
;