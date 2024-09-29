#! /usr/bin/env node
import enquirePkg from "enquirer";
import path from "path";
import { replaceDetailsInTemplateFiles } from "../src/helpers/replace.js";

// @ts-ignore
const { Input, Toggle, Form, Confirm } = enquirePkg;

// @ts-ignore
const base_dir = path.dirname(import.meta.dirname);

const userForm = new Form({
  name: "form",
  message: "Please provide the following information:",
  choices: [
    { name: "first_name", message: "Your First Name", initial: "" },
    { name: "last_name", message: "Your Last Name", initial: "" },
    { name: "user_name", message: "GitHub username", initial: "" },
    { name: "repo_name", message: "Github Repository Name", initial: "" },
    {
      type: "input",
      name: "user_email",
      message: "Your Email Address",
      initial: "",
    },
  ],
});

const doesRepoExist = new Toggle({
  name: "repo",
  message: "Are you doing it for existing repo?",
  enabled: "Yes",
  disabled: "No",
});

const doesGithubFolderExist = new Toggle({
  name: "github",
  message: "Do you have `.github` folder in your repo?",
  enabled: "Yes",
  disabled: "No",
});

let userFolderName = "github__";

const userFolder = new Input({
  id: "user_folder",
  message: "Tell a new folder name where you like to generate the health files?",
  initial: userFolderName,
});

const agreeToProceed = new Confirm({
  name: "agree",
  message: "Are you agree to proceed to generate health files in your repo?",
});

const askTheUser = () => {
  doesRepoExist
    .run()
    .then((isRepoExist) => {
      if (isRepoExist) {
        doesGithubFolderExist
          .run()
          .then(async (isGithubFolderExist) => {
            if (isGithubFolderExist) {
              userFolderName = await userFolder.run().catch(console.error);
            }
            userForm
              .run()
              .then(async (formData) => {
                console.log("Below are the details you have submitted.");
                console.table(formData);
                const dataToSend = { ...formData, isRepoExist, isGithubFolderExist, userFolderName };
                const consent = await agreeToProceed.run().catch(console.error);
                consent && replaceDetailsInTemplateFiles(dataToSend, base_dir);
              })
              .catch(console.error);
          })
          .catch(console.error);
      } else {
        userForm
          .run()
          .then(async (formData) => {
            const dataToSend = { ...formData, isRepoExist };
            const consent = await agreeToProceed.run().catch(console.error);
            consent && replaceDetailsInTemplateFiles(dataToSend, base_dir);
          })
          .catch(console.error);
      }
    })
    .catch(console.error);
};

askTheUser();
