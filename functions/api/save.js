
export async function onRequestPost(context) {
    try {
        const body = await context.request.json();
        
        // 简单的安全检查（可选，你可以根据需要开启）
        // if (body.password !== "你的密码") return new Response("Unauthorized", { status: 401 });

        // 将新的配置存入 KV
        await context.env.SERVER_DB.put("config", JSON.stringify(body.newConfig));

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (e) {
        return new Response("保存失败", { status: 500 });
    }
}
