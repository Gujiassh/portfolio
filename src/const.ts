export const RESUME_key = "blog/1740731846670-w6fCrsKAw6XCjsKGLnBkZg=="

export const getResume = async () => {
   // 文件路径相对于public目录
   const fileUrl = 'resume.pdf';
   const fileName = '前端-三年-react-白傲.pdf';
   
   // 创建隐藏的a标签并触发点击
   const link = document.createElement('a');
   link.href = fileUrl;
   link.download = fileName;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
}
// export const getResume = async () => {
//   const response = await fetch("/api/file/getUrl", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       key: RESUME_key,
//     }),
//   })
//   const res = await response.json()
//   const url = res.data.url
//   if (url) {
//     window.open(url)
//   }
// }
