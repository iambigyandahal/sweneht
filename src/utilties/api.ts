const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const PRETTY = (url: string) => {
  return `${url}?print=pretty`;
}

export const TOP_STORIES = `${BASE_URL}/topstories.json`;
export const ASK_STORIES = `${BASE_URL}/askstories.json`;
export const SHOW_STORIES = `${BASE_URL}/showstories.json`;
export const JOB_STORIES = `${BASE_URL}/jobstories.json`;
export const LATEST = `${BASE_URL}/maxitem.json`;
export const UPDATES = `${BASE_URL}/updates.json`;

export const USER = (username: string) => {
  return `${BASE_URL}/user/${username}.json`;
};

// story, comment, ask, job, poll, one of its parts
export const ITEM = (id: number) => {
  return `${BASE_URL}/item/${id}.json?print=pretty`;
};