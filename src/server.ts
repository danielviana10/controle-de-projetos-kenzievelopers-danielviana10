import app from './app'
import "dotenv/config";
import { startDatabase } from './database/database'


const PORT = Number(process.env.PORT);

app.listen(PORT, async () => {
    await startDatabase()
    console.log(`Server is running on port ${PORT}.`)
});
