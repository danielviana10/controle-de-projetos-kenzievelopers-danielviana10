import { QueryResult } from "pg";

type Project = {
    id: number;
    name: string;
    description?: string | null | undefined;
    repository: string;
    startDate: Date;
    endDate: Date;
    developId: number;
};

type ProjectCreate = Omit<Project, "id">;
type ProjectUpdate = Partial<ProjectCreate>;
type ProjectResult = QueryResult<Project>;

export { Project, ProjectCreate, ProjectUpdate, ProjectResult };