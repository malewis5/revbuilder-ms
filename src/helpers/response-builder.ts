export enum ApiErrors {
  "missing_authentication" = "The request does not have the authentication header",
  "token_expired" = "Token expired",
  "invalid_parameters" = "Request with missing or invalid parameters",
  "validation_error" = "Request with invalid data",
  "authentication_error" = "Unauthorized: Authentication error",
}

export interface ApiResponse {
  status?: number;
  result: any;
}

export function sendApiResponse(res: any, message: ApiResponse) {
  let status: number = message.status || 200;
  if (res.code) {
    return res.code(status).send(message.result);
  } else {
    return res.status(status).send(message.result);
  }
}

export function sendApiErrorResponse(res: any, message: ApiResponse) {
  let status: number = message.status || 500;
  if (res.code) {
    return res.code(status).send(message.result);
  } else {
    return res.status(status).send(message.result);
  }
}
