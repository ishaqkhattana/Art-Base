export const parseAxiosError = error => {
    let status = null;
    let message = "Network Error";
  
    if (error.message) {
      message = error.message;
    }
  
    if (error.response) {
      status = error.response.status;
      switch (status) {
        case 401:
          message = "Unauthorized";
          break;
        case 403:
          message = "Forbidden";
          break;
        case 404:
          message = "Not Found";
          break;
        case 405:
          message = "Method Not Allowed";
          break;
        case 500:
          message = "Internal Server Error";
          break;
        default:
          message = "Unknown error";
      }
  
      if (error.response.data) {
        message = error.response.data.message;
      }
    }
  
    return { errorMessage: message, errorStatus: status };
  };
  