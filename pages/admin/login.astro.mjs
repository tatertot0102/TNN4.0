import { c as createComponent, e as renderScript, b as renderHead, r as renderTemplate } from '../../chunks/astro/server_OmCqSEb_.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Login - TNN</title>${renderScript($$result, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="bg-gray-50 min-h-screen flex items-center justify-center"> <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-lg"> <h1 class="text-2xl font-bold mb-6">TNN Admin Login</h1> <form id="login-form" class="space-y-4"> <div> <label class="block text-sm font-medium mb-2">Email</label> <input type="email" id="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <div> <label class="block text-sm font-medium mb-2">Password</label> <input type="password" id="password" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"> </div> <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
Sign In
</button> <div id="error" class="text-red-600 text-sm hidden"></div> </form> </div> ${renderScript($$result, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/pages/admin/login.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/Users/zanewolf/Documents/GitHub/TNN4.0/src/pages/admin/login.astro", void 0);

const $$file = "/Users/zanewolf/Documents/GitHub/TNN4.0/src/pages/admin/login.astro";
const $$url = "/TNN4.0/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
