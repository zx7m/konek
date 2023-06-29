const fs = require('fs')



// Func Limit Bagian A
exports.isLimit = function(sender, isPremium, islenttobs, limitCount, _db){
    if (islenttobs) return false
    if (isPremium) return false
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let limits = i.limit
            if (limits >= limitCount) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: sender, limit: 0 }
        _db.push(obj)
        fs.writeFileSync('./database/limit.json', JSON.stringify(_db, null, 2))
        return false
    }
}

// func limit buat add
exports.limitAdd = function(sender, _db){
    let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			_db[found].limit += 1
			fs.writeFileSync('./database/limit.json', JSON.stringify(_db, null, 2))
		}
}

//func limit deteksi Untuk di helpnya
exports.getLimit = function(sender, limitCount, _db){
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            found = i
        }
    })
    if (found !== false) {
        return limitCount - _db[found].limit
    } else {
        return limitCount
    }
}

//func bagi limit
exports.giveLimit = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].limit -= duit
        fs.writeFileSync('./database/limit.json', JSON.stringify(_db, null, 2))
    } else {
        const njt = duit - duit - duit
        const bulim = ({
            id: pemain,
            limit: njt
                })
        _db.push(bulim)
        fs.writeFileSync('./database/limit.json', JSON.stringify(_db, null, 2))
    }
}

//func nambah balance 
exports.addBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance += duit
        fs.writeFileSync('./database/balance.json', JSON.stringify(_db, null, 2))
    } else {
        const bulin = ({
            id: sender,
            balance: duit
                })
        _db.push(bulin)
        fs.writeFileSync('./database/balance.json', JSON.stringify(_db, null, 2))
    }
}

//func pengurangan balance
exports.kurangBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance -= duit
        fs.writeFileSync('./database/balance.json', JSON.stringify(_db, null, 2))
    }
}

//func dptin Balance
exports.getBalance = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].balance
    } else {
        return 0
    }
}

//func game 
exports.isGame = function(sender, isPremium, gcount, _db){
    if (isPremium) {return false;}
    let found = false;
    for (let i of _db){
        if(i.id === sender){
            let limits = i.glimit;
            if (limits >= gcount) {
                found = true;
                return true;
            }else{
                found = true;
                return false;
            }
        }
    }
    if (found === false){
        let obj = {id: sender, glimit:0};
        _db.push(obj);
        fs.writeFileSync('./database/glimit.json',JSON.stringify(_db, null, 2));
        return false;
    }
}

//func limit game
exports.gameAdd = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].glimit += 1;
        fs.writeFileSync('./database/glimit.json',JSON.stringify(_db, null, 2));
    }
}

//func gibelmt
exports.givegame = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].glimit -= duit
        fs.writeFileSync('./database/glimit.json', JSON.stringify(_db, null, 2))
    } else {
        const njti = duit - duit - duit
        const bulimi = ({
            id: pemain,
            glimit: njti
                })
        _db.push(bulimi)
        fs.writeFileSync('./database/glimit.json', JSON.stringify(_db, null, 2))
    }
}
exports.cekGLimit = function(sender, gcount, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if(_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return gcount - _db[position].glimit
    } else {
        return gcount
    }
}

//Penambhn doang aslinya ga guna hrusnya bsa pake dribweb hitcount ajg wkk
exports.createHit = function(sender, _db){
    const anohoh = { id: sender, hit: 0 }
    _db.push(anohoh);
    fs.writeFileSync('./database/userhit.json',JSON.stringify(_db, null, 2));''

}
exports.AddHit = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].hit += 1;
        fs.writeFileSync('./database/userhit.json',JSON.stringify(_db, null, 2));
    }
}
exports.gethitUser = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].hit
    }
}
//Tobilntbs