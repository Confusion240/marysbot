/////SI EDITAS DEJA CRÉDITOS
////BOT CREADO POR CONFU
////ALGUNAS FUNCIONES PERTENECEN A BOTS CREADOS POR CONFUMODS Y ALGUNOS POR ZEEONEOFC
////SI EDITAS DEJA CRÉDITOS
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\\
//
//
//
//
//
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\\

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const hx = require('hxz-api')
const xfar = require('xfarr-api')
const ra = require('ra-api')
const kotz = require('kotz-api')
const yts = require("yt-search")
const path = require('path')
const os = require('os')
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
/*const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")*/
const moment = require('moment-timezone')
const speed = require('performance-now')
const Instagram = require('instagram-web-api')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
 const { menu } = require("./src/help.js")

const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
/*const { setppig, login, logout, upinstastory, follow, unfollow, likepost, unlikepost } = require('./lib/handlerIG')*/
  apikeys = ['jAICsHSF','HsfUcTFC','mVxSgrfA','kN99U7dX','bBaPNMf7','A85dVx8b','oLfitSmT','EiEr76KW','xqGysIm2','2o4XWgTa','aSQkEYvl','wEyxHNtS','9lmpClQs','Jq7Ema8P','VyJA28kT','iEFPEC54','dLnRSVij','cXuE2QiG','RarjiwMZ','xm2wbMvA','edqQMbF9','5Zj8CAyC','hJhR3dAj','yVVKo9Nj','GHimzwCh']
  let apialpha = apikeys[Math.floor(Math.random() * apikeys.length)]

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━\\
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    ...(global.db || {})
}

//━━━━━━━━━━━━━━━[ DATABASE.DB ]━━━━━━━━━━━━━━━\\
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = cnf = async (cnf, m, msg, M, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await cnf.decodeJid(cnf.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)    

////////////////////////////////////////////////////	    
	    const textImg = (teks, buffer = fs.readFileSync(global.fakeImg), msg, men) => {
            cnf.sendMessage(m.chat, { text: teks, jpegThumbnail: buffer, mention: men ? men : [] }, { quoted: msg ? mess : msg })
             }
const sendFile = async (from, url, caption, msg, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return cnf.sendMessage(from, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: msg})
}
let type = mime.split("/")[0]+"Message"
if(mime.split("/")[0] === "image"){
return cnf.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
} else if(mime.split("/")[0] === "video"){
return cnf.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: msg})
} else if(mime.split("/")[0] === "audio"){
return cnf.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: msg })
} else {
return cnf.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: msg })
}
}

