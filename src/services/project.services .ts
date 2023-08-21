import format from "pg-format";
import { client } from "../database/database";
import { Project, ProjectCreate, ProjectResult, ProjectUpdate } from "../interfaces/project.interfaces";

const createProject = async (payload: ProjectCreate): Promise<Project> => {
    const queryFormat: string = format(
        'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: ProjectResult = await client.query(queryFormat);
    return query.rows[0];
};

const retrieve = async (projectId: string): Promise<Project> => {
    const queryString: string = `
        SELECT 
            p.id AS "projectId",
            p.name AS "projectName",
            p.description AS "projectDescription",
            p.repository AS "projectRepository",
            p."startDate" AS "projectStartDate",
            p."endDate" AS "projectEndDate",
            d."name" AS "projectDeveloperName"
        FROM projects p 
        LEFT JOIN developers d 
            ON p."developerId" = d.id
        WHERE p.id = $1;
    `
    const query: ProjectResult = await client.query(queryString, [projectId]);
    return query.rows[0];
}


const partialUpdateProject = async (payload: ProjectUpdate, devId: string): Promise<Project> => {
    const queryFormat: string = format(
        'UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: ProjectResult = await client.query(queryFormat, [devId]);
    return query.rows[0];
};



export default { createProject, retrieve, partialUpdateProject };