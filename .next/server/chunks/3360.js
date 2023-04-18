exports.id = 3360;
exports.ids = [3360];
exports.modules = {

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


/***/ })

};
;