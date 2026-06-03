import { REDESIGN_HTML } from './redesign.generated'

// Serve the bold redesign as a standalone HTML preview at /redesign.
// A route handler (not a page) so it renders OUTSIDE the global RootLayout —
// no global <Toolbar/>, Inter font, or globals.css interfere with the design.
// force-static so it prerenders at build time (works with the static Cloudflare deploy).
export const dynamic = 'force-static'

export async function GET() {
  return new Response(REDESIGN_HTML, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}
