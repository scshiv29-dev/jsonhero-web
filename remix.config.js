/**
 * @type {import('@remix-run/dev).AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildTarget: "cloudflare-workers",
  serverBuildPath: "build/index.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [".*"], 
   serverMainFields: ['browser', 'module', 'main'],
  serverConditions: ['worker', process.env.NODE_ENV],
serverDependenciesToBundle: [/.*/],
  future: {
    v2_errorBoundary:true
  },
};
