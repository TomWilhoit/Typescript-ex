export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
