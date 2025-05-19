// const baseURL = "https://localhost:7127/api/FeedbackData";
const baseURL = "https://jahnavis-hrdrc7dbhtatfkbg.canadacentral-01.azurewebsites.net/api/FeedbackData";

const feedbackApi = {
  submitFeedback: async (data) => {
    try {
      const response = await fetch(`${baseURL}/Create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      const text = await response.json();

      // console.log(text);

      if (!text.success) {
        return ("Error while uploading, please try again.");
      }
      
      return text ? text : null;

    } catch (error) {
      console.error("Failed to submit feedback:", error);
      return ("Internal server error, please try again."); // rethrow if you want to handle it in the UI
    }
  },

  getFeedback: async () => {
    const response = await fetch(`${baseURL}`);
    return await response.json();
  },

  updateFeedback: async (id, data) => {
    const response = await fetch(`${baseURL}/Update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  },

  deleteFeedback: async (id) => {
    const response = await fetch(`${baseURL}/Delete/${id}`, {
      method: "POST"
    });
    return await response.json();
  }
};

export default feedbackApi;
