import type { Project } from "../pages/Home/Home";

export const fetchProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "AI Documentation Engine",
          client: "Thoughtline Digital",
          status: "Ongoing",
          summary: "BART-powered summarization of internal docs."
        },
        {
          id: 2,
          name: "Client Insight Platform",
          client: "FinTech Corp",
          status: "Completed",
          summary: "Automated public data extraction."
        },
        {
          id: 3,
          name: "Analytics Wrapped",
          client: "Internal",
          status: "Upcoming",
          summary: "Yearly AI-generated insights & storytelling."
        }
      ]);
    }, 1200);
  });
};
