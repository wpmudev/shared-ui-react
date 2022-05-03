# How to Contribute

If you are looking for a bug to fix, check out [Issues List](https://github.com/wpmudev/shared-ui-react/issues) on GitHub. Otherwise please open a new issue.

## Working on Issues.

SUI React goal is to convert [Shared UI Library](https://github.com/wpmudev/shared-ui) into React native components. If there is part of the implementation you disagree with please open a [new issue](https://github.com/wpmudev/shared-ui-react/issues/new).

### Add a Feature.

We consider any new API to be a new feature. An API is any of the following:

- Adding a new React Component
- Update to React Component APIs
- Prop addition on React Component

> If changes fall under these categories or you'd like to add a new package please open an [issue](https://github.com/wpmudev/shared-ui-react/issues/new) first.

### Fixing Bugs.

Go ahead and open a pull request when:

- The issue is a small doc change (READMEs, documentation, etc.).
- The changes you want to perform are under 10 - 20 lines of code.

> Have in mind that anything larger to 20 lines of code or changes to an API will require an issue to be opened first.

## Pull Request Message Format

The pull request message to the @wpmudev/react-foo package, for GitHub issue 1234, should look like this:

```
# For a fix to an issue
fix(foo): Short description of fix.

# For a new feature
new(foo): Short description of feature.

# For a doc update
docs(foo): Short description of doc changes.

# For accessibility improvements
aria(foo): Short description of improvement.
```

This commit message is pulled into our `CHANGELOG` when we release and is based on Angular's git commit guidelines.

## Pull Requests.

Pull requests should meet the following criteria:

- **PRs should be focused!** PRs should focus on fixing one issue or an additional feature. Anything extra requires another PR.
- If there is an existing [issue(s)](https://github.com/wpmudev/shared-ui-react/issues/) please refer to it in the description of your PR.
- Please also include notes about what your changes are trying to achieve (or anything you've learned). Brevity appreciated.

### Process

Before opening a PR, it should be up to date with `development` branch, which is the targeted release branch.

#### Checklist:

- [ ] Lint passes.
- [ ] Chromatic passes.
- [ ] Descriptions about your changes.

Once you have passed all checks, the process is as follows:

1. One of the admins ([@iamleigh](https://github.com/iamleigh), [@a-danae](https://github.com/a-danae)) will review your changes.
2. We will either approve, request changes, or explain why we can't accept these changes. And we'll work from there.
3. Assuming approval, one of the admins will merge your changes and remove the branch from the PR.