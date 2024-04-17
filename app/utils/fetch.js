export default async function get(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("failed to fetch!");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
