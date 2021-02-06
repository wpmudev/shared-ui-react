# How to Contribute

If you are looking for a bug to fix, check out [Help Wanted Issues](https://github.com/wpmudev/shared-ui-react/issues?q=is%3Aopen+is%3Aissue+label%3Abug+label%3Aimprovement) on GitHub. Otherwise please open a new issue.

## Working on Issues.

SUI React goal is to convert [Shared UI Library](https://github.com/wpmudev/shared-ui) into React native components. If there is part of the implementation you disagree with please open a [new issue](https://github.com/wpmudev/shared-ui-react/issues/new).

### Add a Feature.

We consider any new API to be a new feature. An API is any of the following:

- Adding a new component
- Update to React Component APIs
- Prop updates on React Component

> If changes fall under these categories or you'd like to add a new component please open an [issue](https://github.com/wpmudev/shared-ui-react/issues/new) first.

### Fixing Bugs.

Go ahead an open a pull request when:

- The issue is a small doc change (READMEs, documentation, etc.).
- The changes you want to perform are under 10 - 20 lines of code.

> Have in mind that anything larger to 20 lines of code or changes to an API will require an issue to be opened first.

## Commit Message Format

The final commit message to the @wpmudev/react-foo package, for GitHub issue 1234, should look like this:

```
# For a fix to an issue
🐛 fix/component-name: Short description of fix

# For a new feature
✨ new/component-name: Short description of feature

# For a doc update
📝 docs/component-name: Short description of doc changes

# For accessibility improvements
♿️ aria/component-name: Short description of feature
```

This commit message is pulled into our `CHANGELOG` when we release and is based on Angular's Git commit guidelines.

## Pull Requests.

Pull requests should meet the following criteria:

- **PRs should be focused!** PRs should focus on fixing one issue or an additional feature. Anything extra requires another PR.
- If there is an existing [issue](https://github.com/wpmudev/shared-ui-react/issues/) please refer to it in the description of your PR.
- Please also add notes/description about what your changes are trying to achieve (or anything you've learned). Brevity appreciated.

### Process

Before opening a PR, it should be up to date with targeted release (`rc<release_number>` ie. `rc0.7.0`, `rc0.8.0`, etc.). In most cases it will never be branched from `master`.

#### Checklist:

- [ ] Lint passes.
- [ ] Chromatic passes.
- [ ] Descriptions about your changes.

Once you have passed all checks, the process is as follows:

1. Ping one of the admins ([@iamleigh](https://github.com/iamleigh), [@a-danae](https://github.com/a-danae)) in the PR when its ready for review.
2. We will either approve, request changes, or explain why we can't accept these changes. And we'll work from there.
3. Assuming approval, one of the admins will merge your changes and remove the branch from the PR.