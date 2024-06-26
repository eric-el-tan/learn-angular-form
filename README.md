## Git Basic
### [how to create github repository from local folder](https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)

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

## Setup
### [Angular Ionic - Loading](https://ionicframework.com/docs/api/loading)
- `npm view @ionic/angular versions`
- `npm install @ionic/angular@4.11.13` or `npm install @ionic/angular@v4-lts`
- `npm install ionic`
- `npm i @ionic/angular`

## Unit Testing

### [Angular Testing](https://testing-angular.com/introduction/#introduction)

### [Testing Principles](https://testing-angular.com/angular-testing-principles/#angular-testing-principles)
Testability - Well-structured code
```
We know from experience that code that is easy to test is also simpler, better structured, easier to read and easier to understand. The main technique of writing testable code is to break code into smaller chunks that “do one thing and do it well”. Then couple the chunks loosely.
```


## Performance
### [Measure web page performance](https://www.angulararchitects.io/en/blog/how-to-measure-initial-load-performance/)

### [Resource Timing API](https://medium.com/geekculture/angular-node-using-resource-timing-api-to-get-api-timing-information-f460898f31d9)
- `AppComponent.analysePerformance()` - show PerformanceResourceTiming

### [Why is Initial Load Performance so Important?](https://www.angulararchitects.io/en/blog/why-is-initial-load-performance-so-important/)
1. Server-side rendering (SSR) can greatly enhance initial load time and contribute to a faster web app experience.

1. Hydration involves re-rendering the components on the client-side and attaching event handlers.

1. Non-Destructive Hydration of Angular V16: DOM does not have to be rerendered completely in the client

### [How to measure Initial Load Performance](https://www.angulararchitects.io/en/blog/how-to-measure-initial-load-performance/)
### [How to use Angular SSR with Hydration](https://www.angulararchitects.io/en/blog/how-to-use-angular-ssr-with-hydration/)
- [GitHub - Sample](https://gitlab.com/L_X_T/ng-performance-demo)

### [Medium: Improve Angular Performance](https://medium.com/@chandrabhushan1323/how-to-improve-angular-application-performance-fadde3890e71)
### [Improving Angular Initial Load Time](https://levelup.gitconnected.com/improving-angular-initial-load-time-fba8b1289c48)

### [Angular Performance](https://medium.com/tag/angular-performance)
### [Optimizing Angular Performance with “trackBy” in *ngFor](https://medium.com/@Evelyn.Taylor/optimizing-angular-performance-with-trackby-in-ngfor-3510694dcfc)

### [Angular Performance Best Practices](https://blog.bitsrc.io/improving-angular-performance-strategies-and-best-practices-81fb311af8fb)

## Proposal
---------------------------------------------------------------------
1. DB: create index PK: PROJECTS, SK: modifiedAt desc

2. Dashboard: load (latest) 1000 records

3. Add Search button > Pop-up > Search name

4. click to goto detail

5. use Lighthouse before/after as benchmark on env: TEST / PROD / LOCAL (minimised)
-------------------------------------------------



2. identifiy root caused
? frontend rendering -> ngFor add traceBy
x backend sorting -> new index on sort by timestamp
x reduce data volume (number of record)

### [Chrome Extension - Lighthouse ](https://www.youtube.com/watch?v=VyaHwvPWuZU)
- [install lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=de)
- [First Contentful Paint (FCP)](https://www.youtube.com/watch?v=9pqcMD1udSY)
  - [YT: Display text](https://youtu.be/9pqcMD1udSY?t=219) - font-display: swap;
    - [M: Web Font FOIT & FOUT](https://282714.medium.com/%E7%B6%B2%E9%A0%81%E5%8A%A0%E8%BC%89%E5%AD%97%E5%9E%8Bfoit-fout%E8%88%87%E6%95%88%E8%83%BD%E6%B8%AC%E8%A9%A6-cb0b03daad60)
  - [YT: Minify](https://youtu.be/9pqcMD1udSY?t=232) - [M: Optimizations](https://medium.com/swlh/optimizations-by-angular-54cb80add6d4)
    - `npm run performance`
  - [YT: CSS Coverage](https://youtu.be/9pqcMD1udSY?t=292) - [Chrome: CSS Coverage](https://developer.chrome.com/docs/devtools/coverage)

  3:06 Display Text Before and During Font Loading
3:51 Minify Your HTML, CSS and Javascript
4:38 Take Out Unused CSS

- Performance, Accessibility, Best Practices, SEO
