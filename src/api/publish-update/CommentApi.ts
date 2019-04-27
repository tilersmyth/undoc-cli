import gql from "graphql-tag";

import { Apollo } from "../Apollo";
import keytar from "../../utils/keytar";
import { UndocFile } from "../../utils/UndocFile";

export class CommentApi {
  commit: any;
  path: string;
  query: any;
  comment: any;
  progress: any;

  constructor(
    commit: any,
    path: string,
    query: any,
    comment: any,
    progress: any
  ) {
    this.commit = commit;
    this.path = path;
    this.query = query;
    this.comment = comment;
    this.progress = progress;
  }

  async results(): Promise<any> {
    const token = await keytar.getToken();
    const config = await UndocFile.config();

    const operation = {
      query: gql`
        mutation CliPublishUpdateComment(
          $commit: ModuleCommit!
          $path: String!
          $query: [NodeUpdateQuery!]
          $comment: ModuleChildCommentInput!
          $progress: PublishProgress!
        ) {
          cliPublishUpdateComment(
            commit: $commit
            path: $path
            query: $query
            comment: $comment
            progress: $progress
          )
        }
      `,
      variables: {
        commit: this.commit,
        path: this.path,
        query: this.query,
        comment: this.comment,
        progress: this.progress
      },
      context: {
        headers: {
          Authorization: token,
          ProjectKey: config.key
        }
      }
    };
    try {
      const { cliPublishCreate } = await new Apollo(operation).fetch();

      return cliPublishCreate;
    } catch (err) {
      console.log(err.result);
      throw err;
    }
  }
}
