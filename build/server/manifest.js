const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AWSCP_Cert.pdf","BH.jpg","BH2.png","BH3.png","bhill_resume.aux","bhill_resume.log","bhill_resume.out","bhill_resume.pdf","bhill_resume.synctex.gz","bhill_resume.tex","favicon.ico","git_good.txt","robots.txt","rose.png","stegpic.png","taiho.gif","website.png"]),
	mimeTypes: {".pdf":"application/pdf",".jpg":"image/jpeg",".png":"image/png",".log":"text/plain",".gz":"application/gzip",".txt":"text/plain",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.C-O_mph9.js",app:"_app/immutable/entry/app.CPSijVe8.js",imports:["_app/immutable/entry/start.C-O_mph9.js","_app/immutable/chunks/DU8CRx2a.js","_app/immutable/chunks/B4LixbrH.js","_app/immutable/entry/app.CPSijVe8.js","_app/immutable/chunks/DU8CRx2a.js","_app/immutable/chunks/C4Uw0Jwv.js","_app/immutable/chunks/s6h7419X.js","_app/immutable/chunks/B4LixbrH.js","_app/immutable/chunks/uP0WyKwo.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CN4eiNBb.js')),
			__memo(() => import('./chunks/1-D86UUqdy.js')),
			__memo(() => import('./chunks/2-BUJhFAmf.js')),
			__memo(() => import('./chunks/3-nnBNV_Dl.js')),
			__memo(() => import('./chunks/4-DCk_ODCd.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
