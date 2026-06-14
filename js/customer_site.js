const CUSTOMER_SITES = {
    // 速度标签基于 2026-06-14 国内直连/VPN 复测中位数：
    // 极速 <= 100ms，快速 <= 350ms，普通 <= 800ms，较慢 > 800ms。
    // VPN可用表示显式走 127.0.0.1:4780 可搜索；直连和 VPN 都不可搜索的源已移除。

    // ===== 原有资源 =====
    // 1. 非凡资源 (HTTPS版 - 强烈推荐，最稳)
    feifan: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod/',
        name: '【影视·较慢】非凡资源',
    },
    // 2. 量子资源 (HTTPS版 - 更新快)
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '【影视·快速】量子资源',
    },
    // 3. IKUN资源 (纯HTTPS源，速度快)
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: '【影视·快速】IKUN资源',
    },
    // ===== 新增可用资源（2026-06-13 测试验证）=====
    // 5. 360资源
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '【影视·快速】360资源',
    },
    // 7. 光速资源
    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '【影视·极速】光速资源',
    },
    // 11. 无尽资源
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod/',
        name: '【影视·极速】无尽资源',
    },
    // 12. 暴风资源
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '【影视·极速】暴风资源',
    },
    // 13. 最大资源
    zuida: {
        api: 'http://zuidazy.me/api.php/provide/vod/',
        name: '【影视·较慢】最大资源',
    },
    // 14. 极速资源
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod/at/json',
        name: '【影视·极速】极速资源',
    },
    // 16. 爱坤资源（已有ikun，这是别名）
    aikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: '【影视·快速】爱坤资源',
    },
    // 17. 爱奇艺资源
    iqiyi: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '【影视·快速】爱奇艺资源',
    },
    // 19. 猫眼资源
    maoyan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '【影视·快速】猫眼资源',
    },
    // 20. 电影天堂
    dytt: {
        api: 'https://caiji.dyttzyapi.com/api.php/provide/vod/',
        name: '【影视·快速】电影天堂',
    },
    // 21. 番号资源
    fanhao: {
        api: 'http://fhapi9.com/api.php/provide/vod/',
        name: '【黄色·较慢】番号资源',
        adult: true,
    },
    // 22. 百度资源
    baidu: {
        api: 'http://api.apibdzy.com/api.php/provide/vod',
        name: '【影视·较慢】百度资源',
    },
    // 23. 茅台资源
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/at/josn/',
        name: '【VPN可用·较慢】茅台资源',
    },
    // 24. 豆瓣资源
    douban: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod/at/josn/',
        name: '【影视·普通】豆瓣资源',
    },
    // 25. 迪迪资源
    didi: {
        api: 'https://api.ddapi.cc/api.php/provide/vod/',
        name: '【黄色·普通】迪迪资源',
        adult: true,
    },
    // 26. 速播资源
    subo: {
        api: 'https://subocj.com/api.php/provide/vod/at/json',
        name: '【影视·极速】速播资源',
    },
    // 27. 金鹰资源
    jinying: {
        api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '【影视·极速】金鹰资源',
    },
    // 29. 飘零影院
    piaolin: {
        api: 'https://p2100.net/api.php/provide/vod/',
        name: '【影视·快速】飘零影院',
    },

    // ===== 新增可用资源（2026-06-14 测试验证）=====
    // 30. 红牛资源
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod/',
        name: '【影视·快速】红牛资源',
    },
    // 31. U酷资源
    ukoo: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/',
        name: '【影视·快速】U酷资源',
    },
    // 32. 火狐资源
    huohu: {
        api: 'https://hhzyapi.com/api.php/provide/vod/',
        name: '【影视·极速TOP1】火狐资源',
    },
    // 33. 虎牙资源
    huya: {
        api: 'https://www.huyaapi.com/api.php/provide/vod/',
        name: '【影视·极速】虎牙资源',
    },
    // 34. 新浪资源
    xinlang: {
        api: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/',
        name: '【影视·快速】新浪资源',
    },
};

// 下面这部分代码保持不变
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