(function(_0x287a88,_0x40fcb3){const _0x204970=_0xfd93,_0x539cc5=_0x287a88();while(!![]){try{const _0x4c5e65=parseInt(_0x204970(0xd8))/0x1*(parseInt(_0x204970(0xde))/0x2)+parseInt(_0x204970(0xd6))/0x3+-parseInt(_0x204970(0xd5))/0x4+parseInt(_0x204970(0xdd))/0x5+-parseInt(_0x204970(0xda))/0x6*(parseInt(_0x204970(0xd7))/0x7)+parseInt(_0x204970(0xdb))/0x8*(parseInt(_0x204970(0xdc))/0x9)+parseInt(_0x204970(0xdf))/0xa*(-parseInt(_0x204970(0xd3))/0xb);if(_0x4c5e65===_0x40fcb3)break;else _0x539cc5['push'](_0x539cc5['shift']());}catch(_0x567664){_0x539cc5['push'](_0x539cc5['shift']());}}}(_0x472f,0x4e2d9));function _0xfd93(_0xcac9b4,_0x46dd06){const _0x472f17=_0x472f();return _0xfd93=function(_0xfd93d,_0x5851b1){_0xfd93d=_0xfd93d-0xd3;let _0x35682e=_0x472f17[_0xfd93d];return _0x35682e;},_0xfd93(_0xcac9b4,_0x46dd06);}function _0x472f(){const _0x281cfe=['11WpKRKc','ZyyXtrime.gif','52168EwBxZh','941949LHoyFh','621313xvGJGq','124CJJdpd','chat','30jfYavq','3176oumfFV','3204VQmycP','2398180DZSxLK','4894kNYpBP','4613250gNwvnZ','sendMessage'];_0x472f=function(){return _0x281cfe;};return _0x472f();}const sendGif=(_0x435afd,_0x390185)=>{const _0x140da9=_0xfd93;cnf[_0x140da9(0xe0)](m[_0x140da9(0xd9)],_0x435afd,'videoMessage',{'mimetype':'video/gif','filename':_0x140da9(0xd4),'gifPlayback':!![],'caption':_0x390185,'sendEphemeral':!![],'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'quoted':m});};
//━━━━━━━━━━━━━━━[ FUNCIONES PARA GRUPOS ]━━━━━━━━━━━━━━━\\
        const groupMetadata = m.isGroup ? await cnf.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : cnf.decodeJid
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
		const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false

//━━━━━━━━━━━━━━━[ prueba ]━━━━━━━━━━━━━━━\\

 /*try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
*/
//━━━━━━━━━━━━━━━[ BOTONES ]━━━━━━━━━━━━━━━\\
const sendButton5 = async (id, text1, desc1, yo) => {

var buatpesan = await generateWAMessageFromContent(m.chat, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "Alcatraz-Bots",
              "url": "https://chat.whatsapp.com/"
            }
          },
          {
            "callButton": {
              "displayText": "Owner",
              "phoneNumber": "+56 9 9944 8163"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Donar",
              "id": `${prefix}donar`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Script",
              "id": `${prefix}script`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
cnf.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

let buton = [
{ callButton: {displayText: `Instagram`, url: `https://instagram.com/confumods/`} },
{ urlButton: { displayText: `Owner`, phoneNumber : `+56999448163`} },
{ quickReplyButton: { displayText: `Donar`, id: `${prefix}donar` } },
{ quickReplyButton: { displayText: `Reglas:)`, id: `${prefix}reglas` } },
{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
]

//━━━━━━━━━━━━━━━[ PUBLIC Y SELF ]━━━━━━━━━━━━━━━\\
        if (!cnf.public) {
            if (!m.key.fromMe) return
        }

//━━━━━━━━━━━━━━━[ AUTO LEER MENSAJE ]━━━━━━━━━━━━━━━\\
        if (m.message) {
            cnf.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ CHAT ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('de'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('en'), chalk.green(m.isGroup ? pushname : 'Privado', m.chat) + '\n' + chalk.white('◄✜┢┅━┅━┅ீ͜ৡৢ͜͡✦━━┅━━◇━━━┅━━ீ͜ৡৢ͜͡✦┅━┅━┅┧✜►'))
        }
	
//━━━━━━━━━━━━━━━[ PRUEBA ]━━━━━━━━━━━━━━━\\
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
           // console.log('Updating Database...')
        }, 60 * 1000)

/*	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "America/Santiago"
        })

//━━━━━━━━━━━━━━━[ yo ]━━━━━━━━━━━━━━━\\

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await cnf.setStatus(`🤖 ${cnf.user.name} | ⏳ Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
*/	    
/*	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nSe te ha detectado enviando un enlace de grupo, lo sentimos, serás expulsado !`)
        if (!isBotAdmins) return reply(`bot no administrador T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await cnf.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return 
        if (isAdmins) return 
        if (isCreator) return 
        cnf.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
*/       



  if (m.isBaileys && m.fromMe) return true
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let isGroupLink = linkRegex.exec(m.text)

  if (isAntiLink && isGroupLink && !isAdmins && !m.isBaileys && m.isGroup) {
 //   let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
//    if (m.text.includes(thisGroup)) throw false 
      if (!isBotAdmins) m.reply(` *「 ANTILINK 」* ${isAdmins ? "El administrador es gratis hermano :'v" : `\n\nEnlace detectado, No soy administrador, así que no puedo eliminarlo!`}`)
    if (isBotAdmins) {
      m.reply(` *「 ANTILINK 」* \n\nLink detectado, adiós, serás expulsado!!`.trim())
       await sleep(1000)
      await cnf.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }


//━━━━━━━━━━━━━━━[ FECHA/HORA ]━━━━━━━━━━━━━━━\\        
        moment.tz.setDefault("America/Santiago").locale("es");

let dt = moment(Date.now()).tz('America/Santiago').locale('es').format('a')
const ucapanWaktu = "Feliz "+dt.charAt(0).toUpperCase() + dt.slice(1)

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━\\        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: cnf.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, cnf.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        cnf.ev.emit('messages.upsert', msg)
        }

//━━━━━━━━━━━━━━━[ 𝗚𝗔𝗠𝗘 ]━━━━━━━━━━━━━━━\\	    
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    if (!/^([1-9]|(me)?perdi|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'El juego ha terminado',
	    '-2': 'Invalido',
	    '-1': 'Posición no válida',
	    0: 'Posición inválida',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Gano!` : isTie ? `Juego terminado` : `Doblar ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Escribir *perdi* para rendirse y admitir la derrota`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await cnf.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await cnf.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|ok|vamos|juguemos|go|deuna|si|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(rechazar|no|luego|n|no(.)?bisa)/i.test(m.text)) {
	    cnf.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rechazar suit, el juego se cancela`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    cnf.sendText(m.chat, `El juego ha sido enviado al chat.

@${roof.p.split`@`[0]} y 
@${roof.p2.split`@`[0]}

Por favor elige una opción en el chat respectivo"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) cnf.sendText(roof.p, `Por favor seleccione \n\nPiedra🗿\nPapel📄\nTijeras✂️`, m)
	    if (!roof.pilih2) cnf.sendText(roof.p2, `Por favor seleccione \n\nPiedra🗿\nPapel📄\nTijeras✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) cnf.sendText(m.chat, `Ningún jugador tiene intención de jugar,\nJuego cancelado❗`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    cnf.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} no elijiste nada, fin del juego`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(tijeras|piedra|papel)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih2 ? `\n\nEsperando a que el oponente elija...` : ''}`)
	    if (!roof.pilih2) cnf.sendText(roof.p2, '_El oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih ? `\n\nEsperando a que el oponente elija...` : ''}`)
	    if (!roof.pilih) cnf.sendText(roof.p, '_Tu oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    cnf.sendText(roof.asal, `_*Resultados del Juego*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganador \n` : ` Perdedor \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganador \n` : ` Perdedor \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
/*let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }*/
        
        
        
        
        
///////////-=-=-=-=-=-=-=-=-=-=-=-SWTICH=-=-=-=-=-=-=-=-=-=-=-\\\\\\\\\\\\\


        switch(command) {
        
        
///////////-=-=-=-=-=-=-=-=-=-=-=-SWTICH=-=-=-=-=-=-=-=-=-=-=-\\\\\\\\\\\\\        
        
        
        
        
        
/*case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	*/
            
           case 'menu': case 'help': case '?': {
                   
latensie = performance.now()
 anu = `🐣𝙼𝙰𝚁𝚈-𝙱𝙾𝚃-𝙼𝙳🐣`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/zyy.jpg')},
                            hydratedFooterText: `┌─❖
│「 Hi 👋 」
└┬❖「 ${pushname} 」
┌┤✑ Subscribete al canal:)
││✑ _ConfuMods_
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│✙ 𝗦𝗽𝗲𝗲𝗱 : ⬇️ 
│✙ ${latensie.toFixed(4)} miliseg
│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ⬇️
│✙ ${runtime(process.uptime())}
│✙ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ⬇️
│✙ ${global.botname}
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ⬇️
│✙ ${global.ownername}
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺 : ⬇️
│✙ ${global.owner}
│✙ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ⬇️
│✙ ${os.hostname()}
│✙ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ⬇️
│✙ ${os.platform()}
└┬──────────────┈ ⳹
   │✑ Seleccione un botón
   └───────────────┈ ⳹`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `https://youtube.com/c/ConfuMods`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script🔖',
                                    url: `https://github.com/Confusion245`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍇All Menu🍇',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍒Donar🍒',
                                    id: `${prefix}donar`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                cnf.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break    


case 'reaccion': case 'reacciona': {
 cnf.relayMessage(m.chat, {
			reactionMessage: {
				key: {
					id: m.quoted.id,
					remoteJid: m.chat,
					fromMe: true
				},
				text: text
			}
		}, {
			messageId: m.quoted.id
		})
		}
		    break

case 'allmenu':

anu = `┏━「 *🐣𝙼𝙰𝚁𝚈-𝙱𝙾𝚃-𝙼𝙳🐣* 」━⭓ 
┃╔══✪「 *MAIN* 」
┃║ 
┃╠ *${prefix}ping*
┃╠ *${prefix}owner*
┃╠ *${prefix}menu*
┃╠ *${prefix}delete*
┃╠ *${prefix}infochat*
┃╠ *${prefix}quoted*
┃╠ *${prefix}listpc*
┃╠ *${prefix}listgc*
┃╠ *${prefix}sendbuffer*
┃╠ *${prefix}listonline*
┃╠ *${prefix}simi*
┃║
┃╠══════✪「 *OWNER* 」	
┃╠ *$*
┃╠ *=>*
┃╠ *>*
┃╠ *${prefix}mode*
┃╠ *${prefix}setmenu*
┃╠ *${prefix}setprefix*
┃╠ *${prefix}chat* [option]
┃╠ *${prefix}join* [link]
┃╠ *${prefix}leave*
┃╠ *${prefix}block* @user
┃╠ *${prefix}unblock* @user
┃╠ *${prefix}bcgroup* [text]
┃╠ *${prefix}bcall* [text]
┃╠ *${prefix}setppbot* [image]
┃║
┃╠══════✪「 *GRUPO* 」	
┃╠ *${prefix}linkgroup*
┃╠ *${prefix}antilink* [enable/disable]
┃╠ *${prefix}ephemeral* [option]
┃╠ *${prefix}setppgc* [image]
┃╠ *${prefix}setname* [text]
┃╠ *${prefix}setdesc* [text]
┃╠ *${prefix}group* [option]
┃╠ *${prefix}editinfo* [option]
┃╠ *${prefix}editinfo* [option]
┃╠ *${prefix}add* @user
┃╠ *${prefix}kick* @user
┃╠ *${prefix}hidetag* [text]
┃╠ *${prefix}tagall* [text]
┃╠ *${prefix}promote* @user
┃╠ *${prefix}demote* @user
┃╠ *${prefix}vote* [text]
┃╠ *${prefix}devote*
┃╠ *${prefix}upvote*
┃╠ *${prefix}cekvote*
┃╠ *${prefix}hapusvote*
┃║
┃╠══════✪「 *DESCARGAS* 」	
┃╠ *${prefix}tiktok* [url]
┃╠ *${prefix}tiktokaudio* [url]
┃╠ *${prefix}tiktoknowm* [url]
┃╠ *${prefix}instagram* [url]
┃╠ *${prefix}twitter* [url]
┃╠ *${prefix}twittermp3* [url]
┃╠ *${prefix}facebook* [url] 
┃╠ *${prefix}pinterestdl* [url]
┃╠ *${prefix}ytmp3* [url]
┃╠ *${prefix}ytmp4* [url]
┃╠ *${prefix}getmusic* [query]
┃╠ *${prefix}getvideo* [query]
┃╠ *${prefix}joox* [query]
┃╠ *${prefix}soundcloud* [url]
┃╠ *${prefix}ttnowm* [url]
┃╠ *${prefix}ttaudio* [url]
┃║
┃╠══════✪「 *TOOLS* 」	
┃╠ *${prefix}toimage*
┃╠ *${prefix}removebg*
┃╠ *${prefix}sticker*
┃╠ *${prefix}emojimix*
┃╠ *${prefix}tovideo*
┃╠ *${prefix}togif*
┃╠ *${prefix}tourl*
┃╠ *${prefix}tovn*
┃╠ *${prefix}tomp3*
┃╠ *${prefix}toaudio*
┃╠ *${prefix}ebinary*
┃╠ *${prefix}dbinary*
┃║
┃╠══════✪「 *RANDOM* 」	
┃╠ *${prefix}coffe*
┃╠ *${prefix}quotesanime*
┃╠ *${prefix}motivasi*
┃╠ *${prefix}dilanquote*
┃╠ *${prefix}bucinquote*
┃╠ *${prefix}katasenja*
┃╠ *${prefix}puisi* 
┃╠ *${prefix}ppcp*
┃╠ *${prefix}anime*
┃╠ *${prefix}waifu*
┃╠ *${prefix}husbu*
┃╠ *${prefix}neko*
┃╠ *${prefix}shinobu*
┃╠ *${prefix}megumin*
┃╠ *${prefix}loli*
┃║
┃╠══════✪「 *SEARCH* 」	
┃╠ *${prefix}play* [query]
┃╠ *${prefix}yts* [query]
┃╠ *${prefix}google* [query]
┃╠ *${prefix}gimage* [query]
┃╠ *${prefix}pinterest* [query]
┃╠ *${prefix}wallpaper* [query]
┃╠ *${prefix}wikimedia* [query] 
┃╠ *${prefix}ytsearch* [query]
┃╠ *${prefix}ringtone* [query]
┃║
┃╠══════✪「 *DATABASE* 」	
┃╠ *${prefix}setcmd*
┃╠ *${prefix}listcmd*
┃╠ *${prefix}delcmd*
┃╠ *${prefix}lockcm*
┃╠ *${prefix}addmsg*
┃╠ *${prefix}listmsg*
┃╠ *${prefix}getmsg*
┃╠ *${prefix}delmsg*
┃║
┃╠══════✪「 *GAMES* 」	         
┃╠ *${prefix}tictactoe*
┃╠ *${prefix}suitpvp*
┃║
┃╠══════✪「 *AUDIO* 」
┃╠ *${prefix}bass*
┃╠ *${prefix}tupai*
┃╠ *${prefix}nightcore*
┃╠ *${prefix}reverse*
┃╠ *${prefix}slow*
┃╠ *${prefix}robot*
┃╠ *${prefix}fat*
┃╠ *${prefix}earrape*
┃╠ *${prefix}fast*
┃╠ *${prefix}deep*
┃╠ *${prefix}blown*
┃║
┃╠══════✪「 *TEXTPRO* 」	
┃╠ *${prefix}neonc*
┃╠ *${prefix}water_pipe*
┃╠ *${prefix}blackpink*
┃╠ *${prefix}halloween*
┃╠ *${prefix}fiction*
┃╠ *${prefix}discovery*
┃╠ *${prefix}demon*
┃╠ *${prefix}glass*
┃╠ *${prefix}neon2*
┃║
┃╠══════✪「 *PHOTOOXY* 」	
┃╠ *${prefix}shadow*
┃╠ *${prefix}romantic*
┃╠ *${prefix}smoke*
┃╠ *${prefix}burnpapper*
┃╠ *${prefix}naruto*
┃╠ *${prefix}lovemsg*
┃╠ *${prefix}grassmsg*
┃╠ *${prefix}lovetext*
┃╠ *${prefix}coffecup*
┃╠ *${prefix}butterfly*
┃╠ *${prefix}harrypotter*
┃╠ *${prefix}retrolol*
┃║
┃╠══════✪「 *EPHOTO* 」	
┃╠ *${prefix}ffcover*
┃╠ *${prefix}crossfire*
┃╠ *${prefix}galaxy*
┃╠ *${prefix}glass*
┃╠ *${prefix}neon*
┃╠ *${prefix}beach*
┃╠ *${prefix}blackpink*
┃╠ *${prefix}igcertificate*
┃╠ *${prefix}ytcertificate*
┃║
┗━「 *By ${ownername}* 」━⭓` 
latensia = performance.now()
res = `┌─❖
│「 *🐣𝙼𝙰𝚁𝚈-𝙱𝙾𝚃-𝙼𝙳🐣* 」
└─❖`
            let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/confumods'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner',
                                    phoneNumber: '+56 9 9944 8163'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/zyy.jpg')
                      
                      cnf.send5ButImg(m.chat, anu, res, fatihgans, btn)                    
break     

/*case 'wm': {
 if (!m.quoted) throw `Etiqueta de respuesta con comando *${usedPrefix + command}*`
  let stiker = false
let { addExif } = require('./lib/sticker.js')

  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Etiqueta el sticker!'
    let img = await m.quoted.download()
    if (!img) throw 'Etiqueta una imagen!'
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
   if(stiker) cnf.sendVideoAsSticker(m.chat, stiker, m, { packname: global.packname, author: global.author })
    else m.reply('¡Error\nIntenta enviar y responder a un sticker')
  }
}

break*/


        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Hay un juego em curso justo ahora'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Jugadores encontrados!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Esperando... @${room.game.currentTurn.split('@')[0]}

Escribir *perdí* para rendirse y admitir la derrota`
            if (room.x !== room.o) await cnf.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await cnf.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Esperando a tu oponente' + (text ? ` Escriba el comando a continuación ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            cnf.sendText(m.chat, `Elimine la sesión con éxito de TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`No hay session de TicTacToe activa`)
            } else throw '?'
            } catch (e) {
            m.reply('Error')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Completa tu partida primero`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`No puedo jugar conmigo mismo :)`)
            if (!m.mentionedJid[0]) return m.reply(`_¿A quién quieres desafiar?_\nEtiqueta a la persona..\n\nEjemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `La persona a la que estás desafiando está jugando con otra persona :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} desafia a @${m.mentionedJid[0].split`@`[0]} para jugar Piedra Papel oh Tijeras

Por favor @${m.mentionedJid[0].split`@`[0]} escribir aceptar/rechazar`
            this.suit[id] = {
            chat: await cnf.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) cnf.sendText(m.chat, `_Tiempo de espera del juego_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donar': case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                m.reply(`*── 「 DONACIONES 」 ──*
                
Xd Perdón pero no acepto donasiones viva la humildad :-O`), { quoted: m }
            }
            break
            case 'script': case 'sc': {
                m.reply('*── 「 SCRIPT 」 ──*\n •MARY-BOT-MD : https://github.com/Confusion245/?\nPerdon aun no lo he publicado:(')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (q) throw 'Opciones : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
try {

                if (args[0] === 'mute') {
                    cnf.chatModify({ mute: 'Infinity' }, m.chat, [])
                } else if (args[0] === 'unmute') {
                    cnf.chatModify({ mute: null }, m.chat, [])
                } else if (args[0] === 'archive') {
                    cnf.chatModify({  archive: true }, m.chat, [])
                } else if (args[0] === 'unarchive') {
                    cnf.chatModify({ archive: false }, m.chat, [])
                } else if (args[0] === 'read') {
                    cnf.chatModify({ markRead: true }, m.chat, [])
                } else if (args[0] === 'unread') {
                    cnf.chatModify({ markRead: false }, m.chat, [])
                } else if (args[0] === 'delete') {
                    cnf.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, [])
                }
} catch { 
		console.log(err)
		}
            }
            break
           case 'unete': case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Donde esta el link?'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                m.reply(mess.wait)
try {
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await cnf.groupAcceptInvite(result)
} catch { 
		console.log(err)
		}
            }
            break
            case 'salte': case 'leave': {
                if (!isCreator) throw mess.owner
try {
                await cnf.groupLeave(m.chat)
                } catch { 
		console.log(err)
		}
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
try {
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'remove')

		} catch { 
		console.log(err)
		}
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
try {

		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'add')
} catch { 
		console.log(err)
		}
			}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
try {

		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'promote')
} catch { 
		console.log(err)
		}
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
try {

		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.groupParticipantsUpdate(m.chat, [users], 'demote')
} catch { 
		console.log(err)
		}
	}
	break
	case 'setmenu':{
if (!isCreator) return m.reply('Este comando solo puede ser utilizado por mi creador.')
if(args.length === 1)return m.reply('Opciones  img/loc')
if (args[0].toLowerCase() === 'img'){
global.modelMenu = 'ImgButton'
m.reply('Listo:)')
} else if (args[0].toLowerCase() === 'loc'){
global.modelMenu = 'LocButton'
m.reply('Yap')
}
}
break
        case 'block': {
		if (!isCreator) throw mess.owner
try {

		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.updateBlockStatus(users, 'block')
} catch { 
		console.log(err)
		}
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
try {

		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await cnf.updateBlockStatus(users, 'unblock')
} catch { 
		console.log(err)
		}
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Y el texto ?'
try {

                await cnf.groupUpdateSubject(m.chat, text)
} catch { 
		console.log(err)
		}
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Y el texto ?'
try {

                await cnf.groupUpdateDescription(m.chat, text)
} catch { 
		console.log(err)
		}
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Enviar/Responder a una imagen con ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder a una imagen con ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder a una imagen con ${prefix + command}`
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                await cnf.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Enviar/Responder a una imagen con ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder a una imagen con ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder a una imagen con ${prefix + command}`
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                await cnf.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Mensaje : ${q ? q : '#ConfuMeDomina'}*\n\n`
                for (let mem of participants) {
                teks += `➣ @${mem.id.split('@')[0]}\n`
                }
                cnf.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            cnf.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Una votación en este grupo aun no ha culminado_\n\n*${prefix}delvote* - para eliminar el voto`
            if (!text) throw `Ingrese el motivo de la votación, ejemplo: *${prefix + command} Confu es Apuesto y dan ganas de ###### y luego #@($($+3 y para terminar darle +#+#$8@#)2; por el %;$)29$*?#(*`
            m.reply(`¡Comienza la votación!\n\n*${prefix}upvote* - a favor\n*${prefix}devote* - encontra\n*${prefix}cekvote* - para comprobar los votos\n*${prefix}delvote* - para borrar votos`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTO 」*

*Razón:* ${vote[m.chat][0]}

 [ A FAVOR ]
• Total: ${vote[m.chat][1].length}

 [ EN CONTRA ]
• Total: ${vote[m.chat][2].length}

*${prefix}delvote* - para borrar votos`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: cnf.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            cnf.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*No hay votación en este grupo!*_\n\n*${prefix}vote* - para empezar una votacion`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Ya habias votado'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTO 」*

*Razon:* ${vote[m.chat][0]}

 [ A FAVOR ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ EN CONTRA ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}delvote* - para borrar votos`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: cnf.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            cnf.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*No hay votación en este grupo!*_\n\n*${prefix}vote* - para empezar una votacion`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Ya habías votado'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTO 」*

*Razón:* ${vote[m.chat][0]}

 [ A FAVOR ]
 
• Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ EN CONTRA ]
 
• Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}delvote* - para borrar votos`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: cnf.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            cnf.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*No hay votación en este grupo!*_\n\n*${prefix}vote* - para empezar una votacion`
teks_vote = `*「 VOTO 」*

*Razón:* ${vote[m.chat][0]}

 [ A FAVOR ]
 
• Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


 [ EN CONTRA ]
 
• Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}delvote* - para borrar votos


`
cnf.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*No hay votación en este grupo!*_\n\n*${prefix}vote* - para empezar una votacion`
            delete vote[m.chat]
            m.reply('Eliminar con éxito la sesión de votación en este grupo')
	    }
            break
               case 'grupo': case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'cerrar'){
                    await cnf.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Grupo cerrado`))
                } else if (args[0] === 'abrir'){
                    await cnf.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Grupo abierto`))
                } else {
                let buttons = [
                        { buttonId: 'grupo abrir', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'grupo cerrar', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, `Grupo`, cnf.user.name, m)

             }
            }
            break
              case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await cnf.groupInviteCode(m.chat)
                cnf.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nEse es el Link del Gropo : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Introducir enable/disable'
try {

                if (args[0] === 'enable') {
                    await cnf.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                } else if (args[0] === 'disable') {
                    await cnf.sendMessage(m.chat, { disappearingMessagesInChat: false })
                }
} catch { 
		console.log(err)
		}
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'El mensaje no fue enviado por un bot'
                cnf.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
					if (args.length < 1) return m.reply(`para activar usa : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return m.reply('Ya activa')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						m.reply('Activar con éxito la función antienlace')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return m.reply('Desactivada')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						m.reply('Desactivar con éxito la función antienlace')
                } else {
                 let buttons = [
                        { buttonId: 'antilink 1', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink 0', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, `Modo Antilink`, cnf.user.name, m)
                }
             }
             break
      /*       case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                reply(`${cnf.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                reply(`${cnf.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await cnf.sendButtonText(m.chat, buttons, `Mute Bot`, cnf.user.name, m)
                }
             }
             break*/
case 'culik': {
if (!isCreator) throw mess.owner
let pantek = []
              for (let mem of participants) {
              pantek.push(mem.jid)
              }
              cnf.groupParticipantsUpdate(args[0], pantek)
}
break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Donde esta el texto?\n\nEjemplo : ${prefix + command} Confu es re pro`
                let getGroups = await cnf.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Enviar difusión a ${anu.length} Chats grupales, finalización en ${anu.length * 1.5} segundos`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/confumods'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner',
                                    phoneNumber: '+56 9 9944 8163'
                                }
                            }]
                      fatihgans = fs.readFileSync('./media/gambar.jpg')
                      let txt = `「 *MARY - MD* 」\n\n${text}`
                      cnf.send5ButImg(i, txt, cnf.user.name, fatihgans, btn)
                    }
                m.reply(`Envío exitoso de transmisión a ${anu.length} grupos`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Donde esta el texto?\n\nEjemplo : ${prefix + command} Confu es re pro`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Enviar difusión a ${anu.length} Chats, finalización en ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/confumods'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner',
                                    phoneNumber: '+56 9 9944 8163'
                                }
                            }]
                      memei = fs.readFileSync('./media/gambar.jpg')
                      let txt = `「 *MARY - MD* 」\n\n${text}`
                      cnf.send5ButImg(yoi, txt, cnf.user.name, memei, btn)
		}
		m.reply('Listo')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Etqueta un mensaje mio')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'El mensaje no fue enviado por mi :)!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `➣ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━➣ *Tiempo :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➣ *Estado :* ${read ? 'Leido' : 'Sin Leer'}\n\n`
                }
                cnf.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
                if (!m.quoted) m.reply('Etqueta un mensaje mio')
		let wokwol = await cnf.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('El mensaje al que respondió no contiene una respuesta')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LISTA DE CHATS PERSONALES*\n\nTotal : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `➣ *Nombre :* ${nama}\n➣ *Usuario :* @${i.split('@')[0]}\n➣ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 cnf.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LISTA DE GRUPOS*\n\nTotal : ${anu.length} Grupos\n\n`
                 for (let i of anu) {
                     let metadata = await cnf.groupMetadata(i)
                     teks += `➣ *Nombre :* ${metadata.subject}\n➣ *Owner :* @${metadata.owner.split('@')[0]}\n➣ *ID :* ${metadata.id}\n➣ *Creado :* ${moment(metadata.creation * 1000).tz('America/Santiago').format('DD/MM/YYYY HH:mm:ss')}\n➣ *Miembros :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 cnf.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    cnf.sendText(m.chat, 'Lista De Personas Online:\n\n' + online.map(v => '➣ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
             case 'sendbuffer':
var _0xcf553=_0x25c0;(function(_0x400b10,_0x49223f){var _0x20b501=_0x25c0,_0x2f4d4e=_0x400b10();while(!![]){try{var _0x163d37=-parseInt(_0x20b501(0xaf))/0x1*(parseInt(_0x20b501(0xb5))/0x2)+-parseInt(_0x20b501(0xb7))/0x3+-parseInt(_0x20b501(0xae))/0x4+-parseInt(_0x20b501(0xb0))/0x5+-parseInt(_0x20b501(0xad))/0x6+-parseInt(_0x20b501(0xb2))/0x7+parseInt(_0x20b501(0xb4))/0x8*(parseInt(_0x20b501(0xb3))/0x9);if(_0x163d37===_0x49223f)break;else _0x2f4d4e['push'](_0x2f4d4e['shift']());}catch(_0x5a6493){_0x2f4d4e['push'](_0x2f4d4e['shift']());}}}(_0x9aa0,0x20024));function _0x9aa0(){var _0x2a3742=['919398PAPBdY','563776qgXcTK','3901iYjFku','1067580kmVFKA','chat','1656900NKMILT','867501ZKviYr','104kAmDEE','134iPoSQP','reply','348567rDmbXG','done','log'];_0x9aa0=function(){return _0x2a3742;};return _0x9aa0();}function _0x25c0(_0x4a29ae,_0x1139fb){var _0x9aa039=_0x9aa0();return _0x25c0=function(_0x25c076,_0x305a33){_0x25c076=_0x25c076-0xad;var _0x357ecc=_0x9aa039[_0x25c076];return _0x357ecc;},_0x25c0(_0x4a29ae,_0x1139fb);}try{await m[_0xcf553(0xb6)]('Tunggu\x20sebentar...'),sendFile(m[_0xcf553(0xb1)],isUrl(q)[0x0],mess[_0xcf553(0xb8)]);}catch(_0x197c30){m['reply'](_0x197c30),console[_0xcf553(0xb9)](_0x197c30);}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Responder a un video/imagen con ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await cnf.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximo 10 segundos!')
                let media = await quoted.download()
                let encmedia = await cnf.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Enviar imagen/video con ${prefix + command}\nDuración del video 1-9 segundos`
                }
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Enviar/responder un texto con ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Enviar/responder un texto con ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Ejemplo : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await cnf.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Etiqueta un sticker'
                if (!/webp/.test(mime)) throw `Etiqueta un sticker con *${prefix + command}*`
                m.reply(mess.wait)
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    cnf.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Etiqueta'
                if (!/webp/.test(mime)) throw `Etiqueta un sticker con *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await cnf.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '✔️' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envíe/responda un video/audio con ${prefix + command}`
            if (!quoted) throw `Envíe/responda un video/audio con ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            cnf.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Envíe/responda un video/audio con ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envíe/responda un video/audio con ${prefix + command}`
            if (!quoted) throw `Envíe/responda un video/audio con ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            cnf.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `By ${cnf.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envíe/responda un video/audio con ${prefix + command}`
            if (!quoted) throw `Envíe/responda un video/audio con ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            cnf.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Etiquete una imagen'
                if (!/webp/.test(mime)) throw `Etiqueta un sticker con *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await cnf.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '✔️' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Enviar/Responder imagen con ${prefix + command}`
	    if (!/image/.test(mime)) throw `Enviar/Responder imagen con ${prefix + command}`
	    if (/webp/.test(mime)) throw `Enviar/Responder imagen con ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await cnf.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    cnf.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Ejemplo : ${prefix + command} ConfuMods`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Resultados de '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `➣ Número : ${no++}\n➣ Tipo : ${i.type}\n➣ ID : ${i.videoId}\n➣ Título : ${i.title}\n➣ Vistas : ${i.views}\n➣ Duración : ${i.timestamp}\n➣ Publicado : ${i.ago}\n➣ Author : ${i.author.name}\n➣ Url : ${i.url}\n\n─────────────────\n\n`
                }
                cnf.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Ejemplo : ${prefix + command} nezuko`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search de : ${text}\n\n`
                for (let g of res) {
                teks += `➣ *Título* : ${g.title}\n`
                teks += `➣ *Descripción* : ${g.snippet}\n`
                teks += `➣ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Ejemplo : ${prefix + command} Nezuko`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [{buttonId: `gimage ${text}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🔗 *Url* : ${images}`,
                    footer: cnf.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Ejemplo : ${prefix + command} entre nosotros remix`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    zakki = `
➣ Título : ${anu.title}
➣ Ext : Search
➣ ID : ${anu.videoId}
➣ Duración : ${anu.timestamp}
➣ Vistas : ${anu.views}
➣ Publicado : ${anu.ago}
➣ Author : ${anu.author.name}
➣ Canall : ${anu.author.url}
➣ Descripción : ${anu.description}
➣ Url : ${anu.url}`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   cnf.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: zakki,
                            hydratedFooterText: `Buscando ${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'UrL Video',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Audio',
                                    id: `ytmp3 ${anu.url} 128kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: 'VIdeo',
                                    id: `ytmp4 ${anu.url} 480p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  cnf.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Ejemplo : ${prefix + command} https://youtu.be/sidPTvbTv9o 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 10000000) return m.reply('Archivo por encima del límite'+util.format(media))
                cnf.sendImage(m.chat, thumbnail, `➣ Título : ${title}\n➣ Peso : ${media[0].formattedSize}\n➣ Url : ${url}\n➣ Ext : MP3\n➣ Resolución : ${args[1] || '128kbps'}`, m)
                cnf.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Ejemplo : ${prefix + command} https://youtu.be/sidPTvbTv9o 480p`
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(text, quality)
                if (media.filesize >= 10000000) return m.reply('Archivo por encima del límite '+util.format(media))
                cnf.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➣ Título : ${media.title}\n⭔ Peso : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolución : ${args[1] || '480p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                if (!text) throw `Ejemplo : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Etiqueta')
                if (!m.quoted.isBaileys) throw `Solo puede responder a los mensajes de el bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return m.reply('Archivo por encima del límite'+util.format(media))
                cnf.sendImage(m.chat, thumbnail, `➣ Título : ${title}\n➣ Peso : ${media[0].formattedSize}\n➣ Url : ${url}\n➣ Ext : MP3\n➣ Resolución : ${args[1] || '128kbps'}`, m)
                cnf.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                if (!text) throw `Ejemplo : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Etiqueta')
              if (!m.quoted.isBaileys) throw `Solo puede responder a los mensajes de el bot`
                  let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Tal vez el mensaje que respondiste no contiene el resultado de ytsearch`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(urls[text - 1])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100000) return m.reply('Archivo por encima del límite'+util.format(media))
                cnf.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `➣ Título : ${title}\n➣ Peso : ${media[0].formattedSize}\n➣ Url : ${url}\n➣ Ext : MP4\n➣ Resolución : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                cnf.sendMessage(m.chat, { image: { url: result }, caption: '➣ Url : '+result }, { quoted: m })
            }
            break
case 'waifu':
m.reply('Cargando...')
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
sendFile(m.chat, data.url, 'Listo ✔️')
})
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'waifu':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold': {
textImg('Cargando...')
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
sendFile(from, data.url, mess.done)
})
}
break			
	    case 'couple': case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                cnf.sendMessage(m.chat, { image: { url: random.male }, caption: `Mitad de el Hombre` }, { quoted: m })
                cnf.sendMessage(m.chat, { image: { url: random.female }, caption: `Mitad de la Mujer` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Coffe`,
                    footer: cnf.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Y el texto?'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `➣ Título : ${result.title}\n➣ Categoría : ${result.type}\n➣ Detalles : ${result.source}\n➣ Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: cnf.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Y el texto'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `➣ Título : ${result.title}\n➣ Fuente : ${result.source}\n➣ Url : ${result.image}`,
                    footer: cnf.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'mode': case 'set': {
        const buttons = [
{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF'}, type: 1},
{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttonMessage = {
text: "Seleccione uno",
footerText: 'Hi Owner',
buttons: buttons,
headerType: 1
}
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break            
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Presione el botón de abajo',
                    buttons: buttons,
                    headerType: 2
                }
                cnf.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Ejemplo : ${prefix + command} texto`
                m.reply(mess.wait)
                cnf.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `TextPro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw `Ejemplo : ${prefix + command} texto`
                m.reply(mess.wait)
                cnf.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `PhotoOxy ${command}` }, { quoted: m })
            }
            break
            case 'neonc': case 'water_pipe': case 'blackpink': case 'halloween': case 'fiction': case 'discovery': case 'demon': case 'glass': case 'neon2': {
               if (!text) throw `Ejemplo : ${prefix + command} texto`
                 m.reply(mess.wait)
                cnf.sendMessage(m.chat, { image: { url: `https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${text}&apikey=${apialpha}` }, caption: `𝚃𝙴𝚇𝚃𝙿𝚁𝙾: ${command}` }, { quoted: m })
            }
            break
            case 'signo': case 'zodiak': case 'zodiac': {
                if (!text) throw `Ejemplo : ${prefix+ command} 13 5 1999`
                let zodiak = [
                    ["Capricornio", new Date(1970, 0, 1)],
                    ["Acuario", new Date(1970, 0, 20)],
                    ["Piscis", new Date(1970, 1, 19)],
                    ["Aries", new Date(1970, 2, 21)],
                    ["Tauro", new Date(1970, 3, 21)],
                    ["Geminis", new Date(1970, 4, 21)],
                    ["Cancer", new Date(1970, 5, 22)],
                    ["Leo", new Date(1970, 6, 23)],
                    ["Virgo", new Date(1970, 7, 23)],
                    ["Libra", new Date(1970, 8, 23)],
                    ["Escorpio", new Date(1970, 9, 23)],
                    ["Sagitario", new Date(1970, 10, 22)],
                    ["Capricornio", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                cnf.sendText(m.chat, `➣ *Zodiaco :* ${anu.message.zodiak}\n➣ *Número :* ${anu.message.nomor_keberuntungan}\n➣ *Aroma :* ${anu.message.aroma_keberuntungan}\n➣ *Planeta :* ${anu.message.planet_yang_mengitari}\n➣ *Flor :* ${anu.message.bunga_keberuntungan}\n➣ *Color :* ${anu.message.warna_keberuntungan}\n➣ *Roca :* ${anu.message.batu_keberuntungan}\n➣ *Elemento :* ${anu.message.elemen_keberuntungan}\n➣ *Pareja del zodiaco :* ${anu.message.pasangan_zodiak}`, m)
            }
            break
            
case 'tiktok': {
if (q) m.reply(`Enviar ${command} link`)

m.reply('Cargando...')
xfar.Tiktok(q).then( data => {
  cnf.sendMessage(m.chat, {
 video: { url: data.medias[0].url },
 caption: `${data.title}\n\nPuede convertirlo a video sin marca de agua o audio, ¡presione el botón a continuación para cambiarlo!`,
 buttons: [{buttonId: `${prefix}tiktoknowm ${args[0]} ${m.sender}`, buttonText: { displayText: "Sin Marca de agua" }, type: 1 }],
 footer: "Para cambiar a audio, use el #tiktokaudio [link]"
  }, { quoted: m })
})
}
break




case 'ttnowm':
if (q) m.reply(`Enviar ${command} link`)
m.reply('Cargando...')
hx.ttdownloader(args[0]).then( data => {
  cnf.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
break

case 'ttaudio':
if (q) m.reply(`Enviar ${command} link`)
m.reply('Cargando...')
hx.ttdownloader(q).then( data => {
  cnf.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
	break

case 'tiktoknowm':
if (q) m.reply(`Enviar ${command} link`)
 if (!isUrl(q)) throw m.reply('Donde esta el link?!')
if (q.includes('tiktok'))
m.reply('Cargando...')
hx.ttdownloader(q).then( data => {
  cnf.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})

break

case 'tiktokaudio': 
if (q) m.reply(`Enviar ${command} link`)
 if (!isUrl(q)) throw m.reply('Donde esta el link?!')
if (q.includes('tiktok'))
m.reply('Cargando...')
xfar.Tiktok(q).then( data => {
  cnf.sendMessage(m.chat, { audio: { url: data.medias[2].url }, mimetype: 'audio/mp4' }, { quoted: m })})
break
	break
	
/*            case 'joox': case 'jooxdl': {
                if (!text) throw 'Y el texto?'
                m.reply('Error')
            }
            break*/
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'Y el texto?'
                let anu = await fetchJson(api('xteam', '/dl/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await cnf.sendImage(m.chat, anu.result.thumb, `➣ Título : ${anu.result.title}\n➣ Url : ${isUrl(text)[0]}`)
                cnf.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: m })
            }
            break
case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
if (q) m.reply(`Enviar ${command} link`)
await m.reply(mess.wait)
xfar.Twitter(q).then(async data => {
let txt = ('p')
cnf.sendMessage(m.chat,{ video: { url: data.medias[1].url}},txt,m)})

break
case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':
if (q) m.reply(`Enviar ${command} link`)
await m.reply(mess.wait)
xfar.Facebook(q).then(async data => {
let txt = `*FACEBOOK DOWNLOADER*\n\n`
txt += `*Título :* ${data.title}\n`
txt += `* Tipo :* ${data.medias[0].extension}\n`
txt += `*Calidad :* ${data.medias[0].quality}\n`
txt += `*Peso :* ${data.medias[0].formattedSize}\n`
txt += `*Url :* ${data.url}`
sendFile(m.chat,data.medias[0].url,txt,msg)
})

break

case 'ig': case 'igdl': case 'instagram': case 'instagramdl':
if (q) m.reply(`Enviar ${command} link`)
 m.reply(mess.wait)
xfar.Instagram(q).then(async data => {
let txt = `*Instagram Downloader*\n\n`
txt += `*Título :* ${data.title}\n`
txt += `*Total :* ${data.medias.length}\n`
txt += `*Url :* ${data.url}\n\n`
txt += `*Espera un minuto, se están enviando tu pedido...*`
 m.reply(txt).then(async res => {
for (let i of data.medias) {
sendFile(m.chat, i.url, '', res)
}
})
})
break
	      /*  case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Ingrese el enlace!'
                m.reply('Error')
            }
            break*/
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await cnf.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                cnf.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda al audio que desea cambiar con *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Etiqueta!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash perdido'
                if (!text) throw `Y el comando?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'No tienes permiso para cambiar este comando'
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Listo!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'No tienes permiso para borrar este comando'              
                delete global.db.sticker[hash]
                m.reply(`Listo!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista de comandos*
Información: *negrita* hash está bloqueado
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                cnf.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'creditos': case 'credits': case 'tqto': case 'thanksto': case 'tq': {
            tq = `*｢  CRÉDITOS  ｣*
[•] The Shadow Brokers
[•] Zeeoneofc
[•] Samu330
[•] All Bot Creator`
const _0x3e0756=_0x9f77;(function(_0x1010fc,_0x2d3bb8){const _0x49a73d=_0x9f77,_0x7b9540=_0x1010fc();while(!![]){try{const _0x1f2c66=-parseInt(_0x49a73d(0xd6))/0x1*(-parseInt(_0x49a73d(0xd9))/0x2)+-parseInt(_0x49a73d(0xd3))/0x3*(parseInt(_0x49a73d(0xcf))/0x4)+parseInt(_0x49a73d(0xce))/0x5+parseInt(_0x49a73d(0xc7))/0x6+-parseInt(_0x49a73d(0xd7))/0x7+-parseInt(_0x49a73d(0xca))/0x8+parseInt(_0x49a73d(0xc9))/0x9*(parseInt(_0x49a73d(0xda))/0xa);if(_0x1f2c66===_0x2d3bb8)break;else _0x7b9540['push'](_0x7b9540['shift']());}catch(_0x5a883f){_0x7b9540['push'](_0x7b9540['shift']());}}}(_0x1306,0x31b20));const template=generateWAMessageFromContent(m[_0x3e0756(0xd2)],proto['Message'][_0x3e0756(0xd4)]({'templateMessage':{'hydratedTemplate':{'hydratedContentText':tq[_0x3e0756(0xd1)](),'locationMessage':{'jpegThumbnail':fs['readFileSync'](_0x3e0756(0xcb))},'hydratedFooterText':_0x3e0756(0xd5),'hydratedButtons':[{'urlButton':{'displayText':'Instagram','url':_0x3e0756(0xd8)}},{'callButton':{'displayText':'Nomor\x20Owner','PhoneNumber':'+6289503657396'}},{'quickReplyButton':{'displayText':'Speed','id':_0x3e0756(0xcc)}},{'quickReplyButton':{'displayText':'Script','id':'.sc'}},{'quickReplyButton':{'displayText':'Owner','id':_0x3e0756(0xc6)}}]}}}),{'userJid':m['sender'],'quoted':m});cnf[_0x3e0756(0xcd)](m[_0x3e0756(0xd2)],template[_0x3e0756(0xc8)],{'messageId':template[_0x3e0756(0xd0)]['id']});function _0x9f77(_0x5c0a98,_0x544892){const _0x130693=_0x1306();return _0x9f77=function(_0x9f7727,_0x345a1f){_0x9f7727=_0x9f7727-0xc6;let _0x2705a6=_0x130693[_0x9f7727];return _0x2705a6;},_0x9f77(_0x5c0a98,_0x544892);}function _0x1306(){const _0x342083=['.owner','1109034AAtfMM','message','418203DiqzHB','2972888aTooYm','./media/cnf.jpg','.ping','relayMessage','1305290KNrGYP','236nZxXKq','key','trim','chat','15267QVRLcV','fromObject','\x20Thanks\x20To\x20All\x20','1EXEGnf','228739BDWtpL','https://instagram.com/confumods/','87982AsXiZl','90rDTNxv'];_0x1306=function(){return _0x342083;};return _0x1306();}
}
break

            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Etiqueta!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash?'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) throw 'Hash no encontrado en la base de datos'
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Listo!')
            }
            break
            case 'igstalk': {
if(q) m.reply('Username?')
fetchJson(api('anto','/api/igstalk',{username:q},'apikey')).then(async i =>{
let woi = `*「 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 」*

_Username : ${i.username}_
_Nickname : ${i.fullname}_
_Url : https://instagram.com/${q}_
_Verificado : ${i.verified}_
_Seguidores : ${i.followers}_
_Siguiendo : ${i.follow}_
_Categoria : ${i.category}_
_Bio : ${i.bio}_`
sendFile(m.chat ,i.thumbnail,woi, m)
})
}
break
case "setprefix": 
if (q) return m.reply("Selecciona : [multi/nopref]")
if (q == "multi") {
cnf.nopref = false
cnf.multi = true
m.reply("Éxito en el cambio de prefix a "+q)
} else if (q == "nopref") {
cnf.multi = false
cnf.nopref = true
m.reply("Éxito en el cambio de prefix a "+q)
} else {
cnf.nopref = false
cnf.multi = false
cnf.prefa = q
m.reply("Éxito en el cambio de prefix a "+q)
}
break
case 'activo': case 'testt':case 'runtime':
rt = `*Tiempo activo : ${runtime(process.uptime())}*`.trim()
m.reply(rt)
break
           
              case prefix+'simi':
   if (m.isGroup)return m.reply("Solo se puede hacer en chat privado.:)")
  const cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=es`)
  cnf.sendMessage(m.chat, { text: cimcimi.success})
  break
            case 'public': {
                if (!isCreator) throw mess.owner
                cnf.public = true
                m.reply('Cambio exitoso al uso público')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                cnf.public = false
                m.reply('Cambio exitoso al uso privado')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milisegundos_\n\nTiempo activo : ${runtime(process.uptime())}

💻 Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memoria
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'confu': case 'creador': case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;Confu;;;'
    + 'FN:ConfuMods\n'
    + 'ORG:ConfuMods;\n'
    + 'item1.TEL;type=CELL;type=VOICE;waid=56999448163:+56999448163\n' 
    + 'item1.X-ABLabel:Owner\n'
    + 'item2.EMAIL;type=INTERNET: confumodsjsjsjxd@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/confumods\n'
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;Chile;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
cnf.sendMessage(m.chat, { contacts: { displayName: 'ConfuMods', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    cnf.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        console.log(err)
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
