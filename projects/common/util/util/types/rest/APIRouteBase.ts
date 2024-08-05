export type APIRouteBase = (
  | {
      method: "GET";
      path: string;
      request?: Record<string, string>;
    }
  | {
      method: "POST" | "PUT" | "DELETE" | "PATCH";
      path: string;
      requestType: "none" | "text" | "urlEncoded";
    }
  | {
      method: "POST" | "PUT" | "DELETE" | "PATCH";
      path: string;
      requestType: "json";
      request: any;
    }
  | {
      method: "POST" | "PUT" | "DELETE" | "PATCH";
      path: string;
      requestType: "formData";
      request: Record<string, any>;
    }
) &
  (
    | {
        responseType: "arrayBuffer" | "blob" | "formData" | "text";
      }
    | {
        responseType: "json";
        response: any;
      }
  );
