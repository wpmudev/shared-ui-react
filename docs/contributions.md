# How to Contribute

The **WPMU DEV Products Team** bases the roadmap on its planned design and development path, subject to changes based on our products' needs and our clients' feedback. Find the entire backlog of this library on our [JIRA](https://incsub.atlassian.net/browse/SUI) board.

## Working on Issues

Before submitting any PR, please open a [task](https://incsub.atlassian.net/browse/SUI) first in the **Backlog** list.

### New Feature

Changes done to introduce a new API are considered a new feature. These can be:

- Create a new package
- Update to any package APIs
- Add a new component to a package
- Property addition on the component

### Fixes or Improvements

- If the issue is a doc change (README, documentation, and more.)
- If it is a bug or mistake in the source code.
- Any change to the API that does not fall into the new feature category.

### Commit Message Format

The final pull request commit message for a react-foo package should look like this:

```
# For a new feature
new(foo): Task title or short description of the feature.

# For a bug fix or improvement
fix(foo): Task title or short description of fix.

# For accessibility (only) improvement.
aria(foo): Task title or short description of fix.

# For a doc update.
docs(foo): Task title or short description of doc change.
```

When released, this commit message is automatically pulled into our `CHANGELOG` and follows [Conventional Commits](https://conventionalcommits.org/) guidelines.

## Pull Requests

The PRs must meet the following criteria:

- **PRs should be focused!** Pull requests should focus on fixing one issue at a time. Anything extra requires a new PR.
- Every pull request must have a task open on our JIRA board.
- Please, add notes about what the changes are trying to achieve (or what you have learned). Brevity appreciated!

### Process

Before opening a PR, it should be up to date with the targeted release branch (release/<release_number>).

#### Checklist:

- [ ] All unit tests pass.
  - [ ] Chromatic test passes.
  - [ ] CodeQL test passes.
  - [ ] Security/Snyk test passes.
- [ ] Descriptions of the changes done.
- [ ] Sign the pull request by assigning it to yourself in the "assignees" section.

Once all the checks pass, the process is as follows:

1. Move the task on the JIRA board to the "Waiting for Merge" column.
2. Ping on the project lead ([@iamleigh](https://github.com/iamleigh)) to notify the changes are ready for review.
3. Once the PR passes the review, the project lead will merge the changes and remove the branch from the PR.
