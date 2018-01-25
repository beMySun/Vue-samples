
> why vue ?

1.数据绑定，从同时维护视图跟数据到只需维护数据

2.复杂状态的管理

3.性能，vdom检测最少的变化，减少批量替换dom

4.直出 (SSR  https://ssr.vuejs.org/en/)


补充SSR 的好处：

Compared to a traditional SPA (Single-Page Application), the advantage of SSR primarily lies in:

1. Better SEO, as the search engine crawlers will directly see the fully rendered page.

   Note that as of now, Google and Bing can index synchronous JavaScript applications just fine. Synchronous being the key word there. If your app starts with a loading spinner, then fetches content via Ajax, the crawler will not wait for you to finish. This means if you have content fetched asynchronously on pages where SEO is important, SSR might be necessary.

2.  Faster time-to-content, especially on slow internet or slow devices. 
	
	Server-rendered markup doesn't need to wait until all JavaScript has been downloaded and executed to be displayed, so your user will see a fully-rendered page sooner. This generally results in better user experience, and can be critical for applications where time-to-content is directly associated with conversion rate.

There are also some trade-offs to consider when using SSR:

3.  Development constraints. 
	
	Browser-specific code can only be used inside certain lifecycle hooks; some external libraries may need special treatment to be able to run in a server-rendered app.

4. More involved build setup and deployment requirements. 
	
	Unlike a fully static SPA that can be deployed on any static file server, a server-rendered app requires an environment where a Node.js server can run.

5. More server-side load. 
	
	Rendering a full app in Node.js is obviously going to be more CPU-intensive than just serving static files, so if you expect high traffic, be prepared for corresponding server load and wisely employ caching strategies.

Before using SSR for your app, the first question you should ask it whether you actually need it. It mostly depends on how important time-to-content is for your app. For example, if you are building an internal dashboard where an extra few hundred milliseconds on initial load doesn't matter that much, SSR would be an overkill. However, in cases where time-to-content is absolutely critical, SSR can help you achieve the best possible initial load performance.



