const fs = require('node:fs/promises');
const path = require('path');

// Full path to posts.json in the same folder as this script
const postsFilePath = path.join(__dirname, 'posts.json');
console.log(postsFilePath);
async function getStoredPosts() {
  const rawFileContent = await fs.readFile(postsFilePath, { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? [];
  return storedPosts;
}

function storePosts(posts) {
  return fs.writeFile(postsFilePath, JSON.stringify({ posts: posts || [] }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
