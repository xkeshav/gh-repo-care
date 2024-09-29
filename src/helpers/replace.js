// @ts-nocheck
import fs from "fs-extra";
import path from "path";
import { replaceInFile } from "replace-in-file";

const TEMPLATE_FOLDER = "__templates";

const moveFilesToFolder = (src, dest) => {
  try {
    return fs.copySync(src, dest);
  } catch (err) {
    console.error({ err });
    throw err;
  }
};

export const replaceDetailsInTemplateFiles = async (info, base_dir) => {
  const {
    first_name,
    last_name,
    user_email,
    user_name,
    repo_name,
    isRepoExist,
    userFolderName = ".github",
    isGithubFolderExist = false,
  } = info;
  const author_name = `${first_name} ${last_name}`;

  const sourcePath = path.resolve(base_dir, TEMPLATE_FOLDER);
  const destinationPath = path.resolve(isGithubFolderExist ? userFolderName : ".github");
  const options = {
    files: [`${destinationPath}/**`],
    from: [/<author_name>/g, /<author_email>/g, /<user_name>/g, /<repo_name>/g],
    to: [author_name, user_email, user_name, repo_name],
  };
  try {
    await moveFilesToFolder(sourcePath, destinationPath);
    const results = await replaceInFile(options);
    //console.log("Replacement results:", results);
    //console.log({ sourcePath, destinationPath });
    console.log(`\n 🎊 health files generated successfully on ${userFolderName}`);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};