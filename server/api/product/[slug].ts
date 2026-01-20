export default defineEventHandler(async (event) => {
  const { slug } = event.context.params!;

  try {
    return await $fetch(`https://dummyjson.com/products/${slug}`, {
      headers: {
        Accept: "application/json",
        "User-Agent": "NuxtServer",
      },
    });
  } catch (error: any) {
    console.error("PRODUCT API ERROR:", error?.response?.status);

    throw createError({
      statusCode: error?.response?.status || 500,
      statusMessage: "Product API failed",
    });
  }
});
