/**
 * -----------------------------------
 *   To deploy server into vercel
 * -----------------------------------
 * 1. Create vercel.json file (copy code snippet from this file)
 * 2. "start": "node index.js"
 *     put this in package.json in script
*/

// vercel.json(code snippet)
// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "./index.js",
//       "use": "@vercel/node"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "/",
//       "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
//     }
//   ]
// }
