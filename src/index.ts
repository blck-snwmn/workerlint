import { createLinter, loadTextlintrc, loadFixerFormatter } from "textlint";
// descriptor is a structure object for linter
// It includes rules, plugins, and options
const descriptor = await loadTextlintrc();
const linter = createLinter({
	descriptor
});


export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const result = await linter.lintText("TODO: fix me", "test.md");
		console.log(result.messages); // fixed result
		return new Response("Hello World!");
	},
};
