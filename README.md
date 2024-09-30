# GitHub Health File Check

<!-- Badges -->

![License][license]
[![Open Issues][issues]][issue-link]
![Commit Count][commits]
[![Pull Request][PR]][pr-link]
![npm version][npm version]
![total download][download]

<!--  -->

```bash
 npx gh-repo-check
```

![gh-repo-check demo gif](src/assets/images/output.gif)

## What are Community Health Files?

> [!TIP]
> Read official Github docs to know more about [Community Health Files][community-files].

## What this package does ?

This is a npm based CLI tool check your GitHub repo and generate basic community health files in `.github` folder (if not exist) or user defined folder.

This tool generate below files with your personalized information

- necessary community health files
- Issues templates
- Discussions templates
- Pull Request template
- Funding information

and below is the final folder structure

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

```bash
npm install @xkeshav/gh-repo-check
```

and then run

```sh
npx gh-repo-check
```

it will ask few questions and then generate files.

> [!NOTE]
> if you have `.github` folder in your repo, then it will ask for a folder name, where it will generate the files, but later you have to move these files into `.github` folder, to make it useful.

## License

This project is licensed under the [MIT License][license-link].

---

<!-- References -->

[license]: https://badgen.net/github/license/xkeshav/gh-repo-check
[issues]: https://badgen.net/github/open-issues/xkeshav/gh-repo-check
[PR]: https://badgen.net/github/prs/xkeshav/gh-repo-check
[commits]: https://badgen.net/github/commits/xkeshav/gh-repo-check/main?color=green

<!--[license]: https://badgen.net/npm/license/@xkeshav/gh-repo-check-->

[npm version]: https://badgen.net/npm/v/@xkeshav/gh-repo-check
[download]: https://badgen.net/npm/dt/@xkeshav/gh-repo-check
[issue-link]: https://github.com/xkeshav/gh-repo-check/issues
[license-link]: https://github.com/xkeshav/gh-repo-check/blob/main/LICENSE
[pr-link]: https://github.com/xkeshav/gh-repo-check/pulls
[community-files]: https://docs.github.com/en/enterprise-server@3.10/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file
