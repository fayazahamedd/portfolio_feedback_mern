const API_URL = process.env.REACT_APP_API_URL;

export const getFeedback = async () => {
  const res = await fetch(`${API_URL}/feedback`);
  return res.json();
};

export const addFeedback = async (data) => {
  const res = await fetch(`${API_URL}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateFeedback = async (id, data) => {
  const res = await fetch(`${API_URL}/feedback/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteFeedback = async (id) => {
  const res = await fetch(`${API_URL}/feedback/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
