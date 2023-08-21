import format from "pg-format";
import { client } from "../database/database";
import { Developer, DeveloperCreate, DeveloperResult, DeveloperUpdate } from "../interfaces/developer.interfaces";

const createDev = async (payload: DeveloperCreate): Promise<Developer> => {
    const queryFormat: string = format(
        'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: DeveloperResult = await client.query(queryFormat);
    return query.rows[0];
};

const retrieve = async (devId: string): Promise<Developer> => {
    const queryString: string = `
        SELECT 
            d.id AS "developerId",
            d."name"  AS "developerName",
            d.email AS "developerEmail",
            i."developerSince"  AS "developerInfoDeveloperSince",
            i."preferredOS"  AS "developerInfoPreferredOS"
        FROM developers d 
        LEFT JOIN "developerInfos" i
            ON i."developerId" = d.id
        WHERE d.id = $1;
        `

    const query: DeveloperResult = await client.query(queryString, [devId]);
    return query.rows[0];
}


const partialUpdateDev = async (payload: DeveloperUpdate, devId: string): Promise<Developer> => {
    const queryFormat: string = format(
        'UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: DeveloperResult = await client.query(queryFormat, [devId]);
    return query.rows[0];
};

const deleteDev = async (devId: string): Promise<void> => {
    await client.query('DELETE FROM "developers" WHERE "id" = $1;', [devId])
}

export default { createDev, retrieve, partialUpdateDev, deleteDev };