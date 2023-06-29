const fs = require('fs')
const chalk = require('chalk')
// Website Api
global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': 'zenzkey_945a0b8a03c5',
}
// Other
global.namabot = 'lenttobs'
global.namaowner = 'asuu'
global.linkgrub =``
global.limits = '🅛'
global.premiums= '🅟'
global.thumb = `https://telegra.ph/file/d3914f9cb2ca6baee708f.jpg`
global.masukantext = 'text'
global.masukantextsatudua = 'text1-text2'
global.masukangambar = 'reply/sendimg'
global.masukanurl = 'Url/link'
global.masukanjudul = 'Judul'
global.masukanreply = 'reply'
global.simbolmmk = '友'
global.react1 = `🕦`
global.react2 = `👌`
global.owner = ['6285791762177']
global.premium = ['6285693352917','628xxxx']// add in aja sendiri prem nya waktunya Mepet soalnya jd ga smpt buat addprem kalau mau buat nomornya jdi premium tambhn aja gini ',' contoh ['628xxxx','682xxx','628xxx]dan seterusnya 
global.packname = 'tobi'
global.author = 'WhatsApp Bot'
global.sessionName = 'lenttobs'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
