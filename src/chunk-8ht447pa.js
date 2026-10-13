import { rst } from "/$bunfs/root/chunk-vmjcjnmq.js";
class S1t extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let s;
        super({
            start (e) {
                s = rst({
                    onEvent: (r)=>{
                        e.enqueue(r);
                    },
                    onError (r) {
                        if (onError === "terminate") {
                            e.error(r);
                        } else if (typeof onError === "function") {
                            onError(r);
                        }
                    },
                    onRetry,
                    onComment
                });
            },
            transform (e) {
                s.feed(e);
            }
        });
    }
}
export { S1t };
