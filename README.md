## [how to create github repository from local folder](https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)

```
Eric@DESKTOP-I34L773 MINGW64 /c/opt/02-learning/learn-angular-form (master)
$ git init -b .

$ git add .

$ git commit -m "First commit"

$ git remote add origin https://github.com/eric-el-tan/learn-angular-form.git

$ git remote -v

$ git branch -a

$ git push -u origin master

ask for password
```

## [Angular Testing](https://testing-angular.com/introduction/#introduction)

### [Testing Principles](https://testing-angular.com/angular-testing-principles/#angular-testing-principles)
Testability - Well-structured code
```
We know from experience that code that is easy to test is also simpler, better structured, easier to read and easier to understand. The main technique of writing testable code is to break code into smaller chunks that “do one thing and do it well”. Then couple the chunks loosely.
```

## Setup
### [Angular Ionic - Loading](https://ionicframework.com/docs/api/loading)
- `npm view @ionic/angular versions`
- `npm install @ionic/angular@4.11.13` or `npm install @ionic/angular@v4-lts`
- `npm install ionic`
- `npm i @ionic/angular`

## Performance
### [Measure web page performance](https://www.angulararchitects.io/en/blog/how-to-measure-initial-load-performance/)

1. [Why is Initial Load Performance so Important?](https://www.angulararchitects.io/en/blog/why-is-initial-load-performance-so-important/)
    Server-side rendering (SSR) can greatly enhance initial load time and contribute to a faster web app experience. Unlike client-side rendering, where the browser must wait for all JavaScript and data to be downloaded before rendering the page, SSR generates the HTML on the server and sends a fully rendered page to the browser.
    This approach eliminates the need for additional round trips between the client and the server, reducing latency and improving Initial Load Performance. By delivering pre-rendered content, SSR enables users to see and interact with the app faster, as there is no delay in rendering or waiting for data to be fetched.

    Hydration is a technique that complements server-side rendering (SSR) and improves the initial load time of SSR-rendered pages: After the initial HTML is rendered on the server and sent to the client, hydration involves re-rendering the components on the client-side and attaching event handlers. This process allows the static HTML to be transformed into an interactive and dynamic application.

    The main benefit of the so-called Non-Destructive Hydration introduced in Angular V16 is that the DOM does not have to be rerendered completely in the client which often showed up in a blank flash of the page during the process - which of course resulted in a very bad user experience. If you'd ask me personally I'd say for that reason SSR was not really usable in Angular until now!

2. [How to measure Initial Load Performance](https://www.angulararchitects.io/en/blog/how-to-measure-initial-load-performance/)
- [Chrome Extension - Lighthouse ](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=de)
- Performance, Accessibility, Best Practices, SEO
- [webpagetest.org](https://www.webpagetest.org/)

3. [How to use Angular SSR with Hydration](https://www.angulararchitects.io/en/blog/how-to-use-angular-ssr-with-hydration/)
- [GitHub - Sample](https://gitlab.com/L_X_T/ng-performance-demo)

### [Medium: Improve Angular Performance](https://medium.com/@chandrabhushan1323/how-to-improve-angular-application-performance-fadde3890e71)
### [Improving Angular Initial Load Time](https://levelup.gitconnected.com/improving-angular-initial-load-time-fba8b1289c48)

### [Angular Performance](https://medium.com/tag/angular-performance)
 ## [Optimizing Angular Performance with “trackBy” in *ngFor](https://medium.com/@Evelyn.Taylor/optimizing-angular-performance-with-trackby-in-ngfor-3510694dcfc)

### [Angular Performance Best Practices](https://blog.bitsrc.io/improving-angular-performance-strategies-and-best-practices-81fb311af8fb)
### [Resource Timing API](https://medium.com/geekculture/angular-node-using-resource-timing-api-to-get-api-timing-information-f460898f31d9)
- `AppComponent.analysePerformance()` - show PerformanceResourceTiming

-------------------------------------------------

1. Lighthouse time TEST / PROD / LOCAL (minimised)

2. identifiy root caused

- frontend rendering -> ngFor add traceBy
- backend sorting -> new index on sort by timestamp
- reduce data volume (number of record)

	DEV Network
	
	100
	..
	1
	
	1. index	-> sort by ts desc
	pk: id
	sk: timestamp
	
	2. less attributes
	
	3. paging	-> ts: today - 6mths
	
	4. purging
