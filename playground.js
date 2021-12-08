const awords = require('./valid-words/awords')
const bwords = require('./valid-words/bwords')
const cwords = require('./valid-words/cwords')
const dwords = require('./valid-words/dwords')
const ewords = require('./valid-words/ewords')
const fwords = require('./valid-words/fwords')
const gwords = require('./valid-words/gwords')
const hwords = require('./valid-words/hwords')
const iwords = require('./valid-words/iwords')
const jwords = require('./valid-words/jwords')
const kwords = require('./valid-words/kwords')
const lwords = require('./valid-words/lwords')
const mwords = require('./valid-words/mwords')
const nwords = require('./valid-words/nwords')
const owords = require('./valid-words/owords')
const pwords = require('./valid-words/pwords')
const qwords = require('./valid-words/qwords')
const rwords = require('./valid-words/rwords')
const swords = require('./valid-words/swords')
const twords = require('./valid-words/twords')
const uwords = require('./valid-words/uwords')
const vwords = require('./valid-words/vwords')
const wwords = require('./valid-words/wwords')
const xwords = require('./valid-words/xwords')
const ywords = require('./valid-words/ywords')
const zwords = require('./valid-words/zwords')

const input = require(`readline-sync`)
const startword = input.question('What is the starting word? ').toUpperCase()
let currentword = startword

const endword = input.question("Choose your end word: ").toUpperCase()
let changecount = 0
let firstletter
let iswordvalid = false

// console.log(`${startword} ${currentword} ${endword}`)

while (changecount < 1) {
    firstletter = currentword[0]
    switch (firstletter) {
        case 'A':
            if (awords.awords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'B':
            if (bwords.bwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'C':
            if (cwords.cwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'D':
            if (dwords.dwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'E':
            if (ewords.ewords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'F':
            if (fwords.fwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'G':
            if (gwords.gwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'H':
            if (hwords.hwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'I':
            if (iwords.iwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'J':
            if (jwords.jwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'K':
            if (kwords.kwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'L':
            if (lwords.lwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'M':
            if (mwords.mwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'N':
            if (nwords.nwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'O':
            if (owords.owords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'P':
            if (pwords.pwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'Q':
            if (qwords.qwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'R':
            if (rwords.rwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'S':
            if (swords.swords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'T':
            if (twords.twords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'U':
            if (uwords.uwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'V':
            if (vwords.vwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'W':
            if (wwords.wwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'X':
            if (xwords.xwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'Y':
            if (ywords.ywords.includes(currentword)) {
                iswordvalid = true
            }
            break;
        case 'Z':
            if (zwords.zwords.includes(currentword)) {
                iswordvalid = true
            }
            break;
    }
    changecount++
}

// if (iswordvalid) {

// }
// while(changecount < 20) {
//     console.log('This is my ' + changecount + ' sally.')
//     changecount++
// }

// console.log('It took you ' + changecount + ' changes to get from ' + startword + ' to ' + endword + '.')


// currentword = input.question(`Great job!
// Start word: ${startword}
// Target word: ${endword}
// ChangeCount: ${changecount}
// The current word is now ${currentword}
// Make another change.`)
//                 changecount++

// currentword = input.question(`That is not a valid word. Please try again.
// Start word: ${startword}
// Target word: ${endword}
// The current word is now: ${currentword}`).toUpperCase()