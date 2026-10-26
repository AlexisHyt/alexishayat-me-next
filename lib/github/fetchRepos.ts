"use server";

import type {
  GitHubRepository,
  GitHubRepositoryWithLanguages,
} from "@/types/github";

const getRequest = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.MY_GITHUB_TOKEN}`,
    },
    next: { revalidate: 3600 }, // cache d'1 heure
  });

  return await response.json();
};

export const fetchRepos = async () => {
  const response: GitHubRepository[] = await getRequest(
    `https://api.github.com/users/${process.env.MY_GITHUB_USER}/repos`,
  );

  const repos: GitHubRepositoryWithLanguages[] = [];

  for (const repo of response) {
    const languages = await getRequest(repo.languages_url);
    repos.push({
      ...repo,
      languages,
    });
  }

  return repos;
};
