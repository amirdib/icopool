import json
from bottle import Bottle

from utils.cors import enable_cors

app = Bottle()
app.install(enable_cors)


f = open("data/chainlink_participants.json")
data = json.loads(f.read())


@app.get('/participants')
def get_participants():
    return json.dumps(data)


@app.get('/chainlink/<name>/<value>')
def update_ico(name, value):
    data.append({"name": name, "name_full": value})


app.run(host='localhost', port=7090)
