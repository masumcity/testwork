export default defineEventHandler(async (event) => {
  const { slug } = event.context.params!;

  return await $fetch(`https://dummyjson.com/products/category/${slug}`, {
    headers: {
      Accept: "application/json",
    },
  });
});
