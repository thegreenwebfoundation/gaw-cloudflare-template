import gridAwareAuto from '@greenweb/gaw-plugin-cloudflare-workers';

export default {
	async fetch(request, env, ctx) {
		return gridAwareAuto(request, env, ctx, {
			gawDataApiKey: env.EMAPS_API_KEY,
		});
	},
};
