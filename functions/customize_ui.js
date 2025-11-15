// 基础 UI 样式和结构
const BASE_HTML = (title, content, message = '') => `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; background-color: #f4f6f9; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .card { background: #fff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); width: 100%; max-width: 400px; }
        h2 { color: #333; margin-bottom: 25px; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        input[type="password"], textarea { width: 100%; padding: 12px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        textarea { height: 150px; resize: vertical; }
        button { background-color: #007bff; color: white; padding: 12px 20px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; width: 100%; }
        button:hover { background-color: #0056b3; }
        .message { padding: 10px; margin-bottom: 20px; border-radius: 4px; text-align: center; }
        .success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        .small-text { font-size: 0.8em; color: #999; margin-top: 15px; }
    </style>
</head>
<body>
    <div class="card">
        ${message ? `<div class="message ${message.includes('成功') ? 'success' : 'error'}">${message}</div>` : ''}
        ${content}
        <div class="small-text">管理员密码由 Cloudflare 环境变量 **Password** 控制。</div>
    </div>
</body>
</html>
`;

// --- 登录界面 ---
export const getLoginPage = (errorMessage = '') => {
    const content = `
        <h2>管理员登录</h2>
        <form method="POST">
            <input type="hidden" name="action" value="login">
            <input type="password" name="password" placeholder="请输入管理员密码" required>
            <button type="submit">登录</button>
        </form>
    `;
    return BASE_HTML('管理员登录 - Customize', content, errorMessage);
};

// --- 管理界面 ---
export const getAdminPage = (currentBlessing) => {
    const urlParams = new URLSearchParams(location.search);
    const status = urlParams.get('status');
    let message = '';
    if (status === 'success') {
        message = '祝福语更新成功！';
    }

    const content = `
        <h2>🎉 定制祝福语</h2>
        <form method="POST">
            <input type="hidden" name="action" value="update">
            <textarea name="blessing_message" required>${currentBlessing}</textarea>
            <button type="submit">保存并更新祝福语</button>
        </form>
        <div class="small-text">该祝福语将立即在首页 API 中生效。</div>
    `;
    return BASE_HTML('定制祝福语 - Admin', content, message);
};

// --- 错误界面 ---
export const getErrorPage = (errorMessage) => {
    const content = `
        <h2>操作失败</h2>
        <p>${errorMessage}</p>
        <p><a href="/Customize">返回登录</a></p>
    `;
    return BASE_HTML('错误', content, errorMessage);
};
