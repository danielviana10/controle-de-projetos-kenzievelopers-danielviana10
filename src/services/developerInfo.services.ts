import format from "pg-format";
import { DeveloperInfo, DeveloperInfoCreate, DeveloperInfoResult } from "../interfaces/developerInfo.interfaces";
import { client } from "../database/database";

const createInfo = async (payload: DeveloperInfoCreate): Promise<DeveloperInfo> => {
    const queryFormat: string = format(
        'INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;',
        Object.keys(payload),
        Object.values(payload)
    );

    const query: DeveloperInfoResult = await client.query(queryFormat);
    return query.rows[0];
};

export default { createInfo };