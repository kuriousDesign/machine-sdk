export interface NewValue {
  nodeId: string;
  value: any
}

export interface UserInput {
  nodeId: string;
  nodeDataType: any;
  value: any
}

export interface LoginInput {
  username: string,
  password: string,
}

export interface RecipeDeleteInput {
  index: number,
}
