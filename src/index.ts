import { modelProxy, ModelProxy } from 'modelproxy';

export class JqueryEngine extends modelProxy.BaseEngine implements ModelProxy.IEngine {
    constructor() {
        super();

        this.use(async (ctx: ModelProxy.IProxyCtx, next) => {
            let startTime = Date.now();

            await next();

            console.log(Date.now() - startTime);
        });

        this.use(async (ctx: ModelProxy.IProxyCtx, next) => {
            let paramsString = $.param(ctx.executeInfo.params || {});
            let settings: JQueryAjaxSettings = {
                url: `${this.getStatePath(ctx.instance)}${ctx.instance.path}?${paramsString}`,
                data: ctx.executeInfo.data,
                method: ctx.instance.method.toString(),
                dataType: "json"
            };
            ctx.result = await $.ajax($.extend({}, settings, ctx.executeInfo.settings || {}));

            await next();
        });

        this.use(async (ctx: ModelProxy.IProxyCtx, next) => {
            console.log("complete");
            await next();
        });
    }

    validate(instance: ModelProxy.IInterfaceModel, options: ModelProxy.IExeucte): boolean {
        return true;
    }

    async proxy(instance: ModelProxy.IInterfaceModel, options: ModelProxy.IExeucte): Promise<any> {
        let ctx: ModelProxy.IProxyCtx = {
            instance: instance,
            executeInfo: options
        }, fn = this.callback(() => {
            console.log("over");
        });
        
        await fn(ctx);

        return ctx.result;
    }
}