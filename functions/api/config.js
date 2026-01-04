export async function onRequestGet(context) {
    try {
        // 从名为 SERVER_DB 的 KV 空间中读取键名为 "config" 的数据
        // context.env.SERVER_DB 是你在 CF 后台绑定的变量名
        const data = await context.env.SERVER_DB.get("config");

        if (!data) {
            return new Response(JSON.stringify({ error: "KV 中没有找到配置数据" }), {
                status: 404,
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            });
        }

        return new Response(data, {
            headers: { 
                "Content-Type": "application/json;charset=UTF-8",
                "Cache-Control": "no-cache" // 确保每次都拿最新的，不缓存
            }
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: "服务器内部错误" }), { status: 500 });
    }
}
