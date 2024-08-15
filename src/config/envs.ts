 import 'dotenv/config';
 import * as joi from 'joi';

 interface EnvVars {
   PORT: number;
   PORT_MONGO_DB : number;
   HOST_MONGO_DB : string;
   DATABASE_MONGO_DB : string;
 }

 const envsSchema = joi.object({
   PORT : joi.number().required(),
   PORT_MONGO_DB : joi.number().required(),
   HOST_MONGO_DB : joi.string().required(),
   DATABASE_MONGO_DB : joi.string().required(),
 })
 .unknown(true);

 const {error, value} = envsSchema.validate(process.env);

 if (error)
   throw new Error(`Config validation errror  ${error.message}`)

 const envVars: EnvVars = value;

 export const envs = {
   port : envVars.PORT,
   port_mongo_db : envVars.PORT_MONGO_DB,
   host_mongo_db : envVars.HOST_MONGO_DB,
   database_mongo_db : envVars.DATABASE_MONGO_DB,
 }
