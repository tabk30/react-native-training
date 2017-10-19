/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import SQLite from 'react-native-sqlite-storage';


export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App:Init");
    this.initTestSqline();
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }

  initTestSqline() {


    var db = SQLite.openDatabase(
      "test.db",
      "1.0",
      "Test Database",
      200000,
      this.openCB,
      this.errorCB
    );


    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE COMPANY(' +
        'ID INT PRIMARY KEY     NOT NULL,' +
        'NAME           TEXT    NOT NULL,' +
        'AGE            INT     NOT NULL,' +
        'ADDRESS        CHAR(50),' +
        'SALARY         REAL);'
        , [], (tx, results) => {
          console.log("Query completed", results);
        });



      tx.executeSql(
        'INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)' +
        'VALUES (1, \'Paul\', 32, \'California\', 20000.00 );',
        [],
        (tx, results) => {
          console.log("Query Insert completed", results);
        }
      );


      tx.executeSql(
        'INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES' +
        '(3, \'Pham Tuan Anh\', 27, \'hai duong\', 20000.00 ),' +
        '(4, \'Hoang\', 32, \'ha noi\', 20000.00 ),' +
        '(5, \'Long\', 24, \'Quang Ninh\', 20000.00 ),' +
        '(6, \'Khanh\', 37, \'TP.HCM\', 20000.00 );'
        ,
        [],
        (tx, results) => {
          console.log("Query Insert completed", results);
        }
      );



      tx.executeSql(
        'INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) VALUES' +
        '(?, ?, ?, ?, ?));'
        ,
        ['7', 'Hong', 'Dien Bin', 20000.00],
        (tx, results) => {
          console.log("Query Insert completed", results);
        }
      );


      tx.executeSql(
        'SELECT * FROM COMPANY;'
        ,
        [],
        (tx, results) => {
          console.log("Query Insert completed", results, results.rows.length);
          // Get rows with Web SQL Database spec compliance.

          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log('SELECT RESULT', row);
          }

        }
      );


      if (db) {
        db.close().then((status) => { }).
          catch((error) => { });
      }

      
    });



  }

  render() {
    return (
      <View style={styles.container}>
        <Text> TEST SQLite </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  }
});
