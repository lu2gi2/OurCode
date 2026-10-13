function u(authorizationServerUrl) {
    try {
        let r = new URL(authorizationServerUrl);
        if (r.protocol !== "https:" && r.protocol !== "http:") {
            return;
        }
        return r.origin;
    } catch  {
        return;
    }
}
function Jve(e) {
    return {
        authorizationServerUrl: e.authorizationServerUrl,
        oauthMetadataFound: e.oauthMetadataFound,
        authServerMetadataUrl: e.authServerMetadataUrl
    };
}
function n(previous) {
    return previous !== undefined && previous.authorizationServerUrl !== "";
}
function Cgn({ previous, discovered, servedMetadataUrl }) {
    if (n(previous) && previous.authServerMetadataUrl !== undefined) {
        return {
            authorizationServerUrl: previous.authorizationServerUrl,
            oauthMetadataFound: previous.oauthMetadataFound,
            authServerMetadataUrl: previous.authServerMetadataUrl
        };
    }
    if (!discovered.oauthMetadataFound || u(discovered.authorizationServerUrl) === undefined) {
        if (n(previous)) {
            return {
                authorizationServerUrl: previous.authorizationServerUrl,
                oauthMetadataFound: previous.oauthMetadataFound
            };
        }
        return {
            ...discovered
        };
    }
    if (n(previous) && previous.oauthMetadataFound !== true && servedMetadataUrl !== undefined) {
        return {
            authorizationServerUrl: previous.authorizationServerUrl,
            oauthMetadataFound: previous.oauthMetadataFound
        };
    }
    return {
        ...discovered,
        authServerMetadataUrl: servedMetadataUrl ?? null
    };
}
function d(previous, { servedMetadataUrl, interactiveSignIn }) {
    if (!n(previous)) {
        return previous;
    }
    let authServerMetadataUrl = servedMetadataUrl ?? null;
    if (interactiveSignIn ? previous.authServerMetadataUrl === authServerMetadataUrl : previous.authServerMetadataUrl !== undefined) {
        return previous;
    }
    return {
        ...previous,
        authServerMetadataUrl
    };
}
function Rgn({ previous, signIn, servedMetadataUrl, interactiveSignIn }) {
    if (signIn !== undefined && u(signIn.authorizationServerUrl) !== undefined && (interactiveSignIn || !n(previous))) {
        let { authServerMetadataUrl, ...rest } = previous ?? {
            authorizationServerUrl: ""
        };
        if (interactiveSignIn || signIn.oauthMetadataFound) {
            return {
                ...previous,
                authorizationServerUrl: signIn.authorizationServerUrl,
                oauthMetadataFound: signIn.oauthMetadataFound,
                authServerMetadataUrl: servedMetadataUrl ?? null
            };
        }
        return {
            ...rest,
            authorizationServerUrl: signIn.authorizationServerUrl,
            oauthMetadataFound: signIn.oauthMetadataFound
        };
    }
    if (previous !== undefined && !interactiveSignIn && previous.oauthMetadataFound !== true && previous.authServerMetadataUrl === undefined) {
        if (signIn !== undefined && servedMetadataUrl === undefined && signIn.oauthMetadataFound && u(signIn.authorizationServerUrl) !== undefined) {
            return {
                ...previous,
                authorizationServerUrl: signIn.authorizationServerUrl,
                oauthMetadataFound: true,
                authServerMetadataUrl: null
            };
        }
        return previous;
    }
    return previous && d(previous, {
        servedMetadataUrl,
        interactiveSignIn
    });
}
function eyt({ previous, issuedBy, interactiveSignIn }) {
    let a = previous?.authServerMetadataUrl;
    return {
        authorizationServerUrl: issuedBy,
        oauthMetadataFound: true,
        authServerMetadataUrl: !interactiveSignIn && a !== undefined ? a : null
    };
}
export { Jve, Cgn, Rgn, eyt };
