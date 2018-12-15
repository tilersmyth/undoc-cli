/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProjectMutation
// ====================================================

export interface CreateProjectMutation_cliCreateProject {
  key: string;
  name: string;
}

export interface CreateProjectMutation {
  cliCreateProject: CreateProjectMutation_cliCreateProject;
}

export interface CreateProjectMutationVariables {
  name: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserProjectsQuery
// ====================================================

export interface UserProjectsQuery_cliUserProjects {
  id: string;
  key: string;
  name: string;
}

export interface UserProjectsQuery {
  cliUserProjects: UserProjectsQuery_cliUserProjects[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CliLastCommit
// ====================================================

export interface CliLastCommit_cliLastCommit {
  sha: string;
  branch: string;
}

export interface CliLastCommit {
  cliLastCommit: CliLastCommit_cliLastCommit | null;
}

export interface CliLastCommitVariables {
  projectId: string;
  branch: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_cliLogin {
  token: string | null;
  error: string | null;
}

export interface LoginMutation {
  cliLogin: LoginMutation_cliLogin;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_cliMe {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface MeQuery {
  cliMe: MeQuery_cliMe | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PublishMutation
// ====================================================

export interface PublishMutation {
  cliPublishCreate: boolean;
}

export interface PublishMutationVariables {
  file: ModuleFile;
  sha: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface ModuleChildComment {
  shortText?: string | null;
  text?: string | null;
}

export interface ModuleChildParameters {
  name?: string | null;
  type?: ModuleChildType | null;
}

export interface ModuleChildSignature {
  name?: string | null;
  kind?: string | null;
  type?: ModuleChildType | null;
  comment?: ModuleChildComment | null;
  parameters?: ModuleChildParameters[] | null;
  typeParameter?: ModuleChildParameters[] | null;
}

export interface ModuleChildType {
  type?: string | null;
  name?: string | null;
  refPath?: string | null;
  types?: ModuleChildType[] | null;
}

export interface ModuleChildren {
  name: string;
  comment?: ModuleChildComment | null;
  children?: ModuleChildren[] | null;
  type?: ModuleChildType | null;
  indexSignature?: ModuleChildSignature | null;
  getSignature?: ModuleChildSignature | null;
  signatures?: ModuleChildSignature[] | null;
  typeParameter?: ModuleChildParameters[] | null;
}

export interface ModuleFile {
  name: string;
  kind?: string | null;
  path: boolean;
  children?: ModuleChildren[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
