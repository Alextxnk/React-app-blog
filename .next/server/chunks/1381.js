exports.id = 1381;
exports.ids = [1381];
exports.modules = {

/***/ 36305:
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

/***/ 74217:
/***/ ((module) => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "composeEventHandlers", () => $1a6a90a521dcd173$export$b9ecd428b558ff10);
function $1a6a90a521dcd173$export$b9ecd428b558ff10(originalEventHandler, ourEventHandler, { checkForDefaultPrevented: checkForDefaultPrevented = true  } = {}) {
    return function handleEvent(event) {
        originalEventHandler === null || originalEventHandler === void 0 || originalEventHandler(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler === null || ourEventHandler === void 0 ? void 0 : ourEventHandler(event);
    };
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 13797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $hnlpS$react = __webpack_require__(18038);
var $hnlpS$radixuireactcontext = __webpack_require__(60708);
var $hnlpS$radixuireactcomposerefs = __webpack_require__(16849);
var $hnlpS$radixuireactslot = __webpack_require__(32915);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createCollection", () => $1a96635ec239608b$export$c74125a8e3af6bb2);




// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function $1a96635ec239608b$export$c74125a8e3af6bb2(name) {
    /* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';
    const [createCollectionContext, createCollectionScope] = $hnlpS$radixuireactcontext.createContextScope(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope: scope , children: children  } = props;
        const ref = ($parcel$interopDefault($hnlpS$react)).useRef(null);
        const itemMap = ($parcel$interopDefault($hnlpS$react)).useRef(new Map()).current;
        return /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).createElement(CollectionProviderImpl, {
            scope: scope,
            itemMap: itemMap,
            collectionRef: ref
        }, children);
    };
    /*#__PURE__*/ Object.assign(CollectionProvider, {
        displayName: PROVIDER_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionSlot
   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';
    const CollectionSlot = /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children  } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = $hnlpS$radixuireactcomposerefs.useComposedRefs(forwardedRef, context.collectionRef);
        return /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).createElement($hnlpS$radixuireactslot.Slot, {
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionSlot, {
        displayName: COLLECTION_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * CollectionItem
   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';
    const ITEM_DATA_ATTR = 'data-radix-collection-item';
    const CollectionItemSlot = /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).forwardRef((props, forwardedRef)=>{
        const { scope: scope , children: children , ...itemData } = props;
        const ref = ($parcel$interopDefault($hnlpS$react)).useRef(null);
        const composedRefs = $hnlpS$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        ($parcel$interopDefault($hnlpS$react)).useEffect(()=>{
            context.itemMap.set(ref, {
                ref: ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref)
            ;
        });
        return /*#__PURE__*/ ($parcel$interopDefault($hnlpS$react)).createElement($hnlpS$radixuireactslot.Slot, {
            [ITEM_DATA_ATTR]: '',
            ref: composedRefs
        }, children);
    });
    /*#__PURE__*/ Object.assign(CollectionItemSlot, {
        displayName: ITEM_SLOT_NAME
    });
    /* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {
        const context = useCollectionContext(name + 'CollectionConsumer', scope);
        const getItems = ($parcel$interopDefault($hnlpS$react)).useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
            );
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 16849:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $dJwbH$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "composeRefs", () => $9c2aaba23466b352$export$43e446d32b3d21af);
$parcel$export(module.exports, "useComposedRefs", () => $9c2aaba23466b352$export$c7b2cbe3552a0d05);

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function $9c2aaba23466b352$var$setRef(ref, value) {
    if (typeof ref === 'function') ref(value);
    else if (ref !== null && ref !== undefined) ref.current = value;
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function $9c2aaba23466b352$export$43e446d32b3d21af(...refs) {
    return (node)=>refs.forEach((ref)=>$9c2aaba23466b352$var$setRef(ref, node)
        )
    ;
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function $9c2aaba23466b352$export$c7b2cbe3552a0d05(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return $dJwbH$react.useCallback($9c2aaba23466b352$export$43e446d32b3d21af(...refs), refs);
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 60708:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $4O1Ne$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "createContext", () => $dec3cc0142d4f286$export$fd42f52fd3ae1109);
$parcel$export(module.exports, "createContextScope", () => $dec3cc0142d4f286$export$50c7b4e9d9f19c1);

function $dec3cc0142d4f286$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
    const Context = /*#__PURE__*/ $4O1Ne$react.createContext(defaultContext);
    function Provider(props) {
        const { children: children , ...context } = props; // Only re-memoize when prop values change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const value = $4O1Ne$react.useMemo(()=>context
        , Object.values(context));
        return /*#__PURE__*/ $4O1Ne$react.createElement(Context.Provider, {
            value: value
        }, children);
    }
    function useContext(consumerName) {
        const context = $4O1Ne$react.useContext(Context);
        if (context) return context;
        if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + 'Provider';
    return [
        Provider,
        useContext
    ];
}
/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/ function $dec3cc0142d4f286$export$50c7b4e9d9f19c1(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    /* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/ function $dec3cc0142d4f286$export$fd42f52fd3ae1109(rootComponentName, defaultContext) {
        const BaseContext = /*#__PURE__*/ $4O1Ne$react.createContext(defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        function Provider(props) {
            const { scope: scope , children: children , ...context } = props;
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext; // Only re-memoize when prop values change
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const value = $4O1Ne$react.useMemo(()=>context
            , Object.values(context));
            return /*#__PURE__*/ $4O1Ne$react.createElement(Context.Provider, {
                value: value
            }, children);
        }
        function useContext(consumerName, scope) {
            const Context = (scope === null || scope === void 0 ? void 0 : scope[scopeName][index]) || BaseContext;
            const context = $4O1Ne$react.useContext(Context);
            if (context) return context;
            if (defaultContext !== undefined) return defaultContext; // if a defaultContext wasn't specified, it's a required context.
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        Provider.displayName = rootComponentName + 'Provider';
        return [
            Provider,
            useContext
        ];
    }
    /* -----------------------------------------------------------------------------------------------
   * createScope
   * ---------------------------------------------------------------------------------------------*/ const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return /*#__PURE__*/ $4O1Ne$react.createContext(defaultContext);
        });
        return function useScope(scope) {
            const contexts = (scope === null || scope === void 0 ? void 0 : scope[scopeName]) || scopeContexts;
            return $4O1Ne$react.useMemo(()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                })
            , [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        $dec3cc0142d4f286$export$fd42f52fd3ae1109,
        $dec3cc0142d4f286$var$composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/ function $dec3cc0142d4f286$var$composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope1 = ()=>{
        const scopeHooks = scopes.map((createScope)=>({
                useScope: createScope(),
                scopeName: createScope.scopeName
            })
        );
        return function useComposedScopes(overrideScopes) {
            const nextScopes1 = scopeHooks.reduce((nextScopes, { useScope: useScope , scopeName: scopeName  })=>{
                // We are calling a hook inside a callback which React warns against to avoid inconsistent
                // renders, however, scoping doesn't have render side effects so we ignore the rule.
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes,
                    ...currentScope
                };
            }, {});
            return $4O1Ne$react.useMemo(()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes1
                })
            , [
                nextScopes1
            ]);
        };
    };
    createScope1.scopeName = baseScope.scopeName;
    return createScope1;
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 24827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $g2vWm$babelruntimehelpersextends = __webpack_require__(36305);
var $g2vWm$react = __webpack_require__(18038);
var $g2vWm$radixuiprimitive = __webpack_require__(74217);
var $g2vWm$radixuireactprimitive = __webpack_require__(49140);
var $g2vWm$radixuireactcomposerefs = __webpack_require__(16849);
var $g2vWm$radixuireactusecallbackref = __webpack_require__(86518);
var $g2vWm$radixuireactuseescapekeydown = __webpack_require__(40709);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "DismissableLayer", () => $d715e0554b679f1f$export$177fb62ff3ec1f22);
$parcel$export(module.exports, "DismissableLayerBranch", () => $d715e0554b679f1f$export$4d5eb2109db14228);
$parcel$export(module.exports, "Root", () => $d715e0554b679f1f$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Branch", () => $d715e0554b679f1f$export$aecb2ddcb55c95be);







/* -------------------------------------------------------------------------------------------------
 * DismissableLayer
 * -----------------------------------------------------------------------------------------------*/ const $d715e0554b679f1f$var$DISMISSABLE_LAYER_NAME = 'DismissableLayer';
const $d715e0554b679f1f$var$CONTEXT_UPDATE = 'dismissableLayer.update';
const $d715e0554b679f1f$var$POINTER_DOWN_OUTSIDE = 'dismissableLayer.pointerDownOutside';
const $d715e0554b679f1f$var$FOCUS_OUTSIDE = 'dismissableLayer.focusOutside';
let $d715e0554b679f1f$var$originalBodyPointerEvents;
const $d715e0554b679f1f$var$DismissableLayerContext = /*#__PURE__*/ $g2vWm$react.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
});
const $d715e0554b679f1f$export$177fb62ff3ec1f22 = /*#__PURE__*/ $g2vWm$react.forwardRef((props, forwardedRef)=>{
    var _node$ownerDocument;
    const { disableOutsidePointerEvents: disableOutsidePointerEvents = false , onEscapeKeyDown: onEscapeKeyDown , onPointerDownOutside: onPointerDownOutside , onFocusOutside: onFocusOutside , onInteractOutside: onInteractOutside , onDismiss: onDismiss , ...layerProps } = props;
    const context = $g2vWm$react.useContext($d715e0554b679f1f$var$DismissableLayerContext);
    const [node1, setNode] = $g2vWm$react.useState(null);
    const ownerDocument = (_node$ownerDocument = node1 === null || node1 === void 0 ? void 0 : node1.ownerDocument) !== null && _node$ownerDocument !== void 0 ? _node$ownerDocument : globalThis === null || globalThis === void 0 ? void 0 : globalThis.document;
    const [, force] = $g2vWm$react.useState({});
    const composedRefs = $g2vWm$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setNode(node)
    );
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1); // prettier-ignore
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled); // prettier-ignore
    const index = node1 ? layers.indexOf(node1) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = $d715e0554b679f1f$var$usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside === null || onPointerDownOutside === void 0 || onPointerDownOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    const focusOutside = $d715e0554b679f1f$var$useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target)
        );
        if (isFocusInBranch) return;
        onFocusOutside === null || onFocusOutside === void 0 || onFocusOutside(event);
        onInteractOutside === null || onInteractOutside === void 0 || onInteractOutside(event);
        if (!event.defaultPrevented) onDismiss === null || onDismiss === void 0 || onDismiss();
    }, ownerDocument);
    $g2vWm$radixuireactuseescapekeydown.useEscapeKeydown((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    $g2vWm$react.useEffect(()=>{
        if (!node1) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                $d715e0554b679f1f$var$originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = 'none';
            }
            context.layersWithOutsidePointerEventsDisabled.add(node1);
        }
        context.layers.add(node1);
        $d715e0554b679f1f$var$dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) ownerDocument.body.style.pointerEvents = $d715e0554b679f1f$var$originalBodyPointerEvents;
        };
    }, [
        node1,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    /**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */ $g2vWm$react.useEffect(()=>{
        return ()=>{
            if (!node1) return;
            context.layers.delete(node1);
            context.layersWithOutsidePointerEventsDisabled.delete(node1);
            $d715e0554b679f1f$var$dispatchUpdate();
        };
    }, [
        node1,
        context
    ]);
    $g2vWm$react.useEffect(()=>{
        const handleUpdate = ()=>force({})
        ;
        document.addEventListener($d715e0554b679f1f$var$CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener($d715e0554b679f1f$var$CONTEXT_UPDATE, handleUpdate)
        ;
    }, []);
    return /*#__PURE__*/ $g2vWm$react.createElement($g2vWm$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($g2vWm$babelruntimehelpersextends))({}, layerProps, {
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? 'auto' : 'none' : undefined,
            ...props.style
        },
        onFocusCapture: $g2vWm$radixuiprimitive.composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: $g2vWm$radixuiprimitive.composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: $g2vWm$radixuiprimitive.composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    }));
});
/*#__PURE__*/ Object.assign($d715e0554b679f1f$export$177fb62ff3ec1f22, {
    displayName: $d715e0554b679f1f$var$DISMISSABLE_LAYER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * DismissableLayerBranch
 * -----------------------------------------------------------------------------------------------*/ const $d715e0554b679f1f$var$BRANCH_NAME = 'DismissableLayerBranch';
const $d715e0554b679f1f$export$4d5eb2109db14228 = /*#__PURE__*/ $g2vWm$react.forwardRef((props, forwardedRef)=>{
    const context = $g2vWm$react.useContext($d715e0554b679f1f$var$DismissableLayerContext);
    const ref = $g2vWm$react.useRef(null);
    const composedRefs = $g2vWm$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    $g2vWm$react.useEffect(()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /*#__PURE__*/ $g2vWm$react.createElement($g2vWm$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($g2vWm$babelruntimehelpersextends))({}, props, {
        ref: composedRefs
    }));
});
/*#__PURE__*/ Object.assign($d715e0554b679f1f$export$4d5eb2109db14228, {
    displayName: $d715e0554b679f1f$var$BRANCH_NAME
});
/* -----------------------------------------------------------------------------------------------*/ /**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */ function $d715e0554b679f1f$var$usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handlePointerDownOutside = $g2vWm$radixuireactusecallbackref.useCallbackRef(onPointerDownOutside);
    const isPointerInsideReactTreeRef = $g2vWm$react.useRef(false);
    const handleClickRef = $g2vWm$react.useRef(()=>{});
    $g2vWm$react.useEffect(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                function handleAndDispatchPointerDownOutsideEvent() {
                    $d715e0554b679f1f$var$handleAndDispatchCustomEvent($d715e0554b679f1f$var$POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                }
                /**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */ if (event.pointerType === 'touch') {
                    ownerDocument.removeEventListener('click', handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
                    ownerDocument.addEventListener('click', handleClickRef.current, {
                        once: true
                    });
                } else handleAndDispatchPointerDownOutsideEvent();
            }
            isPointerInsideReactTreeRef.current = false;
        };
        /**
     * if this hook executes in a component that mounts via a `pointerdown` event, the event
     * would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
     * this by delaying the event listener registration on the document.
     * This is not React specific, but rather how the DOM works, ie:
     * ```
     * button.addEventListener('pointerdown', () => {
     *   console.log('I will log');
     *   document.addEventListener('pointerdown', () => {
     *     console.log('I will also log');
     *   })
     * });
     */ const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener('pointerdown', handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener('pointerdown', handlePointerDown);
            ownerDocument.removeEventListener('click', handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */ function $d715e0554b679f1f$var$useFocusOutside(onFocusOutside, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const handleFocusOutside = $g2vWm$radixuireactusecallbackref.useCallbackRef(onFocusOutside);
    const isFocusInsideReactTreeRef = $g2vWm$react.useRef(false);
    $g2vWm$react.useEffect(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                $d715e0554b679f1f$var$handleAndDispatchCustomEvent($d715e0554b679f1f$var$FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener('focusin', handleFocus);
        return ()=>ownerDocument.removeEventListener('focusin', handleFocus)
        ;
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true
        ,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function $d715e0554b679f1f$var$dispatchUpdate() {
    const event = new CustomEvent($d715e0554b679f1f$var$CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function $d715e0554b679f1f$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete: discrete  }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail: detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) $g2vWm$radixuireactprimitive.dispatchDiscreteCustomEvent(target, event);
    else target.dispatchEvent(event);
}
const $d715e0554b679f1f$export$be92b6f5f03c0fe9 = $d715e0554b679f1f$export$177fb62ff3ec1f22;
const $d715e0554b679f1f$export$aecb2ddcb55c95be = $d715e0554b679f1f$export$4d5eb2109db14228;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 17752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $amzHf$babelruntimehelpersextends = __webpack_require__(36305);
var $amzHf$react = __webpack_require__(18038);
var $amzHf$reactdom = __webpack_require__(98704);
var $amzHf$radixuireactprimitive = __webpack_require__(49140);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Portal", () => $913a70b877676c16$export$602eac185826482c);
$parcel$export(module.exports, "Root", () => $913a70b877676c16$export$be92b6f5f03c0fe9);




/* -------------------------------------------------------------------------------------------------
 * Portal
 * -----------------------------------------------------------------------------------------------*/ const $913a70b877676c16$var$PORTAL_NAME = 'Portal';
const $913a70b877676c16$export$602eac185826482c = /*#__PURE__*/ $amzHf$react.forwardRef((props, forwardedRef)=>{
    var _globalThis$document;
    const { container: container = globalThis === null || globalThis === void 0 ? void 0 : (_globalThis$document = globalThis.document) === null || _globalThis$document === void 0 ? void 0 : _globalThis$document.body , ...portalProps } = props;
    return container ? /*#__PURE__*/ ($parcel$interopDefault($amzHf$reactdom)).createPortal(/*#__PURE__*/ $amzHf$react.createElement($amzHf$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($amzHf$babelruntimehelpersextends))({}, portalProps, {
        ref: forwardedRef
    })), container) : null;
});
/*#__PURE__*/ Object.assign($913a70b877676c16$export$602eac185826482c, {
    displayName: $913a70b877676c16$var$PORTAL_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $913a70b877676c16$export$be92b6f5f03c0fe9 = $913a70b877676c16$export$602eac185826482c;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 46474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $fnLeV$react = __webpack_require__(18038);
var $fnLeV$reactdom = __webpack_require__(98704);
var $fnLeV$radixuireactcomposerefs = __webpack_require__(16849);
var $fnLeV$radixuireactuselayouteffect = __webpack_require__(41572);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Presence", () => $a2fa0214bb2735a1$export$99c2b779aa4e8b8b);





function $8f63844556d0d3cd$export$3e6543de14f8614f(initialState, machine) {
    return $fnLeV$react.useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState !== null && nextState !== void 0 ? nextState : state;
    }, initialState);
}


const $a2fa0214bb2735a1$export$99c2b779aa4e8b8b = (props)=>{
    const { present: present , children: children  } = props;
    const presence = $a2fa0214bb2735a1$var$usePresence(present);
    const child = typeof children === 'function' ? children({
        present: presence.isPresent
    }) : $fnLeV$react.Children.only(children);
    const ref = $fnLeV$radixuireactcomposerefs.useComposedRefs(presence.ref, child.ref);
    const forceMount = typeof children === 'function';
    return forceMount || presence.isPresent ? /*#__PURE__*/ $fnLeV$react.cloneElement(child, {
        ref: ref
    }) : null;
};
$a2fa0214bb2735a1$export$99c2b779aa4e8b8b.displayName = 'Presence';
/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/ function $a2fa0214bb2735a1$var$usePresence(present) {
    const [node1, setNode] = $fnLeV$react.useState();
    const stylesRef = $fnLeV$react.useRef({});
    const prevPresentRef = $fnLeV$react.useRef(present);
    const prevAnimationNameRef = $fnLeV$react.useRef('none');
    const initialState = present ? 'mounted' : 'unmounted';
    const [state, send] = $8f63844556d0d3cd$export$3e6543de14f8614f(initialState, {
        mounted: {
            UNMOUNT: 'unmounted',
            ANIMATION_OUT: 'unmountSuspended'
        },
        unmountSuspended: {
            MOUNT: 'mounted',
            ANIMATION_END: 'unmounted'
        },
        unmounted: {
            MOUNT: 'mounted'
        }
    });
    $fnLeV$react.useEffect(()=>{
        const currentAnimationName = $a2fa0214bb2735a1$var$getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === 'mounted' ? currentAnimationName : 'none';
    }, [
        state
    ]);
    $fnLeV$radixuireactuselayouteffect.useLayoutEffect(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = $a2fa0214bb2735a1$var$getAnimationName(styles);
            if (present) send('MOUNT');
            else if (currentAnimationName === 'none' || (styles === null || styles === void 0 ? void 0 : styles.display) === 'none') // If there is no exit animation or the element is hidden, animations won't run
            // so we unmount instantly
            send('UNMOUNT');
            else {
                /**
         * When `present` changes to `false`, we check changes to animation-name to
         * determine whether an animation has started. We chose this approach (reading
         * computed styles) because there is no `animationrun` event and `animationstart`
         * fires after `animation-delay` has expired which would be too late.
         */ const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) send('ANIMATION_OUT');
                else send('UNMOUNT');
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    $fnLeV$radixuireactuselayouteffect.useLayoutEffect(()=>{
        if (node1) {
            /**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */ const handleAnimationEnd = (event)=>{
                const currentAnimationName = $a2fa0214bb2735a1$var$getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node1 && isCurrentAnimation) // With React 18 concurrency this update is applied
                // a frame after the animation ends, creating a flash of visible content.
                // By manually flushing we ensure they sync within a frame, removing the flash.
                $fnLeV$reactdom.flushSync(()=>send('ANIMATION_END')
                );
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node1) // if animation occurred, store its name as the previous animation.
                prevAnimationNameRef.current = $a2fa0214bb2735a1$var$getAnimationName(stylesRef.current);
            };
            node1.addEventListener('animationstart', handleAnimationStart);
            node1.addEventListener('animationcancel', handleAnimationEnd);
            node1.addEventListener('animationend', handleAnimationEnd);
            return ()=>{
                node1.removeEventListener('animationstart', handleAnimationStart);
                node1.removeEventListener('animationcancel', handleAnimationEnd);
                node1.removeEventListener('animationend', handleAnimationEnd);
            };
        } else // Transition to the unmounted state if the node is removed prematurely.
        // We avoid doing so during cleanup as the node may change but still exist.
        send('ANIMATION_END');
    }, [
        node1,
        send
    ]);
    return {
        isPresent: [
            'mounted',
            'unmountSuspended'
        ].includes(state),
        ref: $fnLeV$react.useCallback((node)=>{
            if (node) stylesRef.current = getComputedStyle(node);
            setNode(node);
        }, [])
    };
}
/* -----------------------------------------------------------------------------------------------*/ function $a2fa0214bb2735a1$var$getAnimationName(styles) {
    return (styles === null || styles === void 0 ? void 0 : styles.animationName) || 'none';
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 49140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $iMixA$babelruntimehelpersextends = __webpack_require__(36305);
var $iMixA$react = __webpack_require__(18038);
var $iMixA$reactdom = __webpack_require__(98704);
var $iMixA$radixuireactslot = __webpack_require__(32915);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Primitive", () => $c3def6332c2749a6$export$250ffa63cdc0d034);
$parcel$export(module.exports, "Root", () => $c3def6332c2749a6$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "dispatchDiscreteCustomEvent", () => $c3def6332c2749a6$export$6d1a0317bde7de7f);




const $c3def6332c2749a6$var$NODES = [
    'a',
    'button',
    'div',
    'h2',
    'h3',
    'img',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $c3def6332c2749a6$export$250ffa63cdc0d034 = $c3def6332c2749a6$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ $iMixA$react.forwardRef((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? $iMixA$radixuireactslot.Slot : node;
        $iMixA$react.useEffect(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ $iMixA$react.createElement(Comp, ($parcel$interopDefault($iMixA$babelruntimehelpersextends))({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $c3def6332c2749a6$export$6d1a0317bde7de7f(target, event) {
    if (target) $iMixA$reactdom.flushSync(()=>target.dispatchEvent(event)
    );
}
/* -----------------------------------------------------------------------------------------------*/ const $c3def6332c2749a6$export$be92b6f5f03c0fe9 = $c3def6332c2749a6$export$250ffa63cdc0d034;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 32915:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $dAvBt$babelruntimehelpersextends = __webpack_require__(36305);
var $dAvBt$react = __webpack_require__(18038);
var $dAvBt$radixuireactcomposerefs = __webpack_require__(16849);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Slot", () => $82dc8d030dec7549$export$8c6ed5c666ac1360);
$parcel$export(module.exports, "Slottable", () => $82dc8d030dec7549$export$d9f1ccf0bdb05d45);
$parcel$export(module.exports, "Root", () => $82dc8d030dec7549$export$be92b6f5f03c0fe9);



/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/ const $82dc8d030dec7549$export$8c6ed5c666ac1360 = /*#__PURE__*/ $dAvBt$react.forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    const childrenArray = $dAvBt$react.Children.toArray(children);
    const slottable = childrenArray.find($82dc8d030dec7549$var$isSlottable);
    if (slottable) {
        // the new element to render is the one passed as a child of `Slottable`
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                // because the new element will be the one rendered, we are only interested
                // in grabbing its children (`newElement.props.children`)
                if ($dAvBt$react.Children.count(newElement) > 1) return $dAvBt$react.Children.only(null);
                return /*#__PURE__*/ $dAvBt$react.isValidElement(newElement) ? newElement.props.children : null;
            } else return child;
        });
        return /*#__PURE__*/ $dAvBt$react.createElement($82dc8d030dec7549$var$SlotClone, ($parcel$interopDefault($dAvBt$babelruntimehelpersextends))({}, slotProps, {
            ref: forwardedRef
        }), /*#__PURE__*/ $dAvBt$react.isValidElement(newElement) ? /*#__PURE__*/ $dAvBt$react.cloneElement(newElement, undefined, newChildren) : null);
    }
    return /*#__PURE__*/ $dAvBt$react.createElement($82dc8d030dec7549$var$SlotClone, ($parcel$interopDefault($dAvBt$babelruntimehelpersextends))({}, slotProps, {
        ref: forwardedRef
    }), children);
});
$82dc8d030dec7549$export$8c6ed5c666ac1360.displayName = 'Slot';
/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/ const $82dc8d030dec7549$var$SlotClone = /*#__PURE__*/ $dAvBt$react.forwardRef((props, forwardedRef)=>{
    const { children: children , ...slotProps } = props;
    if (/*#__PURE__*/ $dAvBt$react.isValidElement(children)) return /*#__PURE__*/ $dAvBt$react.cloneElement(children, {
        ...$82dc8d030dec7549$var$mergeProps(slotProps, children.props),
        ref: $dAvBt$radixuireactcomposerefs.composeRefs(forwardedRef, children.ref)
    });
    return $dAvBt$react.Children.count(children) > 1 ? $dAvBt$react.Children.only(null) : null;
});
$82dc8d030dec7549$var$SlotClone.displayName = 'SlotClone';
/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/ const $82dc8d030dec7549$export$d9f1ccf0bdb05d45 = ({ children: children  })=>{
    return /*#__PURE__*/ $dAvBt$react.createElement($dAvBt$react.Fragment, null, children);
};
/* ---------------------------------------------------------------------------------------------- */ function $82dc8d030dec7549$var$isSlottable(child) {
    return /*#__PURE__*/ $dAvBt$react.isValidElement(child) && child.type === $82dc8d030dec7549$export$d9f1ccf0bdb05d45;
}
function $82dc8d030dec7549$var$mergeProps(slotProps, childProps) {
    // all child props should override
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            // if the handler exists on both, we compose them
            if (slotPropValue && childPropValue) overrideProps[propName] = (...args)=>{
                childPropValue(...args);
                slotPropValue(...args);
            };
            else if (slotPropValue) overrideProps[propName] = slotPropValue;
        } else if (propName === 'style') overrideProps[propName] = {
            ...slotPropValue,
            ...childPropValue
        };
        else if (propName === 'className') overrideProps[propName] = [
            slotPropValue,
            childPropValue
        ].filter(Boolean).join(' ');
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
const $82dc8d030dec7549$export$be92b6f5f03c0fe9 = $82dc8d030dec7549$export$8c6ed5c666ac1360;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 76561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $iTyic$babelruntimehelpersextends = __webpack_require__(36305);
var $iTyic$react = __webpack_require__(18038);
var $iTyic$reactdom = __webpack_require__(98704);
var $iTyic$radixuiprimitive = __webpack_require__(74217);
var $iTyic$radixuireactcomposerefs = __webpack_require__(16849);
var $iTyic$radixuireactcollection = __webpack_require__(13797);
var $iTyic$radixuireactcontext = __webpack_require__(60708);
var $iTyic$radixuireactdismissablelayer = __webpack_require__(24827);
var $iTyic$radixuireactportal = __webpack_require__(17752);
var $iTyic$radixuireactpresence = __webpack_require__(46474);
var $iTyic$radixuireactprimitive = __webpack_require__(49140);
var $iTyic$radixuireactusecallbackref = __webpack_require__(86518);
var $iTyic$radixuireactusecontrollablestate = __webpack_require__(69808);
var $iTyic$radixuireactuselayouteffect = __webpack_require__(41572);
var $iTyic$radixuireactvisuallyhidden = __webpack_require__(55355);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createToastScope", () => $9208a85b3e79d33f$export$8a359da18fbc9073);
$parcel$export(module.exports, "ToastProvider", () => $9208a85b3e79d33f$export$f5d03d415824e0e);
$parcel$export(module.exports, "ToastViewport", () => $9208a85b3e79d33f$export$6192c2425ecfd989);
$parcel$export(module.exports, "Toast", () => $9208a85b3e79d33f$export$8d8dc7d5f743331b);
$parcel$export(module.exports, "ToastTitle", () => $9208a85b3e79d33f$export$16d42d7c29b95a4);
$parcel$export(module.exports, "ToastDescription", () => $9208a85b3e79d33f$export$ecddd96c53621d9a);
$parcel$export(module.exports, "ToastAction", () => $9208a85b3e79d33f$export$3019feecfda683d2);
$parcel$export(module.exports, "ToastClose", () => $9208a85b3e79d33f$export$811e70f61c205839);
$parcel$export(module.exports, "Provider", () => $9208a85b3e79d33f$export$2881499e37b75b9a);
$parcel$export(module.exports, "Viewport", () => $9208a85b3e79d33f$export$d5c6c08dc2d3ca7);
$parcel$export(module.exports, "Root", () => $9208a85b3e79d33f$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Title", () => $9208a85b3e79d33f$export$f99233281efd08a0);
$parcel$export(module.exports, "Description", () => $9208a85b3e79d33f$export$393edc798c47379d);
$parcel$export(module.exports, "Action", () => $9208a85b3e79d33f$export$e19cd5f9376f8cee);
$parcel$export(module.exports, "Close", () => $9208a85b3e79d33f$export$f39c2d165cd861fe);















/* -------------------------------------------------------------------------------------------------
 * ToastProvider
 * -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$PROVIDER_NAME = 'ToastProvider';
const [$9208a85b3e79d33f$var$Collection, $9208a85b3e79d33f$var$useCollection, $9208a85b3e79d33f$var$createCollectionScope] = $iTyic$radixuireactcollection.createCollection('Toast');
const [$9208a85b3e79d33f$var$createToastContext, $9208a85b3e79d33f$export$8a359da18fbc9073] = $iTyic$radixuireactcontext.createContextScope('Toast', [
    $9208a85b3e79d33f$var$createCollectionScope
]);
const [$9208a85b3e79d33f$var$ToastProviderProvider, $9208a85b3e79d33f$var$useToastProviderContext] = $9208a85b3e79d33f$var$createToastContext($9208a85b3e79d33f$var$PROVIDER_NAME);
const $9208a85b3e79d33f$export$f5d03d415824e0e = (props)=>{
    const { __scopeToast: __scopeToast , label: label = 'Notification' , duration: duration = 5000 , swipeDirection: swipeDirection = 'right' , swipeThreshold: swipeThreshold = 50 , children: children  } = props;
    const [viewport, setViewport] = $iTyic$react.useState(null);
    const [toastCount, setToastCount] = $iTyic$react.useState(0);
    const isFocusedToastEscapeKeyDownRef = $iTyic$react.useRef(false);
    const isClosePausedRef = $iTyic$react.useRef(false);
    return /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$Collection.Provider, {
        scope: __scopeToast
    }, /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$ToastProviderProvider, {
        scope: __scopeToast,
        label: label,
        duration: duration,
        swipeDirection: swipeDirection,
        swipeThreshold: swipeThreshold,
        toastCount: toastCount,
        viewport: viewport,
        onViewportChange: setViewport,
        onToastAdd: $iTyic$react.useCallback(()=>setToastCount((prevCount)=>prevCount + 1
            )
        , []),
        onToastRemove: $iTyic$react.useCallback(()=>setToastCount((prevCount)=>prevCount - 1
            )
        , []),
        isFocusedToastEscapeKeyDownRef: isFocusedToastEscapeKeyDownRef,
        isClosePausedRef: isClosePausedRef
    }, children));
};
$9208a85b3e79d33f$export$f5d03d415824e0e.propTypes = {
    label (props) {
        if (props.label && typeof props.label === 'string' && !props.label.trim()) {
            const error = `Invalid prop \`label\` supplied to \`${$9208a85b3e79d33f$var$PROVIDER_NAME}\`. Expected non-empty \`string\`.`;
            return new Error(error);
        }
        return null;
    }
};
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$export$f5d03d415824e0e, {
    displayName: $9208a85b3e79d33f$var$PROVIDER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ToastViewport
 * -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$VIEWPORT_NAME = 'ToastViewport';
const $9208a85b3e79d33f$var$VIEWPORT_DEFAULT_HOTKEY = [
    'F8'
];
const $9208a85b3e79d33f$var$VIEWPORT_PAUSE = 'toast.viewportPause';
const $9208a85b3e79d33f$var$VIEWPORT_RESUME = 'toast.viewportResume';
const $9208a85b3e79d33f$export$6192c2425ecfd989 = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { __scopeToast: __scopeToast , hotkey: hotkey = $9208a85b3e79d33f$var$VIEWPORT_DEFAULT_HOTKEY , label: label = 'Notifications ({hotkey})' , ...viewportProps } = props;
    const context = $9208a85b3e79d33f$var$useToastProviderContext($9208a85b3e79d33f$var$VIEWPORT_NAME, __scopeToast);
    const getItems = $9208a85b3e79d33f$var$useCollection(__scopeToast);
    const wrapperRef = $iTyic$react.useRef(null);
    const headFocusProxyRef = $iTyic$react.useRef(null);
    const tailFocusProxyRef = $iTyic$react.useRef(null);
    const ref = $iTyic$react.useRef(null);
    const composedRefs = $iTyic$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
    const hasToasts = context.toastCount > 0;
    $iTyic$react.useEffect(()=>{
        const handleKeyDown = (event)=>{
            var _ref$current;
            // we use `event.code` as it is consistent regardless of meta keys that were pressed.
            // for example, `event.key` for `Control+Alt+t` is `†` and `t !== †`
            const isHotkeyPressed = hotkey.every((key)=>event[key] || event.code === key
            );
            if (isHotkeyPressed) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.focus();
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown)
        ;
    }, [
        hotkey
    ]);
    $iTyic$react.useEffect(()=>{
        const wrapper = wrapperRef.current;
        const viewport = ref.current;
        if (hasToasts && wrapper && viewport) {
            const handlePause = ()=>{
                if (!context.isClosePausedRef.current) {
                    const pauseEvent = new CustomEvent($9208a85b3e79d33f$var$VIEWPORT_PAUSE);
                    viewport.dispatchEvent(pauseEvent);
                    context.isClosePausedRef.current = true;
                }
            };
            const handleResume = ()=>{
                if (context.isClosePausedRef.current) {
                    const resumeEvent = new CustomEvent($9208a85b3e79d33f$var$VIEWPORT_RESUME);
                    viewport.dispatchEvent(resumeEvent);
                    context.isClosePausedRef.current = false;
                }
            };
            const handleFocusOutResume = (event)=>{
                const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
                if (isFocusMovingOutside) handleResume();
            };
            const handlePointerLeaveResume = ()=>{
                const isFocusInside = wrapper.contains(document.activeElement);
                if (!isFocusInside) handleResume();
            }; // Toasts are not in the viewport React tree so we need to bind DOM events
            wrapper.addEventListener('focusin', handlePause);
            wrapper.addEventListener('focusout', handleFocusOutResume);
            wrapper.addEventListener('pointermove', handlePause);
            wrapper.addEventListener('pointerleave', handlePointerLeaveResume);
            window.addEventListener('blur', handlePause);
            window.addEventListener('focus', handleResume);
            return ()=>{
                wrapper.removeEventListener('focusin', handlePause);
                wrapper.removeEventListener('focusout', handleFocusOutResume);
                wrapper.removeEventListener('pointermove', handlePause);
                wrapper.removeEventListener('pointerleave', handlePointerLeaveResume);
                window.removeEventListener('blur', handlePause);
                window.removeEventListener('focus', handleResume);
            };
        }
    }, [
        hasToasts,
        context.isClosePausedRef
    ]);
    const getSortedTabbableCandidates = $iTyic$react.useCallback(({ tabbingDirection: tabbingDirection  })=>{
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem)=>{
            const toastNode = toastItem.ref.current;
            const toastTabbableCandidates = [
                toastNode,
                ...$9208a85b3e79d33f$var$getTabbableCandidates(toastNode)
            ];
            return tabbingDirection === 'forwards' ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === 'forwards' ? tabbableCandidates.reverse() : tabbableCandidates).flat();
    }, [
        getItems
    ]);
    $iTyic$react.useEffect(()=>{
        const viewport = ref.current; // We programmatically manage tabbing as we are unable to influence
        // the source order with portals, this allows us to reverse the
        // tab order so that it runs from most recent toast to least
        if (viewport) {
            const handleKeyDown = (event)=>{
                const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
                const isTabKey = event.key === 'Tab' && !isMetaKey;
                if (isTabKey) {
                    const focusedElement = document.activeElement;
                    const isTabbingBackwards = event.shiftKey;
                    const targetIsViewport = event.target === viewport; // If we're back tabbing after jumping to the viewport then we simply
                    // proxy focus out to the preceding document
                    if (targetIsViewport && isTabbingBackwards) {
                        var _headFocusProxyRef$cu;
                        (_headFocusProxyRef$cu = headFocusProxyRef.current) === null || _headFocusProxyRef$cu === void 0 || _headFocusProxyRef$cu.focus();
                        return;
                    }
                    const tabbingDirection = isTabbingBackwards ? 'backwards' : 'forwards';
                    const sortedCandidates = getSortedTabbableCandidates({
                        tabbingDirection: tabbingDirection
                    });
                    const index = sortedCandidates.findIndex((candidate)=>candidate === focusedElement
                    );
                    if ($9208a85b3e79d33f$var$focusFirst(sortedCandidates.slice(index + 1))) event.preventDefault();
                    else {
                        var _headFocusProxyRef$cu2, _tailFocusProxyRef$cu;
                        // If we can't focus that means we're at the edges so we
                        // proxy to the corresponding exit point and let the browser handle
                        // tab/shift+tab keypress and implicitly pass focus to the next valid element in the document
                        isTabbingBackwards ? (_headFocusProxyRef$cu2 = headFocusProxyRef.current) === null || _headFocusProxyRef$cu2 === void 0 || _headFocusProxyRef$cu2.focus() : (_tailFocusProxyRef$cu = tailFocusProxyRef.current) === null || _tailFocusProxyRef$cu === void 0 || _tailFocusProxyRef$cu.focus();
                    }
                }
            }; // Toasts are not in the viewport React tree so we need to bind DOM events
            viewport.addEventListener('keydown', handleKeyDown);
            return ()=>viewport.removeEventListener('keydown', handleKeyDown)
            ;
        }
    }, [
        getItems,
        getSortedTabbableCandidates
    ]);
    return /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactdismissablelayer.Branch, {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace('{hotkey}', hotkeyLabel) // Ensure virtual cursor from landmarks menus triggers focus/blur for pause/resume
        ,
        tabIndex: -1 // incase list has size when empty (e.g. padding), we remove pointer events so
        ,
        style: {
            pointerEvents: hasToasts ? undefined : 'none'
        }
    }, hasToasts && /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$FocusProxy, {
        ref: headFocusProxyRef,
        onFocusFromOutsideViewport: ()=>{
            const tabbableCandidates = getSortedTabbableCandidates({
                tabbingDirection: 'forwards'
            });
            $9208a85b3e79d33f$var$focusFirst(tabbableCandidates);
        }
    }), /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$Collection.Slot, {
        scope: __scopeToast
    }, /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactprimitive.Primitive.ol, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({
        tabIndex: -1
    }, viewportProps, {
        ref: composedRefs
    }))), hasToasts && /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$FocusProxy, {
        ref: tailFocusProxyRef,
        onFocusFromOutsideViewport: ()=>{
            const tabbableCandidates = getSortedTabbableCandidates({
                tabbingDirection: 'backwards'
            });
            $9208a85b3e79d33f$var$focusFirst(tabbableCandidates);
        }
    }));
});
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$export$6192c2425ecfd989, {
    displayName: $9208a85b3e79d33f$var$VIEWPORT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$FOCUS_PROXY_NAME = 'ToastFocusProxy';
const $9208a85b3e79d33f$var$FocusProxy = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { __scopeToast: __scopeToast , onFocusFromOutsideViewport: onFocusFromOutsideViewport , ...proxyProps } = props;
    const context = $9208a85b3e79d33f$var$useToastProviderContext($9208a85b3e79d33f$var$FOCUS_PROXY_NAME, __scopeToast);
    return /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactvisuallyhidden.VisuallyHidden, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({
        "aria-hidden": true,
        tabIndex: 0
    }, proxyProps, {
        ref: forwardedRef // Avoid page scrolling when focus is on the focus proxy
        ,
        style: {
            position: 'fixed'
        },
        onFocus: (event)=>{
            var _context$viewport;
            const prevFocusedElement = event.relatedTarget;
            const isFocusFromOutsideViewport = !((_context$viewport = context.viewport) !== null && _context$viewport !== void 0 && _context$viewport.contains(prevFocusedElement));
            if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }
    }));
});
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$var$FocusProxy, {
    displayName: $9208a85b3e79d33f$var$FOCUS_PROXY_NAME
});
/* -------------------------------------------------------------------------------------------------
 * Toast
 * -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$TOAST_NAME = 'Toast';
const $9208a85b3e79d33f$var$TOAST_SWIPE_START = 'toast.swipeStart';
const $9208a85b3e79d33f$var$TOAST_SWIPE_MOVE = 'toast.swipeMove';
const $9208a85b3e79d33f$var$TOAST_SWIPE_CANCEL = 'toast.swipeCancel';
const $9208a85b3e79d33f$var$TOAST_SWIPE_END = 'toast.swipeEnd';
const $9208a85b3e79d33f$export$8d8dc7d5f743331b = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { forceMount: forceMount , open: openProp , defaultOpen: defaultOpen , onOpenChange: onOpenChange , ...toastProps } = props;
    const [open = true, setOpen] = $iTyic$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactpresence.Presence, {
        present: forceMount || open
    }, /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$ToastImpl, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({
        open: open
    }, toastProps, {
        ref: forwardedRef,
        onClose: ()=>setOpen(false)
        ,
        onPause: $iTyic$radixuireactusecallbackref.useCallbackRef(props.onPause),
        onResume: $iTyic$radixuireactusecallbackref.useCallbackRef(props.onResume),
        onSwipeStart: $iTyic$radixuiprimitive.composeEventHandlers(props.onSwipeStart, (event)=>{
            event.currentTarget.setAttribute('data-swipe', 'start');
        }),
        onSwipeMove: $iTyic$radixuiprimitive.composeEventHandlers(props.onSwipeMove, (event)=>{
            const { x: x , y: y  } = event.detail.delta;
            event.currentTarget.setAttribute('data-swipe', 'move');
            event.currentTarget.style.setProperty('--radix-toast-swipe-move-x', `${x}px`);
            event.currentTarget.style.setProperty('--radix-toast-swipe-move-y', `${y}px`);
        }),
        onSwipeCancel: $iTyic$radixuiprimitive.composeEventHandlers(props.onSwipeCancel, (event)=>{
            event.currentTarget.setAttribute('data-swipe', 'cancel');
            event.currentTarget.style.removeProperty('--radix-toast-swipe-move-x');
            event.currentTarget.style.removeProperty('--radix-toast-swipe-move-y');
            event.currentTarget.style.removeProperty('--radix-toast-swipe-end-x');
            event.currentTarget.style.removeProperty('--radix-toast-swipe-end-y');
        }),
        onSwipeEnd: $iTyic$radixuiprimitive.composeEventHandlers(props.onSwipeEnd, (event)=>{
            const { x: x , y: y  } = event.detail.delta;
            event.currentTarget.setAttribute('data-swipe', 'end');
            event.currentTarget.style.removeProperty('--radix-toast-swipe-move-x');
            event.currentTarget.style.removeProperty('--radix-toast-swipe-move-y');
            event.currentTarget.style.setProperty('--radix-toast-swipe-end-x', `${x}px`);
            event.currentTarget.style.setProperty('--radix-toast-swipe-end-y', `${y}px`);
            setOpen(false);
        })
    })));
});
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$export$8d8dc7d5f743331b, {
    displayName: $9208a85b3e79d33f$var$TOAST_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const [$9208a85b3e79d33f$var$ToastInteractiveProvider, $9208a85b3e79d33f$var$useToastInteractiveContext] = $9208a85b3e79d33f$var$createToastContext($9208a85b3e79d33f$var$TOAST_NAME, {
    onClose () {}
});
const $9208a85b3e79d33f$var$ToastImpl = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { __scopeToast: __scopeToast , type: type = 'foreground' , duration: durationProp , open: open , onClose: onClose , onEscapeKeyDown: onEscapeKeyDown , onPause: onPause , onResume: onResume , onSwipeStart: onSwipeStart , onSwipeMove: onSwipeMove , onSwipeCancel: onSwipeCancel , onSwipeEnd: onSwipeEnd , ...toastProps } = props;
    const context = $9208a85b3e79d33f$var$useToastProviderContext($9208a85b3e79d33f$var$TOAST_NAME, __scopeToast);
    const [node1, setNode] = $iTyic$react.useState(null);
    const composedRefs = $iTyic$radixuireactcomposerefs.useComposedRefs(forwardedRef, (node)=>setNode(node)
    );
    const pointerStartRef = $iTyic$react.useRef(null);
    const swipeDeltaRef = $iTyic$react.useRef(null);
    const duration1 = durationProp || context.duration;
    const closeTimerStartTimeRef = $iTyic$react.useRef(0);
    const closeTimerRemainingTimeRef = $iTyic$react.useRef(duration1);
    const closeTimerRef = $iTyic$react.useRef(0);
    const { onToastAdd: onToastAdd , onToastRemove: onToastRemove  } = context;
    const handleClose = $iTyic$radixuireactusecallbackref.useCallbackRef(()=>{
        var _context$viewport2;
        // focus viewport if focus is within toast to read the remaining toast
        // count to SR users and ensure focus isn't lost
        const isFocusInToast = node1 === null || node1 === void 0 ? void 0 : node1.contains(document.activeElement);
        if (isFocusInToast) (_context$viewport2 = context.viewport) === null || _context$viewport2 === void 0 || _context$viewport2.focus();
        onClose();
    });
    const startTimer = $iTyic$react.useCallback((duration)=>{
        if (!duration || duration === Infinity) return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = new Date().getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration);
    }, [
        handleClose
    ]);
    $iTyic$react.useEffect(()=>{
        const viewport = context.viewport;
        if (viewport) {
            const handleResume = ()=>{
                startTimer(closeTimerRemainingTimeRef.current);
                onResume === null || onResume === void 0 || onResume();
            };
            const handlePause = ()=>{
                const elapsedTime = new Date().getTime() - closeTimerStartTimeRef.current;
                closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
                window.clearTimeout(closeTimerRef.current);
                onPause === null || onPause === void 0 || onPause();
            };
            viewport.addEventListener($9208a85b3e79d33f$var$VIEWPORT_PAUSE, handlePause);
            viewport.addEventListener($9208a85b3e79d33f$var$VIEWPORT_RESUME, handleResume);
            return ()=>{
                viewport.removeEventListener($9208a85b3e79d33f$var$VIEWPORT_PAUSE, handlePause);
                viewport.removeEventListener($9208a85b3e79d33f$var$VIEWPORT_RESUME, handleResume);
            };
        }
    }, [
        context.viewport,
        duration1,
        onPause,
        onResume,
        startTimer
    ]); // start timer when toast opens or duration changes.
    // we include `open` in deps because closed !== unmounted when animating
    // so it could reopen before being completely unmounted
    $iTyic$react.useEffect(()=>{
        if (open && !context.isClosePausedRef.current) startTimer(duration1);
    }, [
        open,
        duration1,
        context.isClosePausedRef,
        startTimer
    ]);
    $iTyic$react.useEffect(()=>{
        onToastAdd();
        return ()=>onToastRemove()
        ;
    }, [
        onToastAdd,
        onToastRemove
    ]);
    const announceTextContent = $iTyic$react.useMemo(()=>{
        return node1 ? $9208a85b3e79d33f$var$getAnnounceTextContent(node1) : null;
    }, [
        node1
    ]);
    if (!context.viewport) return null;
    return /*#__PURE__*/ $iTyic$react.createElement($iTyic$react.Fragment, null, announceTextContent && /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$ToastAnnounce, {
        __scopeToast: __scopeToast // Toasts are always role=status to avoid stuttering issues with role=alert in SRs.
        ,
        role: "status",
        "aria-live": type === 'foreground' ? 'assertive' : 'polite',
        "aria-atomic": true
    }, announceTextContent), /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$ToastInteractiveProvider, {
        scope: __scopeToast,
        onClose: handleClose
    }, /*#__PURE__*/ $iTyic$reactdom.createPortal(/*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$Collection.ItemSlot, {
        scope: __scopeToast
    }, /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactdismissablelayer.Root, {
        asChild: true,
        onEscapeKeyDown: $iTyic$radixuiprimitive.composeEventHandlers(onEscapeKeyDown, ()=>{
            if (!context.isFocusedToastEscapeKeyDownRef.current) handleClose();
            context.isFocusedToastEscapeKeyDownRef.current = false;
        })
    }, /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactprimitive.Primitive.li, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({
        // Ensure toasts are announced as status list or status when focused
        role: "status",
        "aria-live": "off",
        "aria-atomic": true,
        tabIndex: 0,
        "data-state": open ? 'open' : 'closed',
        "data-swipe-direction": context.swipeDirection
    }, toastProps, {
        ref: composedRefs,
        style: {
            userSelect: 'none',
            touchAction: 'none',
            ...props.style
        },
        onKeyDown: $iTyic$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
            if (event.key !== 'Escape') return;
            onEscapeKeyDown === null || onEscapeKeyDown === void 0 || onEscapeKeyDown(event.nativeEvent);
            if (!event.nativeEvent.defaultPrevented) {
                context.isFocusedToastEscapeKeyDownRef.current = true;
                handleClose();
            }
        }),
        onPointerDown: $iTyic$radixuiprimitive.composeEventHandlers(props.onPointerDown, (event)=>{
            if (event.button !== 0) return;
            pointerStartRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        }),
        onPointerMove: $iTyic$radixuiprimitive.composeEventHandlers(props.onPointerMove, (event)=>{
            if (!pointerStartRef.current) return;
            const x = event.clientX - pointerStartRef.current.x;
            const y = event.clientY - pointerStartRef.current.y;
            const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
            const isHorizontalSwipe = [
                'left',
                'right'
            ].includes(context.swipeDirection);
            const clamp = [
                'left',
                'up'
            ].includes(context.swipeDirection) ? Math.min : Math.max;
            const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
            const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
            const moveStartBuffer = event.pointerType === 'touch' ? 10 : 2;
            const delta = {
                x: clampedX,
                y: clampedY
            };
            const eventDetail = {
                originalEvent: event,
                delta: delta
            };
            if (hasSwipeMoveStarted) {
                swipeDeltaRef.current = delta;
                $9208a85b3e79d33f$var$handleAndDispatchCustomEvent($9208a85b3e79d33f$var$TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                    discrete: false
                });
            } else if ($9208a85b3e79d33f$var$isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                swipeDeltaRef.current = delta;
                $9208a85b3e79d33f$var$handleAndDispatchCustomEvent($9208a85b3e79d33f$var$TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                    discrete: false
                });
                event.target.setPointerCapture(event.pointerId);
            } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) // User is swiping in wrong direction so we disable swipe gesture
            // for the current pointer down interaction
            pointerStartRef.current = null;
        }),
        onPointerUp: $iTyic$radixuiprimitive.composeEventHandlers(props.onPointerUp, (event1)=>{
            const delta = swipeDeltaRef.current;
            const target = event1.target;
            if (target.hasPointerCapture(event1.pointerId)) target.releasePointerCapture(event1.pointerId);
            swipeDeltaRef.current = null;
            pointerStartRef.current = null;
            if (delta) {
                const toast = event1.currentTarget;
                const eventDetail = {
                    originalEvent: event1,
                    delta: delta
                };
                if ($9208a85b3e79d33f$var$isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) $9208a85b3e79d33f$var$handleAndDispatchCustomEvent($9208a85b3e79d33f$var$TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                    discrete: true
                });
                else $9208a85b3e79d33f$var$handleAndDispatchCustomEvent($9208a85b3e79d33f$var$TOAST_SWIPE_CANCEL, onSwipeCancel, eventDetail, {
                    discrete: true
                });
                 // Prevent click event from triggering on items within the toast when
                // pointer up is part of a swipe gesture
                toast.addEventListener('click', (event)=>event.preventDefault()
                , {
                    once: true
                });
            }
        })
    })))), context.viewport)));
});
$9208a85b3e79d33f$var$ToastImpl.propTypes = {
    type (props) {
        if (props.type && ![
            'foreground',
            'background'
        ].includes(props.type)) {
            const error = `Invalid prop \`type\` supplied to \`${$9208a85b3e79d33f$var$TOAST_NAME}\`. Expected \`foreground | background\`.`;
            return new Error(error);
        }
        return null;
    }
};
/* -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$ToastAnnounce = (props)=>{
    const { __scopeToast: __scopeToast , children: children , ...announceProps } = props;
    const context = $9208a85b3e79d33f$var$useToastProviderContext($9208a85b3e79d33f$var$TOAST_NAME, __scopeToast);
    const [renderAnnounceText, setRenderAnnounceText] = $iTyic$react.useState(false);
    const [isAnnounced, setIsAnnounced] = $iTyic$react.useState(false); // render text content in the next frame to ensure toast is announced in NVDA
    $9208a85b3e79d33f$var$useNextFrame(()=>setRenderAnnounceText(true)
    ); // cleanup after announcing
    $iTyic$react.useEffect(()=>{
        const timer = window.setTimeout(()=>setIsAnnounced(true)
        , 1000);
        return ()=>window.clearTimeout(timer)
        ;
    }, []);
    return isAnnounced ? null : /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactportal.Portal, {
        asChild: true
    }, /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactvisuallyhidden.VisuallyHidden, announceProps, renderAnnounceText && /*#__PURE__*/ $iTyic$react.createElement($iTyic$react.Fragment, null, context.label, " ", children)));
};
/* -------------------------------------------------------------------------------------------------
 * ToastTitle
 * -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$TITLE_NAME = 'ToastTitle';
const $9208a85b3e79d33f$export$16d42d7c29b95a4 = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { __scopeToast: __scopeToast , ...titleProps } = props;
    return /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({}, titleProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$export$16d42d7c29b95a4, {
    displayName: $9208a85b3e79d33f$var$TITLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ToastDescription
 * -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$DESCRIPTION_NAME = 'ToastDescription';
const $9208a85b3e79d33f$export$ecddd96c53621d9a = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { __scopeToast: __scopeToast , ...descriptionProps } = props;
    return /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({}, descriptionProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$export$ecddd96c53621d9a, {
    displayName: $9208a85b3e79d33f$var$DESCRIPTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ToastAction
 * -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$ACTION_NAME = 'ToastAction';
const $9208a85b3e79d33f$export$3019feecfda683d2 = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { altText: altText , ...actionProps } = props;
    if (!altText) return null;
    return /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$ToastAnnounceExclude, {
        altText: altText,
        asChild: true
    }, /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$export$811e70f61c205839, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({}, actionProps, {
        ref: forwardedRef
    })));
});
$9208a85b3e79d33f$export$3019feecfda683d2.propTypes = {
    altText (props) {
        if (!props.altText) return new Error(`Missing prop \`altText\` expected on \`${$9208a85b3e79d33f$var$ACTION_NAME}\``);
        return null;
    }
};
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$export$3019feecfda683d2, {
    displayName: $9208a85b3e79d33f$var$ACTION_NAME
});
/* -------------------------------------------------------------------------------------------------
 * ToastClose
 * -----------------------------------------------------------------------------------------------*/ const $9208a85b3e79d33f$var$CLOSE_NAME = 'ToastClose';
const $9208a85b3e79d33f$export$811e70f61c205839 = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { __scopeToast: __scopeToast , ...closeProps } = props;
    const interactiveContext = $9208a85b3e79d33f$var$useToastInteractiveContext($9208a85b3e79d33f$var$CLOSE_NAME, __scopeToast);
    return /*#__PURE__*/ $iTyic$react.createElement($9208a85b3e79d33f$var$ToastAnnounceExclude, {
        asChild: true
    }, /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({
        type: "button"
    }, closeProps, {
        ref: forwardedRef,
        onClick: $iTyic$radixuiprimitive.composeEventHandlers(props.onClick, interactiveContext.onClose)
    })));
});
/*#__PURE__*/ Object.assign($9208a85b3e79d33f$export$811e70f61c205839, {
    displayName: $9208a85b3e79d33f$var$CLOSE_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $9208a85b3e79d33f$var$ToastAnnounceExclude = /*#__PURE__*/ $iTyic$react.forwardRef((props, forwardedRef)=>{
    const { __scopeToast: __scopeToast , altText: altText , ...announceExcludeProps } = props;
    return /*#__PURE__*/ $iTyic$react.createElement($iTyic$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($iTyic$babelruntimehelpersextends))({
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": altText || undefined
    }, announceExcludeProps, {
        ref: forwardedRef
    }));
});
function $9208a85b3e79d33f$var$getAnnounceTextContent(container) {
    const textContent = [];
    const childNodes = Array.from(container.childNodes);
    childNodes.forEach((node)=>{
        if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
        if ($9208a85b3e79d33f$var$isHTMLElement(node)) {
            const isHidden = node.ariaHidden || node.hidden || node.style.display === 'none';
            const isExcluded = node.dataset.radixToastAnnounceExclude === '';
            if (!isHidden) {
                if (isExcluded) {
                    const altText = node.dataset.radixToastAnnounceAlt;
                    if (altText) textContent.push(altText);
                } else textContent.push(...$9208a85b3e79d33f$var$getAnnounceTextContent(node));
            }
        }
    }); // We return a collection of text rather than a single concatenated string.
    // This allows SR VO to naturally pause break between nodes while announcing.
    return textContent;
}
/* ---------------------------------------------------------------------------------------------- */ function $9208a85b3e79d33f$var$handleAndDispatchCustomEvent(name, handler, detail, { discrete: discrete  }) {
    const currentTarget = detail.originalEvent.currentTarget;
    const event = new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        detail: detail
    });
    if (handler) currentTarget.addEventListener(name, handler, {
        once: true
    });
    if (discrete) $iTyic$radixuireactprimitive.dispatchDiscreteCustomEvent(currentTarget, event);
    else currentTarget.dispatchEvent(event);
}
const $9208a85b3e79d33f$var$isDeltaInDirection = (delta, direction, threshold = 0)=>{
    const deltaX = Math.abs(delta.x);
    const deltaY = Math.abs(delta.y);
    const isDeltaX = deltaX > deltaY;
    if (direction === 'left' || direction === 'right') return isDeltaX && deltaX > threshold;
    else return !isDeltaX && deltaY > threshold;
};
function $9208a85b3e79d33f$var$useNextFrame(callback = ()=>{}) {
    const fn = $iTyic$radixuireactusecallbackref.useCallbackRef(callback);
    $iTyic$radixuireactuselayouteffect.useLayoutEffect(()=>{
        let raf1 = 0;
        let raf2 = 0;
        raf1 = window.requestAnimationFrame(()=>raf2 = window.requestAnimationFrame(fn)
        );
        return ()=>{
            window.cancelAnimationFrame(raf1);
            window.cancelAnimationFrame(raf2);
        };
    }, [
        fn
    ]);
}
function $9208a85b3e79d33f$var$isHTMLElement(node) {
    return node.nodeType === node.ELEMENT_NODE;
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
 */ function $9208a85b3e79d33f$var$getTabbableCandidates(container) {
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
function $9208a85b3e79d33f$var$focusFirst(candidates) {
    const previouslyFocusedElement = document.activeElement;
    return candidates.some((candidate)=>{
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === previouslyFocusedElement) return true;
        candidate.focus();
        return document.activeElement !== previouslyFocusedElement;
    });
}
const $9208a85b3e79d33f$export$2881499e37b75b9a = $9208a85b3e79d33f$export$f5d03d415824e0e;
const $9208a85b3e79d33f$export$d5c6c08dc2d3ca7 = $9208a85b3e79d33f$export$6192c2425ecfd989;
const $9208a85b3e79d33f$export$be92b6f5f03c0fe9 = $9208a85b3e79d33f$export$8d8dc7d5f743331b;
const $9208a85b3e79d33f$export$f99233281efd08a0 = $9208a85b3e79d33f$export$16d42d7c29b95a4;
const $9208a85b3e79d33f$export$393edc798c47379d = $9208a85b3e79d33f$export$ecddd96c53621d9a;
const $9208a85b3e79d33f$export$e19cd5f9376f8cee = $9208a85b3e79d33f$export$3019feecfda683d2;
const $9208a85b3e79d33f$export$f39c2d165cd861fe = $9208a85b3e79d33f$export$811e70f61c205839;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 86518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $92muK$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useCallbackRef", () => $28e03942f763e819$export$25bec8c6f54ee79a);

/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */ function $28e03942f763e819$export$25bec8c6f54ee79a(callback) {
    const callbackRef = $92muK$react.useRef(callback);
    $92muK$react.useEffect(()=>{
        callbackRef.current = callback;
    }); // https://github.com/facebook/react/issues/19240
    return $92muK$react.useMemo(()=>(...args)=>{
            var _callbackRef$current;
            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);
        }
    , []);
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 69808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ijazI$react = __webpack_require__(18038);
var $ijazI$radixuireactusecallbackref = __webpack_require__(86518);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useControllableState", () => $b84d42d44371bff7$export$6f32135080cb4c3);


function $b84d42d44371bff7$export$6f32135080cb4c3({ prop: prop , defaultProp: defaultProp , onChange: onChange = ()=>{}  }) {
    const [uncontrolledProp, setUncontrolledProp] = $b84d42d44371bff7$var$useUncontrolledState({
        defaultProp: defaultProp,
        onChange: onChange
    });
    const isControlled = prop !== undefined;
    const value1 = isControlled ? prop : uncontrolledProp;
    const handleChange = $ijazI$radixuireactusecallbackref.useCallbackRef(onChange);
    const setValue = $ijazI$react.useCallback((nextValue)=>{
        if (isControlled) {
            const setter = nextValue;
            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
            if (value !== prop) handleChange(value);
        } else setUncontrolledProp(nextValue);
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value1,
        setValue
    ];
}
function $b84d42d44371bff7$var$useUncontrolledState({ defaultProp: defaultProp , onChange: onChange  }) {
    const uncontrolledState = $ijazI$react.useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = $ijazI$react.useRef(value);
    const handleChange = $ijazI$radixuireactusecallbackref.useCallbackRef(onChange);
    $ijazI$react.useEffect(()=>{
        if (prevValueRef.current !== value) {
            handleChange(value);
            prevValueRef.current = value;
        }
    }, [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 40709:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $b0gz3$react = __webpack_require__(18038);
var $b0gz3$radixuireactusecallbackref = __webpack_require__(86518);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useEscapeKeydown", () => $24c84e9f83c4454f$export$3a72a57244d6e765);


/**
 * Listens for when the escape key is down
 */ function $24c84e9f83c4454f$export$3a72a57244d6e765(onEscapeKeyDownProp, ownerDocument = globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) {
    const onEscapeKeyDown = $b0gz3$radixuireactusecallbackref.useCallbackRef(onEscapeKeyDownProp);
    $b0gz3$react.useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'Escape') onEscapeKeyDown(event);
        };
        ownerDocument.addEventListener('keydown', handleKeyDown);
        return ()=>ownerDocument.removeEventListener('keydown', handleKeyDown)
        ;
    }, [
        onEscapeKeyDown,
        ownerDocument
    ]);
}




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 41572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $caHyQ$react = __webpack_require__(18038);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useLayoutEffect", () => $ca21affb0542a8a4$export$e5c5a5f917a5871c);

/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */ const $ca21affb0542a8a4$export$e5c5a5f917a5871c = Boolean(globalThis === null || globalThis === void 0 ? void 0 : globalThis.document) ? $caHyQ$react.useLayoutEffect : ()=>{};




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 55355:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $awrN2$babelruntimehelpersextends = __webpack_require__(36305);
var $awrN2$react = __webpack_require__(18038);
var $awrN2$radixuireactprimitive = __webpack_require__(49140);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "VisuallyHidden", () => $685371e9c20848e2$export$439d29a4e110a164);
$parcel$export(module.exports, "Root", () => $685371e9c20848e2$export$be92b6f5f03c0fe9);



/* -------------------------------------------------------------------------------------------------
 * VisuallyHidden
 * -----------------------------------------------------------------------------------------------*/ const $685371e9c20848e2$var$NAME = 'VisuallyHidden';
const $685371e9c20848e2$export$439d29a4e110a164 = /*#__PURE__*/ $awrN2$react.forwardRef((props, forwardedRef)=>{
    return /*#__PURE__*/ $awrN2$react.createElement($awrN2$radixuireactprimitive.Primitive.span, ($parcel$interopDefault($awrN2$babelruntimehelpersextends))({}, props, {
        ref: forwardedRef,
        style: {
            // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
            position: 'absolute',
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            wordWrap: 'normal',
            ...props.style
        }
    }));
});
/*#__PURE__*/ Object.assign($685371e9c20848e2$export$439d29a4e110a164, {
    displayName: $685371e9c20848e2$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $685371e9c20848e2$export$be92b6f5f03c0fe9 = $685371e9c20848e2$export$439d29a4e110a164;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 87344:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _asyncToGenerator;
    }
}));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


/***/ }),

/***/ 39827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _extends;
    }
}));
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 28868:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 85460:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireWildcard;
    }
}));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}


/***/ }),

/***/ 21987:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 61911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// src/react.tsx


// src/queue.ts
var initQueue = () => {
  if (window.va)
    return;
  window.va = function a(...params) {
    (window.vaq = window.vaq || []).push(params);
  };
};

// src/utils.ts
function isBrowser() {
  return typeof window !== "undefined";
}
function isDevelopment() {
  if (typeof process === "undefined")
    return false;
  return  false || "production" === "test";
}

// src/generic.ts
var inject = ({ beforeSend, debug } = { debug: isDevelopment() }) => {
  var _a;
  if (!isBrowser())
    return;
  initQueue();
  if (beforeSend) {
    (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", beforeSend);
  }
  const src = isDevelopment() ? "https://cdn.vercel-insights.com/v1/script.debug.js" : "/_vercel/insights/script.js";
  if (document.head.querySelector(`script[src*="${src}"]`))
    return;
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  if (isDevelopment() && debug === false) {
    script.setAttribute("data-debug", "false");
  }
  document.head.appendChild(script);
};

// src/react.tsx
function Analytics({
  beforeSend,
  debug = isDevelopment()
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    inject({ beforeSend, debug });
  }, [beforeSend, debug]);
  return null;
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 51956:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.j = __webpack_unused_export__ = void 0;
const falsyToString = (value)=>typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = function() // @ts-ignore
{
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.flat(Infinity).filter(Boolean).join(" ");
};
__webpack_unused_export__ = cx;
const cva = (base, config)=>{
    return (props)=>{
        var ref;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants , defaultVariants  } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1)=>{
            let { class: cvClass , className: cvClassName , ...compoundVariantOptions } = param1;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
};
exports.j = cva;


//# sourceMappingURL=index.cjs.js.map

/***/ }),

/***/ 16547:
/***/ ((module) => {

function e(r){var o,t,f="";if("string"==typeof r||"number"==typeof r)f+=r;else if("object"==typeof r)if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(f&&(f+=" "),f+=t);else for(o in r)r[o]&&(f&&(f+=" "),f+=o);return f}function r(){for(var r,o,t=0,f="";t<arguments.length;)(r=arguments[t++])&&(o=e(r))&&(f&&(f+=" "),f+=o);return f}module.exports=r,module.exports.clsx=r;

/***/ }),

/***/ 79411:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/**
 * lucide-react v0.92.0 - ISC
 */



__webpack_unused_export__ = ({ value: true });

var react = __webpack_require__(18038);
var PropTypes = __webpack_require__(48103);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var defaultAttributes = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

var _excluded = ["color", "size", "strokeWidth", "children"];
/**
 * Converts string to KebabCase
 * Copied from scripts/helper. If anyone knows how to properly import it here
 * then please fix it.
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */

var toKebabCase = function toKebabCase(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
var createReactComponent = (function (iconName, iconNode) {
  var Component = react.forwardRef(function (_ref, ref) {
    var _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'currentColor' : _ref$color,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 24 : _ref$size,
        _ref$strokeWidth = _ref.strokeWidth,
        strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
        children = _ref.children,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

    return react.createElement('svg', _extends({
      ref: ref
    }, defaultAttributes, {
      width: size,
      height: size,
      stroke: color,
      strokeWidth: strokeWidth,
      className: "lucide lucide-" + toKebabCase(iconName)
    }, rest), [].concat(iconNode.map(function (_ref2) {
      var tag = _ref2[0],
          attrs = _ref2[1];
      return react.createElement(tag, attrs);
    }), children || []));
  });
  Component.propTypes = {
    color: PropTypes__default["default"].string,
    size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
    strokeWidth: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
  };
  Component.displayName = "" + iconName;
  return Component;
});

var Accessibility = createReactComponent('Accessibility', [['circle', {
  cx: '16',
  cy: '4',
  r: '1',
  key: '1grugj'
}], ['path', {
  d: 'm18 19 1-7-5.87.94',
  key: '16gztd'
}], ['path', {
  d: 'm5 8 3-3 5.5 3-2.21 3.1',
  key: '133gd0'
}], ['path', {
  d: 'M4.24 14.48c-.19.58-.27 1.2-.23 1.84a5 5 0 0 0 5.31 4.67c.65-.04 1.25-.2 1.8-.46',
  key: '12oo9p'
}], ['path', {
  d: 'M13.76 17.52c.19-.58.27-1.2.23-1.84a5 5 0 0 0-5.31-4.67c-.65.04-1.25.2-1.8.46',
  key: '15si8q'
}]]);
var Accessibility$1 = Accessibility;

var Activity = createReactComponent('Activity', [['polyline', {
  points: '22 12 18 12 15 21 9 3 6 12 2 12',
  key: 'xez52g'
}]]);
var Activity$1 = Activity;

var AirVent = createReactComponent('AirVent', [['path', {
  d: 'M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2',
  key: 'larmp2'
}], ['path', {
  d: 'M6 8h12',
  key: '6g4wlu'
}], ['path', {
  d: 'M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12',
  key: '1bo8pg'
}], ['path', {
  d: 'M6.6 15.6A2 2 0 1 0 10 17v-5',
  key: 't9h90c'
}]]);
var AirVent$1 = AirVent;

var Airplay = createReactComponent('Airplay', [['path', {
  d: 'M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1',
  key: 'ns4c3b'
}], ['polygon', {
  points: '12 15 17 21 7 21 12 15',
  key: '1sy95i'
}]]);
var Airplay$1 = Airplay;

var AlarmCheck = createReactComponent('AlarmCheck', [['path', {
  d: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  key: '1dr9l2'
}], ['path', {
  d: 'M5 3 2 6',
  key: '18tl5t'
}], ['path', {
  d: 'm22 6-3-3',
  key: '1opdir'
}], ['path', {
  d: 'm6 19-2 2',
  key: '1ek6nb'
}], ['path', {
  d: 'm18 19 2 2',
  key: 'lw9i'
}], ['path', {
  d: 'm9 13 2 2 4-4',
  key: '6343dt'
}]]);
var AlarmCheck$1 = AlarmCheck;

var AlarmClockOff = createReactComponent('AlarmClockOff', [['path', {
  d: 'M6.87 6.87a8 8 0 1 0 11.26 11.26',
  key: '3on8tj'
}], ['path', {
  d: 'M19.9 14.25A7.44 7.44 0 0 0 20 13a8 8 0 0 0-8-8 7.44 7.44 0 0 0-1.25.1',
  key: 'nxzvge'
}], ['path', {
  d: 'm22 6-3-3',
  key: '1opdir'
}], ['path', {
  d: 'm6 19-2 2',
  key: '1ek6nb'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}], ['path', {
  d: 'M4 4 2 6',
  key: '1ycko6'
}]]);
var AlarmClockOff$1 = AlarmClockOff;

var AlarmClock = createReactComponent('AlarmClock', [['circle', {
  cx: '12',
  cy: '13',
  r: '8',
  key: '3y4lt7'
}], ['path', {
  d: 'M12 9v4l2 2',
  key: '1c63tq'
}], ['path', {
  d: 'M5 3 2 6',
  key: '18tl5t'
}], ['path', {
  d: 'm22 6-3-3',
  key: '1opdir'
}], ['path', {
  d: 'm6 19-2 2',
  key: '1ek6nb'
}], ['path', {
  d: 'm18 19 2 2',
  key: 'lw9i'
}]]);
var AlarmClock$1 = AlarmClock;

var AlarmMinus = createReactComponent('AlarmMinus', [['path', {
  d: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  key: '1dr9l2'
}], ['path', {
  d: 'M5 3 2 6',
  key: '18tl5t'
}], ['path', {
  d: 'm22 6-3-3',
  key: '1opdir'
}], ['path', {
  d: 'm6 19-2 2',
  key: '1ek6nb'
}], ['path', {
  d: 'm18 19 2 2',
  key: 'lw9i'
}], ['path', {
  d: 'M9 13h6',
  key: '1uhe8q'
}]]);
var AlarmMinus$1 = AlarmMinus;

var AlarmPlus = createReactComponent('AlarmPlus', [['path', {
  d: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  key: '1dr9l2'
}], ['path', {
  d: 'M5 3 2 6',
  key: '18tl5t'
}], ['path', {
  d: 'm22 6-3-3',
  key: '1opdir'
}], ['path', {
  d: 'm6 19-2 2',
  key: '1ek6nb'
}], ['path', {
  d: 'm18 19 2 2',
  key: 'lw9i'
}], ['path', {
  d: 'M12 10v6',
  key: '1bos4e'
}], ['path', {
  d: 'M9 13h6',
  key: '1uhe8q'
}]]);
var AlarmPlus$1 = AlarmPlus;

var Album = createReactComponent('Album', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['polyline', {
  points: '11 3 11 11 14 8 17 11 17 3',
  key: '1wcwz3'
}]]);
var Album$1 = Album;

var AlertCircle = createReactComponent('AlertCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '12',
  key: '1grbh0'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12.01',
  y2: '16',
  key: '1w440g'
}]]);
var AlertCircle$1 = AlertCircle;

var AlertOctagon = createReactComponent('AlertOctagon', [['polygon', {
  points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2',
  key: 'h1p8hx'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '12',
  key: '1grbh0'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12.01',
  y2: '16',
  key: '1w440g'
}]]);
var AlertOctagon$1 = AlertOctagon;

var AlertTriangle = createReactComponent('AlertTriangle', [['path', {
  d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z',
  key: 'c3ski4'
}], ['line', {
  x1: '12',
  y1: '9',
  x2: '12',
  y2: '13',
  key: 'mb7vjk'
}], ['line', {
  x1: '12',
  y1: '17',
  x2: '12.01',
  y2: '17',
  key: 'kdstpg'
}]]);
var AlertTriangle$1 = AlertTriangle;

var AlignCenterHorizontal = createReactComponent('AlignCenterHorizontal', [['path', {
  d: 'M2 12h20',
  key: '9i4pu4'
}], ['path', {
  d: 'M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4',
  key: '11f1s0'
}], ['path', {
  d: 'M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4',
  key: 't14dx9'
}], ['path', {
  d: 'M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1',
  key: '1w07xs'
}], ['path', {
  d: 'M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1',
  key: '1apec2'
}]]);
var AlignCenterHorizontal$1 = AlignCenterHorizontal;

var AlignCenterVertical = createReactComponent('AlignCenterVertical', [['path', {
  d: 'M12 2v20',
  key: 't6zp3m'
}], ['path', {
  d: 'M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4',
  key: '14d6g8'
}], ['path', {
  d: 'M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4',
  key: '1e2lrw'
}], ['path', {
  d: 'M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1',
  key: '1fkdwx'
}], ['path', {
  d: 'M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1',
  key: '1euafb'
}]]);
var AlignCenterVertical$1 = AlignCenterVertical;

var AlignCenter = createReactComponent('AlignCenter', [['line', {
  x1: '21',
  y1: '6',
  x2: '3',
  y2: '6',
  key: '1e448z'
}], ['line', {
  x1: '17',
  y1: '12',
  x2: '7',
  y2: '12',
  key: 'driibe'
}], ['line', {
  x1: '19',
  y1: '18',
  x2: '5',
  y2: '18',
  key: '1i3xdx'
}]]);
var AlignCenter$1 = AlignCenter;

var AlignEndHorizontal = createReactComponent('AlignEndHorizontal', [['rect', {
  x: '4',
  y: '2',
  width: '6',
  height: '16',
  rx: '2',
  key: 'xp5u6c'
}], ['rect', {
  x: '14',
  y: '9',
  width: '6',
  height: '9',
  rx: '2',
  key: '1e039c'
}], ['path', {
  d: 'M22 22H2',
  key: '19qnx5'
}]]);
var AlignEndHorizontal$1 = AlignEndHorizontal;

var AlignEndVertical = createReactComponent('AlignEndVertical', [['rect', {
  x: '2',
  y: '4',
  width: '16',
  height: '6',
  rx: '2',
  key: '1j7b8s'
}], ['rect', {
  x: '9',
  y: '14',
  width: '9',
  height: '6',
  rx: '2',
  key: 'b2t4yo'
}], ['path', {
  d: 'M22 22V2',
  key: '12ipfv'
}]]);
var AlignEndVertical$1 = AlignEndVertical;

var AlignHorizontalDistributeCenter = createReactComponent('AlignHorizontalDistributeCenter', [['rect', {
  x: '4',
  y: '5',
  width: '6',
  height: '14',
  rx: '2',
  key: 'ric6yp'
}], ['rect', {
  x: '14',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '1mr5t1'
}], ['path', {
  d: 'M17 22v-5',
  key: '4b6g73'
}], ['path', {
  d: 'M17 7V2',
  key: 'hnrr36'
}], ['path', {
  d: 'M7 22v-3',
  key: '1r4jpn'
}], ['path', {
  d: 'M7 5V2',
  key: 'liy1u9'
}]]);
var AlignHorizontalDistributeCenter$1 = AlignHorizontalDistributeCenter;

var AlignHorizontalDistributeEnd = createReactComponent('AlignHorizontalDistributeEnd', [['rect', {
  x: '4',
  y: '5',
  width: '6',
  height: '14',
  rx: '2',
  key: 'ric6yp'
}], ['rect', {
  x: '14',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '1mr5t1'
}], ['path', {
  d: 'M10 2v20',
  key: 'uyc634'
}], ['path', {
  d: 'M20 2v20',
  key: '1tx262'
}]]);
var AlignHorizontalDistributeEnd$1 = AlignHorizontalDistributeEnd;

var AlignHorizontalDistributeStart = createReactComponent('AlignHorizontalDistributeStart', [['rect', {
  x: '4',
  y: '5',
  width: '6',
  height: '14',
  rx: '2',
  key: 'ric6yp'
}], ['rect', {
  x: '14',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '1mr5t1'
}], ['path', {
  d: 'M4 2v20',
  key: 'gtpd5x'
}], ['path', {
  d: 'M14 2v20',
  key: 'tg6bpw'
}]]);
var AlignHorizontalDistributeStart$1 = AlignHorizontalDistributeStart;

var AlignHorizontalJustifyCenter = createReactComponent('AlignHorizontalJustifyCenter', [['rect', {
  x: '2',
  y: '5',
  width: '6',
  height: '14',
  rx: '2',
  key: '15angl'
}], ['rect', {
  x: '16',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '1di99g'
}], ['path', {
  d: 'M12 2v20',
  key: 't6zp3m'
}]]);
var AlignHorizontalJustifyCenter$1 = AlignHorizontalJustifyCenter;

var AlignHorizontalJustifyEnd = createReactComponent('AlignHorizontalJustifyEnd', [['rect', {
  x: '2',
  y: '5',
  width: '6',
  height: '14',
  rx: '2',
  key: '15angl'
}], ['rect', {
  x: '12',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '150rwc'
}], ['path', {
  d: 'M22 2v20',
  key: '40qfg1'
}]]);
var AlignHorizontalJustifyEnd$1 = AlignHorizontalJustifyEnd;

var AlignHorizontalJustifyStart = createReactComponent('AlignHorizontalJustifyStart', [['rect', {
  x: '6',
  y: '5',
  width: '6',
  height: '14',
  rx: '2',
  key: '1mezge'
}], ['rect', {
  x: '16',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '1di99g'
}], ['path', {
  d: 'M2 2v20',
  key: '1ivd8o'
}]]);
var AlignHorizontalJustifyStart$1 = AlignHorizontalJustifyStart;

var AlignHorizontalSpaceAround = createReactComponent('AlignHorizontalSpaceAround', [['rect', {
  x: '9',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '7k3bt6'
}], ['path', {
  d: 'M4 22V2',
  key: 'tsjzd3'
}], ['path', {
  d: 'M20 22V2',
  key: '1bnhr8'
}]]);
var AlignHorizontalSpaceAround$1 = AlignHorizontalSpaceAround;

var AlignHorizontalSpaceBetween = createReactComponent('AlignHorizontalSpaceBetween', [['rect', {
  x: '3',
  y: '5',
  width: '6',
  height: '14',
  rx: '2',
  key: 'iybqme'
}], ['rect', {
  x: '15',
  y: '7',
  width: '6',
  height: '10',
  rx: '2',
  key: '11q98m'
}], ['path', {
  d: 'M3 2v20',
  key: '1d2pfg'
}], ['path', {
  d: 'M21 2v20',
  key: 'p059bm'
}]]);
var AlignHorizontalSpaceBetween$1 = AlignHorizontalSpaceBetween;

var AlignJustify = createReactComponent('AlignJustify', [['line', {
  x1: '3',
  y1: '6',
  x2: '21',
  y2: '6',
  key: '1tp2lp'
}], ['line', {
  x1: '3',
  y1: '12',
  x2: '21',
  y2: '12',
  key: '1aui40'
}], ['line', {
  x1: '3',
  y1: '18',
  x2: '21',
  y2: '18',
  key: '1sxo76'
}]]);
var AlignJustify$1 = AlignJustify;

var AlignLeft = createReactComponent('AlignLeft', [['line', {
  x1: '21',
  y1: '6',
  x2: '3',
  y2: '6',
  key: '1e448z'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '3',
  y2: '12',
  key: '80e4vw'
}], ['line', {
  x1: '17',
  y1: '18',
  x2: '3',
  y2: '18',
  key: '1771gn'
}]]);
var AlignLeft$1 = AlignLeft;

var AlignRight = createReactComponent('AlignRight', [['line', {
  x1: '21',
  y1: '6',
  x2: '3',
  y2: '6',
  key: '1e448z'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '9',
  y2: '12',
  key: '1stwgr'
}], ['line', {
  x1: '21',
  y1: '18',
  x2: '7',
  y2: '18',
  key: '1hion3'
}]]);
var AlignRight$1 = AlignRight;

var AlignStartHorizontal = createReactComponent('AlignStartHorizontal', [['rect', {
  x: '4',
  y: '6',
  width: '6',
  height: '16',
  rx: '2',
  key: '1l8oni'
}], ['rect', {
  x: '14',
  y: '6',
  width: '6',
  height: '9',
  rx: '2',
  key: '16r6cq'
}], ['path', {
  d: 'M22 2H2',
  key: 'fhrpnj'
}]]);
var AlignStartHorizontal$1 = AlignStartHorizontal;

var AlignStartVertical = createReactComponent('AlignStartVertical', [['rect', {
  x: '6',
  y: '14',
  width: '9',
  height: '6',
  rx: '2',
  key: 'pvftf3'
}], ['rect', {
  x: '6',
  y: '4',
  width: '16',
  height: '6',
  rx: '2',
  key: '1aj6m8'
}], ['path', {
  d: 'M2 2v20',
  key: '1ivd8o'
}]]);
var AlignStartVertical$1 = AlignStartVertical;

var AlignVerticalDistributeCenter = createReactComponent('AlignVerticalDistributeCenter', [['rect', {
  x: '5',
  y: '14',
  width: '14',
  height: '6',
  rx: '2',
  key: '1qrzuf'
}], ['rect', {
  x: '7',
  y: '4',
  width: '10',
  height: '6',
  rx: '2',
  key: 'we8e9z'
}], ['path', {
  d: 'M22 7h-5',
  key: 'o2endc'
}], ['path', {
  d: 'M7 7H1',
  key: '105l6j'
}], ['path', {
  d: 'M22 17h-3',
  key: '1lwga1'
}], ['path', {
  d: 'M5 17H2',
  key: '1gx9xc'
}]]);
var AlignVerticalDistributeCenter$1 = AlignVerticalDistributeCenter;

var AlignVerticalDistributeEnd = createReactComponent('AlignVerticalDistributeEnd', [['rect', {
  x: '5',
  y: '14',
  width: '14',
  height: '6',
  rx: '2',
  key: '1qrzuf'
}], ['rect', {
  x: '7',
  y: '4',
  width: '10',
  height: '6',
  rx: '2',
  key: 'we8e9z'
}], ['path', {
  d: 'M2 20h20',
  key: 'owomy5'
}], ['path', {
  d: 'M2 10h20',
  key: '1ir3d8'
}]]);
var AlignVerticalDistributeEnd$1 = AlignVerticalDistributeEnd;

var AlignVerticalDistributeStart = createReactComponent('AlignVerticalDistributeStart', [['rect', {
  x: '5',
  y: '14',
  width: '14',
  height: '6',
  rx: '2',
  key: '1qrzuf'
}], ['rect', {
  x: '7',
  y: '4',
  width: '10',
  height: '6',
  rx: '2',
  key: 'we8e9z'
}], ['path', {
  d: 'M2 14h20',
  key: 'myj16y'
}], ['path', {
  d: 'M2 4h20',
  key: 'mda7wb'
}]]);
var AlignVerticalDistributeStart$1 = AlignVerticalDistributeStart;

var AlignVerticalJustifyCenter = createReactComponent('AlignVerticalJustifyCenter', [['rect', {
  x: '5',
  y: '16',
  width: '14',
  height: '6',
  rx: '2',
  key: '1xmr5l'
}], ['rect', {
  x: '7',
  y: '2',
  width: '10',
  height: '6',
  rx: '2',
  key: '1dm79a'
}], ['path', {
  d: 'M2 12h20',
  key: '9i4pu4'
}]]);
var AlignVerticalJustifyCenter$1 = AlignVerticalJustifyCenter;

var AlignVerticalJustifyEnd = createReactComponent('AlignVerticalJustifyEnd', [['rect', {
  x: '5',
  y: '12',
  width: '14',
  height: '6',
  rx: '2',
  key: '12nflp'
}], ['rect', {
  x: '7',
  y: '2',
  width: '10',
  height: '6',
  rx: '2',
  key: '1dm79a'
}], ['path', {
  d: 'M2 22h20',
  key: '272qi7'
}]]);
var AlignVerticalJustifyEnd$1 = AlignVerticalJustifyEnd;

var AlignVerticalJustifyStart = createReactComponent('AlignVerticalJustifyStart', [['rect', {
  x: '5',
  y: '16',
  width: '14',
  height: '6',
  rx: '2',
  key: '1xmr5l'
}], ['rect', {
  x: '7',
  y: '6',
  width: '10',
  height: '6',
  rx: '2',
  key: 'q2ofyd'
}], ['path', {
  d: 'M2 2h20',
  key: '1ennik'
}]]);
var AlignVerticalJustifyStart$1 = AlignVerticalJustifyStart;

var AlignVerticalSpaceAround = createReactComponent('AlignVerticalSpaceAround', [['rect', {
  x: '7',
  y: '9',
  width: '10',
  height: '6',
  rx: '2',
  key: '1iy9tl'
}], ['path', {
  d: 'M22 20H2',
  key: '1p1f7z'
}], ['path', {
  d: 'M22 4H2',
  key: '1b7qnq'
}]]);
var AlignVerticalSpaceAround$1 = AlignVerticalSpaceAround;

var AlignVerticalSpaceBetween = createReactComponent('AlignVerticalSpaceBetween', [['rect', {
  x: '5',
  y: '15',
  width: '14',
  height: '6',
  rx: '2',
  key: 'hytrht'
}], ['rect', {
  x: '7',
  y: '3',
  width: '10',
  height: '6',
  rx: '2',
  key: 'y09b40'
}], ['path', {
  d: 'M2 21h20',
  key: '1nyx9w'
}], ['path', {
  d: 'M2 3h20',
  key: '91anmk'
}]]);
var AlignVerticalSpaceBetween$1 = AlignVerticalSpaceBetween;

var Anchor = createReactComponent('Anchor', [['circle', {
  cx: '12',
  cy: '5',
  r: '3',
  key: 'rqqgnr'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '8',
  key: '111jcv'
}], ['path', {
  d: 'M5 12H2a10 10 0 0 0 20 0h-3',
  key: '1hv3nh'
}]]);
var Anchor$1 = Anchor;

var Angry = createReactComponent('Angry', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M16 16s-1.5-2-4-2-4 2-4 2',
  key: 'epbg0q'
}], ['path', {
  d: 'M7.5 8 10 9',
  key: 'olxxln'
}], ['path', {
  d: 'm14 9 2.5-1',
  key: '1j6cij'
}], ['path', {
  d: 'M9 10h0',
  key: '1vxvly'
}], ['path', {
  d: 'M15 10h0',
  key: '1j6oav'
}]]);
var Angry$1 = Angry;

var Annoyed = createReactComponent('Annoyed', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M8 15h8',
  key: '45n4r'
}], ['path', {
  d: 'M8 9h2',
  key: '1g203m'
}], ['path', {
  d: 'M14 9h2',
  key: '116p9w'
}]]);
var Annoyed$1 = Annoyed;

var Aperture = createReactComponent('Aperture', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '14.31',
  y1: '8',
  x2: '20.05',
  y2: '17.94',
  key: '1oqej7'
}], ['line', {
  x1: '9.69',
  y1: '8',
  x2: '21.17',
  y2: '8',
  key: '1cv19a'
}], ['line', {
  x1: '7.38',
  y1: '12',
  x2: '13.12',
  y2: '2.06',
  key: '1vh5oz'
}], ['line', {
  x1: '9.69',
  y1: '16',
  x2: '3.95',
  y2: '6.06',
  key: 'saeeuz'
}], ['line', {
  x1: '14.31',
  y1: '16',
  x2: '2.83',
  y2: '16',
  key: 'pq85rp'
}], ['line', {
  x1: '16.62',
  y1: '12',
  x2: '10.88',
  y2: '21.94',
  key: 'wactqi'
}]]);
var Aperture$1 = Aperture;

var Apple = createReactComponent('Apple', [['path', {
  d: 'M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z',
  key: '3s7exb'
}], ['path', {
  d: 'M10 2c1 .5 2 2 2 5',
  key: 'fcco2y'
}]]);
var Apple$1 = Apple;

var ArchiveRestore = createReactComponent('ArchiveRestore', [['rect', {
  x: '2',
  y: '4',
  width: '20',
  height: '5',
  rx: '2',
  key: '1h2p0l'
}], ['path', {
  d: 'M12 13v7',
  key: '1arz7h'
}], ['path', {
  d: 'm9 16 3-3 3 3',
  key: '1idcnm'
}], ['path', {
  d: 'M4 9v9a2 2 0 0 0 2 2h2',
  key: 'qxnby6'
}], ['path', {
  d: 'M20 9v9a2 2 0 0 1-2 2h-2',
  key: 'gz3jmx'
}]]);
var ArchiveRestore$1 = ArchiveRestore;

var Archive = createReactComponent('Archive', [['rect', {
  x: '2',
  y: '4',
  width: '20',
  height: '5',
  rx: '2',
  key: '1h2p0l'
}], ['path', {
  d: 'M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9',
  key: 'shkvi4'
}], ['path', {
  d: 'M10 13h4',
  key: 'ytezjc'
}]]);
var Archive$1 = Archive;

var Armchair = createReactComponent('Armchair', [['path', {
  d: 'M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3',
  key: 'irtipd'
}], ['path', {
  d: 'M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z',
  key: '1ed1m0'
}], ['path', {
  d: 'M5 18v2',
  key: 'ppbyun'
}], ['path', {
  d: 'M19 18v2',
  key: 'gy7782'
}]]);
var Armchair$1 = Armchair;

var ArrowBigDown = createReactComponent('ArrowBigDown', [['path', {
  d: 'M9 3h6v11h4l-7 7-7-7h4z',
  key: '6dczpq'
}]]);
var ArrowBigDown$1 = ArrowBigDown;

var ArrowBigLeft = createReactComponent('ArrowBigLeft', [['path', {
  d: 'm3 12 7-7v4h11v6H10v4z',
  key: '1e8ocp'
}]]);
var ArrowBigLeft$1 = ArrowBigLeft;

var ArrowBigRight = createReactComponent('ArrowBigRight', [['path', {
  d: 'm21 12-7-7v4H3v6h11v4z',
  key: '58zwfy'
}]]);
var ArrowBigRight$1 = ArrowBigRight;

var ArrowBigUp = createReactComponent('ArrowBigUp', [['path', {
  d: 'M9 21V10H5l7-7 7 7h-4v11z',
  key: '8tfmm3'
}]]);
var ArrowBigUp$1 = ArrowBigUp;

var ArrowDownCircle = createReactComponent('ArrowDownCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '8 12 12 16 16 12',
  key: '14qdon'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '16',
  key: '55jlg'
}]]);
var ArrowDownCircle$1 = ArrowDownCircle;

var ArrowDownLeft = createReactComponent('ArrowDownLeft', [['line', {
  x1: '17',
  y1: '7',
  x2: '7',
  y2: '17',
  key: '1cuvd1'
}], ['polyline', {
  points: '17 17 7 17 7 7',
  key: 'aq42rd'
}]]);
var ArrowDownLeft$1 = ArrowDownLeft;

var ArrowDownRight = createReactComponent('ArrowDownRight', [['line', {
  x1: '7',
  y1: '7',
  x2: '17',
  y2: '17',
  key: 'dtegzv'
}], ['polyline', {
  points: '17 7 17 17 7 17',
  key: '1gmiis'
}]]);
var ArrowDownRight$1 = ArrowDownRight;

var ArrowDown = createReactComponent('ArrowDown', [['line', {
  x1: '12',
  y1: '5',
  x2: '12',
  y2: '19',
  key: 'myz83a'
}], ['polyline', {
  points: '19 12 12 19 5 12',
  key: '17kmxi'
}]]);
var ArrowDown$1 = ArrowDown;

var ArrowLeftCircle = createReactComponent('ArrowLeftCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 8 8 12 12 16',
  key: 'bz1698'
}], ['line', {
  x1: '16',
  y1: '12',
  x2: '8',
  y2: '12',
  key: 'i2qu8k'
}]]);
var ArrowLeftCircle$1 = ArrowLeftCircle;

var ArrowLeftRight = createReactComponent('ArrowLeftRight', [['polyline', {
  points: '17 11 21 7 17 3',
  key: 'l3l6r3'
}], ['line', {
  x1: '21',
  y1: '7',
  x2: '9',
  y2: '7',
  key: '17x2jj'
}], ['polyline', {
  points: '7 21 3 17 7 13',
  key: 'lfumnw'
}], ['line', {
  x1: '15',
  y1: '17',
  x2: '3',
  y2: '17',
  key: 'gusd5o'
}]]);
var ArrowLeftRight$1 = ArrowLeftRight;

var ArrowLeft = createReactComponent('ArrowLeft', [['line', {
  x1: '19',
  y1: '12',
  x2: '5',
  y2: '12',
  key: '17g05t'
}], ['polyline', {
  points: '12 19 5 12 12 5',
  key: '1ksm0z'
}]]);
var ArrowLeft$1 = ArrowLeft;

var ArrowRightCircle = createReactComponent('ArrowRightCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 16 16 12 12 8',
  key: '1byh5s'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}]]);
var ArrowRightCircle$1 = ArrowRightCircle;

var ArrowRight = createReactComponent('ArrowRight', [['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12',
  key: '1smlys'
}], ['polyline', {
  points: '12 5 19 12 12 19',
  key: 'sfr3i6'
}]]);
var ArrowRight$1 = ArrowRight;

var ArrowUpCircle = createReactComponent('ArrowUpCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '16 12 12 8 8 12',
  key: '1gpmhk'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '8',
  key: 'r2mfdg'
}]]);
var ArrowUpCircle$1 = ArrowUpCircle;

var ArrowUpDown = createReactComponent('ArrowUpDown', [['polyline', {
  points: '11 17 7 21 3 17',
  key: 'dv0ycv'
}], ['line', {
  x1: '7',
  y1: '21',
  x2: '7',
  y2: '9',
  key: '1cxv4h'
}], ['polyline', {
  points: '21 7 17 3 13 7',
  key: '1su31j'
}], ['line', {
  x1: '17',
  y1: '15',
  x2: '17',
  y2: '3',
  key: 'r3527w'
}]]);
var ArrowUpDown$1 = ArrowUpDown;

var ArrowUpLeft = createReactComponent('ArrowUpLeft', [['line', {
  x1: '17',
  y1: '17',
  x2: '7',
  y2: '7',
  key: '814yaz'
}], ['polyline', {
  points: '7 17 7 7 17 7',
  key: '1jae2c'
}]]);
var ArrowUpLeft$1 = ArrowUpLeft;

var ArrowUpRight = createReactComponent('ArrowUpRight', [['line', {
  x1: '7',
  y1: '17',
  x2: '17',
  y2: '7',
  key: '16hgw2'
}], ['polyline', {
  points: '7 7 17 7 17 17',
  key: 'blehsp'
}]]);
var ArrowUpRight$1 = ArrowUpRight;

var ArrowUp = createReactComponent('ArrowUp', [['line', {
  x1: '12',
  y1: '19',
  x2: '12',
  y2: '5',
  key: 'yrd7g6'
}], ['polyline', {
  points: '5 12 12 5 19 12',
  key: '1y7d7k'
}]]);
var ArrowUp$1 = ArrowUp;

var Asterisk = createReactComponent('Asterisk', [['path', {
  d: 'M12 6v12',
  key: '1vza4d'
}], ['path', {
  d: 'M17.196 9 6.804 15',
  key: '1ah31z'
}], ['path', {
  d: 'm6.804 9 10.392 6',
  key: '1b6pxd'
}]]);
var Asterisk$1 = Asterisk;

var AtSign = createReactComponent('AtSign', [['circle', {
  cx: '12',
  cy: '12',
  r: '4',
  key: '4exip2'
}], ['path', {
  d: 'M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94',
  key: '1m6qx5'
}]]);
var AtSign$1 = AtSign;

var Award = createReactComponent('Award', [['circle', {
  cx: '12',
  cy: '8',
  r: '6',
  key: '1vp47v'
}], ['path', {
  d: 'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11',
  key: 'em7aur'
}]]);
var Award$1 = Award;

var Axe = createReactComponent('Axe', [['path', {
  d: 'm14 12-8.501 8.501a2.12 2.12 0 0 1-2.998 0h-.002a2.12 2.12 0 0 1 0-2.998L11 9.002',
  key: 'ha6v2k'
}], ['path', {
  d: 'm9 7 4-4 6 6h3l-.13.648a7.648 7.648 0 0 1-5.081 5.756L15 16v-3z',
  key: '1mosh2'
}]]);
var Axe$1 = Axe;

var Axis3d = createReactComponent('Axis3d', [['path', {
  d: 'M4 4v16h16',
  key: '1s015l'
}], ['path', {
  d: 'm4 20 7-7',
  key: '17qe9y'
}]]);
var Axis3d$1 = Axis3d;

var Baby = createReactComponent('Baby', [['path', {
  d: 'M9 12h0',
  key: 't9r911'
}], ['path', {
  d: 'M15 12h0',
  key: '1pk9dm'
}], ['path', {
  d: 'M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5',
  key: '1u7htd'
}], ['path', {
  d: 'M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1',
  key: '5yv0yz'
}]]);
var Baby$1 = Baby;

var Backpack = createReactComponent('Backpack', [['path', {
  d: 'M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z',
  key: 'tunmdx'
}], ['path', {
  d: 'M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2',
  key: 'donm21'
}], ['path', {
  d: 'M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5',
  key: 'xk3gvk'
}], ['path', {
  d: 'M8 10h8',
  key: 'c7uz4u'
}], ['path', {
  d: 'M8 18h8',
  key: '1no2b1'
}]]);
var Backpack$1 = Backpack;

var BaggageClaim = createReactComponent('BaggageClaim', [['path', {
  d: 'M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2',
  key: '4irg2o'
}], ['path', {
  d: 'M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10',
  key: '14fcyx'
}], ['rect', {
  x: '8',
  y: '6',
  width: '13',
  height: '8',
  rx: '1',
  key: '1sfr2f'
}], ['circle', {
  cx: '18',
  cy: '20',
  r: '2',
  key: 't9985n'
}], ['circle', {
  cx: '9',
  cy: '20',
  r: '2',
  key: 'e5v82j'
}]]);
var BaggageClaim$1 = BaggageClaim;

var Banana = createReactComponent('Banana', [['path', {
  d: 'M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5',
  key: '1cscit'
}], ['path', {
  d: 'M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z',
  key: '1y1nbv'
}]]);
var Banana$1 = Banana;

var Banknote = createReactComponent('Banknote', [['rect', {
  x: '2',
  y: '6',
  width: '20',
  height: '12',
  rx: '2',
  key: '1wpnh2'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '2',
  key: '1c9p78'
}], ['path', {
  d: 'M6 12h.01M18 12h.01',
  key: '113zkx'
}]]);
var Banknote$1 = Banknote;

var BarChart2 = createReactComponent('BarChart2', [['line', {
  x1: '18',
  y1: '20',
  x2: '18',
  y2: '10',
  key: '1e8c49'
}], ['line', {
  x1: '12',
  y1: '20',
  x2: '12',
  y2: '4',
  key: '65j799'
}], ['line', {
  x1: '6',
  y1: '20',
  x2: '6',
  y2: '14',
  key: '4svqks'
}]]);
var BarChart2$1 = BarChart2;

var BarChart3 = createReactComponent('BarChart3', [['path', {
  d: 'M3 3v18h18',
  key: '1s2lah'
}], ['path', {
  d: 'M18 17V9',
  key: '2bz60n'
}], ['path', {
  d: 'M13 17V5',
  key: '1frdt8'
}], ['path', {
  d: 'M8 17v-3',
  key: '17ska0'
}]]);
var BarChart3$1 = BarChart3;

var BarChart4 = createReactComponent('BarChart4', [['path', {
  d: 'M3 3v18h18',
  key: '1s2lah'
}], ['path', {
  d: 'M13 17V9',
  key: '1fwyjl'
}], ['path', {
  d: 'M18 17V5',
  key: 'sfb6ij'
}], ['path', {
  d: 'M8 17v-3',
  key: '17ska0'
}]]);
var BarChart4$1 = BarChart4;

var BarChartHorizontal = createReactComponent('BarChartHorizontal', [['path', {
  d: 'M3 3v18h18',
  key: '1s2lah'
}], ['path', {
  d: 'M7 16h8',
  key: 'srdodz'
}], ['path', {
  d: 'M7 11h12',
  key: '127s9w'
}], ['path', {
  d: 'M7 6h3',
  key: 'w9rmul'
}]]);
var BarChartHorizontal$1 = BarChartHorizontal;

var BarChart = createReactComponent('BarChart', [['line', {
  x1: '12',
  y1: '20',
  x2: '12',
  y2: '10',
  key: '1wi7jb'
}], ['line', {
  x1: '18',
  y1: '20',
  x2: '18',
  y2: '4',
  key: '1mwru6'
}], ['line', {
  x1: '6',
  y1: '20',
  x2: '6',
  y2: '16',
  key: 'zj13da'
}]]);
var BarChart$1 = BarChart;

var Baseline = createReactComponent('Baseline', [['path', {
  d: 'M4 20h16',
  key: '14thso'
}], ['path', {
  d: 'm6 16 6-12 6 12',
  key: '1b4byz'
}], ['path', {
  d: 'M8 12h8',
  key: '1wcyev'
}]]);
var Baseline$1 = Baseline;

var Bath = createReactComponent('Bath', [['path', {
  d: 'M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5',
  key: '1r8yf5'
}], ['line', {
  x1: '10',
  y1: '5',
  x2: '8',
  y2: '7',
  key: 'd858pc'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12',
  key: 'zvmn4p'
}], ['line', {
  x1: '7',
  y1: '19',
  x2: '7',
  y2: '21',
  key: 'cpl2n4'
}], ['line', {
  x1: '17',
  y1: '19',
  x2: '17',
  y2: '21',
  key: 'ywtigw'
}]]);
var Bath$1 = Bath;

var BatteryCharging = createReactComponent('BatteryCharging', [['path', {
  d: 'M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2',
  key: '1sdynx'
}], ['path', {
  d: 'M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1',
  key: '1gkd3k'
}], ['path', {
  d: 'm11 7-3 5h4l-3 5',
  key: 'b4a64w'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13',
  key: '4dh1rd'
}]]);
var BatteryCharging$1 = BatteryCharging;

var BatteryFull = createReactComponent('BatteryFull', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2',
  key: '5j9scf'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13',
  key: '4dh1rd'
}], ['line', {
  x1: '6',
  x2: '6',
  y1: '11',
  y2: '13',
  key: '1wd6dw'
}], ['line', {
  x1: '10',
  x2: '10',
  y1: '11',
  y2: '13',
  key: 'haxvl5'
}], ['line', {
  x1: '14',
  x2: '14',
  y1: '11',
  y2: '13',
  key: 'c6fn6x'
}]]);
var BatteryFull$1 = BatteryFull;

var BatteryLow = createReactComponent('BatteryLow', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2',
  key: '5j9scf'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13',
  key: '4dh1rd'
}], ['line', {
  x1: '6',
  x2: '6',
  y1: '11',
  y2: '13',
  key: '1wd6dw'
}]]);
var BatteryLow$1 = BatteryLow;

var BatteryMedium = createReactComponent('BatteryMedium', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2',
  key: '5j9scf'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13',
  key: '4dh1rd'
}], ['line', {
  x1: '6',
  x2: '6',
  y1: '11',
  y2: '13',
  key: '1wd6dw'
}], ['line', {
  x1: '10',
  x2: '10',
  y1: '11',
  y2: '13',
  key: 'haxvl5'
}]]);
var BatteryMedium$1 = BatteryMedium;

var Battery = createReactComponent('Battery', [['rect', {
  x: '2',
  y: '7',
  width: '16',
  height: '10',
  rx: '2',
  ry: '2',
  key: '5j9scf'
}], ['line', {
  x1: '22',
  x2: '22',
  y1: '11',
  y2: '13',
  key: '4dh1rd'
}]]);
var Battery$1 = Battery;

var Beaker = createReactComponent('Beaker', [['path', {
  d: 'M4.5 3h15',
  key: 'c7n0jr'
}], ['path', {
  d: 'M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3',
  key: 'm1uhx7'
}], ['path', {
  d: 'M6 14h12',
  key: '4cwo0f'
}]]);
var Beaker$1 = Beaker;

var BedDouble = createReactComponent('BedDouble', [['path', {
  d: 'M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8',
  key: '1k78r4'
}], ['path', {
  d: 'M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4',
  key: 'fb3tl2'
}], ['path', {
  d: 'M12 4v6',
  key: '1dcgq2'
}], ['path', {
  d: 'M2 18h20',
  key: 'ajqnye'
}]]);
var BedDouble$1 = BedDouble;

var BedSingle = createReactComponent('BedSingle', [['path', {
  d: 'M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8',
  key: '1wm6mi'
}], ['path', {
  d: 'M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4',
  key: '4k93s5'
}], ['path', {
  d: 'M3 18h18',
  key: '1h113x'
}]]);
var BedSingle$1 = BedSingle;

var Bed = createReactComponent('Bed', [['path', {
  d: 'M2 4v16',
  key: 'vw9hq8'
}], ['path', {
  d: 'M2 8h18a2 2 0 0 1 2 2v10',
  key: '1dgv2r'
}], ['path', {
  d: 'M2 17h20',
  key: '18nfp3'
}], ['path', {
  d: 'M6 8v9',
  key: '1yriud'
}]]);
var Bed$1 = Bed;

var Beer = createReactComponent('Beer', [['path', {
  d: 'M17 11h1a3 3 0 0 1 0 6h-1',
  key: '1yp76v'
}], ['path', {
  d: 'M9 12v6',
  key: '1u1cab'
}], ['path', {
  d: 'M13 12v6',
  key: '1sugkk'
}], ['path', {
  d: 'M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z',
  key: '1510fo'
}], ['path', {
  d: 'M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8',
  key: '19jb7n'
}]]);
var Beer$1 = Beer;

var BellMinus = createReactComponent('BellMinus', [['path', {
  d: 'M13.73 21a2 2 0 0 1-3.46 0',
  key: '6o5tke'
}], ['path', {
  d: 'M21 5h-6',
  key: '14nobq'
}], ['path', {
  d: 'M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916',
  key: '1wldvb'
}]]);
var BellMinus$1 = BellMinus;

var BellOff = createReactComponent('BellOff', [['path', {
  d: 'M13.73 21a2 2 0 0 1-3.46 0',
  key: '6o5tke'
}], ['path', {
  d: 'M18.63 13A17.888 17.888 0 0 1 18 8',
  key: 'd5seqe'
}], ['path', {
  d: 'M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14',
  key: 'cae0gx'
}], ['path', {
  d: 'M18 8a6 6 0 0 0-9.33-5',
  key: '4mngwl'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}]]);
var BellOff$1 = BellOff;

var BellPlus = createReactComponent('BellPlus', [['path', {
  d: 'M18.387 12C19.198 15.799 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916',
  key: '1dhkt2'
}], ['path', {
  d: 'M13.73 21a2 2 0 0 1-3.46 0',
  key: '6o5tke'
}], ['path', {
  d: 'M18 2v6',
  key: '163kbd'
}], ['path', {
  d: 'M21 5h-6',
  key: '14nobq'
}]]);
var BellPlus$1 = BellPlus;

var BellRing = createReactComponent('BellRing', [['path', {
  d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9',
  key: 'oql5b8'
}], ['path', {
  d: 'M13.73 21a2 2 0 0 1-3.46 0',
  key: '6o5tke'
}], ['path', {
  d: 'M2 8c0-2.2.7-4.3 2-6',
  key: '1c7u9x'
}], ['path', {
  d: 'M22 8a10 10 0 0 0-2-6',
  key: '1vnyda'
}]]);
var BellRing$1 = BellRing;

var Bell = createReactComponent('Bell', [['path', {
  d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9',
  key: 'oql5b8'
}], ['path', {
  d: 'M13.73 21a2 2 0 0 1-3.46 0',
  key: '6o5tke'
}]]);
var Bell$1 = Bell;

var Bike = createReactComponent('Bike', [['circle', {
  cx: '5.5',
  cy: '17.5',
  r: '3.5',
  key: '1noe27'
}], ['circle', {
  cx: '18.5',
  cy: '17.5',
  r: '3.5',
  key: '15x4ox'
}], ['path', {
  d: 'M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2',
  key: '1932na'
}]]);
var Bike$1 = Bike;

var Binary = createReactComponent('Binary', [['path', {
  d: 'M6 20h4',
  key: '1i6q5t'
}], ['path', {
  d: 'M14 10h4',
  key: 'ru81e7'
}], ['path', {
  d: 'M6 14h2v6',
  key: '16z9wg'
}], ['path', {
  d: 'M14 4h2v6',
  key: '1idq9u'
}], ['rect', {
  x: '6',
  y: '4',
  width: '4',
  height: '6',
  key: 'btwfzx'
}], ['rect', {
  x: '14',
  y: '14',
  width: '4',
  height: '6',
  key: '1cym0j'
}]]);
var Binary$1 = Binary;

var Bitcoin = createReactComponent('Bitcoin', [['path', {
  d: 'M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727',
  key: 'yr8idg'
}]]);
var Bitcoin$1 = Bitcoin;

var BluetoothConnected = createReactComponent('BluetoothConnected', [['path', {
  d: 'm7 7 10 10-5 5V2l5 5L7 17',
  key: '1q5490'
}], ['line', {
  x1: '18',
  y1: '12',
  y2: '12',
  x2: '21',
  key: '17rheb'
}], ['line', {
  x1: '3',
  y1: '12',
  y2: '12',
  x2: '6',
  key: '1l5nc6'
}]]);
var BluetoothConnected$1 = BluetoothConnected;

var BluetoothOff = createReactComponent('BluetoothOff', [['path', {
  d: 'm17 17-5 5V12l-5 5',
  key: 'v5aci6'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}], ['path', {
  d: 'M14.5 9.5 17 7l-5-5v4.5',
  key: '1kddfz'
}]]);
var BluetoothOff$1 = BluetoothOff;

var BluetoothSearching = createReactComponent('BluetoothSearching', [['path', {
  d: 'm7 7 10 10-5 5V2l5 5L7 17',
  key: '1q5490'
}], ['path', {
  d: 'M20.83 14.83a4 4 0 0 0 0-5.66',
  key: 'k8tn1j'
}], ['path', {
  d: 'M18 12h.01',
  key: 'yjnet6'
}]]);
var BluetoothSearching$1 = BluetoothSearching;

var Bluetooth = createReactComponent('Bluetooth', [['path', {
  d: 'm7 7 10 10-5 5V2l5 5L7 17',
  key: '1q5490'
}]]);
var Bluetooth$1 = Bluetooth;

var Bold = createReactComponent('Bold', [['path', {
  d: 'M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z',
  key: 'shhoi5'
}], ['path', {
  d: 'M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z',
  key: 'jaah4r'
}]]);
var Bold$1 = Bold;

var Bomb = createReactComponent('Bomb', [['circle', {
  cx: '11',
  cy: '13',
  r: '9',
  key: 'hd149'
}], ['path', {
  d: 'm19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8',
  key: '9owvxi'
}], ['path', {
  d: 'm22 2-1.5 1.5',
  key: 'ay92ug'
}]]);
var Bomb$1 = Bomb;

var Bone = createReactComponent('Bone', [['path', {
  d: 'M18.6 9.82c-.52-.21-1.15-.25-1.54.15l-7.07 7.06c-.39.39-.36 1.03-.15 1.54.12.3.16.6.16.93a2.5 2.5 0 0 1-5 0c0-.26-.24-.5-.5-.5a2.5 2.5 0 1 1 .96-4.82c.5.21 1.14.25 1.53-.15l7.07-7.06c.39-.39.36-1.03.15-1.54-.12-.3-.21-.6-.21-.93a2.5 2.5 0 0 1 5 0c.01.26.24.49.5.5a2.5 2.5 0 1 1-.9 4.82Z',
  key: '134x1i'
}]]);
var Bone$1 = Bone;

var BookOpenCheck = createReactComponent('BookOpenCheck', [['path', {
  d: 'M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z',
  key: '1i8u0n'
}], ['path', {
  d: 'm16 12 2 2 4-4',
  key: 'mdajum'
}], ['path', {
  d: 'M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3',
  key: 'jb5l51'
}]]);
var BookOpenCheck$1 = BookOpenCheck;

var BookOpen = createReactComponent('BookOpen', [['path', {
  d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z',
  key: 'vv98re'
}], ['path', {
  d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  key: '1cyq3y'
}]]);
var BookOpen$1 = BookOpen;

var Book = createReactComponent('Book', [['path', {
  d: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20',
  key: '126fyg'
}], ['path', {
  d: 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  key: '1msh16'
}]]);
var Book$1 = Book;

var BookmarkMinus = createReactComponent('BookmarkMinus', [['path', {
  d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z',
  key: '1fy3hk'
}], ['line', {
  x1: '15',
  x2: '9',
  y1: '10',
  y2: '10',
  key: '1gty7f'
}]]);
var BookmarkMinus$1 = BookmarkMinus;

var BookmarkPlus = createReactComponent('BookmarkPlus', [['path', {
  d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z',
  key: '1fy3hk'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '7',
  y2: '13',
  key: '1cppfj'
}], ['line', {
  x1: '15',
  x2: '9',
  y1: '10',
  y2: '10',
  key: '1gty7f'
}]]);
var BookmarkPlus$1 = BookmarkPlus;

var Bookmark = createReactComponent('Bookmark', [['path', {
  d: 'm19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z',
  key: '1fy3hk'
}]]);
var Bookmark$1 = Bookmark;

var Bot = createReactComponent('Bot', [['rect', {
  x: '3',
  y: '11',
  width: '18',
  height: '10',
  rx: '2',
  key: 'qbqwso'
}], ['circle', {
  cx: '12',
  cy: '5',
  r: '2',
  key: 'f1ur92'
}], ['path', {
  d: 'M12 7v4',
  key: 'xawao1'
}], ['line', {
  x1: '8',
  y1: '16',
  x2: '8',
  y2: '16',
  key: '717jkb'
}], ['line', {
  x1: '16',
  y1: '16',
  x2: '16',
  y2: '16',
  key: '19gr12'
}]]);
var Bot$1 = Bot;

var BoxSelect = createReactComponent('BoxSelect', [['path', {
  d: 'M5 3a2 2 0 0 0-2 2',
  key: 'y57alp'
}], ['path', {
  d: 'M19 3a2 2 0 0 1 2 2',
  key: '18rm91'
}], ['path', {
  d: 'M21 19a2 2 0 0 1-2 2',
  key: '1j7049'
}], ['path', {
  d: 'M5 21a2 2 0 0 1-2-2',
  key: 'sbafld'
}], ['path', {
  d: 'M9 3h1',
  key: '1yesri'
}], ['path', {
  d: 'M9 21h1',
  key: '15o7lz'
}], ['path', {
  d: 'M14 3h1',
  key: '1ec4yj'
}], ['path', {
  d: 'M14 21h1',
  key: 'v9vybs'
}], ['path', {
  d: 'M3 9v1',
  key: '1r0deq'
}], ['path', {
  d: 'M21 9v1',
  key: 'mxsmne'
}], ['path', {
  d: 'M3 14v1',
  key: 'vnatye'
}], ['path', {
  d: 'M21 14v1',
  key: '169vum'
}]]);
var BoxSelect$1 = BoxSelect;

var Box = createReactComponent('Box', [['path', {
  d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  key: 'yt0hxn'
}], ['polyline', {
  points: '3.29 7 12 12 20.71 7',
  key: 'ousv84'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '12',
  key: 'gdv6h4'
}]]);
var Box$1 = Box;

var Boxes = createReactComponent('Boxes', [['path', {
  d: 'M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z',
  key: 'lc1i9w'
}], ['path', {
  d: 'm7 16.5-4.74-2.85',
  key: '1o9zyk'
}], ['path', {
  d: 'm7 16.5 5-3',
  key: 'va8pkn'
}], ['path', {
  d: 'M7 16.5v5.17',
  key: 'jnp8gn'
}], ['path', {
  d: 'M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z',
  key: '8zsnat'
}], ['path', {
  d: 'm17 16.5-5-3',
  key: '8arw3v'
}], ['path', {
  d: 'm17 16.5 4.74-2.85',
  key: '8rfmw'
}], ['path', {
  d: 'M17 16.5v5.17',
  key: 'k6z78m'
}], ['path', {
  d: 'M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z',
  key: '1xygjf'
}], ['path', {
  d: 'M12 8 7.26 5.15',
  key: '1vbdud'
}], ['path', {
  d: 'm12 8 4.74-2.85',
  key: '3rx089'
}], ['path', {
  d: 'M12 13.5V8',
  key: '1io7kd'
}]]);
var Boxes$1 = Boxes;

var Briefcase = createReactComponent('Briefcase', [['rect', {
  x: '2',
  y: '7',
  width: '20',
  height: '14',
  rx: '2',
  ry: '2',
  key: '1fj28a'
}], ['path', {
  d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  key: 'zwj3tp'
}]]);
var Briefcase$1 = Briefcase;

var Brush = createReactComponent('Brush', [['path', {
  d: 'm9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08',
  key: '1styjt'
}], ['path', {
  d: 'M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z',
  key: 'z0l1mu'
}]]);
var Brush$1 = Brush;

var Bug = createReactComponent('Bug', [['rect', {
  width: '8',
  height: '14',
  x: '8',
  y: '6',
  rx: '4',
  key: 'hq8nra'
}], ['path', {
  d: 'm19 7-3 2',
  key: 'fmg8ec'
}], ['path', {
  d: 'm5 7 3 2',
  key: 'dkxqes'
}], ['path', {
  d: 'm19 19-3-2',
  key: '1hbhi4'
}], ['path', {
  d: 'm5 19 3-2',
  key: 'dvt2ee'
}], ['path', {
  d: 'M20 13h-4',
  key: '1agfp2'
}], ['path', {
  d: 'M4 13h4',
  key: '1bwh8b'
}], ['path', {
  d: 'm10 4 1 2',
  key: '1pot59'
}], ['path', {
  d: 'm14 4-1 2',
  key: 'm8sn0o'
}]]);
var Bug$1 = Bug;

var Building2 = createReactComponent('Building2', [['path', {
  d: 'M6 22V4c0-.27 0-.55.07-.82a1.477 1.477 0 0 1 1.1-1.11C7.46 2 8.73 2 9 2h7c.27 0 .55 0 .82.07a1.477 1.477 0 0 1 1.11 1.1c.07.28.07.56.07.83v18H6Z',
  key: '1b1x9d'
}], ['path', {
  d: 'M2 14v6c0 1.1.9 2 2 2h2V12H4c-.27 0-.55 0-.82.07-.27.07-.52.2-.72.4-.19.19-.32.44-.39.71A3.4 3.4 0 0 0 2 14Z',
  key: '12g3jd'
}], ['path', {
  d: 'M20.82 9.07A3.4 3.4 0 0 0 20 9h-2v13h2a2 2 0 0 0 2-2v-9c0-.28 0-.55-.07-.82-.07-.27-.2-.52-.4-.72-.19-.19-.44-.32-.71-.39Z',
  key: 'o1w3ll'
}], ['path', {
  d: 'M10 6h4',
  key: '1itunk'
}], ['path', {
  d: 'M10 10h4',
  key: 'tcdvrf'
}], ['path', {
  d: 'M10 14h4',
  key: 'kelpxr'
}], ['path', {
  d: 'M10 18h4',
  key: '1ulq68'
}]]);
var Building2$1 = Building2;

var Building = createReactComponent('Building', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2',
  ry: '2',
  key: '152kg8'
}], ['path', {
  d: 'M9 22v-4h6v4',
  key: 'r93iot'
}], ['path', {
  d: 'M8 6h.01',
  key: '1dz90k'
}], ['path', {
  d: 'M16 6h.01',
  key: '1x0f13'
}], ['path', {
  d: 'M12 6h.01',
  key: '1vi96p'
}], ['path', {
  d: 'M12 10h.01',
  key: '1nrarc'
}], ['path', {
  d: 'M12 14h.01',
  key: '1etili'
}], ['path', {
  d: 'M16 10h.01',
  key: '1m94wz'
}], ['path', {
  d: 'M16 14h.01',
  key: '1gbofw'
}], ['path', {
  d: 'M8 10h.01',
  key: '19clt8'
}], ['path', {
  d: 'M8 14h.01',
  key: '6423bh'
}]]);
var Building$1 = Building;

var Bus = createReactComponent('Bus', [['path', {
  d: 'M19 17h2l.64-2.54c.24-.959.24-1.962 0-2.92l-1.07-4.27A3 3 0 0 0 17.66 5H4a2 2 0 0 0-2 2v10h2',
  key: 'wfsdqh'
}], ['path', {
  d: 'M14 17H9',
  key: 'o2noo5'
}], ['circle', {
  cx: '6.5',
  cy: '17.5',
  r: '2.5',
  key: 'gc8oob'
}], ['circle', {
  cx: '16.5',
  cy: '17.5',
  r: '2.5',
  key: '4btu0q'
}]]);
var Bus$1 = Bus;

var Cake = createReactComponent('Cake', [['path', {
  d: 'M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8',
  key: '1w3rig'
}], ['path', {
  d: 'M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1',
  key: 'n2jgmb'
}], ['path', {
  d: 'M2 21h20',
  key: '1nyx9w'
}], ['path', {
  d: 'M7 8v2',
  key: 'kqglng'
}], ['path', {
  d: 'M12 8v2',
  key: '1woqiv'
}], ['path', {
  d: 'M17 8v2',
  key: 'teptal'
}], ['path', {
  d: 'M7 4h.01',
  key: '1bh4kh'
}], ['path', {
  d: 'M12 4h.01',
  key: '1ujb9j'
}], ['path', {
  d: 'M17 4h.01',
  key: '1upcoc'
}]]);
var Cake$1 = Cake;

var Calculator = createReactComponent('Calculator', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2',
  key: '1uxh74'
}], ['line', {
  x1: '8',
  x2: '16',
  y1: '6',
  y2: '6',
  key: 'x4nwl0'
}], ['line', {
  x1: '16',
  x2: '16',
  y1: '14',
  y2: '18',
  key: 'wjye3r'
}], ['path', {
  d: 'M16 10h.01',
  key: '1m94wz'
}], ['path', {
  d: 'M12 10h.01',
  key: '1nrarc'
}], ['path', {
  d: 'M8 10h.01',
  key: '19clt8'
}], ['path', {
  d: 'M12 14h.01',
  key: '1etili'
}], ['path', {
  d: 'M8 14h.01',
  key: '6423bh'
}], ['path', {
  d: 'M12 18h.01',
  key: 'mhygvu'
}], ['path', {
  d: 'M8 18h.01',
  key: 'lrp35t'
}]]);
var Calculator$1 = Calculator;

var CalendarCheck2 = createReactComponent('CalendarCheck2', [['path', {
  d: 'M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8',
  key: 'bce9hv'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['path', {
  d: 'm16 20 2 2 4-4',
  key: '13tcca'
}]]);
var CalendarCheck2$1 = CalendarCheck2;

var CalendarCheck = createReactComponent('CalendarCheck', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: '1dtxiw'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['path', {
  d: 'm9 16 2 2 4-4',
  key: '19s6y9'
}]]);
var CalendarCheck$1 = CalendarCheck;

var CalendarClock = createReactComponent('CalendarClock', [['path', {
  d: 'M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5',
  key: '1osxxc'
}], ['path', {
  d: 'M16 2v4',
  key: '4m81vk'
}], ['path', {
  d: 'M8 2v4',
  key: '1cmpym'
}], ['path', {
  d: 'M3 10h5',
  key: 'r794hk'
}], ['path', {
  d: 'M17.5 17.5 16 16.25V14',
  key: 're2vv1'
}], ['path', {
  d: 'M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z',
  key: 'ame013'
}]]);
var CalendarClock$1 = CalendarClock;

var CalendarDays = createReactComponent('CalendarDays', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: '1dtxiw'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['path', {
  d: 'M8 14h.01',
  key: '6423bh'
}], ['path', {
  d: 'M12 14h.01',
  key: '1etili'
}], ['path', {
  d: 'M16 14h.01',
  key: '1gbofw'
}], ['path', {
  d: 'M8 18h.01',
  key: 'lrp35t'
}], ['path', {
  d: 'M12 18h.01',
  key: 'mhygvu'
}], ['path', {
  d: 'M16 18h.01',
  key: 'kzsmim'
}]]);
var CalendarDays$1 = CalendarDays;

var CalendarHeart = createReactComponent('CalendarHeart', [['path', {
  d: 'M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7',
  key: '1sfrvf'
}], ['path', {
  d: 'M16 2v4',
  key: '4m81vk'
}], ['path', {
  d: 'M8 2v4',
  key: '1cmpym'
}], ['path', {
  d: 'M3 10h18',
  key: '8toen8'
}], ['path', {
  d: 'M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z',
  key: '1t7hil'
}]]);
var CalendarHeart$1 = CalendarHeart;

var CalendarMinus = createReactComponent('CalendarMinus', [['path', {
  d: 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8',
  key: '3spt84'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['line', {
  x1: '16',
  y1: '19',
  x2: '22',
  y2: '19',
  key: 'qkgpxo'
}]]);
var CalendarMinus$1 = CalendarMinus;

var CalendarOff = createReactComponent('CalendarOff', [['path', {
  d: 'M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18',
  key: '1feomx'
}], ['path', {
  d: 'M21 15.5V6a2 2 0 0 0-2-2H9.5',
  key: 'yhw86o'
}], ['path', {
  d: 'M16 2v4',
  key: '4m81vk'
}], ['path', {
  d: 'M3 10h7',
  key: '1wap6i'
}], ['path', {
  d: 'M21 10h-5.5',
  key: 'quycpq'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var CalendarOff$1 = CalendarOff;

var CalendarPlus = createReactComponent('CalendarPlus', [['path', {
  d: 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8',
  key: '3spt84'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['line', {
  x1: '19',
  y1: '16',
  x2: '19',
  y2: '22',
  key: '537lsc'
}], ['line', {
  x1: '16',
  y1: '19',
  x2: '22',
  y2: '19',
  key: 'qkgpxo'
}]]);
var CalendarPlus$1 = CalendarPlus;

var CalendarRange = createReactComponent('CalendarRange', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: '1dtxiw'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['path', {
  d: 'M17 14h-6',
  key: 'bkmgh3'
}], ['path', {
  d: 'M13 18H7',
  key: 'bb0bb7'
}], ['path', {
  d: 'M7 14h.01',
  key: '1qa3f1'
}], ['path', {
  d: 'M17 18h.01',
  key: '1bdyru'
}]]);
var CalendarRange$1 = CalendarRange;

var CalendarSearch = createReactComponent('CalendarSearch', [['path', {
  d: 'M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5',
  key: '18ncp8'
}], ['path', {
  d: 'M16 2v4',
  key: '4m81vk'
}], ['path', {
  d: 'M8 2v4',
  key: '1cmpym'
}], ['path', {
  d: 'M3 10h18',
  key: '8toen8'
}], ['path', {
  d: 'M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z',
  key: 'mgbru4'
}], ['path', {
  d: 'm22 22-1.5-1.5',
  key: '1x83k4'
}]]);
var CalendarSearch$1 = CalendarSearch;

var CalendarX2 = createReactComponent('CalendarX2', [['path', {
  d: 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8',
  key: '3spt84'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['line', {
  x1: '17',
  y1: '17',
  x2: '22',
  y2: '22',
  key: 'tvgkbv'
}], ['line', {
  x1: '17',
  y1: '22',
  x2: '22',
  y2: '17',
  key: '1l23f3'
}]]);
var CalendarX2$1 = CalendarX2;

var CalendarX = createReactComponent('CalendarX', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: '1dtxiw'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}], ['line', {
  x1: '10',
  y1: '14',
  x2: '14',
  y2: '18',
  key: 'fs6roj'
}], ['line', {
  x1: '14',
  y1: '14',
  x2: '10',
  y2: '18',
  key: '1kdrv6'
}]]);
var CalendarX$1 = CalendarX;

var Calendar = createReactComponent('Calendar', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: '1dtxiw'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '6',
  key: '18saeg'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '6',
  key: '1u51jw'
}], ['line', {
  x1: '3',
  y1: '10',
  x2: '21',
  y2: '10',
  key: '6sq0yj'
}]]);
var Calendar$1 = Calendar;

var CameraOff = createReactComponent('CameraOff', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}], ['path', {
  d: 'M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16',
  key: 'qmtpty'
}], ['path', {
  d: 'M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5',
  key: '1ufyfc'
}], ['path', {
  d: 'M14.121 15.121A3 3 0 1 1 9.88 10.88',
  key: '11zox6'
}]]);
var CameraOff$1 = CameraOff;

var Camera = createReactComponent('Camera', [['path', {
  d: 'M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z',
  key: '1tc9qg'
}], ['circle', {
  cx: '12',
  cy: '13',
  r: '3',
  key: '1vg3eu'
}]]);
var Camera$1 = Camera;

var Car = createReactComponent('Car', [['path', {
  d: 'M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2',
  key: 'l5np60'
}], ['circle', {
  cx: '6.5',
  cy: '16.5',
  r: '2.5',
  key: 'ae40ju'
}], ['circle', {
  cx: '16.5',
  cy: '16.5',
  r: '2.5',
  key: '1smtlt'
}]]);
var Car$1 = Car;

var Carrot = createReactComponent('Carrot', [['path', {
  d: 'M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46',
  key: 'rfqxbe'
}], ['path', {
  d: 'M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z',
  key: '6b25w4'
}], ['path', {
  d: 'M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z',
  key: 'fn65lo'
}]]);
var Carrot$1 = Carrot;

var Cast = createReactComponent('Cast', [['path', {
  d: 'M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6',
  key: '3zrzxg'
}], ['path', {
  d: 'M2 12a9 9 0 0 1 8 8',
  key: 'g6cvee'
}], ['path', {
  d: 'M2 16a5 5 0 0 1 4 4',
  key: '1y1dii'
}], ['line', {
  x1: '2',
  y1: '20',
  x2: '2.01',
  y2: '20',
  key: '1cypae'
}]]);
var Cast$1 = Cast;

var CheckCircle2 = createReactComponent('CheckCircle2', [['path', {
  d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
  key: '14v8dr'
}], ['path', {
  d: 'm9 12 2 2 4-4',
  key: 'dzmm74'
}]]);
var CheckCircle2$1 = CheckCircle2;

var CheckCircle = createReactComponent('CheckCircle', [['path', {
  d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14',
  key: 'g774vq'
}], ['polyline', {
  points: '22 4 12 14.01 9 11.01',
  key: '6xbx8j'
}]]);
var CheckCircle$1 = CheckCircle;

var CheckSquare = createReactComponent('CheckSquare', [['polyline', {
  points: '9 11 12 14 22 4',
  key: '19ybtz'
}], ['path', {
  d: 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  key: '1jnkn4'
}]]);
var CheckSquare$1 = CheckSquare;

var Check = createReactComponent('Check', [['polyline', {
  points: '20 6 9 17 4 12',
  key: '10jjfj'
}]]);
var Check$1 = Check;

var ChefHat = createReactComponent('ChefHat', [['path', {
  d: 'M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z',
  key: 'z3ra2g'
}], ['line', {
  x1: '6',
  y1: '17',
  x2: '18',
  y2: '17',
  key: '130uxj'
}]]);
var ChefHat$1 = ChefHat;

var Cherry = createReactComponent('Cherry', [['path', {
  d: 'M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z',
  key: 'cvxqlc'
}], ['path', {
  d: 'M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z',
  key: '1ostrc'
}], ['path', {
  d: 'M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12',
  key: 'hqx58h'
}], ['path', {
  d: 'M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z',
  key: 'eykp1o'
}]]);
var Cherry$1 = Cherry;

var ChevronDown = createReactComponent('ChevronDown', [['polyline', {
  points: '6 9 12 15 18 9',
  key: '1do0m2'
}]]);
var ChevronDown$1 = ChevronDown;

var ChevronFirst = createReactComponent('ChevronFirst', [['polyline', {
  points: '17 18 11 12 17 6',
  key: '11nco2'
}], ['path', {
  d: 'M7 6v12',
  key: '1p53r6'
}]]);
var ChevronFirst$1 = ChevronFirst;

var ChevronLast = createReactComponent('ChevronLast', [['polyline', {
  points: '7 18 13 12 7 6',
  key: '1minw5'
}], ['path', {
  d: 'M17 6v12',
  key: '1o0aio'
}]]);
var ChevronLast$1 = ChevronLast;

var ChevronLeft = createReactComponent('ChevronLeft', [['polyline', {
  points: '15 18 9 12 15 6',
  key: 'kvxz59'
}]]);
var ChevronLeft$1 = ChevronLeft;

var ChevronRight = createReactComponent('ChevronRight', [['polyline', {
  points: '9 18 15 12 9 6',
  key: '1rtp27'
}]]);
var ChevronRight$1 = ChevronRight;

var ChevronUp = createReactComponent('ChevronUp', [['polyline', {
  points: '18 15 12 9 6 15',
  key: '1uugdp'
}]]);
var ChevronUp$1 = ChevronUp;

var ChevronsDownUp = createReactComponent('ChevronsDownUp', [['path', {
  d: 'm7 20 5-5 5 5',
  key: '13a0gw'
}], ['path', {
  d: 'm7 4 5 5 5-5',
  key: '1kwcof'
}]]);
var ChevronsDownUp$1 = ChevronsDownUp;

var ChevronsDown = createReactComponent('ChevronsDown', [['polyline', {
  points: '7 13 12 18 17 13',
  key: 'am1j83'
}], ['polyline', {
  points: '7 6 12 11 17 6',
  key: 'pjsmwq'
}]]);
var ChevronsDown$1 = ChevronsDown;

var ChevronsLeftRight = createReactComponent('ChevronsLeftRight', [['path', {
  d: 'm9 7-5 5 5 5',
  key: 'j5w590'
}], ['path', {
  d: 'm15 7 5 5-5 5',
  key: '1bl6da'
}]]);
var ChevronsLeftRight$1 = ChevronsLeftRight;

var ChevronsLeft = createReactComponent('ChevronsLeft', [['polyline', {
  points: '11 17 6 12 11 7',
  key: '1ueymj'
}], ['polyline', {
  points: '18 17 13 12 18 7',
  key: '18fy0m'
}]]);
var ChevronsLeft$1 = ChevronsLeft;

var ChevronsRightLeft = createReactComponent('ChevronsRightLeft', [['path', {
  d: 'm20 17-5-5 5-5',
  key: '30x0n2'
}], ['path', {
  d: 'm4 17 5-5-5-5',
  key: '16spf4'
}]]);
var ChevronsRightLeft$1 = ChevronsRightLeft;

var ChevronsRight = createReactComponent('ChevronsRight', [['polyline', {
  points: '13 17 18 12 13 7',
  key: 'oq0h83'
}], ['polyline', {
  points: '6 17 11 12 6 7',
  key: '3k300q'
}]]);
var ChevronsRight$1 = ChevronsRight;

var ChevronsUpDown = createReactComponent('ChevronsUpDown', [['path', {
  d: 'm7 15 5 5 5-5',
  key: '1hf1tw'
}], ['path', {
  d: 'm7 9 5-5 5 5',
  key: 'sgt6xg'
}]]);
var ChevronsUpDown$1 = ChevronsUpDown;

var ChevronsUp = createReactComponent('ChevronsUp', [['polyline', {
  points: '17 11 12 6 7 11',
  key: '1u9xa9'
}], ['polyline', {
  points: '17 18 12 13 7 18',
  key: '1fl4au'
}]]);
var ChevronsUp$1 = ChevronsUp;

var Chrome = createReactComponent('Chrome', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '4',
  key: '4exip2'
}], ['line', {
  x1: '21.17',
  y1: '8',
  x2: '12',
  y2: '8',
  key: '1a1nqa'
}], ['line', {
  x1: '3.95',
  y1: '6.06',
  x2: '8.54',
  y2: '14',
  key: 'irv2k6'
}], ['line', {
  x1: '10.88',
  y1: '21.94',
  x2: '15.46',
  y2: '14',
  key: 'fokf7t'
}]]);
var Chrome$1 = Chrome;

var CigaretteOff = createReactComponent('CigaretteOff', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}], ['path', {
  d: 'M12 12H2v4h14',
  key: '91gsaq'
}], ['path', {
  d: 'M22 12v4',
  key: '142cbu'
}], ['path', {
  d: 'M18 12h-.5',
  key: '12ymji'
}], ['path', {
  d: 'M7 12v4',
  key: 'jqww69'
}], ['path', {
  d: 'M18 8c0-2.5-2-2.5-2-5',
  key: '1il607'
}], ['path', {
  d: 'M22 8c0-2.5-2-2.5-2-5',
  key: '1gah44'
}]]);
var CigaretteOff$1 = CigaretteOff;

var Cigarette = createReactComponent('Cigarette', [['path', {
  d: 'M18 12H2v4h16',
  key: '2rt1hm'
}], ['path', {
  d: 'M22 12v4',
  key: '142cbu'
}], ['path', {
  d: 'M7 12v4',
  key: 'jqww69'
}], ['path', {
  d: 'M18 8c0-2.5-2-2.5-2-5',
  key: '1il607'
}], ['path', {
  d: 'M22 8c0-2.5-2-2.5-2-5',
  key: '1gah44'
}]]);
var Cigarette$1 = Cigarette;

var CircleDot = createReactComponent('CircleDot', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '1',
  key: '41hilf'
}]]);
var CircleDot$1 = CircleDot;

var CircleEllipsis = createReactComponent('CircleEllipsis', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M17 12h.01',
  key: '1m0b6t'
}], ['path', {
  d: 'M12 12h.01',
  key: '1mp3jc'
}], ['path', {
  d: 'M7 12h.01',
  key: 'eqddd0'
}]]);
var CircleEllipsis$1 = CircleEllipsis;

var CircleSlashed = createReactComponent('CircleSlashed', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M22 2 2 22',
  key: 'y4kqgn'
}]]);
var CircleSlashed$1 = CircleSlashed;

var Circle = createReactComponent('Circle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}]]);
var Circle$1 = Circle;

var Citrus = createReactComponent('Citrus', [['path', {
  d: 'M5.51 18.49a12 12 0 0 0 16.12.78c.49-.41.49-1.15.03-1.6L6.34 2.33a1.08 1.08 0 0 0-1.6.03A12 12 0 0 0 5.5 18.5Z',
  key: 'cpj97m'
}], ['path', {
  d: 'M8.34 15.66a8 8 0 0 0 10.4.78c.54-.4.54-1.16.06-1.64L9.2 5.2c-.48-.48-1.25-.48-1.64.06a8 8 0 0 0 .78 10.4Z',
  key: 'vhgi9a'
}], ['path', {
  d: 'm14 10-5.5 5.5',
  key: '92pfem'
}], ['path', {
  d: 'M14 10v8',
  key: '3sxk0t'
}], ['path', {
  d: 'M14 10H6',
  key: '1aai03'
}]]);
var Citrus$1 = Citrus;

var Clapperboard = createReactComponent('Clapperboard', [['path', {
  d: 'M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4Z',
  key: '1hxvyx'
}], ['path', {
  d: 'm4 11-.88-2.87a2 2 0 0 1 1.33-2.5l11.48-3.5a2 2 0 0 1 2.5 1.32l.87 2.87L4 11.01Z',
  key: '1vz1k2'
}], ['path', {
  d: 'm6.6 4.99 3.38 4.2',
  key: '192ida'
}], ['path', {
  d: 'm11.86 3.38 3.38 4.2',
  key: 'hhucvz'
}]]);
var Clapperboard$1 = Clapperboard;

var ClipboardCheck = createReactComponent('ClipboardCheck', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
  key: '116196'
}], ['path', {
  d: 'm9 14 2 2 4-4',
  key: 'df797q'
}]]);
var ClipboardCheck$1 = ClipboardCheck;

var ClipboardCopy = createReactComponent('ClipboardCopy', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  key: '4jdomd'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 2 2v4',
  key: '3hqy98'
}], ['path', {
  d: 'M21 14H11',
  key: '1bme5i'
}], ['path', {
  d: 'm15 10-4 4 4 4',
  key: '5dvupr'
}]]);
var ClipboardCopy$1 = ClipboardCopy;

var ClipboardEdit = createReactComponent('ClipboardEdit', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z',
  key: '1rgxu8'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5',
  key: 'cereej'
}], ['path', {
  d: 'M4 13.5V6a2 2 0 0 1 2-2h2',
  key: '5ua5vh'
}]]);
var ClipboardEdit$1 = ClipboardEdit;

var ClipboardList = createReactComponent('ClipboardList', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
  key: '116196'
}], ['path', {
  d: 'M12 11h4',
  key: '1jrz19'
}], ['path', {
  d: 'M12 16h4',
  key: 'n85exb'
}], ['path', {
  d: 'M8 11h.01',
  key: '1dfujw'
}], ['path', {
  d: 'M8 16h.01',
  key: '18s6g9'
}]]);
var ClipboardList$1 = ClipboardList;

var ClipboardSignature = createReactComponent('ClipboardSignature', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5',
  key: '1but9f'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 1.73 1',
  key: '1p8n7l'
}], ['path', {
  d: 'M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z',
  key: 'johvi5'
}], ['path', {
  d: 'M8 18h1',
  key: '13wk12'
}]]);
var ClipboardSignature$1 = ClipboardSignature;

var ClipboardType = createReactComponent('ClipboardType', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
  key: '116196'
}], ['path', {
  d: 'M9 12v-1h6v1',
  key: 'iehl6m'
}], ['path', {
  d: 'M11 17h2',
  key: '12w5me'
}], ['path', {
  d: 'M12 11v6',
  key: '1bwqyc'
}]]);
var ClipboardType$1 = ClipboardType;

var ClipboardX = createReactComponent('ClipboardX', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
  key: '116196'
}], ['path', {
  d: 'm15 11-6 6',
  key: '1toa9n'
}], ['path', {
  d: 'm9 11 6 6',
  key: 'wlibny'
}]]);
var ClipboardX$1 = ClipboardX;

var Clipboard = createReactComponent('Clipboard', [['rect', {
  x: '8',
  y: '2',
  width: '8',
  height: '4',
  rx: '1',
  ry: '1',
  key: 'wz2j3u'
}], ['path', {
  d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
  key: '116196'
}]]);
var Clipboard$1 = Clipboard;

var Clock1 = createReactComponent('Clock1', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 14.5 8',
  key: '12zbmj'
}]]);
var Clock1$1 = Clock1;

var Clock10 = createReactComponent('Clock10', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 8 10',
  key: 'atfzqc'
}]]);
var Clock10$1 = Clock10;

var Clock11 = createReactComponent('Clock11', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 9.5 8',
  key: 'l5bg6f'
}]]);
var Clock11$1 = Clock11;

var Clock12 = createReactComponent('Clock12', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12',
  key: '1fub01'
}]]);
var Clock12$1 = Clock12;

var Clock2 = createReactComponent('Clock2', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 16 10',
  key: '1g230d'
}]]);
var Clock2$1 = Clock2;

var Clock3 = createReactComponent('Clock3', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 16.5 12',
  key: '1aq6pp'
}]]);
var Clock3$1 = Clock3;

var Clock4 = createReactComponent('Clock4', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 16 14',
  key: '68esgv'
}]]);
var Clock4$1 = Clock4;

var Clock5 = createReactComponent('Clock5', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 14.5 16',
  key: '1pcbox'
}]]);
var Clock5$1 = Clock5;

var Clock6 = createReactComponent('Clock6', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 12 16.5',
  key: 'hb2qv6'
}]]);
var Clock6$1 = Clock6;

var Clock7 = createReactComponent('Clock7', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 9.5 16',
  key: 'ka3394'
}]]);
var Clock7$1 = Clock7;

var Clock8 = createReactComponent('Clock8', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 8 14',
  key: 'tmc9b4'
}]]);
var Clock8$1 = Clock8;

var Clock9 = createReactComponent('Clock9', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 7.5 12',
  key: '1k60p0'
}]]);
var Clock9$1 = Clock9;

var Clock = createReactComponent('Clock', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polyline', {
  points: '12 6 12 12 16 14',
  key: '68esgv'
}]]);
var Clock$1 = Clock;

var CloudCog = createReactComponent('CloudCog', [['path', {
  d: 'M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9',
  key: '19hoja'
}], ['circle', {
  cx: '12',
  cy: '17',
  r: '3',
  key: '1spfwm'
}], ['path', {
  d: 'M12 13v1',
  key: '176q98'
}], ['path', {
  d: 'M12 20v1',
  key: '1wcdkc'
}], ['path', {
  d: 'M16 17h-1',
  key: 'y560le'
}], ['path', {
  d: 'M9 17H8',
  key: '1lfe9z'
}], ['path', {
  d: 'm15 14-.88.88',
  key: '12ytk1'
}], ['path', {
  d: 'M9.88 19.12 9 20',
  key: '1kmb4r'
}], ['path', {
  d: 'm15 20-.88-.88',
  key: '1ipjcf'
}], ['path', {
  d: 'M9.88 14.88 9 14',
  key: 'c4uok7'
}]]);
var CloudCog$1 = CloudCog;

var CloudDrizzle = createReactComponent('CloudDrizzle', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'M8 19v1',
  key: '1dk2by'
}], ['path', {
  d: 'M8 14v1',
  key: '84yxot'
}], ['path', {
  d: 'M16 19v1',
  key: 'v220m7'
}], ['path', {
  d: 'M16 14v1',
  key: 'g12gj6'
}], ['path', {
  d: 'M12 21v1',
  key: 'q8vafk'
}], ['path', {
  d: 'M12 16v1',
  key: '1mx6rx'
}]]);
var CloudDrizzle$1 = CloudDrizzle;

var CloudFog = createReactComponent('CloudFog', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'M16 17H7',
  key: 'pygtm1'
}], ['path', {
  d: 'M17 21H9',
  key: '1u2q02'
}]]);
var CloudFog$1 = CloudFog;

var CloudHail = createReactComponent('CloudHail', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'M16 14v2',
  key: 'a1is7l'
}], ['path', {
  d: 'M8 14v2',
  key: '1e9m6t'
}], ['path', {
  d: 'M16 20h.01',
  key: 'xwek51'
}], ['path', {
  d: 'M8 20h.01',
  key: '1vjney'
}], ['path', {
  d: 'M12 16v2',
  key: 'z66u1j'
}], ['path', {
  d: 'M12 22h.01',
  key: '1urd7a'
}]]);
var CloudHail$1 = CloudHail;

var CloudLightning = createReactComponent('CloudLightning', [['path', {
  d: 'M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973',
  key: '1cez44'
}], ['path', {
  d: 'm13 12-3 5h4l-3 5',
  key: '1t22er'
}]]);
var CloudLightning$1 = CloudLightning;

var CloudMoonRain = createReactComponent('CloudMoonRain', [['path', {
  d: 'M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197',
  key: 'u82z8m'
}], ['path', {
  d: 'M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24',
  key: '1qmrp3'
}], ['path', {
  d: 'M11 20v2',
  key: '174qtz'
}], ['path', {
  d: 'M7 19v2',
  key: '12npes'
}]]);
var CloudMoonRain$1 = CloudMoonRain;

var CloudMoon = createReactComponent('CloudMoon', [['path', {
  d: 'M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z',
  key: 's09mg5'
}], ['path', {
  d: 'M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197',
  key: 'u82z8m'
}]]);
var CloudMoon$1 = CloudMoon;

var CloudOff = createReactComponent('CloudOff', [['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}], ['path', {
  d: 'M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193',
  key: 'yfwify'
}], ['path', {
  d: 'M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07',
  key: 'jlfiyv'
}]]);
var CloudOff$1 = CloudOff;

var CloudRainWind = createReactComponent('CloudRainWind', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'm9.2 22 3-7',
  key: 'sb5f6j'
}], ['path', {
  d: 'm9 13-3 7',
  key: '500co5'
}], ['path', {
  d: 'm17 13-3 7',
  key: '8t2fiy'
}]]);
var CloudRainWind$1 = CloudRainWind;

var CloudRain = createReactComponent('CloudRain', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'M16 14v6',
  key: '1j4efv'
}], ['path', {
  d: 'M8 14v6',
  key: '17c4r9'
}], ['path', {
  d: 'M12 16v6',
  key: 'c8a4gj'
}]]);
var CloudRain$1 = CloudRain;

var CloudSnow = createReactComponent('CloudSnow', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'M8 15h.01',
  key: 'a7atzg'
}], ['path', {
  d: 'M8 19h.01',
  key: 'puxtts'
}], ['path', {
  d: 'M12 17h.01',
  key: 'p32p05'
}], ['path', {
  d: 'M12 21h.01',
  key: 'h35vbk'
}], ['path', {
  d: 'M16 15h.01',
  key: 'rnfrdf'
}], ['path', {
  d: 'M16 19h.01',
  key: '1vcnzz'
}]]);
var CloudSnow$1 = CloudSnow;

var CloudSunRain = createReactComponent('CloudSunRain', [['path', {
  d: 'M12 2v2',
  key: 'tus03m'
}], ['path', {
  d: 'm4.93 4.93 1.41 1.41',
  key: '149t6j'
}], ['path', {
  d: 'M20 12h2',
  key: '1q8mjw'
}], ['path', {
  d: 'm19.07 4.93-1.41 1.41',
  key: '1shlcs'
}], ['path', {
  d: 'M15.947 12.65a4 4 0 0 0-5.925-4.128',
  key: 'dpwdj0'
}], ['path', {
  d: 'M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24',
  key: '1qmrp3'
}], ['path', {
  d: 'M11 20v2',
  key: '174qtz'
}], ['path', {
  d: 'M7 19v2',
  key: '12npes'
}]]);
var CloudSunRain$1 = CloudSunRain;

var CloudSun = createReactComponent('CloudSun', [['path', {
  d: 'M12 2v2',
  key: 'tus03m'
}], ['path', {
  d: 'm4.93 4.93 1.41 1.41',
  key: '149t6j'
}], ['path', {
  d: 'M20 12h2',
  key: '1q8mjw'
}], ['path', {
  d: 'm19.07 4.93-1.41 1.41',
  key: '1shlcs'
}], ['path', {
  d: 'M15.947 12.65a4 4 0 0 0-5.925-4.128',
  key: 'dpwdj0'
}], ['path', {
  d: 'M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z',
  key: 's09mg5'
}]]);
var CloudSun$1 = CloudSun;

var Cloud = createReactComponent('Cloud', [['path', {
  d: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z',
  key: 'p7xjir'
}]]);
var Cloud$1 = Cloud;

var Cloudy = createReactComponent('Cloudy', [['path', {
  d: 'M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z',
  key: 'gqqjvc'
}], ['path', {
  d: 'M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5',
  key: '1p2s76'
}]]);
var Cloudy$1 = Cloudy;

var Clover = createReactComponent('Clover', [['path', {
  d: 'M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z',
  key: '1gxwox'
}], ['path', {
  d: 'M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16',
  key: 'il7z7z'
}], ['path', {
  d: 'M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8',
  key: '15bpx2'
}], ['path', {
  d: 'M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z',
  key: 'v9mug8'
}], ['path', {
  d: 'm7 17-5 5',
  key: '1py3mz'
}]]);
var Clover$1 = Clover;

var Code2 = createReactComponent('Code2', [['path', {
  d: 'm18 16 4-4-4-4',
  key: '1inbqp'
}], ['path', {
  d: 'm6 8-4 4 4 4',
  key: '15zrgr'
}], ['path', {
  d: 'm14.5 4-5 16',
  key: 'e7oirm'
}]]);
var Code2$1 = Code2;

var Code = createReactComponent('Code', [['polyline', {
  points: '16 18 22 12 16 6',
  key: 'z7tu5w'
}], ['polyline', {
  points: '8 6 2 12 8 18',
  key: '1eg1df'
}]]);
var Code$1 = Code;

var Codepen = createReactComponent('Codepen', [['polygon', {
  points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2',
  key: 'srzb37'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '15.5',
  key: 'zsefro'
}], ['polyline', {
  points: '22 8.5 12 15.5 2 8.5',
  key: 'ajlxae'
}], ['polyline', {
  points: '2 15.5 12 8.5 22 15.5',
  key: 'susrui'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '8.5',
  key: 'zll5ve'
}]]);
var Codepen$1 = Codepen;

var Codesandbox = createReactComponent('Codesandbox', [['path', {
  d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  key: 'yt0hxn'
}], ['polyline', {
  points: '7.5 4.21 12 6.81 16.5 4.21',
  key: 'fabo96'
}], ['polyline', {
  points: '7.5 19.79 7.5 14.6 3 12',
  key: 'z377f1'
}], ['polyline', {
  points: '21 12 16.5 14.6 16.5 19.79',
  key: '9nrev1'
}], ['polyline', {
  points: '3.27 6.96 12 12.01 20.73 6.96',
  key: '1180pa'
}], ['line', {
  x1: '12',
  y1: '22.08',
  x2: '12',
  y2: '12',
  key: '10a5a7'
}]]);
var Codesandbox$1 = Codesandbox;

var Coffee = createReactComponent('Coffee', [['path', {
  d: 'M17 8h1a4 4 0 1 1 0 8h-1',
  key: 'jx4kbh'
}], ['path', {
  d: 'M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z',
  key: '1bxrl0'
}], ['line', {
  x1: '6',
  y1: '2',
  x2: '6',
  y2: '4',
  key: '1p57d3'
}], ['line', {
  x1: '10',
  y1: '2',
  x2: '10',
  y2: '4',
  key: 'xb2gh9'
}], ['line', {
  x1: '14',
  y1: '2',
  x2: '14',
  y2: '4',
  key: 'gpi44t'
}]]);
var Coffee$1 = Coffee;

var Cog = createReactComponent('Cog', [['path', {
  d: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z',
  key: 'sobvz5'
}], ['path', {
  d: 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  key: '11i496'
}], ['path', {
  d: 'M12 2v2',
  key: 'tus03m'
}], ['path', {
  d: 'M12 22v-2',
  key: '1osdcq'
}], ['path', {
  d: 'm17 20.66-1-1.73',
  key: 'eq3orb'
}], ['path', {
  d: 'M11 10.27 7 3.34',
  key: '16pf9h'
}], ['path', {
  d: 'm20.66 17-1.73-1',
  key: 'sg0v6f'
}], ['path', {
  d: 'm3.34 7 1.73 1',
  key: '1ulond'
}], ['path', {
  d: 'M14 12h8',
  key: '4f43i9'
}], ['path', {
  d: 'M2 12h2',
  key: '1t8f8n'
}], ['path', {
  d: 'm20.66 7-1.73 1',
  key: '1ow05n'
}], ['path', {
  d: 'm3.34 17 1.73-1',
  key: 'nuk764'
}], ['path', {
  d: 'm17 3.34-1 1.73',
  key: '2wel8s'
}], ['path', {
  d: 'm11 13.73-4 6.93',
  key: '794ttg'
}]]);
var Cog$1 = Cog;

var Coins = createReactComponent('Coins', [['circle', {
  cx: '8',
  cy: '8',
  r: '6',
  key: '3yglwk'
}], ['path', {
  d: 'M18.09 10.37A6 6 0 1 1 10.34 18',
  key: 't5s6rm'
}], ['path', {
  d: 'M7 6h1v4',
  key: '1obek4'
}], ['path', {
  d: 'm16.71 13.88.7.71-2.82 2.82',
  key: '1rbuyh'
}]]);
var Coins$1 = Coins;

var Columns = createReactComponent('Columns', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '21',
  key: 'essbwb'
}]]);
var Columns$1 = Columns;

var Command = createReactComponent('Command', [['path', {
  d: 'M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
  key: 'uqkaba'
}]]);
var Command$1 = Command;

var Compass = createReactComponent('Compass', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polygon', {
  points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76',
  key: 'm9r19z'
}]]);
var Compass$1 = Compass;

var Component = createReactComponent('Component', [['path', {
  d: 'M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z',
  key: '1kciei'
}], ['path', {
  d: 'm12 2 3.5 3.5L12 9 8.5 5.5 12 2Z',
  key: '1ome0g'
}], ['path', {
  d: 'M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z',
  key: 'vbupec'
}], ['path', {
  d: 'm12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z',
  key: '16csic'
}]]);
var Component$1 = Component;

var ConciergeBell = createReactComponent('ConciergeBell', [['path', {
  d: 'M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z',
  key: '1co3i8'
}], ['path', {
  d: 'M20 16a8 8 0 1 0-16 0',
  key: '1pa543'
}], ['path', {
  d: 'M12 4v4',
  key: '1bq03y'
}], ['path', {
  d: 'M10 4h4',
  key: '1xpv9s'
}]]);
var ConciergeBell$1 = ConciergeBell;

var Contact = createReactComponent('Contact', [['path', {
  d: 'M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2',
  key: '1mghuy'
}], ['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '18',
  rx: '2',
  key: '12vinp'
}], ['circle', {
  cx: '12',
  cy: '10',
  r: '2',
  key: '1yojzk'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '4',
  key: '1r8a5u'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '16',
  y2: '4',
  key: 'tp0trh'
}]]);
var Contact$1 = Contact;

var Contrast = createReactComponent('Contrast', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M12 18a6 6 0 0 0 0-12v12z',
  key: 'j4l70d'
}]]);
var Contrast$1 = Contrast;

var Cookie = createReactComponent('Cookie', [['path', {
  d: 'M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5',
  key: 'laymnq'
}], ['path', {
  d: 'M8.5 8.5v.01',
  key: 'ue8clq'
}], ['path', {
  d: 'M16 15.5v.01',
  key: '14dtrp'
}], ['path', {
  d: 'M12 12v.01',
  key: 'u5ubse'
}], ['path', {
  d: 'M11 17v.01',
  key: '1hyl5a'
}], ['path', {
  d: 'M7 14v.01',
  key: 'uct60s'
}]]);
var Cookie$1 = Cookie;

var Copy = createReactComponent('Copy', [['rect', {
  x: '9',
  y: '9',
  width: '13',
  height: '13',
  rx: '2',
  ry: '2',
  key: '1ma1o8'
}], ['path', {
  d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
  key: 'pklvoz'
}]]);
var Copy$1 = Copy;

var Copyleft = createReactComponent('Copyleft', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M9 9.35a4 4 0 1 1 0 5.3',
  key: 'p8fkhi'
}]]);
var Copyleft$1 = Copyleft;

var Copyright = createReactComponent('Copyright', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M15 9.354a4 4 0 1 0 0 5.292',
  key: '8xfhbo'
}]]);
var Copyright$1 = Copyright;

var CornerDownLeft = createReactComponent('CornerDownLeft', [['polyline', {
  points: '9 10 4 15 9 20',
  key: 'r3jprv'
}], ['path', {
  d: 'M20 4v7a4 4 0 0 1-4 4H4',
  key: '6o5b7l'
}]]);
var CornerDownLeft$1 = CornerDownLeft;

var CornerDownRight = createReactComponent('CornerDownRight', [['polyline', {
  points: '15 10 20 15 15 20',
  key: '1q7qjw'
}], ['path', {
  d: 'M4 4v7a4 4 0 0 0 4 4h12',
  key: 'z08zvw'
}]]);
var CornerDownRight$1 = CornerDownRight;

var CornerLeftDown = createReactComponent('CornerLeftDown', [['polyline', {
  points: '14 15 9 20 4 15',
  key: 'nkc4i'
}], ['path', {
  d: 'M20 4h-7a4 4 0 0 0-4 4v12',
  key: 'nbpdq2'
}]]);
var CornerLeftDown$1 = CornerLeftDown;

var CornerLeftUp = createReactComponent('CornerLeftUp', [['polyline', {
  points: '14 9 9 4 4 9',
  key: 'm9oyvo'
}], ['path', {
  d: 'M20 20h-7a4 4 0 0 1-4-4V4',
  key: '1blwi3'
}]]);
var CornerLeftUp$1 = CornerLeftUp;

var CornerRightDown = createReactComponent('CornerRightDown', [['polyline', {
  points: '10 15 15 20 20 15',
  key: 'axus6l'
}], ['path', {
  d: 'M4 4h7a4 4 0 0 1 4 4v12',
  key: 'wcbgct'
}]]);
var CornerRightDown$1 = CornerRightDown;

var CornerRightUp = createReactComponent('CornerRightUp', [['polyline', {
  points: '10 9 15 4 20 9',
  key: '1lr6px'
}], ['path', {
  d: 'M4 20h7a4 4 0 0 0 4-4V4',
  key: '1plgdj'
}]]);
var CornerRightUp$1 = CornerRightUp;

var CornerUpLeft = createReactComponent('CornerUpLeft', [['polyline', {
  points: '9 14 4 9 9 4',
  key: '881910'
}], ['path', {
  d: 'M20 20v-7a4 4 0 0 0-4-4H4',
  key: '1nkjon'
}]]);
var CornerUpLeft$1 = CornerUpLeft;

var CornerUpRight = createReactComponent('CornerUpRight', [['polyline', {
  points: '15 14 20 9 15 4',
  key: '1tbx3s'
}], ['path', {
  d: 'M4 20v-7a4 4 0 0 1 4-4h12',
  key: '1lu4f8'
}]]);
var CornerUpRight$1 = CornerUpRight;

var Cpu = createReactComponent('Cpu', [['rect', {
  x: '4',
  y: '4',
  width: '16',
  height: '16',
  rx: '2',
  ry: '2',
  key: '19czt8'
}], ['rect', {
  x: '9',
  y: '9',
  width: '6',
  height: '6',
  key: 'o3kz5p'
}], ['line', {
  x1: '9',
  y1: '2',
  x2: '9',
  y2: '4',
  key: '1tcqwn'
}], ['line', {
  x1: '15',
  y1: '2',
  x2: '15',
  y2: '4',
  key: '1yvlak'
}], ['line', {
  x1: '9',
  y1: '21',
  x2: '9',
  y2: '22',
  key: 'tuhu08'
}], ['line', {
  x1: '15',
  y1: '20',
  x2: '15',
  y2: '22',
  key: '1o5cyu'
}], ['line', {
  x1: '20',
  y1: '9',
  x2: '22',
  y2: '9',
  key: 'b8rlm1'
}], ['line', {
  x1: '20',
  y1: '14',
  x2: '22',
  y2: '14',
  key: '1mk8c1'
}], ['line', {
  x1: '2',
  y1: '9',
  x2: '4',
  y2: '9',
  key: 'bt7uvh'
}], ['line', {
  x1: '2',
  y1: '14',
  x2: '4',
  y2: '14',
  key: 'hp71sd'
}]]);
var Cpu$1 = Cpu;

var CreditCard = createReactComponent('CreditCard', [['rect', {
  x: '2',
  y: '5',
  width: '20',
  height: '14',
  rx: '2',
  key: 'qneu4z'
}], ['line', {
  x1: '2',
  y1: '10',
  x2: '22',
  y2: '10',
  key: '1ytoly'
}]]);
var CreditCard$1 = CreditCard;

var Croissant = createReactComponent('Croissant', [['path', {
  d: 'm4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z',
  key: '1ozxlb'
}], ['path', {
  d: 'm10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83',
  key: 'ffuyb5'
}], ['path', {
  d: 'M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4',
  key: 'osnpzi'
}], ['path', {
  d: 'm14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2',
  key: '1vubaw'
}], ['path', {
  d: 'M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5',
  key: 'wxr772'
}]]);
var Croissant$1 = Croissant;

var Crop = createReactComponent('Crop', [['path', {
  d: 'M6 2v14a2 2 0 0 0 2 2h14',
  key: 'ron5a4'
}], ['path', {
  d: 'M18 22V8a2 2 0 0 0-2-2H2',
  key: '7s9ehn'
}]]);
var Crop$1 = Crop;

var Cross = createReactComponent('Cross', [['path', {
  d: 'M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z',
  key: '1t5g7j'
}]]);
var Cross$1 = Cross;

var Crosshair = createReactComponent('Crosshair', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '22',
  y1: '12',
  x2: '18',
  y2: '12',
  key: 'yivkn6'
}], ['line', {
  x1: '6',
  y1: '12',
  x2: '2',
  y2: '12',
  key: 'hlzxjj'
}], ['line', {
  x1: '12',
  y1: '6',
  x2: '12',
  y2: '2',
  key: '1s1957'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '18',
  key: '2x08zm'
}]]);
var Crosshair$1 = Crosshair;

var Crown = createReactComponent('Crown', [['path', {
  d: 'm2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14',
  key: 'zkxr6b'
}]]);
var Crown$1 = Crown;

var CupSoda = createReactComponent('CupSoda', [['path', {
  d: 'm6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8',
  key: '8166m8'
}], ['path', {
  d: 'M5 8h14',
  key: 'pcz4l3'
}], ['path', {
  d: 'M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0',
  key: 'yjz344'
}], ['path', {
  d: 'm12 8 1-6h2',
  key: '3ybfa4'
}]]);
var CupSoda$1 = CupSoda;

var CurlyBraces = createReactComponent('CurlyBraces', [['path', {
  d: 'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1',
  key: 'ezmyqa'
}], ['path', {
  d: 'M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1',
  key: 'e1hn23'
}]]);
var CurlyBraces$1 = CurlyBraces;

var Currency = createReactComponent('Currency', [['circle', {
  cx: '12',
  cy: '12',
  r: '8',
  key: '46899m'
}], ['line', {
  x1: '3',
  y1: '3',
  x2: '6',
  y2: '6',
  key: 'zkqcdn'
}], ['line', {
  x1: '21',
  y1: '3',
  x2: '18',
  y2: '6',
  key: 'n7spic'
}], ['line', {
  x1: '3',
  y1: '21',
  x2: '6',
  y2: '18',
  key: '7xq9ok'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '18',
  y2: '18',
  key: 'mzvtez'
}]]);
var Currency$1 = Currency;

var Database = createReactComponent('Database', [['ellipse', {
  cx: '12',
  cy: '5',
  rx: '9',
  ry: '3',
  key: 'msslwz'
}], ['path', {
  d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3',
  key: 'pw5pse'
}], ['path', {
  d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5',
  key: '7dtpbs'
}]]);
var Database$1 = Database;

var Delete = createReactComponent('Delete', [['path', {
  d: 'M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z',
  key: '1oy587'
}], ['line', {
  x1: '18',
  y1: '9',
  x2: '12',
  y2: '15',
  key: '1328vg'
}], ['line', {
  x1: '12',
  y1: '9',
  x2: '18',
  y2: '15',
  key: '6xbiik'
}]]);
var Delete$1 = Delete;

var Diamond = createReactComponent('Diamond', [['rect', {
  x: '12',
  y: '1',
  width: '15.56',
  height: '15.56',
  rx: '2.41',
  transform: 'rotate(45 12 1)',
  key: 'dtb0qj'
}]]);
var Diamond$1 = Diamond;

var Dice1 = createReactComponent('Dice1', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M12 12h.01',
  key: '1mp3jc'
}]]);
var Dice1$1 = Dice1;

var Dice2 = createReactComponent('Dice2', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M15 9h.01',
  key: 'x1ddxp'
}], ['path', {
  d: 'M9 15h.01',
  key: 'fzyn71'
}]]);
var Dice2$1 = Dice2;

var Dice3 = createReactComponent('Dice3', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M16 8h.01',
  key: 'cr5u4v'
}], ['path', {
  d: 'M12 12h.01',
  key: '1mp3jc'
}], ['path', {
  d: 'M8 16h.01',
  key: '18s6g9'
}]]);
var Dice3$1 = Dice3;

var Dice4 = createReactComponent('Dice4', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M16 8h.01',
  key: 'cr5u4v'
}], ['path', {
  d: 'M8 8h.01',
  key: '1e4136'
}], ['path', {
  d: 'M8 16h.01',
  key: '18s6g9'
}], ['path', {
  d: 'M16 16h.01',
  key: '1f9h7w'
}]]);
var Dice4$1 = Dice4;

var Dice5 = createReactComponent('Dice5', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M16 8h.01',
  key: 'cr5u4v'
}], ['path', {
  d: 'M8 8h.01',
  key: '1e4136'
}], ['path', {
  d: 'M8 16h.01',
  key: '18s6g9'
}], ['path', {
  d: 'M16 16h.01',
  key: '1f9h7w'
}], ['path', {
  d: 'M12 12h.01',
  key: '1mp3jc'
}]]);
var Dice5$1 = Dice5;

var Dice6 = createReactComponent('Dice6', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M16 8h.01',
  key: 'cr5u4v'
}], ['path', {
  d: 'M16 12h.01',
  key: '1l6xoz'
}], ['path', {
  d: 'M16 16h.01',
  key: '1f9h7w'
}], ['path', {
  d: 'M8 8h.01',
  key: '1e4136'
}], ['path', {
  d: 'M8 12h.01',
  key: 'czm47f'
}], ['path', {
  d: 'M8 16h.01',
  key: '18s6g9'
}]]);
var Dice6$1 = Dice6;

var Dices = createReactComponent('Dices', [['rect', {
  x: '2',
  y: '10',
  width: '12',
  height: '12',
  rx: '2',
  ry: '2',
  key: '73wp2n'
}], ['path', {
  d: 'm17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6',
  key: '1o487t'
}], ['path', {
  d: 'M6 18h.01',
  key: 'uhywen'
}], ['path', {
  d: 'M10 14h.01',
  key: 'ssrbsk'
}], ['path', {
  d: 'M15 6h.01',
  key: 'cblpky'
}], ['path', {
  d: 'M18 9h.01',
  key: '2061c0'
}]]);
var Dices$1 = Dices;

var Diff = createReactComponent('Diff', [['path', {
  d: 'M12 3v14',
  key: '7cf3v8'
}], ['path', {
  d: 'M5 10h14',
  key: 'elsbfy'
}], ['path', {
  d: 'M5 21h14',
  key: '11awu3'
}]]);
var Diff$1 = Diff;

var Disc = createReactComponent('Disc', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}]]);
var Disc$1 = Disc;

var DivideCircle = createReactComponent('DivideCircle', [['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '16',
  key: '4v5xkb'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '8',
  key: '1vrb7x'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}]]);
var DivideCircle$1 = DivideCircle;

var DivideSquare = createReactComponent('DivideSquare', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '16',
  key: '4v5xkb'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '8',
  key: '1vrb7x'
}]]);
var DivideSquare$1 = DivideSquare;

var Divide = createReactComponent('Divide', [['circle', {
  cx: '12',
  cy: '6',
  r: '1',
  key: '1bh7o1'
}], ['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12',
  key: '1smlys'
}], ['circle', {
  cx: '12',
  cy: '18',
  r: '1',
  key: 'lqb9t5'
}]]);
var Divide$1 = Divide;

var DollarSign = createReactComponent('DollarSign', [['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '22',
  key: '1k6o5o'
}], ['path', {
  d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  key: '1b0p4s'
}]]);
var DollarSign$1 = DollarSign;

var DownloadCloud = createReactComponent('DownloadCloud', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'M12 12v9',
  key: '192myk'
}], ['path', {
  d: 'm8 17 4 4 4-4',
  key: '1ul180'
}]]);
var DownloadCloud$1 = DownloadCloud;

var Download = createReactComponent('Download', [['path', {
  d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
  key: 'ih7n3h'
}], ['polyline', {
  points: '7 10 12 15 17 10',
  key: '2ggqvy'
}], ['line', {
  x1: '12',
  y1: '15',
  x2: '12',
  y2: '3',
  key: 'nqo27w'
}]]);
var Download$1 = Download;

var Dribbble = createReactComponent('Dribbble', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94',
  key: 'hpej1'
}], ['path', {
  d: 'M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32',
  key: '1tr44o'
}], ['path', {
  d: 'M8.56 2.75c4.37 6 6 9.42 8 17.72',
  key: 'kbh691'
}]]);
var Dribbble$1 = Dribbble;

var Droplet = createReactComponent('Droplet', [['path', {
  d: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z',
  key: 'c7niix'
}]]);
var Droplet$1 = Droplet;

var Droplets = createReactComponent('Droplets', [['path', {
  d: 'M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z',
  key: '1ptgy4'
}], ['path', {
  d: 'M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97',
  key: '1sl1rz'
}]]);
var Droplets$1 = Droplets;

var Drumstick = createReactComponent('Drumstick', [['path', {
  d: 'M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z',
  key: '1o96s0'
}], ['path', {
  d: 'm11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16',
  key: '14vv5h'
}]]);
var Drumstick$1 = Drumstick;

var EarOff = createReactComponent('EarOff', [['path', {
  d: 'M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46',
  key: '1qngmn'
}], ['path', {
  d: 'M6 8.5c0-.75.13-1.47.36-2.14',
  key: 'b06bma'
}], ['path', {
  d: 'M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76',
  key: 'g10hsz'
}], ['path', {
  d: 'M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18',
  key: 'ygzou7'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var EarOff$1 = EarOff;

var Ear = createReactComponent('Ear', [['path', {
  d: 'M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0',
  key: '1dfaln'
}], ['path', {
  d: 'M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4',
  key: '1qnva7'
}]]);
var Ear$1 = Ear;

var Edit2 = createReactComponent('Edit2', [['path', {
  d: 'M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z',
  key: '2s2c1q'
}]]);
var Edit2$1 = Edit2;

var Edit3 = createReactComponent('Edit3', [['path', {
  d: 'M12 20h9',
  key: 't2du7b'
}], ['path', {
  d: 'M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
  key: '18w55b'
}]]);
var Edit3$1 = Edit3;

var Edit = createReactComponent('Edit', [['path', {
  d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
  key: '1qinfi'
}], ['path', {
  d: 'M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  key: '1cs3r3'
}]]);
var Edit$1 = Edit;

var EggFried = createReactComponent('EggFried', [['circle', {
  cx: '11.5',
  cy: '12.5',
  r: '3.5',
  key: '1cl1mi'
}], ['path', {
  d: 'M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z',
  key: '165ef9'
}]]);
var EggFried$1 = EggFried;

var Egg = createReactComponent('Egg', [['path', {
  d: 'M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z',
  key: '1c39pg'
}]]);
var Egg$1 = Egg;

var EqualNot = createReactComponent('EqualNot', [['line', {
  x1: '5',
  y1: '9',
  x2: '19',
  y2: '9',
  key: 'p612hi'
}], ['line', {
  x1: '5',
  y1: '15',
  x2: '19',
  y2: '15',
  key: 'e39u1i'
}], ['line', {
  x1: '19',
  y1: '5',
  x2: '5',
  y2: '19',
  key: 't1677v'
}]]);
var EqualNot$1 = EqualNot;

var Equal = createReactComponent('Equal', [['line', {
  x1: '5',
  y1: '9',
  x2: '19',
  y2: '9',
  key: 'p612hi'
}], ['line', {
  x1: '5',
  y1: '15',
  x2: '19',
  y2: '15',
  key: 'e39u1i'
}]]);
var Equal$1 = Equal;

var Eraser = createReactComponent('Eraser', [['path', {
  d: 'm7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21',
  key: '182aya'
}], ['path', {
  d: 'M22 21H7',
  key: 't4ddhn'
}], ['path', {
  d: 'm5 11 9 9',
  key: '1mo9qw'
}]]);
var Eraser$1 = Eraser;

var Euro = createReactComponent('Euro', [['path', {
  d: 'M4 10h12',
  key: '1y6xl8'
}], ['path', {
  d: 'M4 14h9',
  key: '1loblj'
}], ['path', {
  d: 'M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2',
  key: '1j6lzo'
}]]);
var Euro$1 = Euro;

var Expand = createReactComponent('Expand', [['path', {
  d: 'm21 21-6-6m6 6v-4.8m0 4.8h-4.8',
  key: '1c15vz'
}], ['path', {
  d: 'M3 16.2V21m0 0h4.8M3 21l6-6',
  key: '1fsnz2'
}], ['path', {
  d: 'M21 7.8V3m0 0h-4.8M21 3l-6 6',
  key: 'hawz9i'
}], ['path', {
  d: 'M3 7.8V3m0 0h4.8M3 3l6 6',
  key: 'u9ee12'
}]]);
var Expand$1 = Expand;

var ExternalLink = createReactComponent('ExternalLink', [['path', {
  d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
  key: 'a6xqqp'
}], ['polyline', {
  points: '15 3 21 3 21 9',
  key: 'mznyad'
}], ['line', {
  x1: '10',
  y1: '14',
  x2: '21',
  y2: '3',
  key: '19d9un'
}]]);
var ExternalLink$1 = ExternalLink;

var EyeOff = createReactComponent('EyeOff', [['path', {
  d: 'M9.88 9.88a3 3 0 1 0 4.24 4.24',
  key: '1jxqfv'
}], ['path', {
  d: 'M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68',
  key: '9wicm4'
}], ['path', {
  d: 'M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61',
  key: '1jreej'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var EyeOff$1 = EyeOff;

var Eye = createReactComponent('Eye', [['path', {
  d: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z',
  key: 'rwhkz3'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}]]);
var Eye$1 = Eye;

var Facebook = createReactComponent('Facebook', [['path', {
  d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  key: '1jg4f8'
}]]);
var Facebook$1 = Facebook;

var Factory = createReactComponent('Factory', [['path', {
  d: 'M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z',
  key: '159hny'
}], ['path', {
  d: 'M17 18h1',
  key: 'uldtlt'
}], ['path', {
  d: 'M12 18h1',
  key: 's9uhes'
}], ['path', {
  d: 'M7 18h1',
  key: '1neino'
}]]);
var Factory$1 = Factory;

var Fan = createReactComponent('Fan', [['path', {
  d: 'M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z',
  key: '484a7f'
}], ['path', {
  d: 'M12 12v.01',
  key: 'u5ubse'
}]]);
var Fan$1 = Fan;

var FastForward = createReactComponent('FastForward', [['polygon', {
  points: '13 19 22 12 13 5 13 19',
  key: '587y9g'
}], ['polygon', {
  points: '2 19 11 12 2 5 2 19',
  key: '3pweh0'
}]]);
var FastForward$1 = FastForward;

var Feather = createReactComponent('Feather', [['path', {
  d: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z',
  key: 'u4sw5n'
}], ['line', {
  x1: '16',
  y1: '8',
  x2: '2',
  y2: '22',
  key: 'ay4g5i'
}], ['line', {
  x1: '17.5',
  y1: '15',
  x2: '9',
  y2: '15',
  key: 'c4zw0f'
}]]);
var Feather$1 = Feather;

var Figma = createReactComponent('Figma', [['path', {
  d: 'M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z',
  key: '1340ok'
}], ['path', {
  d: 'M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z',
  key: '1hz3m3'
}], ['path', {
  d: 'M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z',
  key: '1oz8n2'
}], ['path', {
  d: 'M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z',
  key: '1ff65i'
}], ['path', {
  d: 'M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z',
  key: 'pdip6e'
}]]);
var Figma$1 = Figma;

var FileArchive = createReactComponent('FileArchive', [['path', {
  d: 'M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2',
  key: '1u864v'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['circle', {
  cx: '10',
  cy: '20',
  r: '2',
  key: '1xzdoj'
}], ['path', {
  d: 'M10 7V6',
  key: 'dljcrl'
}], ['path', {
  d: 'M10 12v-1',
  key: 'v7bkov'
}], ['path', {
  d: 'M10 18v-2',
  key: '1cjy8d'
}]]);
var FileArchive$1 = FileArchive;

var FileAudio2 = createReactComponent('FileAudio2', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2',
  key: 'fkyf72'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M2 17v-3a4 4 0 0 1 8 0v3',
  key: '1ggdre'
}], ['circle', {
  cx: '9',
  cy: '17',
  r: '1',
  key: 'bc1fq4'
}], ['circle', {
  cx: '3',
  cy: '17',
  r: '1',
  key: 'vo6nti'
}]]);
var FileAudio2$1 = FileAudio2;

var FileAudio = createReactComponent('FileAudio', [['path', {
  d: 'M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3',
  key: '1013sb'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z',
  key: 'gqt63y'
}], ['path', {
  d: 'M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z',
  key: 'cf7lqx'
}], ['path', {
  d: 'M2 19v-3a6 6 0 0 1 12 0v3',
  key: '1acxgf'
}]]);
var FileAudio$1 = FileAudio;

var FileAxis3d = createReactComponent('FileAxis3d', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M8 10v8h8',
  key: 'tlaukw'
}], ['path', {
  d: 'm8 18 4-4',
  key: '12zab0'
}]]);
var FileAxis3d$1 = FileAxis3d;

var FileBadge2 = createReactComponent('FileBadge2', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['path', {
  d: 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  key: '13rien'
}], ['path', {
  d: 'm14 12.5 1 5.5-3-1-3 1 1-5.5',
  key: '14xlky'
}]]);
var FileBadge2$1 = FileBadge2;

var FileBadge = createReactComponent('FileBadge', [['path', {
  d: 'M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6',
  key: 'qtddq0'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  key: 'u0c8gj'
}], ['path', {
  d: 'M7 16.5 8 22l-3-1-3 1 1-5.5',
  key: '5gm2nr'
}]]);
var FileBadge$1 = FileBadge;

var FileBarChart2 = createReactComponent('FileBarChart2', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M12 18v-6',
  key: '17g6i2'
}], ['path', {
  d: 'M8 18v-1',
  key: 'zg0ygc'
}], ['path', {
  d: 'M16 18v-3',
  key: 'j5jt4h'
}]]);
var FileBarChart2$1 = FileBarChart2;

var FileBarChart = createReactComponent('FileBarChart', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M12 18v-4',
  key: 'q1q25u'
}], ['path', {
  d: 'M8 18v-2',
  key: 'qcmpov'
}], ['path', {
  d: 'M16 18v-6',
  key: '15y0np'
}]]);
var FileBarChart$1 = FileBarChart;

var FileBox = createReactComponent('FileBox', [['path', {
  d: 'M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: 'h7jej2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z',
  key: 'f4a3oc'
}], ['path', {
  d: 'm7 17-4.74-2.85',
  key: 'etm6su'
}], ['path', {
  d: 'm7 17 4.74-2.85',
  key: '5xuooz'
}], ['path', {
  d: 'M7 17v5',
  key: '1yj1jh'
}]]);
var FileBox$1 = FileBox;

var FileCheck2 = createReactComponent('FileCheck2', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm3 15 2 2 4-4',
  key: '1lhrkk'
}]]);
var FileCheck2$1 = FileCheck2;

var FileCheck = createReactComponent('FileCheck', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm9 15 2 2 4-4',
  key: '1grp1n'
}]]);
var FileCheck$1 = FileCheck;

var FileClock = createReactComponent('FileClock', [['path', {
  d: 'M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3',
  key: '9lo3o3'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['circle', {
  cx: '8',
  cy: '16',
  r: '6',
  key: '10v15b'
}], ['path', {
  d: 'M9.5 17.5 8 16.25V14',
  key: '1o80t2'
}]]);
var FileClock$1 = FileClock;

var FileCode = createReactComponent('FileCode', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm9 18 3-3-3-3',
  key: '112psh'
}], ['path', {
  d: 'm5 12-3 3 3 3',
  key: 'oke12k'
}]]);
var FileCode$1 = FileCode;

var FileCog2 = createReactComponent('FileCog2', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['circle', {
  cx: '12',
  cy: '15',
  r: '2',
  key: '1vpstw'
}], ['path', {
  d: 'M12 12v1',
  key: '1vuyxr'
}], ['path', {
  d: 'M12 17v1',
  key: 'y8y3f9'
}], ['path', {
  d: 'm14.6 13.5-.87.5',
  key: 'nomeg4'
}], ['path', {
  d: 'm10.27 16-.87.5',
  key: '1o8v95'
}], ['path', {
  d: 'm14.6 16.5-.87-.5',
  key: 'gzu2jw'
}], ['path', {
  d: 'm10.27 14-.87-.5',
  key: '1vlkk3'
}]]);
var FileCog2$1 = FileCog2;

var FileCog = createReactComponent('FileCog', [['path', {
  d: 'M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4',
  key: 'dba9qu'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['circle', {
  cx: '6',
  cy: '14',
  r: '3',
  key: 'a1xfv6'
}], ['path', {
  d: 'M6 10v1',
  key: 'xs0f9j'
}], ['path', {
  d: 'M6 17v1',
  key: 'idyhc0'
}], ['path', {
  d: 'M10 14H9',
  key: 'm5fm2q'
}], ['path', {
  d: 'M3 14H2',
  key: '19ot09'
}], ['path', {
  d: 'm9 11-.88.88',
  key: 'lhul2b'
}], ['path', {
  d: 'M3.88 16.12 3 17',
  key: '169z9n'
}], ['path', {
  d: 'm9 17-.88-.88',
  key: '5io96w'
}], ['path', {
  d: 'M3.88 11.88 3 11',
  key: '1ynhy1'
}]]);
var FileCog$1 = FileCog;

var FileDiff = createReactComponent('FileDiff', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['path', {
  d: 'M12 13V7',
  key: 'h0r20n'
}], ['path', {
  d: 'M9 10h6',
  key: '9gxzsh'
}], ['path', {
  d: 'M9 17h6',
  key: 'r8uit2'
}]]);
var FileDiff$1 = FileDiff;

var FileDigit = createReactComponent('FileDigit', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M10 12h2v6',
  key: '12zw74'
}], ['rect', {
  x: '2',
  y: '12',
  width: '4',
  height: '6',
  key: 'kg2lqm'
}], ['path', {
  d: 'M10 18h4',
  key: '1ulq68'
}]]);
var FileDigit$1 = FileDigit;

var FileDown = createReactComponent('FileDown', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M12 18v-6',
  key: '17g6i2'
}], ['path', {
  d: 'm9 15 3 3 3-3',
  key: '1npd3o'
}]]);
var FileDown$1 = FileDown;

var FileEdit = createReactComponent('FileEdit', [['path', {
  d: 'M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5',
  key: '1bg6eb'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z',
  key: '1rgxu8'
}]]);
var FileEdit$1 = FileEdit;

var FileHeart = createReactComponent('FileHeart', [['path', {
  d: 'M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4',
  key: 'dba9qu'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z',
  key: '1c1fso'
}]]);
var FileHeart$1 = FileHeart;

var FileImage = createReactComponent('FileImage', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['circle', {
  cx: '10',
  cy: '13',
  r: '2',
  key: '6v46hv'
}], ['path', {
  d: 'm20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22',
  key: '17vly1'
}]]);
var FileImage$1 = FileImage;

var FileInput = createReactComponent('FileInput', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M2 15h10',
  key: 'jfw4w8'
}], ['path', {
  d: 'm9 18 3-3-3-3',
  key: '112psh'
}]]);
var FileInput$1 = FileInput;

var FileJson2 = createReactComponent('FileJson2', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1',
  key: 'fq0c9t'
}], ['path', {
  d: 'M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1',
  key: '4gibmv'
}]]);
var FileJson2$1 = FileJson2;

var FileJson = createReactComponent('FileJson', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1',
  key: '1oajmo'
}], ['path', {
  d: 'M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1',
  key: 'mpwhp6'
}]]);
var FileJson$1 = FileJson;

var FileKey2 = createReactComponent('FileKey2', [['path', {
  d: 'M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4',
  key: '1nw5t3'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['circle', {
  cx: '4',
  cy: '16',
  r: '2',
  key: '1ehqvc'
}], ['path', {
  d: 'm10 10-4.5 4.5',
  key: '7fwrp6'
}], ['path', {
  d: 'm9 11 1 1',
  key: 'wa6s5q'
}]]);
var FileKey2$1 = FileKey2;

var FileKey = createReactComponent('FileKey', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['circle', {
  cx: '10',
  cy: '16',
  r: '2',
  key: '4ckbqe'
}], ['path', {
  d: 'm16 10-4.5 4.5',
  key: '7p3ebg'
}], ['path', {
  d: 'm15 11 1 1',
  key: '1bsyx3'
}]]);
var FileKey$1 = FileKey;

var FileLineChart = createReactComponent('FileLineChart', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm16 13-3.5 3.5-2-2L8 17',
  key: 'zz7yod'
}]]);
var FileLineChart$1 = FileLineChart;

var FileLock2 = createReactComponent('FileLock2', [['path', {
  d: 'M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4',
  key: 'gwd2r9'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['rect', {
  x: '2',
  y: '13',
  width: '8',
  height: '5',
  rx: '1',
  key: 'lkev2l'
}], ['path', {
  d: 'M8 13v-2a2 2 0 1 0-4 0v2',
  key: '1pdxzg'
}]]);
var FileLock2$1 = FileLock2;

var FileLock = createReactComponent('FileLock', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['rect', {
  x: '8',
  y: '12',
  width: '8',
  height: '6',
  rx: '1',
  key: 'hql291'
}], ['path', {
  d: 'M15 12v-2a3 3 0 1 0-6 0v2',
  key: '1nqnhw'
}]]);
var FileLock$1 = FileLock;

var FileMinus2 = createReactComponent('FileMinus2', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M3 15h6',
  key: '4e2qda'
}]]);
var FileMinus2$1 = FileMinus2;

var FileMinus = createReactComponent('FileMinus', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['line', {
  x1: '9',
  y1: '15',
  x2: '15',
  y2: '15',
  key: '1hgpwl'
}]]);
var FileMinus$1 = FileMinus;

var FileOutput = createReactComponent('FileOutput', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M2 15h10',
  key: 'jfw4w8'
}], ['path', {
  d: 'm5 12-3 3 3 3',
  key: 'oke12k'
}]]);
var FileOutput$1 = FileOutput;

var FilePieChart = createReactComponent('FilePieChart', [['path', {
  d: 'M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3',
  key: 'zhyrez'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29',
  key: 'f1t5jc'
}], ['path', {
  d: 'M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z',
  key: '7q54ec'
}]]);
var FilePieChart$1 = FilePieChart;

var FilePlus2 = createReactComponent('FilePlus2', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M3 15h6',
  key: '4e2qda'
}], ['path', {
  d: 'M6 12v6',
  key: '1u72j0'
}]]);
var FilePlus2$1 = FilePlus2;

var FilePlus = createReactComponent('FilePlus', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['line', {
  x1: '12',
  y1: '18',
  x2: '12',
  y2: '12',
  key: '16t3gy'
}], ['line', {
  x1: '9',
  y1: '15',
  x2: '15',
  y2: '15',
  key: '1hgpwl'
}]]);
var FilePlus$1 = FilePlus;

var FileQuestion = createReactComponent('FileQuestion', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['path', {
  d: 'M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2',
  key: '1umxtm'
}], ['path', {
  d: 'M12 17h.01',
  key: 'p32p05'
}]]);
var FileQuestion$1 = FileQuestion;

var FileScan = createReactComponent('FileScan', [['path', {
  d: 'M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5',
  key: 'uvikde'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M16 22a2 2 0 0 1-2-2',
  key: '1wqh5n'
}], ['path', {
  d: 'M20 22a2 2 0 0 0 2-2',
  key: '1l9q4k'
}], ['path', {
  d: 'M20 14a2 2 0 0 1 2 2',
  key: '1ny6zw'
}], ['path', {
  d: 'M16 14a2 2 0 0 0-2 2',
  key: 'ceaadl'
}]]);
var FileScan$1 = FileScan;

var FileSearch2 = createReactComponent('FileSearch2', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['circle', {
  cx: '11.5',
  cy: '14.5',
  r: '2.5',
  key: '1bq0ko'
}], ['path', {
  d: 'M13.25 16.25 15 18',
  key: '9eh8bj'
}]]);
var FileSearch2$1 = FileSearch2;

var FileSearch = createReactComponent('FileSearch', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3',
  key: 'am10z3'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  key: 'ychnub'
}], ['path', {
  d: 'm9 18-1.5-1.5',
  key: '1j6qii'
}]]);
var FileSearch$1 = FileSearch;

var FileSignature = createReactComponent('FileSignature', [['path', {
  d: 'M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5',
  key: 'kd5d3'
}], ['path', {
  d: 'M8 18h1',
  key: '13wk12'
}], ['path', {
  d: 'M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z',
  key: 'johvi5'
}]]);
var FileSignature$1 = FileSignature;

var FileSpreadsheet = createReactComponent('FileSpreadsheet', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M8 13h2',
  key: 'yr2amv'
}], ['path', {
  d: 'M8 17h2',
  key: '2yhykz'
}], ['path', {
  d: 'M14 13h2',
  key: 'un5t4a'
}], ['path', {
  d: 'M14 17h2',
  key: '10kma7'
}]]);
var FileSpreadsheet$1 = FileSpreadsheet;

var FileSymlink = createReactComponent('FileSymlink', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7',
  key: '138uzh'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm10 18 3-3-3-3',
  key: '18f6ys'
}], ['path', {
  d: 'M4 18v-1a2 2 0 0 1 2-2h6',
  key: '5uz2rn'
}]]);
var FileSymlink$1 = FileSymlink;

var FileTerminal = createReactComponent('FileTerminal', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm8 16 2-2-2-2',
  key: '10vzyd'
}], ['path', {
  d: 'M12 18h4',
  key: '1wd2n7'
}]]);
var FileTerminal$1 = FileTerminal;

var FileText = createReactComponent('FileText', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['line', {
  x1: '16',
  y1: '13',
  x2: '8',
  y2: '13',
  key: '7g4hpw'
}], ['line', {
  x1: '16',
  y1: '17',
  x2: '8',
  y2: '17',
  key: '1nzzn0'
}], ['line', {
  x1: '10',
  y1: '9',
  x2: '8',
  y2: '9',
  key: '13jkcr'
}]]);
var FileText$1 = FileText;

var FileType2 = createReactComponent('FileType2', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M2 13v-1h6v1',
  key: '1dh9dg'
}], ['path', {
  d: 'M4 18h2',
  key: '1xrofg'
}], ['path', {
  d: 'M5 12v6',
  key: '150t9c'
}]]);
var FileType2$1 = FileType2;

var FileType = createReactComponent('FileType', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M9 13v-1h6v1',
  key: '1bb014'
}], ['path', {
  d: 'M11 18h2',
  key: '12mj7e'
}], ['path', {
  d: 'M12 12v6',
  key: '3ahymv'
}]]);
var FileType$1 = FileType;

var FileUp = createReactComponent('FileUp', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M12 12v6',
  key: '3ahymv'
}], ['path', {
  d: 'm15 15-3-3-3 3',
  key: '15xj92'
}]]);
var FileUp$1 = FileUp;

var FileVideo2 = createReactComponent('FileVideo2', [['path', {
  d: 'M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4',
  key: '1nti49'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm10 15.5 4 2.5v-6l-4 2.5',
  key: 't7cp39'
}], ['rect', {
  x: '2',
  y: '12',
  width: '8',
  height: '6',
  rx: '1',
  key: '1fgd6b'
}]]);
var FileVideo2$1 = FileVideo2;

var FileVideo = createReactComponent('FileVideo', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm10 11 5 3-5 3v-6Z',
  key: '7ntvm4'
}]]);
var FileVideo$1 = FileVideo;

var FileVolume2 = createReactComponent('FileVolume2', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5',
  key: 'joawwx'
}], ['path', {
  d: 'M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3',
  key: '1f2wyw'
}], ['path', {
  d: 'M8 15h.01',
  key: 'a7atzg'
}]]);
var FileVolume2$1 = FileVolume2;

var FileVolume = createReactComponent('FileVolume', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3',
  key: 'am10z3'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['path', {
  d: 'm7 10-3 2H2v4h2l3 2v-8Z',
  key: 'tazg57'
}], ['path', {
  d: 'M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3',
  key: '1yej3m'
}]]);
var FileVolume$1 = FileVolume;

var FileWarning = createReactComponent('FileWarning', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['path', {
  d: 'M12 9v4',
  key: 'juzpu7'
}], ['path', {
  d: 'M12 17h.01',
  key: 'p32p05'
}]]);
var FileWarning$1 = FileWarning;

var FileX2 = createReactComponent('FileX2', [['path', {
  d: 'M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4',
  key: '702lig'
}], ['path', {
  d: 'M14 2v6h6',
  key: '1kof46'
}], ['path', {
  d: 'm3 12.5 5 5',
  key: '1qls4r'
}], ['path', {
  d: 'm8 12.5-5 5',
  key: 'b853mi'
}]]);
var FileX2$1 = FileX2;

var FileX = createReactComponent('FileX', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}], ['line', {
  x1: '9.5',
  y1: '12.5',
  x2: '14.5',
  y2: '17.5',
  key: 'bu76mq'
}], ['line', {
  x1: '14.5',
  y1: '12.5',
  x2: '9.5',
  y2: '17.5',
  key: 'nmydn6'
}]]);
var FileX$1 = FileX;

var File = createReactComponent('File', [['path', {
  d: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z',
  key: '1nnpy2'
}], ['polyline', {
  points: '14 2 14 8 20 8',
  key: '1ew0cm'
}]]);
var File$1 = File;

var Files = createReactComponent('Files', [['path', {
  d: 'M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z',
  key: 'cennsq'
}], ['path', {
  d: 'M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8',
  key: 'ms809a'
}], ['path', {
  d: 'M15 2v5h5',
  key: 'qq6kwv'
}]]);
var Files$1 = Files;

var Film = createReactComponent('Film', [['rect', {
  x: '2',
  y: '2',
  width: '20',
  height: '20',
  rx: '2.18',
  ry: '2.18',
  key: '15u6kw'
}], ['line', {
  x1: '7',
  y1: '2',
  x2: '7',
  y2: '22',
  key: 'io8xnd'
}], ['line', {
  x1: '17',
  y1: '2',
  x2: '17',
  y2: '22',
  key: '1ewgih'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12',
  key: 'zvmn4p'
}], ['line', {
  x1: '2',
  y1: '7',
  x2: '7',
  y2: '7',
  key: '15jszs'
}], ['line', {
  x1: '2',
  y1: '17',
  x2: '7',
  y2: '17',
  key: 'qjw6jy'
}], ['line', {
  x1: '17',
  y1: '17',
  x2: '22',
  y2: '17',
  key: '132yhf'
}], ['line', {
  x1: '17',
  y1: '7',
  x2: '22',
  y2: '7',
  key: 'bl3oy5'
}]]);
var Film$1 = Film;

var Filter = createReactComponent('Filter', [['polygon', {
  points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3',
  key: '1yg77f'
}]]);
var Filter$1 = Filter;

var Fingerprint = createReactComponent('Fingerprint', [['path', {
  d: 'M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4',
  key: '1jc9o5'
}], ['path', {
  d: 'M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2',
  key: '1mxgy1'
}], ['path', {
  d: 'M17.29 21.02c.12-.6.43-2.3.5-3.02',
  key: 'ptglia'
}], ['path', {
  d: 'M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4',
  key: '1nerag'
}], ['path', {
  d: 'M8.65 22c.21-.66.45-1.32.57-2',
  key: '13wd9y'
}], ['path', {
  d: 'M14 13.12c0 2.38 0 6.38-1 8.88',
  key: 'o46ks0'
}], ['path', {
  d: 'M2 16h.01',
  key: '1gqxmh'
}], ['path', {
  d: 'M21.8 16c.2-2 .131-5.354 0-6',
  key: 'drycrb'
}], ['path', {
  d: 'M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2',
  key: '1fgabc'
}]]);
var Fingerprint$1 = Fingerprint;

var FlagOff = createReactComponent('FlagOff', [['path', {
  d: 'M8 2c3 0 5 2 8 2s4-1 4-1v11',
  key: '9rwyz9'
}], ['path', {
  d: 'M4 22V4',
  key: '1plyxx'
}], ['path', {
  d: 'M4 15s1-1 4-1 5 2 8 2',
  key: '1myooe'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var FlagOff$1 = FlagOff;

var FlagTriangleLeft = createReactComponent('FlagTriangleLeft', [['path', {
  d: 'M17 22V2L7 7l10 5',
  key: '1rmf0r'
}]]);
var FlagTriangleLeft$1 = FlagTriangleLeft;

var FlagTriangleRight = createReactComponent('FlagTriangleRight', [['path', {
  d: 'M7 22V2l10 5-10 5',
  key: '17n18y'
}]]);
var FlagTriangleRight$1 = FlagTriangleRight;

var Flag = createReactComponent('Flag', [['path', {
  d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z',
  key: 'i9b6wo'
}], ['line', {
  x1: '4',
  y1: '22',
  x2: '4',
  y2: '15',
  key: '1k23bw'
}]]);
var Flag$1 = Flag;

var Flame = createReactComponent('Flame', [['path', {
  d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
  key: '96xj49'
}]]);
var Flame$1 = Flame;

var FlashlightOff = createReactComponent('FlashlightOff', [['path', {
  d: 'M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4',
  key: '1r120k'
}], ['path', {
  d: 'M7 2h11v4c0 2-2 2-2 4v1',
  key: 'dz1920'
}], ['line', {
  x1: '11',
  y1: '6',
  x2: '18',
  y2: '6',
  key: 'q6oc82'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var FlashlightOff$1 = FlashlightOff;

var Flashlight = createReactComponent('Flashlight', [['path', {
  d: 'M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z',
  key: '1orkel'
}], ['line', {
  x1: '6',
  y1: '6',
  x2: '18',
  y2: '6',
  key: 'tmfr4k'
}], ['line', {
  x1: '12',
  y1: '12',
  x2: '12',
  y2: '12',
  key: 'jyrcx7'
}]]);
var Flashlight$1 = Flashlight;

var FlaskConical = createReactComponent('FlaskConical', [['path', {
  d: 'M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2',
  key: 'aka69c'
}], ['path', {
  d: 'M8.5 2h7',
  key: 'csnxdl'
}], ['path', {
  d: 'M7 16h10',
  key: 'wp8him'
}]]);
var FlaskConical$1 = FlaskConical;

var FlaskRound = createReactComponent('FlaskRound', [['path', {
  d: 'M10 2v7.31',
  key: '5d1hyh'
}], ['path', {
  d: 'M14 9.3V1.99',
  key: '14k4l0'
}], ['path', {
  d: 'M8.5 2h7',
  key: 'csnxdl'
}], ['path', {
  d: 'M14 9.3a6.5 6.5 0 1 1-4 0',
  key: '1r8fvy'
}], ['path', {
  d: 'M5.58 16.5h12.85',
  key: '78w9cl'
}]]);
var FlaskRound$1 = FlaskRound;

var FlipHorizontal2 = createReactComponent('FlipHorizontal2', [['path', {
  d: 'm3 7 5 5-5 5V7',
  key: 'couhi7'
}], ['path', {
  d: 'm21 7-5 5 5 5V7',
  key: '6ouia7'
}], ['path', {
  d: 'M12 20v2',
  key: '1lh1kg'
}], ['path', {
  d: 'M12 14v2',
  key: '8jcxud'
}], ['path', {
  d: 'M12 8v2',
  key: '1woqiv'
}], ['path', {
  d: 'M12 2v2',
  key: 'tus03m'
}]]);
var FlipHorizontal2$1 = FlipHorizontal2;

var FlipHorizontal = createReactComponent('FlipHorizontal', [['path', {
  d: 'M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3',
  key: '1i73f7'
}], ['path', {
  d: 'M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3',
  key: 'saxlbk'
}], ['path', {
  d: 'M12 20v2',
  key: '1lh1kg'
}], ['path', {
  d: 'M12 14v2',
  key: '8jcxud'
}], ['path', {
  d: 'M12 8v2',
  key: '1woqiv'
}], ['path', {
  d: 'M12 2v2',
  key: 'tus03m'
}]]);
var FlipHorizontal$1 = FlipHorizontal;

var FlipVertical2 = createReactComponent('FlipVertical2', [['path', {
  d: 'm17 3-5 5-5-5h10',
  key: '1ftt6x'
}], ['path', {
  d: 'm17 21-5-5-5 5h10',
  key: '1m0wmu'
}], ['path', {
  d: 'M4 12H2',
  key: 'rhcxmi'
}], ['path', {
  d: 'M10 12H8',
  key: 's88cx1'
}], ['path', {
  d: 'M16 12h-2',
  key: '10asgb'
}], ['path', {
  d: 'M22 12h-2',
  key: '14jgyd'
}]]);
var FlipVertical2$1 = FlipVertical2;

var FlipVertical = createReactComponent('FlipVertical', [['path', {
  d: 'M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3',
  key: '14bfxa'
}], ['path', {
  d: 'M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3',
  key: '14rx03'
}], ['path', {
  d: 'M4 12H2',
  key: 'rhcxmi'
}], ['path', {
  d: 'M10 12H8',
  key: 's88cx1'
}], ['path', {
  d: 'M16 12h-2',
  key: '10asgb'
}], ['path', {
  d: 'M22 12h-2',
  key: '14jgyd'
}]]);
var FlipVertical$1 = FlipVertical;

var Flower2 = createReactComponent('Flower2', [['path', {
  d: 'M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1',
  key: '3pnvol'
}], ['circle', {
  cx: '12',
  cy: '8',
  r: '2',
  key: '1822b1'
}], ['path', {
  d: 'M12 10v12',
  key: '6ubwww'
}], ['path', {
  d: 'M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z',
  key: '9hd38g'
}], ['path', {
  d: 'M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z',
  key: 'ufn41s'
}]]);
var Flower2$1 = Flower2;

var Flower = createReactComponent('Flower', [['path', {
  d: 'M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15',
  key: '51z86h'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}], ['path', {
  d: 'm8 16 1.5-1.5',
  key: 'ce6zph'
}], ['path', {
  d: 'M14.5 9.5 16 8',
  key: '1kzrzb'
}], ['path', {
  d: 'm8 8 1.5 1.5',
  key: '1yv88w'
}], ['path', {
  d: 'M14.5 14.5 16 16',
  key: '12xhjh'
}]]);
var Flower$1 = Flower;

var Focus = createReactComponent('Focus', [['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}], ['path', {
  d: 'M3 7V5a2 2 0 0 1 2-2h2',
  key: 'aa7l1z'
}], ['path', {
  d: 'M17 3h2a2 2 0 0 1 2 2v2',
  key: '4qcy5o'
}], ['path', {
  d: 'M21 17v2a2 2 0 0 1-2 2h-2',
  key: '6vwrx8'
}], ['path', {
  d: 'M7 21H5a2 2 0 0 1-2-2v-2',
  key: 'ioqczr'
}]]);
var Focus$1 = Focus;

var FolderArchive = createReactComponent('FolderArchive', [['path', {
  d: 'M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6',
  key: '1l0vpk'
}], ['circle', {
  cx: '16',
  cy: '19',
  r: '2',
  key: '1uwppb'
}], ['path', {
  d: 'M16 11v-1',
  key: 'eoyjtm'
}], ['path', {
  d: 'M16 17v-2',
  key: '1xp69b'
}]]);
var FolderArchive$1 = FolderArchive;

var FolderCheck = createReactComponent('FolderCheck', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['path', {
  d: 'm9 13 2 2 4-4',
  key: '6343dt'
}]]);
var FolderCheck$1 = FolderCheck;

var FolderClock = createReactComponent('FolderClock', [['path', {
  d: 'M7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2',
  key: '1p0xo9'
}], ['circle', {
  cx: '16',
  cy: '16',
  r: '6',
  key: 'qoo3c4'
}], ['path', {
  d: 'M16 14v2l1 1',
  key: 'xth2jh'
}]]);
var FolderClock$1 = FolderClock;

var FolderClosed = createReactComponent('FolderClosed', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['path', {
  d: 'M2 10h20',
  key: '1ir3d8'
}]]);
var FolderClosed$1 = FolderClosed;

var FolderCog2 = createReactComponent('FolderCog2', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['circle', {
  cx: '12',
  cy: '13',
  r: '2',
  key: '1c1ljs'
}], ['path', {
  d: 'M12 10v1',
  key: 'ngorzm'
}], ['path', {
  d: 'M12 15v1',
  key: '1ovrzm'
}], ['path', {
  d: 'm14.6 11.5-.87.5',
  key: 'zm6w6e'
}], ['path', {
  d: 'm10.27 14-.87.5',
  key: 'idea33'
}], ['path', {
  d: 'm14.6 14.5-.87-.5',
  key: '1ii18h'
}], ['path', {
  d: 'm10.27 12-.87-.5',
  key: 'tf2vd0'
}]]);
var FolderCog2$1 = FolderCog2;

var FolderCog = createReactComponent('FolderCog', [['path', {
  d: 'M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3',
  key: '1g1zaq'
}], ['circle', {
  cx: '18',
  cy: '18',
  r: '3',
  key: '1xkwt0'
}], ['path', {
  d: 'M18 14v1',
  key: '1sx9hk'
}], ['path', {
  d: 'M18 21v1',
  key: 'pviwm2'
}], ['path', {
  d: 'M22 18h-1',
  key: 'phgwqy'
}], ['path', {
  d: 'M15 18h-1',
  key: '1v9fvv'
}], ['path', {
  d: 'm21 15-.88.88',
  key: '13nfy4'
}], ['path', {
  d: 'M15.88 20.12 15 21',
  key: 'qplfkl'
}], ['path', {
  d: 'm21 21-.88-.88',
  key: '1ryrr1'
}], ['path', {
  d: 'M15.88 15.88 15 15',
  key: '4terp3'
}]]);
var FolderCog$1 = FolderCog;

var FolderDown = createReactComponent('FolderDown', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['path', {
  d: 'M12 10v6',
  key: '1bos4e'
}], ['path', {
  d: 'm15 13-3 3-3-3',
  key: '6j2sf0'
}]]);
var FolderDown$1 = FolderDown;

var FolderEdit = createReactComponent('FolderEdit', [['path', {
  d: 'M8.42 10.61a2.1 2.1 0 1 1 2.97 2.97L5.95 19 2 20l.99-3.95 5.43-5.44Z',
  key: 'o1ah0z'
}], ['path', {
  d: 'M2 11.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5',
  key: 'bim890'
}]]);
var FolderEdit$1 = FolderEdit;

var FolderHeart = createReactComponent('FolderHeart', [['path', {
  d: 'M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5',
  key: 'zoglpu'
}], ['path', {
  d: 'M21.29 13.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 21l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z',
  key: '2tfff6'
}]]);
var FolderHeart$1 = FolderHeart;

var FolderInput = createReactComponent('FolderInput', [['path', {
  d: 'M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1',
  key: '1gu97c'
}], ['path', {
  d: 'M2 13h10',
  key: 'pgb2dq'
}], ['path', {
  d: 'm9 16 3-3-3-3',
  key: '6m91ic'
}]]);
var FolderInput$1 = FolderInput;

var FolderKey = createReactComponent('FolderKey', [['path', {
  d: 'M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2',
  key: '203odn'
}], ['circle', {
  cx: '16',
  cy: '20',
  r: '2',
  key: '1vifvg'
}], ['path', {
  d: 'm22 14-4.5 4.5',
  key: '1ef6z8'
}], ['path', {
  d: 'm21 15 1 1',
  key: '1ejcpy'
}]]);
var FolderKey$1 = FolderKey;

var FolderLock = createReactComponent('FolderLock', [['path', {
  d: 'M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2.5',
  key: '1ivsx8'
}], ['rect', {
  x: '14',
  y: '17',
  width: '8',
  height: '5',
  rx: '1',
  key: '15pjcy'
}], ['path', {
  d: 'M20 17v-2a2 2 0 1 0-4 0v2',
  key: 'pwaxnr'
}]]);
var FolderLock$1 = FolderLock;

var FolderMinus = createReactComponent('FolderMinus', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['line', {
  x1: '9',
  y1: '13',
  x2: '15',
  y2: '13',
  key: '1nzi25'
}]]);
var FolderMinus$1 = FolderMinus;

var FolderOpen = createReactComponent('FolderOpen', [['path', {
  d: 'm6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2',
  key: '1nmvlm'
}]]);
var FolderOpen$1 = FolderOpen;

var FolderOutput = createReactComponent('FolderOutput', [['path', {
  d: 'M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2',
  key: 'jm8npq'
}], ['path', {
  d: 'M2 13h10',
  key: 'pgb2dq'
}], ['path', {
  d: 'm5 10-3 3 3 3',
  key: '1r8ie0'
}]]);
var FolderOutput$1 = FolderOutput;

var FolderPlus = createReactComponent('FolderPlus', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['line', {
  x1: '12',
  y1: '10',
  x2: '12',
  y2: '16',
  key: '1fgwrs'
}], ['line', {
  x1: '9',
  y1: '13',
  x2: '15',
  y2: '13',
  key: '1nzi25'
}]]);
var FolderPlus$1 = FolderPlus;

var FolderSearch2 = createReactComponent('FolderSearch2', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['circle', {
  cx: '11.5',
  cy: '12.5',
  r: '2.5',
  key: '1ea5ju'
}], ['path', {
  d: 'M13.27 14.27 15 16',
  key: '5hsvtf'
}]]);
var FolderSearch2$1 = FolderSearch2;

var FolderSearch = createReactComponent('FolderSearch', [['path', {
  d: 'M11 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v4',
  key: '1moo03'
}], ['circle', {
  cx: '17',
  cy: '17',
  r: '3',
  key: '18b49y'
}], ['path', {
  d: 'm21 21-1.5-1.5',
  key: '3sg1j'
}]]);
var FolderSearch$1 = FolderSearch;

var FolderSymlink = createReactComponent('FolderSymlink', [['path', {
  d: 'M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2',
  key: '1or2t8'
}], ['path', {
  d: 'm8 16 3-3-3-3',
  key: 'rlqrt1'
}], ['path', {
  d: 'M2 16v-1a2 2 0 0 1 2-2h6',
  key: 'pgw8ln'
}]]);
var FolderSymlink$1 = FolderSymlink;

var FolderTree = createReactComponent('FolderTree', [['path', {
  d: 'M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z',
  key: '10jzg2'
}], ['path', {
  d: 'M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z',
  key: '1b9nqm'
}], ['path', {
  d: 'M3 3v2c0 1.1.9 2 2 2h3',
  key: '1wqwis'
}], ['path', {
  d: 'M3 3v13c0 1.1.9 2 2 2h3',
  key: '1bqeom'
}]]);
var FolderTree$1 = FolderTree;

var FolderUp = createReactComponent('FolderUp', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['path', {
  d: 'M12 10v6',
  key: '1bos4e'
}], ['path', {
  d: 'm9 13 3-3 3 3',
  key: '1pxg3c'
}]]);
var FolderUp$1 = FolderUp;

var FolderX = createReactComponent('FolderX', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}], ['path', {
  d: 'm9.5 10.5 5 5',
  key: 'ra9qjz'
}], ['path', {
  d: 'm14.5 10.5-5 5',
  key: 'l2rkpq'
}]]);
var FolderX$1 = FolderX;

var Folder = createReactComponent('Folder', [['path', {
  d: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z',
  key: '1fr9dc'
}]]);
var Folder$1 = Folder;

var Folders = createReactComponent('Folders', [['path', {
  d: 'M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z',
  key: '1aska4'
}], ['path', {
  d: 'M2 8v11c0 1.1.9 2 2 2h14',
  key: 'n13cji'
}]]);
var Folders$1 = Folders;

var FormInput = createReactComponent('FormInput', [['rect', {
  x: '2',
  y: '6',
  width: '20',
  height: '12',
  rx: '2',
  key: '1wpnh2'
}], ['path', {
  d: 'M12 12h.01',
  key: '1mp3jc'
}], ['path', {
  d: 'M17 12h.01',
  key: '1m0b6t'
}], ['path', {
  d: 'M7 12h.01',
  key: 'eqddd0'
}]]);
var FormInput$1 = FormInput;

var Forward = createReactComponent('Forward', [['polyline', {
  points: '15 17 20 12 15 7',
  key: '1w3sku'
}], ['path', {
  d: 'M4 18v-2a4 4 0 0 1 4-4h12',
  key: 'jmiej9'
}]]);
var Forward$1 = Forward;

var Frame = createReactComponent('Frame', [['line', {
  x1: '22',
  y1: '6',
  x2: '2',
  y2: '6',
  key: '181agm'
}], ['line', {
  x1: '22',
  y1: '18',
  x2: '2',
  y2: '18',
  key: '12x4ne'
}], ['line', {
  x1: '6',
  y1: '2',
  x2: '6',
  y2: '22',
  key: 'gjs6u1'
}], ['line', {
  x1: '18',
  y1: '2',
  x2: '18',
  y2: '22',
  key: '1hbgm0'
}]]);
var Frame$1 = Frame;

var Framer = createReactComponent('Framer', [['path', {
  d: 'M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7',
  key: '1a2nng'
}]]);
var Framer$1 = Framer;

var Frown = createReactComponent('Frown', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M16 16s-1.5-2-4-2-4 2-4 2',
  key: 'epbg0q'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9',
  key: '141aaf'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9',
  key: '1cyg3o'
}]]);
var Frown$1 = Frown;

var Fuel = createReactComponent('Fuel', [['line', {
  x1: '3',
  y1: '22',
  x2: '15',
  y2: '22',
  key: 'fc344c'
}], ['line', {
  x1: '4',
  y1: '9',
  x2: '14',
  y2: '9',
  key: 'htzs8q'
}], ['path', {
  d: 'M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18',
  key: '16j0yd'
}], ['path', {
  d: 'M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5',
  key: '8ur5zv'
}]]);
var Fuel$1 = Fuel;

var FunctionSquare = createReactComponent('FunctionSquare', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3',
  key: 'm1af9g'
}], ['path', {
  d: 'M9 11.2h5.7',
  key: '3zgcl2'
}]]);
var FunctionSquare$1 = FunctionSquare;

var Gamepad2 = createReactComponent('Gamepad2', [['line', {
  x1: '6',
  y1: '11',
  x2: '10',
  y2: '11',
  key: '19tls9'
}], ['line', {
  x1: '8',
  y1: '9',
  x2: '8',
  y2: '13',
  key: '6w9cvk'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '15.01',
  y2: '12',
  key: 'abmwhw'
}], ['line', {
  x1: '18',
  y1: '10',
  x2: '18.01',
  y2: '10',
  key: '19ehlv'
}], ['path', {
  d: 'M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z',
  key: 'mfqc10'
}]]);
var Gamepad2$1 = Gamepad2;

var Gamepad = createReactComponent('Gamepad', [['line', {
  x1: '6',
  y1: '12',
  x2: '10',
  y2: '12',
  key: 'xg250c'
}], ['line', {
  x1: '8',
  y1: '10',
  x2: '8',
  y2: '14',
  key: '1cn0zn'
}], ['line', {
  x1: '15',
  y1: '13',
  x2: '15.01',
  y2: '13',
  key: '1pybt0'
}], ['line', {
  x1: '18',
  y1: '11',
  x2: '18.01',
  y2: '11',
  key: '147dzq'
}], ['rect', {
  x: '2',
  y: '6',
  width: '20',
  height: '12',
  rx: '2',
  key: '1wpnh2'
}]]);
var Gamepad$1 = Gamepad;

var Gauge = createReactComponent('Gauge', [['path', {
  d: 'm12 15 3.5-3.5',
  key: '1sfa3b'
}], ['path', {
  d: 'M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4',
  key: 'rcs43o'
}]]);
var Gauge$1 = Gauge;

var Gavel = createReactComponent('Gavel', [['path', {
  d: 'm14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10',
  key: 'c9cbz0'
}], ['path', {
  d: 'm16 16 6-6',
  key: 'vzrcl6'
}], ['path', {
  d: 'm8 8 6-6',
  key: '18bi4p'
}], ['path', {
  d: 'm9 7 8 8',
  key: '5jnvq1'
}], ['path', {
  d: 'm21 11-8-8',
  key: 'z4y7zo'
}]]);
var Gavel$1 = Gavel;

var Gem = createReactComponent('Gem', [['polygon', {
  points: '6 3 18 3 22 9 12 22 2 9',
  key: '1kbvml'
}], ['path', {
  d: 'm12 22 4-13-3-6',
  key: '19hoeh'
}], ['path', {
  d: 'M12 22 8 9l3-6',
  key: '1klo0r'
}], ['path', {
  d: 'M2 9h20',
  key: '16fsjt'
}]]);
var Gem$1 = Gem;

var Ghost = createReactComponent('Ghost', [['path', {
  d: 'M9 10h.01',
  key: 'qbtxuw'
}], ['path', {
  d: 'M15 10h.01',
  key: '1qmjsl'
}], ['path', {
  d: 'M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z',
  key: 'uwwb07'
}]]);
var Ghost$1 = Ghost;

var Gift = createReactComponent('Gift', [['polyline', {
  points: '20 12 20 22 4 22 4 12',
  key: 'nda8fc'
}], ['rect', {
  x: '2',
  y: '7',
  width: '20',
  height: '5',
  key: '1k9o8g'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '7',
  key: '1tigeq'
}], ['path', {
  d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z',
  key: 'zighg4'
}], ['path', {
  d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
  key: '1pa5tk'
}]]);
var Gift$1 = Gift;

var GitBranchPlus = createReactComponent('GitBranchPlus', [['path', {
  d: 'M6 3v12',
  key: 'qpgusn'
}], ['path', {
  d: 'M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  key: '1d02ji'
}], ['path', {
  d: 'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  key: 'chk6ph'
}], ['path', {
  d: 'M15 6a9 9 0 0 0-9 9',
  key: 'or332x'
}], ['path', {
  d: 'M18 15v6',
  key: '9wciyi'
}], ['path', {
  d: 'M21 18h-6',
  key: '139f0c'
}]]);
var GitBranchPlus$1 = GitBranchPlus;

var GitBranch = createReactComponent('GitBranch', [['line', {
  x1: '6',
  y1: '3',
  x2: '6',
  y2: '15',
  key: '1o40i7'
}], ['circle', {
  cx: '18',
  cy: '6',
  r: '3',
  key: '1h7g24'
}], ['circle', {
  cx: '6',
  cy: '18',
  r: '3',
  key: 'fqmcym'
}], ['path', {
  d: 'M18 9a9 9 0 0 1-9 9',
  key: 'n2h4wq'
}]]);
var GitBranch$1 = GitBranch;

var GitCommit = createReactComponent('GitCommit', [['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}], ['line', {
  x1: '3',
  y1: '12',
  x2: '9',
  y2: '12',
  key: '1vg2s9'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '21',
  y2: '12',
  key: 'fnrdho'
}]]);
var GitCommit$1 = GitCommit;

var GitCompare = createReactComponent('GitCompare', [['circle', {
  cx: '18',
  cy: '18',
  r: '3',
  key: '1xkwt0'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3',
  key: '1lh9wr'
}], ['path', {
  d: 'M13 6h3a2 2 0 0 1 2 2v7',
  key: '1yeb86'
}], ['path', {
  d: 'M11 18H8a2 2 0 0 1-2-2V9',
  key: '19pyzm'
}]]);
var GitCompare$1 = GitCompare;

var GitFork = createReactComponent('GitFork', [['circle', {
  cx: '12',
  cy: '18',
  r: '3',
  key: '1mpf1b'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3',
  key: '1lh9wr'
}], ['circle', {
  cx: '18',
  cy: '6',
  r: '3',
  key: '1h7g24'
}], ['path', {
  d: 'M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9',
  key: 'c89w8i'
}], ['path', {
  d: 'M12 12v3',
  key: '158kv8'
}]]);
var GitFork$1 = GitFork;

var GitMerge = createReactComponent('GitMerge', [['circle', {
  cx: '18',
  cy: '18',
  r: '3',
  key: '1xkwt0'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3',
  key: '1lh9wr'
}], ['path', {
  d: 'M6 21V9a9 9 0 0 0 9 9',
  key: '7kw0sc'
}]]);
var GitMerge$1 = GitMerge;

var GitPullRequestClosed = createReactComponent('GitPullRequestClosed', [['circle', {
  cx: '18',
  cy: '18',
  r: '3',
  key: '1xkwt0'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3',
  key: '1lh9wr'
}], ['path', {
  d: 'M18 11.5V15',
  key: '65xf6f'
}], ['path', {
  d: 'm21 3-6 6',
  key: '16nqsk'
}], ['path', {
  d: 'm21 9-6-6',
  key: '9j17rh'
}], ['line', {
  x1: '6',
  y1: '9',
  x2: '6',
  y2: '21',
  key: '79th4h'
}]]);
var GitPullRequestClosed$1 = GitPullRequestClosed;

var GitPullRequestDraft = createReactComponent('GitPullRequestDraft', [['circle', {
  cx: '18',
  cy: '18',
  r: '3',
  key: '1xkwt0'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3',
  key: '1lh9wr'
}], ['path', {
  d: 'M18 6V5',
  key: '1oao2s'
}], ['path', {
  d: 'M18 11v-1',
  key: '11c8tz'
}], ['line', {
  x1: '6',
  y1: '9',
  x2: '6',
  y2: '21',
  key: '79th4h'
}]]);
var GitPullRequestDraft$1 = GitPullRequestDraft;

var GitPullRequest = createReactComponent('GitPullRequest', [['circle', {
  cx: '18',
  cy: '18',
  r: '3',
  key: '1xkwt0'
}], ['circle', {
  cx: '6',
  cy: '6',
  r: '3',
  key: '1lh9wr'
}], ['path', {
  d: 'M13 6h3a2 2 0 0 1 2 2v7',
  key: '1yeb86'
}], ['line', {
  x1: '6',
  y1: '9',
  x2: '6',
  y2: '21',
  key: '79th4h'
}]]);
var GitPullRequest$1 = GitPullRequest;

var Github = createReactComponent('Github', [['path', {
  d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
  key: 'tonef'
}], ['path', {
  d: 'M9 18c-4.51 2-5-2-7-2',
  key: '9comsn'
}]]);
var Github$1 = Github;

var Gitlab = createReactComponent('Gitlab', [['path', {
  d: 'm22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z',
  key: '148pdi'
}]]);
var Gitlab$1 = Gitlab;

var GlassWater = createReactComponent('GlassWater', [['path', {
  d: 'M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z',
  key: '48rfw3'
}], ['path', {
  d: 'M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0',
  key: 'mjntcy'
}]]);
var GlassWater$1 = GlassWater;

var Glasses = createReactComponent('Glasses', [['circle', {
  cx: '6',
  cy: '15',
  r: '4',
  key: 'vux9w4'
}], ['circle', {
  cx: '18',
  cy: '15',
  r: '4',
  key: '18o8ve'
}], ['path', {
  d: 'M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2',
  key: '1ag4bs'
}], ['path', {
  d: 'M2.5 13 5 7c.7-1.3 1.4-2 3-2',
  key: '1hm1gs'
}], ['path', {
  d: 'M21.5 13 19 7c-.7-1.3-1.5-2-3-2',
  key: '1r31ai'
}]]);
var Glasses$1 = Glasses;

var Globe2 = createReactComponent('Globe2', [['path', {
  d: 'M15 21v-4a2 2 0 0 1 2-2h4',
  key: '29t6hq'
}], ['path', {
  d: 'M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3',
  key: '1q8o6e'
}], ['path', {
  d: 'M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4',
  key: '10po7j'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}]]);
var Globe2$1 = Globe2;

var Globe = createReactComponent('Globe', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12',
  key: 'zvmn4p'
}], ['path', {
  d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
  key: 'nb9nel'
}]]);
var Globe$1 = Globe;

var Grab = createReactComponent('Grab', [['path', {
  d: 'M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4',
  key: 'n5nng'
}], ['path', {
  d: 'M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2',
  key: '185i9d'
}], ['path', {
  d: 'M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5',
  key: '11pz95'
}], ['path', {
  d: 'M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0',
  key: '16yk7l'
}], ['path', {
  d: 'M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0',
  key: 'nzvb1c'
}]]);
var Grab$1 = Grab;

var GraduationCap = createReactComponent('GraduationCap', [['path', {
  d: 'M22 10v6M2 10l10-5 10 5-10 5z',
  key: '1ef52a'
}], ['path', {
  d: 'M6 12v5c3 3 9 3 12 0v-5',
  key: '1f75yj'
}]]);
var GraduationCap$1 = GraduationCap;

var Grape = createReactComponent('Grape', [['path', {
  d: 'M22 5V2l-5.89 5.89',
  key: '1eenpo'
}], ['circle', {
  cx: '16.6',
  cy: '15.89',
  r: '3',
  key: 'xjtalx'
}], ['circle', {
  cx: '8.11',
  cy: '7.4',
  r: '3',
  key: 'u2fv6i'
}], ['circle', {
  cx: '12.35',
  cy: '11.65',
  r: '3',
  key: 'i6i8g7'
}], ['circle', {
  cx: '13.91',
  cy: '5.85',
  r: '3',
  key: '6ye0dv'
}], ['circle', {
  cx: '18.15',
  cy: '10.09',
  r: '3',
  key: 'snx9no'
}], ['circle', {
  cx: '6.56',
  cy: '13.2',
  r: '3',
  key: '17x4xg'
}], ['circle', {
  cx: '10.8',
  cy: '17.44',
  r: '3',
  key: '1hogw9'
}], ['circle', {
  cx: '5',
  cy: '19',
  r: '3',
  key: '1sn6vo'
}]]);
var Grape$1 = Grape;

var Grid = createReactComponent('Grid', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9',
  key: '1uch6j'
}], ['line', {
  x1: '3',
  y1: '15',
  x2: '21',
  y2: '15',
  key: '1xojw2'
}], ['line', {
  x1: '9',
  y1: '3',
  x2: '9',
  y2: '21',
  key: 'nvcl17'
}], ['line', {
  x1: '15',
  y1: '3',
  x2: '15',
  y2: '21',
  key: 'jcv93v'
}]]);
var Grid$1 = Grid;

var GripHorizontal = createReactComponent('GripHorizontal', [['circle', {
  cx: '12',
  cy: '9',
  r: '1',
  key: '124mty'
}], ['circle', {
  cx: '19',
  cy: '9',
  r: '1',
  key: '1ruzo2'
}], ['circle', {
  cx: '5',
  cy: '9',
  r: '1',
  key: '1a8b28'
}], ['circle', {
  cx: '12',
  cy: '15',
  r: '1',
  key: '1e56xg'
}], ['circle', {
  cx: '19',
  cy: '15',
  r: '1',
  key: '1a92ep'
}], ['circle', {
  cx: '5',
  cy: '15',
  r: '1',
  key: '5r1jwy'
}]]);
var GripHorizontal$1 = GripHorizontal;

var GripVertical = createReactComponent('GripVertical', [['circle', {
  cx: '9',
  cy: '12',
  r: '1',
  key: '1vctgf'
}], ['circle', {
  cx: '9',
  cy: '5',
  r: '1',
  key: 'hp0tcf'
}], ['circle', {
  cx: '9',
  cy: '19',
  r: '1',
  key: 'fkjjf6'
}], ['circle', {
  cx: '15',
  cy: '12',
  r: '1',
  key: '1tmaij'
}], ['circle', {
  cx: '15',
  cy: '5',
  r: '1',
  key: '19l28e'
}], ['circle', {
  cx: '15',
  cy: '19',
  r: '1',
  key: 'f4zoj3'
}]]);
var GripVertical$1 = GripVertical;

var Hammer = createReactComponent('Hammer', [['path', {
  d: 'm15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9',
  key: '1afvon'
}], ['path', {
  d: 'M17.64 15 22 10.64',
  key: 'zsji6s'
}], ['path', {
  d: 'm20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91',
  key: 'lehyy1'
}]]);
var Hammer$1 = Hammer;

var HandMetal = createReactComponent('HandMetal', [['path', {
  d: 'M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4',
  key: '7eki13'
}], ['path', {
  d: 'M14 11V9a2 2 0 1 0-4 0v2',
  key: '94qvcw'
}], ['path', {
  d: 'M10 10.5V5a2 2 0 1 0-4 0v9',
  key: 'm1ah89'
}], ['path', {
  d: 'm7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5',
  key: 't1skq1'
}]]);
var HandMetal$1 = HandMetal;

var Hand = createReactComponent('Hand', [['path', {
  d: 'M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0',
  key: 'aigmz7'
}], ['path', {
  d: 'M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2',
  key: '1n6bmn'
}], ['path', {
  d: 'M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8',
  key: 'a9iiix'
}], ['path', {
  d: 'M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15',
  key: '1s1gnw'
}]]);
var Hand$1 = Hand;

var HardDrive = createReactComponent('HardDrive', [['line', {
  x1: '22',
  y1: '12',
  x2: '2',
  y2: '12',
  key: '3mrjqx'
}], ['path', {
  d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
  key: 'oot6mr'
}], ['line', {
  x1: '6',
  y1: '16',
  x2: '6.01',
  y2: '16',
  key: '17k2t0'
}], ['line', {
  x1: '10',
  y1: '16',
  x2: '10.01',
  y2: '16',
  key: '1oplzg'
}]]);
var HardDrive$1 = HardDrive;

var HardHat = createReactComponent('HardHat', [['path', {
  d: 'M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z',
  key: '1dej2m'
}], ['path', {
  d: 'M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5',
  key: '1p9q5i'
}], ['path', {
  d: 'M4 15v-3a6 6 0 0 1 6-6h0',
  key: '1uc279'
}], ['path', {
  d: 'M14 6h0a6 6 0 0 1 6 6v3',
  key: '1j9mnm'
}]]);
var HardHat$1 = HardHat;

var Hash = createReactComponent('Hash', [['line', {
  x1: '4',
  y1: '9',
  x2: '20',
  y2: '9',
  key: 'vg9vz1'
}], ['line', {
  x1: '4',
  y1: '15',
  x2: '20',
  y2: '15',
  key: '12vs86'
}], ['line', {
  x1: '10',
  y1: '3',
  x2: '8',
  y2: '21',
  key: '18wc2u'
}], ['line', {
  x1: '16',
  y1: '3',
  x2: '14',
  y2: '21',
  key: 'ohqwl5'
}]]);
var Hash$1 = Hash;

var Haze = createReactComponent('Haze', [['path', {
  d: 'm5.2 6.2 1.4 1.4',
  key: '17imol'
}], ['path', {
  d: 'M2 13h2',
  key: '13gyu8'
}], ['path', {
  d: 'M20 13h2',
  key: '16rner'
}], ['path', {
  d: 'm17.4 7.6 1.4-1.4',
  key: 't4xlah'
}], ['path', {
  d: 'M22 17H2',
  key: '1gtaj3'
}], ['path', {
  d: 'M22 21H2',
  key: '1gy6en'
}], ['path', {
  d: 'M16 13a4 4 0 0 0-8 0',
  key: '1dyczq'
}], ['path', {
  d: 'M12 5V2.5',
  key: '1vytko'
}]]);
var Haze$1 = Haze;

var Headphones = createReactComponent('Headphones', [['path', {
  d: 'M3 18v-6a9 9 0 0 1 18 0v6',
  key: 'e2ovd'
}], ['path', {
  d: 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z',
  key: '110y4r'
}]]);
var Headphones$1 = Headphones;

var HeartCrack = createReactComponent('HeartCrack', [['path', {
  d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z',
  key: '3q7jk9'
}], ['path', {
  d: 'm12 13-1-1 2-2-3-2.5 2.77-2.92',
  key: '5oba2v'
}]]);
var HeartCrack$1 = HeartCrack;

var HeartHandshake = createReactComponent('HeartHandshake', [['path', {
  d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z',
  key: '3q7jk9'
}], ['path', {
  d: 'M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a3 3 0 0 1 4.22 0l2.4 2.4',
  key: 't2xyyg'
}], ['path', {
  d: 'm18 15-2-2',
  key: '60u0ii'
}], ['path', {
  d: 'm15 18-2-2',
  key: '6p76be'
}]]);
var HeartHandshake$1 = HeartHandshake;

var HeartOff = createReactComponent('HeartOff', [['path', {
  d: 'M4.12 4.107a5.4 5.4 0 0 0-.538.473C1.46 6.7 1.33 10.28 4 13l8 8 4.5-4.5',
  key: 'yskeks'
}], ['path', {
  d: 'M19.328 13.672 20 13c2.67-2.72 2.54-6.3.42-8.42a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-2.386-1.393',
  key: '1340qr'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var HeartOff$1 = HeartOff;

var HeartPulse = createReactComponent('HeartPulse', [['path', {
  d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z',
  key: '3q7jk9'
}], ['path', {
  d: 'M3.5 12h6l.5-1 2 4.5 2-7 1.5 3.5h5',
  key: 'rc0z4z'
}]]);
var HeartPulse$1 = HeartPulse;

var Heart = createReactComponent('Heart', [['path', {
  d: 'M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z',
  key: '3q7jk9'
}]]);
var Heart$1 = Heart;

var HelpCircle = createReactComponent('HelpCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3',
  key: '1u773s'
}], ['line', {
  x1: '12',
  y1: '17',
  x2: '12.01',
  y2: '17',
  key: 'kdstpg'
}]]);
var HelpCircle$1 = HelpCircle;

var Hexagon = createReactComponent('Hexagon', [['path', {
  d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  key: 'yt0hxn'
}]]);
var Hexagon$1 = Hexagon;

var Highlighter = createReactComponent('Highlighter', [['path', {
  d: 'm9 11-6 6v3h9l3-3',
  key: '1a3l36'
}], ['path', {
  d: 'm22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4',
  key: '14a9rk'
}]]);
var Highlighter$1 = Highlighter;

var History = createReactComponent('History', [['path', {
  d: 'M3 3v5h5',
  key: '1xhq8a'
}], ['path', {
  d: 'M3.05 13A9 9 0 1 0 6 5.3L3 8',
  key: '1xoms2'
}], ['path', {
  d: 'M12 7v5l4 2',
  key: '1fdv2h'
}]]);
var History$1 = History;

var Home = createReactComponent('Home', [['path', {
  d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  key: 'y5dka4'
}], ['polyline', {
  points: '9 22 9 12 15 12 15 22',
  key: 'e2us08'
}]]);
var Home$1 = Home;

var Hourglass = createReactComponent('Hourglass', [['path', {
  d: 'M5 22h14',
  key: 'ehvnwv'
}], ['path', {
  d: 'M5 2h14',
  key: 'pdyrp9'
}], ['path', {
  d: 'M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22',
  key: '1d314k'
}], ['path', {
  d: 'M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2',
  key: '1vvvr6'
}]]);
var Hourglass$1 = Hourglass;

var IceCream = createReactComponent('IceCream', [['path', {
  d: 'm7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11',
  key: '1v6356'
}], ['path', {
  d: 'M17 7A5 5 0 0 0 7 7',
  key: '151p3v'
}], ['path', {
  d: 'M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4',
  key: '1sdaij'
}]]);
var IceCream$1 = IceCream;

var ImageMinus = createReactComponent('ImageMinus', [['path', {
  d: 'M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7',
  key: 'm87ecr'
}], ['line', {
  x1: '16',
  y1: '5',
  x2: '22',
  y2: '5',
  key: 'c5ve4s'
}], ['circle', {
  cx: '9',
  cy: '9',
  r: '2',
  key: 'af1f0g'
}], ['path', {
  d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21',
  key: '1xmnt7'
}]]);
var ImageMinus$1 = ImageMinus;

var ImageOff = createReactComponent('ImageOff', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}], ['path', {
  d: 'M10.41 10.41a2 2 0 1 1-2.83-2.83',
  key: '1bzlo9'
}], ['line', {
  x1: '13.5',
  y1: '13.5',
  x2: '6',
  y2: '21',
  key: '1oc4ns'
}], ['line', {
  x1: '18',
  y1: '12',
  x2: '21',
  y2: '15',
  key: '1j50dh'
}], ['path', {
  d: 'M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59',
  key: 'mmje98'
}], ['path', {
  d: 'M21 15V5a2 2 0 0 0-2-2H9',
  key: '43el77'
}]]);
var ImageOff$1 = ImageOff;

var ImagePlus = createReactComponent('ImagePlus', [['path', {
  d: 'M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7',
  key: '31hg93'
}], ['line', {
  x1: '16',
  y1: '5',
  x2: '22',
  y2: '5',
  key: 'c5ve4s'
}], ['line', {
  x1: '19',
  y1: '2',
  x2: '19',
  y2: '8',
  key: '12oc9j'
}], ['circle', {
  cx: '9',
  cy: '9',
  r: '2',
  key: 'af1f0g'
}], ['path', {
  d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21',
  key: '1xmnt7'
}]]);
var ImagePlus$1 = ImagePlus;

var Image = createReactComponent('Image', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['circle', {
  cx: '9',
  cy: '9',
  r: '2',
  key: 'af1f0g'
}], ['path', {
  d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21',
  key: '1xmnt7'
}]]);
var Image$1 = Image;

var Import = createReactComponent('Import', [['path', {
  d: 'M12 3v12',
  key: '1x0j5s'
}], ['path', {
  d: 'm8 11 4 4 4-4',
  key: '1dohi6'
}], ['path', {
  d: 'M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4',
  key: '1ywtjm'
}]]);
var Import$1 = Import;

var Inbox = createReactComponent('Inbox', [['polyline', {
  points: '22 12 16 12 14 15 10 15 8 12 2 12',
  key: 'o97t9d'
}], ['path', {
  d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
  key: 'oot6mr'
}]]);
var Inbox$1 = Inbox;

var Indent = createReactComponent('Indent', [['polyline', {
  points: '3 8 7 12 3 16',
  key: 'f3rxhf'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '11',
  y2: '12',
  key: '1xy73i'
}], ['line', {
  x1: '21',
  y1: '6',
  x2: '11',
  y2: '6',
  key: '97xvqg'
}], ['line', {
  x1: '21',
  y1: '18',
  x2: '11',
  y2: '18',
  key: '1r7j8g'
}]]);
var Indent$1 = Indent;

var IndianRupee = createReactComponent('IndianRupee', [['path', {
  d: 'M6 3h12',
  key: 'ggurg9'
}], ['path', {
  d: 'M6 8h12',
  key: '6g4wlu'
}], ['path', {
  d: 'm6 13 8.5 8',
  key: 'u1kupk'
}], ['path', {
  d: 'M6 13h3',
  key: 'wdp6ag'
}], ['path', {
  d: 'M9 13c6.667 0 6.667-10 0-10',
  key: '1nkvk2'
}]]);
var IndianRupee$1 = IndianRupee;

var Infinity = createReactComponent('Infinity', [['path', {
  d: 'M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z',
  key: '13d65y'
}]]);
var Infinity$1 = Infinity;

var Info = createReactComponent('Info', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '12',
  y1: '16',
  x2: '12',
  y2: '12',
  key: 'dkqlv3'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12.01',
  y2: '8',
  key: '1kl4hv'
}]]);
var Info$1 = Info;

var Inspect = createReactComponent('Inspect', [['path', {
  d: 'M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6',
  key: '14rsvq'
}], ['path', {
  d: 'm12 12 4 10 1.7-4.3L22 16Z',
  key: '64ilsv'
}]]);
var Inspect$1 = Inspect;

var Instagram = createReactComponent('Instagram', [['rect', {
  x: '2',
  y: '2',
  width: '20',
  height: '20',
  rx: '5',
  ry: '5',
  key: 'cdfzoc'
}], ['path', {
  d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
  key: '9exkf1'
}], ['line', {
  x1: '17.5',
  y1: '6.5',
  x2: '17.51',
  y2: '6.5',
  key: '643fve'
}]]);
var Instagram$1 = Instagram;

var Italic = createReactComponent('Italic', [['line', {
  x1: '19',
  y1: '4',
  x2: '10',
  y2: '4',
  key: 'ohvhe'
}], ['line', {
  x1: '14',
  y1: '20',
  x2: '5',
  y2: '20',
  key: 'pl6qj'
}], ['line', {
  x1: '15',
  y1: '4',
  x2: '9',
  y2: '20',
  key: 'baf5vk'
}]]);
var Italic$1 = Italic;

var JapaneseYen = createReactComponent('JapaneseYen', [['path', {
  d: 'M12 9.5V21m0-11.5L6 3m6 6.5L18 3',
  key: '2ej80x'
}], ['path', {
  d: 'M6 15h12',
  key: '1hwgt5'
}], ['path', {
  d: 'M6 11h12',
  key: 'wf4gp6'
}]]);
var JapaneseYen$1 = JapaneseYen;

var Joystick = createReactComponent('Joystick', [['path', {
  d: 'M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z',
  key: 'jg2n2t'
}], ['path', {
  d: 'M6 15v-2',
  key: 'gd6mvg'
}], ['path', {
  d: 'M12 15V9',
  key: '8c7uyn'
}], ['circle', {
  cx: '12',
  cy: '6',
  r: '3',
  key: '1gm2ql'
}]]);
var Joystick$1 = Joystick;

var Key = createReactComponent('Key', [['path', {
  d: 'm21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4',
  key: '1b7wfm'
}]]);
var Key$1 = Key;

var Keyboard = createReactComponent('Keyboard', [['rect', {
  x: '2',
  y: '4',
  width: '20',
  height: '16',
  rx: '2',
  ry: '2',
  key: 'xgg3gf'
}], ['path', {
  d: 'M6 8h.001',
  key: '1ej0i3'
}], ['path', {
  d: 'M10 8h.001',
  key: '1x2st2'
}], ['path', {
  d: 'M14 8h.001',
  key: '1vkmyp'
}], ['path', {
  d: 'M18 8h.001',
  key: 'kfsenl'
}], ['path', {
  d: 'M8 12h.001',
  key: '1sjpby'
}], ['path', {
  d: 'M12 12h.001',
  key: 'al75ts'
}], ['path', {
  d: 'M16 12h.001',
  key: '931bgk'
}], ['path', {
  d: 'M7 16h10',
  key: 'wp8him'
}]]);
var Keyboard$1 = Keyboard;

var LampCeiling = createReactComponent('LampCeiling', [['path', {
  d: 'M12 2v5',
  key: 'nd4vlx'
}], ['path', {
  d: 'M6 7h12l4 9H2l4-9Z',
  key: '123d64'
}], ['path', {
  d: 'M9.17 16a3 3 0 1 0 5.66 0',
  key: '1061mw'
}]]);
var LampCeiling$1 = LampCeiling;

var LampDesk = createReactComponent('LampDesk', [['path', {
  d: 'm14 5-3 3 2 7 8-8-7-2Z',
  key: '1b0msb'
}], ['path', {
  d: 'm14 5-3 3-3-3 3-3 3 3Z',
  key: '1uemms'
}], ['path', {
  d: 'M9.5 6.5 4 12l3 6',
  key: '1bx08v'
}], ['path', {
  d: 'M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z',
  key: 'wap775'
}]]);
var LampDesk$1 = LampDesk;

var LampFloor = createReactComponent('LampFloor', [['path', {
  d: 'M9 2h6l3 7H6l3-7Z',
  key: 'wcx6mj'
}], ['path', {
  d: 'M12 9v13',
  key: '3n1su1'
}], ['path', {
  d: 'M9 22h6',
  key: '1rlq3v'
}]]);
var LampFloor$1 = LampFloor;

var LampWallDown = createReactComponent('LampWallDown', [['path', {
  d: 'M11 13h6l3 7H8l3-7Z',
  key: '9n3qlo'
}], ['path', {
  d: 'M14 13V8a2 2 0 0 0-2-2H8',
  key: '1hu4hb'
}], ['path', {
  d: 'M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z',
  key: 's053bc'
}]]);
var LampWallDown$1 = LampWallDown;

var LampWallUp = createReactComponent('LampWallUp', [['path', {
  d: 'M11 4h6l3 7H8l3-7Z',
  key: '11x1ee'
}], ['path', {
  d: 'M14 11v5a2 2 0 0 1-2 2H8',
  key: 'eutp5o'
}], ['path', {
  d: 'M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z',
  key: '1iuthr'
}]]);
var LampWallUp$1 = LampWallUp;

var Lamp = createReactComponent('Lamp', [['path', {
  d: 'M8 2h8l4 10H4L8 2Z',
  key: '9dma5w'
}], ['path', {
  d: 'M12 12v6',
  key: '3ahymv'
}], ['path', {
  d: 'M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z',
  key: 'mwf4oh'
}]]);
var Lamp$1 = Lamp;

var Landmark = createReactComponent('Landmark', [['line', {
  x1: '3',
  y1: '22',
  x2: '21',
  y2: '22',
  key: '1mkv49'
}], ['line', {
  x1: '6',
  y1: '18',
  x2: '6',
  y2: '11',
  key: 'shpxqa'
}], ['line', {
  x1: '10',
  y1: '18',
  x2: '10',
  y2: '11',
  key: '6quq76'
}], ['line', {
  x1: '14',
  y1: '18',
  x2: '14',
  y2: '11',
  key: 'qxd7vm'
}], ['line', {
  x1: '18',
  y1: '18',
  x2: '18',
  y2: '11',
  key: '1m478d'
}], ['polygon', {
  points: '12 2 20 7 4 7',
  key: 'jkujk7'
}]]);
var Landmark$1 = Landmark;

var Languages = createReactComponent('Languages', [['path', {
  d: 'm5 8 6 6',
  key: '1wu5hv'
}], ['path', {
  d: 'm4 14 6-6 2-3',
  key: '1k1g8d'
}], ['path', {
  d: 'M2 5h12',
  key: 'or177f'
}], ['path', {
  d: 'M7 2h1',
  key: '1t2jsx'
}], ['path', {
  d: 'm22 22-5-10-5 10',
  key: 'don7ne'
}], ['path', {
  d: 'M14 18h6',
  key: '1m8k6r'
}]]);
var Languages$1 = Languages;

var Laptop2 = createReactComponent('Laptop2', [['rect', {
  x: '3',
  y: '4',
  width: '18',
  height: '12',
  rx: '2',
  ry: '2',
  key: '8tl1gx'
}], ['line', {
  x1: '2',
  y1: '20',
  x2: '22',
  y2: '20',
  key: '1pxzem'
}]]);
var Laptop2$1 = Laptop2;

var Laptop = createReactComponent('Laptop', [['path', {
  d: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16',
  key: 'tarvll'
}]]);
var Laptop$1 = Laptop;

var LassoSelect = createReactComponent('LassoSelect', [['path', {
  d: 'M7 22a5 5 0 0 1-2-4',
  key: 'umushi'
}], ['path', {
  d: 'M7 16.93c.96.43 1.96.74 2.99.91',
  key: 'ybbtv3'
}], ['path', {
  d: 'M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2',
  key: 'gt5e1w'
}], ['path', {
  d: 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  key: 'bq3ynw'
}], ['path', {
  d: 'M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z',
  key: '1bawls'
}]]);
var LassoSelect$1 = LassoSelect;

var Lasso = createReactComponent('Lasso', [['path', {
  d: 'M7 22a5 5 0 0 1-2-4',
  key: 'umushi'
}], ['path', {
  d: 'M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1',
  key: '146dds'
}], ['path', {
  d: 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  key: 'bq3ynw'
}]]);
var Lasso$1 = Lasso;

var Laugh = createReactComponent('Laugh', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z',
  key: 'b2q4dd'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9',
  key: '141aaf'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9',
  key: '1cyg3o'
}]]);
var Laugh$1 = Laugh;

var Layers = createReactComponent('Layers', [['polygon', {
  points: '12 2 2 7 12 12 22 7 12 2',
  key: '1b0ttc'
}], ['polyline', {
  points: '2 17 12 22 22 17',
  key: 'imjtdl'
}], ['polyline', {
  points: '2 12 12 17 22 12',
  key: '5dexcv'
}]]);
var Layers$1 = Layers;

var LayoutDashboard = createReactComponent('LayoutDashboard', [['rect', {
  x: '3',
  y: '3',
  width: '7',
  height: '9',
  key: '1eurd7'
}], ['rect', {
  x: '14',
  y: '3',
  width: '7',
  height: '5',
  key: 'zff5ux'
}], ['rect', {
  x: '14',
  y: '12',
  width: '7',
  height: '9',
  key: '1oiq0r'
}], ['rect', {
  x: '3',
  y: '16',
  width: '7',
  height: '5',
  key: '1145ac'
}]]);
var LayoutDashboard$1 = LayoutDashboard;

var LayoutGrid = createReactComponent('LayoutGrid', [['rect', {
  x: '3',
  y: '3',
  width: '7',
  height: '7',
  key: '1q9d4d'
}], ['rect', {
  x: '14',
  y: '3',
  width: '7',
  height: '7',
  key: '1kofyi'
}], ['rect', {
  x: '14',
  y: '14',
  width: '7',
  height: '7',
  key: '18jxcw'
}], ['rect', {
  x: '3',
  y: '14',
  width: '7',
  height: '7',
  key: '1omegr'
}]]);
var LayoutGrid$1 = LayoutGrid;

var LayoutList = createReactComponent('LayoutList', [['rect', {
  x: '3',
  y: '14',
  width: '7',
  height: '7',
  key: '1omegr'
}], ['rect', {
  x: '3',
  y: '3',
  width: '7',
  height: '7',
  key: '1q9d4d'
}], ['line', {
  x1: '14',
  y1: '4',
  x2: '21',
  y2: '4',
  key: '1klf7b'
}], ['line', {
  x1: '14',
  y1: '9',
  x2: '21',
  y2: '9',
  key: '1kf9x0'
}], ['line', {
  x1: '14',
  y1: '15',
  x2: '21',
  y2: '15',
  key: 's6i7v1'
}], ['line', {
  x1: '14',
  y1: '20',
  x2: '21',
  y2: '20',
  key: 'yxpbil'
}]]);
var LayoutList$1 = LayoutList;

var LayoutTemplate = createReactComponent('LayoutTemplate', [['path', {
  d: 'M21 3H3v7h18V3z',
  key: 'cq2tmr'
}], ['path', {
  d: 'M21 14h-5v7h5v-7z',
  key: '1dv32i'
}], ['path', {
  d: 'M12 14H3v7h9v-7z',
  key: '1k92lm'
}]]);
var LayoutTemplate$1 = LayoutTemplate;

var Layout = createReactComponent('Layout', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9',
  key: '1uch6j'
}], ['line', {
  x1: '9',
  y1: '21',
  x2: '9',
  y2: '9',
  key: '97zt75'
}]]);
var Layout$1 = Layout;

var Leaf = createReactComponent('Leaf', [['path', {
  d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z',
  key: 'nnexq3'
}], ['path', {
  d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
  key: 'mt58a7'
}]]);
var Leaf$1 = Leaf;

var Library = createReactComponent('Library', [['path', {
  d: 'm16 6 4 14',
  key: 'ji33uf'
}], ['path', {
  d: 'M12 6v14',
  key: '1n7gus'
}], ['path', {
  d: 'M8 8v12',
  key: '1gg7y9'
}], ['path', {
  d: 'M4 4v16',
  key: '6qkkli'
}]]);
var Library$1 = Library;

var LifeBuoy = createReactComponent('LifeBuoy', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '4',
  key: '4exip2'
}], ['line', {
  x1: '4.93',
  y1: '4.93',
  x2: '9.17',
  y2: '9.17',
  key: '1akcti'
}], ['line', {
  x1: '14.83',
  y1: '14.83',
  x2: '19.07',
  y2: '19.07',
  key: 'js56sr'
}], ['line', {
  x1: '14.83',
  y1: '9.17',
  x2: '19.07',
  y2: '4.93',
  key: 'ca9a8b'
}], ['line', {
  x1: '14.83',
  y1: '9.17',
  x2: '18.36',
  y2: '5.64',
  key: 'dsbuwx'
}], ['line', {
  x1: '4.93',
  y1: '19.07',
  x2: '9.17',
  y2: '14.83',
  key: '1lkv3n'
}]]);
var LifeBuoy$1 = LifeBuoy;

var LightbulbOff = createReactComponent('LightbulbOff', [['path', {
  d: 'M9 18h6',
  key: 'x1upvd'
}], ['path', {
  d: 'M10 22h4',
  key: 'ceow96'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}], ['path', {
  d: 'M9 2.804A6 6 0 0 1 18 8a4.65 4.65 0 0 1-1.03 3',
  key: '1v6krz'
}], ['path', {
  d: 'M8.91 14a4.61 4.61 0 0 0-1.41-2.5C6.23 10.23 6 9 6 8a6 6 0 0 1 .084-1',
  key: '1jxmct'
}]]);
var LightbulbOff$1 = LightbulbOff;

var Lightbulb = createReactComponent('Lightbulb', [['line', {
  x1: '9',
  y1: '18',
  x2: '15',
  y2: '18',
  key: 'poumom'
}], ['line', {
  x1: '10',
  y1: '22',
  x2: '14',
  y2: '22',
  key: '1oekqc'
}], ['path', {
  d: 'M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14',
  key: 'a9yf0y'
}]]);
var Lightbulb$1 = Lightbulb;

var LineChart = createReactComponent('LineChart', [['path', {
  d: 'M3 3v18h18',
  key: '1s2lah'
}], ['path', {
  d: 'm19 9-5 5-4-4-3 3',
  key: '2osh9i'
}]]);
var LineChart$1 = LineChart;

var Link2Off = createReactComponent('Link2Off', [['path', {
  d: 'M9 17H7A5 5 0 0 1 7 7',
  key: '10o201'
}], ['path', {
  d: 'M15 7h2a5 5 0 0 1 4 8',
  key: '1d3206'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '12',
  y2: '12',
  key: '1drbw0'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var Link2Off$1 = Link2Off;

var Link2 = createReactComponent('Link2', [['path', {
  d: 'M9 17H7A5 5 0 0 1 7 7h2',
  key: '8i5ue5'
}], ['path', {
  d: 'M15 7h2a5 5 0 1 1 0 10h-2',
  key: '1b9ql8'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}]]);
var Link2$1 = Link2;

var Link = createReactComponent('Link', [['path', {
  d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71',
  key: '1cjeqo'
}], ['path', {
  d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
  key: '19qd67'
}]]);
var Link$1 = Link;

var Linkedin = createReactComponent('Linkedin', [['path', {
  d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
  key: 'c2jq9f'
}], ['rect', {
  x: '2',
  y: '9',
  width: '4',
  height: '12',
  key: 'fu1a4h'
}], ['circle', {
  cx: '4',
  cy: '4',
  r: '2',
  key: 'bt5ra8'
}]]);
var Linkedin$1 = Linkedin;

var ListChecks = createReactComponent('ListChecks', [['line', {
  x1: '10',
  y1: '6',
  x2: '21',
  y2: '6',
  key: 'g7ikjt'
}], ['line', {
  x1: '10',
  y1: '12',
  x2: '21',
  y2: '12',
  key: 'xgqux5'
}], ['line', {
  x1: '10',
  y1: '18',
  x2: '21',
  y2: '18',
  key: '1q4fbe'
}], ['polyline', {
  points: '3 6 4 7 6 5',
  key: 'ectua5'
}], ['polyline', {
  points: '3 12 4 13 6 11',
  key: 'gtbhyw'
}], ['polyline', {
  points: '3 18 4 19 6 17',
  key: 'qzp18e'
}]]);
var ListChecks$1 = ListChecks;

var ListEnd = createReactComponent('ListEnd', [['path', {
  d: 'M16 12H3',
  key: '1a2rj7'
}], ['path', {
  d: 'M16 6H3',
  key: '1wxfjs'
}], ['path', {
  d: 'M10 18H3',
  key: '13769t'
}], ['path', {
  d: 'M21 6v10a2 2 0 0 1-2 2h-4',
  key: '1snekz'
}], ['path', {
  d: 'm16 16-2 2 2 2',
  key: 'kkc6pm'
}]]);
var ListEnd$1 = ListEnd;

var ListMinus = createReactComponent('ListMinus', [['path', {
  d: 'M11 12H3',
  key: '51ecnj'
}], ['path', {
  d: 'M16 6H3',
  key: '1wxfjs'
}], ['path', {
  d: 'M16 18H3',
  key: '12xzn7'
}], ['path', {
  d: 'M21 12h-6',
  key: 'bt1uis'
}]]);
var ListMinus$1 = ListMinus;

var ListMusic = createReactComponent('ListMusic', [['path', {
  d: 'M21 15V6',
  key: 'h1cx4g'
}], ['path', {
  d: 'M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  key: '8saifv'
}], ['path', {
  d: 'M12 12H3',
  key: '18klou'
}], ['path', {
  d: 'M16 6H3',
  key: '1wxfjs'
}], ['path', {
  d: 'M12 18H3',
  key: '11ftsu'
}]]);
var ListMusic$1 = ListMusic;

var ListOrdered = createReactComponent('ListOrdered', [['line', {
  x1: '10',
  y1: '6',
  x2: '21',
  y2: '6',
  key: 'g7ikjt'
}], ['line', {
  x1: '10',
  y1: '12',
  x2: '21',
  y2: '12',
  key: 'xgqux5'
}], ['line', {
  x1: '10',
  y1: '18',
  x2: '21',
  y2: '18',
  key: '1q4fbe'
}], ['path', {
  d: 'M4 6h1v4',
  key: 'cnovpq'
}], ['path', {
  d: 'M4 10h2',
  key: '16xx2s'
}], ['path', {
  d: 'M6 18H4c0-1 2-2 2-3s-1-1.5-2-1',
  key: 'm9a95d'
}]]);
var ListOrdered$1 = ListOrdered;

var ListPlus = createReactComponent('ListPlus', [['path', {
  d: 'M11 12H3',
  key: '51ecnj'
}], ['path', {
  d: 'M16 6H3',
  key: '1wxfjs'
}], ['path', {
  d: 'M16 18H3',
  key: '12xzn7'
}], ['path', {
  d: 'M18 9v6',
  key: '1twb98'
}], ['path', {
  d: 'M21 12h-6',
  key: 'bt1uis'
}]]);
var ListPlus$1 = ListPlus;

var ListStart = createReactComponent('ListStart', [['path', {
  d: 'M16 12H3',
  key: '1a2rj7'
}], ['path', {
  d: 'M16 18H3',
  key: '12xzn7'
}], ['path', {
  d: 'M10 6H3',
  key: 'lf8lx7'
}], ['path', {
  d: 'M21 18V8a2 2 0 0 0-2-2h-5',
  key: '1hghli'
}], ['path', {
  d: 'm16 8-2-2 2-2',
  key: '160uvd'
}]]);
var ListStart$1 = ListStart;

var ListVideo = createReactComponent('ListVideo', [['path', {
  d: 'M12 12H3',
  key: '18klou'
}], ['path', {
  d: 'M16 6H3',
  key: '1wxfjs'
}], ['path', {
  d: 'M12 18H3',
  key: '11ftsu'
}], ['path', {
  d: 'm16 12 5 3-5 3v-6Z',
  key: 'zpskkp'
}]]);
var ListVideo$1 = ListVideo;

var ListX = createReactComponent('ListX', [['path', {
  d: 'M11 12H3',
  key: '51ecnj'
}], ['path', {
  d: 'M16 6H3',
  key: '1wxfjs'
}], ['path', {
  d: 'M16 18H3',
  key: '12xzn7'
}], ['path', {
  d: 'm19 10-4 4',
  key: '1tz659'
}], ['path', {
  d: 'm15 10 4 4',
  key: '1n7nei'
}]]);
var ListX$1 = ListX;

var List = createReactComponent('List', [['line', {
  x1: '8',
  y1: '6',
  x2: '21',
  y2: '6',
  key: '1kveod'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '21',
  y2: '12',
  key: '120u6p'
}], ['line', {
  x1: '8',
  y1: '18',
  x2: '21',
  y2: '18',
  key: '1k409v'
}], ['line', {
  x1: '3',
  y1: '6',
  x2: '3.01',
  y2: '6',
  key: '13co06'
}], ['line', {
  x1: '3',
  y1: '12',
  x2: '3.01',
  y2: '12',
  key: '11tec3'
}], ['line', {
  x1: '3',
  y1: '18',
  x2: '3.01',
  y2: '18',
  key: '14wug1'
}]]);
var List$1 = List;

var Loader2 = createReactComponent('Loader2', [['path', {
  d: 'M21 12a9 9 0 1 1-6.219-8.56',
  key: '13zald'
}]]);
var Loader2$1 = Loader2;

var Loader = createReactComponent('Loader', [['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '6',
  key: '1pduqs'
}], ['line', {
  x1: '12',
  y1: '18',
  x2: '12',
  y2: '22',
  key: '1b94uv'
}], ['line', {
  x1: '4.93',
  y1: '4.93',
  x2: '7.76',
  y2: '7.76',
  key: '1a736z'
}], ['line', {
  x1: '16.24',
  y1: '16.24',
  x2: '19.07',
  y2: '19.07',
  key: 'gt096z'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '6',
  y2: '12',
  key: 'rkbu33'
}], ['line', {
  x1: '18',
  y1: '12',
  x2: '22',
  y2: '12',
  key: '1vrbnu'
}], ['line', {
  x1: '4.93',
  y1: '19.07',
  x2: '7.76',
  y2: '16.24',
  key: '59c6el'
}], ['line', {
  x1: '16.24',
  y1: '7.76',
  x2: '19.07',
  y2: '4.93',
  key: '8m03gt'
}]]);
var Loader$1 = Loader;

var LocateFixed = createReactComponent('LocateFixed', [['line', {
  x1: '2',
  x2: '5',
  y1: '12',
  y2: '12',
  key: 'bvdh0s'
}], ['line', {
  x1: '19',
  x2: '22',
  y1: '12',
  y2: '12',
  key: '1tbv5k'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '2',
  y2: '5',
  key: '11lu5j'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '19',
  y2: '22',
  key: 'x3vr5v'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '7',
  key: 'fim9np'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}]]);
var LocateFixed$1 = LocateFixed;

var LocateOff = createReactComponent('LocateOff', [['line', {
  x1: '2',
  x2: '5',
  y1: '12',
  y2: '12',
  key: 'bvdh0s'
}], ['line', {
  x1: '19',
  x2: '22',
  y1: '12',
  y2: '12',
  key: '1tbv5k'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '2',
  y2: '5',
  key: '11lu5j'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '19',
  y2: '22',
  key: 'x3vr5v'
}], ['path', {
  d: 'M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11',
  key: '1oh7ia'
}], ['path', {
  d: 'M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29',
  key: '3qdecy'
}], ['line', {
  x1: '2',
  x2: '22',
  y1: '2',
  y2: '22',
  key: 'a6p6uj'
}]]);
var LocateOff$1 = LocateOff;

var Locate = createReactComponent('Locate', [['line', {
  x1: '2',
  x2: '5',
  y1: '12',
  y2: '12',
  key: 'bvdh0s'
}], ['line', {
  x1: '19',
  x2: '22',
  y1: '12',
  y2: '12',
  key: '1tbv5k'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '2',
  y2: '5',
  key: '11lu5j'
}], ['line', {
  x1: '12',
  x2: '12',
  y1: '19',
  y2: '22',
  key: 'x3vr5v'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '7',
  key: 'fim9np'
}]]);
var Locate$1 = Locate;

var Lock = createReactComponent('Lock', [['rect', {
  x: '3',
  y: '11',
  width: '18',
  height: '11',
  rx: '2',
  ry: '2',
  key: 'biyj2e'
}], ['path', {
  d: 'M7 11V7a5 5 0 0 1 10 0v4',
  key: 'fwvmzm'
}]]);
var Lock$1 = Lock;

var LogIn = createReactComponent('LogIn', [['path', {
  d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4',
  key: 'u53s6r'
}], ['polyline', {
  points: '10 17 15 12 10 7',
  key: '1ail0h'
}], ['line', {
  x1: '15',
  y1: '12',
  x2: '3',
  y2: '12',
  key: '80e4vw'
}]]);
var LogIn$1 = LogIn;

var LogOut = createReactComponent('LogOut', [['path', {
  d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4',
  key: '1uf3rs'
}], ['polyline', {
  points: '16 17 21 12 16 7',
  key: '1gabdz'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '9',
  y2: '12',
  key: '1stwgr'
}]]);
var LogOut$1 = LogOut;

var Luggage = createReactComponent('Luggage', [['path', {
  d: 'M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0',
  key: '1h5fkc'
}], ['path', {
  d: 'M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14',
  key: '1l99gc'
}], ['path', {
  d: 'M10 20h4',
  key: 'ni2waw'
}], ['circle', {
  cx: '16',
  cy: '20',
  r: '2',
  key: '1vifvg'
}], ['circle', {
  cx: '8',
  cy: '20',
  r: '2',
  key: 'ckkr5m'
}]]);
var Luggage$1 = Luggage;

var Magnet = createReactComponent('Magnet', [['path', {
  d: 'm6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15',
  key: '1i3lhw'
}], ['path', {
  d: 'm5 8 4 4',
  key: 'j6kj7e'
}], ['path', {
  d: 'm12 15 4 4',
  key: 'lnac28'
}]]);
var Magnet$1 = Magnet;

var MailCheck = createReactComponent('MailCheck', [['path', {
  d: 'M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8',
  key: '12jkf8'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}], ['path', {
  d: 'm16 19 2 2 4-4',
  key: '1b14m6'
}]]);
var MailCheck$1 = MailCheck;

var MailMinus = createReactComponent('MailMinus', [['path', {
  d: 'M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8',
  key: 'fuxbkv'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}], ['path', {
  d: 'M16 19h6',
  key: 'xwg31i'
}]]);
var MailMinus$1 = MailMinus;

var MailOpen = createReactComponent('MailOpen', [['path', {
  d: 'M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z',
  key: '1jhwl8'
}], ['path', {
  d: 'm22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10',
  key: '1qfld7'
}]]);
var MailOpen$1 = MailOpen;

var MailPlus = createReactComponent('MailPlus', [['path', {
  d: 'M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8',
  key: '12jkf8'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}], ['path', {
  d: 'M19 16v6',
  key: 'tddt3s'
}], ['path', {
  d: 'M16 19h6',
  key: 'xwg31i'
}]]);
var MailPlus$1 = MailPlus;

var MailQuestion = createReactComponent('MailQuestion', [['path', {
  d: 'M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5',
  key: 'e61zoh'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}], ['path', {
  d: 'M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2',
  key: '7z9rxb'
}], ['path', {
  d: 'M20 22v.01',
  key: '12bgn6'
}]]);
var MailQuestion$1 = MailQuestion;

var MailSearch = createReactComponent('MailSearch', [['path', {
  d: 'M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5',
  key: 'w80f2v'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}], ['path', {
  d: 'M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z',
  key: 'mgbru4'
}], ['circle', {
  cx: '18',
  cy: '18',
  r: '3',
  key: '1xkwt0'
}], ['path', {
  d: 'm22 22-1.5-1.5',
  key: '1x83k4'
}]]);
var MailSearch$1 = MailSearch;

var MailWarning = createReactComponent('MailWarning', [['path', {
  d: 'M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5',
  key: 'e61zoh'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}], ['path', {
  d: 'M20 14v4',
  key: '1hm744'
}], ['path', {
  d: 'M20 22v.01',
  key: '12bgn6'
}]]);
var MailWarning$1 = MailWarning;

var MailX = createReactComponent('MailX', [['path', {
  d: 'M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9',
  key: '1j9vog'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}], ['path', {
  d: 'm17 17 4 4',
  key: '1b3523'
}], ['path', {
  d: 'm21 17-4 4',
  key: 'uinynz'
}]]);
var MailX$1 = MailX;

var Mail = createReactComponent('Mail', [['rect', {
  x: '2',
  y: '4',
  width: '20',
  height: '16',
  rx: '2',
  key: 'izxlao'
}], ['path', {
  d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  key: '1ocrg3'
}]]);
var Mail$1 = Mail;

var Mails = createReactComponent('Mails', [['rect', {
  x: '6',
  y: '4',
  width: '16',
  height: '13',
  rx: '2',
  key: 'q6n4z8'
}], ['path', {
  d: 'm22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7',
  key: 'xn252p'
}], ['path', {
  d: 'M2 8v11c0 1.1.9 2 2 2h14',
  key: 'n13cji'
}]]);
var Mails$1 = Mails;

var MapPinOff = createReactComponent('MapPinOff', [['path', {
  d: 'M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5',
  key: '12a8pk'
}], ['path', {
  d: 'M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82',
  key: '1r9f6y'
}], ['path', {
  d: 'M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13',
  key: 'erynq7'
}], ['path', {
  d: 'M14.9 9.25a3 3 0 0 0-2.15-2.16',
  key: '1hwwmx'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var MapPinOff$1 = MapPinOff;

var MapPin = createReactComponent('MapPin', [['path', {
  d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z',
  key: '2oe9fu'
}], ['circle', {
  cx: '12',
  cy: '10',
  r: '3',
  key: 'ilqhr7'
}]]);
var MapPin$1 = MapPin;

var Map = createReactComponent('Map', [['polygon', {
  points: '3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21',
  key: 'ok2ie8'
}], ['line', {
  x1: '9',
  y1: '3',
  x2: '9',
  y2: '18',
  key: '3zqglt'
}], ['line', {
  x1: '15',
  y1: '6',
  x2: '15',
  y2: '21',
  key: '1c9xoo'
}]]);
var Map$1 = Map;

var Martini = createReactComponent('Martini', [['path', {
  d: 'M8 22h8',
  key: 'rmew8v'
}], ['path', {
  d: 'M12 11v11',
  key: 'ur9y6a'
}], ['path', {
  d: 'm19 3-7 8-7-8Z',
  key: '1sgpiw'
}]]);
var Martini$1 = Martini;

var Maximize2 = createReactComponent('Maximize2', [['polyline', {
  points: '15 3 21 3 21 9',
  key: 'mznyad'
}], ['polyline', {
  points: '9 21 3 21 3 15',
  key: '1avn1i'
}], ['line', {
  x1: '21',
  y1: '3',
  x2: '14',
  y2: '10',
  key: '8isubj'
}], ['line', {
  x1: '3',
  y1: '21',
  x2: '10',
  y2: '14',
  key: 'c1a6xr'
}]]);
var Maximize2$1 = Maximize2;

var Maximize = createReactComponent('Maximize', [['path', {
  d: 'M8 3H5a2 2 0 0 0-2 2v3',
  key: '1dcmit'
}], ['path', {
  d: 'M21 8V5a2 2 0 0 0-2-2h-3',
  key: '1e4gt3'
}], ['path', {
  d: 'M3 16v3a2 2 0 0 0 2 2h3',
  key: 'wsl5sc'
}], ['path', {
  d: 'M16 21h3a2 2 0 0 0 2-2v-3',
  key: '18trek'
}]]);
var Maximize$1 = Maximize;

var Medal = createReactComponent('Medal', [['path', {
  d: 'M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15',
  key: '143lza'
}], ['path', {
  d: 'M11 12 5.12 2.2',
  key: 'qhuxz6'
}], ['path', {
  d: 'm13 12 5.88-9.8',
  key: 'hbye0f'
}], ['path', {
  d: 'M8 7h8',
  key: 'i86dvs'
}], ['circle', {
  cx: '12',
  cy: '17',
  r: '5',
  key: 'qbz8iq'
}], ['path', {
  d: 'M12 18v-2h-.5',
  key: 'fawc4q'
}]]);
var Medal$1 = Medal;

var MegaphoneOff = createReactComponent('MegaphoneOff', [['path', {
  d: 'M9.26 9.26 3 11v3l14.14 3.14',
  key: '3429n'
}], ['path', {
  d: 'M21 15.34V6l-7.31 2.03',
  key: '4o1dh8'
}], ['path', {
  d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6',
  key: '1yl0tm'
}], ['line', {
  x1: '2',
  x2: '22',
  y1: '2',
  y2: '22',
  key: 'a6p6uj'
}]]);
var MegaphoneOff$1 = MegaphoneOff;

var Megaphone = createReactComponent('Megaphone', [['path', {
  d: 'm3 11 18-5v12L3 14v-3z',
  key: 'n962bs'
}], ['path', {
  d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6',
  key: '1yl0tm'
}]]);
var Megaphone$1 = Megaphone;

var Meh = createReactComponent('Meh', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '8',
  y1: '15',
  x2: '16',
  y2: '15',
  key: '29ieok'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9',
  key: '141aaf'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9',
  key: '1cyg3o'
}]]);
var Meh$1 = Meh;

var Menu = createReactComponent('Menu', [['line', {
  x1: '4',
  y1: '12',
  x2: '20',
  y2: '12',
  key: '1q6rtp'
}], ['line', {
  x1: '4',
  y1: '6',
  x2: '20',
  y2: '6',
  key: '1jr6gt'
}], ['line', {
  x1: '4',
  y1: '18',
  x2: '20',
  y2: '18',
  key: '98tuvx'
}]]);
var Menu$1 = Menu;

var MessageCircle = createReactComponent('MessageCircle', [['path', {
  d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
  key: '5iho0c'
}]]);
var MessageCircle$1 = MessageCircle;

var MessageSquare = createReactComponent('MessageSquare', [['path', {
  d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  key: '1lielz'
}]]);
var MessageSquare$1 = MessageSquare;

var Mic2 = createReactComponent('Mic2', [['path', {
  d: 'm12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12',
  key: 'zoua8r'
}], ['circle', {
  cx: '17',
  cy: '7',
  r: '5',
  key: '1fomce'
}]]);
var Mic2$1 = Mic2;

var MicOff = createReactComponent('MicOff', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}], ['path', {
  d: 'M18.89 13.23A7.12 7.12 0 0 0 19 12v-2',
  key: '80xlxr'
}], ['path', {
  d: 'M5 10v2a7 7 0 0 0 12 5',
  key: 'p2k8kg'
}], ['path', {
  d: 'M15 9.34V5a3 3 0 0 0-5.68-1.33',
  key: '1gzdoj'
}], ['path', {
  d: 'M9 9v3a3 3 0 0 0 5.12 2.12',
  key: 'r2i35w'
}], ['line', {
  x1: '12',
  y1: '19',
  x2: '12',
  y2: '22',
  key: '1l505v'
}]]);
var MicOff$1 = MicOff;

var Mic = createReactComponent('Mic', [['path', {
  d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z',
  key: '131961'
}], ['path', {
  d: 'M19 10v2a7 7 0 0 1-14 0v-2',
  key: '1vc78b'
}], ['line', {
  x1: '12',
  y1: '19',
  x2: '12',
  y2: '22',
  key: '1l505v'
}]]);
var Mic$1 = Mic;

var Microscope = createReactComponent('Microscope', [['path', {
  d: 'M6 18h8',
  key: '1borvv'
}], ['path', {
  d: 'M3 22h18',
  key: '8prr45'
}], ['path', {
  d: 'M14 22a7 7 0 1 0 0-14h-1',
  key: '1jwaiy'
}], ['path', {
  d: 'M9 14h2',
  key: '197e7h'
}], ['path', {
  d: 'M8 6h4',
  key: 'i9thid'
}], ['path', {
  d: 'M13 10V6.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V10c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2Z',
  key: 'z62yqi'
}]]);
var Microscope$1 = Microscope;

var Microwave = createReactComponent('Microwave', [['rect', {
  x: '2',
  y: '4',
  width: '20',
  height: '15',
  rx: '2',
  key: '1rfv8z'
}], ['rect', {
  x: '6',
  y: '8',
  width: '8',
  height: '7',
  rx: '1',
  key: 'i43qc1'
}], ['path', {
  d: 'M18 8v7',
  key: 'o5zi4n'
}], ['path', {
  d: 'M6 19v2',
  key: '1loha6'
}], ['path', {
  d: 'M18 19v2',
  key: '1dawf0'
}]]);
var Microwave$1 = Microwave;

var Milestone = createReactComponent('Milestone', [['path', {
  d: 'M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z',
  key: '1mp5s7'
}], ['path', {
  d: 'M12 13v9',
  key: 'keea1l'
}], ['path', {
  d: 'M12 2v4',
  key: '3427ic'
}]]);
var Milestone$1 = Milestone;

var Minimize2 = createReactComponent('Minimize2', [['polyline', {
  points: '4 14 10 14 10 20',
  key: '11kfnr'
}], ['polyline', {
  points: '20 10 14 10 14 4',
  key: 'rlmsce'
}], ['line', {
  x1: '14',
  y1: '10',
  x2: '21',
  y2: '3',
  key: '6dvi8v'
}], ['line', {
  x1: '3',
  y1: '21',
  x2: '10',
  y2: '14',
  key: 'c1a6xr'
}]]);
var Minimize2$1 = Minimize2;

var Minimize = createReactComponent('Minimize', [['path', {
  d: 'M8 3v3a2 2 0 0 1-2 2H3',
  key: 'hohbtr'
}], ['path', {
  d: 'M21 8h-3a2 2 0 0 1-2-2V3',
  key: '5jw1f3'
}], ['path', {
  d: 'M3 16h3a2 2 0 0 1 2 2v3',
  key: '198tvr'
}], ['path', {
  d: 'M16 21v-3a2 2 0 0 1 2-2h3',
  key: 'ph8mxp'
}]]);
var Minimize$1 = Minimize;

var MinusCircle = createReactComponent('MinusCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}]]);
var MinusCircle$1 = MinusCircle;

var MinusSquare = createReactComponent('MinusSquare', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}]]);
var MinusSquare$1 = MinusSquare;

var Minus = createReactComponent('Minus', [['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12',
  key: '1smlys'
}]]);
var Minus$1 = Minus;

var MonitorOff = createReactComponent('MonitorOff', [['path', {
  d: 'M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2',
  key: 'k0q8oc'
}], ['path', {
  d: 'M22 15V5a2 2 0 0 0-2-2H9',
  key: 'cp1ac0'
}], ['path', {
  d: 'M8 21h8',
  key: '1ev6f3'
}], ['path', {
  d: 'M12 17v4',
  key: '1riwvh'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}]]);
var MonitorOff$1 = MonitorOff;

var MonitorSpeaker = createReactComponent('MonitorSpeaker', [['path', {
  d: 'M5.5 20H8',
  key: '1k40s5'
}], ['path', {
  d: 'M17 9h.01',
  key: '1j24nn'
}], ['rect', {
  x: '12',
  y: '4',
  width: '10',
  height: '16',
  rx: '2',
  key: '1gi0i2'
}], ['path', {
  d: 'M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4',
  key: '1mp6e1'
}], ['circle', {
  cx: '17',
  cy: '15',
  r: '1',
  key: 'tqvash'
}]]);
var MonitorSpeaker$1 = MonitorSpeaker;

var Monitor = createReactComponent('Monitor', [['rect', {
  x: '2',
  y: '3',
  width: '20',
  height: '14',
  rx: '2',
  ry: '2',
  key: '1q87ek'
}], ['line', {
  x1: '8',
  y1: '21',
  x2: '16',
  y2: '21',
  key: 'bcbiac'
}], ['line', {
  x1: '12',
  y1: '17',
  x2: '12',
  y2: '21',
  key: '1v4d7v'
}]]);
var Monitor$1 = Monitor;

var Moon = createReactComponent('Moon', [['path', {
  d: 'M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z',
  key: '1rit1i'
}]]);
var Moon$1 = Moon;

var MoreHorizontal = createReactComponent('MoreHorizontal', [['circle', {
  cx: '12',
  cy: '12',
  r: '1',
  key: '41hilf'
}], ['circle', {
  cx: '19',
  cy: '12',
  r: '1',
  key: '1wjl8i'
}], ['circle', {
  cx: '5',
  cy: '12',
  r: '1',
  key: '1pcz8c'
}]]);
var MoreHorizontal$1 = MoreHorizontal;

var MoreVertical = createReactComponent('MoreVertical', [['circle', {
  cx: '12',
  cy: '12',
  r: '1',
  key: '41hilf'
}], ['circle', {
  cx: '12',
  cy: '5',
  r: '1',
  key: 'gxeob9'
}], ['circle', {
  cx: '12',
  cy: '19',
  r: '1',
  key: 'lyex9k'
}]]);
var MoreVertical$1 = MoreVertical;

var MountainSnow = createReactComponent('MountainSnow', [['path', {
  d: 'm8 3 4 8 5-5 5 15H2L8 3z',
  key: 'otkl63'
}], ['path', {
  d: 'M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19',
  key: '1pvmmp'
}]]);
var MountainSnow$1 = MountainSnow;

var Mountain = createReactComponent('Mountain', [['path', {
  d: 'm8 3 4 8 5-5 5 15H2L8 3z',
  key: 'otkl63'
}]]);
var Mountain$1 = Mountain;

var MousePointer2 = createReactComponent('MousePointer2', [['path', {
  d: 'm4 4 7.07 17 2.51-7.39L21 11.07z',
  key: '1vqm48'
}]]);
var MousePointer2$1 = MousePointer2;

var MousePointerClick = createReactComponent('MousePointerClick', [['path', {
  d: 'm9 9 5 12 1.774-5.226L21 14 9 9z',
  key: '1qd44z'
}], ['path', {
  d: 'm16.071 16.071 4.243 4.243',
  key: 'wfhsjb'
}], ['path', {
  d: 'm7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122',
  key: '1bk8fz'
}]]);
var MousePointerClick$1 = MousePointerClick;

var MousePointer = createReactComponent('MousePointer', [['path', {
  d: 'm3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z',
  key: 'y2ucgo'
}], ['path', {
  d: 'm13 13 6 6',
  key: '1nhxnf'
}]]);
var MousePointer$1 = MousePointer;

var Mouse = createReactComponent('Mouse', [['rect', {
  x: '6',
  y: '3',
  width: '12',
  height: '18',
  rx: '6',
  key: 'wskjtk'
}], ['path', {
  d: 'M12 7v4',
  key: 'xawao1'
}]]);
var Mouse$1 = Mouse;

var Move3d = createReactComponent('Move3d', [['path', {
  d: 'M5 3v16h16',
  key: '1mqmf9'
}], ['path', {
  d: 'm5 19 6-6',
  key: 'jh6hbb'
}], ['path', {
  d: 'm2 6 3-3 3 3',
  key: 'tkyvxa'
}], ['path', {
  d: 'm18 16 3 3-3 3',
  key: '1d4glt'
}]]);
var Move3d$1 = Move3d;

var MoveDiagonal2 = createReactComponent('MoveDiagonal2', [['polyline', {
  points: '5 11 5 5 11 5',
  key: 'ncfzxk'
}], ['polyline', {
  points: '19 13 19 19 13 19',
  key: '1mk7hk'
}], ['line', {
  x1: '5',
  y1: '5',
  x2: '19',
  y2: '19',
  key: '4tvgsr'
}]]);
var MoveDiagonal2$1 = MoveDiagonal2;

var MoveDiagonal = createReactComponent('MoveDiagonal', [['polyline', {
  points: '13 5 19 5 19 11',
  key: '11219e'
}], ['polyline', {
  points: '11 19 5 19 5 13',
  key: 'sfq3wq'
}], ['line', {
  x1: '19',
  y1: '5',
  x2: '5',
  y2: '19',
  key: 't1677v'
}]]);
var MoveDiagonal$1 = MoveDiagonal;

var MoveHorizontal = createReactComponent('MoveHorizontal', [['polyline', {
  points: '18 8 22 12 18 16',
  key: '1hqrds'
}], ['polyline', {
  points: '6 8 2 12 6 16',
  key: 'f0ernq'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12',
  key: 'zvmn4p'
}]]);
var MoveHorizontal$1 = MoveHorizontal;

var MoveVertical = createReactComponent('MoveVertical', [['polyline', {
  points: '8 18 12 22 16 18',
  key: '1uutw3'
}], ['polyline', {
  points: '8 6 12 2 16 6',
  key: 'd60sxy'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '22',
  key: '1k6o5o'
}]]);
var MoveVertical$1 = MoveVertical;

var Move = createReactComponent('Move', [['polyline', {
  points: '5 9 2 12 5 15',
  key: '1r5uj5'
}], ['polyline', {
  points: '9 5 12 2 15 5',
  key: '5v383o'
}], ['polyline', {
  points: '15 19 12 22 9 19',
  key: 'g7qi8m'
}], ['polyline', {
  points: '19 9 22 12 19 15',
  key: 'tpp73q'
}], ['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12',
  key: 'zvmn4p'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '22',
  key: '1k6o5o'
}]]);
var Move$1 = Move;

var Music2 = createReactComponent('Music2', [['circle', {
  cx: '8',
  cy: '18',
  r: '4',
  key: '1fc0mg'
}], ['path', {
  d: 'M12 18V2l7 4',
  key: 'g04rme'
}]]);
var Music2$1 = Music2;

var Music3 = createReactComponent('Music3', [['circle', {
  cx: '12',
  cy: '18',
  r: '4',
  key: 'm3r9ws'
}], ['path', {
  d: 'M16 18V2',
  key: '40x2m5'
}]]);
var Music3$1 = Music3;

var Music4 = createReactComponent('Music4', [['path', {
  d: 'M9 18V5l12-2v13',
  key: '1jmyc2'
}], ['path', {
  d: 'm9 9 12-2',
  key: '1e64n2'
}], ['circle', {
  cx: '6',
  cy: '18',
  r: '3',
  key: 'fqmcym'
}], ['circle', {
  cx: '18',
  cy: '16',
  r: '3',
  key: '1hluhg'
}]]);
var Music4$1 = Music4;

var Music = createReactComponent('Music', [['path', {
  d: 'M9 18V5l12-2v13',
  key: '1jmyc2'
}], ['circle', {
  cx: '6',
  cy: '18',
  r: '3',
  key: 'fqmcym'
}], ['circle', {
  cx: '18',
  cy: '16',
  r: '3',
  key: '1hluhg'
}]]);
var Music$1 = Music;

var Navigation2Off = createReactComponent('Navigation2Off', [['path', {
  d: 'M9.31 9.31 5 21l7-4 7 4-1.17-3.17',
  key: 'qoq2o2'
}], ['path', {
  d: 'M14.53 8.88 12 2l-1.17 3.17',
  key: 'k3sjzy'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var Navigation2Off$1 = Navigation2Off;

var Navigation2 = createReactComponent('Navigation2', [['polygon', {
  points: '12 2 19 21 12 17 5 21 12 2',
  key: 'x8c0qg'
}]]);
var Navigation2$1 = Navigation2;

var NavigationOff = createReactComponent('NavigationOff', [['path', {
  d: 'M8.43 8.43 3 11l8 2 2 8 2.57-5.43',
  key: '1vdtb7'
}], ['path', {
  d: 'M17.39 11.73 22 2l-9.73 4.61',
  key: 'tya3r6'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var NavigationOff$1 = NavigationOff;

var Navigation = createReactComponent('Navigation', [['polygon', {
  points: '3 11 22 2 13 21 11 13 3 11',
  key: '1ltx0t'
}]]);
var Navigation$1 = Navigation;

var Network = createReactComponent('Network', [['rect', {
  x: '9',
  y: '2',
  width: '6',
  height: '6',
  key: '1iwon9'
}], ['rect', {
  x: '16',
  y: '16',
  width: '6',
  height: '6',
  key: 'gonbwd'
}], ['rect', {
  x: '2',
  y: '16',
  width: '6',
  height: '6',
  key: '1q0lzr'
}], ['path', {
  d: 'M5 16v-4h14v4',
  key: '8njgxx'
}], ['path', {
  d: 'M12 12V8',
  key: '2874zd'
}]]);
var Network$1 = Network;

var Newspaper = createReactComponent('Newspaper', [['path', {
  d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2',
  key: '7pis2x'
}], ['path', {
  d: 'M18 14h-8',
  key: 'sponae'
}], ['path', {
  d: 'M15 18h-5',
  key: '95g1m2'
}], ['path', {
  d: 'M10 6h8v4h-8V6Z',
  key: 'smlsk5'
}]]);
var Newspaper$1 = Newspaper;

var Octagon = createReactComponent('Octagon', [['polygon', {
  points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2',
  key: 'h1p8hx'
}]]);
var Octagon$1 = Octagon;

var Option = createReactComponent('Option', [['path', {
  d: 'M3 3h6l6 18h6',
  key: 'ph9rgk'
}], ['path', {
  d: 'M14 3h7',
  key: '16f0ms'
}]]);
var Option$1 = Option;

var Outdent = createReactComponent('Outdent', [['polyline', {
  points: '7 8 3 12 7 16',
  key: '2j60jr'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '11',
  y2: '12',
  key: '1xy73i'
}], ['line', {
  x1: '21',
  y1: '6',
  x2: '11',
  y2: '6',
  key: '97xvqg'
}], ['line', {
  x1: '21',
  y1: '18',
  x2: '11',
  y2: '18',
  key: '1r7j8g'
}]]);
var Outdent$1 = Outdent;

var Package2 = createReactComponent('Package2', [['path', {
  d: 'M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z',
  key: '1ront0'
}], ['path', {
  d: 'm3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9',
  key: '19h2x1'
}], ['path', {
  d: 'M12 3v6',
  key: '1holv5'
}]]);
var Package2$1 = Package2;

var PackageCheck = createReactComponent('PackageCheck', [['path', {
  d: 'm16 16 2 2 4-4',
  key: 'gfu2re'
}], ['path', {
  d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14',
  key: 'e7tb2h'
}], ['path', {
  d: 'M16.5 9.4 7.55 4.24',
  key: '10qotr'
}], ['polyline', {
  points: '3.29 7 12 12 20.71 7',
  key: 'ousv84'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '12',
  key: 'gdv6h4'
}]]);
var PackageCheck$1 = PackageCheck;

var PackageMinus = createReactComponent('PackageMinus', [['path', {
  d: 'M16 16h6',
  key: '100bgy'
}], ['path', {
  d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14',
  key: 'e7tb2h'
}], ['path', {
  d: 'M16.5 9.4 7.55 4.24',
  key: '10qotr'
}], ['polyline', {
  points: '3.29 7 12 12 20.71 7',
  key: 'ousv84'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '12',
  key: 'gdv6h4'
}]]);
var PackageMinus$1 = PackageMinus;

var PackageOpen = createReactComponent('PackageOpen', [['path', {
  d: 'M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z',
  key: '1vy178'
}], ['path', {
  d: 'm3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z',
  key: 's3bv25'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '13',
  key: '15r0fr'
}], ['path', {
  d: 'M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5',
  key: '1na2nq'
}]]);
var PackageOpen$1 = PackageOpen;

var PackagePlus = createReactComponent('PackagePlus', [['path', {
  d: 'M16 16h6',
  key: '100bgy'
}], ['path', {
  d: 'M19 13v6',
  key: '85cyf1'
}], ['path', {
  d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14',
  key: 'e7tb2h'
}], ['path', {
  d: 'M16.5 9.4 7.55 4.24',
  key: '10qotr'
}], ['polyline', {
  points: '3.29 7 12 12 20.71 7',
  key: 'ousv84'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '12',
  key: 'gdv6h4'
}]]);
var PackagePlus$1 = PackagePlus;

var PackageSearch = createReactComponent('PackageSearch', [['path', {
  d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14',
  key: 'e7tb2h'
}], ['path', {
  d: 'M16.5 9.4 7.55 4.24',
  key: '10qotr'
}], ['polyline', {
  points: '3.29 7 12 12 20.71 7',
  key: 'ousv84'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '12',
  key: 'gdv6h4'
}], ['circle', {
  cx: '18.5',
  cy: '15.5',
  r: '2.5',
  key: 'b5zd12'
}], ['path', {
  d: 'M20.27 17.27 22 19',
  key: '1l4muz'
}]]);
var PackageSearch$1 = PackageSearch;

var PackageX = createReactComponent('PackageX', [['path', {
  d: 'M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14',
  key: 'e7tb2h'
}], ['path', {
  d: 'M16.5 9.4 7.55 4.24',
  key: '10qotr'
}], ['polyline', {
  points: '3.29 7 12 12 20.71 7',
  key: 'ousv84'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '12',
  key: 'gdv6h4'
}], ['path', {
  d: 'm17 13 5 5m-5 0 5-5',
  key: 'im3w4b'
}]]);
var PackageX$1 = PackageX;

var Package = createReactComponent('Package', [['line', {
  x1: '16.5',
  y1: '9.4',
  x2: '7.5',
  y2: '4.21',
  key: 'i6f8yp'
}], ['path', {
  d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
  key: 'yt0hxn'
}], ['polyline', {
  points: '3.29 7 12 12 20.71 7',
  key: 'ousv84'
}], ['line', {
  x1: '12',
  y1: '22',
  x2: '12',
  y2: '12',
  key: 'gdv6h4'
}]]);
var Package$1 = Package;

var PaintBucket = createReactComponent('PaintBucket', [['path', {
  d: 'm19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z',
  key: 'irua1i'
}], ['path', {
  d: 'm5 2 5 5',
  key: '1lls2c'
}], ['path', {
  d: 'M2 13h15',
  key: '1hkzvu'
}], ['path', {
  d: 'M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z',
  key: 'xk76lq'
}]]);
var PaintBucket$1 = PaintBucket;

var Paintbrush2 = createReactComponent('Paintbrush2', [['path', {
  d: 'M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z',
  key: '1c8kta'
}], ['path', {
  d: 'M6 12V2h12v10',
  key: '1esbnf'
}], ['path', {
  d: 'M14 2v4',
  key: 'qmzblu'
}], ['path', {
  d: 'M10 2v2',
  key: '7u0qdc'
}]]);
var Paintbrush2$1 = Paintbrush2;

var Paintbrush = createReactComponent('Paintbrush', [['path', {
  d: 'M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z',
  key: 'm6k5sh'
}], ['path', {
  d: 'M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7',
  key: 'arzq70'
}], ['path', {
  d: 'M14.5 17.5 4.5 15',
  key: 's7fvrz'
}]]);
var Paintbrush$1 = Paintbrush;

var Palette = createReactComponent('Palette', [['circle', {
  cx: '13.5',
  cy: '6.5',
  r: '.5',
  key: '1xcu5'
}], ['circle', {
  cx: '17.5',
  cy: '10.5',
  r: '.5',
  key: '736e4u'
}], ['circle', {
  cx: '8.5',
  cy: '7.5',
  r: '.5',
  key: 'clrty'
}], ['circle', {
  cx: '6.5',
  cy: '12.5',
  r: '.5',
  key: '1s4xz9'
}], ['path', {
  d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z',
  key: '12rzf8'
}]]);
var Palette$1 = Palette;

var Palmtree = createReactComponent('Palmtree', [['path', {
  d: 'M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4',
  key: 'foxbe7'
}], ['path', {
  d: 'M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3',
  key: '18arnh'
}], ['path', {
  d: 'M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z',
  key: 'epoumf'
}], ['path', {
  d: 'M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14',
  key: 'ft0feo'
}]]);
var Palmtree$1 = Palmtree;

var Paperclip = createReactComponent('Paperclip', [['path', {
  d: 'm21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48',
  key: '1u3ebp'
}]]);
var Paperclip$1 = Paperclip;

var PartyPopper = createReactComponent('PartyPopper', [['path', {
  d: 'M5.8 11.3 2 22l10.7-3.79',
  key: 'gwxi1d'
}], ['path', {
  d: 'M4 3h.01',
  key: '1vcuye'
}], ['path', {
  d: 'M22 8h.01',
  key: '1mrtc2'
}], ['path', {
  d: 'M15 2h.01',
  key: '1cjtqr'
}], ['path', {
  d: 'M22 20h.01',
  key: '1mrys2'
}], ['path', {
  d: 'm22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10',
  key: 'bpx1uq'
}], ['path', {
  d: 'm22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17',
  key: '1pd0s7'
}], ['path', {
  d: 'm11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7',
  key: 'zq5xbz'
}], ['path', {
  d: 'M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z',
  key: '4kbmks'
}]]);
var PartyPopper$1 = PartyPopper;

var PauseCircle = createReactComponent('PauseCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '10',
  y1: '15',
  x2: '10',
  y2: '9',
  key: '2cxng6'
}], ['line', {
  x1: '14',
  y1: '15',
  x2: '14',
  y2: '9',
  key: 'wsglx2'
}]]);
var PauseCircle$1 = PauseCircle;

var PauseOctagon = createReactComponent('PauseOctagon', [['path', {
  d: 'M10 15V9',
  key: '1lckn7'
}], ['path', {
  d: 'M14 15V9',
  key: '1muqhk'
}], ['path', {
  d: 'M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z',
  key: '1m7qra'
}]]);
var PauseOctagon$1 = PauseOctagon;

var Pause = createReactComponent('Pause', [['rect', {
  x: '6',
  y: '4',
  width: '4',
  height: '16',
  key: '5yltu4'
}], ['rect', {
  x: '14',
  y: '4',
  width: '4',
  height: '16',
  key: 'duxydb'
}]]);
var Pause$1 = Pause;

var PenTool = createReactComponent('PenTool', [['path', {
  d: 'm12 19 7-7 3 3-7 7-3-3z',
  key: 'rklqx2'
}], ['path', {
  d: 'm18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z',
  key: '1et58u'
}], ['path', {
  d: 'm2 2 7.586 7.586',
  key: 'etlp93'
}], ['circle', {
  cx: '11',
  cy: '11',
  r: '2',
  key: 'xmgehs'
}]]);
var PenTool$1 = PenTool;

var Pencil = createReactComponent('Pencil', [['line', {
  x1: '18',
  y1: '2',
  x2: '22',
  y2: '6',
  key: '1k5sg2'
}], ['path', {
  d: 'M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z',
  key: '12iwkt'
}]]);
var Pencil$1 = Pencil;

var Percent = createReactComponent('Percent', [['line', {
  x1: '19',
  y1: '5',
  x2: '5',
  y2: '19',
  key: 't1677v'
}], ['circle', {
  cx: '6.5',
  cy: '6.5',
  r: '2.5',
  key: '4mh3h7'
}], ['circle', {
  cx: '17.5',
  cy: '17.5',
  r: '2.5',
  key: '1mdrzq'
}]]);
var Percent$1 = Percent;

var PersonStanding = createReactComponent('PersonStanding', [['circle', {
  cx: '12',
  cy: '5',
  r: '1',
  key: 'gxeob9'
}], ['path', {
  d: 'm9 20 3-6 3 6',
  key: 'se2kox'
}], ['path', {
  d: 'm6 8 6 2 6-2',
  key: '4o3us4'
}], ['path', {
  d: 'M12 10v4',
  key: '1kjpxc'
}]]);
var PersonStanding$1 = PersonStanding;

var PhoneCall = createReactComponent('PhoneCall', [['path', {
  d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  key: 'foiqr5'
}], ['path', {
  d: 'M14.05 2a9 9 0 0 1 8 7.94',
  key: 'vmijpz'
}], ['path', {
  d: 'M14.05 6A5 5 0 0 1 18 10',
  key: '13nbpp'
}]]);
var PhoneCall$1 = PhoneCall;

var PhoneForwarded = createReactComponent('PhoneForwarded', [['polyline', {
  points: '18 2 22 6 18 10',
  key: '6vjanh'
}], ['line', {
  x1: '14',
  y1: '6',
  x2: '22',
  y2: '6',
  key: '1yuov7'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  key: 'foiqr5'
}]]);
var PhoneForwarded$1 = PhoneForwarded;

var PhoneIncoming = createReactComponent('PhoneIncoming', [['polyline', {
  points: '16 2 16 8 22 8',
  key: '1ygljm'
}], ['line', {
  x1: '22',
  y1: '2',
  x2: '16',
  y2: '8',
  key: 'kb9lty'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  key: 'foiqr5'
}]]);
var PhoneIncoming$1 = PhoneIncoming;

var PhoneMissed = createReactComponent('PhoneMissed', [['line', {
  x1: '22',
  y1: '2',
  x2: '16',
  y2: '8',
  key: 'kb9lty'
}], ['line', {
  x1: '16',
  y1: '2',
  x2: '22',
  y2: '8',
  key: '11291p'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  key: 'foiqr5'
}]]);
var PhoneMissed$1 = PhoneMissed;

var PhoneOff = createReactComponent('PhoneOff', [['path', {
  d: 'M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91',
  key: 'z86iuo'
}], ['line', {
  x1: '22',
  y1: '2',
  x2: '2',
  y2: '22',
  key: '1sphze'
}]]);
var PhoneOff$1 = PhoneOff;

var PhoneOutgoing = createReactComponent('PhoneOutgoing', [['polyline', {
  points: '22 8 22 2 16 2',
  key: '1g204g'
}], ['line', {
  x1: '16',
  y1: '8',
  x2: '22',
  y2: '2',
  key: '1hkegm'
}], ['path', {
  d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  key: 'foiqr5'
}]]);
var PhoneOutgoing$1 = PhoneOutgoing;

var Phone = createReactComponent('Phone', [['path', {
  d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  key: 'foiqr5'
}]]);
var Phone$1 = Phone;

var PieChart = createReactComponent('PieChart', [['path', {
  d: 'M21.21 15.89A10 10 0 1 1 8 2.83',
  key: 'k2fpak'
}], ['path', {
  d: 'M22 12A10 10 0 0 0 12 2v10z',
  key: '1rfc4y'
}]]);
var PieChart$1 = PieChart;

var PiggyBank = createReactComponent('PiggyBank', [['path', {
  d: 'M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z',
  key: 'uf6l00'
}], ['path', {
  d: 'M2 9v1c0 1.1.9 2 2 2h1',
  key: 'nm575m'
}], ['path', {
  d: 'M16 11h0',
  key: 'k2aug8'
}]]);
var PiggyBank$1 = PiggyBank;

var PinOff = createReactComponent('PinOff', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}], ['line', {
  x1: '12',
  y1: '17',
  x2: '12',
  y2: '22',
  key: 'fb3qrx'
}], ['path', {
  d: 'M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12',
  key: '13x2n8'
}], ['path', {
  d: 'M15 9.34V6h1a2 2 0 0 0 0-4H7.89',
  key: 'reo3ki'
}]]);
var PinOff$1 = PinOff;

var Pin = createReactComponent('Pin', [['line', {
  x1: '12',
  y1: '17',
  x2: '12',
  y2: '22',
  key: 'fb3qrx'
}], ['path', {
  d: 'M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z',
  key: '13yl11'
}]]);
var Pin$1 = Pin;

var Pipette = createReactComponent('Pipette', [['path', {
  d: 'm2 22 1-1h3l9-9',
  key: '1sre89'
}], ['path', {
  d: 'M3 21v-3l9-9',
  key: 'hpe2y6'
}], ['path', {
  d: 'm15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z',
  key: '196du1'
}]]);
var Pipette$1 = Pipette;

var Pizza = createReactComponent('Pizza', [['path', {
  d: 'M15 11h.01',
  key: 'rns66s'
}], ['path', {
  d: 'M11 15h.01',
  key: 'k85uqc'
}], ['path', {
  d: 'M16 16h.01',
  key: '1f9h7w'
}], ['path', {
  d: 'm2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z',
  key: '1akyvp'
}], ['path', {
  d: 'M17 6c-6.29 1.47-9.43 5.13-11 11',
  key: '1dsok0'
}]]);
var Pizza$1 = Pizza;

var Plane = createReactComponent('Plane', [['path', {
  d: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z',
  key: '1v9wt8'
}]]);
var Plane$1 = Plane;

var PlayCircle = createReactComponent('PlayCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['polygon', {
  points: '10 8 16 12 10 16 10 8',
  key: '1cimsy'
}]]);
var PlayCircle$1 = PlayCircle;

var Play = createReactComponent('Play', [['polygon', {
  points: '5 3 19 12 5 21 5 3',
  key: '191637'
}]]);
var Play$1 = Play;

var Plug2 = createReactComponent('Plug2', [['path', {
  d: 'M9 2v6',
  key: '17ngun'
}], ['path', {
  d: 'M15 2v6',
  key: 's7yy2p'
}], ['path', {
  d: 'M12 17v5',
  key: 'bb1du9'
}], ['path', {
  d: 'M5 8h14',
  key: 'pcz4l3'
}], ['path', {
  d: 'M6 11V8h12v3a6 6 0 1 1-12 0v0Z',
  key: 'nd4hoy'
}]]);
var Plug2$1 = Plug2;

var PlugZap = createReactComponent('PlugZap', [['path', {
  d: 'm13 2-2 2.5h3L12 7',
  key: '1me98u'
}], ['path', {
  d: 'M12 22v-3',
  key: 'kmzjlo'
}], ['path', {
  d: 'M10 13v-2.5',
  key: '1g2mrq'
}], ['path', {
  d: 'M10 12.5v-2',
  key: 'pcvzbb'
}], ['path', {
  d: 'M14 12.5v-2',
  key: 'qv1toj'
}], ['path', {
  d: 'M16 15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2z',
  key: '17xmdd'
}]]);
var PlugZap$1 = PlugZap;

var Plug = createReactComponent('Plug', [['path', {
  d: 'M12 22v-5',
  key: '1ega77'
}], ['path', {
  d: 'M9 7V2',
  key: '1r97uf'
}], ['path', {
  d: 'M15 7V2',
  key: '1uo4jc'
}], ['path', {
  d: 'M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z',
  key: '1xki7n'
}]]);
var Plug$1 = Plug;

var PlusCircle = createReactComponent('PlusCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '16',
  key: '55jlg'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}]]);
var PlusCircle$1 = PlusCircle;

var PlusSquare = createReactComponent('PlusSquare', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '16',
  key: '55jlg'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '16',
  y2: '12',
  key: '1myapg'
}]]);
var PlusSquare$1 = PlusSquare;

var Plus = createReactComponent('Plus', [['line', {
  x1: '12',
  y1: '5',
  x2: '12',
  y2: '19',
  key: 'myz83a'
}], ['line', {
  x1: '5',
  y1: '12',
  x2: '19',
  y2: '12',
  key: '1smlys'
}]]);
var Plus$1 = Plus;

var Pocket = createReactComponent('Pocket', [['path', {
  d: 'M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z',
  key: '1mz881'
}], ['polyline', {
  points: '8 10 12 14 16 10',
  key: 'w4mbv5'
}]]);
var Pocket$1 = Pocket;

var Podcast = createReactComponent('Podcast', [['circle', {
  cx: '12',
  cy: '11',
  r: '1',
  key: '1gvufo'
}], ['path', {
  d: 'M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z',
  key: '1n5fvv'
}], ['path', {
  d: 'M8 14a5 5 0 1 1 8 0',
  key: 'fc81rn'
}], ['path', {
  d: 'M17 18.5a9 9 0 1 0-10 0',
  key: 'jqtxkf'
}]]);
var Podcast$1 = Podcast;

var Pointer = createReactComponent('Pointer', [['path', {
  d: 'M22 14a8 8 0 0 1-8 8',
  key: '56vcr3'
}], ['path', {
  d: 'M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0',
  key: '1pp0yd'
}], ['path', {
  d: 'M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1',
  key: 'u654g'
}], ['path', {
  d: 'M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10',
  key: '1e2dtv'
}], ['path', {
  d: 'M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15',
  key: 'g6ys72'
}]]);
var Pointer$1 = Pointer;

var PoundSterling = createReactComponent('PoundSterling', [['path', {
  d: 'M18 7c0-5.333-8-5.333-8 0',
  key: '1prm2n'
}], ['path', {
  d: 'M10 7v14',
  key: '18tmcs'
}], ['path', {
  d: 'M6 21h12',
  key: '4dkmi1'
}], ['path', {
  d: 'M6 13h10',
  key: 'ybwr4a'
}]]);
var PoundSterling$1 = PoundSterling;

var PowerOff = createReactComponent('PowerOff', [['path', {
  d: 'M18.36 6.64A9 9 0 0 1 20.77 15',
  key: 'dxknvb'
}], ['path', {
  d: 'M6.16 6.16a9 9 0 1 0 12.68 12.68',
  key: '1x7qb5'
}], ['path', {
  d: 'M12 2v4',
  key: '3427ic'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}]]);
var PowerOff$1 = PowerOff;

var Power = createReactComponent('Power', [['path', {
  d: 'M18.36 6.64a9 9 0 1 1-12.73 0',
  key: 'phirl6'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '12',
  key: '1d1p48'
}]]);
var Power$1 = Power;

var Printer = createReactComponent('Printer', [['polyline', {
  points: '6 9 6 2 18 2 18 9',
  key: '1306q4'
}], ['path', {
  d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2',
  key: '143wyd'
}], ['rect', {
  x: '6',
  y: '14',
  width: '12',
  height: '8',
  key: 'emw7yt'
}]]);
var Printer$1 = Printer;

var Puzzle = createReactComponent('Puzzle', [['path', {
  d: 'M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z',
  key: 'i0oyt7'
}]]);
var Puzzle$1 = Puzzle;

var QrCode = createReactComponent('QrCode', [['rect', {
  x: '3',
  y: '3',
  width: '5',
  height: '5',
  rx: '1',
  key: 'fue5ao'
}], ['rect', {
  x: '16',
  y: '3',
  width: '5',
  height: '5',
  rx: '1',
  key: '1narh3'
}], ['rect', {
  x: '3',
  y: '16',
  width: '5',
  height: '5',
  rx: '1',
  key: '1ovwlo'
}], ['path', {
  d: 'M21 16h-3a2 2 0 0 0-2 2v3',
  key: '177gqh'
}], ['path', {
  d: 'M21 21v.01',
  key: 'ents32'
}], ['path', {
  d: 'M12 7v3a2 2 0 0 1-2 2H7',
  key: '8crl2c'
}], ['path', {
  d: 'M3 12h.01',
  key: 'nlz23k'
}], ['path', {
  d: 'M12 3h.01',
  key: 'n36tog'
}], ['path', {
  d: 'M12 16v.01',
  key: '133mhm'
}], ['path', {
  d: 'M16 12h1',
  key: '1slzba'
}], ['path', {
  d: 'M21 12v.01',
  key: '1lwtk9'
}], ['path', {
  d: 'M12 21v-1',
  key: '1880an'
}]]);
var QrCode$1 = QrCode;

var Quote = createReactComponent('Quote', [['path', {
  d: 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z',
  key: '4rm80e'
}], ['path', {
  d: 'M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z',
  key: '10za9r'
}]]);
var Quote$1 = Quote;

var RadioReceiver = createReactComponent('RadioReceiver', [['path', {
  d: 'M5 16v2',
  key: 'g5qcv5'
}], ['path', {
  d: 'M19 16v2',
  key: '1gbaio'
}], ['rect', {
  x: '2',
  y: '8',
  width: '20',
  height: '8',
  rx: '2',
  key: '1xflse'
}], ['path', {
  d: 'M18 12h0',
  key: '1ucjzd'
}]]);
var RadioReceiver$1 = RadioReceiver;

var Radio = createReactComponent('Radio', [['circle', {
  cx: '12',
  cy: '12',
  r: '2',
  key: '1c9p78'
}], ['path', {
  d: 'M4.93 19.07a10 10 0 0 1 0-14.14',
  key: 'r41b39'
}], ['path', {
  d: 'M7.76 16.24a6 6 0 0 1-1.3-1.95 6 6 0 0 1 0-4.59 6 6 0 0 1 1.3-1.95',
  key: '1pc8et'
}], ['path', {
  d: 'M16.24 7.76a6 6 0 0 1 1.3 2 6 6 0 0 1 0 4.59 6 6 0 0 1-1.3 1.95',
  key: '8dzjga'
}], ['path', {
  d: 'M19.07 4.93a10 10 0 0 1 0 14.14',
  key: '1kegas'
}]]);
var Radio$1 = Radio;

var RectangleHorizontal = createReactComponent('RectangleHorizontal', [['rect', {
  x: '2',
  y: '6',
  width: '20',
  height: '12',
  rx: '2',
  key: '1wpnh2'
}]]);
var RectangleHorizontal$1 = RectangleHorizontal;

var RectangleVertical = createReactComponent('RectangleVertical', [['rect', {
  x: '6',
  y: '2',
  width: '12',
  height: '20',
  rx: '2',
  key: '749fme'
}]]);
var RectangleVertical$1 = RectangleVertical;

var Recycle = createReactComponent('Recycle', [['path', {
  d: 'M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5',
  key: 'x6z5xu'
}], ['path', {
  d: 'M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12',
  key: '1x4zh5'
}], ['path', {
  d: 'm14 16-3 3 3 3',
  key: 'f6jyew'
}], ['path', {
  d: 'M8.293 13.596 7.196 9.5 3.1 10.598',
  key: 'wf1obh'
}], ['path', {
  d: 'm9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843',
  key: '9tzpgr'
}], ['path', {
  d: 'm13.378 9.633 4.096 1.098 1.097-4.096',
  key: '1oe83g'
}]]);
var Recycle$1 = Recycle;

var Redo2 = createReactComponent('Redo2', [['path', {
  d: 'm15 14 5-5-5-5',
  key: '12vg1m'
}], ['path', {
  d: 'M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13',
  key: '19mnr4'
}]]);
var Redo2$1 = Redo2;

var Redo = createReactComponent('Redo', [['path', {
  d: 'M21 7v6h-6',
  key: '3ptur4'
}], ['path', {
  d: 'M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7',
  key: '1kgawr'
}]]);
var Redo$1 = Redo;

var RefreshCcw = createReactComponent('RefreshCcw', [['path', {
  d: 'M3 2v6h6',
  key: '18ldww'
}], ['path', {
  d: 'M21 12A9 9 0 0 0 6 5.3L3 8',
  key: '1pbrqz'
}], ['path', {
  d: 'M21 22v-6h-6',
  key: 'usdfbe'
}], ['path', {
  d: 'M3 12a9 9 0 0 0 15 6.7l3-2.7',
  key: '1hosoe'
}]]);
var RefreshCcw$1 = RefreshCcw;

var RefreshCw = createReactComponent('RefreshCw', [['path', {
  d: 'M21 2v6h-6',
  key: '1lwg0q'
}], ['path', {
  d: 'M3 12a9 9 0 0 1 15-6.7L21 8',
  key: 'vaktt2'
}], ['path', {
  d: 'M3 22v-6h6',
  key: '6llvyv'
}], ['path', {
  d: 'M21 12a9 9 0 0 1-15 6.7L3 16',
  key: 'i52hsp'
}]]);
var RefreshCw$1 = RefreshCw;

var Refrigerator = createReactComponent('Refrigerator', [['path', {
  d: 'M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z',
  key: 'fpq118'
}], ['path', {
  d: 'M5 10h14',
  key: 'elsbfy'
}], ['path', {
  d: 'M15 7v6',
  key: '1nx30x'
}]]);
var Refrigerator$1 = Refrigerator;

var Regex = createReactComponent('Regex', [['path', {
  d: 'M17 3v10',
  key: '15fgeh'
}], ['path', {
  d: 'm12.67 5.5 8.66 5',
  key: '1gpheq'
}], ['path', {
  d: 'm12.67 10.5 8.66-5',
  key: '1dkfa6'
}], ['path', {
  d: 'M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z',
  key: 'swwfx4'
}]]);
var Regex$1 = Regex;

var Repeat1 = createReactComponent('Repeat1', [['path', {
  d: 'm17 2 4 4-4 4',
  key: 'nntrym'
}], ['path', {
  d: 'M3 11v-1a4 4 0 0 1 4-4h14',
  key: '84bu3i'
}], ['path', {
  d: 'm7 22-4-4 4-4',
  key: '1wqhfi'
}], ['path', {
  d: 'M21 13v1a4 4 0 0 1-4 4H3',
  key: '1rx37r'
}], ['path', {
  d: 'M11 10h1v4',
  key: '70cz1p'
}]]);
var Repeat1$1 = Repeat1;

var Repeat = createReactComponent('Repeat', [['path', {
  d: 'm17 2 4 4-4 4',
  key: 'nntrym'
}], ['path', {
  d: 'M3 11v-1a4 4 0 0 1 4-4h14',
  key: '84bu3i'
}], ['path', {
  d: 'm7 22-4-4 4-4',
  key: '1wqhfi'
}], ['path', {
  d: 'M21 13v1a4 4 0 0 1-4 4H3',
  key: '1rx37r'
}]]);
var Repeat$1 = Repeat;

var ReplyAll = createReactComponent('ReplyAll', [['polyline', {
  points: '7 17 2 12 7 7',
  key: 't83bqg'
}], ['polyline', {
  points: '12 17 7 12 12 7',
  key: '1g4ajm'
}], ['path', {
  d: 'M22 18v-2a4 4 0 0 0-4-4H7',
  key: '1fcyog'
}]]);
var ReplyAll$1 = ReplyAll;

var Reply = createReactComponent('Reply', [['polyline', {
  points: '9 17 4 12 9 7',
  key: 'hvgpf2'
}], ['path', {
  d: 'M20 18v-2a4 4 0 0 0-4-4H4',
  key: '5vmcpk'
}]]);
var Reply$1 = Reply;

var Rewind = createReactComponent('Rewind', [['polygon', {
  points: '11 19 2 12 11 5 11 19',
  key: '14yba5'
}], ['polygon', {
  points: '22 19 13 12 22 5 22 19',
  key: '1pi1cj'
}]]);
var Rewind$1 = Rewind;

var Rocket = createReactComponent('Rocket', [['path', {
  d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
  key: 'm3kijz'
}], ['path', {
  d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
  key: '1fmvmk'
}], ['path', {
  d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0',
  key: '1f8sc4'
}], ['path', {
  d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5',
  key: 'qeys4'
}]]);
var Rocket$1 = Rocket;

var RockingChair = createReactComponent('RockingChair', [['polyline', {
  points: '3.5 2 6.5 12.5 18 12.5',
  key: 'y3iy52'
}], ['line', {
  x1: '9.5',
  y1: '12.5',
  x2: '5.5',
  y2: '20',
  key: 'ivgihp'
}], ['line', {
  x1: '15',
  y1: '12.5',
  x2: '18.5',
  y2: '20',
  key: '1palb4'
}], ['path', {
  d: 'M2.75 18a13 13 0 0 0 18.5 0',
  key: '1nquas'
}]]);
var RockingChair$1 = RockingChair;

var Rotate3d = createReactComponent('Rotate3d', [['path', {
  d: 'M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2',
  key: '10n0gc'
}], ['path', {
  d: 'm15.194 13.707 3.814 1.86-1.86 3.814',
  key: '16shm9'
}], ['path', {
  d: 'M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4',
  key: '1lxi77'
}]]);
var Rotate3d$1 = Rotate3d;

var RotateCcw = createReactComponent('RotateCcw', [['path', {
  d: 'M3 2v6h6',
  key: '18ldww'
}], ['path', {
  d: 'M3 13a9 9 0 1 0 3-7.7L3 8',
  key: 'aahkch'
}]]);
var RotateCcw$1 = RotateCcw;

var RotateCw = createReactComponent('RotateCw', [['path', {
  d: 'M21 2v6h-6',
  key: '1lwg0q'
}], ['path', {
  d: 'M21 13a9 9 0 1 1-3-7.7L21 8',
  key: 'vix499'
}]]);
var RotateCw$1 = RotateCw;

var Rss = createReactComponent('Rss', [['path', {
  d: 'M4 11a9 9 0 0 1 9 9',
  key: 'pv89mb'
}], ['path', {
  d: 'M4 4a16 16 0 0 1 16 16',
  key: 'k0647b'
}], ['circle', {
  cx: '5',
  cy: '19',
  r: '1',
  key: 'bfqh0e'
}]]);
var Rss$1 = Rss;

var Ruler = createReactComponent('Ruler', [['path', {
  d: 'M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z',
  key: '14xb44'
}], ['path', {
  d: 'm7.5 10.5 2 2',
  key: '3h1c69'
}], ['path', {
  d: 'm10.5 7.5 2 2',
  key: '1lvsmz'
}], ['path', {
  d: 'm13.5 4.5 2 2',
  key: '1i616n'
}], ['path', {
  d: 'm4.5 13.5 2 2',
  key: '16iojn'
}]]);
var Ruler$1 = Ruler;

var RussianRuble = createReactComponent('RussianRuble', [['path', {
  d: 'M14 11c5.333 0 5.333-8 0-8',
  key: '92e629'
}], ['path', {
  d: 'M6 11h8',
  key: '1cr2u4'
}], ['path', {
  d: 'M6 15h8',
  key: '1y8f6l'
}], ['path', {
  d: 'M9 21V3',
  key: '1jd2g6'
}], ['path', {
  d: 'M9 3h5',
  key: '8bgvcw'
}]]);
var RussianRuble$1 = RussianRuble;

var Sailboat = createReactComponent('Sailboat', [['path', {
  d: 'M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z',
  key: '1404fh'
}], ['path', {
  d: 'M21 14 10 2 3 14h18Z',
  key: '1nzg7v'
}], ['path', {
  d: 'M10 2v16',
  key: '1labyt'
}]]);
var Sailboat$1 = Sailboat;

var Save = createReactComponent('Save', [['path', {
  d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z',
  key: '1owoqh'
}], ['polyline', {
  points: '17 21 17 13 7 13 7 21',
  key: '1md35c'
}], ['polyline', {
  points: '7 3 7 8 15 8',
  key: '8nz8an'
}]]);
var Save$1 = Save;

var Scale3d = createReactComponent('Scale3d', [['path', {
  d: 'M5 7v12h12',
  key: 'vtaa4r'
}], ['path', {
  d: 'm5 19 6-6',
  key: 'jh6hbb'
}], ['rect', {
  x: '3',
  y: '3',
  width: '4',
  height: '4',
  rx: '1',
  key: '1qeirs'
}], ['rect', {
  x: '17',
  y: '17',
  width: '4',
  height: '4',
  rx: '1',
  key: 'b22pg0'
}]]);
var Scale3d$1 = Scale3d;

var Scale = createReactComponent('Scale', [['path', {
  d: 'm16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z',
  key: '7g6ntu'
}], ['path', {
  d: 'm2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z',
  key: 'ijws7r'
}], ['path', {
  d: 'M7 21h10',
  key: '1b0cd5'
}], ['path', {
  d: 'M12 3v18',
  key: '108xh3'
}], ['path', {
  d: 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2',
  key: '3gwbw2'
}]]);
var Scale$1 = Scale;

var Scaling = createReactComponent('Scaling', [['path', {
  d: 'M21 3 9 15',
  key: '15kdhq'
}], ['path', {
  d: 'M12 3H3v18h18v-9',
  key: '8suug0'
}], ['path', {
  d: 'M16 3h5v5',
  key: '1806ms'
}], ['path', {
  d: 'M14 15H9v-5',
  key: 'pi4jk9'
}]]);
var Scaling$1 = Scaling;

var ScanFace = createReactComponent('ScanFace', [['path', {
  d: 'M3 7V5a2 2 0 0 1 2-2h2',
  key: 'aa7l1z'
}], ['path', {
  d: 'M17 3h2a2 2 0 0 1 2 2v2',
  key: '4qcy5o'
}], ['path', {
  d: 'M21 17v2a2 2 0 0 1-2 2h-2',
  key: '6vwrx8'
}], ['path', {
  d: 'M7 21H5a2 2 0 0 1-2-2v-2',
  key: 'ioqczr'
}], ['path', {
  d: 'M8 14s1.5 2 4 2 4-2 4-2',
  key: '1y1vjs'
}], ['path', {
  d: 'M9 9h.01',
  key: '1q5me6'
}], ['path', {
  d: 'M15 9h.01',
  key: 'x1ddxp'
}]]);
var ScanFace$1 = ScanFace;

var ScanLine = createReactComponent('ScanLine', [['path', {
  d: 'M3 7V5a2 2 0 0 1 2-2h2',
  key: 'aa7l1z'
}], ['path', {
  d: 'M17 3h2a2 2 0 0 1 2 2v2',
  key: '4qcy5o'
}], ['path', {
  d: 'M21 17v2a2 2 0 0 1-2 2h-2',
  key: '6vwrx8'
}], ['path', {
  d: 'M7 21H5a2 2 0 0 1-2-2v-2',
  key: 'ioqczr'
}], ['line', {
  x1: '7',
  y1: '12',
  x2: '17',
  y2: '12',
  key: 'bc9tui'
}]]);
var ScanLine$1 = ScanLine;

var Scan = createReactComponent('Scan', [['path', {
  d: 'M3 7V5a2 2 0 0 1 2-2h2',
  key: 'aa7l1z'
}], ['path', {
  d: 'M17 3h2a2 2 0 0 1 2 2v2',
  key: '4qcy5o'
}], ['path', {
  d: 'M21 17v2a2 2 0 0 1-2 2h-2',
  key: '6vwrx8'
}], ['path', {
  d: 'M7 21H5a2 2 0 0 1-2-2v-2',
  key: 'ioqczr'
}]]);
var Scan$1 = Scan;

var Scissors = createReactComponent('Scissors', [['circle', {
  cx: '6',
  cy: '6',
  r: '3',
  key: '1lh9wr'
}], ['circle', {
  cx: '6',
  cy: '18',
  r: '3',
  key: 'fqmcym'
}], ['line', {
  x1: '20',
  y1: '4',
  x2: '8.12',
  y2: '15.88',
  key: '3cwkde'
}], ['line', {
  x1: '14.47',
  y1: '14.48',
  x2: '20',
  y2: '20',
  key: '1keerz'
}], ['line', {
  x1: '8.12',
  y1: '8.12',
  x2: '12',
  y2: '12',
  key: 'spxzcb'
}]]);
var Scissors$1 = Scissors;

var ScreenShareOff = createReactComponent('ScreenShareOff', [['path', {
  d: 'M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3',
  key: 'i8wdob'
}], ['path', {
  d: 'M8 21h8',
  key: '1ev6f3'
}], ['path', {
  d: 'M12 17v4',
  key: '1riwvh'
}], ['path', {
  d: 'm22 3-5 5',
  key: '12jva0'
}], ['path', {
  d: 'm17 3 5 5',
  key: 'k36vhe'
}]]);
var ScreenShareOff$1 = ScreenShareOff;

var ScreenShare = createReactComponent('ScreenShare', [['path', {
  d: 'M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3',
  key: 'i8wdob'
}], ['path', {
  d: 'M8 21h8',
  key: '1ev6f3'
}], ['path', {
  d: 'M12 17v4',
  key: '1riwvh'
}], ['path', {
  d: 'm17 8 5-5',
  key: 'fqif7o'
}], ['path', {
  d: 'M17 3h5v5',
  key: '1o3tu8'
}]]);
var ScreenShare$1 = ScreenShare;

var Scroll = createReactComponent('Scroll', [['path', {
  d: 'M10 17v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3h3',
  key: '1knuaj'
}], ['path', {
  d: 'M22 17v2a2 2 0 0 1-2 2H8',
  key: '62edg8'
}], ['path', {
  d: 'M19 17V5a2 2 0 0 0-2-2H4',
  key: 'zz82l3'
}], ['path', {
  d: 'M22 17H10',
  key: '1dr9mz'
}]]);
var Scroll$1 = Scroll;

var Search = createReactComponent('Search', [['circle', {
  cx: '11',
  cy: '11',
  r: '8',
  key: '4ej97u'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '16.65',
  y2: '16.65',
  key: '1p50m8'
}]]);
var Search$1 = Search;

var Send = createReactComponent('Send', [['line', {
  x1: '22',
  y1: '2',
  x2: '11',
  y2: '13',
  key: '10auo0'
}], ['polygon', {
  points: '22 2 15 22 11 13 2 9 22 2',
  key: '12uapv'
}]]);
var Send$1 = Send;

var SeparatorHorizontal = createReactComponent('SeparatorHorizontal', [['line', {
  x1: '3',
  y1: '12',
  x2: '21',
  y2: '12',
  key: '1aui40'
}], ['polyline', {
  points: '8 8 12 4 16 8',
  key: 'zo8t4w'
}], ['polyline', {
  points: '16 16 12 20 8 16',
  key: '1oyrid'
}]]);
var SeparatorHorizontal$1 = SeparatorHorizontal;

var SeparatorVertical = createReactComponent('SeparatorVertical', [['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '21',
  key: 'essbwb'
}], ['polyline', {
  points: '8 8 4 12 8 16',
  key: 'bnfmv4'
}], ['polyline', {
  points: '16 16 20 12 16 8',
  key: 'u90052'
}]]);
var SeparatorVertical$1 = SeparatorVertical;

var ServerCog = createReactComponent('ServerCog', [['path', {
  d: 'M5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1',
  key: '1qm4no'
}], ['path', {
  d: 'M5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1',
  key: '1lpaho'
}], ['path', {
  d: 'M6 6h.01',
  key: '1utrut'
}], ['path', {
  d: 'M6 18h.01',
  key: 'uhywen'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}], ['path', {
  d: 'M12 8v1',
  key: '1rj8u4'
}], ['path', {
  d: 'M12 15v1',
  key: '1ovrzm'
}], ['path', {
  d: 'M16 12h-1',
  key: '1qpdyp'
}], ['path', {
  d: 'M9 12H8',
  key: '1l15iv'
}], ['path', {
  d: 'm15 9-.88.88',
  key: '3hwatj'
}], ['path', {
  d: 'M9.88 14.12 9 15',
  key: '13ldc9'
}], ['path', {
  d: 'm15 15-.88-.88',
  key: '45priv'
}], ['path', {
  d: 'M9.88 9.88 9 9',
  key: '1ladhj'
}]]);
var ServerCog$1 = ServerCog;

var ServerCrash = createReactComponent('ServerCrash', [['path', {
  d: 'M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2',
  key: '4b9dqc'
}], ['path', {
  d: 'M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2',
  key: '22nnkd'
}], ['path', {
  d: 'M6 6h.01',
  key: '1utrut'
}], ['path', {
  d: 'M6 18h.01',
  key: 'uhywen'
}], ['path', {
  d: 'm13 6-4 6h6l-4 6',
  key: '14hqih'
}]]);
var ServerCrash$1 = ServerCrash;

var ServerOff = createReactComponent('ServerOff', [['path', {
  d: 'M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5',
  key: 'bt2siv'
}], ['path', {
  d: 'M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z',
  key: '1hjrv1'
}], ['path', {
  d: 'M22 17v-1a2 2 0 0 0-2-2h-1',
  key: '1iynyr'
}], ['path', {
  d: 'M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z',
  key: '161ggg'
}], ['path', {
  d: 'M6 18h.01',
  key: 'uhywen'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}]]);
var ServerOff$1 = ServerOff;

var Server = createReactComponent('Server', [['rect', {
  x: '2',
  y: '2',
  width: '20',
  height: '8',
  rx: '2',
  ry: '2',
  key: 'e1v5fq'
}], ['rect', {
  x: '2',
  y: '14',
  width: '20',
  height: '8',
  rx: '2',
  ry: '2',
  key: '10c4lq'
}], ['line', {
  x1: '6',
  y1: '6',
  x2: '6.01',
  y2: '6',
  key: '1g0o6g'
}], ['line', {
  x1: '6',
  y1: '18',
  x2: '6.01',
  y2: '18',
  key: 'y2j7fo'
}]]);
var Server$1 = Server;

var Settings2 = createReactComponent('Settings2', [['path', {
  d: 'M20 7h-9',
  key: '3s1dr2'
}], ['path', {
  d: 'M14 17H5',
  key: 'gfn3mx'
}], ['circle', {
  cx: '17',
  cy: '17',
  r: '3',
  key: '18b49y'
}], ['circle', {
  cx: '7',
  cy: '7',
  r: '3',
  key: 'dfmy0x'
}]]);
var Settings2$1 = Settings2;

var Settings = createReactComponent('Settings', [['path', {
  d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
  key: '1qme2f'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}]]);
var Settings$1 = Settings;

var Share2 = createReactComponent('Share2', [['circle', {
  cx: '18',
  cy: '5',
  r: '3',
  key: 'gq8acd'
}], ['circle', {
  cx: '6',
  cy: '12',
  r: '3',
  key: 'w7nqdw'
}], ['circle', {
  cx: '18',
  cy: '19',
  r: '3',
  key: '1xt0gg'
}], ['line', {
  x1: '8.59',
  y1: '13.51',
  x2: '15.42',
  y2: '17.49',
  key: '10dsx0'
}], ['line', {
  x1: '15.41',
  y1: '6.51',
  x2: '8.59',
  y2: '10.49',
  key: '1qn9hm'
}]]);
var Share2$1 = Share2;

var Share = createReactComponent('Share', [['path', {
  d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8',
  key: '1b2hhj'
}], ['polyline', {
  points: '16 6 12 2 8 6',
  key: 'm901s6'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '15',
  key: '1sxkij'
}]]);
var Share$1 = Share;

var Sheet = createReactComponent('Sheet', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9',
  key: '1uch6j'
}], ['line', {
  x1: '3',
  y1: '15',
  x2: '21',
  y2: '15',
  key: '1xojw2'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9',
  y2: '21',
  key: 'x5ianl'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15',
  y2: '21',
  key: '13a17d'
}]]);
var Sheet$1 = Sheet;

var ShieldAlert = createReactComponent('ShieldAlert', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  key: '3xmgem'
}], ['path', {
  d: 'M12 8v4',
  key: '1got3b'
}], ['path', {
  d: 'M12 16h.01',
  key: '1drbdi'
}]]);
var ShieldAlert$1 = ShieldAlert;

var ShieldCheck = createReactComponent('ShieldCheck', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  key: '3xmgem'
}], ['path', {
  d: 'm9 12 2 2 4-4',
  key: 'dzmm74'
}]]);
var ShieldCheck$1 = ShieldCheck;

var ShieldClose = createReactComponent('ShieldClose', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  key: '3xmgem'
}], ['line', {
  x1: '9.5',
  y1: '9',
  x2: '14.5',
  y2: '14',
  key: '154127'
}], ['line', {
  x1: '14.5',
  y1: '9',
  x2: '9.5',
  y2: '14',
  key: '1rm6h8'
}]]);
var ShieldClose$1 = ShieldClose;

var ShieldOff = createReactComponent('ShieldOff', [['path', {
  d: 'M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18',
  key: 'ungvgc'
}], ['path', {
  d: 'M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38',
  key: '1qf5yw'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var ShieldOff$1 = ShieldOff;

var Shield = createReactComponent('Shield', [['path', {
  d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  key: '3xmgem'
}]]);
var Shield$1 = Shield;

var Shirt = createReactComponent('Shirt', [['path', {
  d: 'M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z',
  key: '1wgbhj'
}]]);
var Shirt$1 = Shirt;

var ShoppingBag = createReactComponent('ShoppingBag', [['path', {
  d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z',
  key: '14a4hr'
}], ['line', {
  x1: '3',
  y1: '6',
  x2: '21',
  y2: '6',
  key: '1tp2lp'
}], ['path', {
  d: 'M16 10a4 4 0 0 1-8 0',
  key: '1ltviw'
}]]);
var ShoppingBag$1 = ShoppingBag;

var ShoppingCart = createReactComponent('ShoppingCart', [['circle', {
  cx: '8',
  cy: '21',
  r: '1',
  key: 'jimo8o'
}], ['circle', {
  cx: '19',
  cy: '21',
  r: '1',
  key: '13723u'
}], ['path', {
  d: 'M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12',
  key: '9zh506'
}]]);
var ShoppingCart$1 = ShoppingCart;

var Shovel = createReactComponent('Shovel', [['path', {
  d: 'M2 22v-5l5-5 5 5-5 5z',
  key: '1fh25c'
}], ['path', {
  d: 'M9.5 14.5 16 8',
  key: '1smz5x'
}], ['path', {
  d: 'm17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2',
  key: '1q8uv5'
}]]);
var Shovel$1 = Shovel;

var ShowerHead = createReactComponent('ShowerHead', [['path', {
  d: 'm4 4 2.5 2.5',
  key: 'uv2vmf'
}], ['path', {
  d: 'M13.5 6.5a4.95 4.95 0 0 0-7 7',
  key: 'frdkwv'
}], ['path', {
  d: 'M15 5 5 15',
  key: '1ag8rq'
}], ['path', {
  d: 'M14 17v.01',
  key: 'eokfpp'
}], ['path', {
  d: 'M10 16v.01',
  key: '14uyyl'
}], ['path', {
  d: 'M13 13v.01',
  key: '1v1k97'
}], ['path', {
  d: 'M16 10v.01',
  key: '5169yg'
}], ['path', {
  d: 'M11 20v.01',
  key: 'cj92p8'
}], ['path', {
  d: 'M17 14v.01',
  key: '11cswd'
}], ['path', {
  d: 'M20 11v.01',
  key: '19e0od'
}]]);
var ShowerHead$1 = ShowerHead;

var Shrink = createReactComponent('Shrink', [['path', {
  d: 'm15 15 6 6m-6-6v4.8m0-4.8h4.8',
  key: '17vawe'
}], ['path', {
  d: 'M9 19.8V15m0 0H4.2M9 15l-6 6',
  key: 'chjx8e'
}], ['path', {
  d: 'M15 4.2V9m0 0h4.8M15 9l6-6',
  key: 'lav6yq'
}], ['path', {
  d: 'M9 4.2V9m0 0H4.2M9 9 3 3',
  key: '1pxi2q'
}]]);
var Shrink$1 = Shrink;

var Shrub = createReactComponent('Shrub', [['path', {
  d: 'M12 22v-7l-2-2',
  key: 'eqv9mc'
}], ['path', {
  d: 'M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z',
  key: '12jcau'
}], ['path', {
  d: 'm14 14-2 2',
  key: '847xa2'
}]]);
var Shrub$1 = Shrub;

var Shuffle = createReactComponent('Shuffle', [['polyline', {
  points: '16 3 21 3 21 8',
  key: '11391h'
}], ['line', {
  x1: '4',
  y1: '20',
  x2: '21',
  y2: '3',
  key: 'pnd031'
}], ['polyline', {
  points: '21 16 21 21 16 21',
  key: '1j0gwc'
}], ['line', {
  x1: '15',
  y1: '15',
  x2: '21',
  y2: '21',
  key: 'ygtzor'
}], ['line', {
  x1: '4',
  y1: '4',
  x2: '9',
  y2: '9',
  key: 'q17lez'
}]]);
var Shuffle$1 = Shuffle;

var SidebarClose = createReactComponent('SidebarClose', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M9 3v18',
  key: 'fh3hqa'
}], ['path', {
  d: 'm16 15-3-3 3-3',
  key: '14y99z'
}]]);
var SidebarClose$1 = SidebarClose;

var SidebarOpen = createReactComponent('SidebarOpen', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['path', {
  d: 'M9 3v18',
  key: 'fh3hqa'
}], ['path', {
  d: 'm14 9 3 3-3 3',
  key: '8010ee'
}]]);
var SidebarOpen$1 = SidebarOpen;

var Sidebar = createReactComponent('Sidebar', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '9',
  y1: '3',
  x2: '9',
  y2: '21',
  key: 'nvcl17'
}]]);
var Sidebar$1 = Sidebar;

var Sigma = createReactComponent('Sigma', [['path', {
  d: 'M18 7V4H6l6 8-6 8h12v-3',
  key: 'zis8ev'
}]]);
var Sigma$1 = Sigma;

var SignalHigh = createReactComponent('SignalHigh', [['path', {
  d: 'M2 20h.01',
  key: '4haj6o'
}], ['path', {
  d: 'M7 20v-4',
  key: 'j294jx'
}], ['path', {
  d: 'M12 20v-8',
  key: 'i3yub9'
}], ['path', {
  d: 'M17 20V8',
  key: '1tkaf5'
}]]);
var SignalHigh$1 = SignalHigh;

var SignalLow = createReactComponent('SignalLow', [['path', {
  d: 'M2 20h.01',
  key: '4haj6o'
}], ['path', {
  d: 'M7 20v-4',
  key: 'j294jx'
}]]);
var SignalLow$1 = SignalLow;

var SignalMedium = createReactComponent('SignalMedium', [['path', {
  d: 'M2 20h.01',
  key: '4haj6o'
}], ['path', {
  d: 'M7 20v-4',
  key: 'j294jx'
}], ['path', {
  d: 'M12 20v-8',
  key: 'i3yub9'
}]]);
var SignalMedium$1 = SignalMedium;

var SignalZero = createReactComponent('SignalZero', [['path', {
  d: 'M2 20h.01',
  key: '4haj6o'
}]]);
var SignalZero$1 = SignalZero;

var Signal = createReactComponent('Signal', [['path', {
  d: 'M2 20h.01',
  key: '4haj6o'
}], ['path', {
  d: 'M7 20v-4',
  key: 'j294jx'
}], ['path', {
  d: 'M12 20v-8',
  key: 'i3yub9'
}], ['path', {
  d: 'M17 20V8',
  key: '1tkaf5'
}], ['path', {
  d: 'M22 4v16',
  key: 'sih9yq'
}]]);
var Signal$1 = Signal;

var Siren = createReactComponent('Siren', [['path', {
  d: 'M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z',
  key: 'rmc51c'
}], ['path', {
  d: 'M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z',
  key: 'yyvmjy'
}], ['path', {
  d: 'M21 12h1',
  key: 'jtio3y'
}], ['path', {
  d: 'M18.5 4.5 18 5',
  key: 'g5sp9y'
}], ['path', {
  d: 'M2 12h1',
  key: '1uaihz'
}], ['path', {
  d: 'M12 2v1',
  key: '11qlp1'
}], ['path', {
  d: 'm4.929 4.929.707.707',
  key: '1i51kw'
}], ['path', {
  d: 'M12 12v6',
  key: '3ahymv'
}]]);
var Siren$1 = Siren;

var SkipBack = createReactComponent('SkipBack', [['polygon', {
  points: '19 20 9 12 19 4 19 20',
  key: 'o2sva'
}], ['line', {
  x1: '5',
  y1: '19',
  x2: '5',
  y2: '5',
  key: '1qxvzh'
}]]);
var SkipBack$1 = SkipBack;

var SkipForward = createReactComponent('SkipForward', [['polygon', {
  points: '5 4 15 12 5 20 5 4',
  key: '16p6eg'
}], ['line', {
  x1: '19',
  y1: '5',
  x2: '19',
  y2: '19',
  key: '5lndli'
}]]);
var SkipForward$1 = SkipForward;

var Skull = createReactComponent('Skull', [['circle', {
  cx: '9',
  cy: '12',
  r: '1',
  key: '1vctgf'
}], ['circle', {
  cx: '15',
  cy: '12',
  r: '1',
  key: '1tmaij'
}], ['path', {
  d: 'M8 20v2h8v-2',
  key: 'ded4og'
}], ['path', {
  d: 'm12.5 17-.5-1-.5 1h1z',
  key: '3me087'
}], ['path', {
  d: 'M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20',
  key: 'xq9p5u'
}]]);
var Skull$1 = Skull;

var Slack = createReactComponent('Slack', [['rect', {
  x: '13',
  y: '2',
  width: '3',
  height: '8',
  rx: '1.5',
  key: '134gbe'
}], ['path', {
  d: 'M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5',
  key: '183iwg'
}], ['rect', {
  x: '8',
  y: '14',
  width: '3',
  height: '8',
  rx: '1.5',
  key: '6p48jh'
}], ['path', {
  d: 'M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5',
  key: '76g71w'
}], ['rect', {
  x: '14',
  y: '13',
  width: '8',
  height: '3',
  rx: '1.5',
  key: '1gabf9'
}], ['path', {
  d: 'M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5',
  key: 'jc4sz0'
}], ['rect', {
  x: '2',
  y: '8',
  width: '8',
  height: '3',
  rx: '1.5',
  key: '1bingn'
}], ['path', {
  d: 'M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5',
  key: '16f3cl'
}]]);
var Slack$1 = Slack;

var Slash = createReactComponent('Slash', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '4.93',
  y1: '4.93',
  x2: '19.07',
  y2: '19.07',
  key: 'bqqkff'
}]]);
var Slash$1 = Slash;

var Slice = createReactComponent('Slice', [['path', {
  d: 'm8 14-6 6h9v-3',
  key: 'zo3j9a'
}], ['path', {
  d: 'M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z',
  key: '1dzx0j'
}]]);
var Slice$1 = Slice;

var SlidersHorizontal = createReactComponent('SlidersHorizontal', [['line', {
  x1: '21',
  y1: '4',
  x2: '14',
  y2: '4',
  key: 'ujuyh9'
}], ['line', {
  x1: '10',
  y1: '4',
  x2: '3',
  y2: '4',
  key: '5ejmvt'
}], ['line', {
  x1: '21',
  y1: '12',
  x2: '12',
  y2: '12',
  key: 'inadxn'
}], ['line', {
  x1: '8',
  y1: '12',
  x2: '3',
  y2: '12',
  key: 'apa8u8'
}], ['line', {
  x1: '21',
  y1: '20',
  x2: '16',
  y2: '20',
  key: 'w4k2j3'
}], ['line', {
  x1: '12',
  y1: '20',
  x2: '3',
  y2: '20',
  key: '15hqih'
}], ['line', {
  x1: '14',
  y1: '2',
  x2: '14',
  y2: '6',
  key: '19ksk4'
}], ['line', {
  x1: '8',
  y1: '10',
  x2: '8',
  y2: '14',
  key: '1cn0zn'
}], ['line', {
  x1: '16',
  y1: '18',
  x2: '16',
  y2: '22',
  key: '1vfncj'
}]]);
var SlidersHorizontal$1 = SlidersHorizontal;

var Sliders = createReactComponent('Sliders', [['line', {
  x1: '4',
  y1: '21',
  x2: '4',
  y2: '14',
  key: '2cpl65'
}], ['line', {
  x1: '4',
  y1: '10',
  x2: '4',
  y2: '3',
  key: '1b26kg'
}], ['line', {
  x1: '12',
  y1: '21',
  x2: '12',
  y2: '12',
  key: 'fxobwr'
}], ['line', {
  x1: '12',
  y1: '8',
  x2: '12',
  y2: '3',
  key: 'bkspcw'
}], ['line', {
  x1: '20',
  y1: '21',
  x2: '20',
  y2: '16',
  key: 'b7lt1r'
}], ['line', {
  x1: '20',
  y1: '12',
  x2: '20',
  y2: '3',
  key: 'inamez'
}], ['line', {
  x1: '2',
  y1: '14',
  x2: '6',
  y2: '14',
  key: 'tezuxb'
}], ['line', {
  x1: '10',
  y1: '8',
  x2: '14',
  y2: '8',
  key: '1w8tme'
}], ['line', {
  x1: '18',
  y1: '16',
  x2: '22',
  y2: '16',
  key: '1gnq8h'
}]]);
var Sliders$1 = Sliders;

var SmartphoneCharging = createReactComponent('SmartphoneCharging', [['rect', {
  x: '5',
  y: '2',
  width: '14',
  height: '20',
  rx: '2',
  ry: '2',
  key: '1gcc4z'
}], ['path', {
  d: 'M12.667 8 10 12h4l-2.667 4',
  key: 'h9lk2d'
}]]);
var SmartphoneCharging$1 = SmartphoneCharging;

var Smartphone = createReactComponent('Smartphone', [['rect', {
  x: '5',
  y: '2',
  width: '14',
  height: '20',
  rx: '2',
  ry: '2',
  key: '1gcc4z'
}], ['path', {
  d: 'M12 18h.01',
  key: 'mhygvu'
}]]);
var Smartphone$1 = Smartphone;

var SmilePlus = createReactComponent('SmilePlus', [['path', {
  d: 'M22 11v1a10 10 0 1 1-9-10',
  key: 'ew0xw9'
}], ['path', {
  d: 'M8 14s1.5 2 4 2 4-2 4-2',
  key: '1y1vjs'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9',
  key: '141aaf'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9',
  key: '1cyg3o'
}], ['path', {
  d: 'M16 5h6',
  key: '1vod17'
}], ['path', {
  d: 'M19 2v6',
  key: '4bpg5p'
}]]);
var SmilePlus$1 = SmilePlus;

var Smile = createReactComponent('Smile', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['path', {
  d: 'M8 14s1.5 2 4 2 4-2 4-2',
  key: '1y1vjs'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '9.01',
  y2: '9',
  key: '141aaf'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '15.01',
  y2: '9',
  key: '1cyg3o'
}]]);
var Smile$1 = Smile;

var Snowflake = createReactComponent('Snowflake', [['line', {
  x1: '2',
  y1: '12',
  x2: '22',
  y2: '12',
  key: 'zvmn4p'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '22',
  key: '1k6o5o'
}], ['path', {
  d: 'm20 16-4-4 4-4',
  key: 'rquw4f'
}], ['path', {
  d: 'm4 8 4 4-4 4',
  key: '12s3z9'
}], ['path', {
  d: 'm16 4-4 4-4-4',
  key: '1tumq1'
}], ['path', {
  d: 'm8 20 4-4 4 4',
  key: '9p200w'
}]]);
var Snowflake$1 = Snowflake;

var Sofa = createReactComponent('Sofa', [['path', {
  d: 'M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3',
  key: '1dgpiv'
}], ['path', {
  d: 'M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z',
  key: 'u5qfb7'
}], ['path', {
  d: 'M4 18v2',
  key: 'jwo5n2'
}], ['path', {
  d: 'M20 18v2',
  key: '1ar1qi'
}], ['path', {
  d: 'M12 4v9',
  key: 'oqhhn3'
}]]);
var Sofa$1 = Sofa;

var SortAsc = createReactComponent('SortAsc', [['path', {
  d: 'M11 11H15',
  key: '13b0h1'
}], ['path', {
  d: 'M11 15H18',
  key: '14lp16'
}], ['path', {
  d: 'M11 19H21',
  key: '1cy3wr'
}], ['path', {
  d: 'M9 7L6 4L3 7',
  key: 'bjdqf3'
}], ['path', {
  d: 'M6 6L6 20',
  key: '1aagpo'
}]]);
var SortAsc$1 = SortAsc;

var SortDesc = createReactComponent('SortDesc', [['path', {
  d: 'M11 5h10',
  key: '1cz7ny'
}], ['path', {
  d: 'M11 9h7',
  key: '13ra05'
}], ['path', {
  d: 'M11 13h4',
  key: '1p7l4v'
}], ['path', {
  d: 'm3 17 3 3 3-3',
  key: 'd2bl7z'
}], ['path', {
  d: 'M6 18V4',
  key: '20vmay'
}]]);
var SortDesc$1 = SortDesc;

var Speaker = createReactComponent('Speaker', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2',
  ry: '2',
  key: '152kg8'
}], ['circle', {
  cx: '12',
  cy: '14',
  r: '4',
  key: '1jruaj'
}], ['line', {
  x1: '12',
  y1: '6',
  x2: '12.01',
  y2: '6',
  key: 'fpk8as'
}]]);
var Speaker$1 = Speaker;

var Sprout = createReactComponent('Sprout', [['path', {
  d: 'M7 20h10',
  key: 'e6iznv'
}], ['path', {
  d: 'M10 20c5.5-2.5.8-6.4 3-10',
  key: '161w41'
}], ['path', {
  d: 'M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z',
  key: '9gtqwd'
}], ['path', {
  d: 'M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z',
  key: 'bkxnd2'
}]]);
var Sprout$1 = Sprout;

var Square = createReactComponent('Square', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}]]);
var Square$1 = Square;

var StarHalf = createReactComponent('StarHalf', [['path', {
  d: 'M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2',
  key: 'nare05'
}]]);
var StarHalf$1 = StarHalf;

var StarOff = createReactComponent('StarOff', [['path', {
  d: 'M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43',
  key: '16m0ql'
}], ['path', {
  d: 'M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91',
  key: '1vt8nq'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var StarOff$1 = StarOff;

var Star = createReactComponent('Star', [['polygon', {
  points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
  key: '8f66p6'
}]]);
var Star$1 = Star;

var Stethoscope = createReactComponent('Stethoscope', [['path', {
  d: 'M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3',
  key: '1jd90r'
}], ['path', {
  d: 'M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4',
  key: '126ukv'
}], ['circle', {
  cx: '20',
  cy: '10',
  r: '2',
  key: 'ts1r5v'
}]]);
var Stethoscope$1 = Stethoscope;

var Sticker = createReactComponent('Sticker', [['path', {
  d: 'M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z',
  key: '1wis1t'
}], ['path', {
  d: 'M15 3v6h6',
  key: 'edgan2'
}], ['path', {
  d: 'M10 16s.8 1 2 1c1.3 0 2-1 2-1',
  key: '1vvgv3'
}], ['path', {
  d: 'M8 13h0',
  key: 'jdup5h'
}], ['path', {
  d: 'M16 13h0',
  key: 'l4i2ga'
}]]);
var Sticker$1 = Sticker;

var StickyNote = createReactComponent('StickyNote', [['path', {
  d: 'M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z',
  key: '1wis1t'
}], ['path', {
  d: 'M15 3v6h6',
  key: 'edgan2'
}]]);
var StickyNote$1 = StickyNote;

var StopCircle = createReactComponent('StopCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['rect', {
  x: '9',
  y: '9',
  width: '6',
  height: '6',
  key: 'o3kz5p'
}]]);
var StopCircle$1 = StopCircle;

var StretchHorizontal = createReactComponent('StretchHorizontal', [['rect', {
  x: '2',
  y: '4',
  width: '20',
  height: '6',
  rx: '2',
  key: '12sjy4'
}], ['rect', {
  x: '2',
  y: '14',
  width: '20',
  height: '6',
  rx: '2',
  key: 'lnm6uo'
}]]);
var StretchHorizontal$1 = StretchHorizontal;

var StretchVertical = createReactComponent('StretchVertical', [['rect', {
  x: '4',
  y: '2',
  width: '6',
  height: '20',
  rx: '2',
  key: '1lym67'
}], ['rect', {
  x: '14',
  y: '2',
  width: '6',
  height: '20',
  rx: '2',
  key: 'b7v5o0'
}]]);
var StretchVertical$1 = StretchVertical;

var Strikethrough = createReactComponent('Strikethrough', [['path', {
  d: 'M16 4H9a3 3 0 0 0-2.83 4',
  key: '43sutm'
}], ['path', {
  d: 'M14 12a4 4 0 0 1 0 8H6',
  key: 'nlfj13'
}], ['line', {
  x1: '4',
  y1: '12',
  x2: '20',
  y2: '12',
  key: '1q6rtp'
}]]);
var Strikethrough$1 = Strikethrough;

var Subscript = createReactComponent('Subscript', [['path', {
  d: 'm4 5 8 8',
  key: '1eunvl'
}], ['path', {
  d: 'm12 5-8 8',
  key: '1ah0jp'
}], ['path', {
  d: 'M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07',
  key: 'e8ta8j'
}]]);
var Subscript$1 = Subscript;

var SunDim = createReactComponent('SunDim', [['path', {
  d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  key: '1r4kox'
}], ['path', {
  d: 'M12 4h.01',
  key: '1ujb9j'
}], ['path', {
  d: 'M20 12h.01',
  key: '1ykeid'
}], ['path', {
  d: 'M12 20h.01',
  key: 'zekei9'
}], ['path', {
  d: 'M4 12h.01',
  key: '158zrr'
}], ['path', {
  d: 'M17.657 6.343h.01',
  key: '31pqzk'
}], ['path', {
  d: 'M17.657 17.657h.01',
  key: 'jehnf4'
}], ['path', {
  d: 'M6.343 17.657h.01',
  key: 'gdk6ow'
}], ['path', {
  d: 'M6.343 6.343h.01',
  key: '1uurf0'
}]]);
var SunDim$1 = SunDim;

var SunMedium = createReactComponent('SunMedium', [['path', {
  d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  key: '1r4kox'
}], ['path', {
  d: 'M12 3v1',
  key: '1asbbs'
}], ['path', {
  d: 'M12 20v1',
  key: '1wcdkc'
}], ['path', {
  d: 'M3 12h1',
  key: 'lp3yf2'
}], ['path', {
  d: 'M20 12h1',
  key: '1vloll'
}], ['path', {
  d: 'm18.364 5.636-.707.707',
  key: '1hakh0'
}], ['path', {
  d: 'm6.343 17.657-.707.707',
  key: '18m9nf'
}], ['path', {
  d: 'm5.636 5.636.707.707',
  key: '1xv1c5'
}], ['path', {
  d: 'm17.657 17.657.707.707',
  key: 'vl76zb'
}]]);
var SunMedium$1 = SunMedium;

var SunMoon = createReactComponent('SunMoon', [['path', {
  d: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  key: '1r4kox'
}], ['path', {
  d: 'M12 8a2.828 2.828 0 1 0 4 4',
  key: '16688u'
}], ['path', {
  d: 'M12 2v2',
  key: 'tus03m'
}], ['path', {
  d: 'M12 20v2',
  key: '1lh1kg'
}], ['path', {
  d: 'm4.93 4.93 1.41 1.41',
  key: '149t6j'
}], ['path', {
  d: 'm17.66 17.66 1.41 1.41',
  key: 'ptbguv'
}], ['path', {
  d: 'M2 12h2',
  key: '1t8f8n'
}], ['path', {
  d: 'M20 12h2',
  key: '1q8mjw'
}], ['path', {
  d: 'm6.34 17.66-1.41 1.41',
  key: '1m8zz5'
}], ['path', {
  d: 'm19.07 4.93-1.41 1.41',
  key: '1shlcs'
}]]);
var SunMoon$1 = SunMoon;

var SunSnow = createReactComponent('SunSnow', [['path', {
  d: 'M10 9a3 3 0 1 0 0 6',
  key: '6zmtdl'
}], ['path', {
  d: 'M2 12h1',
  key: '1uaihz'
}], ['path', {
  d: 'M14 21V3',
  key: '1llu3z'
}], ['path', {
  d: 'M10 4V3',
  key: 'pkzwkn'
}], ['path', {
  d: 'M10 21v-1',
  key: '1u8rkd'
}], ['path', {
  d: 'm3.64 18.36.7-.7',
  key: '105rm9'
}], ['path', {
  d: 'm4.34 6.34-.7-.7',
  key: 'd3unjp'
}], ['path', {
  d: 'M14 12h8',
  key: '4f43i9'
}], ['path', {
  d: 'm17 4-3 3',
  key: '15jcng'
}], ['path', {
  d: 'm14 17 3 3',
  key: '6tlq38'
}], ['path', {
  d: 'm21 15-3-3 3-3',
  key: '1nlnje'
}]]);
var SunSnow$1 = SunSnow;

var Sun = createReactComponent('Sun', [['circle', {
  cx: '12',
  cy: '12',
  r: '4',
  key: '4exip2'
}], ['path', {
  d: 'M12 2v2',
  key: 'tus03m'
}], ['path', {
  d: 'M12 20v2',
  key: '1lh1kg'
}], ['path', {
  d: 'm4.93 4.93 1.41 1.41',
  key: '149t6j'
}], ['path', {
  d: 'm17.66 17.66 1.41 1.41',
  key: 'ptbguv'
}], ['path', {
  d: 'M2 12h2',
  key: '1t8f8n'
}], ['path', {
  d: 'M20 12h2',
  key: '1q8mjw'
}], ['path', {
  d: 'm6.34 17.66-1.41 1.41',
  key: '1m8zz5'
}], ['path', {
  d: 'm19.07 4.93-1.41 1.41',
  key: '1shlcs'
}]]);
var Sun$1 = Sun;

var Sunrise = createReactComponent('Sunrise', [['path', {
  d: 'M12 2v8',
  key: '1q4o3n'
}], ['path', {
  d: 'm4.93 10.93 1.41 1.41',
  key: '2a7f42'
}], ['path', {
  d: 'M2 18h2',
  key: 'j10viu'
}], ['path', {
  d: 'M20 18h2',
  key: 'wocana'
}], ['path', {
  d: 'm19.07 10.93-1.41 1.41',
  key: '15zs5n'
}], ['path', {
  d: 'M22 22H2',
  key: '19qnx5'
}], ['path', {
  d: 'm8 6 4-4 4 4',
  key: 'ybng9g'
}], ['path', {
  d: 'M16 18a4 4 0 0 0-8 0',
  key: '1lzouq'
}]]);
var Sunrise$1 = Sunrise;

var Sunset = createReactComponent('Sunset', [['path', {
  d: 'M12 10V2',
  key: '16sf7g'
}], ['path', {
  d: 'm4.93 10.93 1.41 1.41',
  key: '2a7f42'
}], ['path', {
  d: 'M2 18h2',
  key: 'j10viu'
}], ['path', {
  d: 'M20 18h2',
  key: 'wocana'
}], ['path', {
  d: 'm19.07 10.93-1.41 1.41',
  key: '15zs5n'
}], ['path', {
  d: 'M22 22H2',
  key: '19qnx5'
}], ['path', {
  d: 'm16 6-4 4-4-4',
  key: '6wukr'
}], ['path', {
  d: 'M16 18a4 4 0 0 0-8 0',
  key: '1lzouq'
}]]);
var Sunset$1 = Sunset;

var Superscript = createReactComponent('Superscript', [['path', {
  d: 'm4 19 8-8',
  key: 'hr47gm'
}], ['path', {
  d: 'm12 19-8-8',
  key: '1dhhmo'
}], ['path', {
  d: 'M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06',
  key: '1dfcux'
}]]);
var Superscript$1 = Superscript;

var SwissFranc = createReactComponent('SwissFranc', [['path', {
  d: 'M10 21V3h8',
  key: 'br2l0g'
}], ['path', {
  d: 'M6 16h9',
  key: '2py0wn'
}], ['path', {
  d: 'M10 9.5h7',
  key: '13dmhz'
}]]);
var SwissFranc$1 = SwissFranc;

var SwitchCamera = createReactComponent('SwitchCamera', [['path', {
  d: 'M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5',
  key: 'mtk2lu'
}], ['path', {
  d: 'M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5',
  key: '120jsl'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '3',
  key: '1v7zrd'
}], ['path', {
  d: 'm18 22-3-3 3-3',
  key: 'kgdoj7'
}], ['path', {
  d: 'm6 2 3 3-3 3',
  key: '1fnbkv'
}]]);
var SwitchCamera$1 = SwitchCamera;

var Sword = createReactComponent('Sword', [['polyline', {
  points: '14.5 17.5 3 6 3 3 6 3 17.5 14.5',
  key: '1hfsw2'
}], ['line', {
  x1: '13',
  y1: '19',
  x2: '19',
  y2: '13',
  key: '7h9f57'
}], ['line', {
  x1: '16',
  y1: '16',
  x2: '20',
  y2: '20',
  key: '1b4zco'
}], ['line', {
  x1: '19',
  y1: '21',
  x2: '21',
  y2: '19',
  key: 'df24kr'
}]]);
var Sword$1 = Sword;

var Swords = createReactComponent('Swords', [['polyline', {
  points: '14.5 17.5 3 6 3 3 6 3 17.5 14.5',
  key: '1hfsw2'
}], ['line', {
  x1: '13',
  y1: '19',
  x2: '19',
  y2: '13',
  key: '7h9f57'
}], ['line', {
  x1: '16',
  y1: '16',
  x2: '20',
  y2: '20',
  key: '1b4zco'
}], ['line', {
  x1: '19',
  y1: '21',
  x2: '21',
  y2: '19',
  key: 'df24kr'
}], ['polyline', {
  points: '14.5 6.5 18 3 21 3 21 6 17.5 9.5',
  key: 'hbey2j'
}], ['line', {
  x1: '5',
  y1: '14',
  x2: '9',
  y2: '18',
  key: 'acydkb'
}], ['line', {
  x1: '7',
  y1: '17',
  x2: '4',
  y2: '20',
  key: '1vmq9v'
}], ['line', {
  x1: '3',
  y1: '19',
  x2: '5',
  y2: '21',
  key: '139kw4'
}]]);
var Swords$1 = Swords;

var Syringe = createReactComponent('Syringe', [['path', {
  d: 'm18 2 4 4',
  key: '22kx64'
}], ['path', {
  d: 'm17 7 3-3',
  key: '1w1zoj'
}], ['path', {
  d: 'M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5',
  key: '1exhtz'
}], ['path', {
  d: 'm9 11 4 4',
  key: 'rovt3i'
}], ['path', {
  d: 'm5 19-3 3',
  key: '59f2uf'
}], ['path', {
  d: 'm14 4 6 6',
  key: 'yqp9t2'
}]]);
var Syringe$1 = Syringe;

var Table2 = createReactComponent('Table2', [['path', {
  d: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18',
  key: 'gugj83'
}]]);
var Table2$1 = Table2;

var Table = createReactComponent('Table', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '3',
  y1: '9',
  x2: '21',
  y2: '9',
  key: '1uch6j'
}], ['line', {
  x1: '3',
  y1: '15',
  x2: '21',
  y2: '15',
  key: '1xojw2'
}], ['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '21',
  key: 'essbwb'
}]]);
var Table$1 = Table;

var Tablet = createReactComponent('Tablet', [['rect', {
  x: '4',
  y: '2',
  width: '16',
  height: '20',
  rx: '2',
  ry: '2',
  key: '152kg8'
}], ['line', {
  x1: '12',
  y1: '18',
  x2: '12.01',
  y2: '18',
  key: '73g4n8'
}]]);
var Tablet$1 = Tablet;

var Tag = createReactComponent('Tag', [['path', {
  d: 'M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z',
  key: '14b2ls'
}], ['path', {
  d: 'M7 7h.01',
  key: '7u93v4'
}]]);
var Tag$1 = Tag;

var Tags = createReactComponent('Tags', [['path', {
  d: 'M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z',
  key: 'gt587u'
}], ['path', {
  d: 'M6 9.01V9',
  key: '1flxpt'
}], ['path', {
  d: 'm15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19',
  key: '1cbfv1'
}]]);
var Tags$1 = Tags;

var Target = createReactComponent('Target', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '6',
  key: '1vlfrh'
}], ['circle', {
  cx: '12',
  cy: '12',
  r: '2',
  key: '1c9p78'
}]]);
var Target$1 = Target;

var Tent = createReactComponent('Tent', [['path', {
  d: 'M19 20 10 4',
  key: '1ak541'
}], ['path', {
  d: 'm5 20 9-16',
  key: '11dtj9'
}], ['path', {
  d: 'M3 20h18',
  key: '1l19wn'
}], ['path', {
  d: 'm12 15-3 5',
  key: '1c5kej'
}], ['path', {
  d: 'm12 15 3 5',
  key: 'odkmhi'
}]]);
var Tent$1 = Tent;

var TerminalSquare = createReactComponent('TerminalSquare', [['path', {
  d: 'm7 11 2-2-2-2',
  key: '1lz0vl'
}], ['path', {
  d: 'M11 13h4',
  key: '1p7l4v'
}], ['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}]]);
var TerminalSquare$1 = TerminalSquare;

var Terminal = createReactComponent('Terminal', [['polyline', {
  points: '4 17 10 11 4 5',
  key: 'akl6gq'
}], ['line', {
  x1: '12',
  y1: '19',
  x2: '20',
  y2: '19',
  key: 'fyyrwq'
}]]);
var Terminal$1 = Terminal;

var TextCursorInput = createReactComponent('TextCursorInput', [['path', {
  d: 'M13 20h-1a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1',
  key: '19sqy7'
}], ['path', {
  d: 'M5 4h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5',
  key: '1etnvu'
}], ['path', {
  d: 'M13.1 7.9h6.8A2.18 2.18 0 0 1 22 10v4a2.11 2.11 0 0 1-2.1 2.1h-6.8',
  key: 'ebxlah'
}], ['path', {
  d: 'M4.8 16.1h-.7A2.18 2.18 0 0 1 2 14v-4a2.18 2.18 0 0 1 2.1-2.1h.7',
  key: '1l3v11'
}]]);
var TextCursorInput$1 = TextCursorInput;

var TextCursor = createReactComponent('TextCursor', [['path', {
  d: 'M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1',
  key: 'uvaxm9'
}], ['path', {
  d: 'M7 22h1a4 4 0 0 0 4-4v-1',
  key: '11xy8d'
}], ['path', {
  d: 'M7 2h1a4 4 0 0 1 4 4v1',
  key: '1uw06m'
}]]);
var TextCursor$1 = TextCursor;

var ThermometerSnowflake = createReactComponent('ThermometerSnowflake', [['path', {
  d: 'M2 12h10',
  key: '19562f'
}], ['path', {
  d: 'M9 4v16',
  key: '81ygyz'
}], ['path', {
  d: 'm3 9 3 3-3 3',
  key: '1sas0l'
}], ['path', {
  d: 'M12 6 9 9 6 6',
  key: 'pfrgxu'
}], ['path', {
  d: 'm6 18 3-3 1.5 1.5',
  key: '1e277p'
}], ['path', {
  d: 'M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z',
  key: 'iof6y5'
}]]);
var ThermometerSnowflake$1 = ThermometerSnowflake;

var ThermometerSun = createReactComponent('ThermometerSun', [['path', {
  d: 'M12 9a4 4 0 0 0-2 7.5',
  key: '1jvsq6'
}], ['path', {
  d: 'M12 3v2',
  key: '1w22ol'
}], ['path', {
  d: 'm6.6 18.4-1.4 1.4',
  key: 'w2yidj'
}], ['path', {
  d: 'M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z',
  key: 'iof6y5'
}], ['path', {
  d: 'M4 13H2',
  key: '118le4'
}], ['path', {
  d: 'M6.34 7.34 4.93 5.93',
  key: '1brd51'
}]]);
var ThermometerSun$1 = ThermometerSun;

var Thermometer = createReactComponent('Thermometer', [['path', {
  d: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z',
  key: '17jzev'
}]]);
var Thermometer$1 = Thermometer;

var ThumbsDown = createReactComponent('ThumbsDown', [['path', {
  d: 'M17 14V2',
  key: '8ymqnk'
}], ['path', {
  d: 'M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z',
  key: 's6e0r'
}]]);
var ThumbsDown$1 = ThumbsDown;

var ThumbsUp = createReactComponent('ThumbsUp', [['path', {
  d: 'M7 10v12',
  key: '1qc93n'
}], ['path', {
  d: 'M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z',
  key: 'y3tblf'
}]]);
var ThumbsUp$1 = ThumbsUp;

var Ticket = createReactComponent('Ticket', [['path', {
  d: 'M3 7v2a3 3 0 1 1 0 6v2c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z',
  key: 'nswdcl'
}], ['path', {
  d: 'M13 5v2',
  key: 'dyzc3o'
}], ['path', {
  d: 'M13 17v2',
  key: '1ont0d'
}], ['path', {
  d: 'M13 11v2',
  key: '1wjjxi'
}]]);
var Ticket$1 = Ticket;

var TimerOff = createReactComponent('TimerOff', [['path', {
  d: 'M10 2h4',
  key: 'n1abiw'
}], ['path', {
  d: 'M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7',
  key: '10he05'
}], ['path', {
  d: 'M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2',
  key: '15f7sh'
}], ['path', {
  d: 'm2 2 20 20',
  key: '1ooewy'
}], ['path', {
  d: 'M12 12v-2',
  key: 'fwoke6'
}]]);
var TimerOff$1 = TimerOff;

var TimerReset = createReactComponent('TimerReset', [['path', {
  d: 'M10 2h4',
  key: 'n1abiw'
}], ['path', {
  d: 'M12 14v-4',
  key: '1evpnu'
}], ['path', {
  d: 'M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6',
  key: '1ts96g'
}], ['path', {
  d: 'M9 17H4v5',
  key: '8t5av'
}]]);
var TimerReset$1 = TimerReset;

var Timer = createReactComponent('Timer', [['line', {
  x1: '10',
  x2: '14',
  y1: '2',
  y2: '2',
  key: '14vaq8'
}], ['line', {
  x1: '12',
  x2: '15',
  y1: '14',
  y2: '11',
  key: '17fdiu'
}], ['circle', {
  cx: '12',
  cy: '14',
  r: '8',
  key: '1e1u0o'
}]]);
var Timer$1 = Timer;

var ToggleLeft = createReactComponent('ToggleLeft', [['rect', {
  x: '1',
  y: '5',
  width: '22',
  height: '14',
  rx: '7',
  ry: '7',
  key: 'rq2fx9'
}], ['circle', {
  cx: '8',
  cy: '12',
  r: '3',
  key: 'nylqfu'
}]]);
var ToggleLeft$1 = ToggleLeft;

var ToggleRight = createReactComponent('ToggleRight', [['rect', {
  x: '1',
  y: '5',
  width: '22',
  height: '14',
  rx: '7',
  ry: '7',
  key: 'rq2fx9'
}], ['circle', {
  cx: '16',
  cy: '12',
  r: '3',
  key: 'nkkl0l'
}]]);
var ToggleRight$1 = ToggleRight;

var Tornado = createReactComponent('Tornado', [['path', {
  d: 'M21 4H3',
  key: '1hwok0'
}], ['path', {
  d: 'M18 8H6',
  key: '41n648'
}], ['path', {
  d: 'M19 12H9',
  key: '1g4lpz'
}], ['path', {
  d: 'M16 16h-6',
  key: '1j5d54'
}], ['path', {
  d: 'M11 20H9',
  key: '39obr8'
}]]);
var Tornado$1 = Tornado;

var ToyBrick = createReactComponent('ToyBrick', [['rect', {
  x: '3',
  y: '8',
  width: '18',
  height: '12',
  rx: '1',
  key: '1yob91'
}], ['path', {
  d: 'M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3',
  key: 's0042v'
}], ['path', {
  d: 'M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3',
  key: '9wmeh2'
}]]);
var ToyBrick$1 = ToyBrick;

var Train = createReactComponent('Train', [['rect', {
  x: '4',
  y: '3',
  width: '16',
  height: '16',
  rx: '2',
  key: 'u93jis'
}], ['path', {
  d: 'M4 11h16',
  key: 'mpoxn0'
}], ['path', {
  d: 'M12 3v8',
  key: '1h2ygw'
}], ['path', {
  d: 'm8 19-2 3',
  key: '13i0xs'
}], ['path', {
  d: 'm18 22-2-3',
  key: '1p0ohu'
}], ['path', {
  d: 'M8 15h0',
  key: 'q9eq1f'
}], ['path', {
  d: 'M16 15h0',
  key: 'pzrbjg'
}]]);
var Train$1 = Train;

var Trash2 = createReactComponent('Trash2', [['path', {
  d: 'M3 6h18',
  key: 'd0wm0j'
}], ['path', {
  d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6',
  key: '4alrt4'
}], ['path', {
  d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2',
  key: 'v07s0e'
}], ['line', {
  x1: '10',
  y1: '11',
  x2: '10',
  y2: '17',
  key: 'm9v7hp'
}], ['line', {
  x1: '14',
  y1: '11',
  x2: '14',
  y2: '17',
  key: '23cpt9'
}]]);
var Trash2$1 = Trash2;

var Trash = createReactComponent('Trash', [['path', {
  d: 'M3 6h18',
  key: 'd0wm0j'
}], ['path', {
  d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6',
  key: '4alrt4'
}], ['path', {
  d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2',
  key: 'v07s0e'
}]]);
var Trash$1 = Trash;

var TreeDeciduous = createReactComponent('TreeDeciduous', [['path', {
  d: 'M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z',
  key: '12ivfl'
}], ['path', {
  d: 'M12 19v3',
  key: 'npa21l'
}]]);
var TreeDeciduous$1 = TreeDeciduous;

var TreePine = createReactComponent('TreePine', [['path', {
  d: 'm17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z',
  key: 'cpyugq'
}], ['path', {
  d: 'M12 22v-3',
  key: 'kmzjlo'
}]]);
var TreePine$1 = TreePine;

var Trees = createReactComponent('Trees', [['path', {
  d: 'M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z',
  key: 'yh07w9'
}], ['path', {
  d: 'M7 16v6',
  key: '1a82de'
}], ['path', {
  d: 'M13 19v3',
  key: '13sx9i'
}], ['path', {
  d: 'M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5',
  key: '1sj9kv'
}]]);
var Trees$1 = Trees;

var Trello = createReactComponent('Trello', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['rect', {
  x: '7',
  y: '7',
  width: '3',
  height: '9',
  key: '1xk0xp'
}], ['rect', {
  x: '14',
  y: '7',
  width: '3',
  height: '5',
  key: '1otkhn'
}]]);
var Trello$1 = Trello;

var TrendingDown = createReactComponent('TrendingDown', [['polyline', {
  points: '22 17 13.5 8.5 8.5 13.5 2 7',
  key: '1r2t7k'
}], ['polyline', {
  points: '16 17 22 17 22 11',
  key: '11uiuu'
}]]);
var TrendingDown$1 = TrendingDown;

var TrendingUp = createReactComponent('TrendingUp', [['polyline', {
  points: '22 7 13.5 15.5 8.5 10.5 2 17',
  key: '126l90'
}], ['polyline', {
  points: '16 7 22 7 22 13',
  key: 'kwv8wd'
}]]);
var TrendingUp$1 = TrendingUp;

var Triangle = createReactComponent('Triangle', [['path', {
  d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z',
  key: 'c3ski4'
}]]);
var Triangle$1 = Triangle;

var Trophy = createReactComponent('Trophy', [['path', {
  d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6',
  key: '17hqa7'
}], ['path', {
  d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18',
  key: 'lmptdp'
}], ['path', {
  d: 'M4 22h16',
  key: '57wxv0'
}], ['path', {
  d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22',
  key: '1nw9bq'
}], ['path', {
  d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22',
  key: '1np0yb'
}], ['path', {
  d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z',
  key: 'u46fv3'
}]]);
var Trophy$1 = Trophy;

var Truck = createReactComponent('Truck', [['path', {
  d: 'M10 17h4V5H2v12h3',
  key: '1jq12e'
}], ['path', {
  d: 'M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5',
  key: '1xb3ft'
}], ['path', {
  d: 'M14 17h1',
  key: 'nufu4t'
}], ['circle', {
  cx: '7.5',
  cy: '17.5',
  r: '2.5',
  key: 'a7aife'
}], ['circle', {
  cx: '17.5',
  cy: '17.5',
  r: '2.5',
  key: '1mdrzq'
}]]);
var Truck$1 = Truck;

var Tv2 = createReactComponent('Tv2', [['path', {
  d: 'M7 21h10',
  key: '1b0cd5'
}], ['rect', {
  x: '2',
  y: '3',
  width: '20',
  height: '14',
  rx: '2',
  key: 'x3v2xh'
}]]);
var Tv2$1 = Tv2;

var Tv = createReactComponent('Tv', [['rect', {
  x: '2',
  y: '7',
  width: '20',
  height: '15',
  rx: '2',
  ry: '2',
  key: 'f237mn'
}], ['polyline', {
  points: '17 2 12 7 7 2',
  key: '11pgbg'
}]]);
var Tv$1 = Tv;

var Twitch = createReactComponent('Twitch', [['path', {
  d: 'M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7',
  key: 'c0yzno'
}]]);
var Twitch$1 = Twitch;

var Twitter = createReactComponent('Twitter', [['path', {
  d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  key: 'pff0z6'
}]]);
var Twitter$1 = Twitter;

var Type = createReactComponent('Type', [['polyline', {
  points: '4 7 4 4 20 4 20 7',
  key: '1nosan'
}], ['line', {
  x1: '9',
  y1: '20',
  x2: '15',
  y2: '20',
  key: '10hqwk'
}], ['line', {
  x1: '12',
  y1: '4',
  x2: '12',
  y2: '20',
  key: '8v58sd'
}]]);
var Type$1 = Type;

var Umbrella = createReactComponent('Umbrella', [['path', {
  d: 'M22 12a9.92 9.92 0 0 0-3.24-6.41 10.12 10.12 0 0 0-13.52 0A9.92 9.92 0 0 0 2 12Z',
  key: 'gyh82n'
}], ['path', {
  d: 'M12 12v8a2 2 0 0 0 4 0',
  key: 'ulpmoc'
}], ['line', {
  x1: '12',
  y1: '2',
  x2: '12',
  y2: '3',
  key: '7v6ckq'
}]]);
var Umbrella$1 = Umbrella;

var Underline = createReactComponent('Underline', [['path', {
  d: 'M6 4v6a6 6 0 0 0 12 0V4',
  key: '9kb039'
}], ['line', {
  x1: '4',
  y1: '20',
  x2: '20',
  y2: '20',
  key: 'klhyhp'
}]]);
var Underline$1 = Underline;

var Undo2 = createReactComponent('Undo2', [['path', {
  d: 'M9 14 4 9l5-5',
  key: '102s5s'
}], ['path', {
  d: 'M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11',
  key: 'llx8ln'
}]]);
var Undo2$1 = Undo2;

var Undo = createReactComponent('Undo', [['path', {
  d: 'M3 7v6h6',
  key: '1v2h90'
}], ['path', {
  d: 'M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13',
  key: '1r6uu6'
}]]);
var Undo$1 = Undo;

var Unlink2 = createReactComponent('Unlink2', [['path', {
  d: 'M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2',
  key: '1re2ne'
}]]);
var Unlink2$1 = Unlink2;

var Unlink = createReactComponent('Unlink', [['path', {
  d: 'm18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71',
  key: 'yqzxt4'
}], ['path', {
  d: 'm5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71',
  key: '4qinb0'
}], ['line', {
  x1: '8',
  y1: '2',
  x2: '8',
  y2: '5',
  key: '187dr9'
}], ['line', {
  x1: '2',
  y1: '8',
  x2: '5',
  y2: '8',
  key: 'peo5ws'
}], ['line', {
  x1: '16',
  y1: '19',
  x2: '16',
  y2: '22',
  key: '6aelkz'
}], ['line', {
  x1: '19',
  y1: '16',
  x2: '22',
  y2: '16',
  key: 'ln8io3'
}]]);
var Unlink$1 = Unlink;

var Unlock = createReactComponent('Unlock', [['rect', {
  x: '3',
  y: '11',
  width: '18',
  height: '11',
  rx: '2',
  ry: '2',
  key: 'biyj2e'
}], ['path', {
  d: 'M7 11V7a5 5 0 0 1 9.9-1',
  key: '1mm8w8'
}]]);
var Unlock$1 = Unlock;

var UploadCloud = createReactComponent('UploadCloud', [['path', {
  d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
  key: '1pljnt'
}], ['path', {
  d: 'M12 12v9',
  key: '192myk'
}], ['path', {
  d: 'm16 16-4-4-4 4',
  key: '119tzi'
}]]);
var UploadCloud$1 = UploadCloud;

var Upload = createReactComponent('Upload', [['path', {
  d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
  key: 'ih7n3h'
}], ['polyline', {
  points: '17 8 12 3 7 8',
  key: 't8dd8p'
}], ['line', {
  x1: '12',
  y1: '3',
  x2: '12',
  y2: '15',
  key: 'wktxj0'
}]]);
var Upload$1 = Upload;

var Usb = createReactComponent('Usb', [['circle', {
  cx: '4',
  cy: '20',
  r: '1',
  key: '22iqad'
}], ['circle', {
  cx: '10',
  cy: '7',
  r: '1',
  key: 'dypaad'
}], ['path', {
  d: 'M4 20 19 5',
  key: '15hogs'
}], ['path', {
  d: 'm21 3-3 1 2 2 1-3Z',
  key: 'ew8vct'
}], ['path', {
  d: 'm10 7-5 5 2 5',
  key: '148pqf'
}], ['path', {
  d: 'm10 14 5 2 4-4',
  key: '1ivjwr'
}], ['path', {
  d: 'm18 12 1-1 1 1-1 1-1-1Z',
  key: 'tus6kn'
}]]);
var Usb$1 = Usb;

var UserCheck = createReactComponent('UserCheck', [['path', {
  d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
  key: '1yyitq'
}], ['circle', {
  cx: '9',
  cy: '7',
  r: '4',
  key: 'nufk8'
}], ['polyline', {
  points: '16 11 18 13 22 9',
  key: '1pwet4'
}]]);
var UserCheck$1 = UserCheck;

var UserCog = createReactComponent('UserCog', [['path', {
  d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
  key: '1yyitq'
}], ['circle', {
  cx: '9',
  cy: '7',
  r: '4',
  key: 'nufk8'
}], ['circle', {
  cx: '19',
  cy: '11',
  r: '2',
  key: '1rxg02'
}], ['path', {
  d: 'M19 8v1',
  key: '1iffrw'
}], ['path', {
  d: 'M19 13v1',
  key: 'z4xc62'
}], ['path', {
  d: 'm21.6 9.5-.87.5',
  key: '6lxupl'
}], ['path', {
  d: 'm17.27 12-.87.5',
  key: '1rwhxx'
}], ['path', {
  d: 'm21.6 12.5-.87-.5',
  key: 'agvc9a'
}], ['path', {
  d: 'm17.27 10-.87-.5',
  key: '12d57s'
}]]);
var UserCog$1 = UserCog;

var UserMinus = createReactComponent('UserMinus', [['path', {
  d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
  key: '1yyitq'
}], ['circle', {
  cx: '9',
  cy: '7',
  r: '4',
  key: 'nufk8'
}], ['line', {
  x1: '22',
  y1: '11',
  x2: '16',
  y2: '11',
  key: '8bk570'
}]]);
var UserMinus$1 = UserMinus;

var UserPlus = createReactComponent('UserPlus', [['path', {
  d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
  key: '1yyitq'
}], ['circle', {
  cx: '9',
  cy: '7',
  r: '4',
  key: 'nufk8'
}], ['line', {
  x1: '19',
  y1: '8',
  x2: '19',
  y2: '14',
  key: '9s353q'
}], ['line', {
  x1: '22',
  y1: '11',
  x2: '16',
  y2: '11',
  key: '8bk570'
}]]);
var UserPlus$1 = UserPlus;

var UserX = createReactComponent('UserX', [['path', {
  d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
  key: '1yyitq'
}], ['circle', {
  cx: '9',
  cy: '7',
  r: '4',
  key: 'nufk8'
}], ['line', {
  x1: '17',
  y1: '8',
  x2: '22',
  y2: '13',
  key: '10apcb'
}], ['line', {
  x1: '22',
  y1: '8',
  x2: '17',
  y2: '13',
  key: '1l8di5'
}]]);
var UserX$1 = UserX;

var User = createReactComponent('User', [['path', {
  d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2',
  key: '975kel'
}], ['circle', {
  cx: '12',
  cy: '7',
  r: '4',
  key: '17ys0d'
}]]);
var User$1 = User;

var Users = createReactComponent('Users', [['path', {
  d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2',
  key: '1yyitq'
}], ['circle', {
  cx: '9',
  cy: '7',
  r: '4',
  key: 'nufk8'
}], ['path', {
  d: 'M22 21v-2a4 4 0 0 0-3-3.87',
  key: 'kshegd'
}], ['path', {
  d: 'M16 3.13a4 4 0 0 1 0 7.75',
  key: '1da9ce'
}]]);
var Users$1 = Users;

var UtensilsCrossed = createReactComponent('UtensilsCrossed', [['path', {
  d: 'm16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8',
  key: 'n7qcjb'
}], ['path', {
  d: 'M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7',
  key: 'd0u48b'
}], ['path', {
  d: 'm2.1 21.8 6.4-6.3',
  key: 'yn04lh'
}], ['path', {
  d: 'm19 5-7 7',
  key: '194lzd'
}]]);
var UtensilsCrossed$1 = UtensilsCrossed;

var Utensils = createReactComponent('Utensils', [['path', {
  d: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2',
  key: 'cjf0a3'
}], ['path', {
  d: 'M7 2v20',
  key: '1473qp'
}], ['path', {
  d: 'M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7',
  key: '1ogz0v'
}]]);
var Utensils$1 = Utensils;

var VenetianMask = createReactComponent('VenetianMask', [['path', {
  d: 'M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z',
  key: '1g6z3j'
}], ['path', {
  d: 'M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z',
  key: 'c2lwnf'
}], ['path', {
  d: 'M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z',
  key: 'njd9zo'
}]]);
var VenetianMask$1 = VenetianMask;

var Verified = createReactComponent('Verified', [['path', {
  d: 'M12 3c-1.2 0-2.4.6-3 1.7A3.6 3.6 0 0 0 4.6 9c-1 .6-1.7 1.8-1.7 3s.7 2.4 1.7 3c-.3 1.2 0 2.5 1 3.4.8.8 2.1 1.2 3.3 1 .6 1 1.8 1.6 3 1.6s2.4-.6 3-1.7c1.2.3 2.5 0 3.4-1 .8-.8 1.2-2 1-3.3 1-.6 1.6-1.8 1.6-3s-.6-2.4-1.7-3c.3-1.2 0-2.5-1-3.4a3.7 3.7 0 0 0-3.3-1c-.6-1-1.8-1.6-3-1.6Z',
  key: '7kujkm'
}], ['path', {
  d: 'm9 12 2 2 4-4',
  key: 'dzmm74'
}]]);
var Verified$1 = Verified;

var VibrateOff = createReactComponent('VibrateOff', [['path', {
  d: 'm2 8 2 2-2 2 2 2-2 2',
  key: 'sv1b1'
}], ['path', {
  d: 'm22 8-2 2 2 2-2 2 2 2',
  key: '101i4y'
}], ['path', {
  d: 'M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2',
  key: '1hbad5'
}], ['path', {
  d: 'M16 10.34V6c0-.55-.45-1-1-1h-4.34',
  key: '1x5tf0'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var VibrateOff$1 = VibrateOff;

var Vibrate = createReactComponent('Vibrate', [['path', {
  d: 'm2 8 2 2-2 2 2 2-2 2',
  key: 'sv1b1'
}], ['path', {
  d: 'm22 8-2 2 2 2-2 2 2 2',
  key: '101i4y'
}], ['rect', {
  x: '8',
  y: '5',
  width: '8',
  height: '14',
  rx: '1',
  key: 'bi6xeo'
}]]);
var Vibrate$1 = Vibrate;

var VideoOff = createReactComponent('VideoOff', [['path', {
  d: 'M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8',
  key: 'ubwiq0'
}], ['path', {
  d: 'M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z',
  key: '1l10zd'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var VideoOff$1 = VideoOff;

var Video = createReactComponent('Video', [['path', {
  d: 'm22 8-6 4 6 4V8Z',
  key: '50v9me'
}], ['rect', {
  x: '2',
  y: '6',
  width: '14',
  height: '12',
  rx: '2',
  ry: '2',
  key: '14il7g'
}]]);
var Video$1 = Video;

var View = createReactComponent('View', [['path', {
  d: 'M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z',
  key: 'vptub8'
}], ['path', {
  d: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  key: '10lhjs'
}], ['path', {
  d: 'M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2',
  key: 'mrq65r'
}], ['path', {
  d: 'M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2',
  key: 'be3xqs'
}]]);
var View$1 = View;

var Voicemail = createReactComponent('Voicemail', [['circle', {
  cx: '6',
  cy: '12',
  r: '4',
  key: '1ehtga'
}], ['circle', {
  cx: '18',
  cy: '12',
  r: '4',
  key: '4vafl8'
}], ['line', {
  x1: '6',
  y1: '16',
  x2: '18',
  y2: '16',
  key: '1xgyj1'
}]]);
var Voicemail$1 = Voicemail;

var Volume1 = createReactComponent('Volume1', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5',
  key: '16drj5'
}], ['path', {
  d: 'M15.54 8.46a5 5 0 0 1 0 7.07',
  key: 'ltjumu'
}]]);
var Volume1$1 = Volume1;

var Volume2 = createReactComponent('Volume2', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5',
  key: '16drj5'
}], ['path', {
  d: 'M15.54 8.46a5 5 0 0 1 0 7.07',
  key: 'ltjumu'
}], ['path', {
  d: 'M19.07 4.93a10 10 0 0 1 0 14.14',
  key: '1kegas'
}]]);
var Volume2$1 = Volume2;

var VolumeX = createReactComponent('VolumeX', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5',
  key: '16drj5'
}], ['line', {
  x1: '22',
  y1: '9',
  x2: '16',
  y2: '15',
  key: '3gspht'
}], ['line', {
  x1: '16',
  y1: '9',
  x2: '22',
  y2: '15',
  key: '2tltpt'
}]]);
var VolumeX$1 = VolumeX;

var Volume = createReactComponent('Volume', [['polygon', {
  points: '11 5 6 9 2 9 2 15 6 15 11 19 11 5',
  key: '16drj5'
}]]);
var Volume$1 = Volume;

var Wallet = createReactComponent('Wallet', [['path', {
  d: 'M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4',
  key: 'st805m'
}], ['path', {
  d: 'M4 6v12c0 1.1.9 2 2 2h14v-4',
  key: '16cu1e'
}], ['path', {
  d: 'M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z',
  key: 'lwd56p'
}]]);
var Wallet$1 = Wallet;

var Wand2 = createReactComponent('Wand2', [['path', {
  d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z',
  key: '1bcowg'
}], ['path', {
  d: 'm14 7 3 3',
  key: '1r5n42'
}], ['path', {
  d: 'M5 6v4',
  key: 'ilb8ba'
}], ['path', {
  d: 'M19 14v4',
  key: 'blhpug'
}], ['path', {
  d: 'M10 2v2',
  key: '7u0qdc'
}], ['path', {
  d: 'M7 8H3',
  key: 'zfb6yr'
}], ['path', {
  d: 'M21 16h-4',
  key: '1cnmox'
}], ['path', {
  d: 'M11 3H9',
  key: '1obp7u'
}]]);
var Wand2$1 = Wand2;

var Wand = createReactComponent('Wand', [['path', {
  d: 'M15 4V2',
  key: 'z1p9b7'
}], ['path', {
  d: 'M15 16v-2',
  key: 'px0unx'
}], ['path', {
  d: 'M8 9h2',
  key: '1g203m'
}], ['path', {
  d: 'M20 9h2',
  key: '19tzq7'
}], ['path', {
  d: 'M17.8 11.8 19 13',
  key: 'yihg8r'
}], ['path', {
  d: 'M15 9h0',
  key: 'kg5t1u'
}], ['path', {
  d: 'M17.8 6.2 19 5',
  key: 'fd4us0'
}], ['path', {
  d: 'm3 21 9-9',
  key: '1jfql5'
}], ['path', {
  d: 'M12.2 6.2 11 5',
  key: 'i3da3b'
}]]);
var Wand$1 = Wand;

var Watch = createReactComponent('Watch', [['circle', {
  cx: '12',
  cy: '12',
  r: '6',
  key: '1vlfrh'
}], ['polyline', {
  points: '12 10 12 12 13 13',
  key: '19dquz'
}], ['path', {
  d: 'm16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05',
  key: '18k57s'
}], ['path', {
  d: 'm7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05',
  key: '16ny36'
}]]);
var Watch$1 = Watch;

var Waves = createReactComponent('Waves', [['path', {
  d: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
  key: 'knzxuh'
}], ['path', {
  d: 'M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
  key: '2jd2cc'
}], ['path', {
  d: 'M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
  key: 'rd2r6e'
}]]);
var Waves$1 = Waves;

var Webcam = createReactComponent('Webcam', [['circle', {
  cx: '12',
  cy: '10',
  r: '8',
  key: '1gshiw'
}], ['circle', {
  cx: '12',
  cy: '10',
  r: '3',
  key: 'ilqhr7'
}], ['path', {
  d: 'M7 22h10',
  key: '10w4w3'
}], ['path', {
  d: 'M12 22v-4',
  key: '1utk9m'
}]]);
var Webcam$1 = Webcam;

var Webhook = createReactComponent('Webhook', [['path', {
  d: 'M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2',
  key: 'q3hayz'
}], ['path', {
  d: 'm6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06',
  key: '1go1hn'
}], ['path', {
  d: 'm12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8',
  key: 'qlwsc0'
}]]);
var Webhook$1 = Webhook;

var WifiOff = createReactComponent('WifiOff', [['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}], ['path', {
  d: 'M8.5 16.5a5 5 0 0 1 7 0',
  key: 'sej527'
}], ['path', {
  d: 'M2 8.82a15 15 0 0 1 4.17-2.65',
  key: '11utq1'
}], ['path', {
  d: 'M10.66 5c4.01-.36 8.14.9 11.34 3.76',
  key: 'hxefdu'
}], ['path', {
  d: 'M16.85 11.25a10 10 0 0 1 2.22 1.68',
  key: 'q734kn'
}], ['path', {
  d: 'M5 13a10 10 0 0 1 5.24-2.76',
  key: 'piq4yl'
}], ['line', {
  x1: '12',
  y1: '20',
  x2: '12.01',
  y2: '20',
  key: 'wbu7xg'
}]]);
var WifiOff$1 = WifiOff;

var Wifi = createReactComponent('Wifi', [['path', {
  d: 'M5 13a10 10 0 0 1 14 0',
  key: '6v8j51'
}], ['path', {
  d: 'M8.5 16.5a5 5 0 0 1 7 0',
  key: 'sej527'
}], ['path', {
  d: 'M2 8.82a15 15 0 0 1 20 0',
  key: 'dnpr2z'
}], ['line', {
  x1: '12',
  y1: '20',
  x2: '12.01',
  y2: '20',
  key: 'wbu7xg'
}]]);
var Wifi$1 = Wifi;

var Wind = createReactComponent('Wind', [['path', {
  d: 'M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2',
  key: '1k4u03'
}], ['path', {
  d: 'M9.6 4.6A2 2 0 1 1 11 8H2',
  key: 'b7d0fd'
}], ['path', {
  d: 'M12.6 19.4A2 2 0 1 0 14 16H2',
  key: '1p5cb3'
}]]);
var Wind$1 = Wind;

var Wine = createReactComponent('Wine', [['path', {
  d: 'M8 22h8',
  key: 'rmew8v'
}], ['path', {
  d: 'M7 10h10',
  key: '1101jm'
}], ['path', {
  d: 'M12 15v7',
  key: 't2xh3l'
}], ['path', {
  d: 'M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z',
  key: '10ffi3'
}]]);
var Wine$1 = Wine;

var WrapText = createReactComponent('WrapText', [['line', {
  x1: '3',
  y1: '6',
  x2: '21',
  y2: '6',
  key: '1tp2lp'
}], ['path', {
  d: 'M3 12h15a3 3 0 1 1 0 6h-4',
  key: '1cl7v7'
}], ['polyline', {
  points: '16 16 14 18 16 20',
  key: '1jznyi'
}], ['line', {
  x1: '3',
  y1: '18',
  x2: '10',
  y2: '18',
  key: '16bh46'
}]]);
var WrapText$1 = WrapText;

var Wrench = createReactComponent('Wrench', [['path', {
  d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  key: 'cbrjhi'
}]]);
var Wrench$1 = Wrench;

var XCircle = createReactComponent('XCircle', [['circle', {
  cx: '12',
  cy: '12',
  r: '10',
  key: '1mglay'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '9',
  y2: '15',
  key: '19zs77'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '15',
  y2: '15',
  key: '10u9bu'
}]]);
var XCircle$1 = XCircle;

var XOctagon = createReactComponent('XOctagon', [['polygon', {
  points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2',
  key: 'h1p8hx'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '9',
  y2: '15',
  key: '19zs77'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '15',
  y2: '15',
  key: '10u9bu'
}]]);
var XOctagon$1 = XOctagon;

var XSquare = createReactComponent('XSquare', [['rect', {
  x: '3',
  y: '3',
  width: '18',
  height: '18',
  rx: '2',
  ry: '2',
  key: 'maln0c'
}], ['line', {
  x1: '9',
  y1: '9',
  x2: '15',
  y2: '15',
  key: '10u9bu'
}], ['line', {
  x1: '15',
  y1: '9',
  x2: '9',
  y2: '15',
  key: '19zs77'
}]]);
var XSquare$1 = XSquare;

var X = createReactComponent('X', [['line', {
  x1: '18',
  y1: '6',
  x2: '6',
  y2: '18',
  key: '1o5bob'
}], ['line', {
  x1: '6',
  y1: '6',
  x2: '18',
  y2: '18',
  key: 'z4dcbv'
}]]);
var X$1 = X;

var Youtube = createReactComponent('Youtube', [['path', {
  d: 'M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z',
  key: '1nqccg'
}], ['polygon', {
  points: '10 15 15 12 10 9',
  key: '1c7afu'
}]]);
var Youtube$1 = Youtube;

var ZapOff = createReactComponent('ZapOff', [['polyline', {
  points: '12.41 6.75 13 2 10.57 4.92',
  key: '122m05'
}], ['polyline', {
  points: '18.57 12.91 21 10 15.66 10',
  key: '16r43o'
}], ['polyline', {
  points: '8 8 3 14 12 14 11 22 16 16',
  key: 'tmh4bc'
}], ['line', {
  x1: '2',
  y1: '2',
  x2: '22',
  y2: '22',
  key: '1w4vcy'
}]]);
var ZapOff$1 = ZapOff;

var Zap = createReactComponent('Zap', [['polygon', {
  points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2',
  key: '45s27k'
}]]);
var Zap$1 = Zap;

var ZoomIn = createReactComponent('ZoomIn', [['circle', {
  cx: '11',
  cy: '11',
  r: '8',
  key: '4ej97u'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '16.65',
  y2: '16.65',
  key: '1p50m8'
}], ['line', {
  x1: '11',
  y1: '8',
  x2: '11',
  y2: '14',
  key: 'jw7mvq'
}], ['line', {
  x1: '8',
  y1: '11',
  x2: '14',
  y2: '11',
  key: '1nivud'
}]]);
var ZoomIn$1 = ZoomIn;

var ZoomOut = createReactComponent('ZoomOut', [['circle', {
  cx: '11',
  cy: '11',
  r: '8',
  key: '4ej97u'
}], ['line', {
  x1: '21',
  y1: '21',
  x2: '16.65',
  y2: '16.65',
  key: '1p50m8'
}], ['line', {
  x1: '8',
  y1: '11',
  x2: '14',
  y2: '11',
  key: '1nivud'
}]]);
var ZoomOut$1 = ZoomOut;

__webpack_unused_export__ = Accessibility$1;
__webpack_unused_export__ = Activity$1;
__webpack_unused_export__ = AirVent$1;
__webpack_unused_export__ = Airplay$1;
__webpack_unused_export__ = AlarmCheck$1;
__webpack_unused_export__ = AlarmClock$1;
__webpack_unused_export__ = AlarmClockOff$1;
__webpack_unused_export__ = AlarmMinus$1;
__webpack_unused_export__ = AlarmPlus$1;
__webpack_unused_export__ = Album$1;
__webpack_unused_export__ = AlertCircle$1;
__webpack_unused_export__ = AlertOctagon$1;
exports.uyG = AlertTriangle$1;
__webpack_unused_export__ = AlignCenter$1;
__webpack_unused_export__ = AlignCenterHorizontal$1;
__webpack_unused_export__ = AlignCenterVertical$1;
__webpack_unused_export__ = AlignEndHorizontal$1;
__webpack_unused_export__ = AlignEndVertical$1;
__webpack_unused_export__ = AlignHorizontalDistributeCenter$1;
__webpack_unused_export__ = AlignHorizontalDistributeEnd$1;
__webpack_unused_export__ = AlignHorizontalDistributeStart$1;
__webpack_unused_export__ = AlignHorizontalJustifyCenter$1;
__webpack_unused_export__ = AlignHorizontalJustifyEnd$1;
__webpack_unused_export__ = AlignHorizontalJustifyStart$1;
__webpack_unused_export__ = AlignHorizontalSpaceAround$1;
__webpack_unused_export__ = AlignHorizontalSpaceBetween$1;
__webpack_unused_export__ = AlignJustify$1;
exports.NiS = AlignLeft$1;
__webpack_unused_export__ = AlignRight$1;
__webpack_unused_export__ = AlignStartHorizontal$1;
__webpack_unused_export__ = AlignStartVertical$1;
__webpack_unused_export__ = AlignVerticalDistributeCenter$1;
__webpack_unused_export__ = AlignVerticalDistributeEnd$1;
__webpack_unused_export__ = AlignVerticalDistributeStart$1;
__webpack_unused_export__ = AlignVerticalJustifyCenter$1;
__webpack_unused_export__ = AlignVerticalJustifyEnd$1;
__webpack_unused_export__ = AlignVerticalJustifyStart$1;
__webpack_unused_export__ = AlignVerticalSpaceAround$1;
__webpack_unused_export__ = AlignVerticalSpaceBetween$1;
__webpack_unused_export__ = Anchor$1;
__webpack_unused_export__ = Angry$1;
__webpack_unused_export__ = Annoyed$1;
__webpack_unused_export__ = Aperture$1;
__webpack_unused_export__ = Apple$1;
__webpack_unused_export__ = Archive$1;
__webpack_unused_export__ = ArchiveRestore$1;
__webpack_unused_export__ = Armchair$1;
__webpack_unused_export__ = ArrowBigDown$1;
__webpack_unused_export__ = ArrowBigLeft$1;
__webpack_unused_export__ = ArrowBigRight$1;
__webpack_unused_export__ = ArrowBigUp$1;
__webpack_unused_export__ = ArrowDown$1;
__webpack_unused_export__ = ArrowDownCircle$1;
__webpack_unused_export__ = ArrowDownLeft$1;
__webpack_unused_export__ = ArrowDownRight$1;
__webpack_unused_export__ = ArrowLeft$1;
__webpack_unused_export__ = ArrowLeftCircle$1;
__webpack_unused_export__ = ArrowLeftRight$1;
exports.olP = ArrowRight$1;
__webpack_unused_export__ = ArrowRightCircle$1;
__webpack_unused_export__ = ArrowUp$1;
__webpack_unused_export__ = ArrowUpCircle$1;
__webpack_unused_export__ = ArrowUpDown$1;
__webpack_unused_export__ = ArrowUpLeft$1;
__webpack_unused_export__ = ArrowUpRight$1;
__webpack_unused_export__ = Asterisk$1;
__webpack_unused_export__ = AtSign$1;
__webpack_unused_export__ = Award$1;
__webpack_unused_export__ = Axe$1;
__webpack_unused_export__ = Axis3d$1;
__webpack_unused_export__ = Baby$1;
__webpack_unused_export__ = Backpack$1;
__webpack_unused_export__ = BaggageClaim$1;
__webpack_unused_export__ = Banana$1;
__webpack_unused_export__ = Banknote$1;
__webpack_unused_export__ = BarChart$1;
__webpack_unused_export__ = BarChart2$1;
__webpack_unused_export__ = BarChart3$1;
__webpack_unused_export__ = BarChart4$1;
__webpack_unused_export__ = BarChartHorizontal$1;
__webpack_unused_export__ = Baseline$1;
__webpack_unused_export__ = Bath$1;
__webpack_unused_export__ = Battery$1;
__webpack_unused_export__ = BatteryCharging$1;
__webpack_unused_export__ = BatteryFull$1;
__webpack_unused_export__ = BatteryLow$1;
__webpack_unused_export__ = BatteryMedium$1;
__webpack_unused_export__ = Beaker$1;
__webpack_unused_export__ = Bed$1;
__webpack_unused_export__ = BedDouble$1;
__webpack_unused_export__ = BedSingle$1;
__webpack_unused_export__ = Beer$1;
__webpack_unused_export__ = Bell$1;
__webpack_unused_export__ = BellMinus$1;
__webpack_unused_export__ = BellOff$1;
__webpack_unused_export__ = BellPlus$1;
__webpack_unused_export__ = BellRing$1;
__webpack_unused_export__ = Bike$1;
__webpack_unused_export__ = Binary$1;
__webpack_unused_export__ = Bitcoin$1;
__webpack_unused_export__ = Bluetooth$1;
__webpack_unused_export__ = BluetoothConnected$1;
__webpack_unused_export__ = BluetoothOff$1;
__webpack_unused_export__ = BluetoothSearching$1;
__webpack_unused_export__ = Bold$1;
__webpack_unused_export__ = Bomb$1;
__webpack_unused_export__ = Bone$1;
__webpack_unused_export__ = Book$1;
__webpack_unused_export__ = BookOpen$1;
__webpack_unused_export__ = BookOpenCheck$1;
__webpack_unused_export__ = Bookmark$1;
__webpack_unused_export__ = BookmarkMinus$1;
__webpack_unused_export__ = BookmarkPlus$1;
__webpack_unused_export__ = Bot$1;
__webpack_unused_export__ = Box$1;
__webpack_unused_export__ = BoxSelect$1;
__webpack_unused_export__ = Boxes$1;
__webpack_unused_export__ = Briefcase$1;
__webpack_unused_export__ = Brush$1;
__webpack_unused_export__ = Bug$1;
__webpack_unused_export__ = Building$1;
__webpack_unused_export__ = Building2$1;
__webpack_unused_export__ = Bus$1;
__webpack_unused_export__ = Cake$1;
__webpack_unused_export__ = Calculator$1;
__webpack_unused_export__ = Calendar$1;
__webpack_unused_export__ = CalendarCheck$1;
__webpack_unused_export__ = CalendarCheck2$1;
__webpack_unused_export__ = CalendarClock$1;
__webpack_unused_export__ = CalendarDays$1;
__webpack_unused_export__ = CalendarHeart$1;
__webpack_unused_export__ = CalendarMinus$1;
__webpack_unused_export__ = CalendarOff$1;
__webpack_unused_export__ = CalendarPlus$1;
__webpack_unused_export__ = CalendarRange$1;
__webpack_unused_export__ = CalendarSearch$1;
__webpack_unused_export__ = CalendarX$1;
__webpack_unused_export__ = CalendarX2$1;
__webpack_unused_export__ = Camera$1;
__webpack_unused_export__ = CameraOff$1;
__webpack_unused_export__ = Car$1;
__webpack_unused_export__ = Carrot$1;
__webpack_unused_export__ = Cast$1;
exports.JrY = Check$1;
__webpack_unused_export__ = CheckCircle$1;
__webpack_unused_export__ = CheckCircle2$1;
__webpack_unused_export__ = CheckSquare$1;
__webpack_unused_export__ = ChefHat$1;
__webpack_unused_export__ = Cherry$1;
exports._ME = ChevronDown$1;
__webpack_unused_export__ = ChevronFirst$1;
__webpack_unused_export__ = ChevronLast$1;
exports.s$$ = ChevronLeft$1;
exports._Qn = ChevronRight$1;
__webpack_unused_export__ = ChevronUp$1;
__webpack_unused_export__ = ChevronsDown$1;
__webpack_unused_export__ = ChevronsDownUp$1;
__webpack_unused_export__ = ChevronsLeft$1;
__webpack_unused_export__ = ChevronsLeftRight$1;
__webpack_unused_export__ = ChevronsRight$1;
__webpack_unused_export__ = ChevronsRightLeft$1;
__webpack_unused_export__ = ChevronsUp$1;
__webpack_unused_export__ = ChevronsUpDown$1;
__webpack_unused_export__ = Chrome$1;
__webpack_unused_export__ = Cigarette$1;
__webpack_unused_export__ = CigaretteOff$1;
exports.Cdc = Circle$1;
__webpack_unused_export__ = CircleDot$1;
__webpack_unused_export__ = CircleEllipsis$1;
__webpack_unused_export__ = CircleSlashed$1;
__webpack_unused_export__ = Citrus$1;
__webpack_unused_export__ = Clapperboard$1;
__webpack_unused_export__ = Clipboard$1;
__webpack_unused_export__ = ClipboardCheck$1;
__webpack_unused_export__ = ClipboardCopy$1;
__webpack_unused_export__ = ClipboardEdit$1;
__webpack_unused_export__ = ClipboardList$1;
__webpack_unused_export__ = ClipboardSignature$1;
__webpack_unused_export__ = ClipboardType$1;
__webpack_unused_export__ = ClipboardX$1;
__webpack_unused_export__ = Clock$1;
__webpack_unused_export__ = Clock1$1;
__webpack_unused_export__ = Clock10$1;
__webpack_unused_export__ = Clock11$1;
__webpack_unused_export__ = Clock12$1;
__webpack_unused_export__ = Clock2$1;
__webpack_unused_export__ = Clock3$1;
__webpack_unused_export__ = Clock4$1;
__webpack_unused_export__ = Clock5$1;
__webpack_unused_export__ = Clock6$1;
__webpack_unused_export__ = Clock7$1;
__webpack_unused_export__ = Clock8$1;
__webpack_unused_export__ = Clock9$1;
__webpack_unused_export__ = Cloud$1;
__webpack_unused_export__ = CloudCog$1;
__webpack_unused_export__ = CloudDrizzle$1;
__webpack_unused_export__ = CloudFog$1;
__webpack_unused_export__ = CloudHail$1;
__webpack_unused_export__ = CloudLightning$1;
__webpack_unused_export__ = CloudMoon$1;
__webpack_unused_export__ = CloudMoonRain$1;
__webpack_unused_export__ = CloudOff$1;
__webpack_unused_export__ = CloudRain$1;
__webpack_unused_export__ = CloudRainWind$1;
__webpack_unused_export__ = CloudSnow$1;
__webpack_unused_export__ = CloudSun$1;
__webpack_unused_export__ = CloudSunRain$1;
__webpack_unused_export__ = Cloudy$1;
__webpack_unused_export__ = Clover$1;
__webpack_unused_export__ = Code$1;
__webpack_unused_export__ = Code2$1;
__webpack_unused_export__ = Codepen$1;
__webpack_unused_export__ = Codesandbox$1;
__webpack_unused_export__ = Coffee$1;
__webpack_unused_export__ = Cog$1;
__webpack_unused_export__ = Coins$1;
__webpack_unused_export__ = Columns$1;
exports.mYg = Command$1;
__webpack_unused_export__ = Compass$1;
__webpack_unused_export__ = Component$1;
__webpack_unused_export__ = ConciergeBell$1;
__webpack_unused_export__ = Contact$1;
__webpack_unused_export__ = Contrast$1;
__webpack_unused_export__ = Cookie$1;
__webpack_unused_export__ = Copy$1;
__webpack_unused_export__ = Copyleft$1;
__webpack_unused_export__ = Copyright$1;
__webpack_unused_export__ = CornerDownLeft$1;
__webpack_unused_export__ = CornerDownRight$1;
__webpack_unused_export__ = CornerLeftDown$1;
__webpack_unused_export__ = CornerLeftUp$1;
__webpack_unused_export__ = CornerRightDown$1;
__webpack_unused_export__ = CornerRightUp$1;
__webpack_unused_export__ = CornerUpLeft$1;
__webpack_unused_export__ = CornerUpRight$1;
__webpack_unused_export__ = Cpu$1;
exports.aBT = CreditCard$1;
__webpack_unused_export__ = Croissant$1;
__webpack_unused_export__ = Crop$1;
__webpack_unused_export__ = Cross$1;
__webpack_unused_export__ = Crosshair$1;
__webpack_unused_export__ = Crown$1;
__webpack_unused_export__ = CupSoda$1;
__webpack_unused_export__ = CurlyBraces$1;
__webpack_unused_export__ = Currency$1;
__webpack_unused_export__ = Database$1;
__webpack_unused_export__ = Delete$1;
__webpack_unused_export__ = Diamond$1;
__webpack_unused_export__ = Dice1$1;
__webpack_unused_export__ = Dice2$1;
__webpack_unused_export__ = Dice3$1;
__webpack_unused_export__ = Dice4$1;
__webpack_unused_export__ = Dice5$1;
__webpack_unused_export__ = Dice6$1;
__webpack_unused_export__ = Dices$1;
__webpack_unused_export__ = Diff$1;
__webpack_unused_export__ = Disc$1;
__webpack_unused_export__ = Divide$1;
__webpack_unused_export__ = DivideCircle$1;
__webpack_unused_export__ = DivideSquare$1;
__webpack_unused_export__ = DollarSign$1;
__webpack_unused_export__ = Download$1;
__webpack_unused_export__ = DownloadCloud$1;
__webpack_unused_export__ = Dribbble$1;
__webpack_unused_export__ = Droplet$1;
__webpack_unused_export__ = Droplets$1;
__webpack_unused_export__ = Drumstick$1;
__webpack_unused_export__ = Ear$1;
__webpack_unused_export__ = EarOff$1;
__webpack_unused_export__ = Edit$1;
__webpack_unused_export__ = Edit2$1;
__webpack_unused_export__ = Edit3$1;
__webpack_unused_export__ = Egg$1;
__webpack_unused_export__ = EggFried$1;
__webpack_unused_export__ = Equal$1;
__webpack_unused_export__ = EqualNot$1;
__webpack_unused_export__ = Eraser$1;
__webpack_unused_export__ = Euro$1;
__webpack_unused_export__ = Expand$1;
__webpack_unused_export__ = ExternalLink$1;
exports.bAj = Eye$1;
exports._jl = EyeOff$1;
__webpack_unused_export__ = Facebook$1;
__webpack_unused_export__ = Factory$1;
__webpack_unused_export__ = Fan$1;
__webpack_unused_export__ = FastForward$1;
__webpack_unused_export__ = Feather$1;
__webpack_unused_export__ = Figma$1;
exports.$BE = File$1;
__webpack_unused_export__ = FileArchive$1;
__webpack_unused_export__ = FileAudio$1;
__webpack_unused_export__ = FileAudio2$1;
__webpack_unused_export__ = FileAxis3d$1;
__webpack_unused_export__ = FileBadge$1;
__webpack_unused_export__ = FileBadge2$1;
__webpack_unused_export__ = FileBarChart$1;
__webpack_unused_export__ = FileBarChart2$1;
__webpack_unused_export__ = FileBox$1;
__webpack_unused_export__ = FileCheck$1;
__webpack_unused_export__ = FileCheck2$1;
__webpack_unused_export__ = FileClock$1;
__webpack_unused_export__ = FileCode$1;
__webpack_unused_export__ = FileCog$1;
__webpack_unused_export__ = FileCog2$1;
__webpack_unused_export__ = FileDiff$1;
__webpack_unused_export__ = FileDigit$1;
__webpack_unused_export__ = FileDown$1;
__webpack_unused_export__ = FileEdit$1;
__webpack_unused_export__ = FileHeart$1;
__webpack_unused_export__ = FileImage$1;
__webpack_unused_export__ = FileInput$1;
__webpack_unused_export__ = FileJson$1;
__webpack_unused_export__ = FileJson2$1;
__webpack_unused_export__ = FileKey$1;
__webpack_unused_export__ = FileKey2$1;
__webpack_unused_export__ = FileLineChart$1;
__webpack_unused_export__ = FileLock$1;
__webpack_unused_export__ = FileLock2$1;
__webpack_unused_export__ = FileMinus$1;
__webpack_unused_export__ = FileMinus2$1;
__webpack_unused_export__ = FileOutput$1;
__webpack_unused_export__ = FilePieChart$1;
__webpack_unused_export__ = FilePlus$1;
__webpack_unused_export__ = FilePlus2$1;
__webpack_unused_export__ = FileQuestion$1;
__webpack_unused_export__ = FileScan$1;
__webpack_unused_export__ = FileSearch$1;
__webpack_unused_export__ = FileSearch2$1;
__webpack_unused_export__ = FileSignature$1;
__webpack_unused_export__ = FileSpreadsheet$1;
__webpack_unused_export__ = FileSymlink$1;
__webpack_unused_export__ = FileTerminal$1;
exports.acj = FileText$1;
__webpack_unused_export__ = FileType$1;
__webpack_unused_export__ = FileType2$1;
__webpack_unused_export__ = FileUp$1;
__webpack_unused_export__ = FileVideo$1;
__webpack_unused_export__ = FileVideo2$1;
__webpack_unused_export__ = FileVolume$1;
__webpack_unused_export__ = FileVolume2$1;
__webpack_unused_export__ = FileWarning$1;
__webpack_unused_export__ = FileX$1;
__webpack_unused_export__ = FileX2$1;
__webpack_unused_export__ = Files$1;
__webpack_unused_export__ = Film$1;
__webpack_unused_export__ = Filter$1;
__webpack_unused_export__ = Fingerprint$1;
__webpack_unused_export__ = Flag$1;
__webpack_unused_export__ = FlagOff$1;
__webpack_unused_export__ = FlagTriangleLeft$1;
__webpack_unused_export__ = FlagTriangleRight$1;
__webpack_unused_export__ = Flame$1;
__webpack_unused_export__ = Flashlight$1;
__webpack_unused_export__ = FlashlightOff$1;
__webpack_unused_export__ = FlaskConical$1;
__webpack_unused_export__ = FlaskRound$1;
__webpack_unused_export__ = FlipHorizontal$1;
__webpack_unused_export__ = FlipHorizontal2$1;
__webpack_unused_export__ = FlipVertical$1;
__webpack_unused_export__ = FlipVertical2$1;
__webpack_unused_export__ = Flower$1;
__webpack_unused_export__ = Flower2$1;
__webpack_unused_export__ = Focus$1;
__webpack_unused_export__ = Folder$1;
__webpack_unused_export__ = FolderArchive$1;
__webpack_unused_export__ = FolderCheck$1;
__webpack_unused_export__ = FolderClock$1;
__webpack_unused_export__ = FolderClosed$1;
__webpack_unused_export__ = FolderCog$1;
__webpack_unused_export__ = FolderCog2$1;
__webpack_unused_export__ = FolderDown$1;
__webpack_unused_export__ = FolderEdit$1;
__webpack_unused_export__ = FolderHeart$1;
__webpack_unused_export__ = FolderInput$1;
__webpack_unused_export__ = FolderKey$1;
__webpack_unused_export__ = FolderLock$1;
__webpack_unused_export__ = FolderMinus$1;
__webpack_unused_export__ = FolderOpen$1;
__webpack_unused_export__ = FolderOutput$1;
__webpack_unused_export__ = FolderPlus$1;
__webpack_unused_export__ = FolderSearch$1;
__webpack_unused_export__ = FolderSearch2$1;
__webpack_unused_export__ = FolderSymlink$1;
__webpack_unused_export__ = FolderTree$1;
__webpack_unused_export__ = FolderUp$1;
__webpack_unused_export__ = FolderX$1;
__webpack_unused_export__ = Folders$1;
__webpack_unused_export__ = FormInput$1;
__webpack_unused_export__ = Forward$1;
__webpack_unused_export__ = Frame$1;
__webpack_unused_export__ = Framer$1;
__webpack_unused_export__ = Frown$1;
__webpack_unused_export__ = Fuel$1;
__webpack_unused_export__ = FunctionSquare$1;
__webpack_unused_export__ = Gamepad$1;
__webpack_unused_export__ = Gamepad2$1;
__webpack_unused_export__ = Gauge$1;
__webpack_unused_export__ = Gavel$1;
__webpack_unused_export__ = Gem$1;
__webpack_unused_export__ = Ghost$1;
__webpack_unused_export__ = Gift$1;
__webpack_unused_export__ = GitBranch$1;
__webpack_unused_export__ = GitBranchPlus$1;
__webpack_unused_export__ = GitCommit$1;
__webpack_unused_export__ = GitCompare$1;
__webpack_unused_export__ = GitFork$1;
__webpack_unused_export__ = GitMerge$1;
__webpack_unused_export__ = GitPullRequest$1;
__webpack_unused_export__ = GitPullRequestClosed$1;
__webpack_unused_export__ = GitPullRequestDraft$1;
__webpack_unused_export__ = Github$1;
__webpack_unused_export__ = Gitlab$1;
__webpack_unused_export__ = GlassWater$1;
__webpack_unused_export__ = Glasses$1;
__webpack_unused_export__ = Globe$1;
__webpack_unused_export__ = Globe2$1;
__webpack_unused_export__ = Grab$1;
exports.XHo = GraduationCap$1;
__webpack_unused_export__ = Grape$1;
__webpack_unused_export__ = Grid$1;
__webpack_unused_export__ = GripHorizontal$1;
__webpack_unused_export__ = GripVertical$1;
__webpack_unused_export__ = Hammer$1;
__webpack_unused_export__ = Hand$1;
__webpack_unused_export__ = HandMetal$1;
__webpack_unused_export__ = HardDrive$1;
__webpack_unused_export__ = HardHat$1;
__webpack_unused_export__ = Hash$1;
__webpack_unused_export__ = Haze$1;
__webpack_unused_export__ = Headphones$1;
__webpack_unused_export__ = Heart$1;
__webpack_unused_export__ = HeartCrack$1;
__webpack_unused_export__ = HeartHandshake$1;
__webpack_unused_export__ = HeartOff$1;
__webpack_unused_export__ = HeartPulse$1;
exports.j$F = HelpCircle$1;
__webpack_unused_export__ = Hexagon$1;
__webpack_unused_export__ = Highlighter$1;
__webpack_unused_export__ = History$1;
__webpack_unused_export__ = Home$1;
__webpack_unused_export__ = Hourglass$1;
__webpack_unused_export__ = IceCream$1;
exports.Eep = Image$1;
__webpack_unused_export__ = ImageMinus$1;
__webpack_unused_export__ = ImageOff$1;
__webpack_unused_export__ = ImagePlus$1;
__webpack_unused_export__ = Import$1;
__webpack_unused_export__ = Inbox$1;
__webpack_unused_export__ = Indent$1;
__webpack_unused_export__ = IndianRupee$1;
__webpack_unused_export__ = Infinity$1;
__webpack_unused_export__ = Info$1;
__webpack_unused_export__ = Inspect$1;
__webpack_unused_export__ = Instagram$1;
__webpack_unused_export__ = Italic$1;
__webpack_unused_export__ = JapaneseYen$1;
__webpack_unused_export__ = Joystick$1;
__webpack_unused_export__ = Key$1;
__webpack_unused_export__ = Keyboard$1;
__webpack_unused_export__ = Lamp$1;
__webpack_unused_export__ = LampCeiling$1;
__webpack_unused_export__ = LampDesk$1;
__webpack_unused_export__ = LampFloor$1;
__webpack_unused_export__ = LampWallDown$1;
__webpack_unused_export__ = LampWallUp$1;
__webpack_unused_export__ = Landmark$1;
__webpack_unused_export__ = Languages$1;
exports.Izo = Laptop$1;
__webpack_unused_export__ = Laptop2$1;
__webpack_unused_export__ = Lasso$1;
__webpack_unused_export__ = LassoSelect$1;
__webpack_unused_export__ = Laugh$1;
__webpack_unused_export__ = Layers$1;
__webpack_unused_export__ = Layout$1;
__webpack_unused_export__ = LayoutDashboard$1;
__webpack_unused_export__ = LayoutGrid$1;
__webpack_unused_export__ = LayoutList$1;
__webpack_unused_export__ = LayoutTemplate$1;
__webpack_unused_export__ = Leaf$1;
__webpack_unused_export__ = Library$1;
__webpack_unused_export__ = LifeBuoy$1;
__webpack_unused_export__ = Lightbulb$1;
__webpack_unused_export__ = LightbulbOff$1;
__webpack_unused_export__ = LineChart$1;
__webpack_unused_export__ = Link$1;
__webpack_unused_export__ = Link2$1;
__webpack_unused_export__ = Link2Off$1;
__webpack_unused_export__ = Linkedin$1;
__webpack_unused_export__ = List$1;
__webpack_unused_export__ = ListChecks$1;
__webpack_unused_export__ = ListEnd$1;
__webpack_unused_export__ = ListMinus$1;
__webpack_unused_export__ = ListMusic$1;
__webpack_unused_export__ = ListOrdered$1;
__webpack_unused_export__ = ListPlus$1;
__webpack_unused_export__ = ListStart$1;
__webpack_unused_export__ = ListVideo$1;
__webpack_unused_export__ = ListX$1;
__webpack_unused_export__ = Loader$1;
exports.zM5 = Loader2$1;
__webpack_unused_export__ = Locate$1;
__webpack_unused_export__ = LocateFixed$1;
__webpack_unused_export__ = LocateOff$1;
__webpack_unused_export__ = Lock$1;
__webpack_unused_export__ = LogIn$1;
__webpack_unused_export__ = LogOut$1;
__webpack_unused_export__ = Luggage$1;
__webpack_unused_export__ = Magnet$1;
__webpack_unused_export__ = Mail$1;
__webpack_unused_export__ = MailCheck$1;
__webpack_unused_export__ = MailMinus$1;
__webpack_unused_export__ = MailOpen$1;
__webpack_unused_export__ = MailPlus$1;
__webpack_unused_export__ = MailQuestion$1;
__webpack_unused_export__ = MailSearch$1;
__webpack_unused_export__ = MailWarning$1;
__webpack_unused_export__ = MailX$1;
__webpack_unused_export__ = Mails$1;
__webpack_unused_export__ = Map$1;
__webpack_unused_export__ = MapPin$1;
__webpack_unused_export__ = MapPinOff$1;
__webpack_unused_export__ = Martini$1;
__webpack_unused_export__ = Maximize$1;
__webpack_unused_export__ = Maximize2$1;
__webpack_unused_export__ = Medal$1;
__webpack_unused_export__ = Megaphone$1;
__webpack_unused_export__ = MegaphoneOff$1;
__webpack_unused_export__ = Meh$1;
__webpack_unused_export__ = Menu$1;
__webpack_unused_export__ = MessageCircle$1;
__webpack_unused_export__ = MessageSquare$1;
__webpack_unused_export__ = Mic$1;
__webpack_unused_export__ = Mic2$1;
__webpack_unused_export__ = MicOff$1;
__webpack_unused_export__ = Microscope$1;
__webpack_unused_export__ = Microwave$1;
__webpack_unused_export__ = Milestone$1;
__webpack_unused_export__ = Minimize$1;
__webpack_unused_export__ = Minimize2$1;
__webpack_unused_export__ = Minus$1;
__webpack_unused_export__ = MinusCircle$1;
__webpack_unused_export__ = MinusSquare$1;
__webpack_unused_export__ = Monitor$1;
__webpack_unused_export__ = MonitorOff$1;
__webpack_unused_export__ = MonitorSpeaker$1;
exports.JFe = Moon$1;
__webpack_unused_export__ = MoreHorizontal$1;
exports.hlC = MoreVertical$1;
__webpack_unused_export__ = Mountain$1;
__webpack_unused_export__ = MountainSnow$1;
__webpack_unused_export__ = Mouse$1;
__webpack_unused_export__ = MousePointer$1;
__webpack_unused_export__ = MousePointer2$1;
__webpack_unused_export__ = MousePointerClick$1;
__webpack_unused_export__ = Move$1;
__webpack_unused_export__ = Move3d$1;
__webpack_unused_export__ = MoveDiagonal$1;
__webpack_unused_export__ = MoveDiagonal2$1;
__webpack_unused_export__ = MoveHorizontal$1;
__webpack_unused_export__ = MoveVertical$1;
__webpack_unused_export__ = Music$1;
__webpack_unused_export__ = Music2$1;
__webpack_unused_export__ = Music3$1;
__webpack_unused_export__ = Music4$1;
__webpack_unused_export__ = Navigation$1;
__webpack_unused_export__ = Navigation2$1;
__webpack_unused_export__ = Navigation2Off$1;
__webpack_unused_export__ = NavigationOff$1;
__webpack_unused_export__ = Network$1;
__webpack_unused_export__ = Newspaper$1;
__webpack_unused_export__ = Octagon$1;
__webpack_unused_export__ = Option$1;
__webpack_unused_export__ = Outdent$1;
__webpack_unused_export__ = Package$1;
__webpack_unused_export__ = Package2$1;
__webpack_unused_export__ = PackageCheck$1;
__webpack_unused_export__ = PackageMinus$1;
__webpack_unused_export__ = PackageOpen$1;
__webpack_unused_export__ = PackagePlus$1;
__webpack_unused_export__ = PackageSearch$1;
__webpack_unused_export__ = PackageX$1;
__webpack_unused_export__ = PaintBucket$1;
__webpack_unused_export__ = Paintbrush$1;
__webpack_unused_export__ = Paintbrush2$1;
__webpack_unused_export__ = Palette$1;
__webpack_unused_export__ = Palmtree$1;
__webpack_unused_export__ = Paperclip$1;
__webpack_unused_export__ = PartyPopper$1;
__webpack_unused_export__ = Pause$1;
__webpack_unused_export__ = PauseCircle$1;
__webpack_unused_export__ = PauseOctagon$1;
__webpack_unused_export__ = PenTool$1;
__webpack_unused_export__ = Pencil$1;
__webpack_unused_export__ = Percent$1;
__webpack_unused_export__ = PersonStanding$1;
__webpack_unused_export__ = Phone$1;
__webpack_unused_export__ = PhoneCall$1;
__webpack_unused_export__ = PhoneForwarded$1;
__webpack_unused_export__ = PhoneIncoming$1;
__webpack_unused_export__ = PhoneMissed$1;
__webpack_unused_export__ = PhoneOff$1;
__webpack_unused_export__ = PhoneOutgoing$1;
__webpack_unused_export__ = PieChart$1;
__webpack_unused_export__ = PiggyBank$1;
__webpack_unused_export__ = Pin$1;
__webpack_unused_export__ = PinOff$1;
__webpack_unused_export__ = Pipette$1;
exports.k4s = Pizza$1;
__webpack_unused_export__ = Plane$1;
__webpack_unused_export__ = Play$1;
__webpack_unused_export__ = PlayCircle$1;
__webpack_unused_export__ = Plug$1;
__webpack_unused_export__ = Plug2$1;
__webpack_unused_export__ = PlugZap$1;
exports.v37 = Plus$1;
__webpack_unused_export__ = PlusCircle$1;
__webpack_unused_export__ = PlusSquare$1;
__webpack_unused_export__ = Pocket$1;
__webpack_unused_export__ = Podcast$1;
__webpack_unused_export__ = Pointer$1;
__webpack_unused_export__ = PoundSterling$1;
__webpack_unused_export__ = Power$1;
__webpack_unused_export__ = PowerOff$1;
__webpack_unused_export__ = Printer$1;
__webpack_unused_export__ = Puzzle$1;
__webpack_unused_export__ = QrCode$1;
__webpack_unused_export__ = Quote$1;
__webpack_unused_export__ = Radio$1;
__webpack_unused_export__ = RadioReceiver$1;
__webpack_unused_export__ = RectangleHorizontal$1;
__webpack_unused_export__ = RectangleVertical$1;
__webpack_unused_export__ = Recycle$1;
__webpack_unused_export__ = Redo$1;
__webpack_unused_export__ = Redo2$1;
__webpack_unused_export__ = RefreshCcw$1;
__webpack_unused_export__ = RefreshCw$1;
__webpack_unused_export__ = Refrigerator$1;
__webpack_unused_export__ = Regex$1;
__webpack_unused_export__ = Repeat$1;
__webpack_unused_export__ = Repeat1$1;
__webpack_unused_export__ = Reply$1;
__webpack_unused_export__ = ReplyAll$1;
__webpack_unused_export__ = Rewind$1;
__webpack_unused_export__ = Rocket$1;
__webpack_unused_export__ = RockingChair$1;
__webpack_unused_export__ = Rotate3d$1;
__webpack_unused_export__ = RotateCcw$1;
__webpack_unused_export__ = RotateCw$1;
__webpack_unused_export__ = Rss$1;
__webpack_unused_export__ = Ruler$1;
__webpack_unused_export__ = RussianRuble$1;
__webpack_unused_export__ = Sailboat$1;
__webpack_unused_export__ = Save$1;
__webpack_unused_export__ = Scale$1;
__webpack_unused_export__ = Scale3d$1;
__webpack_unused_export__ = Scaling$1;
__webpack_unused_export__ = Scan$1;
__webpack_unused_export__ = ScanFace$1;
__webpack_unused_export__ = ScanLine$1;
__webpack_unused_export__ = Scissors$1;
__webpack_unused_export__ = ScreenShare$1;
__webpack_unused_export__ = ScreenShareOff$1;
__webpack_unused_export__ = Scroll$1;
__webpack_unused_export__ = Search$1;
__webpack_unused_export__ = Send$1;
__webpack_unused_export__ = SeparatorHorizontal$1;
__webpack_unused_export__ = SeparatorVertical$1;
__webpack_unused_export__ = Server$1;
__webpack_unused_export__ = ServerCog$1;
__webpack_unused_export__ = ServerCrash$1;
__webpack_unused_export__ = ServerOff$1;
exports.Zrf = Settings$1;
__webpack_unused_export__ = Settings2$1;
__webpack_unused_export__ = Share$1;
__webpack_unused_export__ = Share2$1;
__webpack_unused_export__ = Sheet$1;
__webpack_unused_export__ = Shield$1;
__webpack_unused_export__ = ShieldAlert$1;
__webpack_unused_export__ = ShieldCheck$1;
__webpack_unused_export__ = ShieldClose$1;
__webpack_unused_export__ = ShieldOff$1;
__webpack_unused_export__ = Shirt$1;
__webpack_unused_export__ = ShoppingBag$1;
__webpack_unused_export__ = ShoppingCart$1;
__webpack_unused_export__ = Shovel$1;
__webpack_unused_export__ = ShowerHead$1;
__webpack_unused_export__ = Shrink$1;
__webpack_unused_export__ = Shrub$1;
__webpack_unused_export__ = Shuffle$1;
__webpack_unused_export__ = Sidebar$1;
__webpack_unused_export__ = SidebarClose$1;
__webpack_unused_export__ = SidebarOpen$1;
__webpack_unused_export__ = Sigma$1;
__webpack_unused_export__ = Signal$1;
__webpack_unused_export__ = SignalHigh$1;
__webpack_unused_export__ = SignalLow$1;
__webpack_unused_export__ = SignalMedium$1;
__webpack_unused_export__ = SignalZero$1;
__webpack_unused_export__ = Siren$1;
__webpack_unused_export__ = SkipBack$1;
__webpack_unused_export__ = SkipForward$1;
__webpack_unused_export__ = Skull$1;
__webpack_unused_export__ = Slack$1;
__webpack_unused_export__ = Slash$1;
__webpack_unused_export__ = Slice$1;
__webpack_unused_export__ = Sliders$1;
__webpack_unused_export__ = SlidersHorizontal$1;
__webpack_unused_export__ = Smartphone$1;
__webpack_unused_export__ = SmartphoneCharging$1;
__webpack_unused_export__ = Smile$1;
__webpack_unused_export__ = SmilePlus$1;
__webpack_unused_export__ = Snowflake$1;
__webpack_unused_export__ = Sofa$1;
__webpack_unused_export__ = SortAsc$1;
__webpack_unused_export__ = SortDesc$1;
__webpack_unused_export__ = Speaker$1;
__webpack_unused_export__ = Sprout$1;
__webpack_unused_export__ = Square$1;
__webpack_unused_export__ = Star$1;
__webpack_unused_export__ = StarHalf$1;
__webpack_unused_export__ = StarOff$1;
__webpack_unused_export__ = Stethoscope$1;
__webpack_unused_export__ = Sticker$1;
__webpack_unused_export__ = StickyNote$1;
__webpack_unused_export__ = StopCircle$1;
__webpack_unused_export__ = StretchHorizontal$1;
__webpack_unused_export__ = StretchVertical$1;
__webpack_unused_export__ = Strikethrough$1;
__webpack_unused_export__ = Subscript$1;
exports.kOA = Sun$1;
__webpack_unused_export__ = SunDim$1;
__webpack_unused_export__ = SunMedium$1;
__webpack_unused_export__ = SunMoon$1;
__webpack_unused_export__ = SunSnow$1;
__webpack_unused_export__ = Sunrise$1;
__webpack_unused_export__ = Sunset$1;
__webpack_unused_export__ = Superscript$1;
__webpack_unused_export__ = SwissFranc$1;
__webpack_unused_export__ = SwitchCamera$1;
__webpack_unused_export__ = Sword$1;
__webpack_unused_export__ = Swords$1;
__webpack_unused_export__ = Syringe$1;
__webpack_unused_export__ = Table$1;
__webpack_unused_export__ = Table2$1;
__webpack_unused_export__ = Tablet$1;
__webpack_unused_export__ = Tag$1;
__webpack_unused_export__ = Tags$1;
__webpack_unused_export__ = Target$1;
__webpack_unused_export__ = Tent$1;
__webpack_unused_export__ = Terminal$1;
__webpack_unused_export__ = TerminalSquare$1;
__webpack_unused_export__ = TextCursor$1;
__webpack_unused_export__ = TextCursorInput$1;
__webpack_unused_export__ = Thermometer$1;
__webpack_unused_export__ = ThermometerSnowflake$1;
__webpack_unused_export__ = ThermometerSun$1;
__webpack_unused_export__ = ThumbsDown$1;
__webpack_unused_export__ = ThumbsUp$1;
__webpack_unused_export__ = Ticket$1;
__webpack_unused_export__ = Timer$1;
__webpack_unused_export__ = TimerOff$1;
__webpack_unused_export__ = TimerReset$1;
__webpack_unused_export__ = ToggleLeft$1;
__webpack_unused_export__ = ToggleRight$1;
__webpack_unused_export__ = Tornado$1;
__webpack_unused_export__ = ToyBrick$1;
__webpack_unused_export__ = Train$1;
exports.rFk = Trash$1;
__webpack_unused_export__ = Trash2$1;
__webpack_unused_export__ = TreeDeciduous$1;
__webpack_unused_export__ = TreePine$1;
__webpack_unused_export__ = Trees$1;
__webpack_unused_export__ = Trello$1;
__webpack_unused_export__ = TrendingDown$1;
__webpack_unused_export__ = TrendingUp$1;
__webpack_unused_export__ = Triangle$1;
__webpack_unused_export__ = Trophy$1;
__webpack_unused_export__ = Truck$1;
__webpack_unused_export__ = Tv$1;
__webpack_unused_export__ = Tv2$1;
__webpack_unused_export__ = Twitch$1;
exports.tLe = Twitter$1;
__webpack_unused_export__ = Type$1;
__webpack_unused_export__ = Umbrella$1;
__webpack_unused_export__ = Underline$1;
__webpack_unused_export__ = Undo$1;
__webpack_unused_export__ = Undo2$1;
__webpack_unused_export__ = Unlink$1;
__webpack_unused_export__ = Unlink2$1;
__webpack_unused_export__ = Unlock$1;
__webpack_unused_export__ = Upload$1;
__webpack_unused_export__ = UploadCloud$1;
__webpack_unused_export__ = Usb$1;
exports.n5m = User$1;
__webpack_unused_export__ = UserCheck$1;
__webpack_unused_export__ = UserCog$1;
__webpack_unused_export__ = UserMinus$1;
__webpack_unused_export__ = UserPlus$1;
__webpack_unused_export__ = UserX$1;
__webpack_unused_export__ = Users$1;
__webpack_unused_export__ = Utensils$1;
__webpack_unused_export__ = UtensilsCrossed$1;
__webpack_unused_export__ = VenetianMask$1;
__webpack_unused_export__ = Verified$1;
__webpack_unused_export__ = Vibrate$1;
__webpack_unused_export__ = VibrateOff$1;
__webpack_unused_export__ = Video$1;
__webpack_unused_export__ = VideoOff$1;
__webpack_unused_export__ = View$1;
__webpack_unused_export__ = Voicemail$1;
__webpack_unused_export__ = Volume$1;
__webpack_unused_export__ = Volume1$1;
__webpack_unused_export__ = Volume2$1;
__webpack_unused_export__ = VolumeX$1;
__webpack_unused_export__ = Wallet$1;
__webpack_unused_export__ = Wand$1;
__webpack_unused_export__ = Wand2$1;
__webpack_unused_export__ = Watch$1;
__webpack_unused_export__ = Waves$1;
__webpack_unused_export__ = Webcam$1;
__webpack_unused_export__ = Webhook$1;
__webpack_unused_export__ = Wifi$1;
__webpack_unused_export__ = WifiOff$1;
__webpack_unused_export__ = Wind$1;
__webpack_unused_export__ = Wine$1;
__webpack_unused_export__ = WrapText$1;
__webpack_unused_export__ = Wrench$1;
exports.X = X$1;
__webpack_unused_export__ = XCircle$1;
__webpack_unused_export__ = XOctagon$1;
__webpack_unused_export__ = XSquare$1;
__webpack_unused_export__ = Youtube$1;
__webpack_unused_export__ = Zap$1;
__webpack_unused_export__ = ZapOff$1;
__webpack_unused_export__ = ZoomIn$1;
__webpack_unused_export__ = ZoomOut$1;
__webpack_unused_export__ = createReactComponent;
//# sourceMappingURL=lucide-react.js.map


/***/ }),

/***/ 43530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var e=__webpack_require__(18038);function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/t(e);const r=["light","dark"],a="(prefers-color-scheme: dark)",o="undefined"==typeof window,s=/*#__PURE__*/e.createContext(void 0),l={setTheme:e=>{},themes:[]},c=["light","dark"],m=({forcedTheme:t,disableTransitionOnChange:o=!1,enableSystem:l=!0,enableColorScheme:m=!0,storageKey:f="theme",themes:y=c,defaultTheme:v=(l?"system":"light"),attribute:$="data-theme",value:g,children:b,nonce:S})=>{const[T,p]=e.useState(()=>d(f,v)),[w,C]=e.useState(()=>d(f)),E=g?Object.values(g):y,k=e.useCallback(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=h());const n=g?g[t]:t,a=o?u():null,s=document.documentElement;if("class"===$?(s.classList.remove(...E),n&&s.classList.add(n)):n?s.setAttribute($,n):s.removeAttribute($),m){const e=r.includes(v)?v:null,n=r.includes(t)?t:e;s.style.colorScheme=n}null==a||a()},[]),x=e.useCallback(e=>{p(e);try{localStorage.setItem(f,e)}catch(e){}},[t]),L=e.useCallback(e=>{const n=h(e);C(n),"system"===T&&l&&!t&&k("system")},[T,t]);e.useEffect(()=>{const e=window.matchMedia(a);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),e.useEffect(()=>{const e=e=>{e.key===f&&x(e.newValue||v)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),e.useEffect(()=>{k(null!=t?t:T)},[t,T]);const I=e.useMemo(()=>({theme:T,setTheme:x,forcedTheme:t,resolvedTheme:"system"===T?w:T,themes:l?[...y,"system"]:y,systemTheme:l?w:void 0}),[T,x,t,w,l,y]);/*#__PURE__*/return n.default.createElement(s.Provider,{value:I},/*#__PURE__*/n.default.createElement(i,{forcedTheme:t,disableTransitionOnChange:o,enableSystem:l,enableColorScheme:m,storageKey:f,themes:y,defaultTheme:v,attribute:$,value:g,children:b,attrs:E,nonce:S}),b)},i=/*#__PURE__*/e.memo(({forcedTheme:e,storageKey:t,attribute:o,enableSystem:s,enableColorScheme:l,defaultTheme:c,value:m,attrs:i,nonce:d})=>{const u="system"===c,h="class"===o?`var d=document.documentElement,c=d.classList;c.remove(${i.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${o}',s='setAttribute';`,f=l?r.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,n=!0)=>{const a=m?m[e]:e,s=t?e+"|| ''":`'${a}'`;let c="";return l&&n&&!t&&r.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===o?c+=t||a?`c.add(${s})`:"null":a&&(c+=`d[s](n,${s})`),c},v=e?`!function(){${h}${y(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${m?`var x=${JSON.stringify(m)};`:""}${y(m?"x[e]":"e",!0)}}${u?"":"else{"+y(c,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${m?`var x=${JSON.stringify(m)};`:""}${y(m?"x[e]":"e",!0)}}else{${y(c,!1,!1)};}${f}}catch(t){}}();`;/*#__PURE__*/return n.default.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),d=(e,t)=>{if(o)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},u=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light");exports.f=t=>e.useContext(s)?/*#__PURE__*/n.default.createElement(e.Fragment,null,t.children):/*#__PURE__*/n.default.createElement(m,t),exports.F=()=>{var t;return null!==(t=e.useContext(s))&&void 0!==t?t:l};


/***/ }),

/***/ 19973:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_e7970e', '__Inter_Fallback_e7970e'","fontStyle":"normal"},
	"className": "__className_e7970e",
	"variable": "__variable_e7970e"
};


/***/ }),

/***/ 82214:
/***/ ((module) => {

"use strict";

function e(r) {
    var o, t, f = "";
    if ("string" == typeof r || "number" == typeof r) f += r;
    else if ("object" == typeof r) if (Array.isArray(r)) for(o = 0; o < r.length; o++)r[o] && (t = e(r[o])) && (f && (f += " "), f += t);
    else for(o in r)r[o] && (f && (f += " "), f += o);
    return f;
}
function r() {
    for(var r, o, t = 0, f = ""; t < arguments.length;)(r = arguments[t++]) && (o = e(r)) && (f && (f += " "), f += o);
    return f;
}
module.exports = r, module.exports.clsx = r;


/***/ }),

/***/ 11675:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createProxy = createProxy;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Modified from https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackNodeRegister.js
const CLIENT_REFERENCE = Symbol.for("react.client.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const deepProxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "filepath":
                return target.filepath;
            case "name":
                return target.name;
            case "displayName":
                return undefined;
            case "async":
                return target.async;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "Provider":
                throw new Error(`Cannot render a Client Context Provider on the Server. ` + `Instead, you can export a Client Component wrapper ` + `that itself renders a Client Context Provider.`);
            default:
                break;
        }
        let expression;
        switch(target.name){
            case "":
                expression = String(name);
                break;
            case "*":
                expression = String(name);
                break;
            default:
                expression = String(target.name) + "." + String(name);
        }
        throw new Error(`Cannot access ${expression} on the server. ` + "You cannot dot into a client module from a server component. " + "You can only pass the imported name through.");
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "filepath":
                return target.filepath;
            case "name":
                return target.name;
            case "async":
                return target.async;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            // Avoid this attempting to be serialized.
            case "toJSON":
                return undefined;
            case Symbol.toPrimitive.toString():
                // @ts-ignore
                return Object.prototype[Symbol.toPrimitive];
            case "__esModule":
                // Something is conditionally checking which export to use. We'll pretend to be
                // an ESM compat module but then we'll check again on the client.
                const moduleId = target.filepath;
                target.default = Object.defineProperties(function() {
                    throw new Error(`Attempted to call the default export of ${moduleId} from the server ` + `but it's on the client. It's not possible to invoke a client function from ` + `the server, it can only be rendered as a Component or passed to props of a ` + `Client Component.`);
                }, {
                    // This a placeholder value that tells the client to conditionally use the
                    // whole object or just the default export.
                    name: {
                        value: ""
                    },
                    $$typeof: {
                        value: CLIENT_REFERENCE
                    },
                    filepath: {
                        value: target.filepath
                    },
                    async: {
                        value: target.async
                    }
                });
                return true;
            case "then":
                if (target.then) {
                    // Use a cached value
                    return target.then;
                }
                if (!target.async) {
                    // If this module is expected to return a Promise (such as an AsyncModule) then
                    // we should resolve that with a client reference that unwraps the Promise on
                    // the client.
                    const clientReference = Object.defineProperties({}, {
                        // Represents the whole Module object instead of a particular import.
                        name: {
                            value: "*"
                        },
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        filepath: {
                            value: target.filepath
                        },
                        async: {
                            value: true
                        }
                    });
                    const proxy = new Proxy(clientReference, proxyHandlers);
                    // Treat this as a resolved Promise for React's use()
                    target.status = "fulfilled";
                    target.value = proxy;
                    const then = target.then = Object.defineProperties(function then(resolve, _reject) {
                        // Expose to React.
                        return Promise.resolve(resolve(proxy));
                    }, // export then we should treat it as a reference to that name.
                    {
                        name: {
                            value: "then"
                        },
                        $$typeof: {
                            value: CLIENT_REFERENCE
                        },
                        filepath: {
                            value: target.filepath
                        },
                        async: {
                            value: false
                        }
                    });
                    return then;
                } else {
                    // Since typeof .then === 'function' is a feature test we'd continue recursing
                    // indefinitely if we return a function. Instead, we return an object reference
                    // if we check further.
                    return undefined;
                }
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            const reference = Object.defineProperties(function() {
                throw new Error(`Attempted to call ${String(name)}() from the server but ${String(name)} is on the client. ` + `It's not possible to invoke a client function from the server, it can ` + `only be rendered as a Component or passed to props of a Client Component.`);
            }, {
                name: {
                    value: name
                },
                $$typeof: {
                    value: CLIENT_REFERENCE
                },
                filepath: {
                    value: target.filepath
                },
                async: {
                    value: target.async
                }
            });
            cachedReference = target[name] = new Proxy(reference, deepProxyHandlers);
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        // Pretend to be a Promise in case anyone asks.
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const clientReference = Object.defineProperties({}, {
        // Represents the whole object instead of a particular import.
        name: {
            value: "*"
        },
        $$typeof: {
            value: CLIENT_REFERENCE
        },
        filepath: {
            value: moduleId
        },
        async: {
            value: false
        }
    });
    return new Proxy(clientReference, proxyHandlers);
} //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 75208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\node_modules\\.pnpm\\next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0\\node_modules\\next\\dist\\client\\components\\app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 48607:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 18611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\node_modules\\.pnpm\\next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0\\node_modules\\next\\dist\\client\\components\\error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 46502:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DYNAMIC_ERROR_CODE = void 0;
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
exports.DYNAMIC_ERROR_CODE = DYNAMIC_ERROR_CODE;
class DynamicServerError extends Error {
    constructor(type){
        super(`Dynamic server usage: ${type}`);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
exports.DynamicServerError = DynamicServerError;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 23790:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\node_modules\\.pnpm\\next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0\\node_modules\\next\\dist\\client\\components\\layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 82258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\node_modules\\.pnpm\\next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0\\node_modules\\next\\dist\\client\\components\\render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 99971:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.requestAsyncStorage = void 0;
var _asyncLocalStorage = __webpack_require__(48607);
const requestAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.requestAsyncStorage = requestAsyncStorage;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.js.map


/***/ }),

/***/ 28660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  */ 
const { createProxy  } = __webpack_require__(11675);
module.exports = createProxy("C:\\Users\\Acer\\Desktop\\Проект по курсу React\\student-dashboard\\node_modules\\.pnpm\\next@13.2.3_@babel+core@7.21.0_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0\\node_modules\\next\\dist\\client\\link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 41825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack-server.edge.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var aa = __webpack_require__(1872), f = "function" === typeof AsyncLocalStorage, ba = f ? new AsyncLocalStorage : null, m = null, n = 0;
function p(a, b) {
    if (0 !== b.length) if (512 < b.length) 0 < n && (a.enqueue(new Uint8Array(m.buffer, 0, n)), m = new Uint8Array(512), n = 0), a.enqueue(b);
    else {
        var c = m.length - n;
        c < b.length && (0 === c ? a.enqueue(m) : (m.set(b.subarray(0, c), n), a.enqueue(m), b = b.subarray(c)), m = new Uint8Array(512), n = 0);
        m.set(b, n);
        n += b.length;
    }
    return !0;
}
var q = new TextEncoder;
function r(a) {
    return q.encode(a);
}
function ca(a, b) {
    "function" === typeof a.error ? a.error(b) : a.close();
}
var t = JSON.stringify;
function da(a, b, c) {
    a = t(c, a.toJSON);
    b = b.toString(16) + ":" + a + "\n";
    return q.encode(b);
}
function u(a, b, c) {
    a = t(c);
    b = b.toString(16) + ":" + a + "\n";
    return q.encode(b);
}
var w = Symbol.for("react.client.reference"), ha = Symbol.for("react.server.reference"), y = Symbol.for("react.element"), ia = Symbol.for("react.fragment"), ja = Symbol.for("react.provider"), ka = Symbol.for("react.server_context"), la = Symbol.for("react.forward_ref"), ma = Symbol.for("react.suspense"), na = Symbol.for("react.suspense_list"), oa = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), pa = Symbol.for("react.default_value"), qa = Symbol.for("react.memo_cache_sentinel");
function A(a, b, c, d, e, g, h) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = g;
    this.removeEmptyString = h;
}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    new A(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    new A(a[0], 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    new A(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    new A(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    new A(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    new A(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    new A(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    new A(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    new A(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var B = /[\-:]([a-z])/g;
function C(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering transform-origin underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace(B, C);
    new A(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    new A(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    new A(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
var D = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    scale: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, ra = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys(D).forEach(function(a) {
    ra.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        D[b] = D[a];
    });
});
var sa = Array.isArray;
r('"></template>');
r("<script>");
r("</script>");
r('<script src="');
r('<script type="module" src="');
r('" integrity="');
r('" async=""></script>');
r("<!-- -->");
r(' style="');
r(":");
r(";");
r(" ");
r('="');
r('"');
r('=""');
r(">");
r("/>");
r(' selected=""');
r("\n");
r("<!DOCTYPE html>");
r("</");
r(">");
r('<template id="');
r('"></template>');
r("<!--$-->");
r('<!--$?--><template id="');
r('"></template>');
r("<!--$!-->");
r("<!--/$-->");
r("<template");
r('"');
r(' data-dgst="');
r(' data-msg="');
r(' data-stck="');
r("></template>");
r('<div hidden id="');
r('">');
r("</div>");
r('<svg aria-hidden="true" style="display:none" id="');
r('">');
r("</svg>");
r('<math aria-hidden="true" style="display:none" id="');
r('">');
r("</math>");
r('<table hidden id="');
r('">');
r("</table>");
r('<table hidden><tbody id="');
r('">');
r("</tbody></table>");
r('<table hidden><tr id="');
r('">');
r("</tr></table>");
r('<table hidden><colgroup id="');
r('">');
r("</colgroup></table>");
r('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};;$RS("');
r('$RS("');
r('","');
r('")</script>');
r('<template data-rsi="" data-sid="');
r('" data-pid="');
r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("');
r('$RC("');
r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(p,q,w){function r(l){this.s=l}for(var t=$RC,m=$RM,u=new Map,n=new Map,g=document,h,e,f=g.querySelectorAll("template[data-precedence]"),c=0;e=f[c++];){for(var b=e.content.firstChild;b;b=b.nextSibling)u.set(b.getAttribute("data-href"),b);e.parentNode.removeChild(e)}f=g.querySelectorAll("link[data-precedence],style[data-precedence]");for(c=0;e=f[c++];)m.set(e.getAttribute("STYLE"===e.nodeName?"data-href":"href"),e),n.set(e.dataset.precedence,h=e);e=0;f=[];for(var d,\nv,a;d=w[e++];){var k=0;b=d[k++];if(!(a=m.get(b))){if(a=u.get(b))c=a.getAttribute("data-precedence");else{a=g.createElement("link");a.href=b;a.rel="stylesheet";for(a.dataset.precedence=c=d[k++];v=d[k++];)a.setAttribute(v,d[k++]);d=a._p=new Promise(function(l,x){a.onload=l;a.onerror=x});d.then(r.bind(d,"l"),r.bind(d,"e"))}m.set(b,a);b=n.get(c)||h;b===h&&(h=a);n.set(c,a);b?b.parentNode.insertBefore(a,b.nextSibling):(c=g.head,c.insertBefore(a,c.firstChild))}d=a._p;c=a.getAttribute("media");!d||"l"===\nd.s||c&&!matchMedia(c).matches||f.push(d)}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};$RR("');
r('$RM=new Map;\n$RR=function(p,q,w){function r(l){this.s=l}for(var t=$RC,m=$RM,u=new Map,n=new Map,g=document,h,e,f=g.querySelectorAll("template[data-precedence]"),c=0;e=f[c++];){for(var b=e.content.firstChild;b;b=b.nextSibling)u.set(b.getAttribute("data-href"),b);e.parentNode.removeChild(e)}f=g.querySelectorAll("link[data-precedence],style[data-precedence]");for(c=0;e=f[c++];)m.set(e.getAttribute("STYLE"===e.nodeName?"data-href":"href"),e),n.set(e.dataset.precedence,h=e);e=0;f=[];for(var d,\nv,a;d=w[e++];){var k=0;b=d[k++];if(!(a=m.get(b))){if(a=u.get(b))c=a.getAttribute("data-precedence");else{a=g.createElement("link");a.href=b;a.rel="stylesheet";for(a.dataset.precedence=c=d[k++];v=d[k++];)a.setAttribute(v,d[k++]);d=a._p=new Promise(function(l,x){a.onload=l;a.onerror=x});d.then(r.bind(d,"l"),r.bind(d,"e"))}m.set(b,a);b=n.get(c)||h;b===h&&(h=a);n.set(c,a);b?b.parentNode.insertBefore(a,b.nextSibling):(c=g.head,c.insertBefore(a,c.firstChild))}d=a._p;c=a.getAttribute("media");!d||"l"===\nd.s||c&&!matchMedia(c).matches||f.push(d)}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};$RR("');
r('$RR("');
r('","');
r('",');
r('"');
r(")</script>");
r('<template data-rci="" data-bid="');
r('<template data-rri="" data-bid="');
r('" data-sid="');
r('" data-sty="');
r('$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("');
r('$RX("');
r('"');
r(",");
r(")</script>");
r('<template data-rxi="" data-bid="');
r('" data-dgst="');
r('" data-msg="');
r('" data-stck="');
r('<template data-precedence="">');
r("</template>");
r('<style data-precedence="');
r('"></style>');
r("[");
r(",[");
r(",");
r("]");
var E = null;
function G(a, b) {
    if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (null === a) {
            if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
            if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            G(a, c);
            b.context._currentValue = b.value;
        }
    }
}
function ta(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && ta(a);
}
function ua(a) {
    var b = a.parent;
    null !== b && ua(b);
    a.context._currentValue = a.value;
}
function va(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? G(a, b) : va(a, b);
}
function wa(a, b) {
    var c = b.parent;
    if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === c.depth ? G(a, c) : wa(a, c);
    b.context._currentValue = b.value;
}
function H(a) {
    var b = E;
    b !== a && (null === b ? ua(a) : null === a ? ta(b) : b.depth === a.depth ? G(b, a) : b.depth > a.depth ? va(b, a) : wa(b, a), E = a);
}
function xa(a, b) {
    var c = a._currentValue;
    a._currentValue = b;
    var d = E;
    return E = a = {
        parent: d,
        depth: null === d ? 0 : d.depth + 1,
        context: a,
        parentValue: c,
        value: b
    };
}
var I = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function ya() {}
function za(a, b, c) {
    c = a[c];
    void 0 === c ? a.push(b) : c !== b && (b.then(ya, ya), b = c);
    switch(b.status){
        case "fulfilled":
            return b.value;
        case "rejected":
            throw b.reason;
        default:
            if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(d) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "fulfilled";
                    e.value = d;
                }
            }, function(d) {
                if ("pending" === b.status) {
                    var e = b;
                    e.status = "rejected";
                    e.reason = d;
                }
            }), b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
            }
            J = b;
            throw I;
    }
}
var J = null;
function Aa() {
    if (null === J) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
    var a = J;
    J = null;
    return a;
}
var K = null, M = 0, N = null;
function Ba() {
    var a = N;
    N = null;
    return a;
}
function Ca(a) {
    return a._currentValue;
}
var Ga = {
    useMemo: function(a) {
        return a();
    },
    useCallback: function(a) {
        return a;
    },
    useDebugValue: function() {},
    useDeferredValue: O,
    useTransition: O,
    readContext: Ca,
    useContext: Ca,
    useReducer: O,
    useRef: O,
    useState: O,
    useInsertionEffect: O,
    useLayoutEffect: O,
    useImperativeHandle: O,
    useEffect: O,
    useId: Da,
    useMutableSource: O,
    useSyncExternalStore: O,
    useCacheRefresh: function() {
        return Ea;
    },
    useMemoCache: function(a) {
        for(var b = Array(a), c = 0; c < a; c++)b[c] = qa;
        return b;
    },
    use: Fa
};
function O() {
    throw Error("This Hook is not supported in Server Components.");
}
function Ea() {
    throw Error("Refreshing the cache is not supported in Server Components.");
}
function Da() {
    if (null === K) throw Error("useId can only be used while React is rendering");
    var a = K.identifierCount++;
    return ":" + K.identifierPrefix + "S" + a.toString(32) + ":";
}
function Fa(a) {
    if (null !== a && "object" === typeof a || "function" === typeof a) {
        if ("function" === typeof a.then) {
            var b = M;
            M += 1;
            null === N && (N = []);
            return za(N, a, b);
        }
        if (a.$$typeof === ka) return a._currentValue;
    }
    throw Error("An unsupported type was passed to use(): " + String(a));
}
function P() {
    return (new AbortController).signal;
}
function Ha() {
    if (Q) return Q;
    if (f) {
        var a = ba.getStore();
        if (a) return a;
    }
    return new Map;
}
var Ia = {
    getCacheSignal: function() {
        var a = Ha(), b = a.get(P);
        void 0 === b && (b = P(), a.set(P, b));
        return b;
    },
    getCacheForType: function(a) {
        var b = Ha(), c = b.get(a);
        void 0 === c && (c = a(), b.set(a, c));
        return c;
    }
}, Q = null, R = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = R.ContextRegistry, T = R.ReactCurrentDispatcher, U = R.ReactCurrentCache;
function Ja(a) {
    console.error(a);
}
function Ka(a, b, c, d, e) {
    if (null !== U.current && U.current !== Ia) throw Error("Currently React only supports one RSC renderer at a time.");
    U.current = Ia;
    var g = new Set, h = [], k = {
        status: 0,
        fatalError: null,
        destination: null,
        bundlerConfig: b,
        cache: new Map,
        nextChunkId: 0,
        pendingChunks: 0,
        abortableTasks: g,
        pingedTasks: h,
        completedImportChunks: [],
        completedJSONChunks: [],
        completedErrorChunks: [],
        writtenSymbols: new Map,
        writtenClientReferences: new Map,
        writtenServerReferences: new Map,
        writtenProviders: new Map,
        identifierPrefix: e || "",
        identifierCount: 1,
        onError: void 0 === c ? Ja : c,
        toJSON: function(l, v) {
            return La(k, this, l, v);
        }
    };
    k.pendingChunks++;
    b = Ma(d);
    a = Na(k, a, b, g);
    h.push(a);
    return k;
}
var Oa = {};
function Pa(a, b) {
    a.pendingChunks++;
    var c = Na(a, null, E, a.abortableTasks);
    switch(b.status){
        case "fulfilled":
            return c.model = b.value, Qa(a, c), c.id;
        case "rejected":
            var d = V(a, b.reason);
            W(a, c.id, d);
            return c.id;
        default:
            "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
                "pending" === b.status && (b.status = "fulfilled", b.value = e);
            }, function(e) {
                "pending" === b.status && (b.status = "rejected", b.reason = e);
            }));
    }
    b.then(function(e) {
        c.model = e;
        Qa(a, c);
    }, function(e) {
        e = V(a, e);
        W(a, c.id, e);
    });
    return c.id;
}
function Ra(a) {
    if ("fulfilled" === a.status) return a.value;
    if ("rejected" === a.status) throw a.reason;
    throw a;
}
function Sa(a) {
    switch(a.status){
        case "fulfilled":
        case "rejected":
            break;
        default:
            "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                "pending" === a.status && (a.status = "fulfilled", a.value = b);
            }, function(b) {
                "pending" === a.status && (a.status = "rejected", a.reason = b);
            }));
    }
    return {
        $$typeof: z,
        _payload: a,
        _init: Ra
    };
}
function X(a, b, c, d, e, g) {
    if (null !== d && void 0 !== d) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
    if ("function" === typeof b) {
        if (b.$$typeof === w) return [
            y,
            b,
            c,
            e
        ];
        M = 0;
        N = g;
        e = b(e);
        return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : Sa(e) : e;
    }
    if ("string" === typeof b) return [
        y,
        b,
        c,
        e
    ];
    if ("symbol" === typeof b) return b === ia ? e.children : [
        y,
        b,
        c,
        e
    ];
    if (null != b && "object" === typeof b) {
        if (b.$$typeof === w) return [
            y,
            b,
            c,
            e
        ];
        switch(b.$$typeof){
            case z:
                var h = b._init;
                b = h(b._payload);
                return X(a, b, c, d, e, g);
            case la:
                return a = b.render, M = 0, N = g, a(e, void 0);
            case oa:
                return X(a, b.type, c, d, e, g);
            case ja:
                return xa(b._context, e.value), [
                    y,
                    b,
                    c,
                    {
                        value: e.value,
                        children: e.children,
                        __pop: Oa
                    }
                ];
        }
    }
    throw Error("Unsupported Server Component type: " + Ta(b));
}
function Qa(a, b) {
    var c = a.pingedTasks;
    c.push(b);
    1 === c.length && Ua(a);
}
function Na(a, b, c, d) {
    var e = {
        id: a.nextChunkId++,
        status: 0,
        model: b,
        context: c,
        ping: function() {
            return Qa(a, e);
        },
        thenableState: null
    };
    d.add(e);
    return e;
}
function Va(a, b, c, d) {
    var e = d.filepath + "#" + d.name + (d.async ? "#async" : ""), g = a.writtenClientReferences, h = g.get(e);
    if (void 0 !== h) return b[0] === y && "1" === c ? "$L" + h.toString(16) : "$" + h.toString(16);
    try {
        var k = a.bundlerConfig[d.filepath][d.name];
        var l = d.async ? {
            id: k.id,
            chunks: k.chunks,
            name: k.name,
            async: !0
        } : k;
        a.pendingChunks++;
        var v = a.nextChunkId++, ea = t(l), x = v.toString(16) + ":I" + ea + "\n";
        var L = q.encode(x);
        a.completedImportChunks.push(L);
        g.set(e, v);
        return b[0] === y && "1" === c ? "$L" + v.toString(16) : "$" + v.toString(16);
    } catch (fa) {
        return a.pendingChunks++, b = a.nextChunkId++, c = V(a, fa), W(a, b, c), "$" + b.toString(16);
    }
}
function Wa(a) {
    return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, c) {
        return c;
    });
}
function Ta(a) {
    switch(typeof a){
        case "string":
            return JSON.stringify(10 >= a.length ? a : a.substr(0, 10) + "...");
        case "object":
            if (sa(a)) return "[...]";
            a = Wa(a);
            return "Object" === a ? "{...}" : a;
        case "function":
            return "function";
        default:
            return String(a);
    }
}
function Y(a) {
    if ("string" === typeof a) return a;
    switch(a){
        case ma:
            return "Suspense";
        case na:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case la:
            return Y(a.render);
        case oa:
            return Y(a.type);
        case z:
            var b = a._payload;
            a = a._init;
            try {
                return Y(a(b));
            } catch (c) {}
    }
    return "";
}
function Z(a, b) {
    var c = Wa(a);
    if ("Object" !== c && "Array" !== c) return c;
    c = -1;
    var d = 0;
    if (sa(a)) {
        var e = "[";
        for(var g = 0; g < a.length; g++){
            0 < g && (e += ", ");
            var h = a[g];
            h = "object" === typeof h && null !== h ? Z(h) : Ta(h);
            "" + g === b ? (c = e.length, d = h.length, e += h) : e = 10 > h.length && 40 > e.length + h.length ? e + h : e + "...";
        }
        e += "]";
    } else if (a.$$typeof === y) e = "<" + Y(a.type) + "/>";
    else {
        e = "{";
        g = Object.keys(a);
        for(h = 0; h < g.length; h++){
            0 < h && (e += ", ");
            var k = g[h], l = JSON.stringify(k);
            e += ('"' + k + '"' === l ? k : l) + ": ";
            l = a[k];
            l = "object" === typeof l && null !== l ? Z(l) : Ta(l);
            k === b ? (c = e.length, d = l.length, e += l) : e = 10 > l.length && 40 > e.length + l.length ? e + l : e + "...";
        }
        e += "}";
    }
    return void 0 === b ? e : -1 < c && 0 < d ? (a = " ".repeat(c) + "^".repeat(d), "\n  " + e + "\n  " + a) : "\n  " + e;
}
function La(a, b, c, d) {
    switch(d){
        case y:
            return "$";
    }
    for(; "object" === typeof d && null !== d && (d.$$typeof === y || d.$$typeof === z);)try {
        switch(d.$$typeof){
            case y:
                var e = d;
                d = X(a, e.type, e.key, e.ref, e.props, null);
                break;
            case z:
                var g = d._init;
                d = g(d._payload);
        }
    } catch (h) {
        c = h === I ? Aa() : h;
        if ("object" === typeof c && null !== c && "function" === typeof c.then) return a.pendingChunks++, a = Na(a, d, E, a.abortableTasks), d = a.ping, c.then(d, d), a.thenableState = Ba(), "$L" + a.id.toString(16);
        a.pendingChunks++;
        d = a.nextChunkId++;
        c = V(a, c);
        W(a, d, c);
        return "$L" + d.toString(16);
    }
    if (null === d) return null;
    if ("object" === typeof d) {
        if (d.$$typeof === w) return Va(a, b, c, d);
        if ("function" === typeof d.then) return "$@" + Pa(a, d).toString(16);
        if (d.$$typeof === ja) return d = d._context._globalName, b = a.writtenProviders, c = b.get(c), void 0 === c && (a.pendingChunks++, c = a.nextChunkId++, b.set(d, c), d = u(a, c, "$P" + d), a.completedJSONChunks.push(d)), "$" + c.toString(16);
        if (d === Oa) {
            a = E;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === pa ? a.context._defaultValue : d;
            E = a.parent;
            return;
        }
        return d;
    }
    if ("string" === typeof d) return a = "$" === d[0] ? "$" + d : d, a;
    if ("boolean" === typeof d || "number" === typeof d || "undefined" === typeof d) return d;
    if ("function" === typeof d) {
        if (d.$$typeof === w) return Va(a, b, c, d);
        if (d.$$typeof === ha) return c = a.writtenServerReferences, b = c.get(d), void 0 !== b ? a = "$F" + b.toString(16) : (e = {
            id: d.$$filepath,
            name: d.$$name,
            bound: Promise.resolve(d.$$bound)
        }, a.pendingChunks++, b = a.nextChunkId++, e = da(a, b, e), a.completedJSONChunks.push(e), c.set(d, b), a = "$F" + b.toString(16)), a;
        if (/^on[A-Z]/.test(c)) throw Error("Event handlers cannot be passed to Client Component props." + Z(b, c) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
        throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + Z(b, c));
    }
    if ("symbol" === typeof d) {
        e = a.writtenSymbols;
        g = e.get(d);
        if (void 0 !== g) return "$" + g.toString(16);
        g = d.description;
        if (Symbol.for(g) !== d) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (d.description + ") cannot be found among global symbols.") + Z(b, c));
        a.pendingChunks++;
        c = a.nextChunkId++;
        b = u(a, c, "$S" + g);
        a.completedImportChunks.push(b);
        e.set(d, c);
        return "$" + c.toString(16);
    }
    if ("bigint" === typeof d) throw Error("BigInt (" + d + ") is not yet supported in Client Component props." + Z(b, c));
    throw Error("Type " + typeof d + " is not supported in Client Component props." + Z(b, c));
}
function V(a, b) {
    a = a.onError;
    b = a(b);
    if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b || "";
}
function Xa(a, b) {
    null !== a.destination ? (a.status = 2, ca(a.destination, b)) : (a.status = 1, a.fatalError = b);
}
function W(a, b, c) {
    c = {
        digest: c
    };
    b = b.toString(16) + ":E" + t(c) + "\n";
    b = q.encode(b);
    a.completedErrorChunks.push(b);
}
function Ua(a) {
    var b = T.current, c = Q;
    T.current = Ga;
    Q = a.cache;
    K = a;
    try {
        var d = a.pingedTasks;
        a.pingedTasks = [];
        for(var e = 0; e < d.length; e++){
            var g = d[e];
            var h = a;
            if (0 === g.status) {
                H(g.context);
                try {
                    var k = g.model;
                    if ("object" === typeof k && null !== k && k.$$typeof === y) {
                        var l = k, v = g.thenableState;
                        g.model = k;
                        k = X(h, l.type, l.key, l.ref, l.props, v);
                        for(g.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === y;)l = k, g.model = k, k = X(h, l.type, l.key, l.ref, l.props, null);
                    }
                    var ea = da(h, g.id, k);
                    h.completedJSONChunks.push(ea);
                    h.abortableTasks.delete(g);
                    g.status = 1;
                } catch (F) {
                    var x = F === I ? Aa() : F;
                    if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                        var L = g.ping;
                        x.then(L, L);
                        g.thenableState = Ba();
                    } else {
                        h.abortableTasks.delete(g);
                        g.status = 4;
                        var fa = V(h, x);
                        W(h, g.id, fa);
                    }
                }
            }
        }
        null !== a.destination && Ya(a, a.destination);
    } catch (F) {
        V(a, F), Xa(a, F);
    } finally{
        T.current = b, Q = c, K = null;
    }
}
function Ya(a, b) {
    m = new Uint8Array(512);
    n = 0;
    try {
        for(var c = a.completedImportChunks, d = 0; d < c.length; d++)a.pendingChunks--, p(b, c[d]);
        c.splice(0, d);
        var e = a.completedJSONChunks;
        for(d = 0; d < e.length; d++)a.pendingChunks--, p(b, e[d]);
        e.splice(0, d);
        var g = a.completedErrorChunks;
        for(d = 0; d < g.length; d++)a.pendingChunks--, p(b, g[d]);
        g.splice(0, d);
    } finally{
        m && 0 < n && (b.enqueue(new Uint8Array(m.buffer, 0, n)), m = null, n = 0);
    }
    0 === a.pendingChunks && b.close();
}
function Za(a, b) {
    try {
        var c = a.abortableTasks;
        if (0 < c.size) {
            var d = V(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
            a.pendingChunks++;
            var e = a.nextChunkId++;
            W(a, e, d);
            c.forEach(function(g) {
                g.status = 3;
                var h = "$" + e.toString(16);
                g = u(a, g.id, h);
                a.completedErrorChunks.push(g);
            });
            c.clear();
        }
        null !== a.destination && Ya(a, a.destination);
    } catch (g) {
        V(a, g), Xa(a, g);
    }
}
function Ma(a) {
    if (a) {
        var b = E;
        H(null);
        for(var c = 0; c < a.length; c++){
            var d = a[c], e = d[0];
            d = d[1];
            S[e] || (S[e] = aa.createServerContext(e, pa));
            xa(S[e], d);
        }
        a = E;
        H(b);
        return a;
    }
    return null;
}
exports.renderToReadableStream = function(a, b, c) {
    var d = Ka(a, b, c ? c.onError : void 0, c ? c.context : void 0, c ? c.identifierPrefix : void 0);
    if (c && c.signal) {
        var e = c.signal;
        if (e.aborted) Za(d, e.reason);
        else {
            var g = function() {
                Za(d, e.reason);
                e.removeEventListener("abort", g);
            };
            e.addEventListener("abort", g);
        }
    }
    return new ReadableStream({
        type: "bytes",
        start: function() {
            f ? ba.run(d.cache, Ua, d) : Ua(d);
        },
        pull: function(h) {
            if (1 === d.status) d.status = 2, ca(h, d.fatalError);
            else if (2 !== d.status && null === d.destination) {
                d.destination = h;
                try {
                    Ya(d, h);
                } catch (k) {
                    V(d, k), Xa(d, k);
                }
            }
        },
        cancel: function() {}
    }, {
        highWaterMark: 0
    });
};


/***/ }),

/***/ 17234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(41825);
} else {}


/***/ }),

/***/ 11241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var f = __webpack_require__(1872), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;


/***/ }),

/***/ 73860:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = new Request(a, b);
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var h = d[c + 1];
                if (d[c] === e) return a = h, a.then(function(g) {
                    return g.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(g) {
            return g.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(d) {
        return b[d];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(f){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    h = !0;
            }
    }
    if (h) return h = a, e = e(h), a = "" === c ? "." + S(h, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(l) {
        return l;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    h = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var g = 0; g < a.length; g++){
        f = a[g];
        var k = c + S(f, g);
        h += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), g = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, g++), h += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(f) {
        return b.call(d, f, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(d) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = d;
        }, function(d) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = d;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(b) {
            return b;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var h = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = h;
        } catch (g) {
            throw h = b, h.s = 2, h.v = g, g;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, h = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        g = Array(k);
        for(var l = 0; l < k; l++)g[l] = arguments[l + 2];
        c.children = g;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: h
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, h = null;
    if (null != b) for(c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var g = arguments.length - 2;
    if (1 === g) e.children = d;
    else if (1 < g) {
        for(var k = Array(g), l = 0; l < g; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in g = a.defaultProps, g)void 0 === e[c] && (e[c] = g[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: h,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-next-bfb9cbd8c-20230223";


/***/ }),

/***/ 45874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(11241);
} else {}


/***/ }),

/***/ 1872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(73860);
} else {}


/***/ }),

/***/ 96838:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(28660);


/***/ }),

/***/ 48120:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

function r() {
    for(var r, o, t = 0, n = ""; t < arguments.length;)(r = arguments[t++]) && (o = e(r)) && (n && (n += " "), n += o);
    return n;
}
function e(r) {
    if ("string" == typeof r) return r;
    for(var o, t = "", n = 0; n < r.length; n++)r[n] && (o = e(r[n])) && (t && (t += " "), t += o);
    return t;
}
function o() {
    return o = Object.assign ? Object.assign.bind() : function(r) {
        for(var e = 1; e < arguments.length; e++){
            var o = arguments[e];
            for(var t in o)Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
        }
        return r;
    }, o.apply(this, arguments);
}
function t(r) {
    if (r < 1) return {
        get: function() {},
        set: function() {}
    };
    var e = 0, o = new Map, t = new Map;
    function n(n, i) {
        o.set(n, i), ++e > r && (e = 0, t = o, o = new Map);
    }
    return {
        get: function(r) {
            var e = o.get(r);
            return void 0 !== e ? e : void 0 !== (e = t.get(r)) ? (n(r, e), e) : void 0;
        },
        set: function(r, e) {
            o.has(r) ? o.set(r, e) : n(r, e);
        }
    };
}
function n(r) {
    var e = function(r) {
        var e = r.theme, o = r.prefix, t = {
            nextPart: new Map,
            validators: []
        };
        return (function(r, e) {
            return e ? r.map(function(r) {
                return [
                    r[0],
                    r[1].map(function(r) {
                        return "string" == typeof r ? e + r : "object" == typeof r ? Object.fromEntries(Object.entries(r).map(function(r) {
                            return [
                                e + r[0],
                                r[1]
                            ];
                        })) : r;
                    })
                ];
            }) : r;
        })(Object.entries(r.classGroups), o).forEach(function(r) {
            l(r[1], t, r[0], e);
        }), t;
    }(r);
    return {
        getClassGroupId: function(r) {
            var o = r.split("-");
            return "" === o[0] && 1 !== o.length && o.shift(), i(o, e) || function(r) {
                if (a.test(r)) {
                    var e = a.exec(r)[1], o = null == e ? void 0 : e.substring(0, e.indexOf(":"));
                    if (o) return "arbitrary.." + o;
                }
            }(r);
        },
        getConflictingClassGroupIds: function(e) {
            return r.conflictingClassGroups[e] || [];
        }
    };
}
function i(r, e) {
    var o;
    if (0 === r.length) return e.classGroupId;
    var t = e.nextPart.get(r[0]), n = t ? i(r.slice(1), t) : void 0;
    if (n) return n;
    if (0 !== e.validators.length) {
        var a = r.join("-");
        return null == (o = e.validators.find(function(r) {
            return (0, r.validator)(a);
        })) ? void 0 : o.classGroupId;
    }
}
__webpack_unused_export__ = ({
    value: !0
});
var a = /^\[(.+)\]$/;
function l(r, e, o, t) {
    r.forEach(function(r) {
        if ("string" != typeof r) {
            if ("function" == typeof r) return r.isThemeGetter ? void l(r(t), e, o, t) : void e.validators.push({
                validator: r,
                classGroupId: o
            });
            Object.entries(r).forEach(function(r) {
                l(r[1], s(e, r[0]), o, t);
            });
        } else ("" === r ? e : s(e, r)).classGroupId = o;
    });
}
function s(r, e) {
    var o = r;
    return e.split("-").forEach(function(r) {
        o.nextPart.has(r) || o.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), o = o.nextPart.get(r);
    }), o;
}
function c(r) {
    var e = r.separator || ":";
    return function(r) {
        for(var o = 0, t = [], n = 0, i = 0; i < r.length; i++){
            var a = r[i];
            0 === o && a === e[0] && (1 !== e.length && r.slice(i, i + e.length) !== e || (t.push(r.slice(n, i)), n = i + e.length)), "[" === a ? o++ : "]" === a && o--;
        }
        var l = 0 === t.length ? r : r.substring(n), s = l.startsWith("!");
        return {
            modifiers: t,
            hasImportantModifier: s,
            baseClassName: s ? l.substring(1) : l
        };
    };
}
function d(r) {
    return o({
        cache: t(r.cacheSize),
        splitModifiers: c(r)
    }, n(r));
}
var u = /\s+/;
function p(r, e) {
    var o = e.splitModifiers, t = e.getClassGroupId, n = e.getConflictingClassGroupIds, i = new Set;
    return r.trim().split(u).map(function(r) {
        var e = o(r), n = e.modifiers, i = e.hasImportantModifier, a = t(e.baseClassName);
        if (!a) return {
            isTailwindClass: !1,
            originalClassName: r
        };
        var l = (function(r) {
            if (r.length <= 1) return r;
            var e = [], o = [];
            return r.forEach(function(r) {
                "[" === r[0] ? (e.push.apply(e, o.sort().concat([
                    r
                ])), o = []) : o.push(r);
            }), e.push.apply(e, o.sort()), e;
        })(n).join(":");
        return {
            isTailwindClass: !0,
            modifierId: i ? l + "!" : l,
            classGroupId: a,
            originalClassName: r
        };
    }).reverse().filter(function(r) {
        if (!r.isTailwindClass) return !0;
        var e = r.modifierId, o = r.classGroupId, t = e + o;
        return !i.has(t) && (i.add(t), n(o).forEach(function(r) {
            return i.add(e + r);
        }), !0);
    }).reverse().map(function(r) {
        return r.originalClassName;
    }).join(" ");
}
function b() {
    for(var e = arguments.length, o = new Array(e), t = 0; t < e; t++)o[t] = arguments[t];
    var n, i, a, l = s;
    function s(r) {
        var e = o[0], t = o.slice(1).reduce(function(r, e) {
            return e(r);
        }, e());
        return n = d(t), i = n.cache.get, a = n.cache.set, l = c, c(r);
    }
    function c(r) {
        var e = i(r);
        if (e) return e;
        var o = p(r, n);
        return a(r, o), o;
    }
    return function() {
        return l(r.apply(null, arguments));
    };
}
function f(r) {
    var e = function(e) {
        return e[r] || [];
    };
    return e.isThemeGetter = !0, e;
}
var g = /^\[(.+)\]$/, m = /^\d+\/\d+$/, v = new Set([
    "px",
    "full",
    "screen"
]), h = /^(\d+)?(xs|sm|md|lg|xl)$/, y = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/, x = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function w(r) {
    return !Number.isNaN(Number(r)) || v.has(r) || m.test(r) || k(r);
}
function k(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && (o.startsWith("length:") || y.test(o));
}
function z(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && o.startsWith("size:");
}
function j(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && o.startsWith("position:");
}
function C(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && (o.startsWith("url(") || o.startsWith("url:"));
}
function G(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && (!Number.isNaN(Number(o)) || o.startsWith("number:"));
}
function I(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return Number.isInteger(Number(o || r));
}
function N(r) {
    return g.test(r);
}
function A() {
    return !0;
}
function M(r) {
    return h.test(r);
}
function O(r) {
    var e, o = null == (e = g.exec(r)) ? void 0 : e[1];
    return !!o && x.test(o);
}
var S = {
    __proto__: null,
    isLength: w,
    isArbitraryLength: k,
    isArbitrarySize: z,
    isArbitraryPosition: j,
    isArbitraryUrl: C,
    isArbitraryNumber: G,
    isArbitraryWeight: G,
    isInteger: I,
    isArbitraryValue: N,
    isAny: A,
    isTshirtSize: M,
    isArbitraryShadow: O
};
function P() {
    var r = f("colors"), e = f("spacing"), o = f("blur"), t = f("brightness"), n = f("borderColor"), i = f("borderRadius"), a = f("borderSpacing"), l = f("borderWidth"), s = f("contrast"), c = f("grayscale"), d = f("hueRotate"), u = f("invert"), p = f("gap"), b = f("gradientColorStops"), g = f("inset"), m = f("margin"), v = f("opacity"), h = f("padding"), y = f("saturate"), x = f("scale"), S = f("sepia"), P = f("skew"), W = f("space"), T = f("translate"), E = function() {
        return [
            "auto",
            e
        ];
    }, _ = function() {
        return [
            "",
            w
        ];
    }, R = function() {
        return [
            "auto",
            I
        ];
    }, $ = function() {
        return [
            "",
            "0",
            N
        ];
    };
    return {
        cacheSize: 500,
        theme: {
            colors: [
                A
            ],
            spacing: [
                w
            ],
            blur: [
                "none",
                "",
                M,
                k
            ],
            brightness: [
                I
            ],
            borderColor: [
                r
            ],
            borderRadius: [
                "none",
                "",
                "full",
                M,
                k
            ],
            borderSpacing: [
                e
            ],
            borderWidth: _(),
            contrast: [
                I
            ],
            grayscale: $(),
            hueRotate: [
                I
            ],
            invert: $(),
            gap: [
                e
            ],
            gradientColorStops: [
                r
            ],
            inset: E(),
            margin: E(),
            opacity: [
                I
            ],
            padding: [
                e
            ],
            saturate: [
                I
            ],
            scale: [
                I
            ],
            sepia: $(),
            skew: [
                I,
                N
            ],
            space: [
                e
            ],
            translate: [
                e
            ]
        },
        classGroups: {
            aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        N
                    ]
                }
            ],
            container: [
                "container"
            ],
            columns: [
                {
                    columns: [
                        M
                    ]
                }
            ],
            "break-after": [
                {
                    "break-after": [
                        "auto",
                        "avoid",
                        "all",
                        "avoid-page",
                        "page",
                        "left",
                        "right",
                        "column"
                    ]
                }
            ],
            "break-before": [
                {
                    "break-before": [
                        "auto",
                        "avoid",
                        "all",
                        "avoid-page",
                        "page",
                        "left",
                        "right",
                        "column"
                    ]
                }
            ],
            "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden"
            ],
            float: [
                {
                    float: [
                        "right",
                        "left",
                        "none"
                    ]
                }
            ],
            clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none"
                    ]
                }
            ],
            isolation: [
                "isolate",
                "isolation-auto"
            ],
            "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            "object-position": [
                {
                    object: [].concat([
                        "bottom",
                        "center",
                        "left",
                        "left-bottom",
                        "left-top",
                        "right",
                        "right-bottom",
                        "right-top",
                        "top"
                    ], [
                        N
                    ])
                }
            ],
            overflow: [
                {
                    overflow: [
                        "auto",
                        "hidden",
                        "clip",
                        "visible",
                        "scroll"
                    ]
                }
            ],
            "overflow-x": [
                {
                    "overflow-x": [
                        "auto",
                        "hidden",
                        "clip",
                        "visible",
                        "scroll"
                    ]
                }
            ],
            "overflow-y": [
                {
                    "overflow-y": [
                        "auto",
                        "hidden",
                        "clip",
                        "visible",
                        "scroll"
                    ]
                }
            ],
            overscroll: [
                {
                    overscroll: [
                        "auto",
                        "contain",
                        "none"
                    ]
                }
            ],
            "overscroll-x": [
                {
                    "overscroll-x": [
                        "auto",
                        "contain",
                        "none"
                    ]
                }
            ],
            "overscroll-y": [
                {
                    "overscroll-y": [
                        "auto",
                        "contain",
                        "none"
                    ]
                }
            ],
            position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            inset: [
                {
                    inset: [
                        g
                    ]
                }
            ],
            "inset-x": [
                {
                    "inset-x": [
                        g
                    ]
                }
            ],
            "inset-y": [
                {
                    "inset-y": [
                        g
                    ]
                }
            ],
            top: [
                {
                    top: [
                        g
                    ]
                }
            ],
            right: [
                {
                    right: [
                        g
                    ]
                }
            ],
            bottom: [
                {
                    bottom: [
                        g
                    ]
                }
            ],
            left: [
                {
                    left: [
                        g
                    ]
                }
            ],
            visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            z: [
                {
                    z: [
                        I
                    ]
                }
            ],
            basis: [
                {
                    basis: [
                        e
                    ]
                }
            ],
            "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            "flex-wrap": [
                {
                    flex: [
                        "wrap",
                        "wrap-reverse",
                        "nowrap"
                    ]
                }
            ],
            flex: [
                {
                    flex: [
                        "1",
                        "auto",
                        "initial",
                        "none",
                        N
                    ]
                }
            ],
            grow: [
                {
                    grow: $()
                }
            ],
            shrink: [
                {
                    shrink: $()
                }
            ],
            order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        I
                    ]
                }
            ],
            "grid-cols": [
                {
                    "grid-cols": [
                        A
                    ]
                }
            ],
            "col-start-end": [
                {
                    col: [
                        "auto",
                        {
                            span: [
                                I
                            ]
                        }
                    ]
                }
            ],
            "col-start": [
                {
                    "col-start": R()
                }
            ],
            "col-end": [
                {
                    "col-end": R()
                }
            ],
            "grid-rows": [
                {
                    "grid-rows": [
                        A
                    ]
                }
            ],
            "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                I
                            ]
                        }
                    ]
                }
            ],
            "row-start": [
                {
                    "row-start": R()
                }
            ],
            "row-end": [
                {
                    "row-end": R()
                }
            ],
            "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            "auto-cols": [
                {
                    "auto-cols": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        N
                    ]
                }
            ],
            "auto-rows": [
                {
                    "auto-rows": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        N
                    ]
                }
            ],
            gap: [
                {
                    gap: [
                        p
                    ]
                }
            ],
            "gap-x": [
                {
                    "gap-x": [
                        p
                    ]
                }
            ],
            "gap-y": [
                {
                    "gap-y": [
                        p
                    ]
                }
            ],
            "justify-content": [
                {
                    justify: [
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly"
                    ]
                }
            ],
            "justify-items": [
                {
                    "justify-items": [
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            "justify-self": [
                {
                    "justify-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            "align-content": [
                {
                    content: [].concat([
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly"
                    ], [
                        "baseline"
                    ])
                }
            ],
            "align-items": [
                {
                    items: [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            "align-self": [
                {
                    self: [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "baseline"
                    ]
                }
            ],
            "place-content": [
                {
                    "place-content": [].concat([
                        "start",
                        "end",
                        "center",
                        "between",
                        "around",
                        "evenly"
                    ], [
                        "baseline",
                        "stretch"
                    ])
                }
            ],
            "place-items": [
                {
                    "place-items": [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            "place-self": [
                {
                    "place-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            p: [
                {
                    p: [
                        h
                    ]
                }
            ],
            px: [
                {
                    px: [
                        h
                    ]
                }
            ],
            py: [
                {
                    py: [
                        h
                    ]
                }
            ],
            pt: [
                {
                    pt: [
                        h
                    ]
                }
            ],
            pr: [
                {
                    pr: [
                        h
                    ]
                }
            ],
            pb: [
                {
                    pb: [
                        h
                    ]
                }
            ],
            pl: [
                {
                    pl: [
                        h
                    ]
                }
            ],
            m: [
                {
                    m: [
                        m
                    ]
                }
            ],
            mx: [
                {
                    mx: [
                        m
                    ]
                }
            ],
            my: [
                {
                    my: [
                        m
                    ]
                }
            ],
            mt: [
                {
                    mt: [
                        m
                    ]
                }
            ],
            mr: [
                {
                    mr: [
                        m
                    ]
                }
            ],
            mb: [
                {
                    mb: [
                        m
                    ]
                }
            ],
            ml: [
                {
                    ml: [
                        m
                    ]
                }
            ],
            "space-x": [
                {
                    "space-x": [
                        W
                    ]
                }
            ],
            "space-x-reverse": [
                "space-x-reverse"
            ],
            "space-y": [
                {
                    "space-y": [
                        W
                    ]
                }
            ],
            "space-y-reverse": [
                "space-y-reverse"
            ],
            w: [
                {
                    w: [
                        "auto",
                        "min",
                        "max",
                        "fit",
                        e
                    ]
                }
            ],
            "min-w": [
                {
                    "min-w": [
                        "min",
                        "max",
                        "fit",
                        w
                    ]
                }
            ],
            "max-w": [
                {
                    "max-w": [
                        "0",
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                M
                            ]
                        },
                        M,
                        k
                    ]
                }
            ],
            h: [
                {
                    h: [
                        e,
                        "auto",
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            "min-h": [
                {
                    "min-h": [
                        "min",
                        "max",
                        "fit",
                        w
                    ]
                }
            ],
            "max-h": [
                {
                    "max-h": [
                        e,
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            "font-size": [
                {
                    text: [
                        "base",
                        M,
                        k
                    ]
                }
            ],
            "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            "font-style": [
                "italic",
                "not-italic"
            ],
            "font-weight": [
                {
                    font: [
                        "thin",
                        "extralight",
                        "light",
                        "normal",
                        "medium",
                        "semibold",
                        "bold",
                        "extrabold",
                        "black",
                        G
                    ]
                }
            ],
            "font-family": [
                {
                    font: [
                        A
                    ]
                }
            ],
            "fvn-normal": [
                "normal-nums"
            ],
            "fvn-ordinal": [
                "ordinal"
            ],
            "fvn-slashed-zero": [
                "slashed-zero"
            ],
            "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractons"
            ],
            tracking: [
                {
                    tracking: [
                        "tighter",
                        "tight",
                        "normal",
                        "wide",
                        "wider",
                        "widest",
                        k
                    ]
                }
            ],
            leading: [
                {
                    leading: [
                        "none",
                        "tight",
                        "snug",
                        "normal",
                        "relaxed",
                        "loose",
                        w
                    ]
                }
            ],
            "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        N
                    ]
                }
            ],
            "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            "placeholder-color": [
                {
                    placeholder: [
                        r
                    ]
                }
            ],
            "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        v
                    ]
                }
            ],
            "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            "text-color": [
                {
                    text: [
                        r
                    ]
                }
            ],
            "text-opacity": [
                {
                    "text-opacity": [
                        v
                    ]
                }
            ],
            "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            "text-decoration-style": [
                {
                    decoration: [].concat([
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ], [
                        "wavy"
                    ])
                }
            ],
            "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        w
                    ]
                }
            ],
            "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        w
                    ]
                }
            ],
            "text-decoration-color": [
                {
                    decoration: [
                        r
                    ]
                }
            ],
            "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            indent: [
                {
                    indent: [
                        e
                    ]
                }
            ],
            "vertical-align": [
                {
                    align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        k
                    ]
                }
            ],
            whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap"
                    ]
                }
            ],
            break: [
                {
                    break: [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            content: [
                {
                    content: [
                        "none",
                        N
                    ]
                }
            ],
            "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            "bg-opacity": [
                {
                    "bg-opacity": [
                        v
                    ]
                }
            ],
            "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            "bg-position": [
                {
                    bg: [].concat([
                        "bottom",
                        "center",
                        "left",
                        "left-bottom",
                        "left-top",
                        "right",
                        "right-bottom",
                        "right-top",
                        "top"
                    ], [
                        j
                    ])
                }
            ],
            "bg-repeat": [
                {
                    bg: [
                        "no-repeat",
                        {
                            repeat: [
                                "",
                                "x",
                                "y",
                                "round",
                                "space"
                            ]
                        }
                    ]
                }
            ],
            "bg-size": [
                {
                    bg: [
                        "auto",
                        "cover",
                        "contain",
                        z
                    ]
                }
            ],
            "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            "gradient-to": [
                                "t",
                                "tr",
                                "r",
                                "br",
                                "b",
                                "bl",
                                "l",
                                "tl"
                            ]
                        },
                        C
                    ]
                }
            ],
            "bg-color": [
                {
                    bg: [
                        r
                    ]
                }
            ],
            "gradient-from": [
                {
                    from: [
                        b
                    ]
                }
            ],
            "gradient-via": [
                {
                    via: [
                        b
                    ]
                }
            ],
            "gradient-to": [
                {
                    to: [
                        b
                    ]
                }
            ],
            rounded: [
                {
                    rounded: [
                        i
                    ]
                }
            ],
            "rounded-t": [
                {
                    "rounded-t": [
                        i
                    ]
                }
            ],
            "rounded-r": [
                {
                    "rounded-r": [
                        i
                    ]
                }
            ],
            "rounded-b": [
                {
                    "rounded-b": [
                        i
                    ]
                }
            ],
            "rounded-l": [
                {
                    "rounded-l": [
                        i
                    ]
                }
            ],
            "rounded-tl": [
                {
                    "rounded-tl": [
                        i
                    ]
                }
            ],
            "rounded-tr": [
                {
                    "rounded-tr": [
                        i
                    ]
                }
            ],
            "rounded-br": [
                {
                    "rounded-br": [
                        i
                    ]
                }
            ],
            "rounded-bl": [
                {
                    "rounded-bl": [
                        i
                    ]
                }
            ],
            "border-w": [
                {
                    border: [
                        l
                    ]
                }
            ],
            "border-w-x": [
                {
                    "border-x": [
                        l
                    ]
                }
            ],
            "border-w-y": [
                {
                    "border-y": [
                        l
                    ]
                }
            ],
            "border-w-t": [
                {
                    "border-t": [
                        l
                    ]
                }
            ],
            "border-w-r": [
                {
                    "border-r": [
                        l
                    ]
                }
            ],
            "border-w-b": [
                {
                    "border-b": [
                        l
                    ]
                }
            ],
            "border-w-l": [
                {
                    "border-l": [
                        l
                    ]
                }
            ],
            "border-opacity": [
                {
                    "border-opacity": [
                        v
                    ]
                }
            ],
            "border-style": [
                {
                    border: [].concat([
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ], [
                        "hidden"
                    ])
                }
            ],
            "divide-x": [
                {
                    "divide-x": [
                        l
                    ]
                }
            ],
            "divide-x-reverse": [
                "divide-x-reverse"
            ],
            "divide-y": [
                {
                    "divide-y": [
                        l
                    ]
                }
            ],
            "divide-y-reverse": [
                "divide-y-reverse"
            ],
            "divide-opacity": [
                {
                    "divide-opacity": [
                        v
                    ]
                }
            ],
            "divide-style": [
                {
                    divide: [
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ]
                }
            ],
            "border-color": [
                {
                    border: [
                        n
                    ]
                }
            ],
            "border-color-x": [
                {
                    "border-x": [
                        n
                    ]
                }
            ],
            "border-color-y": [
                {
                    "border-y": [
                        n
                    ]
                }
            ],
            "border-color-t": [
                {
                    "border-t": [
                        n
                    ]
                }
            ],
            "border-color-r": [
                {
                    "border-r": [
                        n
                    ]
                }
            ],
            "border-color-b": [
                {
                    "border-b": [
                        n
                    ]
                }
            ],
            "border-color-l": [
                {
                    "border-l": [
                        n
                    ]
                }
            ],
            "divide-color": [
                {
                    divide: [
                        n
                    ]
                }
            ],
            "outline-style": [
                {
                    outline: [
                        ""
                    ].concat([
                        "solid",
                        "dashed",
                        "dotted",
                        "double",
                        "none"
                    ])
                }
            ],
            "outline-offset": [
                {
                    "outline-offset": [
                        w
                    ]
                }
            ],
            "outline-w": [
                {
                    outline: [
                        w
                    ]
                }
            ],
            "outline-color": [
                {
                    outline: [
                        r
                    ]
                }
            ],
            "ring-w": [
                {
                    ring: _()
                }
            ],
            "ring-w-inset": [
                "ring-inset"
            ],
            "ring-color": [
                {
                    ring: [
                        r
                    ]
                }
            ],
            "ring-opacity": [
                {
                    "ring-opacity": [
                        v
                    ]
                }
            ],
            "ring-offset-w": [
                {
                    "ring-offset": [
                        w
                    ]
                }
            ],
            "ring-offset-color": [
                {
                    "ring-offset": [
                        r
                    ]
                }
            ],
            shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        M,
                        O
                    ]
                }
            ],
            "shadow-color": [
                {
                    shadow: [
                        A
                    ]
                }
            ],
            opacity: [
                {
                    opacity: [
                        v
                    ]
                }
            ],
            "mix-blend": [
                {
                    "mix-blend": [
                        "normal",
                        "multiply",
                        "screen",
                        "overlay",
                        "darken",
                        "lighten",
                        "color-dodge",
                        "color-burn",
                        "hard-light",
                        "soft-light",
                        "difference",
                        "exclusion",
                        "hue",
                        "saturation",
                        "color",
                        "luminosity",
                        "plus-lighter"
                    ]
                }
            ],
            "bg-blend": [
                {
                    "bg-blend": [
                        "normal",
                        "multiply",
                        "screen",
                        "overlay",
                        "darken",
                        "lighten",
                        "color-dodge",
                        "color-burn",
                        "hard-light",
                        "soft-light",
                        "difference",
                        "exclusion",
                        "hue",
                        "saturation",
                        "color",
                        "luminosity",
                        "plus-lighter"
                    ]
                }
            ],
            filter: [
                {
                    filter: [
                        "",
                        "none"
                    ]
                }
            ],
            blur: [
                {
                    blur: [
                        o
                    ]
                }
            ],
            brightness: [
                {
                    brightness: [
                        t
                    ]
                }
            ],
            contrast: [
                {
                    contrast: [
                        s
                    ]
                }
            ],
            "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        M,
                        N
                    ]
                }
            ],
            grayscale: [
                {
                    grayscale: [
                        c
                    ]
                }
            ],
            "hue-rotate": [
                {
                    "hue-rotate": [
                        d
                    ]
                }
            ],
            invert: [
                {
                    invert: [
                        u
                    ]
                }
            ],
            saturate: [
                {
                    saturate: [
                        y
                    ]
                }
            ],
            sepia: [
                {
                    sepia: [
                        S
                    ]
                }
            ],
            "backdrop-filter": [
                {
                    "backdrop-filter": [
                        "",
                        "none"
                    ]
                }
            ],
            "backdrop-blur": [
                {
                    "backdrop-blur": [
                        o
                    ]
                }
            ],
            "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        t
                    ]
                }
            ],
            "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        s
                    ]
                }
            ],
            "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        c
                    ]
                }
            ],
            "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        d
                    ]
                }
            ],
            "backdrop-invert": [
                {
                    "backdrop-invert": [
                        u
                    ]
                }
            ],
            "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        v
                    ]
                }
            ],
            "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        y
                    ]
                }
            ],
            "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        S
                    ]
                }
            ],
            "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            "border-spacing": [
                {
                    "border-spacing": [
                        a
                    ]
                }
            ],
            "border-spacing-x": [
                {
                    "border-spacing-x": [
                        a
                    ]
                }
            ],
            "border-spacing-y": [
                {
                    "border-spacing-y": [
                        a
                    ]
                }
            ],
            "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            transition: [
                {
                    transition: [
                        "none",
                        "all",
                        "",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        N
                    ]
                }
            ],
            duration: [
                {
                    duration: [
                        I
                    ]
                }
            ],
            ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        N
                    ]
                }
            ],
            delay: [
                {
                    delay: [
                        I
                    ]
                }
            ],
            animate: [
                {
                    animate: [
                        "none",
                        "spin",
                        "ping",
                        "pulse",
                        "bounce",
                        N
                    ]
                }
            ],
            transform: [
                {
                    transform: [
                        "",
                        "gpu",
                        "none"
                    ]
                }
            ],
            scale: [
                {
                    scale: [
                        x
                    ]
                }
            ],
            "scale-x": [
                {
                    "scale-x": [
                        x
                    ]
                }
            ],
            "scale-y": [
                {
                    "scale-y": [
                        x
                    ]
                }
            ],
            rotate: [
                {
                    rotate: [
                        I,
                        N
                    ]
                }
            ],
            "translate-x": [
                {
                    "translate-x": [
                        T
                    ]
                }
            ],
            "translate-y": [
                {
                    "translate-y": [
                        T
                    ]
                }
            ],
            "skew-x": [
                {
                    "skew-x": [
                        P
                    ]
                }
            ],
            "skew-y": [
                {
                    "skew-y": [
                        P
                    ]
                }
            ],
            "transform-origin": [
                {
                    origin: [
                        "center",
                        "top",
                        "top-right",
                        "right",
                        "bottom-right",
                        "bottom",
                        "bottom-left",
                        "left",
                        "top-left",
                        N
                    ]
                }
            ],
            accent: [
                {
                    accent: [
                        "auto",
                        r
                    ]
                }
            ],
            appearance: [
                "appearance-none"
            ],
            cursor: [
                {
                    cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        N
                    ]
                }
            ],
            "caret-color": [
                {
                    caret: [
                        r
                    ]
                }
            ],
            "pointer-events": [
                {
                    "pointer-events": [
                        "none",
                        "auto"
                    ]
                }
            ],
            resize: [
                {
                    resize: [
                        "none",
                        "y",
                        "x",
                        ""
                    ]
                }
            ],
            "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            "scroll-m": [
                {
                    "scroll-m": [
                        e
                    ]
                }
            ],
            "scroll-mx": [
                {
                    "scroll-mx": [
                        e
                    ]
                }
            ],
            "scroll-my": [
                {
                    "scroll-my": [
                        e
                    ]
                }
            ],
            "scroll-mt": [
                {
                    "scroll-mt": [
                        e
                    ]
                }
            ],
            "scroll-mr": [
                {
                    "scroll-mr": [
                        e
                    ]
                }
            ],
            "scroll-mb": [
                {
                    "scroll-mb": [
                        e
                    ]
                }
            ],
            "scroll-ml": [
                {
                    "scroll-ml": [
                        e
                    ]
                }
            ],
            "scroll-p": [
                {
                    "scroll-p": [
                        e
                    ]
                }
            ],
            "scroll-px": [
                {
                    "scroll-px": [
                        e
                    ]
                }
            ],
            "scroll-py": [
                {
                    "scroll-py": [
                        e
                    ]
                }
            ],
            "scroll-pt": [
                {
                    "scroll-pt": [
                        e
                    ]
                }
            ],
            "scroll-pr": [
                {
                    "scroll-pr": [
                        e
                    ]
                }
            ],
            "scroll-pb": [
                {
                    "scroll-pb": [
                        e
                    ]
                }
            ],
            "scroll-pl": [
                {
                    "scroll-pl": [
                        e
                    ]
                }
            ],
            "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "pinch-zoom",
                        "manipulation",
                        {
                            pan: [
                                "x",
                                "left",
                                "right",
                                "y",
                                "up",
                                "down"
                            ]
                        }
                    ]
                }
            ],
            select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        N
                    ]
                }
            ],
            fill: [
                {
                    fill: [
                        r,
                        "none"
                    ]
                }
            ],
            "stroke-w": [
                {
                    stroke: [
                        w,
                        G
                    ]
                }
            ],
            stroke: [
                {
                    stroke: [
                        r,
                        "none"
                    ]
                }
            ],
            sr: [
                "sr-only",
                "not-sr-only"
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            "col-start-end": [
                "col-start",
                "col-end"
            ],
            "row-start-end": [
                "row-start",
                "row-end"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
            rounded: [
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ]
        }
    };
}
var W = b(P);
function T(r, e) {
    for(var o in e)R(r, o, e[o]);
    return r;
}
var E = Object.prototype.hasOwnProperty, _ = new Set([
    "string",
    "number",
    "boolean"
]);
function R(r, e, o) {
    if (E.call(r, e) && !_.has(typeof o) && null !== o) {
        if (Array.isArray(o) && Array.isArray(r[e])) r[e] = r[e].concat(o);
        else if ("object" == typeof o && "object" == typeof r[e]) {
            if (null === r[e]) return void (r[e] = o);
            for(var t in o)R(r[e], t, o[t]);
        }
    } else r[e] = o;
}
var $ = r;
__webpack_unused_export__ = b, __webpack_unused_export__ = function(r) {
    for(var e = arguments.length, o = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)o[t - 1] = arguments[t];
    return b.apply(void 0, "function" == typeof r ? [
        P,
        r
    ].concat(o) : [
        function() {
            return T(P(), r);
        }
    ].concat(o));
}, __webpack_unused_export__ = f, __webpack_unused_export__ = P, __webpack_unused_export__ = $, __webpack_unused_export__ = T, __webpack_unused_export__ = r, exports.m6 = W, __webpack_unused_export__ = S; //# sourceMappingURL=tailwind-merge.cjs.production.min.js.map


/***/ }),

/***/ 26199:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(11751);
var _normalizeTrailingSlash = __webpack_require__(74830);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 66723:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(74830);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 30605:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FLIGHT_PARAMETERS = exports.RSC_VARY_HEADER = exports.RSC_CONTENT_TYPE_HEADER = exports.FETCH_CACHE_HEADER = exports.NEXT_ROUTER_PREFETCH = exports.NEXT_ROUTER_STATE_TREE = exports.ACTION = exports.RSC = void 0;
const RSC = "RSC";
exports.RSC = RSC;
const ACTION = "Action";
exports.ACTION = ACTION;
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
exports.NEXT_ROUTER_STATE_TREE = NEXT_ROUTER_STATE_TREE;
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
exports.NEXT_ROUTER_PREFETCH = NEXT_ROUTER_PREFETCH;
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
exports.FETCH_CACHE_HEADER = FETCH_CACHE_HEADER;
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
exports.RSC_CONTENT_TYPE_HEADER = RSC_CONTENT_TYPE_HEADER;
const RSC_VARY_HEADER = `${RSC}, ${NEXT_ROUTER_STATE_TREE}, ${NEXT_ROUTER_PREFETCH}`;
exports.RSC_VARY_HEADER = RSC_VARY_HEADER;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
exports.FLIGHT_PARAMETERS = FLIGHT_PARAMETERS;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 36359:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = AppRouter;
exports.urlToUrlWithoutFlightMarker = urlToUrlWithoutFlightMarker;
var _async_to_generator = (__webpack_require__(87344)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(85460)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(21987)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(18038));
var _appRouterContext = __webpack_require__(3280);
var _routerReducer = __webpack_require__(11468);
var _routerReducerTypes = __webpack_require__(20208);
var _createHrefFromUrl = __webpack_require__(85364);
var _hooksClientContext = __webpack_require__(69274);
var _useReducerWithDevtools = __webpack_require__(93241);
var _errorBoundary = __webpack_require__(44815);
var _createInitialRouterState = __webpack_require__(14166);
var _fetchServerResponse = __webpack_require__(77937);
var _isBot = __webpack_require__(1897);
var _addBasePath = __webpack_require__(26199);
function AppRouter(props) {
    const { globalErrorComponent  } = props, rest = _object_without_properties_loose(props, [
        "globalErrorComponent"
    ]);
    return /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, Object.assign({}, rest)));
}
const isServer = "undefined" === "undefined";
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes = isServer ? null : new Map();
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    // TODO-APP: handle .rsc for static export case
    return urlWithoutFlightParameters;
}
const HotReloader =  true ? null : 0;
const prefetched = new Set();
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
/**
 * The global router that wraps the application components.
 */ function Router({ initialHead , initialTree , initialCanonicalUrl , children , assetPrefix  }) {
    const initialState = (0, _react).useMemo(()=>(0, _createInitialRouterState).createInitialRouterState({
            children,
            initialCanonicalUrl,
            initialTree,
            initialParallelRoutes,
            isServer,
            location: !isServer ? window.location : null,
            initialHead
        }), [
        children,
        initialCanonicalUrl,
        initialTree,
        initialHead
    ]);
    const [{ tree , cache , prefetchCache , pushRef , focusAndScrollRef , canonicalUrl  }, dispatch, sync] = (0, _useReducerWithDevtools).useReducerWithReduxDevtools(_routerReducer.reducer, initialState);
    (0, _react).useEffect(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams , pathname  } = (0, _react).useMemo(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    /**
   * Server response that only patches the cache and tree.
   */ const changeByServerResponse = (0, _react).useCallback((previousTree, flightData, overrideCanonicalUrl)=>{
        dispatch({
            type: _routerReducerTypes.ACTION_SERVER_PATCH,
            flightData,
            previousTree,
            overrideCanonicalUrl,
            cache: {
                status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                data: null,
                subTreeData: null,
                parallelRoutes: new Map()
            },
            mutable: {}
        });
    }, [
        dispatch
    ]);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react).useMemo(()=>{
        const navigate = (href, navigateType, forceOptimisticNavigation)=>{
            const url = new URL((0, _addBasePath).addBasePath(href), location.origin);
            return dispatch({
                type: _routerReducerTypes.ACTION_NAVIGATE,
                url,
                isExternalUrl: isExternalURL(url),
                locationSearch: location.search,
                forceOptimisticNavigation,
                navigateType,
                cache: {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                },
                mutable: {}
            });
        };
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: _async_to_generator(function*(href) {
                const hrefWithBasePath = (0, _addBasePath).addBasePath(href);
                // If prefetch has already been triggered, don't trigger it again.
                if (prefetched.has(hrefWithBasePath) ||  false && 0) {
                    return;
                }
                prefetched.add(hrefWithBasePath);
                const url = new URL(hrefWithBasePath, location.origin);
                // External urls can't be prefetched in the same way.
                if (isExternalURL(url)) {
                    return;
                }
                try {
                    var ref;
                    const routerTree = ((ref = window.history.state) == null ? void 0 : ref.tree) || initialTree;
                    const serverResponse = yield (0, _fetchServerResponse).fetchServerResponse(url, routerTree, true);
                    // @ts-ignore startTransition exists
                    _react.default.startTransition(()=>{
                        dispatch({
                            type: _routerReducerTypes.ACTION_PREFETCH,
                            url,
                            tree: routerTree,
                            serverResponse
                        });
                    });
                } catch (err) {
                    console.error("PREFETCH ERROR", err);
                }
            }),
            replace: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation));
                });
            },
            push: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation));
                });
            },
            refresh: ()=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    dispatch({
                        type: _routerReducerTypes.ACTION_REFRESH,
                        cache: {
                            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                            data: null,
                            subTreeData: null,
                            parallelRoutes: new Map()
                        },
                        mutable: {},
                        origin: window.location.origin
                    });
                });
            }
        };
        return routerInstance;
    }, [
        dispatch,
        initialTree
    ]);
    (0, _react).useEffect(()=>{
        // When mpaNavigation flag is set do a hard navigation to the new url.
        if (pushRef.mpaNavigation) {
            const location1 = window.location;
            if (pushRef.pendingPush) {
                location1.assign(canonicalUrl);
            } else {
                location1.replace(canonicalUrl);
            }
            return;
        }
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _createHrefFromUrl).createHrefFromUrl(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    // Add `window.nd` for debugging purposes.
    // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
    if (false) {}
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react).useCallback(({ state  })=>{
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        _react.default.startTransition(()=>{
            dispatch({
                type: _routerReducerTypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react).useEffect(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const content = /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, cache.subTreeData);
    return /*#__PURE__*/ _react.default.createElement(_hooksClientContext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksClientContext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.GlobalLayoutRouterContext.Provider, {
        value: {
            changeByServerResponse,
            tree,
            focusAndScrollRef
        }
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl,
            headRenderedAboveThisLevel: false
        }
    }, HotReloader ? /*#__PURE__*/ _react.default.createElement(HotReloader, {
        assetPrefix: assetPrefix
    }, content) : content)))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 33408:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createAsyncLocalStorage = createAsyncLocalStorage;
class FakeAsyncLocalStorage {
    disable() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    exit() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
    enterWith() {
        throw new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    }
}
function createAsyncLocalStorage() {
    if (globalThis.AsyncLocalStorage) {
        return new globalThis.AsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-local-storage.js.map


/***/ }),

/***/ 7689:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __webpack_require__(45407);
var _staticGenerationAsyncStorage = __webpack_require__(38238);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 56140:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.clientHookInServerComponentError = clientHookInServerComponentError;
var _interop_require_default = (__webpack_require__(28868)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(18038));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 44815:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = GlobalError;
exports.ErrorBoundary = ErrorBoundary;
var _interop_require_default = (__webpack_require__(28868)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(18038));
function GlobalError({ error  }) {
    return /*#__PURE__*/ _react.default.createElement("html", null, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a client-side exception has occurred (see the browser console for more information)."), (error == null ? void 0 : error.digest) && /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, `Digest: ${error.digest}`)))));
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        textAlign: "left"
    },
    text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "3em",
        margin: 0
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null
        };
    }
}
exports.ErrorBoundaryHandler = ErrorBoundaryHandler;
function ErrorBoundary({ errorComponent , errorStyles , children  }) {
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 64978:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInfinitePromise = createInfinitePromise;
/**
 * Used to cache in createInfinitePromise
 */ let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 57446:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = OuterLayoutRouter;
exports.InnerLayoutRouter = InnerLayoutRouter;
var _extends = (__webpack_require__(39827)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(28868)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(85460)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(18038));
var _reactDom = _interop_require_default(__webpack_require__(98704));
var _appRouterContext = __webpack_require__(3280);
var _fetchServerResponse = __webpack_require__(77937);
var _infinitePromise = __webpack_require__(64978);
var _errorBoundary = __webpack_require__(44815);
var _matchSegments = __webpack_require__(74363);
var _navigation = __webpack_require__(32045);
var _handleSmoothScroll = __webpack_require__(21668);
var _redirect = __webpack_require__(3846);
var _findHeadInCache = __webpack_require__(24861);
function OuterLayoutRouter({ parallelRouterKey , segmentPath , childProp , error , errorStyles , templateStyles , loading , loadingStyles , hasLoading , template , notFound , notFoundStyles  }) {
    const context = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes , tree , url , headRenderedAboveThisLevel  } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodes.set(parallelRouterKey, new Map());
        childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = Array.isArray(childProp.segment) ? childProp.segment[1] : childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegment = Array.isArray(treeSegment) ? treeSegment[1] : treeSegment;
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        currentChildSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, preservedSegments.map((preservedSegment)=>{
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_appRouterContext.TemplateContext.Provider, {
            key: preservedSegment,
            value: /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: childPropSegment === preservedSegment ? childProp : null,
                segmentPath: segmentPath,
                path: preservedSegment,
                isActive: currentChildSegment === preservedSegment,
                headRenderedAboveThisLevel: headRenderedAboveThisLevel
            })))))
        }, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, templateStyles, template)));
    }));
}
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchSegments).matchSegment(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        _extends({}, treeToRecreate[1], {
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        })
                    ];
                }
                return [
                    treeToRecreate[0],
                    _extends({}, treeToRecreate[1], {
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    })
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (false) {}
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactDom.default.findDOMNode(instance);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
class ScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
        const { focusAndScrollRef  } = this.props;
        // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
        // This already caused a bug where the first child was a <link/> in head.
        const domNode = findDOMNode(this);
        if (focusAndScrollRef.apply && domNode instanceof HTMLElement) {
            // State is mutated to ensure that the focus and scroll is applied only once.
            focusAndScrollRef.apply = false;
            (0, _handleSmoothScroll).handleSmoothScroll(()=>{
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                // If the element's top edge is already in the viewport, exit early.
                if (topOfElementInViewport(domNode, viewportHeight)) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (!topOfElementInViewport(domNode, viewportHeight)) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true
            });
            // Set focus on the element
            domNode.focus();
        }
    }
    render() {
        return this.props.children;
    }
}
function InnerLayoutRouter({ parallelRouterKey , url , childNodes , childProp , segmentPath , tree , // isActive,
path , headRenderedAboveThisLevel  }) {
    const context = (0, _react).useContext(_appRouterContext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { changeByServerResponse , tree: fullTree , focusAndScrollRef  } = context;
    const head = (0, _react).useMemo(()=>{
        if (headRenderedAboveThisLevel) {
            return null;
        }
        return (0, _findHeadInCache).findHeadInCache(childNodes, tree[1]);
    }, [
        childNodes,
        tree,
        headRenderedAboveThisLevel
    ]);
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(path);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.status = _appRouterContext.CacheStates.READY;
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.subTreeData = childProp.current;
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
        } else {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNodes.set(path, {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            });
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
            // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
            childNode = childNodes.get(path);
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(path, {
            status: _appRouterContext.CacheStates.DATA_FETCH,
            data: (0, _fetchServerResponse).fetchServerResponse(new URL(url, location.origin), refetchTree),
            subTreeData: null,
            head: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        });
        // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
        childNode = childNodes.get(path);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react).use(childNode.data);
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            window.location.href = url;
            return null;
        }
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            // @ts-ignore startTransition exists
            _react.default.startTransition(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            headRenderedAboveThisLevel: true
        }
    }, head, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
        focusAndScrollRef: focusAndScrollRef
    }, subtree);
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ children , loading , loadingStyles , hasLoading  }) {
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function HandleRedirect({ redirect  }) {
    const router = (0, _navigation).useRouter();
    (0, _react).useEffect(()=>{
        router.replace(redirect, {});
    }, [
        redirect,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirect).isRedirectError(error)) {
            const url = (0, _redirect).getURLFromRedirectError(error);
            return {
                redirect: url
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const redirect = this.state.redirect;
        if (redirect !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        };
    }
}
function RedirectBoundary({ children  }) {
    const router = (0, _navigation).useRouter();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: false
        };
    }
}
function NotFoundBoundary({ notFound , notFoundStyles , children  }) {
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        notFound: notFound,
        notFoundStyles: notFoundStyles
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 74363:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.matchSegment = void 0;
const matchSegment = (existingSegment, segment)=>{
    // Common case: segment is just a string
    if (typeof existingSegment === "string" && typeof segment === "string") {
        return existingSegment === segment;
    }
    // Dynamic parameter case: segment is an array with param/value. Both param and value are compared.
    if (Array.isArray(existingSegment) && Array.isArray(segment)) {
        return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
    }
    return false;
};
exports.matchSegment = matchSegment;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 32045:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(18038);
var _appRouterContext = __webpack_require__(3280);
var _hooksClientContext = __webpack_require__(69274);
var _clientHookInServerComponentError = __webpack_require__(56140);
var _serverInsertedHtml = __webpack_require__(3349);
var _redirect = __webpack_require__(3846);
var _notFound = __webpack_require__(26577);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
exports.ReadonlyURLSearchParams = ReadonlyURLSearchParams;
function useSearchParams() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSearchParams");
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react).useMemo(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering  } = __webpack_require__(7689);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useRouter");
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegments");
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    (0, _clientHookInServerComponentError).clientHookInServerComponentError("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 26577:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.isNotFoundError = isNotFoundError;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 3846:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.isRedirectError = isRedirectError;
exports.getURLFromRedirectError = getURLFromRedirectError;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = `${REDIRECT_ERROR_CODE};${url}`;
    throw error;
}
function isRedirectError(error) {
    return typeof (error == null ? void 0 : error.digest) === "string" && error.digest.startsWith(REDIRECT_ERROR_CODE + ";") && error.digest.length > REDIRECT_ERROR_CODE.length + 1;
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.slice(REDIRECT_ERROR_CODE.length + 1);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 89357:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = RenderFromTemplateContext;
var _interop_require_wildcard = (__webpack_require__(85460)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(18038));
var _appRouterContext = __webpack_require__(3280);
function RenderFromTemplateContext() {
    const children = (0, _react).useContext(_appRouterContext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 93243:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.applyRouterStatePatchToTree = applyRouterStatePatchToTree;
var _extends = (__webpack_require__(39827)/* ["default"] */ .Z);
var _matchSegments = __webpack_require__(74363);
/**
 * Deep merge of the two router states. Parallel route keys are preserved if the patch doesn't have them.
 */ function applyPatch(initialTree, patchTree) {
    const [segment, parallelRoutes] = initialTree;
    if ((0, _matchSegments).matchSegment(segment, patchTree[0])) {
        const newParallelRoutes = {};
        for(const key in parallelRoutes){
            const isInPatchTreeParallelRoutes = typeof patchTree[1][key] !== "undefined";
            if (isInPatchTreeParallelRoutes) {
                newParallelRoutes[key] = applyPatch(parallelRoutes[key], patchTree[1][key]);
            } else {
                newParallelRoutes[key] = parallelRoutes[key];
            }
        }
        for(const key1 in patchTree[1]){
            if (newParallelRoutes[key1]) {
                continue;
            }
            newParallelRoutes[key1] = patchTree[1][key1];
        }
        const tree = [
            segment,
            newParallelRoutes
        ];
        if (initialTree[2]) {
            tree[2] = initialTree[2];
        }
        if (initialTree[3]) {
            tree[3] = initialTree[3];
        }
        if (initialTree[4]) {
            tree[4] = initialTree[4];
        }
        return tree;
    }
    return patchTree;
}
function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = applyPatch(flightRouterState, treePatch);
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = treePatch;
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree = [
        flightSegmentPath[0],
        _extends({}, parallelRoutes, {
            [parallelRouteKey]: parallelRoutePatch
        })
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree[4] = true;
    }
    return tree;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=apply-router-state-patch-to-tree.js.map


/***/ }),

/***/ 85364:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createHrefFromUrl = createHrefFromUrl;
function createHrefFromUrl(url) {
    return url.pathname + url.search + url.hash;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map


/***/ }),

/***/ 14166:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInitialRouterState = createInitialRouterState;
var _appRouterContext = __webpack_require__(3280);
var _createHrefFromUrl = __webpack_require__(85364);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(93166);
function createInitialRouterState({ initialTree , children , initialCanonicalUrl , initialParallelRoutes , isServer , location , initialHead  }) {
    const cache = {
        status: _appRouterContext.CacheStates.READY,
        data: null,
        subTreeData: children,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: isServer ? new Map() : initialParallelRoutes
    };
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(cache, undefined, initialTree, initialHead);
    }
    return {
        tree: initialTree,
        cache,
        prefetchCache: new Map(),
        pushRef: {
            pendingPush: false,
            mpaNavigation: false
        },
        focusAndScrollRef: {
            apply: false
        },
        canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
        location ? (0, _createHrefFromUrl).createHrefFromUrl(location) : initialCanonicalUrl
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map


/***/ }),

/***/ 5185:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createOptimisticTree = createOptimisticTree;
var _extends = (__webpack_require__(39827)/* ["default"] */ .Z);
var _matchSegments = __webpack_require__(74363);
function createOptimisticTree(segments, flightRouterState, parentRefetch) {
    const [existingSegment, existingParallelRoutes, url, refresh, isRootLayout] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchSegments).matchSegment(existingSegment, segment);
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    if (!isLastSegment) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        _extends({}, parallelRoutes, childTree ? {
            children: childTree
        } : {})
    ];
    if (url) {
        result[2] = url;
    }
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    } else if (segmentMatches && refresh) {
        result[3] = refresh;
    }
    if (segmentMatches && isRootLayout) {
        result[4] = isRootLayout;
    }
    return result;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-optimistic-tree.js.map


/***/ }),

/***/ 9173:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createRecordFromThenable = createRecordFromThenable;
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-record-from-thenable.js.map


/***/ }),

/***/ 77937:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fetchServerResponse = fetchServerResponse;
var _async_to_generator = (__webpack_require__(87344)/* ["default"] */ .Z);
var _client = __webpack_require__(97897);
var _appRouterHeaders = __webpack_require__(30605);
var _appRouter = __webpack_require__(36359);
function fetchServerResponse(url, flightRouterState, prefetch) {
    return _fetchServerResponse.apply(this, arguments);
}
function _fetchServerResponse() {
    _fetchServerResponse = _async_to_generator(function*(url, flightRouterState, prefetch) {
        const headers = {
            // Enable flight response
            [_appRouterHeaders.RSC]: "1",
            // Provide the current router state
            [_appRouterHeaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(flightRouterState)
        };
        if (prefetch) {
            // Enable prefetch response
            headers[_appRouterHeaders.NEXT_ROUTER_PREFETCH] = "1";
        }
        const res = yield fetch(url.toString(), {
            // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
            credentials: "same-origin",
            headers
        });
        const canonicalUrl = res.redirected ? (0, _appRouter).urlToUrlWithoutFlightMarker(res.url) : undefined;
        const isFlightResponse = res.headers.get("content-type") === _appRouterHeaders.RSC_CONTENT_TYPE_HEADER;
        // If fetch returns something different than flight response handle it like a mpa navigation
        if (!isFlightResponse) {
            return [
                res.url,
                undefined
            ];
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const flightData = yield (0, _client).createFromFetch(Promise.resolve(res));
        return [
            flightData,
            canonicalUrl
        ];
    });
    return _fetchServerResponse.apply(this, arguments);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map


/***/ }),

/***/ 26409:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillCacheWithDataProperty = fillCacheWithDataProperty;
var _appRouterContext = __webpack_require__(3280);
function fillCacheWithDataProperty(newCache, existingCache, segments, fetchResponse) {
    const isLastEntry = segments.length === 1;
    const parallelRouteKey = "children";
    const [segment] = segments;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segment);
    let childCacheNode = childSegmentMap.get(segment);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segment, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, segments.slice(1), fetchResponse);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-data-property.js.map


/***/ }),

/***/ 52356:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillCacheWithNewSubTreeData = fillCacheWithNewSubTreeData;
var _appRouterContext = __webpack_require__(3280);
var _invalidateCacheByRouterState = __webpack_require__(94435);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(93166);
function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                (0, _invalidateCacheByRouterState).invalidateCacheByRouterState(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4]);
            childSegmentMap.set(segmentForCache, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-cache-with-new-subtree-data.js.map


/***/ }),

/***/ 93166:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fillLazyItemsTillLeafWithHead = fillLazyItemsTillLeafWithHead;
var _appRouterContext = __webpack_require__(3280);
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                parallelRouteCacheNode.delete(cacheKey);
                const newCacheNode = {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map


/***/ }),

/***/ 58879:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.invalidateCacheBelowFlightSegmentPath = invalidateCacheBelowFlightSegmentPath;
function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(segmentForCache);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-below-flight-segmentpath.js.map


/***/ }),

/***/ 94435:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.invalidateCacheByRouterState = invalidateCacheByRouterState;
function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=invalidate-cache-by-router-state.js.map


/***/ }),

/***/ 65469:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isNavigatingToNewRootLayout = isNavigatingToNewRootLayout;
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-navigating-to-new-root-layout.js.map


/***/ }),

/***/ 87888:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.readRecordValue = readRecordValue;
function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=read-record-value.js.map


/***/ }),

/***/ 24861:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.findHeadInCache = findHeadInCache;
function findHeadInCache(childSegmentMap, parallelRoutes) {
    if (!childSegmentMap) {
        return undefined;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const isLastItem = Object.keys(childParallelRoutes).length === 0;
        const cacheKey = Array.isArray(segment) ? segment[1] : segment;
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        if (isLastItem && cacheNode.head) return cacheNode.head;
        const segmentMap = cacheNode.parallelRoutes.get(key);
        if (segmentMap) {
            const item = findHeadInCache(segmentMap, childParallelRoutes);
            if (item) {
                return item;
            }
        }
    }
    return undefined;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map


/***/ }),

/***/ 57963:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleMutable = handleMutable;
exports.applyFlightData = applyFlightData;
exports.handleExternalUrl = handleExternalUrl;
exports.navigateReducer = navigateReducer;
var _appRouterContext = __webpack_require__(3280);
var _fetchServerResponse = __webpack_require__(77937);
var _createRecordFromThenable = __webpack_require__(9173);
var _readRecordValue = __webpack_require__(87888);
var _createHrefFromUrl = __webpack_require__(85364);
var _fillLazyItemsTillLeafWithHead = __webpack_require__(93166);
var _fillCacheWithNewSubtreeData = __webpack_require__(52356);
var _invalidateCacheBelowFlightSegmentpath = __webpack_require__(58879);
var _fillCacheWithDataProperty = __webpack_require__(26409);
var _createOptimisticTree = __webpack_require__(5185);
var _applyRouterStatePatchToTree = __webpack_require__(93243);
var _shouldHardNavigate = __webpack_require__(26684);
var _isNavigatingToNewRootLayout = __webpack_require__(65469);
function handleMutable(state, mutable) {
    return {
        // Set href.
        canonicalUrl: typeof mutable.canonicalUrl !== "undefined" ? mutable.canonicalUrl === state.canonicalUrl ? state.canonicalUrl : mutable.canonicalUrl : state.canonicalUrl,
        pushRef: {
            pendingPush: typeof mutable.pendingPush !== "undefined" ? mutable.pendingPush : state.pushRef.pendingPush,
            mpaNavigation: typeof mutable.mpaNavigation !== "undefined" ? mutable.mpaNavigation : state.pushRef.mpaNavigation
        },
        // All navigation requires scroll and focus management to trigger.
        focusAndScrollRef: {
            apply: typeof mutable.applyFocusAndScroll !== "undefined" ? mutable.applyFocusAndScroll : state.focusAndScrollRef.apply
        },
        // Apply cache.
        cache: mutable.cache ? mutable.cache : state.cache,
        prefetchCache: state.prefetchCache,
        // Apply patched router state.
        tree: typeof mutable.patchedTree !== "undefined" ? mutable.patchedTree : state.tree
    };
}
function applyFlightData(state, cache, flightDataPath) {
    // The one before last item is the router state tree patch
    const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
    // Handles case where prefetch only returns the router tree patch without rendered components.
    if (subTreeData === null) {
        return false;
    }
    if (flightDataPath.length === 3) {
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = subTreeData;
        (0, _fillLazyItemsTillLeafWithHead).fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
    } else {
        // Copy subTreeData for the root node of the cache.
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = state.cache.subTreeData;
        // Create a copy of the existing cache with the subTreeData applied.
        (0, _fillCacheWithNewSubtreeData).fillCacheWithNewSubTreeData(cache, state.cache, flightDataPath);
    }
    return true;
}
function handleExternalUrl(state, mutable, url, pendingPush) {
    mutable.previousTree = state.tree;
    mutable.mpaNavigation = true;
    mutable.canonicalUrl = url;
    mutable.pendingPush = pendingPush;
    mutable.applyFocusAndScroll = false;
    return handleMutable(state, mutable);
}
function navigateReducer(state, action) {
    const { url , isExternalUrl , locationSearch , navigateType , cache , mutable , forceOptimisticNavigation  } = action;
    const { pathname , search  } = url;
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    const pendingPush = navigateType === "push";
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return handleMutable(state, mutable);
    }
    if (isExternalUrl) {
        return handleExternalUrl(state, mutable, url.toString(), pendingPush);
    }
    const prefetchValues = state.prefetchCache.get(href);
    if (prefetchValues) {
        // The one before last item is the router state tree patch
        const { flightData , tree: newTree , canonicalUrlOverride  } = prefetchValues;
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            return handleExternalUrl(state, mutable, flightData, pendingPush);
        }
        if (newTree !== null) {
            if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
                return handleExternalUrl(state, mutable, href, pendingPush);
            }
            // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
            const flightDataPath = flightData[0];
            const flightSegmentPath = flightDataPath.slice(0, -3);
            const applied = applyFlightData(state, cache, flightDataPath);
            const hardNavigate = search !== locationSearch || (0, _shouldHardNavigate).shouldHardNavigate([
                "",
                ...flightSegmentPath
            ], state.tree);
            if (hardNavigate) {
                cache.status = _appRouterContext.CacheStates.READY;
                // Copy subTreeData for the root node of the cache.
                cache.subTreeData = state.cache.subTreeData;
                (0, _invalidateCacheBelowFlightSegmentpath).invalidateCacheBelowFlightSegmentPath(cache, state.cache, flightSegmentPath);
                // Ensure the existing cache value is used when the cache was not invalidated.
                mutable.cache = cache;
            } else if (applied) {
                mutable.cache = cache;
            }
            mutable.previousTree = state.tree;
            mutable.patchedTree = newTree;
            mutable.applyFocusAndScroll = true;
            mutable.canonicalUrl = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : href;
            mutable.pendingPush = pendingPush;
            return handleMutable(state, mutable);
        }
    }
    // When doing a hard push there can be two cases: with optimistic tree and without
    // The with optimistic tree case only happens when the layouts have a loading state (loading.js)
    // The without optimistic tree case happens when there is no loading state, in that case we suspend in this reducer
    // forceOptimisticNavigation is used for links that have `prefetch={false}`.
    if (forceOptimisticNavigation) {
        const segments = pathname.split("/");
        // TODO-APP: figure out something better for index pages
        segments.push("");
        // Optimistic tree case.
        // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
        const optimisticTree = (0, _createOptimisticTree).createOptimisticTree(segments, state.tree, false);
        // Copy subTreeData for the root node of the cache.
        cache.status = _appRouterContext.CacheStates.READY;
        cache.subTreeData = state.cache.subTreeData;
        // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
        // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
        const res = (0, _fillCacheWithDataProperty).fillCacheWithDataProperty(cache, state.cache, segments.slice(1), ()=>(0, _fetchServerResponse).fetchServerResponse(url, optimisticTree));
        // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
        if (!(res == null ? void 0 : res.bailOptimistic)) {
            mutable.previousTree = state.tree;
            mutable.patchedTree = optimisticTree;
            mutable.pendingPush = pendingPush;
            mutable.applyFocusAndScroll = true;
            mutable.cache = cache;
            mutable.canonicalUrl = href;
            return handleMutable(state, mutable);
        }
    }
    // Below is the not-optimistic case. Data is fetched at the root and suspended there without a suspense boundary.
    // If no in-flight fetch at the top, start it.
    if (!cache.data) {
        cache.data = (0, _createRecordFromThenable).createRecordFromThenable((0, _fetchServerResponse).fetchServerResponse(url, state.tree));
    }
    // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
    const [flightData, canonicalUrlOverride] = (0, _readRecordValue).readRecordValue(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return handleExternalUrl(state, mutable, flightData, pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // The one before last item is the router state tree patch
    const [treePatch] = flightDataPath.slice(-3, -2);
    // Path without the last segment, router state, and the subTreeData
    const flightSegmentPath = flightDataPath.slice(0, -4);
    // Create new tree based on the flightSegmentPath and router state patch
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return handleExternalUrl(state, mutable, href, pendingPush);
    }
    mutable.canonicalUrl = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : href;
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.applyFocusAndScroll = true;
    mutable.pendingPush = pendingPush;
    const applied = applyFlightData(state, cache, flightDataPath);
    if (applied) {
        mutable.cache = cache;
    }
    return handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigate-reducer.js.map


/***/ }),

/***/ 81161:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.prefetchReducer = prefetchReducer;
var _applyRouterStatePatchToTree = __webpack_require__(93243);
var _createHrefFromUrl = __webpack_require__(85364);
function prefetchReducer(state, action) {
    const { url , serverResponse  } = action;
    const [flightData, canonicalUrlOverride] = serverResponse;
    if (typeof flightData === "string") {
        return state;
    }
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // The one before last item is the router state tree patch
    const [treePatch] = flightDataPath.slice(-3);
    const flightSegmentPath = flightDataPath.slice(0, -3);
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    // Patch did not apply correctly
    if (newTree === null) {
        return state;
    }
    // Create new tree based on the flightSegmentPath and router state patch
    state.prefetchCache.set(href, {
        flightData,
        // Create new tree based on the flightSegmentPath and router state patch
        tree: newTree,
        canonicalUrlOverride
    });
    return state;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch-reducer.js.map


/***/ }),

/***/ 54316:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.refreshReducer = refreshReducer;
var _fetchServerResponse = __webpack_require__(77937);
var _createRecordFromThenable = __webpack_require__(9173);
var _readRecordValue = __webpack_require__(87888);
var _createHrefFromUrl = __webpack_require__(85364);
var _applyRouterStatePatchToTree = __webpack_require__(93243);
var _isNavigatingToNewRootLayout = __webpack_require__(65469);
var _navigateReducer = __webpack_require__(57963);
function refreshReducer(state, action) {
    const { cache , mutable , origin  } = action;
    const href = state.canonicalUrl;
    const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
    if (isForCurrentTree) {
        return (0, _navigateReducer).handleMutable(state, mutable);
    }
    if (!cache.data) {
        // TODO-APP: verify that `href` is not an external url.
        // Fetch data from the root of the tree.
        cache.data = (0, _createRecordFromThenable).createRecordFromThenable((0, _fetchServerResponse).fetchServerResponse(new URL(href, origin), [
            state.tree[0],
            state.tree[1],
            state.tree[2],
            "refetch"
        ]));
    }
    const [flightData, canonicalUrlOverride] = (0, _readRecordValue).readRecordValue(cache.data);
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // Remove cache.data as it has been resolved at this point.
    cache.data = null;
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // FlightDataPath with more than two items means unexpected Flight data was returned
    if (flightDataPath.length !== 3) {
        // TODO-APP: handle this case better
        console.log("REFRESH FAILED");
        return state;
    }
    // Given the path can only have two items the items are only the router state and subTreeData for the root.
    const [treePatch] = flightDataPath;
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        ""
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, href, state.pushRef.pendingPush);
    }
    const canonicalUrlOverrideHref = canonicalUrlOverride ? (0, _createHrefFromUrl).createHrefFromUrl(canonicalUrlOverride) : undefined;
    if (canonicalUrlOverride) {
        mutable.canonicalUrl = canonicalUrlOverrideHref;
    }
    const applied = (0, _navigateReducer).applyFlightData(state, cache, flightDataPath);
    if (applied) {
        mutable.cache = cache;
    }
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.canonicalUrl = href;
    return (0, _navigateReducer).handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=refresh-reducer.js.map


/***/ }),

/***/ 27464:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.restoreReducer = restoreReducer;
var _createHrefFromUrl = __webpack_require__(85364);
function restoreReducer(state, action) {
    const { url , tree  } = action;
    const href = (0, _createHrefFromUrl).createHrefFromUrl(url);
    return {
        // Set canonical url
        canonicalUrl: href,
        pushRef: state.pushRef,
        focusAndScrollRef: state.focusAndScrollRef,
        cache: state.cache,
        prefetchCache: state.prefetchCache,
        // Restore provided tree
        tree: tree
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=restore-reducer.js.map


/***/ }),

/***/ 39484:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.serverPatchReducer = serverPatchReducer;
var _createHrefFromUrl = __webpack_require__(85364);
var _applyRouterStatePatchToTree = __webpack_require__(93243);
var _isNavigatingToNewRootLayout = __webpack_require__(65469);
var _navigateReducer = __webpack_require__(57963);
function serverPatchReducer(state, action) {
    const { flightData , previousTree , overrideCanonicalUrl , cache , mutable  } = action;
    const isForCurrentTree = JSON.stringify(previousTree) === JSON.stringify(state.tree);
    // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
    // In that case opt-out of applying the patch given that the data could be stale.
    if (!isForCurrentTree) {
        // TODO-APP: Handle tree mismatch
        console.log("TREE MISMATCH");
        // Keep everything as-is.
        return state;
    }
    if (mutable.previousTree) {
        return (0, _navigateReducer).handleMutable(state, mutable);
    }
    // Handle case when navigating to page in `pages` from `app`
    if (typeof flightData === "string") {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, flightData, state.pushRef.pendingPush);
    }
    // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
    const flightDataPath = flightData[0];
    // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
    const flightSegmentPath = flightDataPath.slice(0, -4);
    const [treePatch] = flightDataPath.slice(-3, -2);
    const newTree = (0, _applyRouterStatePatchToTree).applyRouterStatePatchToTree([
        "",
        ...flightSegmentPath
    ], state.tree, treePatch);
    if (newTree === null) {
        throw new Error("SEGMENT MISMATCH");
    }
    if ((0, _isNavigatingToNewRootLayout).isNavigatingToNewRootLayout(state.tree, newTree)) {
        return (0, _navigateReducer).handleExternalUrl(state, mutable, state.canonicalUrl, state.pushRef.pendingPush);
    }
    const canonicalUrlOverrideHref = overrideCanonicalUrl ? (0, _createHrefFromUrl).createHrefFromUrl(overrideCanonicalUrl) : undefined;
    if (canonicalUrlOverrideHref) {
        mutable.canonicalUrl = canonicalUrlOverrideHref;
    }
    (0, _navigateReducer).applyFlightData(state, cache, flightDataPath);
    mutable.previousTree = state.tree;
    mutable.patchedTree = newTree;
    mutable.cache = cache;
    return (0, _navigateReducer).handleMutable(state, mutable);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=server-patch-reducer.js.map


/***/ }),

/***/ 20208:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ACTION_PREFETCH = exports.ACTION_SERVER_PATCH = exports.ACTION_RESTORE = exports.ACTION_NAVIGATE = exports.ACTION_REFRESH = void 0;
const ACTION_REFRESH = "refresh";
exports.ACTION_REFRESH = ACTION_REFRESH;
const ACTION_NAVIGATE = "navigate";
exports.ACTION_NAVIGATE = ACTION_NAVIGATE;
const ACTION_RESTORE = "restore";
exports.ACTION_RESTORE = ACTION_RESTORE;
const ACTION_SERVER_PATCH = "server-patch";
exports.ACTION_SERVER_PATCH = ACTION_SERVER_PATCH;
const ACTION_PREFETCH = "prefetch";
exports.ACTION_PREFETCH = ACTION_PREFETCH;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map


/***/ }),

/***/ 11468:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reducer = void 0;
var _routerReducerTypes = __webpack_require__(20208);
var _navigateReducer = __webpack_require__(57963);
var _serverPatchReducer = __webpack_require__(39484);
var _restoreReducer = __webpack_require__(27464);
var _refreshReducer = __webpack_require__(54316);
var _prefetchReducer = __webpack_require__(81161);
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case _routerReducerTypes.ACTION_NAVIGATE:
            {
                return (0, _navigateReducer).navigateReducer(state, action);
            }
        case _routerReducerTypes.ACTION_SERVER_PATCH:
            {
                return (0, _serverPatchReducer).serverPatchReducer(state, action);
            }
        case _routerReducerTypes.ACTION_RESTORE:
            {
                return (0, _restoreReducer).restoreReducer(state, action);
            }
        case _routerReducerTypes.ACTION_REFRESH:
            {
                return (0, _refreshReducer).refreshReducer(state, action);
            }
        case _routerReducerTypes.ACTION_PREFETCH:
            {
                return (0, _prefetchReducer).prefetchReducer(state, action);
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
exports.reducer = reducer;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer.js.map


/***/ }),

/***/ 26684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.shouldHardNavigate = shouldHardNavigate;
var _matchSegments = __webpack_require__(74363);
function shouldHardNavigate(flightSegmentPath, flightRouterState) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey]);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=should-hard-navigate.js.map


/***/ }),

/***/ 38238:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationAsyncStorage = void 0;
var _asyncLocalStorage = __webpack_require__(33408);
const staticGenerationAsyncStorage = (0, _asyncLocalStorage).createAsyncLocalStorage();
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.js.map


/***/ }),

/***/ 93241:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useReducerWithReduxDevtools = void 0;
var _react = __webpack_require__(18038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj = {};
        for(const key in val){
            const value = val[key];
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value.hasOwnProperty("_bundlerConfig")) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react).useReducer(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react).useRef();
    const enabledRef = (0, _react).useRef();
    (0, _react).useEffect(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 8000,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react).useReducer(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react).useCallback(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
exports.useReducerWithReduxDevtools = useReducerWithReduxDevtools;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 60566:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 67681:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(28868)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(21987)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(18038));
var _resolveHref = __webpack_require__(87782);
var _isLocalUrl = __webpack_require__(71109);
var _formatUrl = __webpack_require__(23938);
var _utils = __webpack_require__(59232);
var _addLocale = __webpack_require__(66723);
var _routerContext = __webpack_require__(24964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(63147);
var _getDomainLocale = __webpack_require__(60566);
var _addBasePath = __webpack_require__(26199);
const prefetched = new Set();
function prefetch(router, href, as, options, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _isLocalUrl).isLocalURL(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _isLocalUrl).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        // @ts-expect-error startTransition exists.
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formatUrl).formatUrl(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    const pagesRouter = _react.default.useContext(_routerContext.RouterContext);
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    const { href , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolveHref).resolveHref(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolveHref).resolveHref(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) { var ref; }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils).isAbsoluteUrl(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getDomainLocale).getDomainLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 74830:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(93297);
var _parsePath = __webpack_require__(28854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 48466:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 63147:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(18038);
var _requestIdleCallback = __webpack_require__(48466);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react).useState(false);
    const elementRef = (0, _react).useRef(null);
    const setElement = (0, _react).useCallback((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 45407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.suspense = suspense;
exports.NoSSR = NoSSR;
var _interop_require_default = (__webpack_require__(28868)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(18038));
var _noSsrError = __webpack_require__(38660);
function suspense() {
    const error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
}
function NoSSR({ children  }) {
    if (true) {
        suspense();
    }
    return children;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 38660:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NEXT_DYNAMIC_NO_SSR_CODE = void 0;
const NEXT_DYNAMIC_NO_SSR_CODE = "DYNAMIC_SERVER_USAGE";
exports.NEXT_DYNAMIC_NO_SSR_CODE = NEXT_DYNAMIC_NO_SSR_CODE; //# sourceMappingURL=no-ssr-error.js.map


/***/ }),

/***/ 98440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(32045)


/***/ }),

/***/ 49811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(63557);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 48103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(49811)();
}


/***/ }),

/***/ 63557:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 81592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ twMerge)
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/_virtual/_rollupPluginBabelHelpers.mjs
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}


//# sourceMappingURL=_rollupPluginBabelHelpers.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return undefined;
      },
      set: function set() {}
    };
  }

  var cacheSize = 0;
  var cache = new Map();
  var previousCache = new Map();

  function update(key, value) {
    cache.set(key, value);
    cacheSize++;

    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }

  return {
    get: function get(key) {
      var value = cache.get(key);

      if (value !== undefined) {
        return value;
      }

      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}


//# sourceMappingURL=lru-cache.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  var classMap = createClassMap(config);

  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR); // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.

    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }

    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }

  function getConflictingClassGroupIds(classGroupId) {
    return config.conflictingClassGroups[classGroupId] || [];
  }

  return {
    getClassGroupId: getClassGroupId,
    getConflictingClassGroupIds: getConflictingClassGroupIds
  };
}

function getGroupRecursive(classParts, classPartObject) {
  var _classPartObject$vali;

  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }

  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;

  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }

  if (classPartObject.validators.length === 0) {
    return undefined;
  }

  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_classPartObject$vali = classPartObject.validators.find(function (_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })) == null ? void 0 : _classPartObject$vali.classGroupId;
}

var arbitraryPropertyRegex = /^\[(.+)\]$/;

function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(':'));

    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */


function createClassMap(config) {
  var theme = config.theme,
      prefix = config.prefix;
  var classMap = {
    nextPart: new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
        classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}

function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }

    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }

      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId: classGroupId
      });
      return;
    }

    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
          classGroup = _ref3[1];
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}

function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }

    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}

function isThemeGetter(func) {
  return func.isThemeGetter;
}

function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }

  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
        classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }

      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
          var key = _ref5[0],
              value = _ref5[1];
          return [prefix + key, value];
        }));
      }

      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}


//# sourceMappingURL=class-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  var separator = config.separator || ':'; // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js

  return function splitModifiers(className) {
    var bracketDepth = 0;
    var modifiers = [];
    var modifierStart = 0;

    for (var index = 0; index < className.length; index++) {
      var _char = className[index];

      if (bracketDepth === 0 && _char === separator[0]) {
        if (separator.length === 1 || className.slice(index, index + separator.length) === separator) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separator.length;
        }
      }

      if (_char === '[') {
        bracketDepth++;
      } else if (_char === ']') {
        bracketDepth--;
      }
    }

    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    return {
      modifiers: modifiers,
      hasImportantModifier: hasImportantModifier,
      baseClassName: baseClassName
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */

function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }

  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '[';

    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}


//# sourceMappingURL=modifier-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/config-utils.mjs





function createConfigUtils(config) {
  return _extends({
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config)
  }, createClassUtils(config));
}


//# sourceMappingURL=config-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/merge-classlist.mjs


var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
      getClassGroupId = configUtils.getClassGroupId,
      getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */

  var classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName),
        modifiers = _splitModifiers.modifiers,
        hasImportantModifier = _splitModifiers.hasImportantModifier,
        baseClassName = _splitModifiers.baseClassName;

    var classGroupId = getClassGroupId(baseClassName);

    if (!classGroupId) {
      return {
        isTailwindClass: false,
        originalClassName: originalClassName
      };
    }

    var variantModifier = sortModifiers(modifiers).join(':');
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId: modifierId,
      classGroupId: classGroupId,
      originalClassName: originalClassName
    };
  }).reverse() // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(function (parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }

    var modifierId = parsed.modifierId,
        classGroupId = parsed.classGroupId;
    var classId = modifierId + classGroupId;

    if (classGroupsInConflict.has(classId)) {
      return false;
    }

    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId).forEach(function (group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function (parsed) {
    return parsed.originalClassName;
  }).join(' ');
}


//# sourceMappingURL=merge-classlist.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = '';

  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }

  return string;
}

function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }

  var resolvedValue;
  var string = '';

  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }

  return string;
}


//# sourceMappingURL=tw-join.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs




function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }

  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;

  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
        restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }

  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);

    if (cachedResult) {
      return cachedResult;
    }

    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }

  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}


//# sourceMappingURL=create-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter(theme) {
    return theme[key] || [];
  };

  themeGetter.isThemeGetter = true;
  return themeGetter;
}


//# sourceMappingURL=from-theme.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(.+)\]$/;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
var tshirtUnitRegex = /^(\d+)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/; // Shadow always begins with x and y offset separated by underscore

var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(classPart) {
  return !Number.isNaN(Number(classPart)) || stringLengths.has(classPart) || fractionRegex.test(classPart) || isArbitraryLength(classPart);
}
function isArbitraryLength(classPart) {
  var _arbitraryValueRegex$;

  var arbitraryValue = (_arbitraryValueRegex$ = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$[1];

  if (arbitraryValue) {
    return arbitraryValue.startsWith('length:') || lengthUnitRegex.test(arbitraryValue);
  }

  return false;
}
function isArbitrarySize(classPart) {
  var _arbitraryValueRegex$2;

  var arbitraryValue = (_arbitraryValueRegex$2 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$2[1];
  return arbitraryValue ? arbitraryValue.startsWith('size:') : false;
}
function isArbitraryPosition(classPart) {
  var _arbitraryValueRegex$3;

  var arbitraryValue = (_arbitraryValueRegex$3 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$3[1];
  return arbitraryValue ? arbitraryValue.startsWith('position:') : false;
}
function isArbitraryUrl(classPart) {
  var _arbitraryValueRegex$4;

  var arbitraryValue = (_arbitraryValueRegex$4 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$4[1];
  return arbitraryValue ? arbitraryValue.startsWith('url(') || arbitraryValue.startsWith('url:') : false;
}
function isArbitraryNumber(classPart) {
  var _arbitraryValueRegex$5;

  var arbitraryValue = (_arbitraryValueRegex$5 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$5[1];
  return arbitraryValue ? !Number.isNaN(Number(arbitraryValue)) || arbitraryValue.startsWith('number:') : false;
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */

var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isInteger(classPart) {
  var _arbitraryValueRegex$6;

  var arbitraryValue = (_arbitraryValueRegex$6 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$6[1];

  if (arbitraryValue) {
    return Number.isInteger(Number(arbitraryValue));
  }

  return Number.isInteger(Number(classPart));
}
function isArbitraryValue(classPart) {
  return arbitraryValueRegex.test(classPart);
}
function isAny() {
  return true;
}
function isTshirtSize(classPart) {
  return tshirtUnitRegex.test(classPart);
}
function isArbitraryShadow(classPart) {
  var _arbitraryValueRegex$7;

  var arbitraryValue = (_arbitraryValueRegex$7 = arbitraryValueRegex.exec(classPart)) == null ? void 0 : _arbitraryValueRegex$7[1];

  if (arbitraryValue) {
    return shadowRegex.test(arbitraryValue);
  }

  return false;
}


//# sourceMappingURL=validators.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/default-config.mjs



function getDefaultConfig() {
  var colors = fromTheme('colors');
  var spacing = fromTheme('spacing');
  var blur = fromTheme('blur');
  var brightness = fromTheme('brightness');
  var borderColor = fromTheme('borderColor');
  var borderRadius = fromTheme('borderRadius');
  var borderSpacing = fromTheme('borderSpacing');
  var borderWidth = fromTheme('borderWidth');
  var contrast = fromTheme('contrast');
  var grayscale = fromTheme('grayscale');
  var hueRotate = fromTheme('hueRotate');
  var invert = fromTheme('invert');
  var gap = fromTheme('gap');
  var gradientColorStops = fromTheme('gradientColorStops');
  var inset = fromTheme('inset');
  var margin = fromTheme('margin');
  var opacity = fromTheme('opacity');
  var padding = fromTheme('padding');
  var saturate = fromTheme('saturate');
  var scale = fromTheme('scale');
  var sepia = fromTheme('sepia');
  var skew = fromTheme('skew');
  var space = fromTheme('space');
  var translate = fromTheme('translate');

  var getOverscroll = function getOverscroll() {
    return ['auto', 'contain', 'none'];
  };

  var getOverflow = function getOverflow() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  };

  var getSpacingWithAuto = function getSpacingWithAuto() {
    return ['auto', spacing];
  };

  var getLengthWithEmpty = function getLengthWithEmpty() {
    return ['', isLength];
  };

  var getIntegerWithAuto = function getIntegerWithAuto() {
    return ['auto', isInteger];
  };

  var getPositions = function getPositions() {
    return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  };

  var getLineStyles = function getLineStyles() {
    return ['solid', 'dashed', 'dotted', 'double', 'none'];
  };

  var getBlendModes = function getBlendModes() {
    return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  };

  var getAlign = function getAlign() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly'];
  };

  var getZeroAndEmpty = function getZeroAndEmpty() {
    return ['', '0', isArbitraryValue];
  };

  var getBreaks = function getBreaks() {
    return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  };

  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryLength],
      brightness: [isInteger],
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryLength],
      borderSpacing: [spacing],
      borderWidth: getLengthWithEmpty(),
      contrast: [isInteger],
      grayscale: getZeroAndEmpty(),
      hueRotate: [isInteger],
      invert: getZeroAndEmpty(),
      gap: [spacing],
      gradientColorStops: [colors],
      inset: getSpacingWithAuto(),
      margin: getSpacingWithAuto(),
      opacity: [isInteger],
      padding: [spacing],
      saturate: [isInteger],
      scale: [isInteger],
      sepia: getZeroAndEmpty(),
      skew: [isInteger, isArbitraryValue],
      space: [spacing],
      translate: [spacing]
    },
    classGroups: {
      // Layout

      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],

      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],

      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],

      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],

      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],

      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],

      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],

      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],

      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],

      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ['right', 'left', 'none']
      }],

      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none']
      }],

      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],

      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],

      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],

      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],

      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],

      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],

      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],

      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],

      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],

      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],

      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],

      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],

      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],

      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],

      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],

      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],

      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],

      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],

      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger]
      }],
      // Flexbox and Grid

      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [spacing]
      }],

      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],

      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],

      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],

      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],

      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],

      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger]
      }],

      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],

      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: [isInteger]
        }]
      }],

      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getIntegerWithAuto()
      }],

      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getIntegerWithAuto()
      }],

      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],

      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger]
        }]
      }],

      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getIntegerWithAuto()
      }],

      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getIntegerWithAuto()
      }],

      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],

      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],

      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],

      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],

      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],

      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],

      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: getAlign()
      }],

      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],

      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],

      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: [].concat(getAlign(), ['baseline'])
      }],

      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],

      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],

      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [].concat(getAlign(), ['baseline', 'stretch'])
      }],

      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],

      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing

      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],

      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],

      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],

      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],

      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],

      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],

      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],

      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],

      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],

      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],

      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],

      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],

      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],

      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],

      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],

      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],

      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],

      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing

      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', spacing]
      }],

      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': ['min', 'max', 'fit', isLength]
      }],

      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryLength]
      }],

      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [spacing, 'auto', 'min', 'max', 'fit']
      }],

      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['min', 'max', 'fit', isLength]
      }],

      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [spacing, 'min', 'max', 'fit']
      }],
      // Typography

      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],

      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],

      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],

      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],

      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],

      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],

      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryLength]
      }],

      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength]
      }],

      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],

      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],

      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],

      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],

      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],

      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],

      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],

      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],

      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [].concat(getLineStyles(), ['wavy'])
      }],

      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength]
      }],

      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength]
      }],

      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],

      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],

      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],

      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [spacing]
      }],

      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryLength]
      }],

      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']
      }],

      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ['normal', 'words', 'all', 'keep']
      }],

      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds

      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],

      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],

      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],

      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],

      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],

      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],

      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],

      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryUrl]
      }],

      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],

      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],

      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],

      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders

      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],

      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],

      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],

      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],

      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],

      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],

      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],

      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],

      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],

      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],

      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],

      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],

      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],

      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],

      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],

      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],

      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],

      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [].concat(getLineStyles(), ['hidden'])
      }],

      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],

      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],

      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],

      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],

      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],

      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],

      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],

      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],

      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],

      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],

      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],

      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],

      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],

      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],

      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [''].concat(getLineStyles())
      }],

      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength]
      }],

      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength]
      }],

      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],

      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmpty()
      }],

      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],

      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],

      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],

      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength]
      }],

      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects

      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],

      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],

      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],

      /**
       * Mix Beldn Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': getBlendModes()
      }],

      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters

      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],

      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],

      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],

      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],

      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],

      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],

      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],

      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],

      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],

      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],

      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],

      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],

      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],

      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],

      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],

      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],

      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],

      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],

      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],

      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables

      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],

      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],

      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],

      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],

      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      // Transitions and Animation

      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],

      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isInteger]
      }],

      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],

      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isInteger]
      }],

      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms

      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],

      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],

      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],

      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],

      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],

      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],

      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],

      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],

      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],

      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity

      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],

      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],

      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],

      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],

      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],

      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],

      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],

      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': [spacing]
      }],

      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': [spacing]
      }],

      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': [spacing]
      }],

      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': [spacing]
      }],

      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': [spacing]
      }],

      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': [spacing]
      }],

      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': [spacing]
      }],

      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': [spacing]
      }],

      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': [spacing]
      }],

      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': [spacing]
      }],

      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': [spacing]
      }],

      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': [spacing]
      }],

      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': [spacing]
      }],

      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': [spacing]
      }],

      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],

      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],

      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],

      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],

      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
          pan: ['x', 'left', 'right', 'y', 'up', 'down']
        }]
      }],

      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],

      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG

      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],

      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryNumber]
      }],

      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility

      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only']
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      'col-start-end': ['col-start', 'col-end'],
      'row-start-end': ['row-start', 'row-end'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: ['rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb']
    }
  };
}


//# sourceMappingURL=default-config.mjs.map

;// CONCATENATED MODULE: ./node_modules/.pnpm/tailwind-merge@1.8.0/node_modules/tailwind-merge/dist/lib/tw-merge.mjs



var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);


//# sourceMappingURL=tw-merge.mjs.map


/***/ })

};
;