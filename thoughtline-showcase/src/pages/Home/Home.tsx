import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import PageWrapper from "../../components/layout/PageWrapper";
import ProjectGrid from "../../components/projects/ProjectGrid";
import { fetchProjects } from "../../services/projectService";
import "./Home.css";

export type ProjectStatus = "Past" | "Current" | "Upcoming";

export interface Project {
  id: number;
  name: string;
  client: string;
  status: ProjectStatus;
  summary: string;
}

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ProjectStatus | "All">("All");

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, status, projects]);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const data = await fetchProjects();
      setProjects(data);
      setFiltered(data);
    } catch (err) {
      console.error("Failed to fetch projects", err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let result = [...projects];

    if (status !== "All") {
      result = result.filter((p) => p.status === status);
    }

    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.client.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  };

  return (
    <PageWrapper>
      <Navbar search={search} onSearchChange={setSearch} />

      <div className="home-container">
        <div className="filter-tabs">
          {["All", "Current", "Past", "Upcoming"].map((s) => (
            <button
              key={s}
              className={status === s ? "active" : ""}
              onClick={() => setStatus(s as any)}
            >
              {s}
            </button>
          ))}
        </div>

        <ProjectGrid projects={filtered} loading={loading} />
      </div>
    </PageWrapper>
  );
};

export default Home;
