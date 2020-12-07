export type ValidateParamsArgs = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

export type ValidateParamsResult = {
  areValid: boolean;
  errorMsg?: string;
};
