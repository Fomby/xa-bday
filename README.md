🎂 项目简介
这是一个特别的开源项目，旨在为您所珍视的人制作一个个性化的生日祝福网页。本项目是为“张兴安先生的35岁生日”所创建的初始版本，但通过简单的修改，您可以将其应用于任何生日祝福场景。
本项目是一个纯静态页面应用（HTML/JavaScript），轻量、美观且极易部署，允许用户根据需要自定义祝福信息和页面内容。
✨ 主要功能
 * 精美的生日主题界面。
 * 所有祝福语和核心信息均可轻松自定义。
 * 纯前端静态页面，部署简单快捷，运行成本极低（甚至免费）。
⚙️ 如何自定义
在部署之前，您可以修改项目中的文件以实现个性化，以替换初始的“张兴安先生”信息：
 * 修改祝福语和关键信息：
   * 打开项目根目录下的 index.html 文件。
   * 您可以在 HTML 结构中直接找到并修改以下关键信息（请使用代码编辑器查找）：
     * 页面标题（<title> 标签中的内容）。
     * 主要的大标题和正文祝福语。
   * 提示： 如果某些文本内容是通过 JavaScript 动态加载的，您可能需要检查 index.js 文件进行相应的修改。
 * 修改样式和逻辑（可选）：
   * index.js: 包含页面的动态效果和核心逻辑。
   * 您可以在 index.html 内部的 <style> 标签或外部链接的 CSS 文件（如果存在）中调整页面样式。
完成修改后，请保存文件并提交到您的 Git 仓库。
🚀 部署说明（详细）
本项目是一个纯静态网站（Static Site），可以部署在任何支持静态网站托管的服务上。以下提供四种主流且详细的部署方法：
方法一：Cloudflare Pages 部署（强烈推荐）
Cloudflare Pages 是托管静态网站的最佳方式之一，它在全球拥有极快的访问速度且提供免费服务。
 * 前置准备：
   * 将本项目 Fork 或 Clone 到您的 GitHub/GitLab/Bitbucket 仓库。
   * 确保您已拥有一个 Cloudflare 账户。
 * 连接仓库：
   * 登录 Cloudflare Dashboard。
   * 导航到 Pages 页面，点击 “创建项目”。
   * 选择 “连接到 Git”，然后授权并选择您 Fork 的 xa-bday 仓库。
 * 配置构建和部署：
   * 在“设置构建和部署”页面中，由于本项目是纯静态 HTML/JS 文件，无需任何构建步骤。
   * 构建命令 (Build command): 留空
   * 构建输出目录 (Build output directory): 留空 (或填入 /)
   * 在“部署设置”中，确保选择您用于部署的分支（例如 main）。
 * 完成部署：
   * 点击 “保存并部署”。Cloudflare Pages 将自动拉取代码并进行部署。
   * 部署完成后，您将获得一个类似 [项目名称].pages.dev 的唯一域名，您的生日祝福网页即可通过该域名访问。
方法二：Cloudflare Workers 部署
Cloudflare Workers 主要用于运行无服务器函数。对于纯静态网站，Cloudflare Pages 实际上是基于 Workers 基础设施的更简易的部署方案。
如果您希望使用 Workers 的 CLI 工具（wrangler）来部署静态资源，最推荐的方式是使用 wrangler pages deploy 命令，它利用了 Pages 的部署流程：
 * 安装 Wrangler CLI：
   确保您的系统已安装 Node.js，然后安装 Cloudflare 的命令行工具：
   npm install -g wrangler

 * 登录 Cloudflare：
   在命令行中输入以下命令并按照提示进行浏览器授权登录：
   wrangler login

 * 部署静态资源：
   进入项目的根目录（即 index.html 所在的目录），运行以下命令：
   # 使用 Cloudflare Pages 的 CLI 部署静态文件
# '.' 代表部署当前目录的所有文件
wrangler pages deploy . --project-name xa-bday-site

   * 部署完成后，Wrangler 会输出您的网站的预览和最终的 Pages 域名。
方法三：GitHub Pages 部署
GitHub Pages 是托管 GitHub 仓库中静态文件的最简单、最原生方法。
 * 进入仓库设置：
   * 在您的 xa-bday 仓库页面，点击右上角的 “Settings” (设置)。
   * 在左侧侧边栏中，点击 “Pages”。
 * 配置来源：
   * 在 “Build and deployment” 下，选择 “Deploy from a branch”。
   * 在 “Branch” (分支) 下拉菜单中，选择您的代码分支（通常是 main 或 master）。
   * 选择文件夹（通常是 / (root)，因为 index.html 在根目录）。
 * 保存并访问：
   * 点击 “Save” (保存)。
   * GitHub Actions 会自动触发部署流程。几分钟后，页面顶部会显示您的 GitHub Pages 网址，格式为 https://[您的用户名].github.io/xa-bday/。
方法四：Vercel 或 Netlify 部署
Vercel 和 Netlify 都是流行的托管平台，支持通过连接 Git 仓库实现自动构建和部署。
 * 注册/登录并导入项目：
   * 登录 Vercel 或 Netlify 账户。
   * 选择 “Import Git Repository” (导入 Git 仓库)，并连接您的 xa-bday 仓库。
 * 配置自动部署：
   * 平台会自动检测到这是一个静态网站。
   * 根目录 (Root Directory): 保持默认（/）
   * 构建命令 (Build Command): 留空
   * 输出目录 (Output Directory): 留空 (或设置为 /)
 * 启动部署：
   * 点击 “Deploy” (部署)。平台将自动部署您的网站并提供一个默认域名。
📄 许可证
本项目基于 MIT 许可证 开源。您可以自由使用、修改和分发。
