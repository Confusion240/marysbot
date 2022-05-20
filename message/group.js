const axios = require("axios")  
const { getBuffer , tanggal } = require("../lib/myfunc");

module.exports = async(cnf, anu) => {
try{
  
let metadata = await cnf.groupMetadata(anu.id)
let participants = anu.participants

for (let num of participants) {

try {
ppuser = await cnf.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i.ibb.co/qgjtM3n/img.jpg'
}

let shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppuser}`)

let chat = global.db.data.chats[anu.id] || {}

if (anu.action == 'add') {
let teks = (chat.setWelcome || '*Hola @user*\n*Welcome a @subject*\n*Tanggal : @tanggal*\n*Descripción :*\n@desc').replace(/@subject/g, metadata.subject).replace(/@user/g, `@${num.split('@')[0]}`).replace(/@tanggal/g, `${tanggal(new Date())}`).replace(/@desc/g, `${metadata.desc}`)
cnf.sendMessage(anu.id, { image: await getBuffer(`https://hardianto.xyz/api/welcome3?profile=${shortpc.data}&name=${num.split("@")[0]}&bg=https://i.ibb.co/HnTFh7K/IMG-20220106-074445.jpg&namegb=anak%20muda&member=2022`), caption: teks, mentions : [num]})
} else if (anu.action == 'remove') {
let teks = (chat.setLeave || '*Adiós @user 👋*\n*Tanggal : @tanggal*\n*Telah Meninggalkan Group @subject*').replace(/@subject/g, metadata.subject).replace(/@user/g, `@${num.split('@')[0]}`).replace(/@tanggal/g, `${tanggal(new Date())}`).replace(/@desc/g, `${metadata.desc}`)
cnf.sendMessage(anu.id, { image: await getBuffer(`https://hardianto.xyz/api/goodbye3?profile=${shortpc.data}&name=${num.split("@")[0]}&bg=https://i.ibb.co/HnTFh7K/IMG-20220106-074445.jpg&namegb=anak%20muda&member=2022`), caption: teks, mentions : [num]})
}
}  
}catch (e) {
console.log(e)
}
}
