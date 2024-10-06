# GitHub Repo Care

A npm CLI tool which help your GitHub repository to make it community supportive by generating necessary health files such as security/support/contribution/funding and customized template for pull requests/issues and discussions which boost your project for better contribution.

<!-- Badges -->

[![License][license]][license-link]
[![Open Issues][issues]][issue-link]
[![Commit Count][commits]][commit-link]
[![Pull Request][PR]][pr-link]
[![npm version][npm version]][npm-package]
[![total download][download]][npm-package]

<!--  -->

```bash
 npx gh-repo-care
```

![gh-repo-care demo gif](https://github.com/xkeshav/gh-repo-care/blob/main/src/assets/images/output.gif)

## What are Community Health Files?

> [!TIP]
> Read official Github docs to know more about [Community Health Files][community-files].

## What this package does ?

This is a npm based CLI tool check your GitHub repo and generate community health files in `.github` folder (if not exist) or user defined folder.

This tool generate total 15 files with your personalized information

- Github Community health files (5)
- Issues template files (5)
- Discussions template files (2)
- Pull Request template file(1)
- Funding (1)
- CODEOWENERS file (1)

below is the final folder structure

<details><summary>
  <mark> Health File Tree</mark>
</summary>

```lang-none
├── .github
│   ├── CODEOWNERS
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── DISCUSSION_TEMPLATE
│   │   ├── announcements.yml
│   │   └── ideas.yml
│   ├── FUNDING.yml
│   ├── GOVERNANCE.md
│   ├── ISSUE_TEMPLATE
│   │   ├── BUG_REPORT.yml
│   │   ├── ENHANCEMENT.yml
│   │   ├── FEATURE_REQUEST.md
│   │   ├── QUESTION.md
│   │   └── config.yml
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── SECURITY.md
│   ├── SUPPORT.md

```

</details>

## Pre-requisite

- Node 20+

## How to start

install the repo in your node based project

```sh
npm install @xkeshav/gh-repo-care
```

and then run

```bash
npx gh-repo-care
```

type _y_ on to continue on asking

then it will ask few questions and ask for your consent and then generate necessary health files.

> [!NOTE]
> if you have `.github` folder in your repo, then it will ask for a folder name, where it will generate the files, but later you have to move these files into `.github` folder, to make it useful.

- Enable _Discussions_ tab from Github repository settings to use discussions template
- You must have [Github Sponsor][github-sponsor] profile to enable funding for your GitHub Repository;

> [!CAUTION]
> if you already have `.github` folder and choose _No_ for that question then it will overwrite the files under `.github` folder

## License

This project is licensed under the [MIT License][license-link].

---

<!-- References -->

[license]: https://badgen.net/github/license/xkeshav/gh-repo-care
[issues]: https://badgen.net/github/open-issues/xkeshav/gh-repo-care
[PR]: https://badgen.net/github/prs/xkeshav/gh-repo-care
[commits]: https://badgen.net/github/commits/xkeshav/gh-repo-care/main?color=green
[npm version]: https://badgen.net/npm/v/@xkeshav/gh-repo-care
[download]: https://badgen.net/npm/dy/@xkeshav/gh-repo-care
[license-link]: https://github.com/xkeshav/gh-repo-care/tree/main?tab=MIT-1-ov-file#readme
[npm-package]: https://www.npmjs.com/package/@xkeshav/gh-repo-care
[commit-link]: https://github.com/xkeshav/gh-repo-care/commits/main/
[issue-link]: https://github.com/xkeshav/gh-repo-care/issues
[pr-link]: https://github.com/xkeshav/gh-repo-care/pulls
[community-files]: https://docs.github.com/en/enterprise-server@3.10/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file
[github-sponsor]: https://docs.github.com/en/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor-through-github
