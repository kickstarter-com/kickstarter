const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
// const maindb = require("../database-mongo/index.js");
// const Article = require("../database-mongo/index.js").Article;
// const URI = require("../config/keys.js").mongoURI;

const projectData = {
  projectId: 110,
  projectName: "pro",
  projectTeazer: "protea",
  owner: "onr",
  rate: 11,
  currentFund: "currentFund",
  goalFund: 444,
  numberOfBackers: 11,
  daysToGO: 11,
  BackersIds: 1151,
  projectImg: "projectImg11",
  majorDescriptionImg: "majorDescriptionImg1",
  majorDescription: "majorDescription1",
  minorDescriptionImg: "minorDescriptionIm1g",
  minorDescription: "minorDescriptio1n"
};

describe("insert", () => {
  let connection;
  let db;
  let URI =
    "mongodb+srv://Kickstarter:kickstarter@cluster0-pucsw.mongodb.net/maindb?retryWrites=true&w=majority";
  let dbName = "maindb";

  beforeAll(async () => {
    connection = await MongoClient.connect(URI, {
      useNewUrlParser: true
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it("create & save project successfully", async () => {
    const articles = db.collection("articles");

    // const validProject = new Article(projectData);
    // const savedProject = await validProject.save();

    await articles.insertOne(projectData);
    const insertedProject = await articles.findOne({ projectId: 110 });
    expect(insertedProject).toEqual(projectData);
  });
});

// describe("Article Model Test", () => {
//   beforeAll(async () => {
//     await mongoose.connect(
//       global.__MONGO_URI__,
//       { useNewUrlParser: true, useCreateIndex: true },
//       err => {
//         if (err) {
//           console.error(err);
//           process.exit(1);
//         }
//       }
//     );
//   });

// expect(savedProject._id).toBeDefined();
//     expect(savedProject.projectId).toBe(projectData.projectId);
//     expect(savedProject.projectName).toBe(projectData.projectName);
//     expect(savedProject.projectTeazer).toBe(projectData.projectTeazer);
//     expect(savedProject.owner).toBe(projectData.owner);
//     expect(savedProject.rate).toBe(projectData.rate);
//     expect(savedProject.currentFund).toBe(projectData.currentFund);
//     expect(savedProject.goalFund).toBe(projectData.goalFund);
//     expect(savedProject.numberOfBackers).toBe(projectData.numberOfBackers);
//     expect(savedProject.daysToGO).toBe(projectData.daysToGO);
//     expect(savedProject.BackersIds).toBe(projectData.BackersIds);
//     expect(savedProject.projectImg).toBe(projectData.projectImg);
//     expect(savedProject.majorDescriptionImg).toBe(
//       projectData.majorDescriptionImg
//     );
//     expect(savedProject.majorDescription).toBe(projectData.majorDescription);
//     expect(savedProject.minorDescriptionImg).toBe(
//       projectData.minorDescriptionImg
//     );
//     expect(savedProject.minorDescription).toBe(projectData.minorDescription);

// You shouldn't be able to add in any field that isn't defined in the schema
// it("insert user successfully, but the field does not defined in schema should be undefined", async () => {
//   const userWithInvalidField = new UserModel({
//     name: "TekLoon",
//     gender: "Male",
//     nickname: "Handsome TekLoon"
//   });
//   const savedUserWithInvalidField = await userWithInvalidField.save();
//   expect(savedUserWithInvalidField._id).toBeDefined();
//   expect(savedUserWithInvalidField.nickkname).toBeUndefined();
// });

// Test Validation is working!!!
// It should us told us the errors in on gender field.
//   it("create user without required field should failed", async () => {
//     const userWithoutRequiredField = new UserModel({ name: "TekLoon" });
//     let err;
//     try {
//       const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
//       error = savedUserWithoutRequiredField;
//     } catch (error) {
//       err = error;
//     }
//     expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
//     expect(err.errors.gender).toBeDefined();
//   });
// });
// describe("insert", () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, {
//       useNewUrlParser: true
//     });
//     db = await connection.db(global.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//     await db.close();
//   });

//   it("should insert a doc into collection", async () => {
//     const projects = db.collection("articles");

//     const mockProject = {
//       projectId: "102",
//       projectName: "projectName",
//       projectTeazer: "projectTeazer",
//       owner: "owner",
//       rate: "rate",
//       currentFund: "currentFund",
//       goalFund: "goalFund",
//       numberOfBackers: "numberOfBackers",
//       daysToGO: "daysToGO",
//       BackersIds: "BackersIds",
//       projectImg: "projectImg",
//       majorDescriptionImg: "majorDescriptionImg",
//       majorDescription: "majorDescription",
//       minorDescriptionImg: "minorDescriptionImg",
//       minorDescription: "minorDescription"
//     };
//     await projects.insertOne(mockProject);

//     const insertedProject = await projects.findOne({ _id: "some-project-id" });
//     expect(insertedProject).toEqual(mockProject);
//   });
// });
