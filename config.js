const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	anto: 'https://hardianto.xyz',
    zenz: 'https://zenzapis.xyz',
}

// Apikey
global.APIKeys = {
        'https://hardianto.xyz': 'hardianto',
        'https://zenzapis.xyz': '7d1e10e532',
        
}

///////\\\\\\\\
global.botname = '𝙼𝙰𝚁𝚈-𝙱𝙾𝚃-𝙼𝙳1'
global.Prefix = 'Multi'
global.modelMenu = 'locButton'
global.owner = ['56999448163']
global.ownername = 'ConfuMods'
global.premium = ['56999448163']
global.meki = '56999448163'
global.ownerNumber = '56999448163'
global.packname = 'MARY-BOT-MD'
global.author = 'By ConfuMods'
global.sessionName = 'session'
global.prefa = ['','!','.','#','/','$']
global.Mode = 'Self'
global.mess = {
    success: 'Listo :)',
    admin: 'Este comando solo puede ser usado por un administrador :v',
    botAdmin: 'Para ejecutar este comando primero debo ser un administrador :)',
    owner: 'Solo mi creador puede utilizar este comando :)',
    group: 'Este comando solo puede utilizarse en grupos!',
    private: 'Este comando solo puedo ejecutarlo en pv',
    bot: 'Este comando solo puedo usuario yo.',
    wait: 'Porfavor espere...',
    done: 'Listo',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
    wrongFormat: '¡Comando incorrecto! \nIncluir enlace después del comando..',
    example1: 'Welcome @user al grupo @subject No olvides leer las reglas. @desc',
    example2: 'Adiós @user', 
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas'
}
global.limitawal = {
    premium: "Infinity",
    free: 100000
}
global.thumb = fs.readFileSync('./media/zyy.jpg')
global.pathImg = fs.readFileSync('./media/gambar.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Se actualizo '${filename}'`))
	delete require.cache[file]
	require(file)
})
