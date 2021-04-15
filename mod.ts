addEventListener("fetch", (event) => {
  const response = new Response("Olá Mundo!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
