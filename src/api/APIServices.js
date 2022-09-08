// Abstracted Api Services for CRUD operations

export async function simpleGetCall(url) {
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
export async function simplePostCall(url, requestBody) {

  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}

export async function multipartPostCall(url, requestBody) {
  return await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      // 'Authorization': 'Token ' + await AsyncStorage.getItem(AppStrings.TOKEN)
    },
    body: requestBody,
  })
    .then((response) => response.text())
    .then((result) => getResult(result));
}
