var config = {
    "key": "test",
    "title": "p-uc",
    "engine": "mockjs",
    "mockDir": "./mocks/",
    "states": {
        "prod": "http://www.baidu.com",
        "test": "http://www.baidu.com",
        "dev": "http://www.baidu.com",
        "stag": "http://www.baidu.com"
    },
    "state": "dev",
    "interfaces": [{
        "key": "login",
        "title": "登陆接口",
        "method": "GET",
        "path": "/passport/login",
        "config": {
            "test": "test-1"
        }
    }]
};

window.onload = function() {
    var proxy = new modelProxy.modelProxy.Proxy();

    modelProxy.modelProxy.engineFactory.add("jquery", new window.JqueryEngine());

    proxy.loadConfig(config).then((result) => {
        return result.getNs("test");
    }).then((result) => {
        if (!result) {
            return;
        }
        return result.login({
            data: { usename: "1", password: "111111" },
            params: {},
            instance: { engine: "jquery" }
        });
    }).then((result) => {
        console.info(JSON.stringify(result));
    }).catch(console.log);
};