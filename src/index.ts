import { modelProxy, ModelProxy } from 'modelproxy';

/**
 * jquery engine
 * 前端配置modelproxy来使用
 * 基于jquery的ajax
 */
export class JqueryEngine extends modelProxy.BaseEngine {
    /**
     * 构造
     */
    constructor() {
        super();

        this.use(async (ctx: ModelProxy.IProxyCtx, next) => {
            let startTime = Date.now();
            await next();
            console.log(`执行时间${Date.now() - startTime}ms`);
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
    }

    /**
     * 执行代理
     * @param instance {ModelProxy.IInterfaceModel} 接口实例
     * @param options  {ModelProxy.IExeucte}        接口参数
     * @return                {Promise<any>}
     */
    async proxy(instance: ModelProxy.IInterfaceModel, options: ModelProxy.IExeucte): Promise<any> {
        let ctx: ModelProxy.IProxyCtx = {
            instance: instance,
            executeInfo: options
        }, fn = this.callback(() => {

        });

        await fn(ctx);

        return ctx.result;
    }
}