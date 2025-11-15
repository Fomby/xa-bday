/**
 * 这是一个为张兴安先生35岁生日送上祝福的函数。
 * 祝福语可以通过环境变量 BLESSING_MESSAGE 自定义。
 * 如果没有环境变量，则使用代码中的默认祝福语。
 */
function sendBirthdayBlessing() {
    // 1. 定义默认祝福语 (代码中修改点)
    const defaultBlessing = "祝张兴安先生 35 岁生日快乐！愿您在新的一岁里，事业蒸蒸日上，生活美满幸福，天天开心！";

    // 2. 尝试从环境变量中获取自定义祝福语
    let customBlessing = null;
    try {
        if (typeof process !== 'undefined' && process.env.BLESSING_MESSAGE) {
            customBlessing = process.env.BLESSING_MESSAGE;
        }
    } catch (e) {
        // 纯浏览器环境无法访问 process.env
    }

    // 3. 确定最终使用的祝福语
    const finalBlessing = customBlessing || defaultBlessing;
    const name = "张兴安";
    const age = 35;
    const date = new Date().toLocaleDateString('zh-CN');

    // 4. 输出信息到控制台和页面
    
    console.log(`\n🎉 35 周岁生日祝福 - 献给 ${name} 先生 🎉`);
    console.log(`💌 祝福语：${finalBlessing}`);

    const elementId = 'birthdayMessage';
    const messageElement = document.getElementById(elementId);

    if (messageElement) {
        messageElement.innerHTML = `
            <h3>🎉 祝 ${name} 先生 ${age} 岁生日快乐！ 🎉</h3>
            <p><strong>生日祝福：</strong>${finalBlessing}</p>
            <p><strong>日期：</strong>${date}</p>
        `;
        messageElement.style.color = 'darkred';
        messageElement.style.border = '2px solid gold';
        messageElement.style.padding = '15px';
        messageElement.style.margin = '20px';
    } 
}

// 自动执行祝福函数
if (typeof window !== 'undefined') {
    sendBirthdayBlessing();
}
