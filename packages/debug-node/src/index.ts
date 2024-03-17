import http from 'http'
import {MyUtil} from 'lib-a'

const utl = new MyUtil()

const server = http.createServer((req, res) => {
    res.writeHead(200)
    const calc = utl.doCalc()
    res.end(calc)
})
server.listen(3000)