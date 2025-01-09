
const useApi = async (search)=> {
  try {
    const key = import.meta.env.VITE_API_KEY;
    console.log("API Key:", key);


    const response = await fetch(
      `https://www.omdbapi.com/?t=${search}&apikey=${key}`
    );
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in useApi:", error);
    return { error: error.message };
  }
}

export default useApi;