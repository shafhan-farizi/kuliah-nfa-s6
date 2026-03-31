import { index, store, destroy } from "./controller.mjs"

const main = () => {
    // tambahkan 2 data
    index()
    store({nama: 'Ahmad Cortisoal', umur: 21, alamat: "Jl. Raya No. 5", email: "cortisoal@example.com"})
    store({nama: 'Jin Ming', umur: 40, alamat: "Jl. Maya No. 91", email: "jinming@example.com"})
    index()
    destroy("Andi")
}

main()