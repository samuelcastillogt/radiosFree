

// import { useSQLiteContext } from 'expo-sqlite/next';
// const db = useSQLiteContext();
// export async function setup() {
//     try {
//         await db.execAsync(`
//         PRAGMA journal_mode = WAL;
//         CREATE TABLE IF NOT EXISTS db (id INTEGER PRIMARY KEY NOT NULL, idRadio TEXT);
//     `);  
    
//         await db.execAsync(`
//         PRAGMA journal_mode = WAL;
//         CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, idRadio TEXT);
//     `);  
// //     await db.execAsync(`
// //     PRAGMA journal_mode = WAL;
// //     DROP TABLE db;
// // `); 
//     } catch (error) {
//         console.log(error)
//     }
//   }
//   export const saveTask = async(id)=>{
//     await db.runAsync(`INSERT INTO db (idRadio) VALUES (?)`, id)        
//     setOpen()
//   }
