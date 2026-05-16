# DualScope

纯 `HTML/CSS/JS` 的复合学业路径评估网页，可直接部署到 Vercel。

## 本地预览

```bash
python3 -m http.server 4173
```

访问 `http://localhost:4173`。

## Vercel 部署

1. 将本目录推到 GitHub。
2. 在 Vercel 新建项目并导入仓库。
3. Framework Preset 选择 `Other`。
4. Build Command 留空。
5. Output Directory 留空或填 `.`。
6. Deploy。

## 后期接 AI 对话

保持前端不暴露模型密钥，在 Vercel 新增 `api/chat.js` serverless function 作为代理；前端把 `script.js` 里的本地模拟回复替换为 `fetch("/api/chat")` 即可。

示例代理在 `serverless-chat-proxy.example.js`，复制到 `api/chat.js` 后配置 `OPENAI_API_KEY` 和 `OPENAI_MODEL` 环境变量。

## 数据说明

学科筛选参考教育部本科专业目录的 13 个学科门类：哲学、经济学、法学、教育学、文学、历史学、理学、工学、农学、医学、管理学、艺术学、交叉学科。

项目库目前是官网样例集合，用于展示评估交互与信息结构；匹配分、成本友好度、课程负荷等评分为页面演示评分，不等同于官方排名或录取建议。
