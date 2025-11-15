// 默认祝福语
const DEFAULT_BLESSING = `祝张兴安先生 35 岁生日快乐！
愿您在新的一岁里，
事业蒸蒸日上，生活美满幸福，
天天开心，岁岁平安！`;

// API 接口：获取当前祝福语
export async function onRequestGet(context) {
    // 假设您已将 KV Namespace 绑定到 env.BLESSING_STORE
    const store = context.env.BLESSING_STORE;

    try {
        // 从 KV 中获取祝福语，键名为 'custom_blessing'
        let blessing = await store.get('custom_blessing');

        // 如果 KV 中没有，则使用默认值，并将默认值存入 KV
        if (!blessing) {
            blessing = DEFAULT_BLESSING;
            await store.put('custom_blessing', DEFAULT_BLESSING);
        }

        return new Response(
            JSON.stringify({ 
                success: true, 
                blessing: blessing 
            }),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error("KV 存储访问失败：", error);
        return new Response(
            JSON.stringify({ 
                success: false, 
                blessing: DEFAULT_BLESSING 
            }),
            {
                headers: { 'Content-Type': 'application/json' },
                status: 500
            }
        );
    }
}
