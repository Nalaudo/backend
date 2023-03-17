import { PORT, MONGO_CONNECTION, SECRET } from './src/config/config.js';
import express from 'express'
import session from 'express-session';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import http from 'http';
import cors from 'cors'
import MongoStore from 'connect-mongo';
import connectMG from './src/utils/mongoConnect.js'
import passport from 'passport';
import passportConfig from './src/config/passport.js';
import { Server as ioServer } from 'socket.io';
import socket from './src/utils/socket.js';

import routerCart from './src/routes/cart.js';
import routerCheckout from './src/routes/checkout.js';
import routerInfo from './src/routes/info.js';
import routerInorganics from './src/routes/inorganics.js';
import routerLogin from './src/routes/login.js';
import routerLogout from './src/routes/logout.js';
import routerNotFound from './src/routes/notFound.js';
import routerOrganics from './src/routes/organics.js';
import routerProd from './src/routes/prod.js';
import routerProfile from './src/routes/profile.js';
import routerRandoms from './src/routes/randoms.js';
import routerRoot from './src/routes/root.js';
import routerSignup from './src/routes/signup.js';
import routerTest from './src/routes/test.js';

const __dirname = dirname(fileURLToPath(import.meta.url))

class ExpressServer {
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app)
        this.ioServer = new ioServer(this.server)
    }

    middlewares = () => {
        this.app.use(cors())
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/public', express.static(__dirname + '/public'));
        this.app.set('view engine', 'ejs');
        if (process.env.PERSISTENCY === 'mongo') {
            this.app.use(session({
                store: MongoStore.create({
                    mongoUrl: MONGO_CONNECTION,
                    mongoOptions: {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                    },
                }),
                secret: SECRET,
                resave: false,
                saveUninitialized: false,
                cookie: {
                    maxAge: 600000 //10 mins
                }
            }));
        } else if (process.env.PERSISTENCY === 'mem') {
            this.app.use(session({
                secret: SECRET,
                resave: false,
                saveUninitialized: false,
                cookie: {
                    maxAge: 600000 //10 mins
                }
            }));
        }
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    database = () => {
        connectMG();
    }

    passport = () => {
        passportConfig(passport)
    }

    socket = () => {
        socket(this.ioServer)
    }

    routes = () => {
        this.app.use('/cart', routerCart)
        this.app.use('/checkout', routerCheckout)
        this.app.use('/info', routerInfo)
        this.app.use('/inorganics', routerInorganics)
        this.app.use('/login', routerLogin)
        this.app.use('/logout', routerLogout)
        this.app.use('/organics', routerOrganics)
        this.app.use('/prod', routerProd)
        this.app.use('/profile', routerProfile)
        this.app.use('/api/randoms', routerRandoms)
        this.app.use('/', routerRoot)
        this.app.use('/signup', routerSignup)
        this.app.use('/api/productosTest', routerTest)
        this.app.use('*', routerNotFound)
    }

    listen = () => {
        this.middlewares()
        this.database()
        this.passport()
        this.socket()
        this.routes()
        this.server.listen(PORT, () => {
            console.log(`Server: http://localhost:${PORT}`);
        });
    }
}

const expressServer = new ExpressServer();

export default expressServer;