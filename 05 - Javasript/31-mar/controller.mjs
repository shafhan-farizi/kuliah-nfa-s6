import users from './data.mjs'

const index = () => {
    // tamplikan data
    console.log("\n");
    console.log("=== Daftar User ===");
    users.map((user, index) => {
        console.log(` ${index + 1}. ${user.nama} - ${user.umur} - ${user.alamat} - ${user.email}`);
    })
    console.log("\n");
}

const store = (user) => {
    // tambahkan data
    users.push(user)
    console.log("Data berhasil ditambahkan.");
}

const destroy = (nama) => {
    // hapus data
    const indexHapus = users.findIndex(user => user.nama.toLowerCase() === nama.toLowerCase())

    if(indexHapus !== -1) {
        users.splice(indexHapus, 1)
        console.log(`User ${nama} berhasil dihapus.`);
    } else {
        console.log(`User ${nama} tidak ditemukan.`);
    }


    index()
}

export {index, store, destroy}