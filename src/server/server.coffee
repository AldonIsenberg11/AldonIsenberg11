
express   = require("express")
cors      = require('cors')
path      = require('path')

app  = express()

# Middleware
app.use express.json()
app.use cors()

# # Routes
# app.use '/api/wrestlers', wrestlers
# app.use '/api/users', users
# app.use '/api/match', match

# Static folder
# app.use(express.static(path.resolve(__dirname, '../../dist/')))

# Handle SPA
app.get(/.*/, (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')))

port = process.env.PORT || 8081
app.listen port, () => console.log "Express App listening on port #{port}!"
