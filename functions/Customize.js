// 导入 HTML 模板，我们在下一节定义
import { getLoginPage, getAdminPage, getErrorPage } from './customize_ui.js';

// 默认密码和祝福语
const DEFAULT_ADMIN_PASSWORD = 'admin';
const DEFAULT_BLESSING = `祝张兴安先生 35 岁生日快乐！...`; // 保持和 blessing.js 一致

export async function onRequest(context) {
    const { request, env } = context;
    const store = env.BLESSING_STORE;
    // 从环境变量获取管理员密码，如果未设置，则使用默认值
    const ADMIN_PASSWORD = env.Password || DEFAULT_ADMIN_PASSWORD;

    // --- GET 请求：显示界面 ---
    if (request.method === 'GET') {
        // 简单的会话检查：检查 cookie 中是否有有效的 token
        const cookies = request.headers.get('Cookie') || '';
        const isAuthenticated = cookies.includes('admin_auth=true');

        if (isAuthenticated) {
            // 已登录，显示管理员界面
            const currentBlessing = await store.get('custom_blessing') || DEFAULT_BLESSING;
            return new Response(getAdminPage(currentBlessing), {
                headers: { 'Content-Type': 'text/html;charset=utf-8' }
            });
        } else {
            // 未登录，显示登录界面
            return new Response(getLoginPage(), {
                headers: { 'Content-Type': 'text/html;charset=utf-8' }
            });
        }
    }

    // --- POST 请求：登录或修改数据 ---
    if (request.method === 'POST') {
        const formData = await request.formData();
        const action = formData.get('action');

        if (action === 'login') {
            const password = formData.get('password');
            if (password === ADMIN_PASSWORD) {
                // 登录成功：设置 Cookie，并重定向到管理页
                return new Response(null, {
                    status: 302,
                    headers: {
                        'Set-Cookie': 'admin_auth=true; Max-Age=3600; HttpOnly; Path=/',
                        'Location': '/Customize'
                    }
                });
            } else {
                // 登录失败
                return new Response(getErrorPage('密码错误！'), {
                    headers: { 'Content-Type': 'text/html;charset=utf-8' },
                    status: 401
                });
            }
        } 
        
        if (action === 'update') {
            // 确保已登录 (可以通过检查 Cookie，但这里简化为只检查 POST)
            const cookies = request.headers.get('Cookie') || '';
            if (!cookies.includes('admin_auth=true')) {
                 return new Response(getErrorPage('未授权操作，请重新登录。'), {
                    headers: { 'Content-Type': 'text/html;charset=utf-8' },
                    status: 403
                });
            }

            const newBlessing = formData.get('blessing_message');
            if (newBlessing) {
                await store.put('custom_blessing', newBlessing);
                // 更新成功后重定向回管理页
                return new Response(null, {
                    status: 302,
                    headers: {
                        'Location': '/Customize?status=success'
                    }
                });
            }
        }
    }
    
    // 默认返回 405
    return new Response('Method Not Allowed', { status: 405 });
                  }
