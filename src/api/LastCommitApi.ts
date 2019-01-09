import gql from "graphql-tag";

import { Apollo } from "./Apollo";

import { CliLastCommit_cliLastCommit } from "../types/schema";
import keytar from "../utils/keytar";
import { UndocFile } from "../utils/UndocFile";

export class LastCommitApi {
  branch: string;

  constructor(branch: string) {
    this.branch = branch;
  }

  async results(): Promise<CliLastCommit_cliLastCommit> {
    try {
      const token = await keytar.getToken();
      const config = await UndocFile.config();

      const operation = {
        query: gql`
          query CliLastCommit($branch: String!) {
            cliLastCommit(branch: $branch) {
              commit {
                sha
                branch
              }
              error {
                path
                message
              }
            }
          }
        `,
        variables: { branch: this.branch },
        context: {
          headers: {
            Authorization: token,
            ProjectKey: config.key
          }
        }
      };

      const {
        cliLastCommit: { error, commit }
      } = await new Apollo(operation).fetch();

      if (error) {
        throw error.message;
      }

      return commit;
    } catch (err) {
      throw err;
    }
  }
}
