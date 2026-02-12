/**
 * API Service - Handles all backend communication
 * PERSON 2: Only you should edit this file!
 */

const API_BASE_URL = 'http://localhost:8000';

/**
 * Analyze route and get eco-score
 * @param {string} start - Start location
 * @param {string} end - End location
 * @returns {Promise<Object>} Route analysis data
 */
export async function analyzeRoute(start, end) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/analyze-route`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ start, end }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to analyze route');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * Check if backend is running
 * @returns {Promise<boolean>}
 */
export async function checkBackendHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    return false;
  }
}