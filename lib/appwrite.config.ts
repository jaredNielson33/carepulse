import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6690a48d0030bd8dc967")
  .setKey("9e52d92e6ac49e9071d7aaaad885b1a50af14e993ce3d6058f256ab2d507b9d22102eddad92ce34bd2338eac6a2452ca99a151363c20fb386ea1035fe215ded80a638a7291b0475429feee401d56855f6bdbf4a43a5cd2eb31e3ef0f698d92d00b35e129fb3efe02e9de28bb4f6335c07aac80510c021f5490f85fc8c66188d7");

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);