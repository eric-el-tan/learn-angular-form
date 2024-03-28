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
