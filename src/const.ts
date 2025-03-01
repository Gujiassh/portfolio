export const RESUME_key = "blog/1740731846670-w6fCrsKAw6XCjsKGLnBkZg=="

export const getResume = async () => {
  const response = await fetch("/api/file/getUrl", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: RESUME_key,
    }),
  })
  const res = await response.json()
  const url = res.data.url
  if (url) {
    window.open(url)
  }
}
