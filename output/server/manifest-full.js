export const manifest = {
	appDir: "_app",
	appPath: "toodoo/_app",
	assets: new Set([".nojekyll"]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-c9bcc3a7.js","imports":["_app/immutable/start-c9bcc3a7.js","_app/immutable/chunks/index-7ccf10d2.js","_app/immutable/chunks/singletons-1fd7d0c0.js","_app/immutable/chunks/paths-ad562bfa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
