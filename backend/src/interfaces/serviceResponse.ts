type ServiceMessage = { message: string };

type ServiceResponseErrorType = "INTERNAL_SERVER_ERROR";

type ServiceResponseError = {
  status: ServiceResponseErrorType;
  data: ServiceMessage;
};

type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED';
  data: T;
};

export type ServiceResponse<T> =
  | ServiceResponseError
  | ServiceResponseSuccess<T>;

