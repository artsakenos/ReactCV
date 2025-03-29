export const http_get = async (url, onSuccess, onError) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HelpersHttp: Network response was not ok");
    }
    const data = await response.json(); // Assuming the API returns JSON
    onSuccess(data);
  } catch (error) {
    onError("HelpersHttp: Error fetching Get Request:", error);
  }
};

export const http_post = async (url, jsonBody, onSuccess, onError) => {
  const DEBUG = true;

  if (DEBUG) {
    console.log("[DEBUG http_post] Url", url);
    console.log("[DEBUG http_post] jsonBody", jsonBody);
  }
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonBody),
  })
    .then((response) => {
      if (DEBUG) console.log("[DEBUG http_post] response", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      console.error("[DEBUG http_post] Problem with the fetch:", error);
      onError(error);
    });
};
