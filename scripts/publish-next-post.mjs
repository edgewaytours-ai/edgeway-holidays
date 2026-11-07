import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pingSearchEngines } from "./ping-search-engines.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const queuePath = path.join(rootDir, "src", "data", "blogQueue.json");
const blogDataPath = path.join(rootDir, "src", "data", "blogData.ts");
const blogPagePath = path.join(rootDir, "src", "app", "blog", "page.tsx");

async function main() {
  if (!fs.existsSync(queuePath)) {
    console.log("No blogQueue.json found. Nothing to publish.");
    return;
  }

  const queueRaw = fs.readFileSync(queuePath, "utf-8");
  const queue = JSON.parse(queueRaw);

  if (!Array.isArray(queue) || queue.length === 0) {
    console.log("Blog queue is empty. All scheduled posts have been published!");
    return;
  }

  const nextPost = queue.shift();
  console.log(`🚀 Publishing next scheduled post: "${nextPost.title}" (${nextPost.slug})`);

  // 1. Insert into src/data/blogData.ts
  let blogDataContent = fs.readFileSync(blogDataPath, "utf-8");
  const marker = "export const blogPostsData: BlogPost[] = [";
  const postString = JSON.stringify(nextPost, null, 2);

  if (blogDataContent.includes(marker)) {
    blogDataContent = blogDataContent.replace(
      marker,
      `${marker}\n  ${postString},`
    );
    fs.writeFileSync(blogDataPath, blogDataContent, "utf-8");
    console.log("✅ Updated src/data/blogData.ts");
  } else {
    console.error("❌ Marker not found in blogData.ts");
  }

  // 2. Insert into src/app/blog/page.tsx index
  let blogPageContent = fs.readFileSync(blogPagePath, "utf-8");
  const pageMarker = "const blogPosts: BlogPost[] = [";
  const postSummary = {
    id: nextPost.slug,
    title: nextPost.title,
    excerpt: nextPost.metaDescription,
    category: nextPost.category,
    categoryLabel: nextPost.categoryLabel,
    image: nextPost.image,
    date: nextPost.date,
    readTime: nextPost.readTime,
    author: nextPost.author,
    featured: false,
  };
  const summaryString = JSON.stringify(postSummary, null, 2);

  if (blogPageContent.includes(pageMarker)) {
    blogPageContent = blogPageContent.replace(
      pageMarker,
      `${pageMarker}\n  ${summaryString},`
    );
    fs.writeFileSync(blogPagePath, blogPageContent, "utf-8");
    console.log("✅ Updated src/app/blog/page.tsx index list");
  }

  // 3. Save updated queue (with remaining posts)
  fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2), "utf-8");
  console.log(`✅ Queue updated. ${queue.length} post(s) remaining in queue.`);

  // 4. Ping search engines via IndexNow
  const publishedUrl = `https://edgewayholidays.com/blog/${nextPost.slug}`;
  console.log(`📡 Pinging IndexNow for: ${publishedUrl}`);
  await pingSearchEngines([publishedUrl, "https://edgewayholidays.com/sitemap.xml"]);

  console.log(`🎉 Successfully published and pinged: ${nextPost.title}`);
}

main().catch((err) => {
  console.error("Publication failed:", err);
  process.exit(1);
});
