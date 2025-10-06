import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        <style>{`
          .markdown-content h1 {
            font-size: clamp(28px, 5vw, 36px);
            font-weight: 700;
            color: #1e293b;
            margin: 32px 0 16px 0;
            line-height: 1.2;
          }

          .markdown-content h2 {
            font-size: clamp(24px, 4vw, 30px);
            font-weight: 600;
            color: #1e293b;
            margin: 28px 0 14px 0;
            line-height: 1.3;
          }

          .markdown-content h3 {
            font-size: clamp(20px, 3vw, 24px);
            font-weight: 600;
            color: #334155;
            margin: 24px 0 12px 0;
            line-height: 1.4;
          }

          .markdown-content h4 {
            font-size: clamp(18px, 2.5vw, 20px);
            font-weight: 600;
            color: #334155;
            margin: 20px 0 10px 0;
          }

          .markdown-content p {
            font-size: clamp(15px, 2vw, 17px);
            color: #475569;
            line-height: 1.8;
            margin: 16px 0;
          }

          .markdown-content a {
            color: #007AFF;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-color 0.2s;
          }

          .markdown-content a:hover {
            border-bottom-color: #007AFF;
          }

          .markdown-content ul, .markdown-content ol {
            font-size: clamp(15px, 2vw, 17px);
            color: #475569;
            line-height: 1.8;
            margin: 16px 0;
            padding-left: 28px;
          }

          .markdown-content li {
            margin: 8px 0;
          }

          .markdown-content blockquote {
            border-left: 4px solid #007AFF;
            padding-left: 20px;
            margin: 20px 0;
            color: #64748b;
            font-style: italic;
          }

          .markdown-content code {
            background-color: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: clamp(13px, 1.8vw, 15px);
            color: #e11d48;
          }

          .markdown-content pre {
            background-color: #1e293b;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
          }

          .markdown-content pre code {
            background-color: transparent;
            padding: 0;
            color: inherit;
            font-size: clamp(13px, 1.8vw, 15px);
          }

          .markdown-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 24px 0;
          }

          .markdown-content hr {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 32px 0;
          }

          .markdown-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }

          .markdown-content th, .markdown-content td {
            border: 1px solid #e5e7eb;
            padding: 12px;
            text-align: left;
          }

          .markdown-content th {
            background-color: #f9fafb;
            font-weight: 600;
            color: #1e293b;
          }
        `}</style>
      </head>
      <body style={{ margin: 0 }}>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}