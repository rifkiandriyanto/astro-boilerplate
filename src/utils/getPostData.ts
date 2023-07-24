import readingTime from "reading-time";

export default function getPostData(post: string) {
  return {
    readingTime: readingTime(post).text,
  };
}
