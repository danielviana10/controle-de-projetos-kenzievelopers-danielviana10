import { QueryResult } from "pg";

type Prefer = "Windows" | "Linux" | "MacOS";

type DeveloperInfo = {
    id: number;
    developerSince: Date;
    preferedOS: Prefer;
    developerId: number;
}

type DeveloperInfoCreate = Omit<DeveloperInfo, "id">;
type DeveloperInfoResult = QueryResult<DeveloperInfo>;

export { DeveloperInfo, DeveloperInfoCreate, DeveloperInfoResult };