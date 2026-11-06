// Automated Search Engine Indexing Notifier (IndexNow Protocol)
// Pings Bing, Yandex, Naver & IndexNow search engines immediately after a post is published.

const INDEXNOW_KEY = "a8b9c0d1e2f3456789abcdef01234567";
const HOST = "edgewayholidays.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

export async function pingSearchEngines(urls) {
  if (!urls || urls.length === 0) {
    console.log("No URLs provided to ping.");
    return;
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    console.log(`Sending indexing request for ${urls.length} URL(s) to IndexNow...`);
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`✅ Indexing request submitted successfully! Status: ${response.status}`);
    } else {
      console.log(`⚠️ Indexing response status: ${response.status} (${response.statusText})`);
    }
  } catch (error) {
    console.error("❌ Error sending indexing request:", error.message);
  }
}

// Allow direct CLI execution: node scripts/ping-search-engines.mjs <url1> <url2>
const args = process.argv.slice(2);
if (args.length > 0) {
  pingSearchEngines(args);
} else {
  // Default to our recent articles if run without arguments
  pingSearchEngines([
    "https://edgewayholidays.com/blog/hire-driver-in-sri-lanka",
    "https://edgewayholidays.com/blog/sri-lanka-10-day-itinerary-private-driver",
    "https://edgewayholidays.com/blog/cost-of-private-driver-sri-lanka",
    "https://edgewayholidays.com/sitemap.xml",
  ]);
}
