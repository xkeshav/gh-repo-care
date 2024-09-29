# Template Repository

<!-- Badges -->

![Template][template]
![License][license]
![Open Issues][issues]
![Commit Count][commits]
![Total Pull Request][PR]

<!--  -->

This is a CLI tool which help to check your GitHub repo and generate health files in .github folder ( if not exist) or your own defined folder name

few of health files are as followings

- CONTRIBUTING_GUIDE.md
- CODE_OF_CONDUCT.md
- SECURITY.md
- SUPPORT.md

this tool add your necessary details in above files and apart from that this tool help to generate customized issues and discussions tabs template

<details><summary>
  <mark>Final Folder Structure</mark>
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

```bash
npm install @xkeshav/gh-repo-health
```

and then run

```sh
npx repo-health
```

it will ask basic question and then generate files; you have to move these files into `.github` folder ( in case you already have .github folder); otherwise it will generate .github folder and place all necessary files.

### Note

one file _Funding.yml_ file also generated, you can keep it empty for now. working on it

## License

This project is licensed under the [MIT License](LICENSE).

---

<!-- References -->

[template]: https://badgen.net/static/github/template?icon=github
[license]: https://badgen.net/github/license/xkeshav/gh-repo-health
[issues]: https://badgen.net/github/open-issues/xkeshav/gh-repo-health
[PR]: https://badgen.net/github/prs/xkeshav/gh-repo-health
[commits]: https://badgen.net/github/commits/xkeshav/gh-repo-health/main?color=green
