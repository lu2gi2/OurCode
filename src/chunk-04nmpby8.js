import { C } from "/$bunfs/root/chunk-cj4xndke.js";
export const tP = C(function(i) {
    const r = {
        warningEmitted: false
    };
    const n = (e)=>{
        if (e && !r.warningEmitted && parseInt(e.substring(1, e.indexOf("."))) < 18) {
            r.warningEmitted = true;
            process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
        }
    };
    function a(e, t, s) {
        if (!e.$source) {
            e.$source = {};
        }
        e.$source[t] = s;
        return e;
    }
    function o(e, t, s) {
        if (!e.__aws_sdk_context) {
            e.__aws_sdk_context = {
                features: {}
            };
        } else if (!e.__aws_sdk_context.features) {
            e.__aws_sdk_context.features = {};
        }
        e.__aws_sdk_context.features[t] = s;
    }
    function u(e, t, s) {
        if (!e.$source) {
            e.$source = {};
        }
        e.$source[t] = s;
        return e;
    }
    i.emitWarningIfUnsupportedVersion = n;
    i.setCredentialFeature = a;
    i.setFeature = o;
    i.setTokenFeature = u;
    i.state = r;
});
