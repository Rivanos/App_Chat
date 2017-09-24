// fichier concernant l'insert et le select des messages

let connection = require ('../config/db')
let moment = require ("../config/moment")


class Message{

    constructor(row) {
        this.row = row
    }
    get messages  () {
        return this.row.messages
    }
    get date  () {
        return moment(this.row.date)
    }

  static create (content, cb) {
      connection.query('INSERT INTO messages SET messages = ?, date = ?', [content, new Date()], (err, result) => {
      if (err) throw err
      cb(result)
    })
  }

  static all (cb) {
      connection.query('SELECT * FROM messages', (err, rows) => {
          if (err) throw err
          cb(rows.map((row) => new Message(row)))
      })
  }

}

module.exports = Message
