import { handleError } from "./handleErros.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { devIdExists } from "./devIdExists.middleware";
import { devInfoExists } from "./devInfoExists.middleware";
import { projectIdExistst } from "./projectIdExists.middleware";
import { preferredIsValid } from "./preferredIsValid.middleware";

export default { handleError, uniqueEmail, devIdExists, devInfoExists, projectIdExistst, preferredIsValid };