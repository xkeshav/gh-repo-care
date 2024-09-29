#! /usr/bin/env node
import enquirePkg from "enquirer";
import semverPkg from "semver";

const { valid } = semverPkg;
// @ts-ignore
const { Snippet } = enquirePkg;

const packagePrompt = new Snippet({
  name: "package",
  message: "Fill out the fields for package.json",
  required: true,
  fields: [
    {
      name: "repo_name",
      message: "Repo Name",
    },
    {
      name: "author_name",
      message: "Author Name",
    },
    {
      name: "user_name",
      message: "Github username",
    },
    {
      name: "author_email",
      message: "Author Email",
    },
    {
      name: "version",
      /**
       * @param {string | semverPkg.SemVer | null | undefined} value
       * @param {any} state
       * @param {{ name: string; }} item
       */
      // @ts-ignore
      validate(value, state, item) {
        if (item && item.name === "version" && !valid(value)) {
          return packagePrompt.styles.danger("version should be a valid semver value");
        }
        return true;
      },
    },
  ],
  template: `{
  "name": "\${repo_name}",
  "description": "\${description:this is default repo description}",
  "version": "\${version:0.0.0}",
  "homepage": "https://github.com/\${user_name}/\${repo_name}",
  "author": {
  "\tname": "\${author_name}",
  "\temail": "\${author_email}"
  },
  "repository": {
  \t"type: "git",
  \t"url: "https://github.com/\${user_name}/\${repo_name}",
  },
  "bug": {
  \t"email: "\${author_email}",
  \t"url: "https://github.com/\${user_name}/\${repo_name}/\issues",
  },
  "license": "\${license:MIT}"
}
`,
});

packagePrompt
  .run()
  .then((answer) => console.log("Answers:", answer.result))
  .catch(console.error);
